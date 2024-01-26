let calculateBtn = document.getElementById('calculate');
let resetBtn = document.getElementById('reset');
let roseInput = document.getElementById('rose');
let lilyInput = document.getElementById('lily');
let gerberaInput = document.getElementById('gerbera');
let priceOutputDiv = document.getElementById('priceOutput');
let giftOutputDiv = document.getElementById('giftOutput');
let roseOutputDiv = document.getElementById('roseOutput');
let lilyOutputDiv = document.getElementById('lilyOutput');
let gerberaOutputDiv = document.getElementById('gerberaOutput');
let chocolateBox = document.getElementById('gift1');
let chocolate = document.getElementById('gift2');
let champagne = document.getElementById('gift3');
let cardPaymentInput = document.getElementById('card');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let roseCount = Number(roseInput.value);
    let lilyCount = Number(lilyInput.value);
    let gerberaCount = Number(gerberaInput.value);
    let total = 0;

    if (!Number.isInteger(roseCount) || !Number.isInteger(lilyCount) || !Number.isInteger(gerberaCount)) {
        alert('Enter whole numbers');
    } else {
        roseOutputDiv.innerHTML = '';
        lilyOutputDiv.innerHTML = '';
        gerberaOutputDiv.innerHTML = '';
        giftOutputDiv.innerHTML = '';
        priceOutputDiv.innerHTML = '';

        for(let i = 0; i < roseCount; i++) {
            roseOutputDiv.innerHTML += `<img src="rose.png" alt="rose${i}">`;
        }
        for(let i = 0; i < lilyCount; i++) {
            lilyOutputDiv.innerHTML += `<img src="lily.png" alt="lily${i}">`;
        }
        for(let i = 0; i < gerberaCount; i++) {
            gerberaOutputDiv.innerHTML += `<img src="daisy.png" alt="gerbera${i}">`;
        }

        total = roseCount * 150 + lilyCount * 120 + gerberaCount * 70;

        if (chocolateBox.checked) {
            total += 500;
            giftOutputDiv.innerHTML += `<p>+ chocolate box &#127852;</p>`;
        }
        if (chocolate.checked) {
            total += 500;
            giftOutputDiv.innerHTML += `<p>+ chocolate &#127851;</p>`;
        }
        if (champagne.checked) {
            total += 500;
            giftOutputDiv.innerHTML += `<p>+ champagne &#127870;</p>`;
        }

        if (cardPaymentInput.checked && total > 2000) {
            priceOutputDiv.innerHTML += `<p>Price without discount: ${total} RSD.</p>`;
            priceOutputDiv.innerHTML += `<h3>Price with discount: ${total - total/10} RSD.</h3>`;
        } else {
            priceOutputDiv.innerHTML += `<p>Total price is <b>${total} RSD.</b></p>`;
        }
    }
});

resetBtn.addEventListener('click', () => {
    roseOutputDiv.innerHTML = '';
    lilyOutputDiv.innerHTML = '';
    gerberaOutputDiv.innerHTML = '';
    giftOutputDiv.innerHTML = '';
    priceOutputDiv.innerHTML = '';
});