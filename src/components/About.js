import React from 'react';
import { Outlet } from 'react-router-dom';

const About = () => {
   return(
    <Outlet>
      <h4>회사정보</h4>
    </Outlet>
   );
};

export default About;