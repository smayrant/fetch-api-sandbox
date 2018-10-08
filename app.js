document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

// get local text file data
function getText() {
  fetch("test.txt")
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      document.getElementById("output").innerHTML = `<h5>${data}</h5>`;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// get local json file data
function getJson() {
  fetch("posts.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let output = "";
      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    });
}
