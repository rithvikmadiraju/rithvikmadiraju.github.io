document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const colors = {
        '#section2': 'rgb(201, 66, 69)',
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
    const sectionPersonalText1 = document.getElementById('sectionPersonalText1');

    welcomeText.classList.remove('hidden');

    welcomeText.addEventListener('animationend', (event) => {
        if (event.animationName === 'fastShrinkAndRise') {
            sectionPersonalText1.classList.remove('hidden');
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

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');

    menuButton.addEventListener('click', function() {
        modal.classList.remove('hidden');
    });

    closeButton.addEventListener('click', function() {
        modal.classList.add('hidden');
    });


    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
