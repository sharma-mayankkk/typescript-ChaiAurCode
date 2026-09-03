function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} of ${type} chai`)
}

makeChai('masala', 2)

function getChaiPrice(): number { // adding return type
    return 25;
}

function makeOrder(order: string) {
    if (!order) {
        return null;
    }

    return order
}


function logChai(): void {
    console.log('chai is ready')
}

function orderChaii(type: string = "Masala") { //default value

}

function createChai(order: {
    type: string;
    sugar: number;
    size: 'small' | 'large'
}): number {
    return 4;
}