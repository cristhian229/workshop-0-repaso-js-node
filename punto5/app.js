
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1500, stock: 10 },
  { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, stock: 20 },
  { id: 3, name: 'Headphones', category: 'Electronics', price: 100, stock: 30 },
  { id: 4, name: 'T-shirt', category: 'Clothing', price: 20, stock: 50 },
  { id: 5, name: 'Jeans', category: 'Clothing', price: 50, stock: 40 },
  { id: 6, name: 'Sneakers', category: 'Clothing', price: 80, stock: 30 },
  { id: 7, name: 'Backpack', category: 'Accessories', price: 40, stock: 25 },
  { id: 8, name: 'Watch', category: 'Accessories', price: 60, stock: 20 },
  { id: 9, name: 'Sunglasses', category: 'Accessories', price: 30, stock: 35 }
];


const result = products.filter(product => product.category === 'Clothing')

console.table(result)


const resultPrice = result.reduce((total, product) => total + product.price, 0);
console.log(`El precio total de todos los productos es: $${resultPrice}`);


const productName = 'Jeans'; // Nombre del producto que deseas buscar
const foundProduct = products.find(product => product.name === productName);

foundProduct ? console.log(`El producto ${productName} se encuentra en stock`) : console.log(`El producto con el nombre "${productName}" no ha sido encontrado.`);


const available = products.every(product => product.stock > 0)
available ? console.log(`Todos los productos están disponibles: ${available}`): console.log(`Algunos productos no están disponibles: ${available}`)


const nameProducts = products.map(product => product.name)
console.log(nameProducts);
