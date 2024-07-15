document.addEventListener("DOMContentLoaded", function () {
  var memeForm = document.getElementById("meme-form");
  var listGallery = document.querySelector(".galery");

  memeForm.addEventListener("submit", function (kejadian) {
    kejadian.preventDefault();
    // creating the li element
    var memeLi = document.createElement("li");
    memeLi.classList.add("meme-img");

    // creating the canvas element to put our img background
    var urlInput = document.getElementById("uploaded-img").value,
      src = urlInput,
      img = document.createElement("img");
    img.src = src;
    img.width = "500";

    var topTextDiv = document.createElement("div");
    topTextDiv.classList.add("text", "top");
    topTextDiv.innerText = document.getElementById("text-top").value;

    var bottomTextDiv = document.createElement("div");
    bottomTextDiv.classList.add("text", "bottom");
    bottomTextDiv.innerText = document.getElementById("text-bottom").value;

    var removeDiv = document.createElement("div");
    removeDiv.classList.add("red-cross");
    removeDiv.style.color = "red";

    listGallery.appendChild(memeLi);
    memeLi.appendChild(img);
    memeLi.appendChild(topTextDiv);
    memeLi.appendChild(bottomTextDiv);
    memeLi.appendChild(removeDiv);

    memeForm.reset();
  });
  function remove(event) {
    event.target.parentNode.remove();
  }
  listGallery.addEventListener("click", remove, false);
});
