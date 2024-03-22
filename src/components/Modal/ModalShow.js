import Modal from "react-modal";

// import styles from "./ModalShow.module.css";

import sprite from '../../assets/sprite.svg';

import {Title, TitleFlex, Info, Reviews, Location, Price, GamperList, 
       GamperItem, GamperImg, Description, ButtonClose, Buttons } from "./ModalShow.styled";
import { nanoid } from 'nanoid';
Modal.setAppElement('#modal');



export const ModalShow = ({ isModalOpen, setIsOpen, data }) => {

 const { name, price, rating, reviews, description, gallery, location } = data;


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
            <div>
               <svg width= '16px' height='16px'>
                     <use xlinkHref={sprite + '#icon-star'} />
               </svg>                       
              <Reviews>          
                   {rating} ({reviews.length} Rewiews)
              </Reviews>              
            </div>

            <div>
               <svg width= '16px' height='16px'>
                      <use xlinkHref={sprite + '#icon-map-pin'} />
               </svg>
                           
               <Location>  
                    {location}           
               </Location>                     
            </div>
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

      

      </Modal>
      

      </>
    );
  }; 