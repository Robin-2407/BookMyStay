const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/BookMyStay";

main()
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    try {
        // Clear the existing data
        await Listing.deleteMany({});
        console.log("Existing data deleted");

        // Insert new data
        const result = await Listing.insertMany(initData.data); // or initData if no .data
        console.log(`${result.length} documents were inserted`);
    } catch (error) {
        console.error("Error initializing database:", error);
    }
};

initDB();