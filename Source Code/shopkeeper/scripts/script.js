'use strcit';

/////////////////////// ABOUT ////////////////////////
/////////////////////////DATA/////////////////////////
const aboutMe = {
  shopName: 'Meenakshi Super Market',
  category: 'Super Market',
  ownerName: 'Surya',
  phone: 7536848641,
  email: 'suryashops@gmail.com',
  password: 'surya753',
  address: 'vill & mdl : Toopran, Dist: Medak',
  landmark: 'near busstop road',
  shopTimings: {
    open: 9,
    close: 10,
  },
  pincode: 502334,
};

/////////////////////////////////////////////////////////
const barEl = document.querySelector('.bar');
const contAbout = document.querySelector('.container-about');

const aboutLink = document.querySelector('.about-link');
const productsLink = document.querySelector('.products-link');
const ordersLink = document.querySelector('.orders-link');

const inputShopName = document.querySelector('.input-shopname');
const inputCategory = document.querySelector('.input-category');
const inputPincode = document.querySelector('.input-pincode');
const inputOwnerName = document.querySelector('.input-ownername');
const inputPassword = document.querySelector('.input-password');
const inputPhone = document.querySelector('.input-phone');
const inputEmail = document.querySelector('.input-email');
const inputShopOpen = document.querySelector('.input-shop-open');
const inputShopClose = document.querySelector('.input-shop-close');
const inputAddress = document.querySelector('.input-address');

const btnSubmit = document.querySelector('.submit');
const btnEdit = document.querySelector('.edit-icon-box');

/////////////////////////////////////
const displayAboutMe = function (me) {
  inputShopName.value = me.shopName;
  inputCategory.value = me.category;
  inputPincode.value = me.pincode;
  inputOwnerName.value = me.ownerName;
  inputPassword.value = me.password;
  inputPhone.value = me.phone;
  inputEmail.value = me.email;
  inputShopOpen.value = me.shopTimings.open;
  inputShopClose.value = me.shopTimings.close;
  inputAddress.value = me.address;
};

displayAboutMe(aboutMe);

const disableInputs = function () {
  inputShopName.disabled = 'true';
  inputCategory.disabled = 'true';
  inputPincode.disabled = 'true';
  inputOwnerName.disabled = 'true';
  inputPassword.disabled = 'true';
  inputPhone.disabled = 'true';
  inputEmail.disabled = 'true';
  inputShopOpen.disabled = 'true';
  inputShopClose.disabled = 'true';
  inputAddress.disabled = 'true';
  btnSubmit.disabled = 'true';
};

disableInputs();

const enableInputs = function () {
  inputShopName.disabled = false;
  inputCategory.disabled = false;
  inputPincode.disabled = false;
  inputOwnerName.disabled = false;
  inputPassword.disabled = false;
  inputPhone.disabled = false;
  inputEmail.disabled = false;
  inputShopOpen.disabled = false;
  inputShopClose.disabled = false;
  inputAddress.disabled = false;
  btnSubmit.disabled = false;
};

const readInputs = function (me) {
  me.shopName = inputShopName.value;
  me.category = inputCategory.value;
  me.pincode = inputPincode.value;
  me.ownerName = inputOwnerName.value;
  me.password = inputPassword.value;
  me.phone = inputPhone.value;
  me.email = inputEmail.value;
  me.shopTimings.open = inputShopOpen.value;
  me.shopTimings.close = inputShopClose.value;
  me.address = inputAddress.value;
};
//////////////////EVENT LISTENERS////////////////////////
aboutLink.addEventListener('click', function (event) {
  event.preventDefault();

  barEl.classList.remove('bar-products');
  barEl.classList.remove('bar-orders');
  barEl.classList.add('bar-about');

  contAbout.style.display = 'block';
});

productsLink.addEventListener('click', function (event) {
  event.preventDefault();

  barEl.classList.add('bar-products');
  barEl.classList.remove('bar-orders');
  barEl.classList.remove('bar-about');
});

ordersLink.addEventListener('click', function (event) {
  event.preventDefault();

  barEl.classList.remove('bar-products');
  barEl.classList.add('bar-orders');
  barEl.classList.remove('bar-about');
});

btnEdit.addEventListener('click', function (event) {
  event.preventDefault();

  enableInputs();
  contAbout.style.border = '2px solid rgba(0,0,0,0.1)';

  btnSubmit.style.cursor = 'pointer';
});

btnSubmit.addEventListener('click', function (event) {
  event.preventDefault();

  readInputs(aboutMe);
  disableInputs();

  contAbout.style.border = 'none';

  alert('Details Updated📝');

  btnSubmit.style.cursor = 'not-allowed';
});

////////////////////////// PRODUCTS ////////////////////
////////////////////////////////////////////////////////

