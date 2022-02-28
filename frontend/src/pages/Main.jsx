import {
    Outlet
} from "react-router-dom";

import LeftSide from "../parts/LeftSide";
import var_image from '../assets/img/v-bar.jpg';
import brand_image from '../assets/img/brands.jpg';


import styled from 'styled-components';
import Slider from './../parts/Main/Slider';
import User from '../parts/Main/User';

const MainHolder = styled.div`
    padding-right: 30px;
    position: relative;
    flex: 1 1 auto;
    @media only screen and (max-width: 1279px) {
        padding-right: 0;
    }
    &::before {
        content: "";
        background-image: url(${var_image});
        width: 5px;
        height: 100%;
        background-position: center;
        position: absolute;
        top: 0;
        left: -5px;
        bottom: 0;
        z-index: 99;
    }
`
const MainContent = styled.div`
    padding: 30px 0;
    @media only screen and (max-width: 1279px) {
        padding: 30px 15px;
    }
`
const CopyRight = styled.p`
    color: #52457F;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 400;
`

function Main() {
    return (
        <div className="flex">
            <LeftSide>
            </LeftSide>
            <MainHolder className="xl:grid grid-cols-2 gap-4 block content-start">
                <Slider></Slider>
                <MainContent>
                    <User />
                    <Outlet />
                </MainContent>
                <div className="col-span-2 text-center px-[30px] py-[15px]">
                    <div className="mb-[25px]">
                        <img src={brand_image} />
                    </div>
                    <CopyRight>Copyright &copy; 2006-2021 Bora casino all rights reserved.</CopyRight>
                </div>
            </MainHolder>
        </div>
    );
}
  
  export default Main;
  