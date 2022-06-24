import React from 'react';

import { images} from '../../constants';
import "./Ads.scss";

const Ads = () => {
  return (
    <div className="app__ads"> 
        <div className="app__ads-text">
            <h1>Heavy Equipments: Innovations</h1>
            <p>As a pioneer of the automobile, we seek innovations which provide for pleasant, safe and resource-friendly mobility, day in, day out. Discover our visionary ideas for vehicles, mobility concepts, e-mobility and digital networking of the future – as well as the solutions with which we are already shaping the present. With the CASE strategy, Daimler focuses on the four major trends influencing future mobility – Connected, Autonomous, Shared & Services and Electric. And Daimler is already making great progress in all of these fields to shape the future of mobility. Each of the four CASE fields in itself already changes mobility fundamentally; however, the revolutionary potential only becomes apparent when the CASE fields are combined.</p>
        </div>
        <img src={images.brand_3} alt="brand" />
        
    </div>
  )
}

export default Ads