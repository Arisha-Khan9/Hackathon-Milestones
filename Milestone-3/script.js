// import form from HTML
// const form = document.getElementById("resume-form") as HTMLFormElement
//HANDLE FORM SUBMISSION
document.getElementById("resume-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // GENERATE THE RESUME CONTENT DYNAMICALLY
    var resumeHTML = "\n<h2><b> Resume </b></h2>\n<h3> Personal Information </h3>\n\n<p><b> Name: </b> ".concat(name, " </p>\n<p><b> Email: </b> ").concat(email, " </p>\n<p><b> Phone: </b> ").concat(phone, " </p>\n\n<h3> Education </h3>\n<p> ").concat(education, " </p>\n\n<h3> Experience </h3>\n<p> ").concat(experience, " </p>\n\n<h3> Skills </h3>\n<p> ").concat(skills, " </p>");
    //display the generated resume
    if (document.getElementById("resume-display")) {
        document.getElementById("resume-display").innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display Element Is Missing.');
    }
});
