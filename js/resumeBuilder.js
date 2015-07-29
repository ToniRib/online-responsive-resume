// Define the bio object based on the provided template (in JSON format)
var bio = {
	"name": "Toni Rib",
	"role": "Front End Web Developer",
	"contacts": {
		"email": "tonimarierib@gmail.com",
		"phone": "612-670-6397",
		"github": "tonirib",
		"twitter": "tonimarierib",
		"location": "Denver, CO",
		"linkedin": "ToniRib"},
	"welcomeMessage": "Aspiring web developer with a passion for bold designs. Leaving the space industry for a better future in web development.",
	"skills": [
		["HTML", "80"],
		["CSS", "80"],
		["JavaScript", "70"],
		["Git", "60"],
		["GitHub", "50"]],
	"bioPic": "images/key-profile.jpg"
};

// Add a dipslay method for the object
bio.display = function() {
	/* This function uses jQuery to modify the index.html file using
	data from the bio object. Main information is added to the header div,
	while contact information is added to topContacts and footerContacts */

	// Add name and role to the header of the page
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#info').prepend(formattedRole);
	$('#info').prepend(formattedName);

	// Add biopic to the header of the page
	// var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
	// $('#info').append(formattedBioPic);

	// Add welcome message to the header of the page
	var formattedMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('.message').prepend(formattedMsg);

	/* Check whether there are skills in the bio object and display all
	skills if there are */
	if (bio.skills.length > 0) {

		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i][0]);
			var formattedProgress = HTMLprogress.replace('%data%', bio.skills[i][1]);
			$('#skills').append(formattedSkill);
			$('#skills').append(formattedProgress);
		}
	}

	// Add the contact info to the header and footer contact sections
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.phone);
	$('.nonlink-contacts').prepend(formattedMobile);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('.nonlink-contacts').prepend(formattedLocation);
	var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
	$('#topContacts').prepend(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
	$('#topContacts').prepend(formattedTwitter);
	var formattedGitub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
	$('#topContacts').prepend(formattedGitub);
	var formattedLinkedin = HTMLlinkedin.replace(/%data%/g, bio.contacts.linkedin);
	$('#topContacts').prepend(formattedLinkedin);
};

// Define the education object based on the provided template (in JSON format)
// with both completed degrees and completed online courses
var education = {
	"schools": [
		{
			"name": "University of Southern California",
			"location": "Los Angeles, CA",
			"degree": "Bachelor of Science",
			"majors": "Astronautical Engineering",
			"dates": "2011",
			"url": "http://www.usc.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Development Nanodegree",
			"school": "Udacity",
			"dates": "TBD",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "The Data Scientists Toolbox",
			"school": "Coursera",
			"dates": "January 2015",
			"url": "https://www.coursera.org/course/datascitoolbox"
		},
		{
			"title": "R Programming",
			"school": "Coursera",
			"dates": "February 2015",
			"url": "https://www.coursera.org/course/rprog"
		},
		{
			"title": "Getting and Cleaning Data",
			"school": "Coursera",
			"dates": "March 2015",
			"url": "https://www.coursera.org/course/getdata"
		},
		{
			"title": "Exploratory Data Analysis",
			"school": "Coursera",
			"dates": "April 2015",
			"url": "https://www.coursera.org/course/exdata"
		},
		{
			"title": "Reproducible Research",
			"school": "Coursera",
			"dates": "May 2015",
			"url": "https://www.coursera.org/course/repdata"
		},
		{
			"title": "Statistical Inference",
			"school": "Coursera",
			"dates": "June 2015",
			"url": "https://www.coursera.org/course/statinference"
		}
	]
};

