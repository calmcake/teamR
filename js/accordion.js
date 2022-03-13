document.querySelectorAll(".q-a__more-btn").forEach((item) =>
    item.addEventListener("click", () => {
        const parent = item.parentNode;
        parent.classList.toggle("active");
    })
)