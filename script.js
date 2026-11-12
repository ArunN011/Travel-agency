const IMAGE_FOLDER = "Assets/";
const IMAGES = {
    hotels: {
        1: "Resort1.webp",
        2: "Resort2.webp",
        3: "Resort3.webp",
        4: "Resort4.webp",
        5: "Resort5.webp",
        6: "Resort6.webp",
        7: "Resort7.webp",
        8: "Resort8.webp",
        9: "Resort9.webp",
        10: "Resort10.webp"
    },
    destinations: {
        Ooty: "ooty.webp",
        Goa: "goa.webp",
        Manali: "manali.webp",
        Bali: "bali.webp",
        Dubai: "dubai.webp",
        Paris: "paris.webp",
        Maldives: "maldives.webp",
        Singapore: "singapore.webp"
    }
};
const hotelImg = id => IMAGE_FOLDER + (IMAGES.hotels[id] || "");
const destImg = name => IMAGE_FOLDER + (IMAGES.destinations[name] || "");
(function(){
const svg=(w,h,body)=>"data:image/svg+xml,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}'>${body}</svg>`);
const ph=svg(400,300,"<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#123b50'/><stop offset='1' stop-color='#18a999'/></linearGradient></defs><rect width='400' height='300' fill='url(#g)'/><text x='200' y='158' font-family='Arial' font-size='26' font-weight='bold' fill='#fff' fill-opacity='.75' text-anchor='middle'>Wanderly</text>");
const logoDark=svg(185,65,"<text x='92' y='42' font-family='Arial' font-size='30' font-weight='bold' fill='#123b50' text-anchor='middle'>Wander<tspan fill='#18a999'>ly</tspan></text>");
const logoLight=svg(185,65,"<text x='92' y='42' font-family='Arial' font-size='30' font-weight='bold' fill='#fff' text-anchor='middle'>Wander<tspan fill='#5be0bc'>ly</tspan></text>");
function fix(img){if(img.dataset.fb)return;img.dataset.fb="1";img.removeAttribute("loading");img.src=img.classList.contains("footer-logo")?logoLight:img.classList.contains("brand-logo")?logoDark:ph}
document.addEventListener("error",e=>{if(e.target&&e.target.tagName==="IMG")fix(e.target)},true);
const scan=()=>document.querySelectorAll("img").forEach(i=>{if(i.complete&&i.naturalWidth===0)fix(i)});
document.addEventListener("DOMContentLoaded",()=>{
if(window.innerWidth<992)document.querySelectorAll("[data-aos=fade-left],[data-aos=fade-right]").forEach(e=>e.setAttribute("data-aos","fade-up"));
scan();
});
window.addEventListener("load",()=>{scan();if(window.AOS)AOS.refreshHard();if(window.ScrollTrigger)ScrollTrigger.refresh()});
if(window.gsap){const ft=gsap.fromTo.bind(gsap),keep=["duration","ease","stagger","delay","scrollTrigger","onComplete","repeat","yoyo"];
gsap.from=function(t,v){const f={},o={};Object.keys(v).forEach(k=>{if(keep.indexOf(k)>-1)o[k]=v[k];else{f[k]=v[k];o[k]=(k==="opacity"||k==="scale")?1:0}});o.clearProps="opacity,transform";return ft(t,f,o)}}
})();
const destinations=[{name:"Ooty",country:"Tamil Nadu, India",icon:"fa-mountain"},{name:"Goa",country:"India",icon:"fa-umbrella-beach"},{name:"Manali",country:"Himachal Pradesh, India",icon:"fa-mountain-sun"},{name:"Bali",country:"Indonesia",icon:"fa-earth-asia"},{name:"Dubai",country:"United Arab Emirates",icon:"fa-city"},{name:"Paris",country:"France",icon:"fa-landmark"},{name:"Maldives",country:"Indian Ocean",icon:"fa-water"},{name:"Singapore",country:"Singapore",icon:"fa-building"}];
const hotels=[
{id:1,name:"Mountain Paradise Resort",city:"Ooty",rating:4.9,price:3500,description:"Luxury mountain resort with beautiful valley views."},
{id:2,name:"Ocean Breeze Beach Resort",city:"Goa",rating:4.8,price:4200,description:"Enjoy relaxing beachfront accommodation."},
{id:3,name:"Himalayan View Hotel",city:"Manali",rating:4.7,price:2800,description:"Comfortable stay surrounded by mountains."},
{id:4,name:"Tropical Paradise Villa",city:"Bali",rating:4.9,price:6500,description:"Private villa with a beautiful swimming pool."},
{id:5,name:"Royal Dubai Suites",city:"Dubai",rating:4.8,price:8500,description:"Premium hotel with modern luxury facilities."},
{id:6,name:"Paris Grand Residence",city:"Paris",rating:4.6,price:9500,description:"Elegant accommodation near popular attractions."},
{id:7,name:"Maldives Ocean Stay",city:"Maldives",rating:5.0,price:12500,description:"Overwater luxury accommodation."},
{id:8,name:"Singapore City Hotel",city:"Singapore",rating:4.7,price:7200,description:"Modern city hotel with excellent amenities."},
{id:9,name:"Green Valley Resort",city:"Ooty",rating:4.5,price:2500,description:"Affordable resort surrounded by greenery."},
{id:10,name:"Sunset Beach Hotel",city:"Goa",rating:4.6,price:3900,description:"Beautiful beachside hotel for relaxing holidays."}];
const destinationCards = [
    { name: "Ooty", country: "Tamil Nadu, India", region: "India", slug: "ooty", properties: 120, price: 2500, tag: "Hill Station" },
    { name: "Goa", country: "India", region: "India", slug: "goa", properties: 340, price: 3900, tag: "Beaches" },
    { name: "Manali", country: "Himachal Pradesh, India", region: "India", slug: "manali", properties: 210, price: 2800, tag: "Adventure" },
    { name: "Bali", country: "Indonesia", region: "International", slug: "bali", properties: 280, price: 6500, tag: "Island" },
    { name: "Dubai", country: "United Arab Emirates", region: "International", slug: "dubai", properties: 390, price: 8500, tag: "Luxury" },
    { name: "Paris", country: "France", region: "International", slug: "paris", properties: 310, price: 9500, tag: "Romantic" },
    { name: "Maldives", country: "Indian Ocean", region: "International", slug: "maldives", properties: 95, price: 12500, tag: "Overwater" },
    { name: "Singapore", country: "Singapore", region: "International", slug: "singapore", properties: 260, price: 7200, tag: "City Break" }
];

