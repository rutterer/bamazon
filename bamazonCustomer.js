var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "SSnorker12**",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + "  " + res[i].product_name + "  " + res[i].price);
          }
      });
      prompts();
}

function prompts () {
    
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;

    inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the ID of the item you would like to purchase?",
        validate: function(item) {
            if (isNaN(item) === false) {
              return true;
            }
            return false;
          }
      },
      {
        name: "quantity",
        type: "input",
        message: "How many of the item would you like to purchase?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ]).then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === parseInt(answer.item)) {
            chosenItem = results[i];
          }
        }

        // determine if the item is in stock
        if (chosenItem.stock_quantity > 0) {

          var updatedStock = chosenItem.stock_quantity - answer.quantity;
          
          connection.query(
            "UPDATE products SET ? WHERE ? and stock_quantity > 0",
            [
              {
                stock_quantity: updatedStock
              },
              {
                item_id: chosenItem.item_id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Thank you for your purchase! Your order total was " + chosenItem.price * answer.quantity);
              start();
            }
          );
        }
        else {
          
          console.log("That item is out of stock. Sorry...");
          start();
        }
      });
    });
}