import { useState } from "react";

/*
how to pass state to other components.
update the state if they.
props and state.

1. Move the color and set color state inside the ColorForm. (increase performance)
   to see the before and after.
   console.log("<component name>", new Date()); //for each component
2. Add a button on single color to remove the color. (remove color)
   hint: [perform a state update]
*/

function ColorsCircles() {
  const [colors, setColors] = useState([]);
  const [bgColor, setBgColor] = useState("black");

  console.log("ColorsCircles render", new Date());

  const onSubmit = (newColor) => {
    const clonedColors = structuredClone(colors); // copy the existing array
    clonedColors.push(newColor); // add the new one to the copy
    setColors(clonedColors); // tell React "here's the updated array"
  };

  const toggleBgColor = () => {
    setBgColor(bgColor === "black" ? "navy" : "black");
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: "20px" }}>
      <button onClick={toggleBgColor}>Toggle Background</button>
      <ColorForm onSubmit={onSubmit} />
      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
}

function ColorForm(props) {
  const { onSubmit } = props;
  const [color, setColor] = useState("");

  console.log("ColorForm render", new Date());

  return (
    <div>
      <label>Enter Color</label>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => onSubmit(color)}>Save</button>
    </div>
  );
}

function ColorList(props) {
  const { colors, setColors } = props;

  console.log("ColorList render", new Date());

  const removeColor = (indexToRemove) => {
    const filteredColors = colors.filter((_, index) => index !== indexToRemove);
    setColors(filteredColors);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            width: "100%",
            height: "30px",
            backgroundColor: color,
            color: "white",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {color}
          <button onClick={() => removeColor(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ColorsCircles;