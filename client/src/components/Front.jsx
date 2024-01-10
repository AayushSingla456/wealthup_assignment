import React from "react";
import styled from "styled-components";
import phone from "../assets/images/phone.svg";
import check from "../assets/images/check.svg";
import curve from "../assets/images/curve.svg";
import book from "../assets/images/book.svg";

const Wrapper = styled.section`
  height: 100vh;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 500px;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("src/assets/images/curve.svg") center/cover no-repeat;
    z-index: 1;
  }

  h1 {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 72px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 0;
    position: relative;
    z-index: 2;
  }

  h5 {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 275;
    line-height: 130%;
    margin-top: 0;
    margin-bottom: 20px;
  }
  button {
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
  }
  .main {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 20px;
  }
  .phone {
    img {
      position: absolute;
      z-index: -1;
      width: 350px;
      height: 350px;
    }
  }
  .sector {
    display: grid;
    grid-template-columns: 0fr 1fr;
    padding-left: 300px;
    padding-top: 50px;
    .checkbox {
      img {
        margin-top: 45px;
        height: 30px;
        width: 30px;
      }
    }
    h6 {
      color: #fff;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    h6::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: #fff;
      margin: 0 auto;
      margin-top: 20px;
    }
  }

  .sector2 {
    display: grid;
    grid-template-columns: 0fr 4fr;
    right: 175px;
    margin-right: 300px;
    padding-top: 50px;
    width: 100%;
    position: relative;
    .checkbox {
      img {
        margin-top: 45px;
        height: 30px;
        width: 30px;
      }
    }

    h6 {
      color: #fff;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    h6::after {
      content: "";
      display: block;
      width: 60%;
      right: 200;
      height: 1px;
      background-color: #fff;

      margin-top: 20px;
    }
  }
  .era {
    h6 {
      color: #fff;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    h6::after {
      content: "";
      display: block;
      width: 100%;
      height: 1.5px;
      background-color: #fff;
      margin: 0 auto;
      margin-top: 20px;
    }
  }
  .row {
    display: grid;
    grid-template-columns: 0fr 1fr;
    padding-left: 300px;
    margin-top: 0px;
    position: relative;
    top: -20%;
    img {
      margin-top: 45px;
      height: 30px;
      width: 30px;
    }
  }
  .row2 {
    display: grid;
    grid-template-columns: 0fr 4fr;
    right: 175px;
    margin-right: 300px;
    width: 100%;
    position: relative;
    top: -70px;
    .checkbox {
      img {
        margin-top: 45px;
        height: 30px;
        width: 30px;
      }
    }

    h6 {
      color: #fff;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    h6::after {
      content: "";
      display: block;
      width: 60%;
      right: 200;
      height: 1.5px;
      background-color: #fff;

      margin-top: 20px;
    }
  }
`;
const Main2 = styled.div`
  position: relative;
  z-index: 2;
  img {
    position: relative;
    top: -170px;
  }
  p {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.89px;
  }
  .container {
    position: relative;
    top: -350px;
    left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
  }
  .button2 {
    position: relative;
    top: -300px;
  }
  .rupo {
    position: relative;
    left: 30px;
  }
`;

const Front = () => {
  return (
    <Wrapper>
      <h1>Check your financial health</h1>
      <h5>
        Use WeathoMeter to get a free report <br></br> card for your finances-
        within minutes!
      </h5>
      <center>
        <button>Get Started</button>
      </center>
      <div className="main">
        <div>
          <div className="sector">
            <div className="checkbox">
              <img src={check} alt="check" />
            </div>
            <div className="text">
              <h6>Expected Retirement Age</h6>
            </div>
          </div>
          <div className="row">
            <div>
              <img src={check} alt="check" />
            </div>
            <div className="era">
              <h6>Identify Mistakes</h6>
            </div>
          </div>
        </div>
        <div className="phone">
          <img src={phone}></img>
        </div>
        <div>
          <div>
            <div className="sector2">
              <div className="checkbox">
                <img src={check} alt="check" />
              </div>
              <div className="text">
                <h6>Personalised Road Map</h6>
              </div>
            </div>
          </div>
          <div>
            <div className="row2">
              <div className="checkbox">
                <img src={check} alt="check" />
              </div>
              <div className="text">
                <h6>Tips To Improve</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Main2>
        <h1>How it works?</h1>
        <center>
          <img src={book} alt="book" />
          <div className="container">
            <div>
              <p>
                Answer few <br />
                questions
              </p>
            </div>
            <div>
              {" "}
              <p className="rupo">
                Register using <br />
                phone and OTP
              </p>
            </div>
            <div>
              {" "}
              <p>
                Get report and <br />
                personal roadmap
              </p>
            </div>
          </div>
        </center>
        <center>
          <button className="button2">Get Started</button>
        </center>
      </Main2>
    </Wrapper>
  );
};

export default Front;
