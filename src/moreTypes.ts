// `any` allows the variable to store any type of value.
let response: any = '42';

// Type assertion: we tell TypeScript to treat `response` as a string.
let numericLength: number = (response as string).length;


// Define the structure of a book object.
type book = {
    name: string
}

let bookString = '{"name": "Fire and Blood"}'

// JSON.parse() converts JSON string into an object.
// `as book` tells TypeScript what type the object should have.
let bookOject = JSON.parse(bookString) as book

console.log(bookOject.name)


// Tell TypeScript that this DOM element is an HTML input element.
const inputElement = document.getElementById('username') as HTMLInputElement


// `any` can contain any type, so TypeScript doesn't check operations on it.
let value: any;

value = 'Batman'
value = 49
value = [1, 2, 3]

// This can cause a runtime error because the current value is an array.
value.toUpperCase()


// `unknown` can store any type, but TypeScript requires us to check
// the type before using it.
let newValue: unknown;

newValue = 'Batman'
newValue = 49
newValue = [1, 2, 3]

// Check the type before using a method specific to strings.
if (typeof newValue === 'string') {
    newValue.toUpperCase()
}


// In catch blocks, the error is treated as `unknown`.
// We check if it is an actual Error before using `.message`.
try {

} catch (error) {

    if (error instanceof Error) {
        console.log(error.message)
    }

    console.log("Error:", error)
}


// `data` is unknown, so we use a type assertion to treat it as a string.
const data: unknown = 'Batman'

const strData: string = data as string


// `never` means a function will never successfully return.

// A union type allows only these specific values.
type Role = 'admin' | 'user' | 'superAdmin'

function redirectBasedOnRole(role: Role): void {

    if (role === 'admin') {
        console.log('redirecting to admin portal');
        return;
    }

    if (role === 'user') {
        console.log('redirecting to user portal');
        return;
    }

    // After checking admin and user, the remaining role is superAdmin.
    role;
}


// `never` is used because this function never finishes.
function neverReturn(): never {
    while (true) {

    }
}