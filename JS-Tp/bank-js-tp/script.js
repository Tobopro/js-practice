class Account {
    constructor(name, lastName, currentAmount, lastAction, accountNb, moneyTransfer) {
        this.name = name;
        this.lastName = lastName;
        this.currentAmount = currentAmount;
        this.lastAction = lastAction;
        this.accountNumb = accountNb;
        this.moneyTransfer = [];
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
        let message = `Bienvenue ${this.name} ${this.lastName}`;

        // Remplacez 'targetElementId' par l'ID de l'élément où vous souhaitez insérer le message
        let targetElement = document.querySelector('.welcome');

        if (targetElement) {
            targetElement.insertAdjacentHTML('beforeend', message);
        }
    }

    sayAmount() {

        let messageAmount = `${this.currentAmount}$`;
        let targetElement = document.querySelector('.solde__value');
        if (targetElement) {
            targetElement.innerHTML = messageAmount;

        }
    }

    sayLastAction() {

        let messageLastAction = this.lastAction;
        let targetElement = document.querySelector('.date');
        if (targetElement) {
            targetElement.insertAdjacentHTML('beforeend', messageLastAction);
        }
    }
}


let allDeposits = 0;
function addDeposit() {
    const inputDeposit = document.querySelector('.form__input--deposit-amount');
    const deposit = inputDeposit.value;
    allDeposits += parseInt(deposit);
    account.currentAmount = account.currentAmount + parseInt(deposit);
    targetElement = document.querySelector('.movements');
    messageAmount = `<div class="movements__row">
    <div class="movements__type movements__type--deposit">dépôt</div>
    <div class="movements__date">22/01/2021</div>
    <div class="movements__value">${deposit}$</div>
    </div>`
    targetElement.insertAdjacentHTML('beforeend', messageAmount);
}

function rmvDeposit() {
    const withdrawalDeposit = document.querySelector('.form__input--withdrawal-amount');
    const withdrawal = withdrawalDeposit.value;
    account.currentAmount = account.currentAmount - parseInt(withdrawal);

    targetElement = document.querySelector('.movements');
    messageAmount = `<div class="movements__row">
    <div class="movements__type movements__type--withdrawal">retrait</div>
    <div class="movements__date">22/01/2021</div>
    <div class="movements__value">${withdrawal}$</div>
    </div>`
    targetElement.insertAdjacentHTML('beforeend', messageAmount);


}


const targetFormDeposit = document.querySelector('.form--deposit')
targetFormDeposit.addEventListener('submit', function (e) {
    e.preventDefault();
    addDeposit();
    this.currentAmount = account.currentAmount;
    console.log(this.currentAmount);
    account.sayAmount();


})

const targetFormWithdrawal = document.querySelector('.form--withdrawal')
targetFormWithdrawal.addEventListener('submit', function (e) {
    e.preventDefault();
    rmvDeposit();
    this.currentAmount = account.currentAmount;
    console.log(this.currentAmount);
    account.sayAmount();
})



let account = new Account('Tom', 'Boyer', 0, '22/01/2024');
account.sayHello();
account.sayAmount();
account.sayLastAction();