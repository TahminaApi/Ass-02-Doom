// This is for Bridal Jewellary Set ----------

//Clicking plus button-----
document.getElementById('phone-plus').addEventListener('click', function () {
    let inputPhoneNumber = document.getElementById('phone-number');
    // console.log(inputPhoneNumber);
    let phoneNumberText = inputPhoneNumber.value;
    // console.log(phoneNumberText);
    let phoneNumberAmount = parseFloat(phoneNumberText) + 1;
    // console.log(phoneNumberAmount);
    inputPhoneNumber.value = phoneNumberAmount;
    // console.log(phoneNumberAmount);


    //Incrising phone Amount --------

    const phoneTotal = document.getElementById('phone-total');
    // console.log(phoneTotal);
    let phoneTotalText = phoneTotal.innerHTML;
    // console.log(phoneTotalText);
    let newPhoneTotal = parseFloat(phoneTotalText) + 10000;
    // console.log(newPhoneTotal);
    phoneTotal.innerHTML = newPhoneTotal;
    // console.log(newPhoneTotal);



    //Calculating Sub-Total Amount --------

    const subTotal = document.getElementById('sub-total');
    // console.log(subTotal);
    let subTotalText = subTotal.innerHTML;
    // console.log(subTotalText);
    let subTotalAmount = parseFloat(subTotalText) + 10000;
    subTotal.innerHTML = subTotalAmount;
    // console.log(subTotalAmount);


    //Calculating Tax Amount --------

    const taxAmmount = document.getElementById('tax-ammount');
    // console.log(taxAmmount);
    let taxAmmountText = taxAmmount.innerHTML;
    // console.log(taxAmmountText);
    let taxTotalAmmount = parseFloat(taxAmmountText) + 10000 + 2;
    taxAmmount.innerHTML = taxTotalAmmount;
    // console.log(taxTotalAmmount);


    // Calculating Total Amount ----------
    const totalPrice = document.getElementById('total-price');
    // console.log(totalPrice);
    const totalPriceText = totalPrice.innerHTML;
    const totalPriceAmount = parseFloat(totalPriceText) + 10000 + 2;
    totalPrice.innerHTML = totalPriceAmount;
    // console.log(totalPriceText);


})




//Clicking minus button --------
document.getElementById('phone-minus').addEventListener('click', function () {
    const inputPhoneNumber = document.getElementById('phone-number');
    // console.log(inputPhoneNumber);
    let phoneNumberText = inputPhoneNumber.value;
    // console.log(phoneNumberText);
    let phoneNumberAmount = parseFloat(phoneNumberText) - 1;
    // console.log(phoneNumberAmount);
    if (phoneNumberAmount >= 0) {
        inputPhoneNumber.value = phoneNumberAmount;
    }
    //  console.log(phoneNumberAmount);


    // Decrease phone Amount--------
    const phoneTotal = document.getElementById('phone-total');
    // console.log(phoneTotal);
    let phoneTotalText = phoneTotal.innerHTML;
    // console.log(phoneTotalText);
    let phoneTotalAmount = parseFloat(phoneTotalText) - 10000;
    //  console.log(phoneTotalAmount);
    if (phoneNumberAmount >= 0) {
        phoneTotal.innerHTML = phoneTotalAmount;
    }
    // console.log(phoneTotalAmount);


    //Calculating Sub-Total Amount -------

    const subTotal = document.getElementById('sub-total');
    let subTotalText = subTotal.innerHTML;
    // console.log(subTotalText);
    let subTotalAmount = parseFloat(subTotalText) - 10000;
    if (subTotalAmount >= 0) {
        subTotal.innerHTML = subTotalAmount;
    }
    // console.log(subTotalAmount);


    //Calculating Tax Amount --------
    const taxAmount = document.getElementById('tax-ammount');
    // console.log(taxAmount);
    let taxAmountText = taxAmount.innerHTML;
    // console.log(taxAmountText);
    let taxTotalAmount = parseFloat(taxAmountText) - 10000 - 2;
    if (taxTotalAmount >= 0) {
        taxAmount.innerHTML = taxTotalAmount;
    }
    // console.log(taxTotalAmount);



    // Calculating Total Amount ----------
    const totalPrice = document.getElementById('total-price');
    // console.log(totalPrice);
    let totalPriceText = totalPrice.innerHTML;
    // console.log(totalPriceText);
    let totalPriceAmmount = parseFloat(totalPriceText) - 10000 - 2;
    if (totalPriceAmmount >= 0) {
        totalPrice.innerHTML = totalPriceAmmount;
    }
    // console.log(totalPriceAmmount);

})





