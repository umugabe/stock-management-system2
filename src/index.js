const stock = require('../src/Controller/stockController');

const { add, display, findById, findMany, remove, update, updateManyElements } = stock;

/** 
 * ---------------------------------------------------------------
 * Call function to add
 * 
 * */ 
let newItem = {
    name: "Vanilla Powder",
    measurementUnit: "pcs",
    amount: 2,
    pricePerUnit: 2000.0,
};

add(newItem);


/**
 * ---------------------------------------------------------------
 * Calls function to update a single element in the item object
 * 
 * */

update(2, "amount", 4);
update(2, "name", "Pepper");


/**
 * ---------------------------------------------------------------
 * Calls function to update many element in the item object
 * */

// Test 1:
let item1 = {
    amount: 7,
    pricePerUnit: 5500.0,
} 
updateManyElements(3, item1);

// Test 2:
let item2 = {
    name: "Mangoes",
    measurementUnit: "pcs",
} 
updateManyElements(3, item2);


/**
 * ---------------------------------------------------------------
 * Call function to display
 * 
 * */ 
display();



/**
 * ---------------------------------------------------------------
 * Calls a function to remove an item from the database (stock array) by using the item id
 * 
 * */ 
remove(2);



/**
 * ---------------------------------------------------------------
 * Calls a function to find an item according to the given item `id`
 * 
 * */ 
findById(4);
findById(6);


/**
 * ---------------------------------------------------------------
 * Calls a function to find all items that have the same property
 * 
 * */ 
findMany("kg");
findMany("pcs");