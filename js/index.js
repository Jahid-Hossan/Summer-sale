let total = 0;


function clickHandler(target) {
    // get selected prod. name
    const itemList = target.childNodes[3].childNodes[3].innerText;
    const selectedItemContainer = document.getElementById('selected-items');
    // creating inner html
    const count = selectedItemContainer.childElementCount;
    const li = document.createElement('li');
    li.innerHTML = `${count + 1}. ${itemList}`;
    // append the created html as a child
    selectedItemContainer.appendChild(li);
    // get the previous price and make number type
    const itemPriceArr = target.childNodes[3].childNodes[5].innerText.split(" ");
    const itemPrice = itemPriceArr[0];
    const price = parseFloat(itemPrice);
    // calculation with declared variable to get the total price
    total = total + price;
    // set total price without discount
    document.getElementById('total-price').innerText = total.toFixed(2);
    const totalPriceAfterDisc = document.getElementById('total-after-discount').innerText = total.toFixed(2);
    // enable and disable purchase button
    const purchaseBtn = document.getElementById('btn-purchase');
    if (totalPriceAfterDisc > 0) {
        purchaseBtn.removeAttribute('disabled');
    }
}

// get the coupon apply button
const applyBtn = document.getElementById('btn-apply');
// get the coupon input value
const applyBtnEnable = document.getElementById('coupon-input');
// enable and disable coupon apply button
applyBtnEnable.addEventListener('keyup', function (event) {
    const couponConfirmation = event.target.value;
    if (couponConfirmation === 'SELL200') {
        applyBtn.removeAttribute('disabled');
    } else {
        applyBtn.setAttribute('disable', true);
    }
})


// apply event listener on coupon apply button
applyBtn.addEventListener('click', function () {
    // get total price value and make number type
    const totalAmountString = document.getElementById('total-after-discount');
    const totalAmount = parseFloat(totalAmountString.innerText);
    // condition when discount will apply
    if (totalAmount >= 200) {
        // calculate discount
        const parcentageOfDiscount = totalAmount * 0.20;
        // calculate total amount after discount
        const getDiscount = totalAmount - parcentageOfDiscount;
        // set discount amount
        const getDiscountAmountInput = document.getElementById('discount');
        getDiscountAmountInput.innerText = parcentageOfDiscount.toFixed(2);
        // set total amount after discount
        totalAmountString.innerText = getDiscount.toFixed(2);
    } else {
        alert("Please complete minimum amount 200 to get 20% discount");
    }
})

// redirect to home button
const btnPurchase = document.getElementById('redirect-home');
btnPurchase.addEventListener('click', function () {
    console.log("hi");
    window.location.href = 'index.html';
})


