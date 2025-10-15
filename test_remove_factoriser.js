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

function removeFromBasket(basket, item) {
    for (let i = 0; i < basket.items.length; i++) {
        if (JSON.stringify(item) === JSON.stringify(basket.items[i])) {
            basket.items.splice(i, 1);
            basket.totalPrice = basket.totalPrice - item.price;
            break;
        }
    }
}

// ---------------------------------------

function testAddRemove() {
    console.log("Démarrage du Test Factorisé : testAddRemove()");

    const testProduct = { name: "Produit Factorisé", price: 50 };
    const initialPrice = 0;
    const addedPrice = testProduct.price; 
    const finalPrice = 0; 
    const testBasket = new Basket();
    
    let testSuccess = true; 

    console.log(" PHASE 1 : Ajout du produit...");
    addToBasket(testBasket, testProduct);

    if (testBasket.totalPrice === addedPrice && testBasket.items.length === 1) {
        console.log(` Vérification Ajout OK. Prix: ${testBasket.totalPrice}€`);
    } else {
        console.error(` ÉCHEC Ajout. Attendu: ${addedPrice}€ | Actuel: ${testBasket.totalPrice}€`);
        testSuccess = false;
    }

    console.log("PHASE 2 : Suppression du produit...");
    removeFromBasket(testBasket, testProduct);

    if (testBasket.totalPrice === finalPrice && testBasket.items.length === 0) {
        console.log(` Vérification Suppression OK. Prix: ${testBasket.totalPrice}€`);
    } else {
        console.error(` ÉCHEC Suppression. Attendu: ${finalPrice}€ | Actuel: ${testBasket.totalPrice}€`);
        testSuccess = false;
    }

    if (testSuccess) {
        console.log(" TEST GLOBAL testAddRemove() RÉUSSI : Ajout et Suppression vérifiés.");
    } else {
        console.error(" TEST GLOBAL testAddRemove() ÉCHOUÉ : Voir les erreurs de phase ci-dessus.");
    }

    console.log("- Fin du Test Factorisé -");
}

testAddRemove();