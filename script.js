// Property Data
const properties = [
    {
        id: 1,
        title: "Modern Sunset Villa",
        location: "los-angeles",
        locationName: "Beverly Hills, LA",
        price: 4500000,
        priceFormatted: "$4,500,000",
        rooms: 5,
        baths: 4,
        sqft: 4200,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
        description: "A stunning architectural masterpiece with panoramic city views and a private infinity pool.",
        features: ["Infinity Pool", "Smart Home System", "Wine Cellar", "Home Theater"],
        isNew: true,
        hasParking: true,
        hasPool: true
    },
    {
        id: 2,
        title: "Skyline Penthouse",
        location: "new-york",
        locationName: "Manhattan, NY",
        price: 8200000,
        priceFormatted: "$8,200,000",
        rooms: 3,
        baths: 3,
        sqft: 3100,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
        description: "Live above the clouds in this ultra-modern penthouse featuring floor-to-ceiling windows.",
        features: ["Private Elevator", "Roof Terrace", "24/7 Concierge", "Gym Access"],
        isNew: false,
        hasParking: true,
        hasPool: false
    },
    {
        id: 3,
        title: "Oceanfront Estate",
        location: "miami",
        locationName: "Miami Beach, FL",
        price: 5900000,
        priceFormatted: "$5,900,000",
        rooms: 6,
        baths: 5,
        sqft: 5500,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
        description: "Direct beach access and modern coastal design define this luxurious Miami estate.",
        features: ["Private Beach", "Outdoor Kitchen", "Guest House", "Dock Space"],
        isNew: true,
        hasParking: true,
        hasPool: true
    },
    {
        id: 4,
        title: "The Glass House",
        location: "los-angeles",
        locationName: "Hollywood Hills, LA",
        price: 2800000,
        priceFormatted: "$2,800,000",
        rooms: 4,
        baths: 3,
        sqft: 3500,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
        description: "Minimalist design meeting natural beauty. Experience indoor-outdoor living at its finest.",
        features: ["Open Plan", "Floor to Ceiling Glass", "Koi Pond", "Zen Garden"],
        isNew: false,
        hasParking: true,
        hasPool: false
    },
    {
        id: 5,
        title: "Urban Luxury Loft",
        location: "new-york",
        locationName: "SoHo, NY",
        price: 3500000,
        priceFormatted: "$3,500,000",
        rooms: 2,
        baths: 2,
        sqft: 2200,
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
        description: "A sophisticated loft in the heart of SoHo with historic industrial charm and modern finishes.",
        features: ["High Ceilings", "Exposed Brick", "Designer Kitchen", "Master Suite"],
        isNew: true,
        hasParking: false,
        hasPool: false
    },
    {
        id: 6,
        title: "Modern Family Retreat",
        location: "miami",
        locationName: "Coral Gables, FL",
        price: 1200000,
        priceFormatted: "$1,200,000",
        rooms: 4,
        baths: 3,
        sqft: 3200,
        image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800",
        description: "Perfect blend of modern architecture and family comfort in a quiet, prestigious neighborhood.",
        features: ["Large Backyard", "Pool", "Office Room", "Gated Community"],
        isNew: false,
        hasParking: true,
        hasPool: true
    },
    {
        id: 7,
        title: "Charming Suburban Cottage",
        location: "los-angeles",
        locationName: "Pasadena, LA",
        price: 850000,
        priceFormatted: "$850,000",
        rooms: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800",
        description: "A cozy and charming cottage perfect for first-time buyers in a beautiful tree-lined street.",
        features: ["Garden", "Fireplace", "Hardwood Floors", "Renovated Kitchen"],
        isNew: true,
        hasParking: true,
        hasPool: false
    }
];

// Elements
const propertyGrid = document.getElementById('propertyGrid');
const searchInput = document.getElementById('searchInput');
const priceMin = document.getElementById('priceMin');
const priceMax = document.getElementById('priceMax');
const applyFilters = document.getElementById('applyFilters');
const resetBtn = document.getElementById('resetBtn');
const navbar = document.getElementById('mainNavbar');
const propertyModal = new bootstrap.Modal(document.getElementById('propertyModal'));
const modalContent = document.getElementById('modalContent');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProperties(properties);
    AOS.init({
        duration: 800,
        once: true
    });
});

