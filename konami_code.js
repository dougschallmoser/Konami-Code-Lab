const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


// Build a function to check if Konami Code is valid
function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = e.key;

      if (key === codes[index]) {
        index++;

          if (index === codes.length) {
            alert("Hurray");
            index = 0;
            }
      } else {
        index = 0;
        }
    })
}

init()
