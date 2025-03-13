function showDetails(name, specs) {
    document.getElementById("bike-name").innerText = name;
    document.getElementById("bike-specs").innerText = specs;
    document.getElementById("bike-details").style.display = "block";
}

function closeDetails() {
    document.getElementById("bike-details").style.display = "none";
}

// Check localStorage for theme preference
// document.addEventListener("DOMContentLoaded", function () {
//     const themeToggle = document.getElementById("theme-toggle");
//     const currentTheme = localStorage.getItem("theme");

//     if (currentTheme === "light") {
//         document.body.classList.add("light-mode");
//         themeToggle.innerText = "Dark Mode";
//     }

//     themeToggle.addEventListener("click", function () {
//         document.body.classList.toggle("light-mode");

//         if (document.body.classList.contains("light-mode")) {
//             localStorage.setItem("theme", "light");
//             themeToggle.innerText = "Dark Mode";
//         } else {
//             localStorage.setItem("theme", "dark");
//             themeToggle.innerText = "Light Mode";
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
        themeToggle.innerHTML = "🌙"; // Moon for Dark Mode
    } else {
        themeToggle.innerHTML = "☀️"; // Sun for Light Mode
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = "🌙"; // Moon for Dark Mode
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = "☀️"; // Sun for Light Mode
        }
    });
});


// Populate dropdowns with bike names
document.addEventListener("DOMContentLoaded", function () {
    const select1 = document.getElementById("bike1");
    const select2 = document.getElementById("bike2");

    Object.keys(bikeData).forEach(bike => {
        const option1 = new Option(bike, bike);
        const option2 = new Option(bike, bike);
        select1.add(option1);
        select2.add(option2);
    });
});

// Function to compare bikes
function compareBikes() {
    const bike1Name = document.getElementById("bike1").value;
    const bike2Name = document.getElementById("bike2").value;

    if (!bike1Name || !bike2Name || bike1Name === bike2Name) {
        alert("Please select two different bikes to compare.");
        return;
    }

    const bike1 = bikeData[bike1Name];
    const bike2 = bikeData[bike2Name];

    const comparisonHTML = `
        <table>
            <tr>
                <th>Feature</th>
                <th>${bike1Name}</th>
                <th>${bike2Name}</th>
            </tr>
            <tr>
                <td>Engine</td>
                <td>${bike1.specs}</td>
                <td>${bike2.specs}</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>${bike1.description}</td>
                <td>${bike2.description}</td>
            </tr>
            <tr>
                <td>More Details</td>
                <td><a href="${bike1.link}" target="_blank">View</a></td>
                <td><a href="${bike2.link}" target="_blank">View</a></td>
            </tr>
        </table>
    `;

    document.getElementById("comparison-result").innerHTML = comparisonHTML;
    document.getElementById("comparison-result").style.display = "block";
}





