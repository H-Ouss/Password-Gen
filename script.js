// RANDOM PASSWORD GENERATOR

function generatePassword(lenght, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
   
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHIJKLNNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symboleChar = "!@#$%^&*()_+-=: ><,.";

    let allowedChar = "";
    let password = "";

    allowedChar += includeLowercase ? lowercaseChar : "";
    allowedChar += includeUppercase ? uppercaseChar : "";
    allowedChar += includeNumbers ? numberChar : "";
    allowedChar += includeSymbols ? symboleChar : "";

    if(lenght <= 6){
        return `password lenght must be at least 7 character`;
    }
    if(allowedChar.length === 0){
        return `At least one of set of character must be selected`;
    }

    for(let i = 0 ; i <= lenght ; i++){
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex];
    }
    return password;
}

 document.getElementById('generateButton').addEventListener('click', function() {

    const passwordLenght = parseInt(document.getElementById('passwordLength').value - 1);
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const password = generatePassword(passwordLenght,
                                    includeLowercase, 
                                     includeUppercase, 
                                     includeNumbers, 
                                     includeSymbols);

    console.log(`the password generated is : ${password} `);
    document.getElementById('passwordDisplay').textContent = `The password generated is: ${password}`;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const passwordText = document.getElementById('passwordDisplay').textContent.split(": ")[1];
    if (passwordText) {
        const textarea = document.createElement('textarea');
        textarea.value = passwordText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert(`"${passwordText}" copied!`);
    } else {
        alert(`No password to copy!`);
    }
});

