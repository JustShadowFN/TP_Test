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

function testRemove() {
    console.log("--- Démarrage du Test Unitaire : testRemove() ---");

    const testProduct = { name: "Produit à retirer", price: 75 };
    const expectedPrice = 0; 

    const testBasket = new Basket();

    addToBasket(testBasket, testProduct);
    console.log(`Panier après ajout. Prix: ${testBasket.totalPrice}, Items: ${testBasket.items.length}`);

    removeFromBasket(testBasket, testProduct);
    console.log(`Panier après retrait. Prix: ${testBasket.totalPrice}, Items: ${testBasket.items.length}`);

    const actualPrice = testBasket.totalPrice;
    const itemsCount = testBasket.items.length;

    if (actualPrice === expectedPrice && itemsCount === 0) {
        console.log(` TEST testRemove() RÉUSSI : Le panier est vide et le montant total est 0. (Actuel: ${actualPrice}€)`);
    } else {
        console.error(` TEST testRemove() ÉCHOUÉ : Attendu 0€ et 0 item. (Actuel: ${actualPrice}€ et ${itemsCount} item`);
    }

    console.log("--- Fin du Test Unitaire ---");
}


testRemove();