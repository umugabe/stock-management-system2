// Import the stock array from the stock module in the db/ folder
const {stock} = require("../db/stockdatabase");

/**
 * This function recieves an item of datatype object, and before adding the item to the database, it generates the `id` and `totalPrice` for the item to be added.
 * @param {object} item item to be added 
 * 
 * @example
 * // Bellow is an example of item to be added to the stock array (our database):
 * let newItem = {
 *   name: "Vanilla Powder",
 *   measurementUnit: "pcs",
 *   amount: 2,
 *   pricePerUnit: 2000.0,
 * };
 */
const add = (item) => {
    // Add the code to create the id and total price, and add the item to the stock array.
    item.id=(stock.length)+1;
    item.totalPrice=item.amount*item.pricePerUnit;
    stock.push(item);

    // Put your code before this line
    console.log("\n1. ADDING ------------------------------------------------------ ")
    console.log('\nItem added!\n');
    console.log(stock);
}


/**
 * This function recieves the `id` of an item, the `key` to update in a given item, and the `value` to update in the item.
 * @param {number} id the id of the item
 * @param {string} key the key to update
 * @param {*} value the value to update
 * 
 * 
 * @example
 * //The stock is an array of objects with properties id, name, measurementUnit, amount, pricePerUnit, and totalPrice.
 * //And an item with id 2 exists in the stock array.
 * 
 * update(2, 'amount', 10);
 * //This will update the 'amount' property of the item with id 2.
 * 
 * update(2, 'name', 'pepper');
 * //This will update the 'name' property of the item with id 2.
 * 
 * 
 * @endcode
 * 
 * NOTE:
 * Add a condition to also update the `totalPrice` if the key to be updated is either `amount` or `pricePerUnit`.
 * 
 */
const update = (id, key, value) => {
    console.log("\n2. UPDATING ------------------------------------------------------ ")
    console.log("\nItem before updating:");
    
    var exists = {};
    // Add code bellow to verify whether the there is an item with the given id.
    exists=stock.find(element=>element.id===id);
    console.log(exists);

    if (!exists) {
        // Add code to print a message is no item is found.
        console.log("No such item in the stock");
    } else {
        // Add your code bellow this line
        exists[key]=value;

        if (key==="amount" || key==="pricePerUnit") {
            exists[key]=value;
            exists.totalPrice=(exists.amount * exists.pricePerUnit);

         }

        // Write your code above this line
        console.log("\nItem updated!");
        console.log("\nItem after updating:");
        console.log(exists);
    }
}


/**
 * This function recieves the `id` of an item, and the `item` object to be updated.
 * @param {number} id - the id of the item  
 * @param {object} item - the item object to update
 *
 * The stock is an array of objects with properties `id`, `name`, `measurementUnit`, `amount`, `pricePerUnit`, and `totalPrice`.
 * And an item with id 2 exists in the stock array.
 * 
 * @example
 * 
 * let itemToUpdate = {
 *      name: "Vanilla Powder",
 *      measurementUnit: "pcs"
 * };
 * 
 * updateManyElements(2, itemToUpdate);
 * 
 * @endcode
 * 
 * This will update all properties of the item object that are present in the object that was passed as argument to the `updateManyElements()` function where the `id` is equal to `2`.
 * 
 * **NOTE**:
 * Add a condition to also update the `totalPrice` if the key to be updated is either `amount` or `pricePerUnit`.
 */
const updateManyElements = (id, item) => {
    console.log("\n3. UPDATE MANY ELEMENTS ------------------------------------------------------ ")
    console.log("\nItem before updating:");
    
    var exists = {};
    // Add code bellow to verify whether the there is an item with the given id.
    exists=stock.find(element=>element.id===id);
    console.log(exists);

    if (!exists) {
        // Add code to print a message is no item is found.
        console.log("no item found");
    } else {
        // Add your code bellow this line
        for (const key in item) {
            if(key==="amount" || key==="pricePerUnit"){
               exists[key] = item[key];
               exists.totalPrice=(exists.amount * exists.pricePerUnit);
            } 
            else { 
            exists[key] = item[key];
           }


        // Write your code above this line
        console.log("\nItem updated!");
        console.log("\nItem after updating:");
        console.log(exists);
        }
    }
}


/**
 * This function recieves an id for the item to be deleted and displays the remaining items
 * @param {number} id the id of the item to be deleted
 *  
 */
const remove = (id) => {
    console.log("\n4. REMOVE ------------------------------------------------------ ")
    
    var exists = {};
    // Add code bellow to find the item to be deleted.
    exists=stock.filter(element=>element.id===id);

    if (!exists) {
        // Add code to print a message is no item is found.
        console.log("no item found");
    } else {
        var remainingItems = [];
        // Write the code to remove the choosen item in the bellow this line.
    
        remainingItems= stock.filter(element=>element.id!==id);

        console.log(`\nItem with id: ${id} is removed successfully!!`);
        console.log("\nRemainig Items:");
        console.log(remainingItems);
    }
}


/**
 * This function displays an array that contains all items of the stock.
 */
const display = () => {

    console.log("\n5. DISPLAY ------------------------------------------------------ ")
    
    console.log("\nItems in stock:\n");
    console.log(stock);
}


/**
 * This function recieves an `id` of the item to be found and displays the item that was found.
 * @param {number} id the id of an item to find.
 * 
 * @example
 * findById(3);
 */
const findById = (id) => {    
    console.log("\n6. FIND BY ID ------------------------------------------------------ ")
    
    let foundItem = {};
    // Write your code to find an item by id bellow:
    
    foundItem=stock.find(element=>element.id===id);

    if (!foundItem) {
        console.log("Item not found!")
    } else {
        console.log("\nFound Item:\n");
        console.log(foundItem);
    }
}


/**
 * Calls a function to find all items that have the same measurement unit
 * @param {string} measurementUnit 
 * 
 * @example
 * findMany("kg");
 * findMany("pcs");
 * */ 
const findMany = (measurementUnit) => {
    console.log("\n7. FIND BY MANY ------------------------------------------------------ ")
    let foundItems = [];
    // Write your code to find an item by id bellow:

    foundItems=stock.filter(element=>element.measurementUnit===measurementUnit);

    if (!foundItems) {
        console.log("No item matches the given measurement unit!");
    } else {
        console.log(`\nItems with ${measurementUnit} as measurement unit are: \n`);
        console.log(foundItems);
    }
}






module.exports = {
    add, 
    display, 
    findById, 
    findMany,
    remove, 
    update, 
    updateManyElements,
}

