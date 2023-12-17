import React from 'react';
import web from '../src/images/webpic.jpg'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Common from './Common';

const Home = () => {
    return (
        <>
           <Common 
            name="Grow your Business with " 
            imgsrc={web} 
            visit="/service" 
            btname="Get Started"/>
        </>
    )
}
export default Home;
