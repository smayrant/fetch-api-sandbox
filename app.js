document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById("button3").addEventListener("click", getExternal);

// get local text file data
function getText() {
  fetch("test.txt")
    .then(res => res.text())
    .then(data => {
      document.getElementById("output").innerHTML = `<h5>${data}</h5>`;
    })
    .catch(err => console.log(err));
}

// get local json file data
function getJson() {
  fetch("posts.json")
    .then(response => response.json())
    .then(data => {
      let output = "";
      data.forEach(post => (output += `<li>${post.title}</li>`));
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}

// get external api data
function getExternal() {
  fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => {
      let output = "";
      data.forEach(user => (output += `<li>Github User: ${user.login}</li>`));
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}
