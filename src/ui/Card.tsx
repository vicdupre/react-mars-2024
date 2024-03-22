import styled from "styled-components";
import CardBody from "./Card/CardBody";
import CardFooter from "./Card/CardFooter";
import CardHeader from "./Card/CardHeader";

const StyledCard = styled.div<{
  backgroundColor?: string;
}>`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin: 16px;
  ${(props) => `background-color: ${props.theme.backgroundColor};`}
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`}
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.2);
  }
`;
const Title = styled.h2`
  font-size: 1.5em;
  color: palevioletred;
`;
const Card = (props) => {
  const { title, children, footer } = props;
  return (
    <StyledCard /*  backgroundColor="tomato" */>
      <CardHeader title={title} />
      <Title>Title</Title>
      <CardBody>{children}</CardBody>
      <CardFooter text={footer} />
    </StyledCard>
  );
};

export default Card;
