function toggleVisibility(element, show) {
    if (show) {
        element.style.display = "flex";
        setTimeout(() => {
            element.classList.add('show');
            element.style.opacity = 0.85;
        }, 10); // Add a slight delay to allow the display change to be registered
    } else {
        element.style.opacity = 0;
        setTimeout(() => {
            element.classList.remove('show');
            element.style.display = "none";
        }, 1000); // Match the transition duration
    }
}

function Aboutme() {
    let About_result = document.getElementById("About_Result");

    let isAboutVisible = About_result.classList.contains('show');

    // Toggle About_result visibility
    toggleVisibility(About_result, !isAboutVisible);
}

function Projects() {
    let Project1 = document.getElementById("Project1");
    let Project2 = document.getElementById("Project2");
    let About_result = document.getElementById("About_Result");

    let isProjectsVisible = Project1.classList.contains('show') && Project2.classList.contains('show');

    // Hide About_result if it's visible
    if (About_result.classList.contains('show')) {
        toggleVisibility(About_result, false);
    }

    // Toggle Projects visibility
    toggleVisibility(Project1, !isProjectsVisible);
    toggleVisibility(Project2, !isProjectsVisible);
}

function Contact() {
    let Contact_Me = document.getElementById("Contact_Me");

    let isContactVisible = Contact_Me.classList.contains('show');

    // Toggle Contact_Me visibility
    toggleVisibility(Contact_Me, !isContactVisible);
}
