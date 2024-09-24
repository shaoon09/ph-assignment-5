document.getElementById('btn-first')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const moneyAvailable = getTextFieldValueById('money-available');
        const donateMoneyFirst = getInputFieldValueById('input-first');
        if (donateMoneyFirst > 0 && donateMoneyFirst <= moneyAvailable) {
            const donatedFirst = getTextFieldValueById('donated-amount-first');
            const updatedMoneyAvailable = moneyAvailable - donateMoneyFirst;
            document.getElementById('money-available').innerText = updatedMoneyAvailable;
            const updatedDonation = donatedFirst + donateMoneyFirst;
            document.getElementById('donated-amount-first').innerText = updatedDonation;

            document.getElementById('my_modal_1').showModal();
        }
        else {
            alert('Thank you for your willingness to donate! Unfortunately, something went wrong. Could you please try again?');
        }
    });

document.getElementById('btn-second')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const moneyAvailable = getTextFieldValueById('money-available');
        const donateMoneySecond = getInputFieldValueById('input-second');
        if (donateMoneySecond > 0 && donateMoneySecond <= moneyAvailable) {
            const donatedSecond = getTextFieldValueById('donated-amount-second');
            const updatedMoneyAvailable = moneyAvailable - donateMoneySecond;
            document.getElementById('money-available').innerText = updatedMoneyAvailable;
            const updatedDonation = donatedSecond + donateMoneySecond;
            document.getElementById('donated-amount-second').innerText = updatedDonation;

            document.getElementById('my_modal_2').showModal();
        }
        else {
            alert('Donation failed. Please enter a valid amount.');
        }
    });

document.getElementById('btn-third')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const moneyAvailable = getTextFieldValueById('money-available');
        const donateMoneyThird = getInputFieldValueById('input-third');
        if (donateMoneyThird > 0 && donateMoneyThird <= moneyAvailable) {
            const donatedThird = getTextFieldValueById('donated-amount-third');
            const updatedMoneyAvailable = moneyAvailable - donateMoneyThird;
            document.getElementById('money-available').innerText = updatedMoneyAvailable;
            const updatedDonation = donatedThird + donateMoneyThird;
            document.getElementById('donated-amount-third').innerText = updatedDonation;

            document.getElementById('my_modal_3').showModal();
        }
        else {
            alert('Donation failed. Please enter a valid amount.');
        }
    });