let sampleListings = [
    {
        "title": "Treehouse Haven",
        "description": "A magical treehouse nestled in a lush forest canopy.",
        "image": "https://plus.unsplash.com/premium_photo-1687996106455-b391358404bf?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 245000,
        "location": "Portland, Oregon",
        "country": "USA"
    },
    {
        "title": "Coastal Villa Retreat",
        "description": "Stunning oceanfront villa with panoramic sea views.",
        "image": "https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 890000,
        "location": "Big Sur, California",
        "country": "USA"
    },
    {
        "title": "Mountain Bungalow",
        "description": "Rustic alpine bungalow with breathtaking mountain scenery.",
        "image": "https://imgs.search.brave.com/2i5PKD2J-hEHm_12vS51zWXQs3Vktp9Mh_kp9ASrslk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZi5i/c3RhdGljLmNvbS94/ZGF0YS9pbWFnZXMv/aG90ZWwvbWF4MTAy/NHg3NjgvMjkwMDYw/NzE4LmpwZz9rPWMw/YmY4N2Y0NTMwODg0/YWZjZTVmYTVlMTNj/MjQwMzEyNmIwZGVi/OTU1YTRhMDM5YmMz/MGFmMDcwZDQ3ZTVk/YzUmbz0maHA9MQ",
        "price": 356000,
        "location": "Breckenridge, Colorado",
        "country": "USA"
    },
    {
        "title": "Urban Loft Sanctuary",
        "description": "Modern minimalist loft in the heart of downtown.",
        "image": "https://imgs.search.brave.com/beiTYy23mlUA1DK5jJNOneJnpsn6lhi1Q1Rxhazo6mQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNjcw/ZmY3OWJkOWY3OGQ3/NTRjNWUzNTc0L21h/c3Rlci93XzE2MDAs/Y19saW1pdC9CMDAx/NzA4MV9zUkdCJTIw/Y29weS5qcGc",
        "price": 620000,
        "location": "Seattle, Washington",
        "country": "USA"
    },
    {
        "title": "Tropical Beach House",
        "description": "Exotic beachfront property with direct ocean access.",
        "image": "https://images.unsplash.com/photo-1474874055390-459bc92357f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
        "price": 1200000,
        "location": "Maui, Hawaii",
        "country": "USA"
    },
    {
        "title": "Riverside Cabin",
        "description": "Peaceful log cabin situated along a tranquil river.",
        "image": "https://imgs.search.brave.com/Wdgj4eGdhxL6GHyrkoiMncG0uQIjyMYRUdJsxyhY2RI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWRzdHRjLmNv/bS9tZWRpYS9pbWFn/ZXMvNjEwMS9lMWQ4/LzAyY2EvZGU0YS9j/NTcyLzM4NmYvbWVk/aXVtX2pwZy93ZXN0/ZXJtZWllci0wNy1v/ay5qcGc_MTYyNzUx/MzMyOQ",
        "price": 275000,
        "location": "Jackson Hole, Wyoming",
        "country": "USA"
    },
    {
        "title": "Desert Eco Dome",
        "description": "Sustainable geodesic dome in a serene desert landscape.",
        "image": "https://imgs.search.brave.com/IY7DDBT1ptJ14OgSA9AaMnkRQkqysKH5kBVRDw2iqF0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YxLzEw/LzBmL2YxMTAwZmUx/MDNjNDQ3OGE5ZGNk/ZGVmNzg1OTFhMTFh/LmpwZw",
        "price": 415000,
        "location": "Joshua Tree, California",
        "country": "USA"
    },
    {
        "title": "Ski Chalet Escape",
        "description": "Luxurious ski-in, ski-out mountain chalet.",
        "image": "https://imgs.search.brave.com/gEVcjVIGC7wp6fBJUgB4K3N97usO63pA7ERCL4e3FYY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbm93/b25seS5jb20vc3Rv/cmFnZS91cGxvYWRz/L2Jsb2cvNjM5NmFj/NzViMmVhOTM5NzMz/NjI3Mi1ib2R5X2xh/cmdlLmpwZw",
        "price": 750000,
        "location": "Park City, Utah",
        "country": "USA"
    },
    {
        "title": "Vineyard Guest House",
        "description": "Charming cottage surrounded by rolling vineyards.",
        "image": "https://imgs.search.brave.com/GTP4TthZb8S_4Vc-GSERx9Rb9UqgGq1U-g37buZZtb4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHZod2luZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzExL3RoZS12aW5l/eWFyZC1ob3VzZS1o/b21lLXRoZS1wbGFj/ZS0xLmpwZw",
        "price": 520000,
        "location": "Napa Valley, California",
        "country": "USA"
    },
    {
        "title": "Island Bungalow",
        "description": "Secluded tropical bungalow on a private island.",
        "image": "https://imgs.search.brave.com/6kmXB2E41r2ovcEJIqPMZqFN8Me6pARaJ9u5Dh55zGk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hMC5t/dXNjYWNoZS5jb20v/aW0vcGljdHVyZXMv/aG9zdGluZy9Ib3N0/aW5nLVUzUmhlVk4x/Y0hCc2VVeHBjM1Jw/Ym1jNk16UTJNRFkz/TVRBPS9vcmlnaW5h/bC9hZTE4ZDI4NS1i/MmFkLTRmN2EtYTUx/Yy1iNmI1YzE3YjI3/NmMuanBlZz9pbV93/PTcyMA",
        "price": 1850000,
        "location": "Florida Keys, Florida",
        "country": "USA"
    },
    {
        "title": "Forest Glamping Dome",
        "description": "Luxurious glamping dome in a dense pine forest.",
        "image": "https://imgs.search.brave.com/Scjmf91Wb_IGm0_z-IkgOIk13W6IFUcU-uFX2Q-scUA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb3Zl/LWdsYW1waW5nLmNv/LnVrL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE0LzA1L2dsYW1w/aW5nLWdsb3VjZXN0/ZXJzaGlyZS1mb3Jl/c3Qtb2YtZGVhbi1k/b21lLWdhcmRlbi5q/cGc",
        "price": 295000,
        "location": "Olympic National Park, Washington",
        "country": "USA"
    },
    {
        "title": "Ranch Retreat",
        "description": "Spacious ranch house with expansive pasture views.",
        "image": "https://imgs.search.brave.com/D1zw8lZQ3nxTmQyWlRQ45Ud7ye4g40vg6Bxe7DjkNQU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdhLzgy/LzcxLzdhODI3MTQ3/YzFiNDIxZjkzZTRh/YzBkZjA3ZmQ2MDUw/LmpwZw",
        "price": 680000,
        "location": "Montana Ranch Country",
        "country": "USA"
    },
    {
        "title": "Historic Victorian Home",
        "description": "Beautifully restored 19th-century Victorian mansion.",
        "image": "https://imgs.search.brave.com/rDKlud8xuzystBRGeDfrmY8FZxgVfUd9_dttdvC4Oxk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9tZWFkdmlzb3Iu/Y29tL3Ivd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMDIvRG9s/bGFycGhvdG9jbHVi/XzQ5NDIwMzI0Lmpw/Zw",
        "price": 940000,
        "location": "San Francisco, California",
        "country": "USA"
    },
    {
        "title": "Modern Desert Retreat",
        "description": "Contemporary home with minimalist desert aesthetics.",
        "image": "https://imgs.search.brave.com/3sJ-BD-QZDHvSY_Vq7YgfiD9uKro6LHS_x0AA9VQivk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWRzdHRjLmNv/bS9tZWRpYS9pbWFn/ZXMvNjFlZi81Nzlk/LzhlODUvOGYwMS82/NDUyL2JlZGQvbmV3/c2xldHRlci8wNS1q/ZXJlbXlsZXZpbmVk/ZXNpZ24tY293Ym95/bW9kZXJuLXBob3Rv/LWxhbmNlZ2VyYmVy/LWJhY2stMi5qcGc_/MTY0MzA3NTYyMw",
        "price": 585000,
        "location": "Scottsdale, Arizona",
        "country": "USA"
    },
    {
        "title": "Lakeside Cottage",
        "description": "Quaint cottage with private dock and lake views.",
        "image": "https://imgs.search.brave.com/NALfNWP0pCUQiS2LKmN5oOifwhjQfO-koTQGjSy3rUs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYWxs/ZXJ5LnN0cmVhbWxp/bmV2cnMuY29tL3Vu/aXRzLWdhbGxlcnkv/MDAvMDYvRDUvaW1h/Z2VfMTU3NDM3NTg1/LmpwZWc",
        "price": 425000,
        "location": "Lake Tahoe, Nevada",
        "country": "USA"
    },
    {
        "title": "Urban Garden Studio",
        "description": "Compact studio apartment with rooftop garden.",
        "image": "https://imgs.search.brave.com/ZFMZpjCcxB5RTxgBXbUNHGBtwhx5-WJlpplYi3WmGtc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2FuY3R1bWdhcmRl/bnN0dWRpb3MuY29t/L2ltZy91cmJhbi8x/MDAwLXVyYmFuLXNs/aWRlcjAxLmpwZw",
        "price": 385000,
        "location": "Portland, Oregon",
        "country": "USA"
    },
    {
        "title": "Mountain View Cabin",
        "description": "Cozy cabin with panoramic mountain landscape views.",
        "image": "https://imgs.search.brave.com/MJoAB9kfBwwLHgQHGRyx7--ticqoY0TqG4xZJ9esoX8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YW1hemluZ3ZpZXdz/Y2FiaW5yZW50YWxz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMi9zaWRl/YmFyLWNhYmluLmpw/Zw",
        "price": 310000,
        "location": "Boulder, Colorado",
        "country": "USA"
    },
    {
        "title": "Tropical Rainforest Villa",
        "description": "Luxurious villa embedded in a lush rainforest environment.",
        "image": "https://imgs.search.brave.com/dHnfuOKEbrvdaeU9BpP3M3GFF1RJwRHsjdDUHfWir4E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/LndlZGRpbmd3aXJl/LmluL3ZlbmRvci84/ODA5LzNfMi85NjAv/anBlZy93ZWRkaW5n/LXJlc29ydHMtcmFp/bmZvcmVzdC12aWxs/YS1mYWNhZGUtMl8x/NV80MDg4MDktMTY1/MTQzMDU5NTkzNzIy/LmpwZWc",
        "price": 1100000,
        "location": "Puerto Rico",
        "country": "USA"
    },
    {
        "title": "Coastal Lighthouse Keeper's Home",
        "description": "Historic lighthouse residence with stunning ocean views.",
        "image": "https://imgs.search.brave.com/bgMNJFzVgy_9xSftOIhle8JniDb7UW2DTta6-jPPAaQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zYW5j/dHVhcmllcy5ub2Fh/Lmdvdi9tZWRpYS9p/bWcvMjAyMzA1MTUt/a2lsbG9jay1zaG9h/bC1saWdodGhvdXNl/LTEwMDAuanBn",
        "price": 795000,
        "location": "Maine Coast",
        "country": "USA"
    },
    {
        "title": "Urban Penthouse",
        "description": "Luxurious top-floor penthouse with cityscape panorama.",
        "image": "https://imgs.search.brave.com/AuC4JlMQp9XukNefdPoALHxKOj_V9NLdjst3pD_JXpE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lkZW9wZW5jb3Vu/dHJ5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNC8y/MDIwLzAzL1VyYmFu/LUNvd2JveS1QZW50/aG91c2UtMS5wbmc_/cmVzaXplPTc5OCw1/MjY",
        "price": 1250000,
        "location": "New York City, New York",
        "country": "USA"
    },
    {
        "title": "Rural Farmhouse",
        "description": "Classic American farmhouse with surrounding agricultural land.",
        "image": "https://imgs.search.brave.com/ovvCIFXxVnCdYAokU9Zu-XnRImA9q09NVrQIyVVuAts/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/MzM4OTU1L3Bob3Rv/L2Zhcm1ob3VzZXMt/YW5kLWJhcm4uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUF4/ZmdTVy1FdVdBTUph/MjgzT1FnT283TVNN/dVh2WjVlNzZ2MXY0/TlNqTkk9",
        "price": 485000,
        "location": "Iowa Countryside",
        "country": "USA"
    },
    {
        "title": "Volcano View Villa",
        "description": "Stunning property with direct view of active volcanic landscape.",
        "image": "https://imgs.search.brave.com/pF4I8Bfn_gArDaAsxC5AJVCrVRpcMXaildsxGdf_P6A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY29sbGljaGlh/cmkuY29tL3Bob3Rv/cy8yNjEvbGFyZ2Ut/YXNyYTE6MS9zdG9u/eS12aWxsYS12b2xj/YW5vLXZpZXctc2Fu/dC1hZ2F0YS1zdWkt/ZHVlLWdvbGZpLXZp/bGxhLWVzdGVybm8t/Mi5qcGc",
        "price": 675000,
        "location": "Big Island, Hawaii",
        "country": "USA"
    },
    {
        "title": "Urban Historic Brownstone",
        "description": "Classic brownstone with preserved historical architectural details.",
        "image": "https://imgs.search.brave.com/cecwNldHwUO1_IedzA96AhqkFKFJW9dUF3TpqfeiLbA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXJjaGl0ZWN0dXJh/bHJlY29yZC5jb20v/ZXh0L3Jlc291cmNl/cy9Jc3N1ZXMvMjAy/MC8wOC1BdWd1c3Qv/QnJvd25zdG9uZS1I/b3VzZS0wMS1CLmpw/Zz8xNTk4MjA3NDA0",
        "price": 1100000,
        "location": "Boston, Massachusetts",
        "country": "USA"
    },
    {
        "title": "Mountain Wellness Retreat",
        "description": "Modern wellness center nestled in serene mountain terrain.",
        "image": "https://imgs.search.brave.com/G-gDfuI-YfgPJSkjYvrNnZxfcfYpt4HdQPMo3OVaYqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pa25v/d3RoZXBpbG90Lmlt/Z2l4Lm5ldC9Mb2Nh/dGlvbkltYWdlcy8x/MjAweDY3NS9ibV9m/YWxsc19tb3VudGFp/bl9yZXRyZWF0X3Nw/YS5qcGc",
        "price": 920000,
        "location": "Sedona, Arizona",
        "country": "USA"
    },
    {
        "title": "Riverside Modern Home",
        "description": "Contemporary residence with expansive river frontage.",
        "image": "https://imgs.search.brave.com/DYdw_pmedJP1CTVK9uJet1VSUGKmfClUjFnHL_iqV6k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWR2YW5jZWRob3Vz/ZXBsYW5zLmNvbS9h/c3NldHMvdWx0cm9u/L2ltYWdlcy9tb2Rl/cm4uanBn",
        "price": 765000,
        "location": "Austin, Texas",
        "country": "USA"
    },
    {
        "title": "Oceanfront Architectural Marvel",
        "description": "Cutting-edge architectural design with unobstructed ocean views.",
        "image": "https://imgs.search.brave.com/q42JHL1ld_Bl9qNCTl7wx7Wq79rEy0M75HH36SK_pF4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNTky/NzRhZDNjMjRkYjM0/MmY2Yzc5MTM0L21h/c3Rlci93XzE2MDAs/Y19saW1pdC9NYXJ2/ZWxfUGllcmhvdXNl/LU1hcnZlbC1BcmNo/aXRlY3RzLWJ5LURh/dmlkLVN1bmRiZXJn/LUVTVE9fMjAxN0RT/MDMuOTA5LmpwZw",
        "price": 2500000,
        "location": "Malibu, California",
        "country": "USA"
    },
    {
        "title": "Forest Meditation Retreat",
        "description": "Peaceful sanctuary designed for mindfulness and relaxation.",
        "image": "https://imgs.search.brave.com/uWtyyM4uvkD6aKKIRRcqe3VRxtwnftSDb8EhXoYH3Gg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9uZG9uZXJpbnN5/ZG5leS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDYv/MTIxODMwNTQvc3Vu/bmF0YXJhbS1mb3Jl/c3QtbW9uYXN0ZXJ5/LW1lZGl0YXRpb24t/cmV0cmVhdC0zLTEt/b2YtMS0xMDI0eDY4/My5qcGc_c3RyaXA9/YWxsJmxvc3N5PTEm/c3NsPTEmZml0PTEw/MjQsNjgz",
        "price": 540000,
        "location": "Santa Cruz, California",
        "country": "USA"
    },
    {
        "title": "Rocky Mountain Homestead",
        "description": "Expansive property with breathtaking mountain range perspectives.",
        "image": "https://imgs.search.brave.com/k6ey97rj_DB_0UVazKa_2lFD6oASJh8ZFB-diM0q1Ok/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saXZl/LnN0YXRpY2ZsaWNr/ci5jb20vMjc3OS80/NDY0MDIzNzgwXzVk/ZTM0MDhlNmUuanBn",
        "price": 825000,
        "location": "Telluride, Colorado",
        "country": "USA"
    },
    {
        "title": "Mountain Log Cabin",
        "description": "Traditional log cabin with rustic mountain charm.",
        "image": "https://imgs.search.brave.com/sAkITHUY98IZEqmDFqDEB9xPQhMZp8rmDYhAXbC6ZEE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY29uZXN0/b2dhbG9nY2FiaW5z/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wNy9JTUdf/MzU3NS5qcGc_Zml0/PTkwMCw2MDAmc3Ns/PTE",
        "price": 365000,
        "location": "Aspen, Colorado",
        "country": "USA"
    },
    {
        "title": "Urban Community Loft",
        "description": "Collaborative living space with shared community amenities.",
        "image": "https://imgs.search.brave.com/-PY_DD18Lu__TPkoZ2kzWfkX8xnodwNEYTmecUXjt-Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E1L2Fh/LzM5L2E1YWEzOWFl/MDUxYjk4OTYwYjJm/OGI5ODkzY2JlYjYy/LmpwZw",
        "price": 525000,
        "location": "San Diego, California",
        "country": "USA"
    },
    {
        "title": "Riverside Sustainable Home",
        "description": "Eco-friendly residence with advanced green technologies.",
        "image": "https://imgs.search.brave.com/jbvnPkOjsF-MdhVLnUGuj1B6Ia08mtIM_Mjz15QEjF4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdHJl/YW1saW5lLmltZ2l4/Lm5ldC9kMDEzN2Q3/Ni04ZjQzLTQwOGMt/OWI0My1hYTNlNTRm/NjI0MDMvNzQ3MTFm/NDAtNzAzZS00Mzcy/LTkxMDUtZjI1YjAx/ODMyYjYxL1N1c3Rh/aW5hYmxlJTIweWFy/ZC5qcGc_aXhsaWI9/cmItMS4xLjAmdz0y/MDAwJmg9MjAwMCZm/aXQ9bWF4Jm9yPTAm/cz0yNWNjNzhmOTkw/MTZhZDI1MzM2ZmVk/NDgwZGExYmIyMg",
        "price": 725000,
        "location": "Eugene, Oregon",
        "country": "USA"
    },
    {
        "title": "Coastal Cliff House",
        "description": "Modern home perched dramatically above rocky coastal cliffs.",
        "image": "https://imgs.search.brave.com/C1ozOR-RRiaypW4GdY0eqHO9WBK9Ig56miNCYB2mQvQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmVhdXRpZnVsbGlm/ZS5pbmZvL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9lZGdlX2hvdXNl/LzA1LmpwZw",
        "price": 1750000,
        "location": "Big Sur, California",
        "country": "USA"
    },
    {
        "title": "Urban Industrial Loft",
        "description": "Converted warehouse with expansive open-concept living.",
        "image": "https://imgs.search.brave.com/nZaGbLWLVPKDsZIfaKyU80N_OpUY0-_QDAZEW8fXRHQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/NzcwODUxOC9waG90/by9tb2Rlcm4tdmls/bGEtZXh0ZXJpb3It/aW4tc3VtbWVyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1l/S0JXWUktNk1WR1Ju/QV9hc1RTYmlyaWdN/THNkQlN6aUdQTVNx/RlBFcF9FPQ",
        "price": 595000,
        "location": "Denver, Colorado",
        "country": "USA"
    },
];


module.exports = { data: sampleListings};