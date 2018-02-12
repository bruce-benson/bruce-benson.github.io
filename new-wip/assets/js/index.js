document.addEventListener("DOMContentLoaded", function() {
  console.log("hello world");

  if(!Modernizr.touch){
    myParaxify = paraxify('.paraxify');
  }
});