const bikeData = {
    "Yamaha R1M": {
        img: "R1M.jpg",
        specs: "1000cc, 200HP, 299km/h",
        description: "The Yamaha YZF-R1 is a high-performance superbike featuring cutting-edge technology from MotoGP.",
        link:"https://www.yamahamotorsports.com/models/yzf-r1m"
        
    },
    "Ducati Panigale V4": {
        img: "V4.jpg",
        specs: "1103cc, 214HP, 310km/h",
        description: "The Ducati Panigale V4 is an Italian masterpiece, offering extreme performance and stunning design.",
        link:"https://www.ducati.com/in/en/bikes/panigale/panigale-v4"

    },
    "Kawasaki Ninja H2": {
        img: "H2.jpg",
        specs: "998cc, 231HP, 337km/h",
        description: "The Ninja H2 is a supercharged beast, designed for high-speed performance and ultimate thrill.",
        link:"https://www.kawasaki-india.com/en/motorcycles/ninja/ninja-h2-sx-2025.html"
    },
    "BMW S1000RR": {
        img: "s1000rr.jpg",
        specs: "999cc, 205HP, 303km/h",
        description: "BMW’s S1000RR is a race-inspired superbike with a powerful engine and lightweight frame.",
        link:"https://www.bmw-motorrad.in/en/models/sport/s1000rr-new.html"
    },
    "Suzuki Hayabusa": {
        img: "BUSA.jpg",
        specs: "1340cc, 187HP, 312km/h",
        description: "The Suzuki Hayabusa is a legendary hyperbike known for its high speed and comfortable ride.",
        link:"https://www.suzukimotorcycle.co.in/product-details/hayabusa"
    },
    "Honda CBR1000RR-R": {
        img: "Honda CBR1000RR-R.jpg",
        specs: "999cc, 217HP, 299km/h",
        description: "Honda's CBR1000RR-R Fireblade offers precision handling, power, and aerodynamics inspired by MotoGP."
    },
    "Aprilia RSV4 1100": {
        img: "Aprilia RSV4 1100.jpg",
        specs: "1099cc, 217HP, 305km/h",
        description: "The Aprilia RSV4 1100 is an Italian superbike with top-tier technology and exceptional performance.",
        link:"https://www.aprilia.com/us_EN/models/rsv4/rsv4-1100-4s4v-2023/"
    },
    "MV Agusta F4": {
        img: "MV Agusta F4.jpg",
        specs: "998cc, 212HP, 312km/h",
        description: "MV Agusta's F4 is a stunning superbike known for its aggressive styling and impressive speed.",
        link:"https://www.bikewale.com/mvagusta-bikes/f4/"
    },
    "KTM RC 8C": {
        img: "KTM RC 8C.jpg",
        specs: "889cc, 135HP, 290km/h",
        description: "The KTM RC 8C is a lightweight track weapon, built for precision and agility.",
        link:"https://www.ktm.com/en-int/models/supersport/2024-ktm-rc-8c.html"
    },
    "Triumph Daytona 765": {
        img: "Triumph Daytona 765.jpg",
        specs: "765cc, 130HP, 265km/h",
        description: "Triumph’s Daytona 765 offers a perfect balance of speed, handling, and power.",
        link:"https://www.triumphmotorcycles.com/motorcycles/roadsters/daytona-moto2-765/limited-edition"
    },
    "Yamaha MT-10": {
        img: "Yamaha MT-10.jpg",
        specs: "998cc, 160HP, 245km/h",
        description: "The Yamaha MT-10 is a naked powerhouse with an aggressive design and exhilarating performance.",
        link:"https://yamahamotorsports.com/models/mt-10"
    },
    "Ducati Streetfighter V4": {
        img: "Ducati Streetfighter V4.jpg",
        specs: "1103cc, 208HP, 299km/h",
        description: "Ducati's Streetfighter V4 is a hyper-naked beast delivering raw power with a striking look.",
        link:"https://www.ducati.com/ww/en/bikes/streetfighter/streetfighter-v4"
    },
    "Kawasaki ZX-10R": {
        img: "Kawasaki ZX-10R.jpg",
        specs: "998cc, 203HP, 299km/h",
        description: "The Kawasaki ZX-10R is a championship-winning superbike packed with advanced technology.",
        link:"https://www.kawasaki-india.com/en/motorcycles/ninja/ninja-zx-10r-2025.html"
    },
    "BMW M1000RR": {
        img: "BMW M1000RR.jpg",
        specs: "999cc, 212HP, 306km/h",
        description: "The BMW M1000RR is a high-performance track bike with aerodynamics optimized for speed.",
        link:"https://www.bmw-motorrad.in/en/models/m/m1000rr.html"
    },
    "Suzuki GSX-R1000": {
        img: "Suzuki GSX-R1000.jpg",
        specs: "999cc, 199HP, 300km/h",
        description: "Suzuki’s GSX-R1000 is a well-balanced superbike with a legacy of racing success.",
        link:"https://www.globalsuzuki.com/motorcycle/smgs/products/2024gsx-r1000/"
    },
    "Honda Fireblade SP": {
        img: "Honda Fireblade SP.jpg",
        specs: "999cc, 214HP, 299km/h",
        description: "The Fireblade SP combines Honda's engineering excellence with track-inspired aerodynamics."
    },
    "Aprilia Tuono V4": {
        img: "Aprilia Tuono V4.jpg",
        specs: "1077cc, 175HP, 280km/h",
        description: "The Aprilia Tuono V4 is a high-performance naked bike with track-ready capabilities.",
        link:"https://www.aprilia.com/us_EN/models/tuono-v4/"
    },
    "MV Agusta Brutale 1000 RR": {
        img: "MV Agusta Brutale 1000 RR.jpg",
        specs: "998cc, 208HP, 305km/h",
        description: "MV Agusta’s Brutale 1000 RR is an aggressive, high-performance naked sportbike.",
        link:"https://www.mvagusta.com/product/brutale/1000-rr"
    },
    "KTM 1390 Super Duke R": {
        img: "KTM 1290 Super Duke R.jpg",
        specs: "1301cc, 180HP, 289km/h",
        description: "KTM’s 1390 Super Duke R is a streetfighter with immense power and torque.",
        link:"https://www.ktmindia.com/ktm-bikes/naked-bike/ktm-1390-super-duke-r"
    },
    "Triumph Speed Triple 1200 RR": {
        img: "Triumph Speed Triple 1200 RR.jpg",
        specs: "1160cc, 178HP, 270km/h",
        description: "The Speed Triple 1200 RR is a café racer-styled superbike with modern-day performance.",
        link:"https://www.triumphmotorcycles.com/motorcycles/roadsters/speed-triple-1200-rr"
    },
    "Yamaha R7": {
        img: "Yamaha R7.jpg",
        specs: "689cc, 73HP, 220km/h",
        description: "The Yamaha R7 is a middleweight sportbike offering a blend of power and agility.",
        link:"https://yamahamotorsports.com/models/yzf-r7"
    },
    "Ducati Monster 1200": {
        img: "Ducati Monster 1200.jpg",
        specs: "1198cc, 147HP, 255km/h",
        description: "The Ducati Monster 1200 is a powerful yet comfortable naked bike with Italian styling.",
        link:"https://www.ducati.com/th/th/bikes/monster/monster-1200"
    }
};


