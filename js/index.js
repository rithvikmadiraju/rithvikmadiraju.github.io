
var startupSound = document.getElementById("startup");
var logo = document.getElementById("win95Logo");
var okButton = document.getElementById("okButton");
var notification = document.querySelector('.notification');


function startBootupSequence() {

    startupSound.play();


    notification.style.display = 'none';
    document.querySelector('.loading-text').textContent = "Loading MS-DOS...";


    setTimeout(() => {
        document.querySelector('.loading-text').textContent = "Starting Windows 95...";
    }, 3000);


    setTimeout(() => {
        window.location.href = "home.html";
    }, 6000);
}


logo.addEventListener('click', function() {
    startBootupSequence();
});


okButton.addEventListener('click', function() {
    notification.style.display = 'none';
});
