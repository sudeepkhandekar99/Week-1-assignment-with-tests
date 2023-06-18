/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var res = [];
  var map = new Map();

  for (let i = 0; i < transactions.length; i++) {
    // console.log(transactions[i].price)
    let value = transactions[i].price;
    let category = transactions[i].category;
    if (map.has(category)) map.set(category, map.get(category) + value);
    else map.set(category, value);
  }

  for ([key, value] of map) {
    let temp = {"category":key, "totalSpent": value};
    res.push(temp);
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
