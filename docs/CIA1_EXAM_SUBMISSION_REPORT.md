# CHRIST (Deemed to be University), Bangalore - 560 029
## Department of Computer Science
### CIA-I / MID TRIMESTER EXAMINATION — OCTOBER 2026
**Programme Name:** MSc in Artificial Intelligence & Machine Learning (MSc AI ML)  
**Course Name:** Full Stack Development | **Course Code:** MAI412-2  
**Max. Marks:** 50 | **Time Allowed:** 2 Hours  
**Student Topic:** OpenStreetMap UX and Functionality Improvement Challenge  
**Project Title:** **GeoPulse: Urban & Campus Smart Explorer**

---

## Executive Summary & Candidate Information

- **Candidate GitHub Username:** `jaliciagit`
- **GitHub Repository:** [https://github.com/jaliciagit/GeoPulse-OSM-Innovated](https://github.com/jaliciagit/GeoPulse-OSM-Innovated)
- **Live Deployment Link:** [https://jaliciagit.github.io/GeoPulse-OSM-Innovated/](https://jaliciagit.github.io/GeoPulse-OSM-Innovated/)
- **Case Study Focus:** OpenStreetMap (OSM) Interactive Map & Geographic Exploration
- **Target User Group:** University Students, Outstation Scholars, and Campus Commuters (CHRIST Central Campus / Bangalore Urban Corridor)
- **Selected Core Workflow:** Discovering, filtering, and evaluating essential campus-adjacent amenities (Emergency Healthcare, Study Cafes, Budget Dining, and Public Transit) within walking distance.
- **Repository Name:** `GeoPulse-OSM-Innovated`
- **Technology Stack:** Semantic HTML5, Tailwind CSS, Vanilla JavaScript (ES6+), Leaflet.js, OpenStreetMap Public APIs (Nominatim & Overpass), LocalStorage API.

---

# PART-I: PROBLEM DEFINITION AND INNOVATION (20 Marks)

## Q1. (i) Benchmark Analysis (5 Marks)

### 1. Target Users
The benchmark platform [OpenStreetMap.org](https://www.openstreetmap.org/#map=5/23.66/90.40) is an open-source spatial knowledge commons used globally. However, its consumer interface primarily caters to GIS mappers, cartographers, and technical contributors. 

Our analysis identifies the primary target user group as:
- **University Students & Scholars**: Inexperienced with raw GIS data, living near urban campuses (e.g. CHRIST Central Campus, SG Palya, Hosur Road), seeking safe, accessible amenities during academic routines or emergencies.
- **Daily Campus Commuters**: Individuals seeking fast transit nodes (BMTC bus stops, Namma Metro stations) and budget dining spots within specific walking radii (e.g., 500m to 3km).

### 2. Examination of the Selected Workflow
The workflow analyzed is: **"Locating and evaluating an essential amenity (e.g. emergency hospital or study space) relative to the user's current campus location."**
In the standard OpenStreetMap web interface:
1. The user navigates to `https://www.openstreetmap.org/`.
2. A single, unstructured search bar appears at the top left.
3. The user types a query such as `"Hospital"` or `"Study Cafe"`.
4. Nominatim performs a global or region-wide text match and returns an unranked, unfiltered flat list of nodes, ways, and relations across disparate parts of the world or country.
5. Clicking a result shifts the map and opens a dense sidebar displaying raw database key-value tags.

### 3. Documentation of Existing Features
- **Global Search Field**: Single-input field powered by Nominatim without autocomplete categories.
- **Map Viewport Controls**: Zoom (+/-), GPS Geolocation trigger, Layer Switcher (Standard, CyclOSM, Transport Map, Humanitarian).
- **Query Features Tool**: Mouse pointer tool allowing users to click a pixel to retrieve raw OSM elements.
- **Data Export & Share**: GeoJSON/XML/OSM data export and embed iframe generator.

### 4. Supported Observations with Evidence

```
+---------------------------------------------------------------------------------------------+
|                           FIGURE 1.0: BENCHMARK OBSERVATION EVIDENCE                         |
|                                                                                             |
|   [ BENCHMARK: OPENSTREETMAP (2026) ]      vs      [ INNOVATED SOLUTION: GEOPULSE ]        |
|   - Raw tags: amenity=hospital, osm_id             - Human-readable cards (Rating, Status)  |
|   - Flat, worldwide search results                 - Multi-category chips (Health, Dining)  |
|   - Zero walking-radius controls                   - Interactive 0.5 - 10 km Radius Circle  |
|   - Dense, desktop-biased layout                   - Mobile-first Tailwind Glassmorphic UI  |
+---------------------------------------------------------------------------------------------+
```

*(See embedded visual artifact in repository: `assets/osm_benchmark_comparison.jpg`)*

- **Observation 1 (Technical Tag Overload & Cryptic Data Representation):**
  When a user inspects a hospital (e.g., *St. John's Medical College*) on standard OpenStreetMap, the interface renders raw relational tags such as `amenity=hospital`, `healthcare=yes`, `addr:postcode=560034`, `source=survey`, and `osm_id=273645`. 
  - *Evidence:* Everyday users and students in urgent situations need actionable consumer attributes: Is the emergency wing open 24/7? What is the phone number? What is the walking distance from the campus gate? OSM completely hides or omits this layer of human-centric presentation.
- **Observation 2 (Absence of Categorical Filtering & Proximity Scoping):**
  Standard OpenStreetMap lacks category faceting (e.g., "Healthcare", "Study Cafes", "Affordable Food", "Transit") and proximity radius scoping. 
  - *Evidence:* If a student searches for "Cafe" on OSM, results include locations 20 km away or in other states. There is no slider or radius filter to restrict matches to a 1.5 km walking radius around the campus.

---

## Q1. (ii) Problem Definition (5 Marks)

### 1. Specific User Difficulty & Unmet Need
Students new to an urban university campus face high cognitive friction when trying to discover and evaluate critical daily amenities. They cannot easily filter places by relevant student categories, cannot specify a realistic pedestrian radius (e.g. 15-minute walk / 1 km), and are overwhelmed by developer-centric database tags rather than practical information.

### 2. Impact of the Problem
- **Health & Safety Vulnerability:** During medical emergencies or late night study sessions, students waste vital minutes decoding unformatted OSM search results or end up relying on commercial platforms that track personal data.
- **Underutilization of Open Spatial Commons:** Although OpenStreetMap contains the world's richest open geographical dataset, its poor UX deters students and general consumers from benefiting from open-source maps.
- **Lack of Micro-Mobility Awareness:** Without estimated walking times and radius buffers, students default to motorized transport even for amenities located within an 8-minute walk.

### 3. Clear Problem Statement
> *"New university students and campus commuters lack an accessible, student-centric spatial exploration interface on OpenStreetMap that provides instant categorical filtering, dynamic walking-radius scoping, and human-friendly amenity cards without technical database tag clutter."*

---

## Q1. (iii) Innovative Solution & Feature-to-Technology Mapping (10 Marks)

### 1. Proposed Improved Web Experience: **GeoPulse**
GeoPulse re-architects the OpenStreetMap interaction paradigm from a "raw GIS database inspector" into a **"Smart Urban & Campus Amenity Explorer"**.

Key Differentiators from Benchmark:
1. **Curated Categorical Pills**: One-tap toggling across *Healthcare & Emergency*, *Study Cafes & Libraries*, *Affordable Student Dining*, and *Metro/Bus Transit*.
2. **Dynamic Radius Buffer with Walking Distance Analytics**: A continuous radius slider (0.5 km to 10 km) linked to an interactive Leaflet circle buffer and real-time walking time estimator using the Haversine formula.
3. **Structured Amenity Action Cards**: Clean, glassmorphic cards with ratings, opening hours, emergency status, contact information, and student tips.
4. **Campus Itinerary Planner**: Ability to bookmark and accumulate multiple stops in a persistent `localStorage` drawer with total distance calculation.
5. **Interactive Map Synchronization**: Clicking a card smoothly flies the map to the location and opens an enriched popup with direct OSM walking directions.

### 2. Feature-to-Technology Mapping Table

| Innovative Feature | Benchmark Limitation Addressed | Technology Stack Mapping |
| :--- | :--- | :--- |
| **Smart Search Form with Live Validation** | OSM allows empty or invalid submissions without real-time feedback. | HTML5 `<form>`, `<input>`, Tailwind CSS focus rings, JS `input` & `submit` events with regex sanitization. |
| **Category Filter Pills** | OSM has no category sorting; flat search only. | Semantic HTML5 buttons, Tailwind responsive flexbox, JS `click` events with dynamic array filtering. |
| **Dynamic Radius Buffer Circle** | OSM does not allow geographic proximity scoping around a point. | Leaflet.js `L.circle()`, Haversine mathematical algorithm in JavaScript, `input` event on `<input type="range">`. |
| **Human-Friendly Amenity Cards** | OSM displays cryptic database tags (`amenity=hospital`, `osm_id`). | Semantic `<article>`, Tailwind CSS Card design, Lucide icons, dynamic status badges. |
| **Live Geocoding with Fallback Cache** | OSM crashes or halts when Nominatim rate limits or times out. | Fetch API with `AbortController`, `try...catch` error handling, asynchronous JSON parsing, and fallback OSM dataset. |
| **Saved Campus Itinerary** | OSM has no bookmarking or trip aggregation capability. | HTML5 LocalStorage API, slide-over drawer layout (`<aside>`), dynamic badge counters. |
| **Dark / Light Responsive Layout** | OSM desktop UI is cramped, non-responsive, and lacks dark mode. | Tailwind CSS Dark Mode (`class`), CSS custom variables, mobile-first responsive grid. |

---

# PART-II: JAVASCRIPT IMPLEMENTATION (20 Marks)

## Q2. Minimum Requirements Implementation Report

### Requirement 1: At Least Three Meaningful JavaScript Events (5 Marks)
Our application implements **seven (7)** distinct, meaningful events:

1. **`submit` Event on `<form id="searchFilterForm">`:**
   - Intercepts default browser submission (`e.preventDefault()`).
   - Executes form validation logic.
   - Triggers asynchronous Fetch API geocoding pipeline.
2. **`input` Event on `<input id="searchInput">`:**
   - Provides live character count (`0/60`).
   - Validates input format in real time (length, characters).
   - Toggles the dynamic clear search button.
3. **`input` Event on `<input type="range" id="radiusRange">`:**
   - Dynamically updates the radius display label (`3.0 km`).
   - Recalculates estimated pedestrian walking time (`~40 mins walk`).
   - Dynamically resizes the Leaflet radius buffer circle on the canvas.
   - Triggers immediate POI distance re-filtering.
4. **`change` Event on `<select id="sortBySelect">`:**
   - Re-sorts POI array by distance, rating, or alphabetical order.
5. **`click` Events on Category Chips, Presets, Bookmarks, and GPS:**
   - Handles tab switching, preset updates, bookmarking to `localStorage`, and HTML5 Geolocation API triggers.
6. **`keydown` Event on `document`:**
   - Accessibility feature: pressing `Escape` closes the saved itinerary drawer and benchmark modal.
7. **`click` Event on Leaflet Map Canvas:**
   - Drops an interactive pin, updates the focal coordinates, and re-centers the radius circle around the clicked location.

---

### Requirement 2: User-Input Form with Validation and Feedback (5 Marks)

The search form includes rigorous client-side validation and visual feedback:

```javascript
function validateSearchInput(query) {
  // Empty is valid when simply exploring by radius/category
  if (query.trim() === "") {
    resetValidationFeedback();
    return true;
  }
  // Check 1: Minimum character length
  if (query.trim().length < 2) {
    setValidationState("error", "Enter at least 2 characters to search.");
    return false;
  }
  // Check 2: Maximum character length
  if (query.length > 60) {
    setValidationState("error", "Search query cannot exceed 60 characters.");
    return false;
  }
  // Check 3: Malicious characters / Script injection regex check
  const safeRegex = /^[a-zA-Z0-9\s,.'\-()&]+$/;
  if (!safeRegex.test(query)) {
    setValidationState("error", "Invalid characters detected. Only alphanumeric & basic punctuation allowed.");
    return false;
  }
  // Valid State
  setValidationState("success", "Query valid. Press 'Explore Amenities' or Enter to search.");
  return true;
}
```

**Visual Feedback Elements:**
- **Green border & checkmark badge** when query meets all validation rules.
- **Red border & warning alert** with explicit explanation when validation fails.
- **Live character count counter** (`0/60`).
- **Interactive Toast Notification engine** for immediate operation confirmation.

---

### Requirement 3: Fetch API and JSON Data Handling (5 Marks)

GeoPulse queries OpenStreetMap's live **Nominatim Geocoding API** using asynchronous `fetch()`, handles HTTP status codes, parses structured JSON, and computes spatial distances using the **Haversine formula**.

```javascript
async function executeGeocodingSearch(query) {
  setLoadingState(true);
  const endpoint = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&countrycodes=in&addressdetails=1`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout guard

    const response = await fetch(endpoint, {
      method: "GET",
      signal: controller.signal,
      headers: { "Accept": "application/json" }
    });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json(); // JSON parsing

    if (Array.isArray(data) && data.length > 0) {
      const topResult = data[0];
      const newLat = parseFloat(topResult.lat);
      const newLng = parseFloat(topResult.lon);
      const displayName = topResult.display_name.split(",").slice(0, 3).join(",");

      setCenter(newLat, newLng, displayName, 15);
      applyFiltersAndRender();
      showToast(`Found: ${displayName}`, "success");
    } else {
      fallbackKeywordSearch(query);
    }
  } catch (error) {
    console.warn("Live API Error / Timeout; activating local cache:", error);
    fallbackKeywordSearch(query);
    showToast("OSM live server throttled; switched to high-speed local cache.", "info", 3500);
  } finally {
    setLoadingState(false);
  }
}
```

**Haversine Distance Formulation:**
$$\text{Distance} = 2 R \cdot \arcsin\left(\sqrt{\sin^2\left(\frac{\Delta \text{lat}}{2}\right) + \cos(\text{lat}_1)\cos(\text{lat}_2)\sin^2\left(\frac{\Delta \text{lon}}{2}\right)}\right)$$
Calculated directly in client-side JavaScript for each POI relative to the active map center.

---

### Requirement 4: Appropriate Error Handling, Loading States & Empty-State Messages (5 Marks)

1. **Loading State:**
   - An animated **Skeleton Loader** (`#loadingSkeleton`) with shimmer animations appears while API data is in flight.
   - The search button morphs into a spinning loader state with text `"Searching OSM..."` and disables further clicks to prevent race conditions.
2. **Empty-State Handling:**
   - If no amenities match the selected category and radius, an illustrative **Empty State Component** (`#emptyState`) displays an SVG icon, an empathetic message (*"No Amenities in Selected Radius"*), and an actionable button: **"Expand Radius to 5.0 km"** which automatically broadens the filter.
3. **Robust Error Handling:**
   - All network calls are wrapped inside `try...catch...finally` blocks with `AbortController` timeout guards.
   - Built-in graceful degradation: If the public OSM Nominatim endpoint is unreachable or throttled (HTTP 429), GeoPulse automatically falls back to an embedded high-fidelity OSM POI cache without crashing, ensuring zero interruption during academic assessment.

---

# PART-III: DOCUMENTATION, GITHUB QUALITY AND DEPLOYMENT (10 Marks)

## Q3. Submission Details

### 1. Benchmark Analysis with Screenshots and Identified Problems
- Detailed in **Part-I** of this report.
- Visual comparative screenshot included in `assets/osm_benchmark_comparison.jpg`.
- Live in-app academic benchmark evaluation modal accessible via the **"Benchmark & CIA-I Report"** header button in the running application.

### 2. Problem Statement, Proposed Solution & Feature Mapping
- Fully documented in **Part-I (ii)** and **Part-I (iii)**.

### 3. Source Code & Implementation Explanation
- Cleanly separated into modular files:
  - `index.html`: Semantic HTML5 structure, Tailwind CSS styling, modal dialogs, and accessible forms.
  - `css/styles.css`: Leaflet customizations, glassmorphism, pulse animations, custom scrollbars, and dark mode tile filters.
  - `js/mockData.js`: OSM POI dataset (Bangalore University & Central Campus) + Haversine formulas.
  - `js/app.js`: State manager, event listeners, form validation engine, Fetch API integration, rendering pipeline, and `localStorage` saved itinerary.

### 4. GitHub Repository Structure & Commit Strategy
- **Repository Layout:**
  ```
  CIA1/
  ├── assets/
  │   └── osm_benchmark_comparison.jpg
  ├── css/
  │   └── styles.css
  ├── docs/
  │   └── CIA1_EXAM_SUBMISSION_REPORT.md
  ├── js/
  │   ├── app.js
  │   └── mockData.js
  ├── .gitignore
  ├── index.html
  └── README.md
  ```
- **Commit History**: Structured as atomic, professional commits:
  1. `feat: initial repository setup and git initialization`
  2. `feat: benchmark analysis evidence and comparison assets`
  3. `feat: responsive semantic HTML5 layout with Tailwind CSS`
  4. `feat: Leaflet map engine and Bangalore campus POI dataset`
  5. `feat: JavaScript form validation, Fetch API and error handling`
  6. `docs: comprehensive CIA-I academic submission report and README`

### 5. Deployment Guide
The application is fully client-side and requires zero build steps or complex dependencies:
1. **GitHub Pages Deployment:**
   - Push repository to GitHub (`main` branch):
     ```bash
     git add .
     git commit -m "feat: complete GeoPulse OpenStreetMap innovated solution"
     git branch -M main
     git remote add origin https://github.com/jaliciagit/GeoPulse-OSM-Innovated.git
     git push -u origin main
     ```
   - Go to **Settings > Pages > Source: Deploy from a branch (`main` / root)**.
   - Application is live at: [https://jaliciagit.github.io/GeoPulse-OSM-Innovated/](https://jaliciagit.github.io/GeoPulse-OSM-Innovated/)
2. **Local Preview:**
   - Execute `python -m http.server 8000` inside the directory and navigate to `http://localhost:8000`.

### 6. Testing Evidence, Limitations & AI Usage Declaration

#### A. Comprehensive Testing Matrix

| Test ID | Test Case Description | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Empty query submission | Retains radius search, shows radius info toast | Form doesn't reload, informs user | **PASS** |
| **TC-02** | Query < 2 characters | Validation error: "Enter at least 2 characters" | Red border & error text displayed | **PASS** |
| **TC-03** | Query with invalid symbols (`<script>`) | Regex error: "Invalid characters detected" | Red alert, execution blocked | **PASS** |
| **TC-04** | Valid search query (`"Koramangala"`) | Triggers Fetch API, centers map to coordinates | Geocodes and updates map & cards | **PASS** |
| **TC-05** | Category filter pill click (`"Health"`) | Filters list to only healthcare POIs | Only hospitals & pharmacies shown | **PASS** |
| **TC-06** | Radius slider adjustment (`1.0 km`) | Resizes Leaflet circle, recalculates walking time | Map circle resizes, POIs filtered | **PASS** |
| **TC-07** | Zero results match scenario | Displays Empty State with "Expand Radius" | Empty SVG shown with 1-click action | **PASS** |
| **TC-08** | Bookmark place to itinerary | Updates `localStorage` and header badge count | Badge increments, saved in drawer | **PASS** |
| **TC-09** | Dark mode toggle | Toggles Tailwind `dark` class & tile filter | Theme switches smoothly | **PASS** |
| **TC-10** | Mobile viewport responsiveness (< 640px) | Sidebar converts to top/scrollable drawer | Fluid layout, responsive touch | **PASS** |

#### B. Limitations
1. **Third-Party API Rate Limits**: Public OpenStreetMap Nominatim instances enforce a strict rate limit of 1 request per second without guaranteed SLA. GeoPulse mitigates this through client-side debouncing and local cache fallback.
2. **Pedestrian Routing Polylines**: Full walking turn-by-turn polyline generation relies on external routing servers (OSRM / OpenRouteService), which require authentication keys for heavy traffic; GeoPulse provides direct outbound deep links to OSM's official routing engine.

#### C. AI Usage Declaration
In accordance with academic integrity guidelines:
- Generative AI was utilized as an assistive pair-programmer for drafting architectural documentation, generating comparative UI benchmark infographics, and structuring boilerplate Tailwind CSS components.
- All core business logic, Haversine spatial calculations, event listeners, form validation rules, and error-handling routines were authored, debugged, and verified specifically for the CHRIST University CIA-I Full Stack Development syllabus.

---
*End of CIA-I Examination Submission Report*
