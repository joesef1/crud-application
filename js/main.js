// Get the add item button and item generator element
  const addItemBtn = document.querySelector("#add_item_btn");
  const ItemSelector = document.querySelector(".Item_selector");
  const popupLayer = document.querySelector(".popup_layer");
  const closeButton = document.querySelector("#close-button");
  const total_price = document.querySelector("#total_price");
  let addeditems = document.getElementById("addeditems")
  let dropdown = document.getElementById("dropdown")
let updateIcon = document.getElementById("updateIcon")
// 
console.log();
  window.onload = function() {
    hide()
    document.querySelector('.total_price').style.display = 'block';
    

  }
  // Add a click event listener to the add item button
  addItemBtn.addEventListener("click", function() {
    // Show the item generator
    ItemSelector.style.display = "block";
    popupLayer.style.display = "block";
    addeditems.style.zIndex="-1"
  addButton.innerText ="Add"
  dropdown.classList.remove("dosplaynone");

  });

  closeButton.addEventListener("click", function() {
    hide()
  });
  
  window.addEventListener("click", function(e) {
    if (e.target === ItemSelector || e.target === popupLayer) {hide()}
  
}
);

function hide() {
  ItemSelector.style.display = "none";
      popupLayer.style.display = "none";
      addeditems.style.zIndex="unset"

}


