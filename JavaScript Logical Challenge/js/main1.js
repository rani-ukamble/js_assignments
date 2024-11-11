function proceed_in_room() {
    // Retrieve and convert the room type to lowercase
    let room_type = document.getElementsByClassName("roomtype")[0].value.toLowerCase();
    let code = document.getElementsByClassName("code")[0].value;

    // Check the room type and corresponding code
    if ((room_type === "library" && code === "2468") || 
        (room_type === "dungeon" && code === "7531") || 
        (room_type !== "library" && room_type !== "dungeon" && code === "0000")) {
        alert("Code accepted. You may proceed!");
    } else {
        alert("Incorrect code. Access denied.");
    }
}
