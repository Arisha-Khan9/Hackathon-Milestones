// import form from HTML
// const form = document.getElementById("resume-form") as HTMLFormElement

//HANDLE FORM SUBMISSION
(document.getElementById ("resume-form") as HTMLFormElement).addEventListener ("submit",(event:Event) => {
    event.preventDefault();
    
// collect input values
const name = (document.getElementById("name") as HTMLInputElement).value
const email = (document.getElementById("email") as HTMLInputElement).value
const phone = (document.getElementById("phone") as HTMLInputElement).value
const education = (document.getElementById("education") as HTMLInputElement).value
const experience = (document.getElementById("experience") as HTMLInputElement).value
const skills = (document.getElementById("skills") as HTMLInputElement).value

// GENERATE THE RESUME CONTENT DYNAMICALLY
const resumeHTML = `
<h2><b> Resume </b></h2>
<h3> Personal Information </h3>

<p><b> Name: </b> ${name} </p>
<p><b> Email: </b> ${email} </p>
<p><b> Phone: </b> ${phone} </p>

<h3> Education </h3>
<p> ${education} </p>

<h3> Experience </h3>
<p> ${experience} </p>

<h3> Skills </h3>
<p> ${skills} </p>`;


//display the generated resume
if (document.getElementById("resume-display") as HTMLDivElement) {
    (document.getElementById("resume-display") as HTMLDivElement).innerHTML = resumeHTML
}else {
    console.error('The Resume Display Element Is Missing.')
}
});