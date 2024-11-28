{
    //
    
    //getter and setter
    class BankAccount{
       public readonly id: number;
       public name: string;
       protected _balance: number;
    
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
    

        // 
        set deposit(amount : number){
            this._balance = this._balance  + amount
        }

        //getter
        get balance(){
            return this._balance;
        }




    
    }
    

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);


    goribManusherAccount.deposit = 50
    const myBalance = goribManusherAccount.balance; //proerty kora
     console.log(myBalance);
    
    
    
    
    
    
    
    
    
    
    
    
    //
    }