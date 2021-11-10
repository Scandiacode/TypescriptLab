"use strict";
exports.__esModule = true;
;
var mountain1 = {
    name: "Kilimanjaro",
    height: 19341
};
var mountain2 = {
    name: "Everest",
    height: 29029
};
var mountain3 = {
    name: "Denali",
    height: 20310
};
var mountains = [
    mountain1,
    mountain2,
    mountain3
];
function findNameOfTallestMountain(tallest) {
    var result = {
        name: "",
        height: 0
    };
    tallest.forEach(function (tm) {
        if (tm.height > result.height) {
            result = tm;
        }
    });
    return result.name;
}
var tallestMountainName = findNameOfTallestMountain(mountains);
console.log(tallestMountainName);
;
var p1 = {
    name: "Touhou Fighting Game",
    price: 40
};
var p2 = {
    name: "Fumo",
    price: 400
};
var product = [
    p1,
    p2
];
function calcAverageProductPrice(avgPrice) {
    var count = 0;
    var total = 0;
    avgPrice.forEach(function (ap) {
        total += ap.price;
        count++;
    });
    return total / count;
}
var priceAverage = calcAverageProductPrice(product);
console.log(priceAverage);
;
var i1 = {
    product: {
        name: "motor",
        price: 10.00
    },
    quantity: 10
};
var i2 = {
    product: {
        name: "sensor",
        price: 12.50
    },
    quantity: 4
};
var i3 = {
    product: {
        name: "LED",
        price: 1.00
    },
    quantity: 20
};
var inventory = [
    i1,
    i2,
    i3
];
function calcInventoryValue(totalPrice) {
    var total = 0;
    for (var i = 0; i < totalPrice.length; i++) {
        total += totalPrice[i].product.price * totalPrice[i].quantity;
    }
    return total;
}
var priceTotal = calcInventoryValue(inventory);
console.log(priceTotal);
