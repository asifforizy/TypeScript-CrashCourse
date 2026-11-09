// type assertion 

let  anything : any ;

anything = "Asif";
(anything as string).length // 22.00 


const kgToGMConverter = (input: number | string)=> {
    if (typeof input === "number") {
        return input * 1000;
    } else {
        return parseFloat(input) * 1000;
    }
};
 



console.log(kgToGMConverter(10) as number); // 10000 
console.log(kgToGMConverter("10") as number); // 10000



type CustomErrorType = {
    message: string;
};

try{

}catch (error) {
   Message: (error as CustomErrorType).message
}