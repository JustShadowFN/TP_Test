

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

// ---------------------------------------

function testAdd() {
    console.log("--- Démarrage du Test Unitaire : testAdd() ---");

  
    const testBasket = new Basket();

    const testProduct = { name: "Carte mère", price: 100 };
    addToBasket(testBasket, testProduct);

    const expectedPrice = 100;
    const actualPrice = testBasket.totalPrice;

    if (actualPrice === expectedPrice) {
        console.log(` TEST testAdd() RÉUSSI : Le montant total est correct. (Attendu: ${expectedPrice} | Actuel: ${actualPrice})`);
    } else {
        console.error(` TEST testAdd() ÉCHOUÉ : Montant total incorrect. (Attendu: ${expectedPrice} | Actuel: ${actualPrice})`);
    }

    console.log("--- Fin du Test Unitaire ---");
}

testAdd();