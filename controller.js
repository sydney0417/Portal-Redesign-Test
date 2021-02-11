let date = new Date();

let result = {
    name: "Sydney Driscoll",
    usfID: "U15813963",
    campus: "Tampa",
    major1: "Computer Science",
    advisor: "krystabanke",
    email: "sydneyd2@usf.edu",
    firstName: "Sydney",
    academic: true,
    community: false,
    global: 1,
    entryTerm: "Fall 2019",
    usfGpa: 3.79,
    overallGpa: 3.79,
    status: "H4NA",
    events: [
        {   Name: "Some Event",
            Date: date,
            Location: "ALN",
            Cap: 25,
            Category: 1,
            Token: 100
        }
    ]
};

function greetUser(name)
{
    if (name)
        $(".welcome-text").text(", " + name + "!");
    else
        $(".welcome-text").text("!");
}

function populateProfile(student)
{
    document.querySelector('#profile-name').textContent = student.name;

    if (student.usfID) {
        document.querySelector('#profile-u-number-container').innerHTML = "<div id='profile-u-number'></div>";
        document.querySelector('#profile-u-number').textContent = student.usfID;
    }

    if (student.campus)
        document.querySelector('#profile-campus').textContent = student.campus + " campus";

    if (student.major1)
        document.querySelector('#profile-major-1').textContent = student.major1;

    if (student.major2)
        document.querySelector('#profile-major-2').textContent = "and " + student.major2 + " student";
    else if (student.major1)
        document.querySelector('#profile-major-1').textContent = student.major1 + " student";
    
    if (student.minor)
        document.querySelector('#profile-minor').textContent = "with a minor in " + student.minor;

    let advisor = document.querySelector('#profile-advisor');

    switch (student.advisor) {
        case 'amejias':
            advisor.innerHTML = "<a href='mailto:mejias@honors.usf.edu' target='_blank'>Arnaldo Mejias</a>";
            break;
        case 'lucien':
            advisor.innerHTML = "<a href='mailto:lucien@honors.usf.edu' target='_blank'>Reginald Lucien</a>";
            break;
        case 'krystabanke':
            advisor.innerHTML = "<a href='mailto:krystabanke@usf.edu' target='_blank'>Krysta Banke</a>";
            break;
        case 'mbraunstein':
            advisor.innerHTML = "<a href='mailto:mbraunstein@honors.usf.edu' target='_blank'>Megan Braunstein</a>";
            break;
        case 'clee24':
            advisor.innerHTML = "<a href='mailto:clee24@usf.edu' target='_blank'>Kevin Lee</a>";
            break;
        case 'harbert':
            advisor.innerHTML = "<a href='mailto:harbert@honors.usf.edu' target='_blank'>Carter Harbert</a>";
            break;
        case 'dsoluna':
            advisor.innerHTML = "<a href='mailto:dsoluna@usf.edu' target='_blank'>Dani Soluna</a>";
            break;
        case 'mmandell':
            advisor.innerHTML = "<a href='mailto:Mmandell@honors.usf.edu' target='_blank'>Megan Stowe</a>";
            break;
        case 'acousino':
            advisor.innerHTML = "<a href='mailto:acousino@usf.edu' target='_blank'>Allyson Cousino Smith</a>";
    }

    document.querySelector('#profile-email').textContent = student.email;
    document.querySelector('#profile-entry-term').textContent = student.entryTerm;
    document.querySelector('#profile-usf-gpa').textContent = student.usfGpa;
    document.querySelector('#profile-overall-gpa').textContent = student.overallGpa;
    document.querySelector('#profile-honors-status').textContent = student.status;
}

function adjustToMobile(x) {
    if (x.matches) {
        $('#ava-heading').css('display', 'none');
        $('#ava-heading-mobile').css('display', 'block');
        $('.collapse-btn').css('display', 'block');
        $('.small-col').attr('id', 'collapsingSidebar');
        $('.small-col').addClass('collapse');
        $('#grad-req-link').css('display', 'none');
        $('#mobile-grad-req-link').css('display', 'block');
        $('#welcome').css('display', 'none');
        $('#welcome-mobile').css('display', 'block');
    }
    else {
        $('#ava-heading').css('display', 'block');
        $('#ava-heading-mobile').css('display', 'none');
        $('#expandButton').css('display', 'none');
        $(".small-col").removeAttr('id');
        $(".small-col").removeClass('collapse');
        $('#grad-req-link').css('display', 'inline-block');
        $('#mobile-grad-req-link').css('display', 'none');
        $('#welcome').css('display', 'block');
        $('#welcome-mobile').css('display', 'none');
    }
}

var mobileMediaQuery = window.matchMedia("(max-width: 992px)");
mobileMediaQuery.addListener(adjustToMobile);
adjustToMobile(mobileMediaQuery);

