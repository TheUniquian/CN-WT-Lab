<script>

function addProject() {
    // Get input values
    var projectName = document.getElementById('projectName').value;
    var projectDescription = document.getElementById('projectDescription').value;

    // Add project entry to the list
    var projectsList = document.getElementById('projectsList');
    projectsList.innerHTML += `<p><strong>${projectName}</strong>: ${projectDescription}</p>`;

    // Clear input fields
    document.getElementById('projectName').value = '';
    document.getElementById('projectDescription').value = '';
}

function addInternship() {
    // Get input values
    var internshipTitle = document.getElementById('internshipTitle').value;
    var internshipDescription = document.getElementById('internshipDescription').value;

    // Add internship entry to the list
    var internshipsList = document.getElementById('internshipsList');
    internshipsList.innerHTML += `<p><strong>${internshipTitle}</strong>: ${internshipDescription}</p>`;

    // Clear input fields
    document.getElementById('internshipTitle').value = '';
    document.getElementById('internshipDescription').value = '';
}

function addSkill() {
    // Get input value
    var skillName = document.getElementById('skillName').value;

    // Add skill entry to the list
    var skillsList = document.getElementById('skillsList');
    skillsList.innerHTML += `<p>${skillName}</p>`;

    // Clear input field
    document.getElementById('skillName').value = '';
}

function addExperience() {
    // Get input values
    var experienceTitle = document.getElementById('experienceTitle').value;
    var experienceDescription = document.getElementById('experienceDescription').value;

    // Add experience entry to the list
    var experiencesList = document.getElementById('experiencesList');
    experiencesList.innerHTML += `<p><strong>${experienceTitle}</strong>: ${experienceDescription}</p>`;

    // Clear input fields
    document.getElementById('experienceTitle').value = '';
    document.getElementById('experienceDescription').value = '';
}

// Additional logic to handle form submission can be added here

</script>