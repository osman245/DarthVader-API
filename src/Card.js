import React from 'react';
import 'tachyons';

import './Card.css';


const Card = ({item}) => {
console.log(item.name);
return (
	<div className = 'container'>
<div className=' tc pointer grow center bg-light-blue dib br3 pa3 ma3  bw2 shadow-5 '>
<img alt='Darth Vader' width="450" height="450" src='https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:fafafa,c_scale,dpr_3.0,f_auto,w_500/5379499_png/star-wars---darth-vader-swarovski-5379499.png' />
<div>
<h3>{`Name: ${item.name}`} </h3>
<h3>{`Height: ${item.height}cm`} </h3>
<h3>{`Weight: ${item.mass}kg`} </h3>
<h3>{`Birth Year: ${item.birth_year}`} </h3>




</div>
</div>
</div>
);
//only can return one element, in this case a div element with a binch in it.
}

export default Card;
