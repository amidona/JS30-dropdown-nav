const triggers = document.querySelectorAll(".cool > li"); // all the li's that are children of .cool
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter () {
    //console.log("Enter!");
    this.classList.add("trigger-enter");
    setTimeout( () => {
        if(this.classList.contains("trigger-enter")) {
        this.classList.add("trigger-enter-active")
    } // this prevents the glitch caused by the timing where trigger-enter-active doesn't fire until after you've moved off the element when you're moving your mouse very quickly
    }, 150);
    background.classList.add("open");
    const dropdown = this.querySelector(".dropdown") // have to do it within the function because there are 3 dropdowns and you want the one that goes with "this"

    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    
    
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left,
    };

    background.style.setProperty("width", `${coords.width}px`);
    background.style.setProperty("height", `${coords.height}px`);
    background.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    //console.log("Leave!");
    this.classList.remove("trigger-enter", "trigger-enter-active");
    background.classList.remove("open");
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));