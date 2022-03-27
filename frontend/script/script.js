var h1 = document.getElementById("h1");
h1.style.color = "yellow";
h1.innerHTML =" Welcome To My Blog";

let kepala = document.querySelectorAll("ul.kepala li");
for (let i = 0; i < kepala.length; i++) {
    h2[i].style.display = "inline"
}

const a = document.querySelectorAll("ul.kepala li a");
for (let y=0; y < a.length; y++) {
    a[y].style.textDecoration = "none"
    a[y].style.color = "yellow"
}
