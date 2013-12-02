function Item(){
  this.name = "Basic Item";
  this.value1 = 0;
  this.value2 = 0;
  this.effects = [];
  this.slot = null;
  this.requiredLevel = 1;
  this.sellPrice = 130;
  this.tier = 1;
}

function Effect(){
  this.name = "Basic Effect";
  this.address = null;
  this.value = null;
  this.time = 0;
  this.maxTime = 0;
}

function Player(){
  this.health = 100;
  this.maxHealth = 100;
  this.stamina = 0;
  this.maxStamina = 75;
  this.level = 0;
  this.experience = 0;
  this.maxExperience = 50;
  this.inventory = new container(12);
  this.inventory.make();
}

Player.prototype.equip = function(i){
  
  var s = i.slot;
  if (s != "inventory"){
    
    this[i.slot] = i;
    
  }
  else{
    this.inventory.push(i);
  }
  
}

function container(n){
  
  this.size = 10 || n;
  this.items = [];
  
}

container.prototype.make = fucntion(){
  
  for (var i = 0; i < this.size; ++i){
    this.items[i] = null;
  }
  
}

container.prototype.findItem = function(s){
  
  for (var i = 0; i < this.size; ++i){
    
    if (this.items[i].name == s){
      return true;
    }
    
  }
  return false;
}

//Allow the user to sell items.
//Selling an item would be returned inside of the character/player entity so that the price can be added

container.prototype.sellItem=function(idx){
  var p = this.items[idx].price;
  this.items[idx] = null;
  return p;
}



