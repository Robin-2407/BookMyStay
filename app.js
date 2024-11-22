const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listings.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const listingSchema = require("./schema.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/BookMyStay";

// Connect to MongoDB
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("Error connecting to DB:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Add this middleware
app.use(methodOverride("_method"));

// ejs-mate
app.engine("ejs", ejsMate);

// Routes
app.get("/", (req, res) => {
  res.send("Hii, I am Root");
});

// Index Route
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
  })
);

// new route
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);

  if (error) {
    throw new ExpressError(
      400,
      error.details.map((err) => err.message).join(", ")
    );
  } else {
    next();
  }
};

// Create Route
app.post(
  "/listings",
  validateListing,
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body);
    await newListing.save();
    res.redirect("/listings");
  })
);

// Edit Route - Show Edit Form
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/edit", { listing });
  })
);

// Update Route - Handle Form Submission
app.put(
  "/listings/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    const listingData = req.body;
    if (listingData.amenities && !Array.isArray(listingData.amenities)) {
      listingData.amenities = [listingData.amenities];
    }
    await Listing.findByIdAndUpdate(req.params.id, listingData);
    res.redirect(`/listings/${req.params.id}`);
  })
);

//show route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show", { listing });
  })
);

// Delete Route - Handle Deletion
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    try {
      await Listing.findByIdAndDelete(req.params.id);
      res.redirect("/listings"); // Redirect to the listings page after deletion
    } catch (err) {
      console.error("Error deleting listing:", err);
      res.status(500).send("Error deleting listing");
    }
  })
);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("listings/error", { message, error: err });
});

// Uncomment for testing listing creation
// app.get("/testListing", async (req, res) => {
//     try {
//         let sampleListing = new Listing({
//             title: "My new Villa",
//             description: "By the Beach",
//             price: 1200,
//             location: "Nagpur, Maharashtra",
//             country: "India",
//         });
//         await sampleListing.save();
//         console.log("Sample was Saved");
//         res.send("Successful test");
//     } catch (err) {
//         console.error("Error saving listing:", err);
//         res.status(500).send("Error saving listing");
//     }
// });

// Start the server
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
