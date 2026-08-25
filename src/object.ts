const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

// Inference
// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

// Object Type
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

// Object
const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "tea leaves"],
};

type cup = {size: string};
let smallCup : cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup    // Bare minimum property is satisfied

type brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew : brew = coffee    // Extra is allowed

type user = {
  username: string;
  password: string
}

const u: user = {
  username: "chaicode",
  password: "123"   // if it is not given, then it shows error
}

// Data type splitting

type item = {name: string, quantity: number}
type address = {street: string, pin: number}

type order = {
  id: string,
  items: item[],
  address: address[]
}                   // It gives code structure


// Partial and update keyword
type ChaiDetails = {
  name: string,
  price: number,
  isHot: boolean
}

const updateChai = (updates: Partial<ChaiDetails>) => {
  console.log("Updating chai with ", updates)
}

updateChai({price: 25})
updateChai({isHot: false})
updateChai({})      // An empty object can be passed.

// Required keyword

type chaiOrder = {
  name?: string,
  quantity?: number 
}

const placeOrder = (order: Required<chaiOrder>) => {
  console.log(order);
}

placeOrder({
  name: "Masala Chai",
  quantity: 2       // All properties are required, even if optional in the original type.
});

// Pick Keyword

type Chai = {
  name: string,
  price: number,
  isHot: boolean,
  ingredients: string[]
}

type basicChaiInfo = Pick<Chai, "name" | "price">

const chaiInfo : basicChaiInfo = {
  name: "Lemon Tea",
  price: 30
}           // Only the picked properties are required.

// Omit Keyword
// Omit = take a type and remove one or more properties from it.

type newChai = {
  name: string,
  price: number,
  isHot: boolean,
  secretIngredients: string
}

type publicChai = Omit<newChai, "secretIngredients">

const nimbuChai : publicChai = {
  name: "Nimbu Chai",
  price: 20,
  isHot: true
}

// Real life example of Omit

type User = {
  id: number
  name: string
  email: string
}

// When creating a new user, you might not want the user to provide the id, because the database generates it.

type CreateUser = Omit<User, "id">

// type CreateUser = {
//   name: string
//   email: string
// }

const newUser: CreateUser = {
  name: "Rahul",
  email: "rahul@gmail.com"
}