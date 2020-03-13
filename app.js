let sqButton = document.getElementById('sq-button');
sqButton.addEventListener('click', insertSquare);



function insertSquare() {
    alert('you clicked');
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}