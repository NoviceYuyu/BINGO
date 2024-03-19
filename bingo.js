console.log("Hello World");
let B = false,
    I = false,
    N = false,
    G = false,
    O = false;


    let BNumber, INumber, NNumber, GNumber, ONumber;


function generateNumber(maxNumber) 
    {
        let x = Math.floor(Math.random() * maxNumber) + 1;

        if (x <= 15)     
        {
        console.log(`New number ${x} belongs to "B"`);
        B = true;
        BNumber = x;
        } 
        else if (x >= 16 && x <= 30) 
        {
        console.log(`New number ${x} belongs to "I"`); 
        I = true;
        INumber = x;
        } 
        else if (x >= 31 && x <=45) 
        {
        console.log(`New number ${x} belongs to "N"`);
        N = true; 
        NNumber = x;
        } 
        else if (x >= 46 && x <= 60) 
        { 
        console.log(`New number ${x} belongs to "G"`);
        G = true;
        GNumber = x;
        } 
        else if (x >= 61 && x <=75) 
        {
        console.log(`New number ${x} belongs to "O"`);
        O = true;
        ONumber = x;
        }

        if (B == true && I == true && N == true && G == true && O == true) 
        {
        console.log("BINGO  !!");
        }

        return console.log(x);
}

