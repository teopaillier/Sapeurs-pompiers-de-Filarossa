document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".header nav");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));

  const search = document.querySelector("#personnelSearch");
  const table = document.querySelector("#personnelTable tbody");
  if (search && table) {
    search.addEventListener("input", () => {
      const q = search.value.toLowerCase().trim();
      [...table.rows].forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(q) ? "" : "none";
      });
    });
  }
});
