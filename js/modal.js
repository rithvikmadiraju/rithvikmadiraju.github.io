

document.getElementById('openModal').onclick = function() {
    document.getElementById('openModal').style.display = 'none';
    document.getElementById('modal').style.display = 'block';
};



window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('openModal').style.display = 'block';
    }
};
