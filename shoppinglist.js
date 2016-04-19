var groceries = [
	{
		name: "Milk",
		price: 2.00
	},
	{
		name: "Eggs",
		price: 2.99
	},
	{
		name: "Bread",
		price: 3.50
	},
	{
		name: "Cheese",
		price: 4.00
	},
];

var total = 0;

groceries.forEach(function(el) {
	console.log(el.name + " costs $" + el.price);
	total += el.price;

});

console.log("Total: $" + total);