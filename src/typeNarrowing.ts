function getSuperHero(kind: string | number){
    if(typeof kind === 'string'){
        return `calling ${kind}...`
    }

    return `Supe ID: ${kind}`
}

function serveFood(msg?: string){
    if(msg){
        return `Serving ${msg}`
    }

    return `Default food chicken curry is gonna serve`
}

// function orderTees(size: 'Small' | 'Medium' | 'Large' | number){

// }