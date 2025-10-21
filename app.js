let changIcon = document.getElementById("changIcon")

let menuList = document.getElementById("menuList")

// Icon Handling
changIcon.addEventListener("click" , () => {

    let icon = changIcon.children[1];

    if (icon.classList.contains("fa-angle-down")) {
        menuList.classList.remove("hidden")
        icon.classList.remove("fa-angle-down");
        icon.classList.add("fa-angle-up");
    } else {
        menuList.classList.add("hidden")
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");
    }

})