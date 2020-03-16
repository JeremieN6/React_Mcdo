import React from "react";
import styled from "styled-components";
import logo from "../../asset/logo.png";

const NavBar = () => {
  return (
    <sectionMain>
      <Header>
        <ImageContainer src={logo}></ImageContainer>
      </Header>
      <Container>
        <LoginRegisterBlock>
          <Login>
            <p>
              <strong>Connectez vous avec vos identifiants</strong>
            </p>
          </Login>
          <LoginZone>
            <form
              id="LoginForm"
              autoComplete="off"
              className="form-error-false t-prevent-submission"
              action="dologin"
              method="post"
            >
              <Classicfield>
                <label>
                  <span>Mon adresse email</span>
                </label>
              </Classicfield>
              <Placeholderfield>
                <Input
                  autocomplete="off"
                  data-field="login"
                  id="j_username"
                  name="j_username"
                  type="text"
                ></Input>
              </Placeholderfield>
              <Classicfield>
                <br />
                <label>
                  <span>Mon mot de passe</span>
                </label>
              </Classicfield>
              <Placeholderfield>
                <Input
                  autocomplete="off"
                  data-field="password"
                  id="j_password"
                  name="j_password"
                  type="password"
                />
              </Placeholderfield>
              <Lineborder></Lineborder>
              <CheckBox>
                <input
                  id="keepLogged"
                  name="keepLogged"
                  type="checkbox"
                  checked
                />
                <label for="keepLogged">Rester connecté(e)</label>
              </CheckBox>
              <Clear></Clear>
              <Button>Je me connecte</Button>
              <Createaccount>Mot de passe oublié ?</Createaccount>
              <Createaccount>Pas encore de compte ?</Createaccount>
            </form>
            <Lineborder></Lineborder>
            <LegalMention>
              <p>
                Vous pouvez consulter notre politique de protection des données
                personnelles <a href="/">ici</a>.
              </p>
            </LegalMention>
            <Createaccount>Mentions Légales</Createaccount>
            <Createaccount>Protection des données personnelles</Createaccount>
            <Createaccount>CGV Click and Collect</Createaccount>
          </LoginZone>
        </LoginRegisterBlock>
      </Container>
    </sectionMain>
  );
};

const LegalMention = styled.p`
  color: #7c7c7c;
  font-size: 12px;
  text-align: center;
`;

const Createaccount = styled.div`
  a: {
    color: #7c7c7c;
  }
  text-decoration: underline;
  font-size: 100%;
  color: #7c7c7c;
  text-align: center;
  margin-top: 17px;
  margin-bottom: 17px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 2px;
  padding: 0;
  background-image: none;
  text-shadow: none;
  font-weight: 700;
  text-transform: uppercase;
  background: #f6f6f6
    url(https://connexion.mcdonalds.fr/resources/image/btn-bg-be5097ff26d84a9503ed58530a6d784b.png);
  color: #7c7c7c;
  &:hover {
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    background: #014711;
    color: white;
    left: 390px;
    z-index: -1;
    transition: transform 1s;
  }
`;

const Clear = styled.div`
  clear: both;
  height: 1px;
  font: 0/0 serif;
  margin-bottom: 0;
`;

const CheckBox = styled.div`
  font: 400 12px Arial !important;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Lineborder = styled.div`
  border-bottom: 1px solid #e6e6e6;
  margin-top: 14px;
`;

const Hidepassword = styled.span`
  text-align: right;
`;

const Placeholderfield = styled.div`
  input: {
    padding: 0;
    width: 100%;
    height: 100%;
    background: #f6f6f6;
    text-align: left;
    display: inline-block;
    float: right;
    border-radius: 2px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 2px;
  background-color: #f6f6f6;
  border: none;
  padding-left: 11px;
  margin-top: 8px;
  color: #252323;
  font-weight: 400;
  font-size: 14px;
  font-family: Arial;
`;

const Classicfield = styled.div`
  margin-bottom: 4px;
  font-size: 15px;
  color: black;
  font-family: Arial;
`;

const LoginZone = styled.div``;

const Login = styled.div`
  width: 350px;
  margin: auto;
  color: black;
  font-weight: 400;
  font-size: 16px;
  font-family: Arial;
  text-align: left;
  margin-bottom: 20px;
`;

const LoginRegisterBlock = styled.section`
  margin-bottom: 37px;
  margin: 0 15px;
  padding: 0 15px;
  background: #fff;
`;

const Container = styled.section`
  font-family: Arial;
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 20px;
  padding-top: 4em;
  width: 350px;
  margin: auto;
  color: #7c7c7c;
  font-weight: 400;
  font-size: 14px;
  font-family: Arial;
  text-align: left;
  margin-bottom: 25px;
`;

const ImageContainer = styled.img`
  width: 39px;
  margin-top: 2px;
`;

const Header = styled.div`
  width: 100%;
  overflow-x: hidden;
  margin: auto;
  text-align: center;
  height: 45px;
  border-bottom: 1px solid #d3d3d3;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

export default NavBar;
