class Product
{
	constructor(name, price, year)
	{
		this.name = name;
		this.price = price;
		this.year = year;
	}
}

class UI
{
	addProduct()
	{

	}

	deleteProduct()
	{

	}

	showMessage()
	{

	}
}

document.getElementById('product-form')
	.addEventListener('submit', function(e) {
		var name = document.getElementById('name').value;
		var price = document.getElementById('price').value;
		var year = document.getElementById('year').value;
	});