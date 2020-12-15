//Projects
const projects = [
    {
        id: "DS",
        name: "TCWA - Direct Ship",
        description: "Made for Trucking Centre Western Australia, used to help staff keep track of requests sent from remote branches to the main warehouse.",
        thumbnail: "./assets/images/projects/DS.jpg",
        url: "https://direct-ship.herokuapp.com/signin",
        github: "https://github.com/markwilson107/Direct-Ship",
        category: ["group", "javascript", "html", "css", "nodejs"]
    },
    {
        id: "TBWG",
        name: "The Bodyweight Gym",
        description: "Workout web application that helps users with their at home workout routines.",
        thumbnail: "./assets/images/projects/TBWGO.jpg",
        url: "https://markwilson107.github.io/The-Bodyweight-Gym-Online/",
        github: "https://github.com/markwilson107/The-Bodyweight-Gym-Online",
        category: ["group", "javascript", "html", "css"]
    },
    {
        id: "NT",
        name: "Note Taker",
        description: "Taking notes and having them accessible from anywhere.",
        thumbnail: "./assets/images/projects/NT.jpg",
        url: "https://note-taker-markwilson.herokuapp.com/",
        github: "https://github.com/markwilson107/Note-Taker",
        category: ["javascript", "html", "css", "nodejs"]
    },
    {
        id: "ET",
        name: "Employee Tracker",
        description: "Keep track of your employees, roles and departments.",
        thumbnail: "./assets/images/projects/ET.jpg",
        url: "https://drive.google.com/file/d/1SNH7v3Mw-aq_yYxDJUPEf9LXQEMAS9xk/view?usp=sharing",
        github: "https://github.com/markwilson107/Employee-Tracker",
        category: ["javascript", "nodejs"]
    },
    {
        id: "WD",
        name: "Weather Dashboard",
        description: "Weather dashboard demonstrating the use of APIs.",
        thumbnail: "./assets/images/projects/WD.jpg",
        url: "https://markwilson107.github.io/Weather-Dashboard/",
        github: "https://github.com/markwilson107/Weather-Dashboard",
        category: ["javascript", "html", "css", "api"]
    },
    // {
    //     id: "WDP",
    //     name: "Work Day Planner",
    //     description: "Work day planner for the user to organise their day hour by hour.",
    //     thumbnail: "./assets/images/projects/WDS.jpg",
    //     url: "https://markwilson107.github.io/Work-Day-Scheduler/",
    //     github: "https://github.com/markwilson107/Work-Day-Scheduler",
    //     category: ["javascript", "html", "css"]
    // },
    {
        id: "PG",
        name: "Password Generator",
        description: "Random password generator created using HTML, CSS, and Javascript.",
        thumbnail: "./assets/images/projects/PG.jpg",
        url: "https://markwilson107.github.io/Password-Generator/",
        github: "https://github.com/markwilson107/Password-Generator",
        category: ["javascript", "html", "css"]
    }
];

const media = [
    {
        image: "./assets/images/media/media (4).jpg"
    },
    {
        image: "./assets/images/media/media (5).jpg"
    },
    {
        image: "./assets/images/media/media (6).jpg"
    },
    {
        image: "./assets/images/media/media (1).jpg"
    },
    {
        image: "./assets/images/media/media (2).jpg"
    },
    {
        image: "./assets/images/media/media (3).jpg"
    },
    {
        image: "./assets/images/media/media (9).jpg"
    },
    {
        image: "./assets/images/media/media (10).jpg"
    },
    {
        image: "./assets/images/media/media (8).jpg"
    }
]

const video = [
    {
        id: 1,
        url: "https://player.vimeo.com/video/482268308?title=0&byline=0&portrait=0",
        thumbnail: "https://i.vimeocdn.com/video/999988483_1280.jpg"
    },
    {
        id: 2,
        url: "https://player.vimeo.com/video/482267648?title=0&byline=0&portrait=0",
        thumbnail: "https://i.vimeocdn.com/video/999987685_1280.jpg"
    },
    {
        id: 3,
        url: "https://player.vimeo.com/video/482268118?title=0&byline=0&portrait=0",
        thumbnail: "https://i.vimeocdn.com/video/999988278_1280.jpg"
    },
    {
        id: 4,
        url: "https://player.vimeo.com/video/482269228?title=0&byline=0&portrait=0",
        thumbnail: "https://i.vimeocdn.com/video/1000020666_1280.jpg"
    },
    {
        id: 5,
        url: "https://player.vimeo.com/video/441261627?title=0&byline=0&portrait=0",
        thumbnail: "https://i.vimeocdn.com/video/1000022797_1280.jpg"
    }
]



