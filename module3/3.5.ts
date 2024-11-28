{
//

//access modifiers
class BankAccount{
   public readonly id: number;
   public name: string;
   protected _balance: number;

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    public addDeposit(amount : number){
        this._balance = this._balance + amount
    }

    public getBalance(){
        return this._balance;
    }

}

// test check
class StudentAccount extends BankAccount{
    test(){
        this.addDeposit(20)
    }
}

const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
//goribManusherAccount.balance = 0
goribManusherAccount.addDeposit(300)
const myBalance = goribManusherAccount.getBalance();
console.log(myBalance);












//
}