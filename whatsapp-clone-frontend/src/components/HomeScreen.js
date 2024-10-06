import styled from "styled-components";
import { Container } from "./ConversationComponents";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 45%;
  left: 55%;
  font-size: 25px;
  margin-right: -50%;
  height: auto;
  background: #efffef;
`;

const HomeComponent = () => {
  return (
    <Container>
      <MessageContainer>Whatsapp for Windows</MessageContainer>
    </Container>
  );
};

export default HomeComponent;
