let clickTimeout = null;
const clickDelay = 300;
let isDragging = false;
let draggedElement = null;

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';


    hours = hours % 12;
    hours = hours ? hours : 12;


    minutes = minutes < 10 ? '0' + minutes : minutes;


    const timeString = `${hours}:${minutes} ${ampm}`;
    return timeString;
}

document.getElementById("time").innerHTML = "<img src='icons/clock.ico' alt='clock'></img> " + getCurrentTime();

function updateTaskbar() {
    const taskbarItems = document.getElementById('taskbar-items');
    taskbarItems.innerHTML = '';

    document.querySelectorAll('.window').forEach(window => {
        if (window.style.display === 'block') {
            const taskbarItem = document.createElement('div');
            taskbarItem.className = 'taskbar-item';
            taskbarItem.textContent = window.querySelector('.window-title').textContent;
            taskbarItem.addEventListener('click', () => {

                document.querySelectorAll('.window').forEach(win => win.style.display = 'none');
                window.style.display = 'block';
                updateTaskbar();
            });

            if (window.style.display === 'block') {
                taskbarItem.classList.add('active');
            }

            taskbarItems.appendChild(taskbarItem);
        }
    });
}


function openWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'block';
    updateTaskbar();
}

function closeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'none';
    updateTaskbar();
}

function handleIconClick(event) {
    const icon = event.currentTarget;
    const windowId = icon.getAttribute('data-window-id');

    if (clickTimeout) {
        clearTimeout(clickTimeout);
        clickTimeout = null;

        openWindow(windowId);
    } else {

        clickTimeout = setTimeout(() => {
            clickTimeout = null;

        }, clickDelay);
    }
}

const minimizeButtons = document.querySelectorAll('.window-btn.minimize');
const maximizeButtons = document.querySelectorAll('.window-btn.maximize');
const closeButtons = document.querySelectorAll('.window-btn.close');

minimizeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const windowElement = event.target.closest('.window');
        windowElement.style.display = 'none';
    });
});

maximizeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const windowElement = event.target.closest('.window');
        if (windowElement.classList.contains('maximized')) {
            windowElement.classList.remove('maximized');
            windowElement.style.width = '300px';
            windowElement.style.height = 'auto';
            windowElement.style.top = '20%';
            windowElement.style.left = '20%';
        } else {
            windowElement.classList.add('maximized');

        }
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const windowElement = event.target.closest('.window');
        closeWindow(windowElement.id);
    });
});

function makeIconDraggable(icon) {
    let offsetX, offsetY;

    icon.addEventListener('mousedown', (e) => {
        isDragging = true;
        draggedElement = icon;
        offsetX = e.clientX - icon.getBoundingClientRect().left;
        offsetY = e.clientY - icon.getBoundingClientRect().top;
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging && draggedElement === icon) {
            icon.style.left = `${e.clientX - offsetX}px`;
            icon.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', (e) => {
        if (isDragging && draggedElement === icon) {
            isDragging = false;
            draggedElement = null;
            e.preventDefault();
        }
    });


    icon.addEventListener('click', handleIconClick);
}

document.querySelectorAll('.desktop-icon').forEach(icon => {
    makeIconDraggable(icon);
});


document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.desktop-icon');
    icons.forEach((icon, index) => {
        const row = Math.floor(index / 5);
        const col = index % 5;
        icon.style.left = `${col * 110}px`;
        icon.style.top = `${row * 110}px`;
    });
});

function makeWindowDraggable(windowElement) {
    let offsetX, offsetY;
    let isDragging = false;


    windowElement.querySelector('.window-header').addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - windowElement.getBoundingClientRect().left;
        offsetY = e.clientY - windowElement.getBoundingClientRect().top;
        e.preventDefault();
    });


    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            windowElement.style.left = `${e.clientX - offsetX}px`;
            windowElement.style.top = `${e.clientY - offsetY}px`;
            windowElement.style.position = 'absolute';
        }
    });


    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
        }
    });
}


document.querySelectorAll('.window').forEach(windowElement => {
    makeWindowDraggable(windowElement);
});

function toggleStartMenu() {
    const startMenu = document.querySelector('.start-menu');
    const startButton = document.querySelector('.start-button');

    if (startMenu.style.display === 'block') {
        startMenu.style.display = 'none';
        startButton.classList.remove('pressed');
    } else {
        startMenu.style.display = 'block';
        startButton.classList.add('pressed');
    }
}


const startButton = document.querySelector('.start-button');
startButton.addEventListener('mousedown', () => {
    startButton.classList.add('pressed');
});

startButton.addEventListener('mouseup', () => {

});

startButton.addEventListener('click', toggleStartMenu);

function shutdown() {
    var shutdownSound = document.getElementById("shutdown");
    shutdownSound.play();
    shutdownSound.onended = () => {
        location.replace("https://www.google.com");
    }
}
document.addEventListener('DOMContentLoaded', updateTaskbar);