const hotelMeta = {
    1: { reviews: 1284, badge: "Best Seller", amenities: ["fa-wifi", "fa-utensils", "fa-spa", "fa-mountain"] },
    2: { reviews: 2105, badge: "Top Rated", amenities: ["fa-wifi", "fa-water-ladder", "fa-umbrella-beach", "fa-martini-glass"] },
    3: { reviews: 876, badge: "Great Value", amenities: ["fa-wifi", "fa-fire", "fa-utensils", "fa-square-parking"] },
    4: { reviews: 1540, badge: "Luxury Pick", amenities: ["fa-wifi", "fa-water-ladder", "fa-spa", "fa-utensils"] },
    5: { reviews: 3012, badge: "Popular", amenities: ["fa-wifi", "fa-dumbbell", "fa-water-ladder", "fa-concierge-bell"] },
    6: { reviews: 964, badge: "Romantic", amenities: ["fa-wifi", "fa-utensils", "fa-bell-concierge", "fa-square-parking"] },
    7: { reviews: 712, badge: "Exclusive", amenities: ["fa-wifi", "fa-water-ladder", "fa-spa", "fa-ship"] },
    8: { reviews: 1873, badge: "City Choice", amenities: ["fa-wifi", "fa-dumbbell", "fa-water-ladder", "fa-utensils"] },
    9: { reviews: 654, badge: "Budget Friendly", amenities: ["fa-wifi", "fa-tree", "fa-utensils", "fa-square-parking"] },
    10: { reviews: 1198, badge: "Beach Front", amenities: ["fa-wifi", "fa-umbrella-beach", "fa-martini-glass", "fa-utensils"] }
};

const offers = [
    { id: 1, title: "Summer Escape Sale", discount: "25% OFF", description: "Save big on beach and island stays across Goa, Bali and the Maldives.", code: "SUMMER25", valid: "Valid till 31 Dec 2026", icon: "fa-sun" },
    { id: 2, title: "Hills Weekend Special", discount: "₹1,500 OFF", description: "Flat discount on weekend bookings in Ooty and Manali above ₹6,000.", code: "HILLS1500", valid: "Valid till 15 Jan 2027", icon: "fa-mountain" },
    { id: 3, title: "First Booking Bonus", discount: "15% OFF", description: "New to Wanderly? Get 15% off on your very first hotel booking.", code: "WELCOME15", valid: "Valid for new users", icon: "fa-gift" },
    { id: 4, title: "Long Stay Saver", discount: "30% OFF", description: "Book 5 nights or more at any premium hotel and unlock 30% savings.", code: "STAY30", valid: "Valid till 28 Feb 2027", icon: "fa-calendar-days" }
];

