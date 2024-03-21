import sprite from '../../assets/sprite.svg';

export const CamperItem = ({value}) => {
    const {
        adults,
        // children,
        // consumption,
        description,
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
                    <li>
                        <img src={gallery[0]} alt={name}></img>
                        <h2>{name}</h2>
                        <p>€{price}.00
                        <span>          
                             <svg width= '24px' height='24px'>
                               <use xlinkHref={sprite + '#icon-Hartdefault'} />
                             </svg>
                           </span> 
                        </p>
                        <p>
                            <span>          
                             <svg width= '16px' height='16px'>
                               <use xlinkHref={sprite + '#icon-star'} />
                             </svg>
                           </span> 
                            {rating} ({reviews.length} Rewiews)
                           <span>          
                             <svg width= '16px' height='16px'>
                               <use xlinkHref={sprite + '#icon-map-pin'} />
                             </svg>
                           </span> 
                           {location}
                        </p>

                        <p>{description}</p>

                        <button type="button">
                             <svg width= '20px' height='20px'>
                                <use xlinkHref={sprite + '#icon-Users'} />
                             </svg>
                             <p>{adults} adults</p>
                        </button>

                        <button type="button">
                             <svg width= '20px' height='20px'>
                                <use xlinkHref={sprite + '#icon-Container'} />
                             </svg>
                             <p>Automatic</p>
                        </button>

                        <button type="button">
                             <svg width= '20px' height='20px'>
                                <use xlinkHref={sprite + '#icon-Vertical-container'} />
                             </svg>
                             <p>Petrol</p>
                        </button>

                        <button type="button">
                             <svg width= '20px' height='20px'>
                                <use xlinkHref={sprite + '#icon-eat'} />
                             </svg>
                             <p>Kitchen</p>
                        </button>

                        <button type="button">
                             <svg width= '20px' height='20px'>
                                <use xlinkHref={sprite + '#icon-bad'} />
                             </svg>
                             <p>{details.beds}beds</p>
                        </button>

                        <button type="button">
                             <svg width= '20px' height='20px'>
                                <use xlinkHref={sprite + '#icon-Vector'} />
                             </svg>
                             <p>AC</p>
                        </button>

              <button type='button' >Show more</button>
                    </li>        
        </>
    );
  }; 
  
//   onClick = {()=>ShowMoreButton(contact.camper._id)}