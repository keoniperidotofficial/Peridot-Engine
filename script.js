const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const luckyBtn = document.getElementById("luckyBtn");
const randomBtn = document.getElementById("randomBtn");

const fakeDatabase = [
  { title: "Lacey's Flash Games", url: "https://store.steampowered.com/app/3459340/Laceys_Flash_Games/" },
  { title: "Lily's World XD", url: "https://lilysworldxd.com/" },
  { title: "Car's Epik Server", url: "https://discord.gg/RqR4fY72Q8" },
  { title: "Broken Code 🤯", url: "https://keoniperidotofficial.github.io/broken-code/" },
  { title: "Joseph Stinky: The Game", url: "https://josephiscool.straw.page" },
{ title: "Liola - The burping stinky lice", url: "https://discordlookup.com/user/1175439421290590249"},
{ title: "MHD - The Epic Guy", url: "https://discordlookup.com/user/1224468325388521555"},
];

searchForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from reloading
  doSearch(function doSearch(query) {
  const encodedQuery = encodeURIComponent(query);
  window.open(`https://www.google.com/search?q=${encodedQuery}`, "_blank");
});
});

luckyBtn.addEventListener("click", function () {
  const query = searchInput.value.toLowerCase();
  const result = fakeDatabase.find(entry =>
    entry.title.toLowerCase().includes(query)
  );
  if (result) {
    window.open(result.url, "_blank");
  } else {
    alert("No lucky result found 😢");
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
    resultsDiv.innerHTML = "<p>No results found 😢</p>";
  } else {
    results.forEach(result => {
      const item = document.createElement("div");
      item.innerHTML = `<a href="${result.url}" target="_blank">${result.title}</a>`;
      resultsDiv.appendChild(item);
    });
  }
}
