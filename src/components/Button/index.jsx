import { Link } from "react-router-dom";
import "./button.css";

function Button({ text, path, color }) {
  return (
    <Link to={path}>
      <button
        className="dashed-button"
        style={{
          backgroundColor: `var(--${color})`,
          outlineColor: `var(--${color})`,
        }}
      >
        {text}
      </button>
    </Link>
  );
}

export default Button;
