const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
<<<<<<< HEAD
  let i = 0
  function check(){
    if (i === code.length){
      window.alert("Konami!")
      i = 0
    }
  }
  if (window.addEventListener){
    window.addEventListener("keydown", function(e) {
      const key = parseInt(e.detail || e.which);
      if (key == code[i]){
         i++ ; check();
      }
      else {
         i  = 0
      }
    })
=======
  // Write your JavaScript code inside the init() function
  var i = 0
  var arr = []
  var arrl = arr.length
  if (window.addEventListener){
    window.addEventListener("keydown", function(e) {
      if (e.which == code[arr.length]){
        i++
      }
      else {
        var i  = 0
      }
      if (arr == code){
        alert("Konami!")
      }
>>>>>>> 51ed732ee0ff41198d9b2510433f7e3fb5166c72
  }
}
