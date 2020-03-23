import React, { useState } from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components";
import logo from "../../asset/logo.png";
import { useHistory } from 'react-router-dom'

const Login = ({ submit }) => {
  const history = useHistory()
  const [form, setForm] = useState({
    username: '',
    password: '',
    isError: false,
    isErrorMessage:''
  })


  return (
    <sectionMain>
      <Header>
        <ImageContainer src={logo}></ImageContainer>
      </Header>
      <Container>
        <LoginRegisterBlock>
          <ContainerLogin>
              <ContainerLoginTitle>Connectez vous avec vos identifiants</ContainerLoginTitle>
          </ContainerLogin>
          <LoginZone onSubmit={e => submit(e, form, history)}>
              <Classicfield>Mon adresse email</Classicfield>
                <Input
                   placeholder='Entrer Email'
                   name='username'
                   onChange={e => setForm({ ...form, username: e.target.value })}
                   type='text'
                   onBlur={() =>
                     form.username.length < 8
                       ? setForm({
                           ...form,
                           isError: true,
                           isErrorMessage: 'Mail invalide'
                         })
                       : setForm({ ...form, isError: false })
                   }
                ></Input><Espace/>
              <Classicfield><Espace/>Mon mot de passe</Classicfield>
              
                <Input
                 name='password'
                 placeholder='Entrer Mot de Passe'
                 onChange={e => setForm({ ...form, password: e.target.value })}
                 type='password'
                 onBlur={() =>
                   form.password.length < 8
                     ? setForm({
                         ...form,
                         isError: true,
                         isErrorMessage: 'Password Invalide'
                       })
                     : setForm({ ...form, isError: false })
                 }/>
              <Lineborder></Lineborder>
              <CheckBox>
                <input
                  id="keepLogged"
                  name="keepLogged"
                  type="checkbox"
                  checked
                />
                <CheckBoxLabel for="keepLogged">Rester connecté(e)</CheckBoxLabel>
              </CheckBox>
              <Clear></Clear>
              <Button disabled={form.isError} type='submit' onClick={() => history.push('/produits')}>Je me connecte</Button>
              <Createaccount>Mot de passe oublié ?</Createaccount>
              <Createaccount>Pas encore de compte ?</Createaccount>
            <Lineborder></Lineborder>
            <LegalMention>
                Vous pouvez consulter notre politique de protection des données
                personnelles <Lien href="/login">ici</Lien>.
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

const Lien = styled.a``

const Espace = styled.br``

const LegalMention = styled.p`
  color: #7c7c7c;
  font-size: 12px;
  text-align: center;
`;

const Createaccount = styled.p`
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

const CheckBoxLabel = styled.label`
`

const CheckBox = styled.div`
  font: 400 12px Arial !important;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Lineborder = styled.div`
  border-bottom: 1px solid #e6e6e6;
  margin-top: 14px;
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

const Classicfield = styled.span`
  margin-bottom: 4px;
  font-size: 15px;
  color: black;
  font-family: Arial;
`;

const LoginZone = styled.form``;

const ContainerLoginTitle = styled.p`
font-weight: bold;
  font-size: 16px;
  font-family: Arial;
  text-align: left;`

const ContainerLogin = styled.div`
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


Login.propTypes = {
  submit: PropTypes.func
}


export default Login;
