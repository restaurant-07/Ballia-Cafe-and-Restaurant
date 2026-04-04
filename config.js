// ==================================================
// RESTAURANT WEBSITE CONFIGURATION
// ==================================================
// EDIT THIS FILE ONLY - Everything else auto-updates
// ==================================================

const CONFIG = {
    // ========== BASIC INFO ==========
    restaurant: {
        name: "Ballian Cafe & Restaurant",
        tagline: "Premium Restaurant",
        description: "Experience the finest dining where every meal becomes a celebration. Our chefs craft masterpieces that delight your senses.",
        welcomeText: "WELCOME TO BALLIAN CAFE & RESTAURANT",
        foundedYear: "2015"
    },

    // ========== CONTACT DETAILS ==========
    contact: {
        phone: "+91 73585 79662",
        phoneRaw: "917358579662",
        phone2: "+91 73585 79662",
        phone2Raw: "917358579662",
        email: "info@BallianCafe&Restaurant.com",
        emailEvents: "events@BallianCafe&Restaurant.com",
        emailPartner: "partner@BallianCafe&Restaurant.com",
        address: "near Central Bank, Raniganj Bazar, Bariya, Uttar Pradesh 277208",
        city: "Bariya",
        state: "Uttar Pradesh 277208"
    },

    // ========== BUSINESS HOURS ==========
    hours: {
        weekdays: "12:00 PM - 10:00 PM",
        weekends: "12:00 PM - 10:00 PM"
    },

    // ========== GOOGLE MAPS ==========
    // Get embed URL from Google Maps: Share → Embed a map → Copy src
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.4698494337913!2d84.4801573!3d25.788069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399291b181e9dc71%3A0x5d0a964cc811c43a!2sBallian%20Cafe%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1775267162257!5m2!1sen!2sin", // Replace with your actual embed URL

    // ========== STATS ==========
    stats: {
        years: "10",
        yearsLabel: "Years of Excellence",
        chefs: "15",
        chefsLabel: "Expert Chefs",
        dishes: "50",
        dishesLabel: "Premium Dishes",
        customers: "100",
        customersLabel: "Daily Customers"
    },

    // ========== LOYALTY PROGRAM ==========
    loyalty: {
        silver: {
            level: "SILVER",
            discount: "5% OFF",
            icon: "fas fa-star",
            features: ["Welcome Drink", "Birthday Dessert", "Priority Waitlist"],
            buttonText: "JOIN NOW"
        },
        gold: {
            level: "GOLD",
            discount: "10% OFF",
            icon: "fas fa-crown",
            features: ["All Silver Benefits", "Free Appetizer", "Priority Booking", "Exclusive Events"],
            buttonText: "UPGRADE NOW"
        },
        diamond: {
            level: "DIAMOND",
            discount: "15% OFF",
            icon: "fas fa-gem",
            features: ["All Gold Benefits", "Complimentary Wine", "VIP Table Priority", "Chef's Specials"],
            buttonText: "GO DIAMOND"
        }
    },

    // ========== SOCIAL MEDIA ==========
    social: {
        instagram: "https://instagram.com/yourpage",
        facebook: "https://facebook.com/yourpage",
        twitter: "https://twitter.com/yourpage",
        youtube: "https://youtube.com/yourpage"
    },

    // ========== SIGNATURE DISHES (USE LOCAL IMAGES) ==========
    dishes: [
        {
            name: "Signature Dish 1",
            description: "Delicious description of your special dish",
            image: "images/dish-1.jpg"
        },
        {
            name: "Signature Dish 2",
            description: "Delicious description of your special dish",
            image: "images/dish-2.jpg"
        },
        {
            name: "Signature Dish 3",
            description: "Delicious description of your special dish",
            image: "images/dish-3.jpg"
        }
    ],


    // ========== GALLERY IMAGES (USE LOCAL IMAGES) ==========
    // Add your restaurant's actual photos here
    gallery: [
        "images/gallery-1.jpg",
        "images/gallery-2.jpg",
        "images/gallery-3.jpg",
        "images/gallery-4.jpg",
        "images/gallery-5.jpg",
        "images/gallery-6.jpg",
        "images/gallery-7.jpg",
        "images/gallery-8.jpg"
    ],



    // ========== TABLE TYPES (USE LOCAL IMAGES) ==========
    tables: [
        {
            name: "Window Side",
            capacity: "2-4 People",
            description: "Beautiful view with natural light. Perfect for romantic dinners.",
            features: ["Natural Light", "WiFi", "Charging"],
            badge: "MOST POPULAR",
            image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800"
            // image: "images/table-1.jpg"
        },
        {
            name: "Private Area",
            capacity: "6-10 People",
            description: "Enclosed space for family gatherings and business meetings.",
            features: ["TV Screen", "Sound System", "Mini Bar"],
            badge: "PRIVATE",
            image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800"
        },
        {
            name: "Rooftop Lounge",
            capacity: "2-6 People",
            description: "Open-air seating with stunning city skyline views.",
            features: ["Open Air", "Bar Access", "Heaters"],
            badge: "PREMIUM",
            image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800"
        },
        {
            name: "Family Section",
            capacity: "4-8 People",
            description: "Spacious area with kids-friendly seating.",
            features: ["Kids Chair", "Play Area", "Kids Menu"],
            badge: "",
            image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800"
        },
        {
            name: "Chef's Table",
            capacity: "2-4 People",
            description: "Front row view of the kitchen action.",
            features: ["Chef Interaction", "Tasting Menu", "Wine Pairing"],
            badge: "EXCLUSIVE",
            image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800"
        },
        {
            name: "Outdoor Patio",
            capacity: "2-4 People",
            description: "Garden seating surrounded by plants and fresh air.",
            features: ["Garden View", "Shaded", "Cooling Fans"],
            badge: "",
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800"
        }
    ]
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}