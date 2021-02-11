let text = document.querySelector('.banner h2');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  text.style.marginBottom = value * 2 + 'px';
})
function myFunction() {
    var x = document.getElementById("myAudio").autoplay;
    document.getElementById("demo").innerHTML = x;
  }