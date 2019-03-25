/*
 * Create the function factorial here
 */
function factorial( factme ) {
    factme = Number(factme);
    var factreturn;
    for (factreturn = 1; factme > 0; factme--){
        factreturn *= factme;
    }
    return factreturn
}


function main() {
    const n = 4;
    
    console.log(factorial(n));
}

main();