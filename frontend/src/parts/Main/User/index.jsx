import styled from 'styled-components';
import Modal from 'react-modal';
import { useState } from 'react';
import EditUser from './Edit';

import login_icon_1 from '../../../assets/img/login_icon_1.png';
import login_icon_1_on from '../../../assets/img/login_icon_1_on.png';
import login_icon_2 from '../../../assets/img/login_icon_2.png';
import login_icon_2_on from '../../../assets/img/login_icon_2_on.png';

const Holder = styled.div`
    margin-bottom: 25px;
`;

const Button = styled.a`
    img {
        max-width: 100%;
        width: 105px;
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
        inset: '0 0',
        background: 'transparent',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center'
    }
}

function User() {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <Holder>
            <ul className="flex justify-end items-center">
                  <li className='text-base text-white'>{ 'account.nick_name'}님 환영합니다.</li>
                  <li className="ml-[10px] text-base text-yellow-300">+ 보유머니 : <span id="profile-credits-display">{'credits'}</span> 원</li>
                  <li className="ml-[15px]">
                      <Button href="#" onClick={openModal}>
                          <img src={login_icon_1} />
                          <img src={login_icon_1_on} />
                      </Button>
                  </li>
                  <li className="ml-[15px]">
                      <Button href="#">
                          <img src={login_icon_2} />
                          <img src={login_icon_2_on} />
                      </Button>
                  </li>
            </ul>
            <Modal isOpen={modalIsOpen}
            style={modalStyle}>
                <EditUser close={closeModal}></EditUser>
            </Modal>
        </Holder>
    );
}
  
export default User;
  