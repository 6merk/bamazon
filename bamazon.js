var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonproducts_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.query("SELECT * FROM purchases", function(err, res) {
  if (err) throw err;
  console.log(res);
});



// function which prompts the user for which Id to select
var start = function() {
  inquirer.prompt({
    name: "whichID",
    type: "rawlist",
    message: "Which [ID] would you like to select?",
    choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  }).then(function(answer) {
    // based on their answer, either call the bid or the post functions
    if (answer.whichID.toUpperCase() === "1", "2", "3", "4", "5", "6", "7", "8", "9", "10") {
      priceID();
    }
  });
};

// function to handle posting new items up for auction
var priceID = function() {
  // prompt for info about the item being put up for auction
  inquirer.prompt([{
    name: "amountofitem",
    type: "input",
    message: "How many units of the product would you like to purchase?",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  }]).then(function(answer) {
    // when finished prompting, insert a new item into the db with that info
    connection.query("INSERT INTO purchases SET ?", {
      id: answer.whichID,
      price: answer.amountofitem
    }, function(err) {
      if (err) throw err;
      console.log("You've purchased the item!");
      // re-prompt the user which ID they would like to select
      start();
    })


// Loops through the MySQL table to check that the product they wanted exists
    for (var i = 0; i < res.length; i++) {

      // If the product exists, save the data for said product within the product and id variables
      if (res[i].name === val.choice) {
        correct = true;
        var product = val.choice;
        var id = i;

        // Prompts the user to see how many of the product they would like to buy
        inquirer.prompt([{
          type: "input",
          name: "quant",
          message: "How many would you like to buy?"
        }]).then(function(val) {

          // Checks to see if the amount requested is less than the amount that is available
          if ((res[id].stock - val.amountofitem) > 0) {

            // Removes the amount requested from the MySQL table
            connection.query(
              "UPDATE products SET stock='" + (res[id].stock - val.amountofitem) +
              "' WHERE name='" + product + "'",
              function(err, res2) {
                if (err) {
                  throw err;
                }

                // Tells the user that the product has been purchased
                console.log("Product Purchased");
})
start();

