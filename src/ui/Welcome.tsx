import PropTypes from "prop-types";

import { useTheme } from "../lib/contexts/ThemeContext";

const Welcome = ({ name }) => {
  //  const { name } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <h1>Hello, {name}!</h1>
      <h2>How are you?</h2>
      <p
        style={{
          color: theme === "light" ? "black" : "white",
          backgroundColor: theme === "light" ? "white" : "black",
        }}
      >
        Current theme : {theme}
      </p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

Welcome.defaultProps = {
  name: "Stranger",
};

export default Welcome;
