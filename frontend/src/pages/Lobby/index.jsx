import styled from 'styled-components';
import event_1_image from '../../assets/img/event-1.jpg';
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
import Modal from 'react-modal';
import { useState } from 'react';
import LobbyModal from './Modal';

const Holder = styled.div`
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

const modalStyle = {
    overlay: {
        zIndex: 1050,
        background: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 15px'
    },
    content: {
        padding: 0,
        border: '1px solid #622658',
        inset: 'auto 0',
        margin: '30px auto',
        maxWidth: '1200px',
        background: 'black'
    }
}

Modal.setAppElement('#root');

function Lobby() {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <Holder>
            <div className="event-banner mb-[25px]">
                  <a href="#"><img src={event_1_image} /></a>
            </div>
            <ul className="grid grid-cols-2 gap-[10px] content-start">
                <li>
                    <Button className="game-9-okada b_game" href="#" onClick={openModal}>
                        <img src={game_09_image} />
                        <img src={game_09_on_image} />
                    </Button>
                </li>
                <li>
                    <Button className="game-10-resortworld b_game" href="#" onClick={openModal}>
                        <img src={game_10_image} />
                        <img src={game_10_on_image} />
                    </Button>
                </li>
                <li>
                    <Button className="game-1-evolution b_game" href="#" onClick={openModal}>
                        <img src={game_5_image} />
                        <img src={game_5_on_image} />
                    </Button>
                </li>
                <li>
                    <Button className="game-4-oriental b_game" href="#" onClick={openModal}>
                        <img src={game_7_image} />
                        <img src={game_7_on_image} />
                    </Button>
                </li>
                <li>
                    <Button className="game-5-microming b_game" href="#" onClick={openModal}>
                        <img src={game_8_image} />
                        <img src={game_8_on_image} />
                    </Button>
                </li>
                <li>
                    <Button className="game-2-cagayan b_game" href="#" onClick={openModal}>
                        <img src={game_3_image} />
                        <img src={game_3_on_image} />
                    </Button>
                </li>
                <li>
                    <Button className="game-8-okada b_game" href="#" onClick={openModal}>
                        <img src={game_1_image} />
                        <img src={game_1_on_image} />
                    </Button>
                </li>
                <li>
                    <Button className="game-6-solaire b_game" href="#" onClick={openModal}>
                        <img src={game_2_image} />
                        <img src={game_2_on_image} />
                    </Button>
                </li>
                <li>
                    <Button className="game-7-stochenburg b_game" href="#" onClick={openModal}>
                        <img src={game_6_image} />
                        <img src={game_6_on_image} />
                    </Button>
                </li>
                <li>
                    <Button className="game-3-resortworld b_game" href="#" onClick={openModal}>
                        <img src={game_4_image} />
                        <img src={game_4_on_image} />
                    </Button>
                </li>
            </ul>
            <Modal isOpen={modalIsOpen}
            style={modalStyle}>
                <LobbyModal close={closeModal}></LobbyModal>
            </Modal>
        </Holder>
    );
}
  
export default Lobby;
  