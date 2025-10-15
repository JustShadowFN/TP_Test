
function transactionAllowed(userAccount, priceToPay) {
    if (userAccount.balance >= priceToPay) {
        return true;
    }
    return false; 
}

// ---------------------------------------

function testTransactionAllowed() {
    console.log("--- Démarrage du Test Unitaire : testTransactionAllowed() ---");

    const user = { name: 'GuerrierTest', balance: 500 };
    let testSuccess = true;

    const allowedPrice = 400;
    const isAllowed = transactionAllowed(user, allowedPrice);
    
    console.log(`  - Test 1 (Autorisé) : Solde ${user.balance}€, Transaction ${allowedPrice}€`);
    if (isAllowed === true) {
        console.log(" RÉUSSI : Transaction autorisée comme prévu.");
    } else {
        console.error(" ÉCHOUÉ : Transaction aurait dû être autorisée (true).");
        testSuccess = false;
    }

    const refusedPrice = 600;
    const isRefused = transactionAllowed(user, refusedPrice);

    console.log(`  - Test 2 (Refusé) : Solde ${user.balance}€, Transaction ${refusedPrice}€`);
    if (isRefused === false) {
        console.log(" RÉUSSI : Transaction refusée comme prévu.");
    } else {
        console.error(" ÉCHOUÉ : Transaction aurait dû être refusée (false).");
        testSuccess = false;
    }

    if (testSuccess) {
        console.log(" TEST GLOBAL testTransactionAllowed() RÉUSSI : Les deux branches sont vérifiées.");
    } else {
        console.error(" TEST GLOBAL testTransactionAllowed() ÉCHOUÉ.");
    }

    console.log("--- Fin du Test Unitaire ---");
}

testTransactionAllowed();