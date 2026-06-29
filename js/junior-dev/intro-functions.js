function AreaOfTriangle(base, height) {
    alert(`Base is: ${base} (${typeof base}) | Height is: ${height} (${typeof height})`);

    const area = 0.5 * base * height;
    alert(`For triangle with base ${base} and height ${height} the area is: ${area}`);
}

AreaOfTriangle();
AreaOfTriangle(16, 20);

let base1 = 50;
let height1 = 60;
AreaOfTriangle(base1, height1);

let base2 = "hello";
let height2 = true;
AreaOfTriangle(base2, height2);