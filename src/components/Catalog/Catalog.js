import { useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import {selectCampers} from '../../redux/selectors';
import {CamperItem} from '../CamperItem/CamperItem';
import { ContainerCatalog, Label, Input, Text, Tittle, Button, ContainerButton, ButtonSearch} from './Catalog.styled';

export const Catalog = () => {

  const campers = useSelector(selectCampers);

    return (
      <ContainerCatalog>
      <div>
       
        <Label> Location 
        <Input type="text" name="location" />
       </Label>

        <Text>Filters</Text>

        <Tittle>Vehicle equipment</Tittle>

        <ContainerButton>
            <Button type="button">
              <svg width= '32px' height='32px'>
                <use xlinkHref={sprite + '#icon-Vector'} />
              </svg>
              <p>AC</p>
            </Button>

            <Button type="button">
              <svg width= '32px' height='32px'>
                <use xlinkHref={sprite + '#icon-Container'} />
              </svg>
              <p>Automatic</p>
            </Button>

            <Button type="button">
               <svg width= '32px' height='32px'>
                 <use xlinkHref={sprite + '#icon-eat'} />
               </svg>
              <p>Kitchen</p>
            </Button>

            <Button type="button">
               <svg width= '32px' height='32px'>
                 <use xlinkHref={sprite + '#icon-TV'} />
               </svg>
               <p>TV</p>
            </Button>
        
            <Button type="button">
               <svg width= '32px' height='32px'>
                 <use xlinkHref={sprite + '#icon-Shower'} />
               </svg>
               <p>Shower/WC</p>
            </Button>
        </ContainerButton>

        <Tittle>Vehicle type</Tittle>
        
        <ContainerButton>
            <Button type="button">
              <svg width= '40px' height='28px'>
                 <use xlinkHref={sprite + '#icon-Button-three'} />
              </svg>
              <p>Van</p>
            </Button>

            <Button type="button">
              <svg width= '40px' height='28px'>
                 <use xlinkHref={sprite + '#icon-Buttontwo'} />
              </svg>
              <p>Fully Integrated</p>
            </Button>

            <Button type="button">
              <svg width= '40px' height='28px'>
                 <use xlinkHref={sprite + '#icon-camper'} />
              </svg>
              <p>Alcove</p>
            </Button>
        </ContainerButton>

        <ButtonSearch type='button'>Search</ButtonSearch>

      </div>

      <ul>
      {campers.map((item) => (
        <CamperItem key={item._id} value={item} />
      ))}
      </ul>
 
      </ContainerCatalog>
    );
  }; 