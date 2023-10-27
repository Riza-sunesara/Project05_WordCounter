#! /usr/bin/env node
import inquirer from "inquirer";

let paragraph:any;
let counter=async () => {

paragraph=await inquirer.prompt([
    {
        message:"Enter the Paragraph here:",
        name:"text",
        type:"input"
    }
])

do {
    let ask=await inquirer.prompt([
        {
            message:"Choose what to see:",
            name:"choice",
            type:"list",
            choices:["Total characters in text","Total words in text","Exit"]
        }
    ])
    let word:string[]=paragraph.text.split(" ");
    let character:string[]=paragraph.text.split("");
    let total_words=0;
    let total_char=0;
    if(ask.choice=="Total words in text"){
        for (let i = 0; i < word.length; i++) {
            total_words++;
        }
        console.log(total_words);
    }
    else if(ask.choice=="Total characters in text"){
        for (let i = 0; i < character.length; i++) {
            if(character[i]!==" "){
                total_char++;
            }
        }
        console.log(total_char);
    }
    else if(ask.choice=="Exit"){
        process.exit();
    }
    else{
        console.log("Wrong choice made");
    }
    
} while (true);
}


counter();//reptation ka code baqi hai

/*
Apple Inc. is a multinational technology company headquartered in Cupertino, California. It was founded by Steve Jobs, Steve        
Wozniak, and Ronald Wayne in 1976. The company designs, manufactures, and markets mobile communication and media devices, personal computers, and portable      
digital music players. It is known for its hardware products such as the iPhone, iPad, Mac computers, Apple Watch, and Apple TV. In addition to hardware, Apple 
also has a vast range of software services including the iOS, macOS, watchOS, and tvOS operating systems, the iTunes Store, the App Store, Apple Music, and     
iCloud. Apple is known for its innovation and design in consumer electronics and has a significant influence in today’s tech industry.
*/