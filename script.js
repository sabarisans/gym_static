let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};
window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
};

let loadMoreBtn = document.querySelector(".package .load-more .btn");
let currentItem = 3;
if (loadMoreBtn) {
    loadMoreBtn.onclick = () => {
        let boxes = [
            ...document.querySelectorAll(".package .box-container .box"),
        ];
        for (let i = currentItem; i < currentItem + 3; i++) {
            boxes[i].style.display = "inline-block";
        }
        currentItem += 3;
        if (currentItem >= boxes.length) {
            loadMoreBtn.style.display = "none";
        }
    };
}


const submitBtn = document.querySelector("#submitBtn")
if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const package = document.getElementById("package").value;
        const duration = document.getElementById("duration").value;
        const save =
            Boolean(name) &&
            Boolean(email) &&
            Boolean(phone) &&
            Boolean(address) &&
            Boolean(package) &&
            Boolean(duration);
        if (save) {
            const a = document.createElement("a");
            a.href = "./submit.html";
            a.click();
        } else {
            alert("Fill * required");
        }
    });
}

