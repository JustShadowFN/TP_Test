// --- COPIE DES ÉLÉMENTS NÉCESSAIRES (Classe et Fonctions) ---
class Basket {
    constructor(items = [], totalPrice = 0) {
        this.items = items;
        this.totalPrice = totalPrice;
    }
}

function addToBasket(basket, item) {
    basket.items.push(item);
    basket.totalPrice = basket.totalPrice + item.price;
}

function transactionAllowed(userAccount, priceToPay) {
    if (userAccount.balance >= priceToPay) {
        return true;
    }
    return false;
}

function payBasket(userAccount, basket) {
    if (transactionAllowed(userAccount, basket.totalPrice)) {
        userAccount.balance = userAccount.balance - basket.totalPrice;
    } else {
        
    }
}
// ---------------------------------------

function testPayBasket() {
    console.log("--- Démarrage du Test Fonctionnel : testPayBasket() ---");

    const initialBalance = 500;
    const itemPrice = 300;
    const expectedBalanceAfterFirstPay = 200;
    const finalBalanceAfterSecondPay = 200; 
    
    const user = { name: 'ComteTest', balance: initialBalance };
    const basket = new Basket();
    addToBasket(basket, { name: 'Produit Cher', price: itemPrice });

    let testSuccess = true;

    console.log(`  - PHASE 1 : Tentative de paiement de ${basket.totalPrice}€ avec solde ${user.balance}€.`);
    payBasket(user, basket);

    if (user.balance === expectedBalanceAfterFirstPay) {
        console.log(` gitPaiement Réussi OK. Solde actuel : ${user.balance}€`);
    } else {
        console.error(` ÉCHEC PHASE 1. Solde attendu : ${expectedBalanceAfterFirstPay}€ | Actuel : ${user.balance}€`);
        testSuccess = false;
    }
    
    console.log(`  - PHASE 2 : Tentative de second paiement de ${basket.totalPrice}€ avec solde ${user.balance}€.`);
    payBasket(user, basket);
    
    if (user.balance === finalBalanceAfterSecondPay) {
        console.log(`Échec Paiement OK. Solde final maintenu : ${user.balance}€`);
    } else {
        console.error(`ÉCHEC PHASE 2. Solde aurait dû rester : ${finalBalanceAfterSecondPay}€ | Actuel : ${user.balance}€`);
        testSuccess = false;
    }

 
    if (testSuccess) {
        console.log("TEST GLOBAL testPayBasket() RÉUSSI : Paiement réussi et paiement échoué vérifiés.");
    } else {
        console.error(" TEST GLOBAL testPayBasket() ÉCHOUÉ : Voir les erreurs de phase ci-dessus.");
    }

    console.log("--- Fin du Test Fonctionnel ---");
}

testPayBasket();