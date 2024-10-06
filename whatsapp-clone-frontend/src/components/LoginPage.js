import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { styled } from "styled-components";
import Axios from "axios";
import { isLoggedInContext, LoggedInUserNameContext, LoggedInUserIdContext } from "../App";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 35%;
  left: 40%;
  font-size: 25px;
  margin-right: -50%;
  height: auto;
  background: cyan;
  padding: 20px;
`;
const HeaderDiv = styled.span`
  width: 100%;
  font-size: 26px;
  color: blue;
`;
const InputDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
const InputContainer = styled.div`
  padding: 10px;
  margin-left: 15px;
`;
const SubmitDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
const SubmitContainer = styled.div`
  padding: 10px;
  margin-left: 70px;
`;

const LoginPage = () => {
  const { isLoggedIn, setStatus } = useContext(isLoggedInContext);
  const { LoggedInUserName, setLoggedInUserName } = useContext(
    LoggedInUserNameContext
  );
  const { LoggedInUserId, setLoggedInUserId } = useContext(
    LoggedInUserIdContext
  );

  const url = "http://localhost:5000/api/auth/login";
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useHistory();

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      email: loginData.email,
      password: loginData.password,
    }).then((res) => {
      console.log(res.data.status);
      if (res.data.status) {
        console.log("name from db : " + res.data.name);
        setStatus(true);
        setLoggedInUserName(res.data.data.name);
        setLoggedInUserId(res.data.data._id);
      }
      navigate.push("/welcome");
    });
  }

  function handle(e) {
    const newData = { ...loginData };
    newData[e.target.id] = e.target.value;
    setloginData(newData);
  }

  return (
    <LoginContainer>
      <HeaderDiv>Login to your account</HeaderDiv>
      <form onSubmit={(e) => submit(e)}>
        <InputContainer>
          <InputDiv>
            <input
              onChange={(e) => handle(e)}
              id="email"
              value={loginData.email}
              type="email"
              placeholder="Email"
            />
          </InputDiv>
          <InputDiv>
            <input
              onChange={(e) => handle(e)}
              id="password"
              value={loginData.password}
              type="password"
              placeholder="Password"
            />
          </InputDiv>
        </InputContainer>
        <SubmitContainer>
          <SubmitDiv>
            <button>Login</button>
          </SubmitDiv>
        </SubmitContainer>
      </form>
    </LoginContainer>
  );
};

export default LoginPage;
