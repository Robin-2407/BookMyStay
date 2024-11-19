let sampleListings = [
    {
        "title": "Cozy Cottage",
        "description": "A serene cottage in the woods.",
        "image": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&w=2070&q=80",
        "price": 120000,
        "location": "Aspen, Colorado",
        "country": "USA"
    },
    {
        "title": "Modern Apartment",
        "description": "A luxurious apartment with city views.",
        "image": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&w=2070&q=80",
        "price": 95000,
        "location": "New York, NY",
        "country": "USA"
    },
    {
        "title": "Beachside Villa",
        "description": "A stunning villa by the beach.",
        "image": "https://images.unsplash.com/photo-1495082142274-4e0e1a21d5cc?crop=entropy&w=2070&q=80",
        "price": 250000,
        "location": "Malibu, California",
        "country": "USA"
    },
    {
        "title": "Rustic Barn",
        "description": "A cozy barn house in the countryside.",
        "image": "https://images.unsplash.com/photo-1600585154340-be6161c4d377?crop=entropy&w=2070&q=80",
        "price": 85000,
        "location": "Nashville, Tennessee",
        "country": "USA"
    },
    {
        "title": "Lakefront Cabin",
        "description": "A peaceful cabin by the lake.",
        "image": "https://images.unsplash.com/photo-1595526118501-214e5f89e537?crop=entropy&w=2070&q=80",
        "price": 135000,
        "location": "Lake Tahoe, Nevada",
        "country": "USA"
    },
    {
        "title": "Urban Loft",
        "description": "A trendy loft in the heart of the city.",
        "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&w=2070&q=80",
        "price": 78000,
        "location": "Austin, Texas",
        "country": "USA"
    },
    {
        "title": "Mountain Retreat",
        "description": "A secluded retreat in the mountains.",
        "image": "https://images.unsplash.com/photo-1472224371017-08207f84aaae?crop=entropy&w=2070&q=80",
        "price": 140000,
        "location": "Vail, Colorado",
        "country": "USA"
    },
    {
        "title": "Penthouse Suite",
        "description": "A luxurious penthouse with skyline views.",
        "image": "https://images.unsplash.com/photo-1572252015280-185e5824f62f?crop=entropy&w=2070&q=80",
        "price": 500000,
        "location": "Los Angeles, California",
        "country": "USA"
    },
    {
        "title": "Charming Bungalow",
        "description": "A charming bungalow with a lush garden.",
        "image": "https://images.unsplash.com/photo-1502672023488-70e25813eb80?crop=entropy&w=2070&q=80",
        "price": 110000,
        "location": "Charleston, South Carolina",
        "country": "USA"
    },
    {
        "title": "Historic Mansion",
        "description": "A grand historic mansion.",
        "image": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&w=2070&q=80",
        "price": 750000,
        "location": "Savannah, Georgia",
        "country": "USA"
    },
    {
        "title": "Coastal Retreat",
        "description": "A picturesque retreat near the coast.",
        "image": "https://images.unsplash.com/photo-1541123603104-512919d0a112?crop=entropy&w=2070&q=80",
        "price": 210000,
        "location": "Cape Cod, Massachusetts",
        "country": "USA"
    },
    {
        "title": "Desert Oasis",
        "description": "A modern home in the desert.",
        "image": "https://images.unsplash.com/photo-1505692957-bc95ccaeaeef?crop=entropy&w=2070&q=80",
        "price": 165000,
        "location": "Phoenix, Arizona",
        "country": "USA"
    },
    {
        "title": "Sunny Condo",
        "description": "A bright and sunny condo.",
        "image": "https://images.unsplash.com/photo-1600585154351-3b7b555a4ed1?crop=entropy&w=2070&q=80",
        "price": 99000,
        "location": "Miami, Florida",
        "country": "USA"
    },
    {
        "title": "Eco-Friendly Home",
        "description": "A sustainable and eco-friendly home.",
        "image": "https://images.unsplash.com/photo-1560185127-6ba3b3eecdf4?crop=entropy&w=2070&q=80",
        "price": 190000,
        "location": "Portland, Oregon",
        "country": "USA"
    },
    {
        "title": "Artistic Studio",
        "description": "A studio perfect for artists.",
        "image": "https://images.unsplash.com/photo-1604537529428-8d8dfb23a57b?crop=entropy&w=2070&q=80",
        "price": 65000,
        "location": "Santa Fe, New Mexico",
        "country": "USA"
    },
    {
        "title": "Luxury Estate",
        "description": "A grand luxury estate.",
        "image": "https://images.unsplash.com/photo-1550565110-5a1a4d1d88f3?crop=entropy&w=2070&q=80",
        "price": 1200000,
        "location": "Beverly Hills, California",
        "country": "USA"
    },
    {
        "title": "Suburban Home",
        "description": "A comfortable home in the suburbs.",
        "image": "https://images.unsplash.com/photo-1592595896551-b7a0a2f2e953?crop=entropy&w=2070&q=80",
        "price": 145000,
        "location": "Plano, Texas",
        "country": "USA"
    },
    {
        "title": "Country Farmhouse",
        "description": "A classic farmhouse with modern amenities.",
        "image": "https://images.unsplash.com/photo-1512916209464-81aa1b25d8b1?crop=entropy&w=2070&q=80",
        "price": 200000,
        "location": "Lexington, Kentucky",
        "country": "USA"
    },
    {
        "title": "Minimalist House",
        "description": "A minimalist house with sleek design.",
        "image": "https://images.unsplash.com/photo-1505691723518-41cd5b68dde8?crop=entropy&w=2070&q=80",
        "price": 180000,
        "location": "Seattle, Washington",
        "country": "USA"
    },
    {
        "title": "Riverfront Cabin",
        "description": "A cabin by the river with stunning views.",
        "image": "https://images.unsplash.com/photo-1530731141654-5993c3016c77?crop=entropy&w=2070&q=80",
        "price": 130000,
        "location": "Asheville, North Carolina",
        "country": "USA"
    },
    {
        "title": "Highland Cottage",
        "description": "A quaint cottage in the highlands.",
        "image": "https://images.unsplash.com/photo-1580655838677-d99f22e9ce04?crop=entropy&w=2070&q=80",
        "price": 110000,
        "location": "Edinburgh, Scotland",
        "country": "UK"
    },
    {
        "title": "Seaside Bungalow",
        "description": "A bungalow overlooking the sea.",
        "image": "https://images.unsplash.com/photo-1504764039453-dc63223cda50?crop=entropy&w=2070&q=80",
        "price": 155000,
        "location": "Brighton, England",
        "country": "UK"
    },
    {
        "title": "Vintage Villa",
        "description": "An elegant vintage villa.",
        "image": "https://images.unsplash.com/photo-1590598907492-93b7aeb9fd2d?crop=entropy&w=2070&q=80",
        "price": 400000,
        "location": "Florence, Italy",
        "country": "Italy"
    },
    {
        "title": "French Chateau",
        "description": "A beautiful chateau in the French countryside.",
        "image": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&w=2070&q=80",
        "price": 850000,
        "location": "Bordeaux, France",
        "country": "France"
    },
    {
        "title": "Icelandic Retreat",
        "description": "A cozy retreat amidst Icelandic landscapes.",
        "image": "https://images.unsplash.com/photo-1554181958-c3c5dc1206d0?crop=entropy&w=2070&q=80",
        "price": 185000,
        "location": "Reykjavik, Iceland",
        "country": "Iceland"
    },
    {
        "title": "Swiss Chalet",
        "description": "A charming chalet in the Swiss Alps.",
        "image": "https://images.unsplash.com/photo-1580656015840-4f1269c6ec6a?crop=entropy&w=2070&q=80",
        "price": 310000,
        "location": "Zermatt, Switzerland",
        "country": "Switzerland"
    },
    {
        "title": "Japanese Ryokan",
        "description": "A traditional Japanese inn with hot springs.",
        "image": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&w=2070&q=80",
        "price": 220000,
        "location": "Kyoto, Japan",
        "country": "Japan"
    },
    {
        "title": "Tropical Paradise",
        "description": "A villa in a tropical paradise.",
        "image": "https://images.unsplash.com/photo-1560185008-d1b11758a3c9?crop=entropy&w=2070&q=80",
        "price": 275000,
        "location": "Bali, Indonesia",
        "country": "Indonesia"
    },
    {
        "title": "Australian Beach House",
        "description": "A modern house near the beach.",
        "image": "https://images.unsplash.com/photo-1506956196395-48f18bfea8be?crop=entropy&w=2070&q=80",
        "price": 290000,
        "location": "Gold Coast, Australia",
        "country": "Australia"
    },
    {
        "title": "Urban Penthouse",
        "description": "A penthouse in the city with a rooftop deck.",
        "image": "https://images.unsplash.com/photo-1590650048301-26c9b7ae1a94?crop=entropy&w=2070&q=80",
        "price": 450000,
        "location": "Toronto, Canada",
        "country": "Canada"
    },
    {
        "title": "Forest Lodge",
        "description": "A lodge surrounded by tall pine trees.",
        "image": "https://images.unsplash.com/photo-1551942581-8cfb54850dcd?crop=entropy&w=2070&q=80",
        "price": 125000,
        "location": "Banff, Canada",
        "country": "Canada"
    },
    {
        "title": "Modern House",
        "description": "A sleek and modern house with smart home features.",
        "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&w=2070&q=80",
        "price": 200000,
        "location": "San Francisco, California",
        "country": "USA"
    },
    {
        "title": "Mediterranean Villa",
        "description": "A stunning villa with Mediterranean architecture.",
        "image": "https://images.unsplash.com/photo-1556912999-d184a24b9479?crop=entropy&w=2070&q=80",
        "price": 480000,
        "location": "Nice, France",
        "country": "France"
    },
    {
        "title": "Snowy Cabin",
        "description": "A cozy cabin in a snowy wonderland.",
        "image": "https://images.unsplash.com/photo-1516637097225-6b4763d3c6c8?crop=entropy&w=2070&q=80",
        "price": 150000,
        "location": "Aspen, Colorado",
        "country": "USA"
    },
    {
        "title": "Countryside Cottage",
        "description": "A peaceful cottage in the English countryside.",
        "image": "https://images.unsplash.com/photo-1563893949252-8652cc168c74?crop=entropy&w=2070&q=80",
        "price": 90000,
        "location": "Cotswolds, England",
        "country": "UK"
    },
    {
        "title": "Greek Island Villa",
        "description": "A villa overlooking the Aegean Sea.",
        "image": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&w=2070&q=80",
        "price": 330000,
        "location": "Santorini, Greece",
        "country": "Greece"
    },
    {
        "title": "Scandinavian Home",
        "description": "A minimalist and cozy Scandinavian home.",
        "image": "https://images.unsplash.com/photo-1600585154340-be6161c4d377?crop=entropy&w=2070&q=80",
        "price": 190000,
        "location": "Stockholm, Sweden",
        "country": "Sweden"
    },
    {
        "title": "Dubai Penthouse",
        "description": "An extravagant penthouse with stunning city views.",
        "image": "https://images.unsplash.com/photo-1566412865657-975d4949c469?crop=entropy&w=2070&q=80",
        "price": 500000,
        "location": "Dubai, UAE",
        "country": "UAE"
    }
]


module.exports = { data: sampleListings};