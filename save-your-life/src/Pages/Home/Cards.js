import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/9it00kh9-6-1555528431-jpg-3-1560739002-jpg-3-1580905005.jpg'
              text='University of Pittsburgh Medical Center'
              label='Make an appointment'
              path="https://myupmc.upmc.com/"
            />
            <CardItem
              src='https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Stock-Welcoming-Doctor-AdobeStock253289644%20copy.jpeg'
              text='UPMC personal health care'
              label='Connect with UPMC'
              path="https://providers.upmc.com/?&utm_kxconfid=sws256pg0&utm_source=GOOGLE&utm_medium=cpc&utm_campaign=71700000037475977&utm_adgroup=58700004164275748&utm_term=upmc+doctors&utm_advertiserid=700000001754524&gclid=Cj0KCQjwiNSLBhCPARIsAKNS4_d86eZcAPwzcQPL-CWzSlQhJGCNwA9qTxSIAWAj7pq3X_frWyhwB4EaAhatEALw_wcB&gclsrc=aw.ds"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