//This is for Non Bridal Jewellary Set -----------


//Clicking plus button --------
document.getElementById('case-plus').addEventListener('click', function () {
    const caseNumber = document.getElementById('case-number');
    // console.log(caseNumber);
    let caseNumberText = caseNumber.value;
    // console.log(caseNumberText);
    let caseNumberValue = parseFloat(caseNumberText) + 1;
    // console.log(caseNumberValue);
    caseNumber.value = caseNumberValue;
    // console.log(caseNumberValue);

    //Incrising Case Amount ---------

    const caseTotal = document.getElementById('case-total');
    // console.log(caseTotal);
    let newCaseTotal = caseTotal.innerHTML;
    // console.log(newCaseTotal);
    let caseTotalAmount = parseFloat(newCaseTotal) + 100;
    //  console.log(caseTotalAmount);
    caseTotal.innerHTML = caseTotalAmount;
    // console.log(caseTotalAmount);



    // Calculating Sub Total Amount -------
    const subTotal = document.getElementById('sub-total');
    //console.log(subTotal);
    let subTotalText = subTotal.innerHTML;
    // console.log(subTotalText);
    let subTotalAmount = parseFloat(subTotalText) + 100;
    subTotal.innerHTML = subTotalAmount;
    // console.log(subTotalAmount);


    //Calculating Tax Amount --------

    const taxAmmount = document.getElementById('tax-ammount');
    // console.log(taxAmmount);
    let taxAmmountText = taxAmmount.innerHTML;
    // console.log(taxAmmountText);
    let taxTotalAmmount = parseFloat(taxAmmountText) + 100 + 2;
    taxAmmount.innerHTML = taxTotalAmmount;
    // console.log(taxTotalAmmount);


    // Calculating Total Amount ----------
    const totalPrice = document.getElementById('total-price');
    // console.log(totalPrice);
    const totalPriceText = totalPrice.innerHTML;
    const totalPriceAmount = parseFloat(taxAmmountText) + 100 + 2;
    totalPrice.innerHTML = totalPriceAmount;
    //  console.log(totalPriceText);


})

//Clicking Minus Button ----------
document.getElementById('case-minus').addEventListener('click', function () {
    const caseMinus = document.getElementById('case-number');
    // console.log(caseMinus);
    let caseMinusText = caseMinus.value;
    // console.log(caseMinusText);
    let caseMinusAmount = parseFloat(caseMinusText) - 1;
    // console.log(caseMinusAmount);

    if (caseMinusAmount >= 0) {
        caseMinus.value = caseMinusAmount;
    }

    // Decrease Case Amount--------
    const caseTotal = document.getElementById('case-total')
    //console.log(caseTotal);
    let caseTotalText = caseTotal.innerHTML;
    // console.log(caseTotalText);
    let caseTotalAmount = parseFloat(caseTotalText) - 100;
    //  console.log(caseTotalAmount);
    if (caseTotalAmount >= 0) {
        caseTotal.innerHTML = caseTotalAmount;
    }
    // console.log(caseTotalAmount);


    // Calculating Sub Total Amount -------

    const subTotal = document.getElementById('sub-total');
    // console.log(subTotal);
    let subTotalText = subTotal.innerHTML;
    // console.log(subTotalText);
    let subTotalAmount = parseFloat(subTotalText) - 100;
    if (subTotalAmount >= 0) {
        subTotal.innerHTML = subTotalAmount;
    }
    // console.log(subTotalAmount);



    //Calculating Tax Amount --------


    const taxAmount = document.getElementById('tax-ammount');
    // console.log(taxAmount);
    let taxAmountText = taxAmount.innerHTML;
    // console.log(taxAmountText);
    let taxTotalAmount = parseFloat(taxAmountText) - 100 - 2;
    if (taxTotalAmount >= 0) {
        taxAmount.innerHTML = taxTotalAmount;
    }
    // console.log(taxTotalAmount);



    // Calculating Total Amount ----------
    const totalPrice = document.getElementById('total-price');
    // console.log(totalPrice);
    let totalPriceText = totalPrice.innerHTML;
    // console.log(totalPriceText);
    let totalPriceAmmount = parseFloat(totalPriceText) - 100 - 2;
    if (totalPriceAmmount >= 0) {
        totalPrice.innerHTML = totalPriceAmmount;
    }
    // console.log(totalPriceAmmount);


})



