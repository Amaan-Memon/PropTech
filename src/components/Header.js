import styled from "styled-components";
import DehazeIcon from "@mui/icons-material/Dehaze";

const Header = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 3rem;
  background-color: #0ca789;
`;
export const HeaderComponent = () => {
  return (
    <Header>
      
      <b>CommuniFIT</b>
    </Header>
  );
};
