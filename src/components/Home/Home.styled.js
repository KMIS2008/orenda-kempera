import styled from 'styled-components';
import istockphoto from '../../assets/istockphoto.jpg'

export const BackGround = styled.div`
  background-image: url(${istockphoto});
  height: 100vh;
  background-repeat: no-repeat;

  background-size: 80% auto;
  box-sizing: border-box;

`;

export const Welcom = styled.p`
display: block;
font-size: 30px;
margin-top: ${p=>p.theme.spacing(10)};
margin-bottom: ${p=>p.theme.spacing(20)};
padding-left:${p=>p.theme.spacing(30)};
padding-top: ${p=>p.theme.spacing(10)};
`;

export const TextHome = styled.p`
width: 800px;
font-size: 20px;
padding-left:${p=>p.theme.spacing(10)};
text-align: justify;
`;



