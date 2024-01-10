import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { LuRefreshCw } from "react-icons/lu";

const Wrapper = styled.div`
  text-align: center;
  height: 95vh;
  margin-top: 600px;
  h1 {
    color: #fff;
    font-family: Poppins;
    font-size: 76px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    .gap {
      margin-left: 20px;
      font-size: 50px;
      color: #fb7306;
      cursor: pointer;
    }
  }
`;

const CaptchaContainer = styled.div`
  margin-bottom: 20px;
  p,
  label {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 27px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.89px;
  }
`;

const InputField = styled.input`
  padding: 5px 10px 5px 10px;
  margin-right: 5px;
  font-size: 20px;
`;

const Button = styled.button`
  padding: 10px 30px 10px 30px;
  background-color: #fb7306;
  color: white;
  border: none;
  border-radius: 32px;
  cursor: pointer;
  box-shadow: 2px 3px 3px 0px #074553;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: normal;
  margin-top: 0;
`;

const Message = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;

function Code() {
  const [captchaCode, setCaptchaCode] = useState("");
  const [userEnteredCaptcha, setUserEnteredCaptcha] = useState("");
  const [verificationResult, setVerificationResult] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = async () => {
    try {
      const response = await axios.post(
        "https://wealthup-76v5.onrender.com/generateCaptcha"
      );
      setCaptchaCode(response.data.code);
      setVerificationResult("");
    } catch (error) {
      console.error("Error generating captcha:", error.message);
    }
  };

  const verifyCaptcha = async () => {
    try {
      const response = await axios.post(
        "https://wealthup-76v5.onrender.com/verifyCaptcha",
        {
          code: userEnteredCaptcha,
        }
      );

      setVerificationResult(
        response.data.success ? "Code is correct" : "Invalid or expired captcha"
      );

      setTimeout(() => {
        setUserEnteredCaptcha("");
      }, 3000);

      setTimeout(() => {
        generateCaptcha();
      }, 3000);
    } catch (error) {
      console.error("Error verifying captcha:", error.response.data.error);

      if (error.response.data.error === "This code has already been used") {
        setVerificationResult("This code has already been used");
      } else if (error.response.data.error === "The code has expired") {
        setVerificationResult("The code has expired");
      } else {
        setVerificationResult("Invalid captcha");
      }

      setTimeout(() => {
        setUserEnteredCaptcha("");
      }, 3000);
      setTimeout(() => {
        generateCaptcha();
      }, 3000);
    }
  };

  return (
    <Wrapper>
      <h1>Captcha Verification</h1>
      {captchaCode && (
        <CaptchaContainer>
          <div className="main">
            <p>Captcha Code: {captchaCode}</p>
            {/* <Button className="gap" onClick={generateCaptcha}>
              Generate New Captcha
            </Button> */}
            <LuRefreshCw className="gap" onClick={generateCaptcha} />
          </div>
          <label>
            Enter Captcha Code:
            <InputField
              type="text"
              value={userEnteredCaptcha}
              onChange={(e) => setUserEnteredCaptcha(e.target.value)}
            />
          </label>
          <Button onClick={verifyCaptcha}>Verify Captcha</Button>
          <br />
          <Message>{verificationResult}</Message>
        </CaptchaContainer>
      )}
    </Wrapper>
  );
}

export default Code;