const testimonials = [
    { name: "Priya Raghavan", place: "Chennai, India", rating: 5, text: "Booked our Ooty trip in under five minutes. The resort matched the photos perfectly and the price was lower than every other site I checked." },
    { name: "Arjun Mehta", place: "Mumbai, India", rating: 5, text: "The coupon code worked instantly and saved us a lot on our Goa holiday. Support replied within minutes when we changed dates." },
    { name: "Sneha Kapoor", place: "Delhi, India", rating: 4, text: "Loved the wishlist feature. I saved a dozen hotels, compared them later and finally picked a lovely stay in Manali." },
    { name: "Karthik Subramanian", place: "Coimbatore, India", rating: 5, text: "Our honeymoon in the Maldives was seamless from search to check-in. Transparent pricing with no hidden charges at all." },
    { name: "Aisha Khan", place: "Hyderabad, India", rating: 5, text: "Dubai trip with family was stress free. Free cancellation options gave us real peace of mind when plans shifted." },
    { name: "Rohan Desai", place: "Pune, India", rating: 4, text: "Clean interface, honest ratings and quick filters. Found a great Singapore city hotel within our budget in minutes." }
];
document.addEventListener("DOMContentLoaded",function(){
const navbarCollapse=document.getElementById("mainNavigation"),menuToggle=document.querySelector(".menu-toggle");
const closeNav=()=>{if(window.innerWidth<1200&&navbarCollapse.classList.contains("show"))bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide()};
document.querySelectorAll(".navbar-nav .nav-link").forEach(l=>l.addEventListener("click",closeNav));
document.addEventListener("click",e=>{if(!navbarCollapse.contains(e.target)&&!menuToggle.contains(e.target))closeNav()});
const navbar=document.querySelector(".travel-navbar");
window.addEventListener("scroll",()=>{navbar.style.boxShadow=window.scrollY>30?"0 5px 25px rgba(0,0,0,.12)":"0 3px 20px rgba(0,0,0,.07)"});
const destinationInput=document.getElementById("destinationInput"),suggestionsBox=document.getElementById("destinationSuggestions"),checkIn=document.getElementById("checkIn"),checkOut=document.getElementById("checkOut"),guestTrigger=document.getElementById("guestTrigger"),guestPopup=document.getElementById("guestPopup"),bookingForm=document.getElementById("travelSearchForm"),bookingMessage=document.getElementById("bookingMessage"),searchButton=document.getElementById("searchButton"),searchResults=document.getElementById("searchResults"),hotelResults=document.getElementById("hotelResults");
let selectedCategory="hotel";const guests={adults:2,children:0,rooms:1};
const localDate=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const todayString=localDate(new Date());checkIn.min=todayString;checkOut.min=todayString;
checkIn.addEventListener("change",()=>{if(!checkIn.value)return;const n=new Date(checkIn.value+"T00:00:00");n.setDate(n.getDate()+1);checkOut.min=localDate(n);if(checkOut.value&&checkOut.value<=checkIn.value)checkOut.value=""});
function renderSuggestions(v){if(!v.trim()){suggestionsBox.classList.remove("show");return}
const f=destinations.filter(d=>d.name.toLowerCase().includes(v.toLowerCase())||d.country.toLowerCase().includes(v.toLowerCase()));
suggestionsBox.innerHTML=f.length?f.map(d=>`<div class="suggestion-item" data-name="${d.name}"><div class="suggestion-icon"><i class="fa-solid ${d.icon}"></i></div><div><strong>${d.name}</strong><small>${d.country}</small></div></div>`).join(""):`<div class="suggestion-item"><span>No destinations found</span></div>`;
suggestionsBox.classList.add("show")}
destinationInput.addEventListener("input",function(){renderSuggestions(this.value)});
suggestionsBox.addEventListener("click",e=>{const i=e.target.closest(".suggestion-item");if(!i||!i.dataset.name)return;destinationInput.value=i.dataset.name;suggestionsBox.classList.remove("show")});
document.addEventListener("click",e=>{if(!e.target.closest(".destination-field"))suggestionsBox.classList.remove("show");if(!e.target.closest(".guest-field"))guestPopup.classList.remove("show")});
guestTrigger.addEventListener("click",()=>guestPopup.classList.toggle("show"));
function updateGuestSummary(){["adults","children","rooms"].forEach(k=>document.getElementById(k+"Count").textContent=guests[k]);
document.getElementById("guestSummary").textContent=`${guests.adults+guests.children} Guests, ${guests.rooms} Room${guests.rooms>1?"s":""}`}
document.querySelectorAll("[data-counter]").forEach(b=>b.addEventListener("click",function(){const t=this.dataset.counter,lim={adults:20,children:10,rooms:10};
if(this.dataset.action==="plus"&&guests[t]<lim[t])guests[t]++;
if(this.dataset.action==="minus"&&guests[t]>(t==="children"?0:1))guests[t]--;
updateGuestSummary();const r=document.getElementById("estRooms");if(r){r.value=guests.rooms;r.dispatchEvent(new Event("input"))}}));
document.getElementById("guestDone").addEventListener("click",()=>guestPopup.classList.remove("show"));
const cfg={hotel:["Where would you like to stay?","Search hotels or destinations..."],flight:["Where would you like to fly?","Search your destination..."],car:["Where would you like to drive?","Enter your pickup destination..."],package:["Where would you like to explore?","Search holiday destinations..."],cruise:["Where would you like to sail?","Search cruise destinations..."],tour:["Which place would you like to explore?","Search tour destinations..."]};
document.querySelectorAll(".booking-tab").forEach(tab=>tab.addEventListener("click",function(){document.querySelectorAll(".booking-tab").forEach(i=>i.classList.remove("active"));this.classList.add("active");selectedCategory=this.dataset.category;
document.getElementById("bookingHeading").textContent=cfg[selectedCategory][0];destinationInput.placeholder=cfg[selectedCategory][1];bookingMessage.textContent=""}));
const nightsBetween=()=>Math.max(1,Math.round((new Date(checkOut.value+"T00:00:00")-new Date(checkIn.value+"T00:00:00"))/864e5));
function renderHotels(city){const list=hotels.filter(h=>h.city.toLowerCase()===city.toLowerCase());searchResults.classList.add("show");
document.getElementById("resultsTitle").textContent=`Stays in ${city}`;document.getElementById("resultsDescription").textContent=`${list.length} properties found for your search.`;
if(!list.length){hotelResults.innerHTML=`<div class="col-12 text-center py-5"><h3>No hotels found</h3><p>Try another destination.</p></div>`;return}
const n=nightsBetween();
hotelResults.innerHTML=list.map(h=>`<div class="col-lg-4 col-md-6"><div class="hotel-result-card"><div class="hotel-result-image"><img src="${hotelImg(h.id)}" alt="${h.name}" loading="lazy"><span class="hotel-rating"><i class="fa-solid fa-star"></i> ${h.rating}</span></div><div class="hotel-result-body"><h3>${h.name}</h3><p><i class="fa-solid fa-location-dot"></i> ${h.city} · ${h.description}</p><div class="hotel-result-footer"><div class="hotel-price">₹${(h.price*n*guests.rooms).toLocaleString("en-IN")}<small>/ ${n} night${n>1?"s":""}</small></div><button class="hotel-book-btn" type="button" data-hotel="${h.id}">View Details</button></div></div></div></div>`).join("");
if(typeof gsap!=="undefined")gsap.from("#hotelResults .hotel-result-card",{opacity:0,y:35,duration:.6,stagger:.12,ease:"power2.out"});
window.scrollToTarget(searchResults)}
bookingForm.addEventListener("submit",e=>{e.preventDefault();bookingMessage.style.color="";bookingMessage.textContent="";
const m=destinations.find(i=>i.name.toLowerCase()===destinationInput.value.trim().toLowerCase());
if(!m){bookingMessage.textContent="Please select a valid destination from the suggestions.";destinationInput.focus();return}
if(!checkIn.value||!checkOut.value){bookingMessage.textContent="Please select your check-in and check-out dates.";return}
if(checkIn.value<todayString){bookingMessage.textContent="Check-in date cannot be in the past.";return}
if(checkOut.value<=checkIn.value){bookingMessage.textContent="Check-out date must be after check-in date.";return}
if(selectedCategory!=="hotel"){bookingMessage.textContent=`${selectedCategory.charAt(0).toUpperCase()+selectedCategory.slice(1)} search is a demo category. Hotel booking search is available.`;return}
searchButton.disabled=true;searchButton.innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i> Searching...`;
setTimeout(()=>{renderHotels(m.name);searchButton.disabled=false;searchButton.innerHTML=`<span>Search Now</span><i class="fa-solid fa-arrow-right"></i>`},900)});
hotelResults.addEventListener("click",e=>{const b=e.target.closest(".hotel-book-btn");if(!b)return;const h=hotels.find(i=>i.id===Number(b.dataset.hotel));if(!h)return;
const n=nightsBetween();bookingMessage.style.color="#168c70";
bookingMessage.textContent=`${h.name} | ${n} Nights | ${guests.adults+guests.children} Guests | Estimated Total: ₹${(h.price*n*guests.rooms).toLocaleString("en-IN")}`;
window.scrollToTarget(document.getElementById("home"))});
document.getElementById("clearSearch").addEventListener("click",()=>{searchResults.classList.remove("show");destinationInput.value="";checkIn.value="";checkOut.value="";window.scrollToTarget(document.getElementById("home"))});
updateGuestSummary();
});
document.addEventListener("DOMContentLoaded", function () {

    if (typeof AOS !== "undefined") {
        AOS.init({ duration: 800, once: true, offset: 70, easing: "ease-out-cubic" });
    }

    if (typeof gsap !== "undefined") {
        if (typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);
        gsap.from(".hero-badge, .hero-title, .hero-description, .hero-trust", {
            opacity: 0, y: 40, duration: 0.9, stagger: 0.15, delay: 2.8, ease: "power3.out"
        });
        gsap.from(".booking-wrapper", { opacity: 0, y: 60, duration: 1, delay: 3.2, ease: "power3.out" });
    }

    const money = value => "₹" + Math.round(value).toLocaleString("en-IN");
    const toast = document.getElementById("toastBox");
    let toastTimer;

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
    }

    const destinationGrid = document.getElementById("destinationGrid");
    const destinationChips = document.querySelectorAll("[data-region]");

    function renderDestinations(region) {
        const list = destinationCards.filter(item => region === "All" || item.region === region);
        destinationGrid.innerHTML = list.map((item, index) => `
            <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="${index * 60}">
                <a href="error.html" class="destination-card">
                    <img src="${destImg(item.name)}" alt="${item.name}" loading="lazy">
                    <span class="destination-tag">${item.tag}</span>
                    <div class="destination-info">
                        <h3>${item.name}</h3>
                        <p><i class="fa-solid fa-location-dot"></i> ${item.country}</p>
                        <div class="destination-meta">
                            <span>${item.properties}+ stays</span>
                            <strong>From ${money(item.price)}</strong>
                        </div>
                    </div>
                </a>
            </div>
        `).join("");
        if (typeof AOS !== "undefined") AOS.refreshHard();
    }

    destinationChips.forEach(chip => {
        chip.addEventListener("click", function () {
            destinationChips.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
            renderDestinations(this.dataset.region);
        });
    });

    renderDestinations("All");

    const storageKey = "wanderly_wishlist";

    function readWishlist() {
        try {
            const saved = JSON.parse(localStorage.getItem(storageKey));
            return Array.isArray(saved) ? saved : [];
        } catch (error) {
            return [];
        }
    }

    function saveWishlist(list) {
        try {
            localStorage.setItem(storageKey, JSON.stringify(list));
        } catch (error) {}
    }

    let wishlist = readWishlist();

    const featuredGrid = document.getElementById("featuredHotels");
    const filterSearch = document.getElementById("filterSearch");
    const filterPrice = document.getElementById("filterPrice");
    const filterRating = document.getElementById("filterRating");
    const filterSort = document.getElementById("filterSort");
    const wishlistToggle = document.getElementById("wishlistToggle");
    const wishlistCount = document.getElementById("wishlistCount");
    const estNights = document.getElementById("estNights");
    const estRooms = document.getElementById("estRooms");
    const resultCount = document.getElementById("featuredCount");
    const resetFilters = document.getElementById("resetFilters");

    let wishlistOnly = false;

    function estimate(price) {
        const nights = Math.max(1, Number(estNights.value) || 1);
        const rooms = Math.max(1, Number(estRooms.value) || 1);
        const base = price * nights * rooms;
        const tax = base * 0.12;
        return { nights, rooms, base, tax, total: base + tax };
    }

    function filteredHotels() {
        const query = filterSearch.value.trim().toLowerCase();
        let list = hotels.filter(hotel => {
            const matchesText = !query || hotel.name.toLowerCase().includes(query) || hotel.city.toLowerCase().includes(query);
            const matchesPrice = filterPrice.value === "all" || (() => {
                const [min, max] = filterPrice.value.split("-").map(Number);
                return hotel.price >= min && hotel.price <= max;
            })();
            const matchesRating = hotel.rating >= Number(filterRating.value);
            const matchesWishlist = !wishlistOnly || wishlist.includes(hotel.id);
            return matchesText && matchesPrice && matchesRating && matchesWishlist;
        });

        const sorters = {
            "price-asc": (a, b) => a.price - b.price,
            "price-desc": (a, b) => b.price - a.price,
            "rating-desc": (a, b) => b.rating - a.rating,
            "name-asc": (a, b) => a.name.localeCompare(b.name),
            "featured": (a, b) => a.id - b.id
        };

        return list.sort(sorters[filterSort.value]);
    }

    function updateWishlistBadge() {
        wishlistCount.textContent = wishlist.length;
    }

    function renderFeatured() {
        const list = filteredHotels();
        resultCount.textContent = `Showing ${list.length} of ${hotels.length} hotels`;

        if (!list.length) {
            featuredGrid.innerHTML = `
                <div class="col-12">
                    <div class="empty-state">
                        <i class="fa-regular fa-face-frown"></i>
                        <h3>No hotels match your filters</h3>
                        <p>Try adjusting the price, rating or wishlist filter.</p>
                    </div>
                </div>`;
            return;
        }

        featuredGrid.innerHTML = list.map(hotel => {
            const meta = hotelMeta[hotel.id];
            const cost = estimate(hotel.price);
            const saved = wishlist.includes(hotel.id);
            return `
                <div class="col-xl-3 col-lg-4 col-md-6 featured-col">
                    <div class="hotel-result-card featured-card">
                        <div class="hotel-result-image">
                            <img src="${hotelImg(hotel.id)}" alt="${hotel.name}" loading="lazy">
                            <span class="hotel-badge">${meta.badge}</span>
                            <button type="button" class="wishlist-btn ${saved ? "active" : ""}" data-wish="${hotel.id}" aria-label="Add to wishlist">
                                <i class="${saved ? "fa-solid" : "fa-regular"} fa-heart"></i>
                            </button>
                            <span class="hotel-rating"><i class="fa-solid fa-star"></i> ${hotel.rating.toFixed(1)}</span>
                        </div>
                        <div class="hotel-result-body">
                            <h3>${hotel.name}</h3>
                            <p class="mb-2"><i class="fa-solid fa-location-dot"></i> ${hotel.city} · ${meta.reviews.toLocaleString("en-IN")} reviews</p>
                            <p>${hotel.description}</p>
                            <div class="amenity-row">
                                ${meta.amenities.map(icon => `<i class="fa-solid ${icon}"></i>`).join("")}
                            </div>
                            <div class="price-estimate">
                                <div><span>${money(hotel.price)}</span> / night</div>
                                <small>${cost.nights} night${cost.nights > 1 ? "s" : ""} × ${cost.rooms} room${cost.rooms > 1 ? "s" : ""} + 12% tax</small>
                            </div>
                            <div class="hotel-result-footer">
                                <div class="hotel-price">${money(cost.total)}<small> total</small></div>
                                <a href="error.html" class="hotel-book-btn">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>`;
        }).join("");

        if (typeof gsap !== "undefined") {
            gsap.from("#featuredHotels .featured-card", { opacity: 0, y: 30, duration: 0.5, stagger: 0.07, ease: "power2.out" });
        }
    }

    featuredGrid.addEventListener("click", function (event) {
        const button = event.target.closest(".wishlist-btn");
        if (!button) return;
        const id = Number(button.dataset.wish);
        const hotel = hotels.find(item => item.id === id);
        if (wishlist.includes(id)) {
            wishlist = wishlist.filter(item => item !== id);
            showToast(`${hotel.name} removed from wishlist`);
        } else {
            wishlist.push(id);
            showToast(`${hotel.name} added to wishlist`);
        }
        saveWishlist(wishlist);
        updateWishlistBadge();
        if (wishlistOnly) {
            renderFeatured();
        } else {
            const saved = wishlist.includes(id);
            button.classList.toggle("active", saved);
            button.innerHTML = `<i class="${saved ? "fa-solid" : "fa-regular"} fa-heart"></i>`;
            if (typeof gsap !== "undefined") gsap.fromTo(button, { scale: 0.6 }, { scale: 1, duration: 0.4, ease: "back.out(3)" });
        }
    });

    [filterSearch, filterPrice, filterRating, filterSort, estNights, estRooms].forEach(control => {
        control.addEventListener("input", renderFeatured);
        control.addEventListener("change", renderFeatured);
    });

    wishlistToggle.addEventListener("click", function () {
        wishlistOnly = !wishlistOnly;
        this.classList.toggle("active", wishlistOnly);
        renderFeatured();
    });

    resetFilters.addEventListener("click", function () {
        filterSearch.value = "";
        filterPrice.value = "all";
        filterRating.value = "0";
        filterSort.value = "featured";
        estNights.value = 1;
        estRooms.value = 1;
        wishlistOnly = false;
        wishlistToggle.classList.remove("active");
        renderFeatured();
    });

    updateWishlistBadge();
    renderFeatured();

    const offersGrid = document.getElementById("offersGrid");

    offersGrid.innerHTML = offers.map((offer, index) => `
        <div class="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="${index * 80}">
            <div class="offer-card">
                <div class="offer-top">
                    <span class="offer-icon"><i class="fa-solid ${offer.icon}"></i></span>
                    <span class="offer-discount">${offer.discount}</span>
                </div>
                <h3>${offer.title}</h3>
                <p>${offer.description}</p>
                <div class="coupon-box">
                    <span>${offer.code}</span>
                    <button type="button" class="copy-coupon" data-code="${offer.code}">
                        <i class="fa-regular fa-copy"></i> Copy
                    </button>
                </div>
                <small><i class="fa-regular fa-clock"></i> ${offer.valid}</small>
            </div>
        </div>
    `).join("");

    function fallbackCopy(text) {
        const area = document.createElement("textarea");
        area.value = text;
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        try { document.execCommand("copy"); } catch (error) {}
        document.body.removeChild(area);
    }

    offersGrid.addEventListener("click", function (event) {
        const button = event.target.closest(".copy-coupon");
        if (!button) return;
        const code = button.dataset.code;
        const done = () => {
            button.innerHTML = `<i class="fa-solid fa-check"></i> Copied`;
            button.classList.add("copied");
            showToast(`Coupon ${code} copied to clipboard`);
            setTimeout(() => {
                button.innerHTML = `<i class="fa-regular fa-copy"></i> Copy`;
                button.classList.remove("copied");
            }, 2000);
        };
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(code).then(done).catch(() => { fallbackCopy(code); done(); });
        } else {
            fallbackCopy(code);
            done();
        }
    });

    const counters = document.querySelectorAll("[data-count]");

    function runCounter(element) {
        const target = Number(element.dataset.count);
        const suffix = element.dataset.suffix || "";
        const state = { value: 0 };
        if (typeof gsap === "undefined") {
            element.textContent = target.toLocaleString("en-IN") + suffix;
            return;
        }
        gsap.to(state, {
            value: target,
            duration: 2,
            ease: "power1.out",
            onUpdate: () => { element.textContent = Math.floor(state.value).toLocaleString("en-IN") + suffix; }
        });
    }

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        counters.forEach(counter => observer.observe(counter));
    } else {
        counters.forEach(runCounter);
    }

    const track = document.getElementById("testimonialTrack");
    const dots = document.getElementById("testimonialDots");
    const prevBtn = document.getElementById("testiPrev");
    const nextBtn = document.getElementById("testiNext");
    const slider = document.getElementById("testimonialSlider");

    track.innerHTML = testimonials.map((item, index) => `
        <div class="testimonial-slide">
            <div class="testimonial-card">
                <i class="fa-solid fa-quote-right quote-icon"></i>
                <div class="testimonial-stars">
                    ${Array.from({ length: 5 }, (_, i) => `<i class="${i < item.rating ? "fa-solid" : "fa-regular"} fa-star"></i>`).join("")}
                </div>
                <p>${item.text}</p>
                <div class="testimonial-user">
                    <span class="avatar-initial">${item.name.split(" ").map(w => w[0]).join("").slice(0, 2)}</span>
                    <div>
                        <strong>${item.name}</strong>
                        <small>${item.place}</small>
                    </div>
                </div>
            </div>
        </div>
    `).join("");

    let current = 0;
    let perView = 3;
    let autoplay;

    function getPerView() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 1200) return 2;
        return 3;
    }

    function totalPages() {
        return testimonials.length - perView + 1;
    }

    function buildDots() {
        dots.innerHTML = Array.from({ length: totalPages() }, (_, i) =>
            `<button type="button" class="${i === current ? "active" : ""}" data-slide="${i}" aria-label="Slide ${i + 1}"></button>`
        ).join("");
    }

    function goTo(index) {
        current = (index + totalPages()) % totalPages();
        const slideWidth = 100 / perView;
        track.style.transform = `translateX(-${current * slideWidth}%)`;
        dots.querySelectorAll("button").forEach((dot, i) => dot.classList.toggle("active", i === current));
    }

    function layoutSlider() {
        perView = getPerView();
        track.querySelectorAll(".testimonial-slide").forEach(slide => {
            slide.style.flex = `0 0 ${100 / perView}%`;
        });
        current = Math.min(current, totalPages() - 1);
        buildDots();
        goTo(current);
    }

    function startAutoplay() {
        stopAutoplay();
        autoplay = setInterval(() => goTo(current + 1), 5000);
    }

    function stopAutoplay() {
        clearInterval(autoplay);
    }

    prevBtn.addEventListener("click", () => { goTo(current - 1); startAutoplay(); });
    nextBtn.addEventListener("click", () => { goTo(current + 1); startAutoplay(); });
    dots.addEventListener("click", event => {
        const dot = event.target.closest("[data-slide]");
        if (!dot) return;
        goTo(Number(dot.dataset.slide));
        startAutoplay();
    });
    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);

    let touchStart = 0;
    slider.addEventListener("touchstart", event => { touchStart = event.touches[0].clientX; stopAutoplay(); }, { passive: true });
    slider.addEventListener("touchend", event => {
        const diff = event.changedTouches[0].clientX - touchStart;
        if (Math.abs(diff) > 50) goTo(diff < 0 ? current + 1 : current - 1);
        startAutoplay();
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(layoutSlider, 150);
    });

    layoutSlider();
    startAutoplay();

    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterEmail = document.getElementById("newsletterEmail");
    const newsletterConsent = document.getElementById("newsletterConsent");
    const newsletterMessage = document.getElementById("newsletterMessage");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function setNewsletterMessage(text, type) {
        newsletterMessage.textContent = text;
        newsletterMessage.className = "newsletter-message " + type;
    }

    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = newsletterEmail.value.trim();
        if (!email) {
            setNewsletterMessage("Please enter your email address.", "error");
            newsletterEmail.focus();
            return;
        }
        if (!emailPattern.test(email)) {
            setNewsletterMessage("Please enter a valid email address.", "error");
            newsletterEmail.focus();
            return;
        }
        if (!newsletterConsent.checked) {
            setNewsletterMessage("Please agree to receive travel updates.", "error");
            return;
        }
        let subscribers = [];
        try { subscribers = JSON.parse(localStorage.getItem("wanderly_subscribers")) || []; } catch (error) {}
        if (subscribers.includes(email.toLowerCase())) {
            setNewsletterMessage("This email is already subscribed.", "error");
            return;
        }
        subscribers.push(email.toLowerCase());
        try { localStorage.setItem("wanderly_subscribers", JSON.stringify(subscribers)); } catch (error) {}
        // setNewsletterMessage("Thank you for subscribing! Great deals are on the way.", "success");
         newsletterForm.reset();
        window.location.href="error.html";
        // showToast("Subscribed successfully");
    });

    const backTop = document.getElementById("backToTop");
    window.addEventListener("scroll", () => backTop.classList.toggle("show", window.scrollY > 600));
    backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    const sections = document.querySelectorAll("main section[id]");
    const links = document.querySelectorAll(".navbar-nav .nav-link");
    window.addEventListener("scroll", () => {
        let activeId = "home";
        sections.forEach(section => {
            if (window.scrollY + 140 >= section.offsetTop) activeId = section.id;
        });
        links.forEach(link => {
            const href = link.getAttribute("href");
            link.classList.toggle("active", href === "index.html" ? activeId === "home" : href === "index.html#" + activeId);
        });
    });

});
window.scrollToTarget=function(el,offset){const o=offset===undefined?-90:offset;if(window.lenis)window.lenis.scrollTo(el,{offset:o,duration:1.4});else el.scrollIntoView({behavior:"smooth",block:"start"})};
document.addEventListener("DOMContentLoaded",function(){
const hasGsap=typeof gsap!=="undefined";
const pre=document.getElementById("preloader");
if(pre){
const plBar=document.getElementById("plBar"),plCount=document.getElementById("plCount");
let finished=false;
const finish=()=>{if(finished)return;finished=true;pre.remove();if(window.lenis)window.lenis.start()};
setTimeout(()=>{if(window.lenis&&!finished)window.lenis.stop()},0);
setTimeout(finish,3500);
if(hasGsap){
const st={v:0};
const tl=gsap.timeline({onComplete:finish});
tl.fromTo(".pl-logo",{opacity:0,scale:.82,y:24},{opacity:1,scale:1,y:0,duration:.9,ease:"power3.out"},0)
.fromTo(".pl-tagline,.pl-bar,.pl-percent",{opacity:0,y:14},{opacity:1,y:0,duration:.5,stagger:.1,ease:"power2.out"},.3)
.to(st,{v:100,duration:2.2,ease:"power1.inOut",onUpdate:()=>{plBar.style.width=st.v+"%";plCount.textContent=Math.round(st.v)}},.1)
.to(".pl-content",{opacity:0,y:-20,scale:1.04,duration:.35,ease:"power2.in"},2.4)
.to(".pl-panel-top",{yPercent:-100,duration:.65,ease:"power3.inOut"},2.55)
.to(".pl-panel-bottom",{yPercent:100,duration:.65,ease:"power3.inOut"},2.55)}
else{plBar.style.transition="width 2.5s ease";plBar.style.width="100%";setTimeout(()=>{pre.style.transition="opacity .5s";pre.style.opacity="0";setTimeout(finish,500)},2500)}
}
if(typeof Lenis!=="undefined"){
const lenis=new Lenis({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true});window.lenis=lenis;
if(hasGsap&&typeof ScrollTrigger!=="undefined"){lenis.on("scroll",ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}
else{const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)}
document.addEventListener("click",e=>{const a=e.target.closest("a[href]");if(!a)return;const h=a.getAttribute("href");
if(h.startsWith("index.html#")||(h.startsWith("#")&&h.length>1)){const t=document.getElementById(h.split("#")[1]);if(t){e.preventDefault();lenis.scrollTo(t,{offset:-90,duration:1.4})}}})}
const bar=document.getElementById("scrollProgress");
window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-window.innerHeight;bar.style.width=(h>0?window.scrollY/h*100:0)+"%"});
if(hasGsap&&typeof ScrollTrigger!=="undefined"){
gsap.to(".hero-background",{yPercent:12,ease:"none",scrollTrigger:{trigger:".travel-hero",start:"top top",end:"bottom top",scrub:true}});
gsap.utils.toArray(".section-head").forEach(h=>gsap.from(h.querySelectorAll("h2,.section-label"),{y:30,opacity:0,duration:.8,stagger:.15,scrollTrigger:{trigger:h,start:"top 85%"}}));
gsap.from(".step-num",{scale:0,rotate:-90,duration:.8,stagger:.2,ease:"back.out(1.7)",scrollTrigger:{trigger:"#how-it-works",start:"top 70%"}});
gsap.from(".phone-mock",{y:80,opacity:0,duration:1,scrollTrigger:{trigger:".app-box",start:"top 75%"}});
gsap.from(".partner-row span",{opacity:0,y:20,stagger:.1,scrollTrigger:{trigger:".partner-row",start:"top 90%"}});
gsap.to(".phone-mock i",{y:-12,repeat:-1,yoyo:true,duration:1.6,ease:"sine.inOut"})}
const styles=[{icon:"fa-umbrella-beach",title:"Beach Escapes",text:"Sun, sand and sea across Goa, Bali and the Maldives.",key:"Goa"},{icon:"fa-mountain",title:"Hill Retreats",text:"Cool mountain air and valley views in Ooty and Manali.",key:"Ooty"},{icon:"fa-city",title:"City Breaks",text:"Skylines, shopping and nightlife in Dubai and Singapore.",key:"Singapore"},{icon:"fa-heart",title:"Romantic Getaways",text:"Candle-lit dinners and charming stays in Paris.",key:"Paris"},{icon:"fa-spa",title:"Wellness & Spa",text:"Recharge with spas, yoga and slow mornings.",key:"Bali"},{icon:"fa-water-ladder",title:"Pool Villas",text:"Private pools and overwater luxury stays.",key:"Maldives"}];
const styleGrid=document.getElementById("styleGrid");
styleGrid.innerHTML=styles.map((s,i)=>`<div class="col-xl-2 col-md-4 col-6" data-aos="flip-up" data-aos-delay="${i*70}"><button type="button" class="style-card" data-key="${s.key}"><i class="fa-solid ${s.icon}"></i><h3>${s.title}</h3><p>${s.text}</p></button></div>`).join("");
styleGrid.addEventListener("click",e=>{const c=e.target.closest(".style-card");if(!c)return;const f=document.getElementById("filterSearch");f.value=c.dataset.key;f.dispatchEvent(new Event("input"));window.scrollToTarget(document.getElementById("hotels"))});
const gallery=[["Misty tea hills, Ooty",1],["Golden sunset, Goa",0],["Snow peaks, Manali",1],["Rice terraces, Bali",0],["Skyline, Dubai",1],["Eiffel evenings, Paris",0],["Crystal lagoon, Maldives",0],["Marina Bay, Singapore",1]];
const gGrid=document.getElementById("galleryGrid");
gGrid.innerHTML=gallery.map((g,i)=>`<div class="col-lg-3 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="${(i%4)*80}"><div class="gallery-item ${g[1]?"tall":""}" data-index="${i}"><img src="${destImg(destinations[i].name)}" alt="${g[0]}" loading="lazy"><span>${g[0]}</span></div></div>`).join("");
const lb=document.getElementById("lightbox"),lbImg=document.getElementById("lbImg"),lbCap=document.getElementById("lbCap");let li=0;
function openLb(i){li=(i+gallery.length)%gallery.length;lbImg.src=destImg(destinations[li].name);lbImg.alt=gallery[li][0];lbCap.textContent=gallery[li][0];lb.classList.add("show");if(window.lenis)window.lenis.stop()}
function closeLb(){lb.classList.remove("show");if(window.lenis)window.lenis.start()}
gGrid.addEventListener("click",e=>{const g=e.target.closest(".gallery-item");if(g)openLb(Number(g.dataset.index))});
document.getElementById("lbClose").addEventListener("click",closeLb);
document.getElementById("lbPrev").addEventListener("click",()=>openLb(li-1));
document.getElementById("lbNext").addEventListener("click",()=>openLb(li+1));
lb.addEventListener("click",e=>{if(e.target===lb)closeLb()});
document.addEventListener("keydown",e=>{if(!lb.classList.contains("show"))return;if(e.key==="Escape")closeLb();if(e.key==="ArrowLeft")openLb(li-1);if(e.key==="ArrowRight")openLb(li+1)});
});

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("mainNavigation");
    if (!nav) return;
    nav.setAttribute("data-lenis-prevent", "");
    const backdrop = document.createElement("div");
    backdrop.className = "menu-backdrop";
    document.body.appendChild(backdrop);
    const root = document.documentElement;
    function lockScroll() {
        root.classList.add("menu-open");
        document.body.classList.add("menu-open");
        backdrop.classList.add("show");
        if (window.lenis) window.lenis.stop();
    }
    function unlockScroll() {
        root.classList.remove("menu-open");
        document.body.classList.remove("menu-open");
        backdrop.classList.remove("show");
        if (window.lenis) window.lenis.start();
    }
    nav.addEventListener("show.bs.collapse", lockScroll);
    nav.addEventListener("hide.bs.collapse", unlockScroll);
    backdrop.addEventListener("click", function () {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
    window.addEventListener("resize", function () {
        if (window.innerWidth >= 1200 && root.classList.contains("menu-open")) {
            bootstrap.Collapse.getOrCreateInstance(nav).hide();
            unlockScroll();
        }
    });
});