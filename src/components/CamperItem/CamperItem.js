import sprite from '../../assets/sprite.svg';

export const CamperItem = ({data}) => {
    return (
     
        <ul>
             {data.map((camper)=>{
                return (
                    <li key={camper._id}>
                        <img src={camper.img} alt="camper"></img>
                        <h2>{camper.name}</h2>
                        <p>€{camper.price}
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
                            {camper.rating} ( Reviews)
                           <span>          
                             <svg width= '16px' height='16px'>
                               <use xlinkHref={sprite + '#icon-map-pin'} />
                             </svg>
                           </span> 
                           {camper.location}
                        </p>

                        <button type="button">
                             <svg width= '20px' height='20px'>
                                <use xlinkHref={sprite + '#icon-Users'} />
                             </svg>
                             <p>{camper.adults} adults</p>
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
                             <p>{camper.details.beds}beds</p>
                        </button>

                        <button type="button">
                             <svg width= '20px' height='20px'>
                                <use xlinkHref={sprite + '#icon-Vector'} />
                             </svg>
                             <p>AC</p>
                        </button>

              <button type='button' >Show more</button>
                    </li>

                )    
            })}   
        </ul>

    );
  }; 
  
//   onClick = {()=>ShowMoreButton(contact.camper._id)}