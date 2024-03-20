import sprite from '../../assets/sprite.svg'

export const CamperCard = ({data}) => {
    return (
      <>
      <div>
       
        <label> Location
            <input type="text" name="location" />
        </label>

        <p>Filters</p>

        <h3>Vehicle equipment</h3>

        <div>
            <button type="button">
              <svg width= '32px' height='32px'>
                <use xlinkHref={sprite + '#icon-Vector'} />
              </svg>
              <p>AC</p>
            </button>

            <button type="button">
              <svg width= '32px' height='32px'>
                <use xlinkHref={sprite + '#icon-Container'} />
              </svg>
              <p>Automatic</p>
            </button>

            <button type="button">
               <svg width= '32px' height='32px'>
                 <use xlinkHref={sprite + '#icon-eat'} />
               </svg>
              <p>Kitchen</p>
            </button>

            <button type="button">
               <svg width= '32px' height='32px'>
                 <use xlinkHref={sprite + '#icon-TV'} />
               </svg>
               <p>TV</p>
            </button>
        
            <button type="button">
               <svg width= '32px' height='32px'>
                 <use xlinkHref={sprite + '#icon-Shower'} />
               </svg>
               <p>Shower/WC</p>
            </button>
        </div>

        <h3>Vehicle type</h3>
        
        <div>
        
            <button type="button">
              <svg width= '40px' height='28px'>
                 <use xlinkHref={sprite + '#icon-Button-three'} />
              </svg>
              <p>Van</p>
            </button>

            <button type="button">
              <svg width= '40px' height='28px'>
                 <use xlinkHref={sprite + '#icon-Buttontwo'} />
              </svg>
              <p>Fully Integrated</p>
            </button>

            <button type="button">
              <svg width= '40px' height='28px'>
                 <use xlinkHref={sprite + '#icon-camper'} />
              </svg>
              <p>Alcove</p>
            </button>
        </div>

        <button type='button'>Search</button>

      </div>


        <div>
           <img src={data.img} alt="camper"></img>
        </div>
 

      </>
    );
  }; 