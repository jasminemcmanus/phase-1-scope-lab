// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'definitely bob';

console.log(customerName);
console.log(typeof customerName);

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
};

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
};

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
};

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'not bob actually';
};

changeLeastFavoriteCustomer();