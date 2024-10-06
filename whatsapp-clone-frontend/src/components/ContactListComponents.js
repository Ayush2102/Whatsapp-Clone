import styled from "styled-components";
import { useState } from "react";
import ConversationComponent from "./ConversationComponents";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 0.8;
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
`;
const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 15px;
  align-items: center;
  gap: 10px;
`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const SearchBox = styled.div`
  display: flex;
  background: #f6f6f6;
  padding: 10px;
`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 20px 0px;
`;
const SearchIcon = styled.img`
  width: 28px;
  height: 28px;
  padding-left: 10px;
`;
const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: 15px;
  font-size: 17px;
  margin-left: 10px;
`;
const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 94%;
  border-bottom: 1px solid #f2f2f2;
  background: white;
  cursor: pointer;
  padding: 15px;
`;
const ProfileIcon = styled(ProfileImage)`
  width: 38px;
  height: 38px;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px 19px;
`;
const ContactName = styled.span`
  width: 100%;
  font-size: 16px;
  color: black;
`;

const ContactComponent = ({ name, onChange }) => {

  return (
    <ContactItem onClick={onChange}>
      <ProfileIcon src="/profile/k1.jpg" />
      <ContactInfo>
        <ContactName>{name}</ContactName>
      </ContactInfo>
    </ContactItem>
  );
};

const ContactListComponent = (props) => {
  const [selectedUserId, SetselectedUserId] = useState(null);
  const [selectedUserName, SetselectedUserName] = useState(null);

  return (
    <Container2>
      <Container>
          <ProfileInfoDiv>
            <ProfileImage src="/profile/k1.jpg" />
            {props.LoggedInUserName}
          </ProfileInfoDiv>
        <SearchBox>
          <SearchContainer>
            <SearchIcon src="/search-icon.svg" />
            <SearchInput placeholder="Search or start new chat" />
          </SearchContainer>
        </SearchBox>
        <ContactComponent
          name={"Kuldeep"}
          onChange={() => {
            SetselectedUserId("64e744c7c638d95207162421");
            SetselectedUserName("Kuldeep")
            return;
          }}
        />
        <ContactComponent
          name={"Parth"}
          onChange={() => {
            SetselectedUserId("64f1b352fb0f8bba829e5e9a");
            SetselectedUserName("Parth")
            return;
          }}
        />
        <ContactComponent
          name={"Person4"}
          onChange={() => {
            SetselectedUserId("64f1b37afb0f8bba829e5e9c");
            SetselectedUserName("Person4")
            return;
          }}
        />
      </Container>
      <ConversationComponent selectedUserId={selectedUserId} selectedUserName={selectedUserName} />
    </Container2>
  );
};

export default ContactListComponent;
