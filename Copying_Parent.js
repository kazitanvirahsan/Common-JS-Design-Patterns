   // Class Pet
     // The class contains one attributes: name
     function Pet(name) {
         
         //assign name property
         this.name = name;
         
         // function variable
         this.doSomething = function() {
             alert('function variable' + this.name);
             return true;
         }
     }//End of Pet prototype 

     
     //pets can eat
     Pet.prototype.eat = function() {
         alert(this.name + 'is eatting');
     }// End of eat method  

     
     //pets can sleep
     Pet.prototype.sleep = function() {
         alert(this.name + ' is sleeping');
     }// End of sleep method  

     
     //Defining Pet prototype
     function Cat(name)  {
         //Pass parameters to it's parent class
         Pet.apply(this , arguments);               
     }// End of class Cat Prototype
     
     // Create a Cat
     var c = new Cat('kitty');
     
     // There is no function called c.eat() 
     //alert(c.eat());  
     
      //Cat get a copy of his own property - name from Parent- Pet
      alert('Cat get his own property:' + c.name);  
      alert('Cat has his own property:' + c.hasOwnProperty('name'));
      
      // eat is not inherited therefore causing error
      //alert('eat() is not inherited:' + c.eat());
      // Cat's prototype was blank therefore causing error
      //alert('eat can be called from Parent:' + c.prototype.eat()); 
     
      // So we can see that parent's variables get copied.
      // So if we define a function variable it will also get copied
      // and we can use it
      alert(c.doSomething());
      