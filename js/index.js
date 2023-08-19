let total = 0;


function clickHandler(target) {
    const itemPriceArr = target.childNodes[3].childNodes[5].innerText.split(" ");
    const itemPrice = itemPriceArr[0];
    const price = parseFloat(itemPrice);
    total = total + price;
    document.getElementById('total-price').innerText = total.toFixed(2);
    const totalPriceAfterDisc = document.getElementById('total-after-discount').innerText = total.toFixed(2);
    const purchaseBtn = document.getElementById('btn-purchase');
    if (totalPriceAfterDisc > 0) {
        purchaseBtn.removeAttribute('disabled');
    }
}

const applyBtn = document.getElementById('btn-apply');
const applyBtnEnable = document.getElementById('coupon-input');
applyBtnEnable.addEventListener('keyup', function (event) {
    const couponConfirmation = event.target.value;
    if (couponConfirmation === 'SELL200') {
        applyBtn.removeAttribute('disabled');
    } else {
        applyBtn.setAttribute('disable', true);
    }
})



applyBtn.addEventListener('click', function () {
    const totalAmountString = document.getElementById('total-after-discount');
    const totalAmount = parseFloat(totalAmountString.innerText);
    if (totalAmount >= 200) {
        const parcentageOfDiscount = totalAmount * 0.20;
        const getDiscount = totalAmount - parcentageOfDiscount;
        const getDiscountAmountInput = document.getElementById('discount');
        getDiscountAmountInput.innerText = parcentageOfDiscount;
        totalAmountString.innerText = getDiscount;
    }else{
        alert ("Please complete minimum amount 200 to get 20% discount");
    }
})





