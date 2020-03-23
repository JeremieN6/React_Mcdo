import React from "react";
import styled from "styled-components";
import logo from "../../asset/logo_products.png";
import logo2 from "../../asset/back_arrow.png";
import logo5 from "../../asset/burger4.png";
import logo6 from "../../asset/menu.png";
import logo8 from "../../asset/btn_commander.png";
import logo9 from "../../asset/burger2.png";
import logo10 from "../../asset/burger3.png";
import logo11 from "../../asset/pub.jpg";
import { Slide } from 'react-slideshow-image'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast.success("Commande Confirmé !", {
    position: toast.POSITION.TOP_RIGHT
  });

const Products = () => {
  return (
      <sectionMain>
          <Header>
              <ButtonContainer>
                  <ButtonMenu>
                      <ImagebtnMenu src={logo6}></ImagebtnMenu>
                  </ButtonMenu>
              </ButtonContainer>
              <HeaderRight>
              <ContainerImg><ImageContainer src={logo}></ImageContainer></ContainerImg>
              </HeaderRight>
          </Header>
          <ContainerWrapper>
              <ContainerBurger>
                  <a href="/"><BackNav src={logo2}></BackNav></a>
                  <Titleburger>Nos Burgers</Titleburger>
              </ContainerBurger>
              <Lineborder></Lineborder>
              <Pub src={logo11}></Pub>
              <ContainerProducts>
              <Slide {... proprietes}>
                  <ContainerProducts>
                  <DetailProduct>LE FILET-O-FISH</DetailProduct>
                      <ContainerImageProduct src={logo5}></ContainerImageProduct>
                      <ButtonCommander src={logo8}  onClick={notify}>COMMANDER</ButtonCommander>
                  </ContainerProducts>
                  <ContainerProducts>
                  <DetailProduct>LE DOUBLE TENNESSEE BBQ &amp; SMOKY CHEDDAR</DetailProduct>
                      <ContainerImageProduct src={logo9}></ContainerImageProduct>
                     <ButtonCommander src={logo8}  onClick={notify}>COMMANDER</ButtonCommander>
                  </ContainerProducts>
                  <ContainerProducts>
                  <DetailProduct>LE McCHICKEN</DetailProduct>
                      <ContainerImageProduct src={logo10}></ContainerImageProduct>
                      <ButtonCommander src={logo8}  onClick={notify}>COMMANDER</ButtonCommander>
                  </ContainerProducts>
              </Slide>
              </ContainerProducts>
              <Footer>
                  <SocialMedia><DetailSM>Aide</DetailSM></SocialMedia>
                  <SocialMedia><DetailSM>Mentions</DetailSM></SocialMedia>
                  <SocialMedia><DetailSM>Facebook</DetailSM></SocialMedia>
                  <SocialMedia><DetailSM>Instagam</DetailSM></SocialMedia>
              </Footer>
          </ContainerWrapper>
      </sectionMain>
  );
};

const proprietes = {
    duration:5000,
    transistionDuration:500,
    infinite: true,
    indicators: true,
    arrows:true
}

const SocialMedia = styled.div`
    display:flex;
    width: 25%;
    border-right: 1px solid black;`

const DetailSM = styled.p`
    color:white;
    margin-right: auto;
    margin-left: auto;
    margin-top: auto;
`

const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;`


const HeaderRight = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    position: absolute;
    margin-top: 8px;`

const Pub = styled.img`
    display: flex;
    width: 100%;
    box-shadow: 5px 15px 30px 0px #656565;`

const ButtonCommander = styled.button`

    display: flex;
    padding: 10px 5px;
    margin-left: 24%;
    background-color: #ffc600;
    border-radius: 10px;
    color: white;
    padding: 10px 30px;
    text-align: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    font: 5px 'MuseoSlab900',Arial,sans-serif;
    font-weight: bold;
    font-size: 13px;
    margin-top: 10px;
`

const DetailProduct = styled.p`

    font: normal 1.3em/1 'MuseoSlab900', Verdana, sans-serif;
    color: #666;
    text-align:center;
`

const ContainerImageProduct = styled.img`
    
    display:flex;
`

const ContainerProducts = styled.div`
    width: 303px;
    margin: auto;
    padding-top: 30px;
`

const ButtonContainer = styled.div`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    width: 60px;
    background-image: url(../../asset/filet.png);
    background-position: right center;
    background-repeat: no-repeat;
`

const ImagebtnMenu = styled.img`
    width: 25px;
`

const ButtonMenu = styled.div`
    padding: 0;
    outline: 0;
    background: none repeat scroll 0 0 transparent;
    border: none;
    height: 100%;
`

const Lineborder = styled.div`
    border-bottom: 1px solid #e6e6e6;
    margin-top: 1px;
`;

const BackNav = styled.img`
    height: 45%;
    position: absolute;
    vertical-align: middle;
    display: table-cell;
    z-index: 1;
    left: 0;
    top: 30%;
    left: 3%;
`

const Titleburger = styled.p`
    width: 100%;
    display: table-cell;
    position: relative;
    text-transform: uppercase;
    vertical-align: middle;
    color: #004111;
    font-family: 'MuseoSlab700',Helvetica,Arial,sans-serif;
    padding-left: 25px;
    padding-right: 25px;`

const ContainerBurger = styled.div`
    display: table;
    position: relative;
    height: 40px;
    width: 100%;
    min-height: 40px;
    background: #fff;
    text-align: center;
    z-index: 210;
    overflow: hidden;
`

const ContainerWrapper = styled.div`
`


const Header = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    height: 54px;
    background-color: #21522f;
    align-items: center;`

const Footer = styled.div`
    display: flex;
    flex: 1;
    height: 54px;
    background-color:#21522f;   
`

const ImageContainer = styled.img`
    padding-bottom: 15px;
    width: 45px;;
  `

const sectionMain = styled.section`
`
export default Products;