// Portfolio
// Create portfolio grid
let newGrid = [];
for (var i = 0; i < projects.length; i++) {
    let $col = $("<div>");
    $col.addClass(`col-md-4 gridId-${projects[i].id}`);
    $col.html(`<img src="${projects[i].thumbnail}" class="portfolio-img" /><div class="portfolio-overlay">
    <h2>${projects[i].name}</h2>
    <div class="portfolio-links">
    <a class="btn btn-light" href="${projects[i].github}" target="blank_">Github</a>&nbsp;
    <a class="btn btn-light" href="${projects[i].url}" target="blank_">Demo</a>
    </div>
    </div>`);
    newGrid.push($col);
}
$(".portfolio-grid").append(newGrid);

// Filter portfolio grid
function filterPortfolio(filter) {
    $(".portfolio-grid").fadeOut(200, function () {
        for (var i = 0; i < projects.length; i++) {
            if (projects[i].category.includes(filter) || filter === "all") {
                $(`.gridId-${projects[i].id}`).css("display", "block");
            } else {
                $(`.gridId-${projects[i].id}`).css("display", "none");
            }
            $(".portfolio-grid").fadeIn(200);
        }
    });
}

// Portfolio filters check 
// All
$(".portfolio-all").on("click", (event) => {
    event.preventDefault();
    $(".portfolio a").removeClass("portfolio-active");
    $(".portfolio-all").addClass("portfolio-active");
    filterPortfolio("all");
});

// HTML
$(".portfolio-html").on("click", (event) => {
    event.preventDefault();
    $(".portfolio a").removeClass("portfolio-active");
    $(".portfolio-html").addClass("portfolio-active");
    filterPortfolio("html");
});

// CSS
$(".portfolio-css").on("click", (event) => {
    event.preventDefault();
    $(".portfolio a").removeClass("portfolio-active");
    $(".portfolio-css").addClass("portfolio-active");
    filterPortfolio("css");
});

// Javascript
$(".portfolio-javascript").on("click", (event) => {
    event.preventDefault();
    $(".portfolio a").removeClass("portfolio-active");
    $(".portfolio-javascript").addClass("portfolio-active");
    filterPortfolio("javascript");
});

// Nodejs
$(".portfolio-nodejs").on("click", (event) => {
    event.preventDefault();
    $(".portfolio a").removeClass("portfolio-active");
    $(".portfolio-nodejs").addClass("portfolio-active");
    filterPortfolio("nodejs");
});

// Media
newGrid = [];
for (var i = 0; i < media.length; i++) {
    let $col = $("<div>");
    $col.addClass(`col-4 col-md-4 media-container`);
    $col.html(`<img src="${media[i].image}" class="media-img" /><div class="overlay" data="${media[i].image}"><i class="mdi mdi-arrow-expand"></div>`);
    newGrid.push($col);
}
$(".media-grid").append(newGrid);


// Media check
$(".media-container .overlay").on("click", function (event) {
    $(".modal-overlay-content").html(`<img src="${$(this).attr("data")}">`);
    $(".modal-overlay").css("display", "block");
    $(".modal-overlay").addClass("modal-zoom");
});

// Video
newGrid = [];
for (var i = 0; i < video.length; i++) {
    let $col = $("<div>");
    if (video[i].id === 5) {
        $col.addClass(`col-8 col-md-8 video-container`);
    } else {
        $col.addClass(`col-4 col-md-4 video-container`);
    }
    $col.html(`<img src="${video[i].thumbnail}" class="video-img" /><div class="overlay" data="${video[i].url}"><i class="mdi mdi-play"></div>`);
    // Appends the created grid to .portfolio-grid 
    newGrid.push($col);
}
$(".video-grid").append(newGrid);

$(".video-container .overlay").on("click", function (event) {
    $(".modal-overlay-content").html(`<iframe src="${$(this).attr("data")}" frameborder="0" allow="autoplay; fullscreen"
    allowfullscreen></iframe>`);
    $(".modal-overlay").css("display", "block");
    $(".modal-overlay").addClass("modal-zoom");
});

// View my work check
$(".view-work-btn").on("click", (event) => {
    event.preventDefault();
    // scrolls to about me element
    $('html, body').animate({
        scrollTop: $(".aboutme").offset().top - 87
    }, 1000);
});

// Open resume 
$(".open-resume").on("click", (event) => {
    event.preventDefault();
    $(".modal-overlay-content").html(`<object class="resume-container" data='./assets/pdf/RESUME2020-MarkWilson.pdf'>
    <p>Oops! Your browser doesn't support PDFs!</p>
    <p><a style="color: white;" href="./assets/pdf/RESUME2020-MarkWilson.pdf">Download Instead</a></p></object>`);
    $(".modal-overlay").css("display", "block");
    $(".modal-overlay .loader").css("display", "none");
});

// Close modal
function closeModal() {
    $(".modal-overlay").css("display", "none");
    $(".modal-overlay-content").html("");
    $(".modal-overlay .loader").css("display", "block");
}

