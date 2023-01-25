document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("theme").addEventListener("click", changeTheme);

let count = 0;

function changeTheme() {
  document.body.classList.toggle("dark");
}

function increment() {
  count++;
  vibrate();
  display();
}

function decrement() {
  count--;
  vibrate();
  display();
}

function reset() {
  count = 0;
  vibrate();
  display();
}

function display() {
  document.getElementById("counter").innerText = count;
}

function vibrate() {
  window.navigator.vibrate(18); // vibrate for smartphone devices
}