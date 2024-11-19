const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listings.js");
const path = require("path");
const methodOverride = require("method-override");

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
app.use(express.urlencoded({extended: true}));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Add this middleware
app.use(methodOverride("_method"));

// Routes
app.get("/", (req, res) => {
    res.send("Hii, I am Root");
});


// Index Route 
app.get("/listings", async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index", { allListings });
    } catch (err) {
        console.error("Error fetching listings:", err);
        res.status(500).send("Unable to fetch listings");
    }
});


// new route
app.get("/listings/new", (req, res) => {
    res.render("listings/new");
});

// Create Route
app.post("/listings", async (req, res) => {
    try {
        const newListing = new Listing(req.body);
        await newListing.save();
        res.redirect("/listings");
    } catch (err) {
        console.error("Error creating listing:", err);
        res.status(500).send("Error creating listing");
    }
});


// Edit Route - Show Edit Form
app.get("/listings/:id/edit", async (req, res) => {
    try {
        console.log("Edit route accessed with ID:", req.params.id);
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return res.status(404).send("Listing not found");
        }
        res.render("listings/edit", { listing });
    } catch (err) {
        console.error("Error fetching listing:", err);
        res.status(500).send("Error loading edit form");
    }
});

// Update Route - Handle Form Submission
app.put("/listings/:id", async (req, res) => {
    try {
        // Handle the amenities array
        const listingData = req.body;
        if (listingData.amenities && !Array.isArray(listingData.amenities)) {
            listingData.amenities = [listingData.amenities];
        }

        await Listing.findByIdAndUpdate(req.params.id, listingData);
        res.redirect(`/listings/${req.params.id}`);
    } catch (err) {
        console.error("Error updating listing:", err);
        res.status(500).send("Error updating listing");
    }
});

//show route 
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    try {
        const listing = await Listing.findById(id);
        res.render("listings/show", {listing});
    } catch (err) {
        console.error("Error fetching listing:", err);
        res.status(500).send("Unable to fetch listing");
    }
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
