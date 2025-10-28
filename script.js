// Filtering
const filterBtns = document.querySelectorAll(".filter-btn");
const videoCards = document.querySelectorAll(".video-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-filter");

    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    videoCards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxVideo = document.getElementById("lightboxVideo");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".video-card").forEach(card => {
  card.addEventListener("click", () => {
    const videoSrc = card.querySelector("video").getAttribute("src");
    lightboxVideo.setAttribute("src", videoSrc);
    lightbox.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxVideo.pause();
});
