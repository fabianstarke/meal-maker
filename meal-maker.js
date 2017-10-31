let menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts:[],

    get appetizers(){
      return this._appetizers;
    },

    get mains(){
      return this._mains;
    },

    get desserts(){
      return this._desserts;
    },

    set appetizers(appetizerIn){
      this._appetizers = appetizerIn;
    },

    set mains(mainIn){
      this._mains = mainIn;
    },

    set desserts(dessertIn){
      this._desserts = dessertIn;
    },
  },

  get courses(){
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    }
  },

  addDishToCourse: function(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse: function(courseName){
  	const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
	},
  generateRandomMeal: function(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
  	const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your menu is ${appetizer.name}, ${main.name}, ${dessert.name}`
  },
};

menu.addDishToCourse('appetizers', 'Penne al pesto', 7.40);
menu.addDishToCourse('appetizers', 'Prosciutu i melon', 9.70);
menu.addDishToCourse('appetizers', 'Pizza', 6.20);

menu.addDishToCourse('mains', 'Spaghetti alla Vongole', 12.40);
menu.addDishToCourse('mains', 'Penne con Tomata', 10.70);
menu.addDishToCourse('mains', 'Ravioli alla Norma', 13.20);

menu.addDishToCourse('desserts', 'Tiramisu', 5.40);
menu.addDishToCourse('desserts', 'Salade di frutti', 6.20);
menu.addDishToCourse('desserts', 'Sorbet', 1.40);

let meal = menu.generateRandomMeal();
console.log(meal);
