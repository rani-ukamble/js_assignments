function vacation() {
    let choice;

    // Check which radio button is selected and set 'choice' accordingly
    if (document.getElementById("beach").checked) {
        choice = "beach";
    } else if (document.getElementById("mountain").checked) {
        choice = "mountain";
    } else if (document.getElementById("historical").checked) {
        choice = "historical";
    }

    // Provide the destination suggestions based on the selected choice
    if (choice === "beach") {
        alert("Destinations will be Maldives, Bahamas, or Hawaii.");
    } else if (choice === "mountain") {
        alert("Destinations will be Switzerland, Colorado, or Nepal.");
    } else if (choice === "historical") {
        alert("Destinations will be Rome, Athens, or Cairo.");
    } else {
        alert("Destinations will be Paris.");
    }
}
