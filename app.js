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
					<a href="#" class="btn btn-danger" name="delete">Delete</a>
				</div>
			</div>
		`;

		productLIst.appendChild(element);
	}

	resetForm()
	{
		document.getElementById('product-form').reset();
	}

	deleteProduct(element)
	{
		// Si el elemento seleccionado tiene ese name
		if(element.name === 'delete')
		{
			// Obtener el padre del elemento a eliminar
			// porque se encuentra dentro de un contenedor
			element.parentElement.parentElement.parentElement.remove();
			this.showMessage("Product deleted successfully","danger");
		}
	}

	showMessage(message, cssClass)
	{
		const div = document.createElement('div');
		div.className = `alert alert-${cssClass} mt-4`;
		div.appendChild(document.createTextNode(message));

		// Showing in DOM
		const container = document.querySelector('.container');
		const app = document.querySelector('#App');
		container.insertBefore(div,app);

		setTimeout(function()
		{
			document.querySelector(".alert").remove();
		}, 3000);
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
		ui.showMessage("Product added successfully","success");
	});

document.getElementById('product-list')
	.addEventListener('click',function(e)
	{
		const ui = new UI();
		ui.deleteProduct(e.target);
	});