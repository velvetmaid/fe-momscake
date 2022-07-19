const element = document.querySelector("#btn-group");

element.addEventListener("wheel", (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -100 : 100,
  });
});

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function slide() {
  if (document.body.scrollLeft > 20 || document.documentElement.scrollLeft > -20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollLeft = 0;
  document.documentElement.scrollLeft = 0;
}

const button = document.getElementById('myBtn');

button.onclick = function () {
  document.getElementById('btn-group').scrollLeft += 1000;
};