function checkAcademicProgress(isCompleted) {
    if (isCompleted) {
        document.querySelector("#academic-progress").style.width = "100%";
        document.querySelector("#academic-text").innerHTML = "1/1";
    }
    else {
        document.querySelector("#academic-progress").style.width = "0";
        document.querySelector("#academic-text").innerHTML = "0/1";
    }
}

function checkServiceProgress(isCompleted) {
    if (isCompleted) {
        document.querySelector("#service-progress").style.width = "100%";
        document.querySelector("#service-text").innerHTML = "1/1";
    }
    else {
        document.querySelector("#service-progress").style.width = "0";
        document.querySelector("#service-text").innerHTML = "0/1";
    }
}

function checkGlobalProgress(globalExperiences) {
    if (globalExperiences === 1) {
        document.querySelector("#global-progress").style.width = "50%";
        document.querySelector("#global-text").innerHTML = "1/2";
    }
    else if (globalExperiences >= 2) {
        document.querySelector("#global-progress").style.width = "100%";
        document.querySelector("#global-text").innerHTML = "2/2";
    }
    else if (globalExperiences === 0) {
        document.querySelector("#global-progress").style.width = "0";
        document.querySelector("#global-text").innerHTML = "0/2";
    }

//    const progressElement = document.querySelector("#global-progress");

 //   progressElement.innerHTML = `${countedExperiences}/2`;
 //   progressElement.style.width = `${countedExperiences * 50}%`;
}

function populateEvents(events) {
    /* 
     * In the HTML, an inline style sets all the event cards' displays to none. This is to make sure appropriate number of 
     * upcoming events are displayed
     */
    switch (events.length) {
        case 0:
            document.querySelector("#no-events-text").textContent = "No upcoming events found at this time.";
            break;
        case 1:
            document.querySelector("#event-card-1").style.display = "block";
            document.querySelector("#event-card-2").style.display = "none";
            document.querySelector("#event-card-3").style.display = "none";
            break;
        case 2:
            document.querySelector("#event-card-1").style.display = "block";
            document.querySelector("#event-card-2").style.display = "block";
            document.querySelector("#event-card-3").style.display = "none";
            break;
        case 3:
            document.querySelector("#event-card-1").style.display = "block";
            document.querySelector("#event-card-2").style.display = "block";
            document.querySelector("#event-card-3").style.display = "block";
    }

    for (var i = 0; i < events.length; i++) {
        let date = new Date( events[i].Date);
        let eventDate = date.toLocaleString("en-us", { month: 'long', day: 'numeric' });
        let eventStartTime = date.toLocaleString("en-us", { hour: 'numeric', minute: 'numeric', hour12: true});
        let eventEndTime = new Date(events[i].EndTime).toLocaleString("en-us", { hour: 'numeric', minute: 'numeric', hour12: true});

        document.querySelector("#event-card-" + (i + 1) + " .event-date").textContent = eventDate;
        document.querySelector("#event-card-" + (i + 1) + " .event-time").textContent = eventStartTime + " - " + eventEndTime;

        let eventCategory = "";
        switch (events[i].Category) {
            case '1':
                eventCategory = "LLC";
                break;
            case '2':
                eventCategory = "Honors";
                break;
            case '3':
                eventCategory = "ONS";
                break;
            case '4':
                eventCategory = "Student Council";
                break;
            default:
                eventCategory = "N/A";
        }

        document.querySelector("#event-card-" + (i + 1) + " .event-name").textContent = events[i].Name;

        if (events[i].Location)
            document.querySelector("#event-card-" + (i + 1) + " .event-location").textContent = events[i].Location;
        else
            document.querySelector("#event-card-" + (i + 1) + " .event-location").textContent = "N/A";

        document.querySelector("#event-card-" + (i + 1) + " .event-category").textContent = eventCategory;

        if (events[i].Cap != -1)
            document.querySelector("#event-card-" + (i + 1) + " .event-capacity").textContent = events[i].Cap;
        else
            document.querySelector("#event-card-" + (i + 1) + " .event-capacity").textContent = "N/A";

        let rsvpStatus = "";
        switch (events[i].RsvpStatus) {
            case 0:
                rsvpStatus = "Not Attending";
                break;
            case 1:
                rsvpStatus = "Maybe";
                break;
            case 2:
                rsvpStatus = "Attending";
                break;
        }
        document.querySelector("#event-card-" + (i + 1) + " .event-rsvp-status").textContent = rsvpStatus;

        if(events[i].Token.length > 0) {
            let eventLink = document.querySelector("#event-card-" + (i + 1) + " .event-link");
            eventLink.style.textDecoration = "none";
            let link = "";

            if (window.location.host.includes('usfweb.usf.edu')) {
                link += '/Honors';
            }
    
            link += '/student-rsvp?event=' + events[i].Token;
            eventLink.setAttribute("href", link);
        }
    }
}

// Populate Form Submission
greetUser(result.firstName);
checkAcademicProgress(result.academic);
checkServiceProgress(result.community);
checkGlobalProgress(result.global);
populateProfile(result);
populateEvents(result.events);