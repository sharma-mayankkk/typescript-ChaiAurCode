class Chai {
    flavour: string;
    price: number;

    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;
    }
}

const masalaChai = new Chai('Ginger', 20)
masalaChai.flavour = 'Masala'

class Coffee {
    public type: string = "Cold"
    private secretIngredient = 'Full cream milk'

    reveal() {
        return this.secretIngredient
    }
}

const c = new Coffee()

class Shop {
    protected shopName = 'chai corner'
}

class Branch extends Shop {
    getName() {
        return this.shopName;
    }
}

class Wallet {
    #balance = 100 //private

    getBalance() {
        return this.#balance
    }
}


const w = new Wallet()
w.getBalance

class Cup {
    readonly capacity: number = 250

    constructor(capacity: number) {
        this.capacity = capacity
    }
}

class modernChai {
    private _sugar = 2;

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        if (value > 5) {
            throw new Error("Too sweet")
        }

        this._sugar = value
    }
}


const chai = new modernChai()
chai.sugar = 3


class EkChai{
    static shopName = 'coffee corner'
    constructor(public flavour: string){

    }
}

console.log(EkChai.shopName)


//abstract classes

abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    make(){
        console.log("chaiaiaiaiai")
    }
}

//composition

class Cooler{
    cool(){}
}

class makeCoffee{
    constructor(private cooler: Cooler){}

    make(){
        this.cooler.cool
    }
}