// Scroll Event for Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Render Properties
function renderProperties(data) {
    propertyGrid.innerHTML = '';
    
    if (data.length === 0) {
        propertyGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search-minus fa-3x text-muted mb-3"></i>
                <h3>No properties found</h3>
                <p class="text-muted">Try adjusting your filters to find more results.</p>
            </div>
        `;
        return;
    }

    data.forEach(prop => {
        const card = `
            <div class="col-md-6" data-aos="fade-up">
                <div class="card property-card">
                    <div class="property-img-container">
                        <img src="${prop.image}" class="card-img-top" alt="${prop.title}">
                        <div class="property-badge">${prop.isNew ? 'New' : 'For Sale'}</div>
                    </div>
                    <div class="card-body p-4">
                        <h3 class="property-price">${prop.priceFormatted}</h3>
                        <h5 class="card-title fw-bold mb-3">${prop.title}</h5>
                        <p class="text-muted mb-4"><i class="fas fa-map-marker-alt me-1 text-gold"></i> ${prop.locationName}</p>
                        <div class="property-meta d-flex justify-content-between mb-4">
                            <span><i class="fas fa-bed"></i> ${prop.rooms} Rooms</span>
                            <span><i class="fas fa-bath"></i> ${prop.baths} Baths</span>
                            <span><i class="fas fa-expand-arrows-alt"></i> ${prop.sqft} sqft</span>
                        </div>
                        <button class="btn btn-view-details w-100" onclick="showPropertyDetails(${prop.id})">View Details</button>
                    </div>
                </div>
            </div>
        `;
        propertyGrid.innerHTML += card;
    });
}

// Filter Logic
function filterProperties() {
    const searchVal = searchInput.value.toLowerCase();
    const minP = parseFloat(priceMin.value) || 0;
    const maxP = parseFloat(priceMax.value) || Infinity;
    
    // Get checked rooms
    const checkedRooms = Array.from(document.querySelectorAll('#roomFilters input:checked')).map(el => parseInt(el.value));
    
    // Get criteria
    const critNew = document.getElementById('critNew').checked;
    const critParking = document.getElementById('critParking').checked;
    const critPool = document.getElementById('critPool').checked;

    let filtered = properties.filter(prop => {
        // Search Match
        const searchMatch = prop.title.toLowerCase().includes(searchVal) || 
                          prop.locationName.toLowerCase().includes(searchVal);

        // Price Match
        const priceMatch = prop.price >= minP && prop.price <= maxP;

        // Room Match
        const roomMatch = checkedRooms.length === 0 || checkedRooms.includes(prop.rooms) || (checkedRooms.includes(6) && prop.rooms >= 6);

        // Criteria Match
        const newMatch = !critNew || prop.isNew;
        const parkingMatch = !critParking || prop.hasParking;
        const poolMatch = !critPool || prop.hasPool;

        return searchMatch && priceMatch && roomMatch && newMatch && parkingMatch && poolMatch;
    });

    renderProperties(filtered);
}

// Show Details Modal
window.showPropertyDetails = function(id) {
    const prop = properties.find(p => p.id === id);
    if (!prop) return;

    modalContent.innerHTML = `
        <img src="${prop.image}" class="modal-img" alt="${prop.title}">
        <div class="p-4">
            <div class="d-flex justify-content-between align-items-start mb-3">
                <div>
                    <h2 class="fw-bold mb-1">${prop.title}</h2>
                    <p class="text-muted"><i class="fas fa-map-marker-alt me-1"></i> ${prop.locationName}</p>
                </div>
                <h3 class="text-gold fw-bold">${prop.priceFormatted}</h3>
            </div>
            
            <div class="row g-3 mb-4 text-center">
                <div class="col-4">
                    <div class="p-3 bg-light rounded-3">
                        <i class="fas fa-bed text-gold mb-2"></i>
                        <h6 class="mb-0">${prop.rooms} Rooms</h6>
                    </div>
                </div>
                <div class="col-4">
                    <div class="p-3 bg-light rounded-3">
                        <i class="fas fa-bath text-gold mb-2"></i>
                        <h6 class="mb-0">${prop.baths} Baths</h6>
                    </div>
                </div>
                <div class="col-4">
                    <div class="p-3 bg-light rounded-3">
                        <i class="fas fa-expand-arrows-alt text-gold mb-2"></i>
                        <h6 class="mb-0">${prop.sqft} sqft</h6>
                    </div>
                </div>
            </div>

            <h5 class="fw-bold mb-3">Description</h5>
            <p class="text-muted mb-4">${prop.description}</p>

            <h5 class="fw-bold mb-3">Key Features</h5>
            <div class="row g-2 mb-4">
                ${prop.features.map(f => `
                    <div class="col-md-6">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-check-circle text-success me-2"></i>
                            <span>${f}</span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="d-flex gap-2">
                <button class="btn btn-dark flex-grow-1 py-3">Book a Tour</button>
                <button class="btn btn-outline-dark px-4 py-3"><i class="far fa-heart"></i></button>
            </div>
        </div>
    `;

    propertyModal.show();
};

// Event Listeners
applyFilters.addEventListener('click', filterProperties);
resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    priceMin.value = '';
    priceMax.value = '';
    document.querySelectorAll('.btn-check').forEach(el => el.checked = false);
    document.getElementById('bathAll').checked = true;
    document.querySelectorAll('.form-check-input').forEach(el => el.checked = false);
    renderProperties(properties);
});

// Contact Form Submission (Mock)
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you shortly.');
    e.target.reset();
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        }
    });
});
