//Task 1 - Create an Inventory Array of Product Objects
const Inventory =[
    {name:"Computer",
     price:100,
     quantity:150,
     lowStockLevel:15},
    {name:"Tablet",
     price:250,
     quantity:200,
     lowStockLevel:20},
    {name:"AirPods",
     price:90,
     quantity:50,
     lowStockLevel:5},
    {name:"Monitor",
     price:200,
     quantity:60,
     lowStockLevel:10},
    {name:"PS4",
     price:300,
     quantity:30,
     lowStockLevel:3}
] //This array contains 5 objects that represent the products and each product information

//Task 2-Create a Function to Display Product Details
function displayProductDetails(product){
    var Stock_status= product.quantity>=product.lowStockLevel?"In Stock":"Low Stock";
    console.log(`Product Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Quantity in Stock: ${product.quantity}`);
    console.log(`Stock Status: ${Stock_status}`);
}

//Task 3-Create a Function to Update Product Stock After Sales
function updateStock(product, UnitsSold){
    if (product.quantity>= UnitsSold){
        product.quantity -= UnitsSold;
    if(product.quantity === 0){
       return `${product.name} is out of stock` } 
    else if (product.quantity<=product.lowStockLevel){
        return `${product.name} stock is low`}
    else{ return`${product.name} stock was updated`}
    } else { return `${product.name} stock is not enough`}
 }

