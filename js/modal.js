// Get the modal
var modal = document.getElementById("modal");
var editModal = document.getElementById("edit-modal");

// Get the button that opens the modal
var btn = document.getElementById("modal-btn");
var editModalBtn = document.getElementById("edit-modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementById("modal-close");
var editSpan = document.getElementById("edit-modal-close");
var editOkBtn = document.getElementById("edit-modal-ok-btn");



// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

editModalBtn.onclick = function () {
    editModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

editSpan.onclick = function () {
    editModal.style.display = "none";
}

editOkBtn.onclick = function () {
    editModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == editModal) {
        editModal.style.display = "none";
    }
}

