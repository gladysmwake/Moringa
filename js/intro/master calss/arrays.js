const car = [
  "Mustang",              // [0] name
  "GT",                   // [1] model
  250,                    // [2] top_speed
  [8, 460],               // [3] engine_information: [cylinders, horsepower]
  ["Ford", "The Blue Oval", "USA"], // [4] manufacture: [name, aka, country]
  350000,                 // [5] "2024" record — arrays can't use 2024 as a real key like objects can,
                           //      so we just put it in the next available slot
  function () {
    alert(
      `Car Info:
Name: ${this[0]}
Model: ${this[1]}
Top Speed: ${this[2]} km/h

Engine:
  Cylinders: ${this[3][0]}
  Horsepower: ${this[3][1]}

Manufacturer:
  Name: ${this[4][0]}
  AKA: ${this[4][1]}
  Country: ${this[4][2]}

2024 record: ${this[5]}`
    );
  }                        // [6] alert_info
];

car[6](); // calling the function stored at index 6