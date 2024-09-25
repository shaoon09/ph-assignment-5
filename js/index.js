document.getElementById('btn-one')
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
            const div =document.createElement('div');
            div.classList.add('border');
            div.classList.add('rounded-lg');
            div.classList.add('p-8');
            div.classList.add('mb-5');
            div.innerHTML = `
            <h1 class="font-extrabold text-xl md:text-2xl mb-5">${donateMoneyFirst} Taka is Donated for Flood at Noakhali, Bangladesh</h1>
            <p class="text-xl"> <span class="font-bold">Date & Time :</span> ${new Date().toLocaleString()}</p>`
            document.getElementById('history-log').appendChild(div);

            document.getElementById('my_modal_1').showModal();
        }
        else {
            alert('Thank you for your willingness to donate! Unfortunately, something went wrong. Could you please try again?');
        }
    });

document.getElementById('btn-two')
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
            const div =document.createElement('div');
            div.classList.add('border');
            div.classList.add('rounded-lg');
            div.classList.add('p-8');
            div.classList.add('mb-5');
            div.innerHTML = `
            <h1 class="font-extrabold text-xl md:text-2xl mb-5">${donateMoneySecond} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
            <p class="text-xl"> <span class="font-bold">Date & Time :</span> ${new Date().toLocaleString()}</p>`
            document.getElementById('history-log').appendChild(div);

            document.getElementById('my_modal_2').showModal();
        }
        else {
            alert('Thank you for your willingness to donate! Unfortunately, something went wrong. Could you please try again?');
        }
    });

document.getElementById('btn-three')
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
            const div =document.createElement('div');
            div.classList.add('border');
            div.classList.add('rounded-lg');
            div.classList.add('p-8');
            div.classList.add('mb-5');
            div.innerHTML = `
            <h1 class="font-extrabold text-xl md:text-2xl mb-5">${donateMoneyThird} Taka is Donated for Injured in the Quota Movement</h1>
            <p class="text-xl"> <span class="font-bold">Date & Time :</span> ${new Date().toLocaleString()}</p>`
            document.getElementById('history-log').appendChild(div);

            document.getElementById('my_modal_3').showModal();
        }
        else {
            alert('Thank you for your willingness to donate! Unfortunately, something went wrong. Could you please try again?');
        }
    });