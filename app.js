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
	addProduct(product)
	{
		const productLIst = document.getElementById('product-list');
		const element = document.createElement('div');
		element.innerHTML = `
			<div class="card text-center mb-4">
				<div class="card-body">
					<strong>Product</strong>: ${product.name}
					<strong>Product Price</strong>: ${product.price}
					<strong>Product Year</strong>: ${product.year}
					<a href="#" class="btn btn-danger">Delete</a>
				</div>
			</div>
		`;

		productLIst.appendChild(element);
	}

	resetForm()
	{
		document.getElementById('product-form').reset();
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
		e.preventDefault();
		var name = document.getElementById('name').value;
		var price = document.getElementById('price').value;
		var year = document.getElementById('year').value;

		const product = new Product(name, price, year);
		const ui = new UI();
		ui.addProduct(product);
		ui.resetForm();
		
	});