// Add a display method for the object
education.display = function() {
	/* This function uses jQuery to modify the index.html file using
	data from the education object. Main information is added to education div
	as education entries. */

	for (var school in education.schools) {
		// Start a new education entry for each class
		$('#education').append(HTMLschoolStart);

		// Add the school name to the education entry and link to the url
		var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
		formattedSchoolName = formattedSchoolName.replace('#', education.schools[school].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		$('.education-entry:last').append(formattedSchoolName + " " + formattedSchoolDegree);

		// Add the date of graduation to the education entry
		var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$('.education-entry:last').append(formattedSchoolDates);

		// Add the school's location (city, state) to the education entry
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		$('.education-entry:last').append(formattedSchoolLocation);

		// Add the major to the education entry
		var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
		$('.education-entry:last').append(formattedSchoolMajor);
	}

	// Add the online courses title
	$('#education').append(HTMLonlineClasses);

	for (var course in education.onlineCourses) {

		var onlineTitle = $('#education').find('h3');
		$(onlineTitle).append(HTMLonlineStart);

		// Format the course name and school and link it to the url
		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
		formattedOnlineTitle = formattedOnlineTitle.replace('#', education.onlineCourses[course].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
		$('.online-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);

		// Format the course date and add it to the last online class entry
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
		$('.online-entry:last').append(formattedOnlineDates);
	}
};

// Define the work object based on provided template
var work = {
	"jobs": [
		{
			"title": "Senior Systems Engineer",
			"employer": "Raytheon",
			"dates": "August 2014 - present",
			"location": "Aurora, CO",
			"description": ["Program technical lead for the Space Link Extension protocol", "Technical lead for approved engineering estimate worth approximately $750k", "Led integration checkout for Space Link Extension non-nominal functionality", "Manage and verify requirements for science mission data on the Joint Polar Satellite System Common Ground System program", "Design and execute software tests to verify requirements"]
		},
		{
			"title": "Systems & Software Safety Engineer",
			"employer": "Raytheon",
			"dates": "June 2013 - August 2014",
			"location": "Aurora, CO",
			"description": ["Ensure the safety of the system by identifying hazards and implementing appropriate controls", "Chaired the System Safety Review Board", "Perform site safety assessments during hardware installations"]
		},
		{
			"title": "Quality Engineer",
			"employer": "Boeing",
			"dates": "October 2011 - June 2013",
			"location": "El Segundo, CA",
			"description": ["Provide quailty metrics, nonconformance management, corrective action suport, test & area surveillance, and production support to satellite bus products laboratories", "Site administrator for online quality checklist system", "Boeing Best Practice site focal & Lean Manufacturing focal for the Manufacturing Self Examination initiative"]
		}
	]
};


// Add a display method to the work object
work.display = function() {
	/* This function uses jQuery to modify the index.html file using
	data from the work object. Main information is added to workExperience div
	as work entries. */
	for (var job in work.jobs) {

		// Create a new work-entry
		$('#workExperience').append(HTMLworkStart);

		// Add the job employer & title to the work entry
		var formattedJobEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedJobTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		$('.work-entry:last').append(formattedJobEmployer + formattedJobTitle);

		// Add the dates worked to the work entry
		var formattedDatesWorked = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		$('.work-entry:last').append(formattedDatesWorked);

		// Add the job location (city, state) to the work entry
		var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		$('.work-entry:last').append(formattedWorkLocation);

		// Add the job description to the work entry
		for (var item in work.jobs[job].description) {
			var formattedWorkDescItem = HTMLworkDescItem.replace('%data%', work.jobs[job].description[item]);
			$('.work-entry:last').append(formattedWorkDescItem);
		}

	}
};


// Define the project object based on the provided template
var projects = {
	"projects": [
		{
			"title": "Save the Kitties Arcade Game",
			"dates": "July 2015",
			"description": "Frogger-style arcade game created for Udacity\"s Front End Web Developer Nanodegree using JavaScipt and HTML5 canvas.",
			"url": "http://tonirib.github.io/frontend-nanodegree-arcade-game"
		},
		{
			"title": "Insomniacs Waking Dream Blog",
			"dates": "July 2015 - present",
			"description": "Personal online blog about life and changing careers.",
			"url": "http://insomniacswakingdream.com"
		}
	]
};

// Add a display method to the object
projects.display = function() {
	/* This function uses jQuery to modify the index.html file using
	data from the projects object. Main information is added to projects div
	as project entries. */
	for (var entry in projects.projects) {

		// Create a new project-entry
		$('#projects').append(HTMLprojectStart);

		// Add the project title to the project entry
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[entry].title);
		formattedTitle = formattedTitle.replace('#', projects.projects[entry].url)
		$('.project-entry:last').append(formattedTitle);

		// Add the project dates to the project entry
		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[entry].dates);
		$('.project-entry:last').append(formattedDates);

		// Add the project description to the project entry
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[entry].description);
		$('.project-entry:last').append(formattedDescription);

		// If project images exist, add them to the project entry
		// if (projects.projects[entry].images.length > 0) {
		// 	for (var image in projects.projects[entry].images) {
		// 		var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[entry].images[image]);
		// 		$('.project-entry:last').append(formattedImage);
		// 	}

		// }
	}
};


/* Call all of the display methods for the four main objects to display
the content to the page */
bio.display();
education.display();
work.display();
projects.display();

// Show the Google Map
$('#map-div').append(googleMap);