import styled from "styled-components";
import { Button } from "./Button";

const Card = styled.div`
  width: 225px;
  display: flex;
  color: #0ca789;
  border-radius: 15px;
  border: 2.5px solid #0ca789;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0.75rem;
  font-size: 12px;
`;

const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0.5rem;
`
export const CardComponent = () => {
  return (
    <>
    <CardContainer>
    <Card>
      Fibreglass Insulation
      <br />
      - approx £400
      <br />
      - 1 day installation
      <br />
      <b>PAYS FOR ITSELF IN 4 YEARS</b>
      <Button />
    </Card>
    </CardContainer>
    <CardContainer>
    <Card>
      Mineral Wool Insulation
      <br />
      - approx £480
      <br />
      - 2 day installation
      <br />
      <b>PAYS FOR ITSELF IN 5 YEARS</b>
      <Button />
    </Card>
    </CardContainer>
    <CardContainer>
    <Card>
      Spray Insulation
      <br />
      - approx £750
      <br />
      - 1 day installation
      <br />
      <b>PAYS FOR ITSELF IN 8 YEARS</b>
      <Button />
    </Card>
    </CardContainer>
    </>
  );
};
