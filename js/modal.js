




document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    let lastActiveSection = null;


    const getCurrentSection = () => {
        let currentSection = null;
        let minDistance = Infinity;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const distanceToTop = Math.abs(rect.top);


            if (rect.top < window.innerHeight && rect.bottom > 0) {
                if (distanceToTop < minDistance) {
                    minDistance = distanceToTop;
                    currentSection = section;
                }
            }
        });

        return currentSection;
    };


    const updateSectionsStyle = () => {
        const currentSection = getCurrentSection();

        if (currentSection && currentSection !== lastActiveSection) {

            if (
                lastActiveSection === sections[1] &&
                currentSection === sections[0]
            ) {

                console.log("Transitioning from section 2 to section 1");

                sections.forEach((section) => {
                    section.style.backgroundColor = "#1CAC78";
                    section.style.color = "#a8d5ba";
                });
            } else {

                const currentBgColor = window.getComputedStyle(currentSection).backgroundColor;
                const currentColor = window.getComputedStyle(currentSection).color;

                console.log(`Updating to section: ${currentSection.textContent.trim()}`);


                sections.forEach((section) => {
                    section.style.backgroundColor = currentBgColor;
                    section.style.color = currentColor;
                });
            }


            lastActiveSection = currentSection;
        }
    };


    updateSectionsStyle();


    window.addEventListener("scroll", updateSectionsStyle);
    window.addEventListener("resize", updateSectionsStyle);
});
