document.addEventListener("click", (e) => {
  const drop = e.target.closest(".drop");
  document.querySelectorAll(".drop").forEach(d => {
    if (d !== drop) d.classList.remove("open");
  });
  if (drop && e.target.closest("button")) {
    drop.classList.toggle("open");
  } else if (!drop) {
    document.querySelectorAll(".drop").forEach(d => d.classList.remove("open"));
  }
});
