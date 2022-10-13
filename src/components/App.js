import styled from "styled-components";
import { CardComponent } from "./Card";
import { HeaderComponent } from "./Header";

const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
bottom: 1rem;
position: absolute;
justify-content: center;

`;

function App() {
  return (
    <>
    <HeaderComponent/>
      <ColumnContainer>
        <CardComponent />
      </ColumnContainer>
    </>
  );
}

export default App;
