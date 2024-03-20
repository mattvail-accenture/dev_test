// Create a vending machine function that takes in a list of items and a list of coins. 
// The vending machine should allow the user to select an item and insert coins to pay for the item. 
// The vending machine should return the item and change if the user has inserted enough money. 
// If the user has not inserted enough money, the vending machine should return the coins that were inserted. 
// The vending machine should also return the item and any remaining change if the user has inserted more money than the item costs

const testdata = {
    items: [
        {
            name: 'Candy',
            price: 1.00
        },
        {
            name: 'Soda',
            price: 1.50
        },
        {
            name: 'Chips',
            price: 2.00
        }
    ],
    coins: [
        {
            name: 'Nickel',
            value: 0.05
        },
        {
            name: 'Dime',
            value: 0.10
        },
        {
            name: 'Quarter',
            value: 0.25
        }
    ]
}

function VendingMachine() {

    return true;

}