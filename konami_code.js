const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let i = 0
function init() {
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
         i++ ; check()
      }
      else {
         i  = 0
      }
    })
  }
}
