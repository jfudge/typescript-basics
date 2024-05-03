"use strict";
exports.__esModule = true;
var orders_1 = require("./orders");
// Add your getMaxPrice() function below:
function getMaxPrice(price) {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.High:
            return 30.0;
    }
}
// Add your getOrders() function below:
function getOrders(price, orders) {
    var filteredOrders = [];
    orders[0].filter(function (order) { return order.price <= getMaxPrice(price); });
    orders.forEach(function (restaurant) {
        var result = restaurant.filter(function (order) { return order.price <= getMaxPrice(price); });
        filteredOrders.push(result);
    });
    return filteredOrders;
}
// Add your printOrders() function below:
function printOrders(restaurants, orders) {
    restaurants.forEach(function (restaurant, index) {
        if (orders[index].length > 0) {
            console.log(restaurant.name);
            orders[index].forEach(function (order) {
                console.log("-".concat(order.name, ": ").concat(order.price));
            });
        }
    });
}
// Main
//const eligibleOrders = getOrders(PriceBracket.Low, orders);
// printOrders(restaurants, eligibleOrders);
