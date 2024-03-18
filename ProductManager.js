 
class ProductsManager {
  static id = 0;
  constructor() {
    this.products = []
  };
  create(title,photo,category,price,stock){
    const product = {id:ProductsManager.id,title,photo,category,price,stock};
    this.products.push(product);
    ProductsManager.id+=1;
  };
  read(){
    return this.products;
  };
}
const testMethod = new ProductsManager;
testMethod.create("Agua","water.jpg","food",2,9);
testMethod.create("Carne","meat.jpg","food",6,7);
testMethod.create("Carbohidratos","carbs.jpg","food",13,);
testMethod.create("Verduras","salad.jpg","food",3,8);
testMethod.create("Fruta","fruit.jpg","food",3,8);