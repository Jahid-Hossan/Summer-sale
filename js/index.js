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
    const totalPriceBeforeDisc = document.getElementById('total-price').innerText = total.toFixed(2);
    // enable and disable purchase button and apply btn
    const purchaseBtn = document.getElementById('btn-purchase');
    const applyBtn = document.getElementById('btn-apply');
    // condition for enable and disable
    if (totalPriceBeforeDisc > 0) {
        purchaseBtn.removeAttribute('disabled');
        if (totalPriceBeforeDisc >= 200) {
            applyBtn.removeAttribute('disabled');
        } else {
            applyBtn.setAttribute('disable', true);
        }
    }else{
        purchaseBtn.setAttribute('disable', true);
    }
}

// get the coupon apply button
const applyBtnHandle = document.getElementById('btn-apply');
// calculation after apply coupon
applyBtnHandle.addEventListener('click', function () {
    // get the coupon input value
    const couponCodeInput = document.getElementById('coupon-input');
    const couponCode = couponCodeInput.value;
    // get total amount before discount
    const totalAmountString = document.getElementById('total-price');
    const totalAmount = parseFloat(totalAmountString.innerText);
    const totalPriceAfterDisc = document.getElementById('total-after-discount');
    // condition for discount
    if (couponCode === 'SELL200') {
        // discount calculation
        const parcentageOfDiscount = totalAmount * 0.20;
        // total amount after discount calculation
        const getDiscount = totalAmount - parcentageOfDiscount;
        // set the amount in inner text
        const getDiscountAmountInput = document.getElementById('discount');
        getDiscountAmountInput.innerText = parcentageOfDiscount.toFixed(2);
        totalPriceAfterDisc.innerText = getDiscount.toFixed(2);
        
    } else {
        alert("Please enter valid coupon to get 20% discount");
    }
})

// redirect to home button
const redirectHomeBtn = document.getElementById('redirect-home');
redirectHomeBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
})


