import styled from 'styled-components'
import shape_image from '../../assets/img/sd-shape-1.jpg';
import logo_image from '../../assets/img/logo-2.png';
import ipwrapper_image from '../../assets/img/sd-shape-2.jpg';
import Menu from './Menu';

const Holder = styled.div`
    width: 305px;
    background: #110712;
    position: relative;
    height: 100vh;
    padding-top: 65px;
    padding-bottom: 15px;
    @media only screen and (max-width: 1279px) {
        width: 250px;
    }
`;

const ShapeImg = styled.img`
    position: absolute;
    top: 0px;
    width: 100%;
`
const Logo = styled.a`
    display: block;
    max-width: 195px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 85px;
    img {
        max-width: 100%;
        width: 100%;
    }
`
const IpWrapper = styled.div`
    position: relative;
    padding: 30px;
    padding-left: 95px;
    img {
        position: absolute;
        top: -24px;
        right: 0;
        left: -15px;
        width: 100%;
    }
    p {
        color: #fff;
        position: relative;
        z-index: 1;
        font-size: 16px;
        span{
            display: block;
            color: #e6c187;
            font-size: 22px;
            margin-top: 5px;
        }
    }
`

function LeftSide() {
    return (
        <Holder>
            <ShapeImg src={shape_image}></ShapeImg>
            <div className='z-10 relative'>
                <Logo href="#">
                    <img src={logo_image} />
                </Logo>
                <Menu>
                </Menu>
                <IpWrapper>
                    <img src={ipwrapper_image} />
                    <p>1:1문의 <span>070.123.1234</span></p>
                </IpWrapper>
            </div>
        </Holder>
    );
}
  
export default LeftSide;
  