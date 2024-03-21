const CardHeader = (props) => {
  const { title } = props;
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
};

export default CardHeader;
