document.addEventListener("colorschemechange", (e) => {
  document.documentElement.style.setProperty(
    "color-scheme",
    e.detail.colorScheme
  );
});
