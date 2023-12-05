var stock = [
    {
        id : 1,
        name : "Plates",
        measurementUnit: "pcs",
        amount: 7,
        pricePerUnit : 2000.0,
        totalPrice : 14000.0,
    },
    {
        id: 2,
        name: "Potatoes",
        measurementUnit: "kg",
        amount: 10,
        pricePerUnit: 700.0,
        totalPrice : 7000.0,
    },
    {
        id: 3,
        name: "Meat",
        measurementUnit: "kg",
        amount: 5,
        pricePerUnit: 5000.0,
        totalPrice : 25000.0,
    },
    {
        id: 4,
        name: "Multi-Socket",
        measurementUnit: "pieces",
        amount: 2,
        pricePerUnit: 12000.0,
        totalPrice : 24000.0,
    }
];

const overallInventory = {
    numberOfItemsInTheStock: 4,
    totalCostOfItemsInTheStock: 70000 
} 

// Add the code to export the stock array so that it can be accesd by other modules in the project.
module.exports = {
    stock,
    overallInventory
}