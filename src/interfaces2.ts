interface Chai{
    flavour: string;
    price: number;
    milk?: boolean;
}

const masala:Chai = {
    flavour: 'masala',
    price: 30,
}

interface Shop{
    readonly id: number;
    name: string
}

const s: Shop = {
    id: 77,
    name:"Bat's cafe"
}

interface discountCalculator{
    (price: number): number
}

const apply50 : discountCalculator =(p) => p*0.5

interface teaMachine {
    start(): void;
    stop(): void;
}

const newMachine: teaMachine = {
    start(){
        console.log('start')
    },
    stop(){
        console.log('stop')
    }
}

//index signatures
interface ChaiRatings {
    [flaour: string] : number
}

const ratings: ChaiRatings = {
    masala: 4.6,
    black: 4.3
}

//interface merging: 

interface User{
    age: number
}

interface User{
    gender: string
}

const u: User = {
    age: 20,
    gender: "Male"
}


//inheritance: 

interface A{
    a: number
}

interface B{
    b: string
}

interface c extends A,B {
    
}