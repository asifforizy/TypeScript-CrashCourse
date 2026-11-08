const getUser = (input: string)=>{
    if(input){
        console.log(`From DB: ${input}`);
    }else{
        console.log("From DB: ALL Users");
    }
}

getUser("Asif"); // From DB: Asif
getUser(""); // From DB: ALL Users


// unknown type

let productDiscount = (input: unknown)=>{
    if(typeof input === "number"){
        console.log(`Discount is ${input}`);
    }else{
        console.log("Discount is not a number");
    }
}

productDiscount(10);
productDiscount("10");
productDiscount(true);


// void

const logMessage = (message: string): void => {
    console.log(message);
}

logMessage("Hello World!");
