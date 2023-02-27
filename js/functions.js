let price = document.getElementById("price")
let quantity = document.getElementById("quantity")
let addButton = document.getElementById("add-button")
let total = document.getElementById("total")
let selectedPro = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
let mood = "create";
let tmp ;

price.oninput = function () {
  if (/^\d+\.\d{3,}$/.test(this.value)) {
    this.value = this.value.slice(0, this.value.indexOf(".") + 3);
  }
}

/////////////////////
function getTotal(i) {
  let totalPrice = 0;
  for (let i = 0; i < dataPro.length; i++) {
    totalPrice += dataPro[i].price * dataPro[i].quantity;
  }
  total.innerHTML = totalPrice;
}

/////////////////
function handleAddItemClick() {
  getTotal();
  addproduct();
  clearData();
  showData(); 
  updateData(); 
}

//create
let dataPro;
if(localStorage.product != null){
  dataPro = JSON.parse(localStorage .product) 
}
else{
  dataPro = [];
}

function addproduct() {
  let selectedPro = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
  let newPro = {
    title: selectedPro,
    price: price.value,
    quantity: quantity.value,
  }

  if (mood === 'update') {
// dropdown.classList.add("dosplaynone");
  dataPro[ tmp ] = newPro;
  mood === 'create'
  }else{
    dataPro.push(newPro)
// dropdown.classList.remove("dosplaynone");

  }
localStorage.setItem('product',  JSON.stringify(dataPro) )
console.log(selectedPro);
}


// clear input
function clearData() {
  price.value = 1;
quantity.value = 1;
// document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML= "choose an item"
}

//read
function showData() {
  let addeditemsshow= '';
  for (let i = 0; i < dataPro.length; i++) {

    addeditemsshow += `
    <div class="addeditem">
            <div class="item_left_section">
                <div class="item_image">
                    <img src="./img/Canva.png" alt="">
                </div>
                <div class="item_info">
                    <div class="item_name">${dataPro[i].title}</div>
                    <div class="item_price"> <span class="dollar">$</span>
                        <input onkeyup=""updateData(${i})"; class="price" id="" name="price" min="0" value="${dataPro[i].price}" type="number">
                    </div>
                </div>
            </div>
            <div class="item_right_section">
                <div class="item_quantity">
                    <div class="quantity_container">
                        <div class="number-input">
                      
                    
<input onkeyup="updateData(${i})"; class="quantity quantity_input" min="0" name="quantity" value="${dataPro[i].quantity}" type="number">


                    </div>
                </div>
            </div>
            <div class="bulk_actions">
            <button class="update_btn" onclick="updateData(${i})"><i class=" fa-solid fa-edit"></i></button>
            <div onclick="deleteData(${i})" class="delete_button"><i class=" trash fa-solid fa-trash"></i></div>
            <div class="check_box">
                <input type="checkbox">
            </div>
        </div>
    </div>
</div>
    `;

  }
  let addedItems = document.getElementById("addeditems")
  addedItems.innerHTML = addeditemsshow;
  getTotal();
  ItemSelector.style.display = "none";
  popupLayer.style.display = "none";
  addeditems.style.zIndex="unset"
}
showData();  

// delete
function deleteData(i) {
  dataPro.splice(i,1)
localStorage.setItem('product',  JSON.stringify(dataPro) )
showData();  
  console.log();
}
// ./delete


//update
function updateData(i) {
  selectedPro =dataPro[i];
  price.value =dataPro[i].price;
  quantity.value =dataPro[i].quantity;
// console.log(price);
addButton.innerText ="update";
dropdown.classList.add("dosplaynone");
showpopup()
mood = 'update';
tmp = i; 
}

function showpopup() {
    ItemSelector.style.display = "block";
    popupLayer.style.display = "block";
    addeditems.style.zIndex="-1"
}

addButton.addEventListener("click",()=>{
  addButton.innerText ="Add"
mood = 'create';
  hide()
})

