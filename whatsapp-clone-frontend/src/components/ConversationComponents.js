import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import Axios from "axios";
import HomeComponent from "./HomeScreen";
import { LoggedInUserIdContext } from "../App";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 2;
  background: #f6f7f8;
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
`;
const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ededed;
  padding: 15px;
  align-items: center;
  gap: 10px;
`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const ChatBox = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;
const EmojiImage = styled.img`
  width: 30px;
  height: 28px;
  opacity: 0.4;
  cursor: pointer;
`;
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 20px 0px;
`;
const ChatInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: 15px;
  font-size: 17px;
  margin-left: 10px;
`;
const SendButton = styled.button`
  width: 60px;
  height: 60px;
  cursor: pointer;
  background: #b3ffb3;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #e5ddd6;
`;
const MessageDiv = styled.div`
  justify-content: ${(props) => (props.isyours ? "flex-end" : "flex-start")};
  display: flex;
  margin: 5px 16px;
`;
const Message = styled.div`
  max-width: 50%;
  background: ${(props) => (props.isyours ? "#daf8cb" : "white")};
  color: #303030;
  padding: 8px 10px;
  font-size: 15px;
`;

const MessageComponent = ({ data: chatData }) => {
  const { LoggedInUserId, setLoggedInUserId } = useContext(
    LoggedInUserIdContext
  );
  if (!Array.isArray(chatData)) {
    return [];
  }

  let msg = [];
  let isyour = true;

  for (let i of chatData) {
    if (i.sender_id === LoggedInUserId) {
      isyour = true;
    } else {
      isyour = false;
    }
    msg.push(
      <MessageDiv isyours={isyour}>
        <Message isyours={isyour}>{i.msg}</Message>
      </MessageDiv>
    );
  }

  return msg;
};

const ConversationComponent = (props) => {
  const { LoggedInUserId, setLoggedInUserId } = useContext(
    LoggedInUserIdContext
  );

  const selectedUserId = props.selectedUserId;
  const selectedUserName = props.selectedUserName;

  const [chatData, SetChatData] = useState([]);
  const [isNewData, SetIsNewData] = useState(false);

  const getUrl = "http://localhost:5000/api/msg/";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.post(getUrl, {
          sender_id: LoggedInUserId,
          receiver_id: selectedUserId,
        });
        SetChatData(response.data.data);
        SetIsNewData(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, [selectedUserId, isNewData, LoggedInUserId]);

  const url = "http://localhost:5000/api/msg/send";
  const [MessageData, setMessageData] = useState({
    msg: "",
  });

  function handle(e) {
    const newData = { ...MessageData };
    newData[e.target.id] = e.target.value;
    setMessageData(newData);
  }

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      msg: MessageData.msg,
      sender_id: LoggedInUserId,
      receiver_id: selectedUserId,
    }).then((res) => {
      SetIsNewData(true);
    });
  }

  return (
    <Container2>
      {selectedUserId == null ? (
        <HomeComponent />
      ) : (
        <Container>
          <ProfileHeader>
            <ProfileImage src="/profile/k1.jpg" />
            {selectedUserName}
          </ProfileHeader>
          <MessageContainer>
            <MessageComponent data={chatData} />
          </MessageContainer>

          <form onSubmit={(e) => submit(e)}>
            <ChatBox>
              <ChatContainer>
                <EmojiImage src="/data.svg" />
                <ChatInput
                  onChange={(e) => handle(e)}
                  id="msg"
                  value={MessageData.msg}
                  placeholder="Type a message"
                />
              </ChatContainer>
              <SendButton type="submit" />
            </ChatBox>
          </form>
        </Container>
      )}
    </Container2>
  );
};

export default ConversationComponent;
