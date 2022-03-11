import styled from 'styled-components';

import bg_image from '../../assets/img/b-bg.jpg';
import CashinRequest from './CashinRequest';
import CashoutRequest from './CashoutRequest';
import Customer from './Customer';
import CashInOut from './CashInOut';
import Note from './Note';
import Bet from './Bet';

import Modal from 'react-modal';
import { useState } from 'react';

const Holder = styled.div`
    position: relative;
    margin: 20px;
    padding: 30px;
    margin-bottom: 50px;
    img{
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
    }
`;
const MenuList = styled.ul`
    text-align: right;
    li:not(:last-child) {
        margin-bottom: 13px;
    }
    li a {
        &:hover {
            color: #ffff;
        }
        color: #ab6fd1;
        display: inline-block;
        font-size: 16px;
        text-align: right;
        transition: .3s;
        span{
            color: #ff9c01;
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


function Menu() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState('');

    const openModal = (type) => {
        setIsOpen(true);
        setModalType(type);
    }
    const closeModal = () => {
        setIsOpen(false);
        setModalType('');
    }
    const renderModalComponent = () => {
        switch (modalType) {
            case 'cashinrequest':
                return <CashinRequest close={closeModal}></CashinRequest>;
            case 'cashoutrequest':
                return <CashoutRequest close={closeModal}></CashoutRequest>;
            case 'customer':
                return <Customer close={closeModal}></Customer>;
            case 'bethistory':
                return <Bet close={closeModal}></Bet>;
            case 'cashinout':
                return <CashInOut close={closeModal}></CashInOut>;
            case 'note':
                return <Note close={closeModal}></Note>;
        }

    }
    return (
        <Holder>
            <img src={bg_image} />
            <MenuList>
                <li><a href="#" onClick={() => {openModal('cashinrequest')}}>입금신청</a></li>
                <li><a href="#" onClick={() => {openModal('cashoutrequest')}}>출금신청</a></li>
                <li><a href="#" onClick={() => {openModal('customer')}}>1:1문의</a></li>
                <li><a href="#" onClick={() => {openModal('bethistory')}}>베팅목록</a></li>
                <li><a href="#" onClick={() => {openModal('cashinout')}}>입출금내역</a></li>
                <li><a href="#" onClick={() => {openModal('note')}}>새 쪽지(<span>0</span>)</a></li>
            </MenuList>
            <Modal isOpen={modalIsOpen}
            style={modalStyle}>
                {renderModalComponent()}
            </Modal>
        </Holder>
    );
}
  
export default Menu;
  