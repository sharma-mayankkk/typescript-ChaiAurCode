type chaiOrder = {
    type: string
    sugar: number
    strong: boolean
}

function makeChai(order: chaiOrder) {
    console.log(order)
}

function serveChai(order: chaiOrder) {
    console.log(order)
}

type teaRecipe = {
    water: number
    milk: number
}

class MasalaChai implements teaRecipe {
    water = 100
    milk = 50
}

//interface:
interface cupSize {
    size: "small" | 'large'
}

class Chai implements cupSize {
    size: "small" | "large" = 'large'
}

// type response = {ok: true} | {ok: false}

// class myRes implements Response {
//     ok: boolean = true;
// }

//union (literal types)
type teaType = 'masala' | 'ginger' | 'lemon'

function orderChai(t: teaType){
    console.log(t)
}

//intersection
type baseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai1 = baseChai | Extra

const cup: MasalaChai1 = {
    teaLeaves: 2,
    masala: 1 
}

type User ={
    username: string
    bio?: string
}

const u1: User  = {
    username:'mayank'
}

const u2: User  = {
    username:'mayank',
    bio: 'mayank.batman'
}

type Config = {
    readonly appName: string
    version: number
}

const cfg : Config = {
    appName: 'Batman',
    version: 6.9
}

// cfg.appName = 'mayank' //cannot reassing as it was readonly