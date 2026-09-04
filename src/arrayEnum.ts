const chaiFlavours: string[] = ['masala' , 'adrak', 'lemon']
const chaiPrice: number[] = [10,20,35]

const ratings: Array<number> = [4.1,4.2, 4.3]


//custom datatype

type Chai = {name:string; price: number;}

const menu: Chai[] = [
    {name: "Masala", price: 25},
    {name: "adrak", price: 20},
]

//readonly arrays:
const cities: readonly string[] = ['delhi','jaipur']

// cities.push()// can't modify

//multidimentional array:

const table : number[][] = [
    [1,2,3],
    [4,5,6],
]

//tuples:
let chaiTuple: [string, number];
chaiTuple = ['masala',20]
// chaiTuple = [20,'masala'] //cannot change the order 

let userInfo : [string,number,boolean?]

userInfo = ['Mayank',20]
userInfo = ['Sharma',20,true]


//readonly tuples 

const location: readonly [number, number] = [28.3840384, 33.394839]

//named tuples 

const chaiItems: [name: string, price: number] = ['masala',69]


//ENums

enum cupSize {
    SMALL,
    MEDIUM,
    LARGE,
}

const size = cupSize.LARGE

enum status {
    PENDING = 100,
    SERVED, // it will automatically get value 101
    CANCELLED, //102
}

enum ChaiType {
    MASALA ='masala',
    GINGER = 'ginger'
}

function makeChai(type: ChaiType){
    console.log(`Making : ${type}`)
}

makeChai(ChaiType.MASALA)

enum randomEnum {
    ID = 1,
    NAME = 'chai'
}

const enum sugar{
    LOW = 1,
    MEDIUM = 2,
    HIGH = 4
}

const s = sugar.HIGH

let t: [string, number] = ['chai',20]
t.push("Extra")