function jobApplicationScreening() {
    // Get the qualification and experience from the input fields
    let qualification = document.getElementById("qualification").value.toLowerCase().trim();
    let experience = parseInt(document.getElementById("experience").value);

    let result;

    // Adjusted comparison strings to match expected inputs
    if (qualification === "ph.d." && experience >= 5) {
        result = "Candidate accepted: Ph.D. with sufficient experience.";
    } 
    else if (qualification === "master's" && experience >= 3) {
        result = "Candidate accepted: Master's with sufficient experience.";
    } 
    else if (qualification === "bachelor's" && experience >= 2) {
        result = "Candidate accepted: Bachelor's with sufficient experience.";
    } 
    else {
        result = "Candidate not accepted: Insufficient qualifications or experience.";
    }
    
    alert(result);
}