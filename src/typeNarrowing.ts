function getSuperHero(kind: string | number) {
    // Type narrowing: typeof tells TypeScript that 'kind' is a string inside this block.
    if (typeof kind === 'string') {
        return `calling ${kind}...`
    }

    // If it's not a string, TypeScript narrows 'kind' down to number.
    return `Supe ID: ${kind}`
}


function serveFood(msg?: string) {
    // 'msg' is optional, so it can be string or undefined.
    // This check narrows it to a truthy string before using it.
    if (msg) {
        return `Serving ${msg}`
    }

    return `Default food chicken curry is gonna serve`
}


function orderTees(size: 'Small' | 'Medium' | 'Large' | number) {
    // Narrowing using equality: size can be one of the literal values or a number.
    if (size === 'Small') {
        return `Skinny Fit`
    }

    // We narrow out both 'Medium' and 'Large' using ||.
    if (size === 'Medium' || size === 'Large') {
        return `Straight or Loose fit`
    }

    // After the above checks, TypeScript knows size must be a number.
    return `T-Shirt size: ${size}cm`
}


class Batman {
    serve() {
        return `Justice is getting served`
    }
}

class Superman {
    serve() {
        `Hope...`
    }
}


function serve(Justice: Batman | Superman) {
    // instanceof checks which class the object was created from.
    // So TypeScript narrows Justice to Batman inside this block.
    if (Justice instanceof Batman) {
        return Justice.serve()
    }
}


type chaiOrder = {
    type: string
    sugar: number
}


// User-defined type guard.
// 'obj is chaiOrder' tells TypeScript that true means obj is a chaiOrder.
function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        
        typeof obj === 'object' &&
        
        obj !== null &&
        
        typeof obj.type === 'string' &&
        
        typeof obj.sugar === 'number'
    )
}


function serveOrder(item: chaiOrder | string) {
    // Our custom type guard narrows item from chaiOrder | string to chaiOrder.
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with ${item.sugar} sugar`
    }

    // Since it wasn't a chaiOrder, TypeScript knows item must be a string.
    return `Serving custom chai : ${item}`
}


type masalaChai = { type: 'masala'; spicelevel: number }
type greenTea = { type: 'green'; spicelevel: number }
type redTea = { type: 'red'; spicelevel: number }

type chai = masalaChai | greenTea | redTea


function makeChai(order: chai) {
    // 'order.type' is a discriminant property.
    // Checking it narrows the union to the matching chai type.
    switch (order.type) {
        case "masala":
            return `Masala chai`

        case "green":
            return `Green Tea`

        case "red":
            return `red Tea`

        default:
            break;
    }
}


function brew(order: masalaChai | greenTea) {
    // The 'in' operator checks whether a property exists on the object.
    // If spicelevel exists, TypeScript narrows order accordingly.
    if ('spicelevel' in order) {
        // order is narrowed here based on the property check.
    }
}


// Another user-defined type guard.
// It checks whether every element in the unknown array is a string.
// function isStringArray(arr: unknown): arr is string[] {
//     // TODO: use Array.isArray() and every() to narrow unknown to string[].
// }