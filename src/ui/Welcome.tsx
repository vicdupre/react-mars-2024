import PropTypes from "prop-types";

const Welcome = ({ name }) => {
  //  const { name } = props;
  return (
    <>
      <h1>Hello, {name}!</h1>
      <h2>How are you?</h2>
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
