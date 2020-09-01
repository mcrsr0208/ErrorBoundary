import React from 'react';


function Hero({heroname}){

  if(heroname === 'Joker'){
    throw new Error ('Joker is not a hero');
  }
  return(
    <div>
      {heroname}
    </div>
  );
}

export default Hero;