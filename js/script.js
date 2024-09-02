document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const colors = {
        '#home': 'rgb(167, 181, 204)',
        '#about': 'rgb(201, 66, 69)',
    };

    // Use IntersectionObserver for smooth background color transitions
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                document.body.style.backgroundColor = colors[`#${sectionId}`];
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    sections.forEach(section => observer.observe(section));

    const welcomeText = document.getElementById('welcomeText');
    const personalText = document.getElementById('personalText');

    // Remove hidden class to start the animation
    welcomeText.classList.remove('hidden');

    // After the popUp animation ends, remove the welcome text and show the personal text
    welcomeText.addEventListener('animationend', (event) => {
        if (event.animationName === 'fastShrinkAndRise') {
            personalText.classList.remove('hidden');
        }
    });
});


document.addEventListener('scroll', function() {
    const scrollY = window.scrollY; // Get the current vertical scroll position
    const floatingElements = document.querySelectorAll('.floating');

    floatingElements.forEach((element, index) => {
        // Adjust multipliers for vertical and horizontal movement
        const offsetY = scrollY * 0.4; // Adjust multiplier for vertical movement
        const offsetX = (scrollY + index * 20) * 0.5; // Adjust for left-to-right movement, index to stagger elements
        const tilt = Math.min(scrollY * 0.05, 10); // Tilt effect, max 10 degrees

        element.style.transform = `translateY(-${offsetY}px) translateX(${offsetX}px) rotate(${tilt}deg)`;
    });
});

document.getElementById('timelineSlider').addEventListener('input', function() {
    const yearDisplay = document.getElementById('timelineContent');
    const descriptionDisplay = document.getElementById('description');

    const yearData = [
        "2013-2019",
        "2019-2022",
        "2022-2026"
    ];

    const descriptions = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aperiam!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aperiam!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aperiam!"
    ];

    yearDisplay.textContent = yearData[this.value];
    descriptionDisplay.textContent = descriptions[this.value];
});
