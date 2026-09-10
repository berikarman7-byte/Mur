function scrollToGallery() {
  document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
}

const hearts = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 24) + "px";
  heart.style.animationDuration = (5 + Math.random() * 6) + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 11000);
}

setInterval(createHeart, 500);
