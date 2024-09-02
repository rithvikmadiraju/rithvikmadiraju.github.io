





document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const colors = {
        '#home': 'rgb(167, 181, 204)',
        '#about': 'rgb(201, 66, 69)',
    };


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                document.body.style.backgroundColor = colors[`#${sectionId}`];
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    const welcomeText = document.getElementById('welcomeText');
    const personalText = document.getElementById('personalText');


    welcomeText.classList.remove('hidden');


    welcomeText.addEventListener('animationend', (event) => {
        if (event.animationName === 'fastShrinkAndRise') {
            personalText.classList.remove('hidden');
        }
    });
});


document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const floatingElements = document.querySelectorAll('.floating');

    floatingElements.forEach((element, index) => {

        const offsetY = scrollY * 0.4;
        const offsetX = (scrollY + index * 20) * 0.5;
        const tilt = Math.min(scrollY * 0.05, 10);

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

function navigateWithTransition(event, url) {
    event.preventDefault();

    const cloudTransition = document.getElementById('cloud-transition');
    cloudTransition.classList.add('expand');


    setTimeout(() => {
        window.location.href = url;
    }, 1500); 
}
