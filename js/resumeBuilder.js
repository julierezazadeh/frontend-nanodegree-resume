//The bio object was created to store all the necessary information to complete the biography section in this project. 
var bio = {
    "name": "Julie Rezazadeh",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "289-969-9407",
        "email": "rezazadehjulie@gmail.com",
        "github": "https://github.com/julierezazadeh",
        "location": "149 Main St W, Hamilton, ON L8P 1H9"
    },
    "welcomeMessage": "Welcome to my Portfolio Page!",
    "biopic": "images/self-image.jpg",
    skills: ["Comfortable with HTML5/CSS5", "Using CSS media queries for mobile responsiveness", "Some experience with open source website creation tools like WordPress and Shopify", "Self motivated to progress in relative studies.", " Currently enrolled in Udacity Front End Web Development Nanodegree Program", "Experienced with JavaScript"]


};

//The education object stores all the valuable information regarding the completion of my diploma and current enrollment in this course
var education = {
    "schools": [{
        "name": "Mohawk College",
        "location": "135 Fennell Ave W, Hamilton, ON L9C 1E9",
        "degree": "Software Support",
        "majors": "Computer Engineering",
        "dates": "September 2014 - January 2017",
        "url": "https://www.mohawkcollege.ca"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree Program",
        "school": "Udacity online course",
        "dates": "January 10th - Present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

//The work object was created to store the history of all the jobs I've worked in last 5 years of my life. Added URL of each job to link the website of the previous employer
var work = {
    "jobs": [{
            "employer": "Second Cup",
            "title": "Barista/Shift Lead",
            "location": "1405 Upper James St, Hamilton, ON L9B 1K2",
            "dates": "August 2016 - August 2017",
            "description": "Prepared and served drinks in accordance with health codes and café standards. Directing customers to meal add-ons and specialty drinks of perceived value to increase sales. Maintained money management for the store and delegated partners to areas in need to better help with the speed and quality of service",
            "url": "http://www.secondcup.com/"
        },
        {
            "employer": "Fallsview Casino Resort",
            "title": "Table games dealer",
            "location": "6380 Fallsview Blvd, Niagara Falls, ON L2G 7X5",
            "dates": "January 2012 - September 2015",
            "description": "Obtained required training for job title. Provided excellent guest relations skills. Ability to maintain a flexible work schedule. Dealt cards to players and dealt with large amounts of money",
            "url": "https://www.fallsviewcasinoresort.com/"
        },
        {
            "employer": "iDeaWORKS",
            "title": "Software Tester",
            "location": "135 Fennell Ave W, Hamilton, ON L9C 1E9",
            "dates": "5 months for a school co-op",
            "description": "Implemented software tests using Selenium WebDriver. Wrote test plans to test web forms in multiple browsers. Wrote Test cases written using a black box testing approach",
            "url": "https://www.mohawkcollege.ca/about-mohawk/initiatives/applied-research/ideaworks"
        }
    ]
};


//The projects objects was created the store some of my most recent projects within this course
var projects = {
    "projects": [{
            "title": "Fluid-CSS",
            "dates": "February 2017 - https://github.com/julierezazadeh/fluid-css",
            "description": "This project involves adding CSS breakpoints to HTML to create a responsive webpage. This basic example will be the starting point in learning how to make a web page look good on all devices (desktops, tablets and phones).",
            "url": "https://github.com/julierezazadeh/fluid-css",
            "images": "images/a.jpg"
        },
        {
            "title": "Home-Town-App",
            "dates": "March 2017 - https://github.com/julierezazadeh/home-town-app",
            "description": "This project creates an imaginery news article with more content to manipulate. Using CSS breakpoints I was able to allow the images and text to increase or decrease in size according to the pages dimensions. This allows for a much more appealing design to the page.",
            "url": "https://github.com/julierezazadeh/home-town-app",
            "images": "images/b.jpg"
        },
        {
            "title": "Peach-Icecream",
            "dates": "April 2017 - https://github.com/julierezazadeh/making-peach-icecream",
            "description": "This project was a simple approach to learning the basics of external style sheets.",
            "url": "https://github.com/julierezazadeh/making-peach-icecream",
            "images": "images/c.jpg"
        }
    ]
};

//The bio function appends all the objects created in the bio object to the header of topContacts DIV
bio.display = function() {
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile) + HTMLemail.replace("%data%", bio.contacts.email) + HTMLgithub.replace("%data%", bio.contacts.github) + HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic) + HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }
};



//This function displays the jobs found in the work object and appends them to the ID workExperience found in index.html

work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
        $("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $("#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
        $("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
};

//This function displays the courses found in the education object and appends them to the ID education found in index.html

education.display = function() {
    for (var course in education.schools) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[course].degree).replace("#", education.schools[course].url) + HTMLschoolDegree.replace("%data%", education.schools[course].name));
        $("#education").append(HTMLschoolDates.replace("%data%", education.schools[course].dates));

        $("#education").append(HTMLschoolLocation.replace("%data%", education.schools[course].location));
        $("#education").append(HTMLschoolMajor.replace("%data%", education.schools[course].majors));

    }

    for (var online in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title).replace("#", education.onlineCourses[online].url) + HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school));

        $("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates));
    }
};



//This function takes in a name from the object "bio" and plays around with the capitalization 
function inName(names) {
    names = names.trim().split(" ");
    console.log(names);

    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    return names[0] + " " + names[1];
}


projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url));
        $("#projects").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $("#projects").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
        $("#projects").append(HTMLprojectImage.replace("%data%", projects.projects[project].images));

    }
};

//footerContacts

$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile) + HTMLemail.replace("%data%", bio.contacts.email) + HTMLgithub.replace("%data%", bio.contacts.github) + HTMLlocation.replace("%data%", bio.contacts.location));


console.log(inName(bio.name));
bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);