const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listings.js");
const path = require("path");

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
