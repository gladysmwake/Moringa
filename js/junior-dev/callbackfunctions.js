/*
->Our own callback function
->doing shape stuff
----->shapes.
circle ->
rectangle->
triangle->

1. for each of the shapes
   create a function<arrow, name>
   to calculate the are. ensure
   the function takes required parameters.
   test the function
*/

// Shared callback - reused for all three shapes
let displayArea = (shape, area) => {
    console.log(`The area of the ${shape} is: ${area}`);
};

// Circle - needs radius
let areaOfCircle = (radius, callback) => {
    let area = Math.PI * radius * radius;
    callback("circle", area);
};

// Triangle - needs base and height
let areaOfTriangle = (base, height, callback) => {
    let area = 0.5 * base * height;
    callback("triangle", area);
};

// Rectangle - needs width and height
let areaOfRectangle = (width, height, callback) => {
    let area = width * height;
    callback("rectangle", area);
};

// Testing each function
areaOfCircle(5, displayArea);        // The area of the circle is: 78.53981633974483
areaOfTriangle(6, 4, displayArea);   // The area of the triangle is: 12
areaOfRectangle(5, 3, displayArea);  // The area of the rectangle is: 15


