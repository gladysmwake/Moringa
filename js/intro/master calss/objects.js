/*
create an object. called car.
properties: name,model,top_speed
engine_information:<object>how many cylinder,number
manufacture:object<> name,aka, country
<number as property<key>>:any number
alert_info:function that when called prints information of the car as an alert
*/

const car = {
  // Basic properties
  name: "Mustang",
  model: "GT",
  top_speed: 250 ,

  // Nested object: engine details
  engine_information: {
    cylinders: 8,      // how many cylinders
    horsepower: 460    // "number" -> treated as a numeric spec (e.g. horsepower)
  },

  // Nested object: manufacturer details
  manufacture: {
    name: "Ford",
    aka: "The Blue Oval", // nickname/alias
    country: "USA"
  },

 
  [2024]: 350000, // e.g. units_sold in year 2024 -> car[2024]

  // Function that alerts all the car's info when called
  alert_info: function () {
    alert(
      `Car Info:
Name: ${this.name}
Model: ${this.model}
Top Speed: ${this.top_speed} km/h

Engine:
  Cylinders: ${this.engine_information.cylinders}
  Horsepower: ${this.engine_information.horsepower}

Manufacturer:
  Name: ${this.manufacture.name}
  AKA: ${this.manufacture.aka}
  Country: ${this.manufacture.country}

2024 record: ${this[2024]}`
    );
  }




};

car.alert_info();




