// Q37p5M8OacpqXBTykAVw9rQWfvVHTbnU

document.getElementById("button").addEventListener("click", function() {
  var giphy = new XMLHttpRequest();
  var search = document.getElementById('text').value;
  var url = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=Q37p5M8OacpqXBTykAVw9rQWfvVHTbnU"
  giphy.onreadystatechange = function() {
    if (giphy.readyState == 4 && giphy.status == 200) {
      var giphyObj = JSON.parse(giphy.responseText);
      var link = giphyObj.data[0].images.downsized_medium.url;
      document.getElementById("photo1").src = link;
      var link = giphyObj.data[1].images.downsized_medium.url;
      document.getElementById("photo2").src = link;
      var link = giphyObj.data[2].images.downsized_medium.url;
      document.getElementById("photo3").src = link;
      var link = giphyObj.data[3].images.downsized_medium.url;
      document.getElementById("photo4").src = link;
      var link = giphyObj.data[4].images.downsized_medium.url;
      document.getElementById("photo5").src = link;
      var link = giphyObj.data[5].images.downsized_medium.url;
      document.getElementById("photo6").src = link;
      var link = giphyObj.data[6].images.downsized_medium.url;
      document.getElementById("photo7").src = link;
      var link = giphyObj.data[7].images.downsized_medium.url;
      document.getElementById("photo8").src = link;
      var link = giphyObj.data[8].images.downsized_medium.url;
      document.getElementById("photo9").src = link;
      var link = giphyObj.data[9].images.downsized_medium.url;
      document.getElementById("photo10").src = link;
    }
  }
  giphy.open("GET", url, true);
  giphy.send();
});
