const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const luckyBtn = document.getElementById("luckyBtn");
const randomBtn = document.getElementById("randomBtn");

const fakeDatabase = [
  { title: "Lacey's Flash Games", url: "https://laceyflashgames.example.com" },
  { title: "Lily's World XD", url: "https://lilysworldxd.com"},
  { title: "Car's Epik Engine", url: "https://carsepikengine.example.com" },
  { title: "Broken Code 🤯", url: "https://keoniperidotofficial.github.io/broken-code/" },
];

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  doSearch(searchInput.value);
});

luckyBtn.addEventListener("click", function () {
  const query = searchInput.value.toLowerCase();
  const result = fakeDatabase.find(entry =>
    entry.title.toLowerCase().includes(query)
  );
  if (result) {
    window.open(result.url, "_blank");
  } else {
    alert("No sparkly lucky result found 😢");
  }
});

randomBtn.addEventListener("click", function () {
  const random = fakeDatabase[Math.floor(Math.random() * fakeDatabase.length)];
  window.open(random.url, "_blank");
});

function doSearch(query) {
  const results = fakeDatabase.filter(entry =>
    entry.title.toLowerCase().includes(query.toLowerCase())
  );

  resultsDiv.innerHTML = "";

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No sparkly results found 😢</p>";
  } else {
    results.forEach(result => {
      const item = document.createElement("div");
      item.innerHTML = `<a href="${result.url}" target="_blank">${result.title}</a>`;
      resultsDiv.appendChild(item);
    });
  }
}