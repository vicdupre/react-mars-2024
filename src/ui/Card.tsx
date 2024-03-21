import CardBody from "./Card/CardBody";
import CardFooter from "./Card/CardFooter";
import CardHeader from "./Card/CardHeader";

const Card = (props) => {
  const { title, children, footer } = props;
  return (
    <div>
      <CardHeader title={title} />
      <CardBody>{children}</CardBody>
      <CardFooter text={footer} />
    </div>
  );
};

export default Card;
