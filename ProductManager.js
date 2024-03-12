
class ProductManager {
  static id = 0;
  constructor() {
    this.products = []
  };
  addProduct(title,description,price,thumbnail,code,stock){
    const product = {title,description,price,thumbnail,code,stock,id:ProductManager.id};
    this.products.push(product);
    ProductManager.id+=1;
  }
  getProducts(){
    return this.products;
  }
  getProductById(iding){
    return(this.products.find(x => x.id === iding)) || console.log("Not found");
  }
}

const testProduct = new ProductManager();