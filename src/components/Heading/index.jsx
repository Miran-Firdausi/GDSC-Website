import "./heading.css";

function Heading({ text }) {
  const colors = ["text-red", "text-green", "text-blue", "text-yellow"];
  let colorIndex = 0;

  const coloredText = text.split("").map((char, index) => {
    if (char !== " ") {
      const color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
      return (
        <span className={color} key={index}>
          {char}
        </span>
      );
    }
    return char;
  });

  return <div className="heading-text">{coloredText}</div>;
}

export default Heading;
