class BankAccount {
    constructor(name){
        this.name = name;
        this.balance = 0;
    }
    credit (amount) {
        this.balance += amount;
        
    }
    describe () {
        return `owner: ${this.name}, balance: ${this.balance}`
    }
}

const accountList = [];
accountList.push(new BankAccount("Sean"));
accountList.push(new BankAccount("Brad"));
accountList.push(new BankAccount("Georges"));

accountList.forEach(account => {
    account.credit(1000);
    console.log(account.describe());
  });