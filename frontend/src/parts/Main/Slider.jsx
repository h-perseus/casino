import styled from 'styled-components';
import slider_img_1 from '../../assets/img/1.png';
import slider_img_2 from '../../assets/img/2.png';
import slider_img_3 from '../../assets/img/3.png';
import slider_next from '../../assets/img/next.gif';
import slider_prev from '../../assets/img/prev.gif';
import '../../assets/css/nivo-slider.css';
import { useEffect } from 'react';
import $ from 'jquery';
const jQuery = $;
window.jQuery = window.$ = $;
require('../../assets/js/jquery.nivo.slider');

const Holder = styled.div`
    flex: 1 1 0;
    .slider-zone {position: relative;}
    .nivo-prevNav {
        background: url(${slider_prev});
        background-repeat: no-repeat;
        background-size: 45px 112.5px;
        width: 45px;
        height: 112.5px;
    }
    .nivo-nextNav {
        background: url(${slider_next});
        background-repeat: no-repeat;
        background-size: 45px 112.5px;
        width: 45px;
        height: 112.5px;
    }
    .nivo-controlNav a {
        font-size: 0;
        width: 12px;
        height: 12px;
        background: #fff;
        border-radius: 50%;
        margin: 0 6px;
        transition: .3s;
        display: inline-block;
    }

    .nivo-controlNav a.active {
        background: #A60201;
    }

    .nivo-controlNav {
        position: absolute;
        bottom: 10px;
        z-index: 11;
        text-align: center;
        right: 0;
        left: 0;
    }
`;


function Slider() {
    useEffect(() => {
        $('#slider').nivoSlider({
            prevText: '<img />',
            nextText: ''
          });
    }, [])
    
    return (
        <Holder>
            <div className="slider-zone">
              <div id="slider" className="nivo-slider">
                  <a href="#" className="slider-item"><img src={slider_img_1} alt="" /></a>
                  <a href="#" className="slider-item"><img src={slider_img_2} alt="" /></a>
                  <a href="#" className="slider-item"><img src={slider_img_3} alt="" /></a>
              </div>
            </div>
        </Holder>
    );
}

export default Slider;
  