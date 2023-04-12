
/////   IIFE => IMIDIETELY INVOKED FUNCTION EXPRESSION



// similar with arrow function 

// (()=>{
//     console.log('Hello world');
// })()




//////  similar with anonymous

// (function(){
//     console.log('Hello world');
// })()





/// we can give any name to function

// (function myIIFE(){
//     console.log('Hello world');
// })()

/// after finishing code for IIFE no need to call function name!!
// Prjectlarda JS fayrllariga bir xil nom berib qo'yilgan holatda agar IIFE dan foydalansak console da garchi bir xil fayl bo'lsa ham bizga codelarimizdan
// foydalanishni imkoni bo'ladi


// (function(){
    
//     function example(){
//         console.log('Hello world');
//     }
    
//     example()

    
// })()

// How to create new prototype for Object


// const user2 = {}

// Object.prototype.getAge = function(){
//     console.log('I am 24 years old');
// }


////CLASSES

//OOP => OBJECT ORIENTED PROGRAMMING
//FP => FUNCTIONAL PROGRAMMING


class Mashina {
    constructor(color,name,price){
        this.color = color;
        this.name = name;
        this.price = price;
    }

    showInfo(){
        console.log(`${this.color} ${this.name} ning narxi ${this.price} `);
    }
}

const mashina1 = new Mashina('Qora', 'Jentra', '150000')
const mashina2 = new Mashina('Sariq', 'Jentra', '150000')
const mashina3 = new Mashina('Oq', 'Jentra', '150000')

mashina1.showInfo()