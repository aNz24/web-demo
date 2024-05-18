document.getElementById("load-more-btn").addEventListener("click", function () {
  const hiddenItems = document.querySelectorAll(".product-item.hidden");
  for (let i = 0; i < 3 && i < hiddenItems.length; i++) {
    hiddenItems[i].classList.remove("hidden");
  }
  if (document.querySelectorAll(".product-item.hidden").length === 0) {
    document.getElementById("load-more-btn").style.display = "none";
  }
});
