import Modal from "react-modal";

// import styles from "./ModalShow.module.css";

import sprite from '../../assets/sprite.svg';

import {Title, TitleFlex, Info, Reviews, Location, Price, GamperList, 
       GamperItem, GamperImg, Description, ButtonClose, Buttons, ListButton, ButtonLi, TitleFeatures, 
       FeaturesContainer, LocationReviews, FormaBook, FormaFlex, ContainerDateil, TextBook } from "./ModalShow.styled";
import { nanoid } from 'nanoid';
Modal.setAppElement('#modal');



export const ModalShow = ({ isModalOpen, setIsOpen, data }) => {

 const { name, price, rating, reviews, description, gallery, location, adults, 
        details, form, length, width, height, tank, consumption } = data;


  const customStyles = {
    overlay: {
      backgroundColor: "rgba(30, 66, 89, 0.4)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "40px",
      maxWidth: "982px",
      maxHeight: "530px",
      borderRadius: "10px",
    },
  };
  
    return (
      <>
      <Modal   
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
             
        style={customStyles}

        contentLabel="More info modal"     
      >

      <TitleFlex>

         <Title>{name}</Title>

         <ButtonClose
           onClick={() => {
            setIsOpen(false);
           }}>
            <svg width= '32px' height='32px'>
                <use xlinkHref={sprite + '#icon-Rating'} />
            </svg> 
         </ButtonClose>

      </TitleFlex>

      <Info>
            <LocationReviews>
               <svg width= '16px' height='16px'>
                     <use xlinkHref={sprite + '#icon-star'} />
               </svg>                       
              <Reviews>          
                   {rating} ({reviews.length} Rewiews)
              </Reviews>              
            </LocationReviews>

            <LocationReviews>
               <svg width= '16px' height='16px'>
                      <use xlinkHref={sprite + '#icon-map-pin'} />
               </svg>
                           
               <Location>  
                    {location}           
               </Location>                     
            </LocationReviews>
      </Info>

      <Price>€{price}.00</Price>

      <GamperList>
            {gallery.map((item) => (
              <GamperItem key={nanoid()}>
                <GamperImg src={item} alt={name} />
              </GamperItem>
            ))}
      </GamperList>

      <Description>{description}</Description>

      <div>
          <Buttons type="button">Features</Buttons>
          <Buttons type="button">Reviews</Buttons>
      </div>



      <FormaFlex>
        <ContainerDateil>
           <ListButton>
              <ButtonLi>
                        
                <svg width= '20px' height='20px'>
                   <use xlinkHref={sprite + '#icon-Users'} />
                </svg>
                <p>{adults} adults</p>
                              
              </ButtonLi>
              <ButtonLi>
                              
                <svg width= '20px' height='20px'>
                  <use xlinkHref={sprite + '#icon-Container'} />
                </svg>
                <p>Automatic</p>
                            
              </ButtonLi>
              <ButtonLi>
                             
                <svg width= '20px' height='20px'>
                  <use xlinkHref={sprite + '#icon-Vertical-container'} />
                </svg>
                <p>Petrol</p>
                           
              </ButtonLi>
              <ButtonLi>
                            
                <svg width= '20px' height='20px'>
                  <use xlinkHref={sprite + '#icon-Vector'} />
                </svg>
                <p>AC</p>
                             
              </ButtonLi>             
               <ButtonLi>
                           
                <svg width= '20px' height='20px'>
                  <use xlinkHref={sprite + '#icon-eat'} />
                </svg>
                <p>Kitchen</p>
                            
              </ButtonLi>
              <ButtonLi>
                            
                <svg width= '20px' height='20px'>
                  <use xlinkHref={sprite + '#icon-bad'} />
                </svg>
                <p>{details.beds}beds</p>
                            
              </ButtonLi>
              <ButtonLi>
                            
                <svg width= '20px' height='20px'>
                  <use xlinkHref={sprite + '#icon-air-conditioner'} />
                </svg>
                <p>{details.airConditioner} air conditioner</p>
                                        
              </ButtonLi>
              <ButtonLi>
                            
                <svg width= '20px' height='20px'>
                  <use xlinkHref={sprite + '#icon-cd'} />
                </svg>
                <p> CD</p>
                                        
              </ButtonLi>
              <ButtonLi>
                            
                <svg width= '20px' height='20px'>
                  <use xlinkHref={sprite + '#icon-radio'} />
                </svg>
                <p> Radio</p>
                                        
              </ButtonLi>        
              <ButtonLi>
                            
                <svg width= '20px' height='20px'>
                  <use xlinkHref={sprite + '#icon-paintedplate'} />
                </svg>
                <p>{details.hob} hob</p>
                                        
              </ButtonLi>                    
          </ListButton>
          <TitleFeatures>Vehicle details</TitleFeatures>
          <div>
            <FeaturesContainer>
              <p>Form</p>
              <p>{form}</p>
            </FeaturesContainer>
            <FeaturesContainer>
              <p>Length </p>
              <p>{length} </p>
            </FeaturesContainer>
            <FeaturesContainer>
              <p>Width </p>
              <p>{width} </p>
            </FeaturesContainer>
            <FeaturesContainer>
              <p>Height </p>
              <p>{height} </p>
            </FeaturesContainer>
            <FeaturesContainer>
              <p>Tank </p>
              <p>{tank} </p>
            </FeaturesContainer>
            <FeaturesContainer>
              <p>Consumption </p>
              <p>{consumption}</p>
            </FeaturesContainer>            
          </div>
        </ContainerDateil>


          
        <FormaBook>
          <Title>Book your campervan now</Title>
          <TextBook>Stay connected! We are always ready to help you.</TextBook>

        </FormaBook>

      </FormaFlex>

      </Modal>
      

      </>
    );
  }; 