function showDetails(bikeName) {
    const bike = bikeData[bikeName];
    if (bike) {
        document.getElementById("bike-name").innerText = bikeName;
        document.getElementById("bike-specs").innerText = bike.specs;
        document.getElementById("bike-desc").innerText = bike.description;
        document.getElementById("bike-img").src = bike.img;

        // Directly set the anchor tag in innerHTML
        document.getElementById("bike-link").innerHTML = `<a href="${bike.link}" target="_blank">More Details</a>`;

        document.getElementById("bike-details").classList.add("show");
    }
}


function closeDetails() {
    document.getElementById("bike-details").classList.remove("show");
}


function searchBikes() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const bikeCards = document.getElementsByClassName("bike-card");

    for (let i = 0; i < bikeCards.length; i++) {
        const bikeName = bikeCards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (bikeName.includes(input)) {
            bikeCards[i].style.display = "";
        } else {
            bikeCards[i].style.display = "none";
        }
    }
}


let currentAudio = null; // Global variable to track the current audio

function playSound(event, soundFile) {
    event.stopPropagation(); // Prevent triggering the modal
    
    // Stop and reset the previous audio if it's playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Create a new audio instance and play it
    currentAudio = new Audio(soundFile);
    currentAudio.play();

    // Automatically stop the audio after 10 seconds
    setTimeout(() => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }, 15000); // 15,000 milliseconds = 15 seconds
}

// Stop audio when clicking anywhere on the page
document.body.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});