const prods = [
  {
    img: 'imgs/freedomoil.jpg',
    itemName: 'Freedom Oil',
    category: 'Cooking Oil',
    quantityAvilable: 2,
    units: 'litre',
    pricePerQuantity: '170',
    discount: '10',
  },
  {
    img: 'imgs/sugar.jpg',
    itemName: 'Sugar',
    category: 'Food Item',
    quantityAvilable: 10,
    units: 'kg',
    pricePerQuantity: '55',
    discount: '16',
  },
  {
    img: 'imgs/bambino.jpg',
    itemName: 'Bambino Vermicelli',
    category: 'Food Item',
    quantityAvilable: 5,
    units: 'kg',
    pricePerQuantity: '90',
    discount: '0',
  },
];

//////////// Selecting Elements
const productsBox = document.querySelector('.products-movements');
const addProd = document.querySelector('.add-link');
let btnsEdit = document.getElementsByClassName('edit-link-icon');
const modal = document.querySelector('.edit-box');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.edit-form-close');
const editBtnSubmit = document.querySelector('.edit-form-submit');

const prodItemName = document.getElementById('itemname');
const prodCategory = document.querySelector('.edit-box #category');
const prodQuantity = document.querySelector('#quantity');
const prodUnits = document.querySelector('#units');
const prodPrice = document.querySelector('#price');
const prodDiscount = document.querySelector('#discount');

const addEvents = function () {
  for (let i = 0; i < btnsEdit.length; i++) {
    const link = btnsEdit[i];
    link.addEventListener('click', function (e) {
      e.preventDefault();

      currProd = prods[e.target.getAttribute('index')];

      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');

      console.log(prodCategory, currProd.category);

      prodItemName.value = currProd.itemName;
      prodCategory.value = currProd.category;
      prodQuantity.value = currProd.quantityAvilable;
      prodUnits.value = currProd.units;
      prodPrice.value = currProd.pricePerQuantity;
      prodDiscount.value = currProd.discount;
    });
  }
};
addEvents();

// productsBox.innerHTML = '';
const displayProducts = function (prods) {
  productsBox.innerHTML = '';

  const headStr = `<div class="product-box product-box--0">
  <p class="img-heading">Image</p>
  <p class="itemname-heading">Item Name</p>
  <p class="category-heading">Category</p>
  <p class="quantity-avilable-heading">Quantity</p>
  <p class="units-heading">Units</p>
  <p class="price-per-quantity-heading">Price/Quantity</p>
  <p class="discount-heading">Discount</p>
  <p class="edit-heading">Edit</p>
</div>`;
  productsBox.insertAdjacentHTML('beforeend', headStr);

  prods.forEach((prod, index) => {
    const str = `<div class="product-box product-box--${index + 1}">
            <img src="${prod.img}" alt="" class="product-img">
            <p class="itemname">${prod.itemName}</p>
            <p class="category">${prod.category}</p>
            <p class="quantity-avilable">${prod.quantityAvilable}</p>
            <p class="units">${prod.units}</p>
            <p class="price-per-quantity">${prod.pricePerQuantity}</p>
            <p class="discount">${prod.discount}</p>
            <div class="edit-link">
            <ion-icon name="create-outline" class="edit-link-icon edit-btn--${
              index + 1
            }" index="${index}"></ion-icon>
            </div>
          </div>`;

    productsBox.insertAdjacentHTML('beforeend', str);
  });

  // btnsEdit = document.getElementsByClassName('edit-link-icon');
  // console.log(btnsEdit);
  addEvents();
};
displayProducts(prods);

////////////// EVENT LISTENERS ////////////////
let currProd;

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// btnsEdit.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();

//     currProd = prods[e.target.getAttribute('index')];

//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');

//     console.log(prodCategory, currProd.category);

//     prodItemName.value = currProd.itemName;
//     prodCategory.value = currProd.category;
//     prodQuantity.value = currProd.quantityAvilable;
//     prodUnits.value = currProd.units;
//     prodPrice.value = currProd.pricePerQuantity;
//     prodDiscount.value = currProd.discount;
//   });
// });

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

editBtnSubmit.addEventListener('click', function (e) {
  e.preventDefault();

  console.log(currProd);

  if (document.querySelector('#img')) {
    currProd.img = document.querySelector('.input--img').value;
  }
  currProd.itemName = prodItemName.value;
  currProd.category = prodCategory.value;
  currProd.quantityAvilable = prodQuantity.value;
  currProd.units = prodUnits.value;
  currProd.pricePerQuantity = prodPrice.value;
  currProd.discount = prodDiscount.value;

  closeModal();

  displayProducts(prods);
});

const editFrom = document.querySelector('.edit-form');
{
  /*  */
}
addProd.addEventListener('click', function (e) {
  e.preventDefault();

  //   const str = `<div class="input--img input">
  //   <label for="img" class="img">Img Url</label>
  //   <input type="text" name="img" id="img">
  // </div>`;
  prods.push({});
  currProd = prods.at(-1);

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // editFrom.insertAdjacentHTML('afterbegin', str);
});
