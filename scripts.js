// Javascript for TP5 - followed from the Panopto videos on Unit 2.
// Also working on tinkering with functions and adding more customization to the website. 

window.onload = function() {
  
  document.querySelector("#titleBanner h1").classList.add("tp");
  
  document.querySelector("#titleBanner h1").onclick = function() {
    this.classList.toggle("orange");
  }
  
  document.querySelector("#recipeColumns #ingredients").onclick = function() {
    this.classList.toggle("tpShow");
  }
  document.querySelector("#recipeColumns #equipment").onclick = function() {
    this.classList.toggle("tpShow");
  }
  document.querySelector("#recipeColumns #directions").onclick = function() {
    this.classList.toggle("tpShow");
  }
  document.querySelector("#recipeColumns #equipment ul").innerHTML += "<li>Hunger</li>";
  
} //end the window onload