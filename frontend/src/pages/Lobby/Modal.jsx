import styled from 'styled-components';
import { useEffect } from 'react';
import game_09_image from '../../assets/img/game_09.png';
import game_09_on_image from '../../assets/img/game_09_on.png';
import game_10_image from '../../assets/img/game_10.png';
import game_10_on_image from '../../assets/img/game_10_on.png';
import game_5_image from '../../assets/img/game_5.png';
import game_5_on_image from '../../assets/img/game_5_on.png';
import game_7_image from '../../assets/img/game_7.png';
import game_7_on_image from '../../assets/img/game_7_on.png';
import game_8_image from '../../assets/img/game_8.png';
import game_8_on_image from '../../assets/img/game_8_on.png';
import game_3_image from '../../assets/img/game_3.png';
import game_3_on_image from '../../assets/img/game_3_on.png';
import game_1_image from '../../assets/img/game_1.png';
import game_1_on_image from '../../assets/img/game_1_on.png';
import game_2_image from '../../assets/img/game_2.png';
import game_2_on_image from '../../assets/img/game_2_on.png';
import game_4_image from '../../assets/img/game_4.png';
import game_4_on_image from '../../assets/img/game_4_on.png';
import game_6_image from '../../assets/img/game_6.png';
import game_6_on_image from '../../assets/img/game_6_on.png';
import close_modal_image from '../../assets/img/close.png';
import logo_3_image from '../../assets/img/logo-3.jpg';
import ttl_image from '../../assets/img/ttl.jpg';
import doller_image from '../../assets/img/doller.jpg';
import loader_gif from '../../assets/img/loader.gif'
import '../../assets/css/lobby.css';
import '../../assets/css/midas.css';

require('../../assets/js/bootstrap.min');
require('../../assets/js/helper');
require('../../assets/js/provider');
require('../../assets/js/broadcast');
require('../../assets/js/utils/game');
require('../../assets/js/utils/render_lobby');
require('../../assets/js/galaxy/player-lobby-galaxy');

const Holder = styled.div`
    position: 'relative';
    display: flex;
    .contents {
        display: inherit;
    }
    .panel {
        margin-bottom: 20px;
        background-color: #fff;
        border: 1px solid transparent;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
        box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
        border-color: #ddd;
        border-radius: 0;
    }
    .vegas_loader {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .vegas_loader img {
        width: 50px;
    }
    #standard-table {
        max-height: 630px !important;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(357px, 1fr));
        grid-gap: 1rem;
        overflow: auto;
        ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }
        ::-webkit-scrollbar-thumb {
            background: #080f34;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
    }
`;

const Button = styled.a`
    img {
        &:last-child{
            display: none;
        }
    }
    &:hover {
        img:last-child{
            display: block;
        }
        img:first-child{
            display: none;
        }
    }
`

const CloseModalButton = styled.div`
    position: absolute;
    right: 0;
    background: transparent;
    border: 0;
    padding: 10px 15px;
    z-index: 1;
    img{
        width: 17px;
    }
`

const ModalLeft = styled.div`
    background: linear-gradient(to bottom, #1e2026, #000000);
    padding-bottom: 30px;
`

const MidasItems = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-gap: 1rem;
    padding-bottom: 28px;
    border-bottom: 1px white solid;
    margin-bottom: 20px;
    >div {
        &.active {
            color: gold;
            background: #0f582a;
        }
        &.disabled {
            pointer-events: none;
        }
        display: flex;
        flex-direction: column;
        padding: 15px;
        background: #757575;
        width: 180px;
        cursor: pointer;
        width: auto !important;
    }

`

function LobbyModal(props) {
    useEffect(() => {
        setTimeout(() => {
            window['PlayerLobby'].init();
        })
    }, [])

    return (
        <Holder>
            <CloseModalButton onClick={props.close}>
                <img src={close_modal_image} />
            </CloseModalButton>
            <ModalLeft className='w-[260px]'>
                <a>
                    <img src={logo_3_image} />
                </a>
                <div className='flex items-center m-[10px] relative'>
                    <img className='absolute inset-0' src={ttl_image} />
                    <div className='flex items-center p-[15px] z-[1]'>
                        <img className='w-[22px] mr-[15px]' src={doller_image} />
                        <p className="text-yellow-300 text-base">보유금액 : <span id="profile-credits-display-lobby">72,465,000</span></p>
                    </div>
                </div>
                <ul className="flex flex-col gap-2">
                    <li>
                        <Button className="game-9-okada b_game" href="#">
                            <img src={game_09_image} />
                            <img src={game_09_on_image} />
                        </Button>
                    </li>
                    <li>
                        <Button className="game-10-resortworld b_game" href="#">
                            <img src={game_10_image} />
                            <img src={game_10_on_image} />
                        </Button>
                    </li>
                    <li>
                        <Button className="game-1-evolution b_game" href="#">
                            <img src={game_5_image} />
                            <img src={game_5_on_image} />
                        </Button>
                    </li>
                    <li>
                        <Button className="game-4-oriental b_game" href="#">
                            <img src={game_7_image} />
                            <img src={game_7_on_image} />
                        </Button>
                    </li>
                    <li>
                        <Button className="game-5-microming b_game" href="#">
                            <img src={game_8_image} />
                            <img src={game_8_on_image} />
                        </Button>
                    </li>
                    <li>
                        <Button className="game-2-cagayan b_game" href="#">
                            <img src={game_3_image} />
                            <img src={game_3_on_image} />
                        </Button>
                    </li>
                    <li>
                        <Button className="game-8-okada b_game" href="#">
                            <img src={game_1_image} />
                            <img src={game_1_on_image} />
                        </Button>
                    </li>
                    <li>
                        <Button className="game-6-solaire b_game" href="#">
                            <img src={game_2_image} />
                            <img src={game_2_on_image} />
                        </Button>
                    </li>
                    <li>
                        <Button className="game-7-stochenburg b_game" href="#">
                            <img src={game_6_image} />
                            <img src={game_6_on_image} />
                        </Button>
                    </li>
                    <li>
                        <Button className="game-3-resortworld b_game" href="#">
                            <img src={game_4_image} />
                            <img src={game_4_on_image} />
                        </Button>
                    </li>
                </ul>
            </ModalLeft>
            <div className='flex-auto px-[40px] py-[50px]'>
                <div className="vegas_loader row">
                    <img src={loader_gif} alt="loader" />
                </div>
                <MidasItems>
                    <div className='active'>
                        <div><span>Minimum</span><span>1,000</span></div>
                        <div><span>Maximum</span><span>100,000</span></div>
                    </div>
                    <div className='disabled'>
                        <div><span>Minimum</span><span>10,000</span></div>
                        <div><span>Maximum</span><span>1,000,000</span></div>
                    </div>
                    <div className='disabled'>
                        <div><span>Minimum</span><span>20,000</span></div>
                        <div><span>Maximum</span><span>2,000,000</span></div>
                    </div>
                    <div className='disabled'>
                        <div><span>Minimum</span><span>30,000</span></div>
                        <div><span>Maximum</span><span>3,000,000</span></div>
                    </div>
                    <div className='disabled'>
                        <div><span>Minimum</span><span>40,000</span></div>
                        <div><span>Maximum</span><span>4,000,000</span></div>
                    </div>
                </MidasItems>
                <div id="standard-table">
                </div>
            </div>
        </Holder>
    );
}
  
export default LobbyModal;
  