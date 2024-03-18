
class UsersManager {
  static id = 0;
  constructor() {
    this.products = []
  };
  create(photo,email,password,role){
    const product = {id:UsersManager.id,photo,email,password,role};
    this.products.push(product);
    UsersManager.id+=1;
  };
  read(){
    return this.products;
  };
}

const testMethod = new UsersManager;
testMethod.create("abcdefgh.png","cruzado@gmail.com","magoalbo3210","Supervisor");
testMethod.create("12345.png","pega@gmail.com","lakkosa323","Empleado");
console.log(testMethod.read())