import sprite from '../../assets/sprite.svg';
import {ContainerItem, Image, Title, Header, Price, LocalRewiew, Reviews, Location, Description, ListButton, ButtonLi, 
    ButtonMore} from './CamperItem.styled'

export const CamperItem = ({value}) => {
    const {
        adults,
        // children,
        // consumption,
        // description,
        // engine,
        // form,
        // height,
        // length,
        location,
        name,
        price,
        rating,
        // tank,
        // transmission,
        // width,
        details,
        gallery,
        reviews,
      } = value;


    return (
        <>
                    <ContainerItem>
                        <Image src={gallery[0]} alt={name}></Image>
                        <div>
                            <Header>
                                 <Title>{name}</Title>
                                <Price>€{price}.00
                                  <span>          
                                    <svg width= '24px' height='24px'>
                                      <use xlinkHref={sprite + '#icon-Hartdefault'} />
                                    </svg>
                                  </span> 
                                </Price>
                            </Header>

                        <LocalRewiew>
                        <p>
                             <svg width= '16px' height='16px'>
                               <use xlinkHref={sprite + '#icon-star'} />
                             </svg>                       
                          <Reviews>          
                             {rating} ({reviews.length} Rewiews)
                           </Reviews> 
                            
                        </p>

                        <p>
                            <svg width= '16px' height='16px'>
                               <use xlinkHref={sprite + '#icon-map-pin'} />
                            </svg>
                           
                           <Location>  
                             {location}           
                           </Location>                     
                        </p>

                        </LocalRewiew>    

                        <Description>The pictures shown here are example vehicles of the respective.</Description>

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
                                   <use xlinkHref={sprite + '#icon-Vector'} />
                                </svg>
                                <p>AC</p>
                             
                            </ButtonLi>
                        </ListButton>

              <ButtonMore type='button' >Show more</ButtonMore>

                        </div>

                    </ContainerItem>        
        </>
    );
  }; 
  
//   onClick = {()=>ShowMoreButton(contact.camper._id)}