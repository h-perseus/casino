import styled from 'styled-components';

import bg_image from '../../assets/img/b-bg.jpg';

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


function Menu() {
    return (
        <Holder>
            <img src={bg_image} />
            <MenuList>
                <li><a href="#">입금신청</a></li>
                <li><a href="#">출금신청</a></li>
                <li><a href="#">1:1문의</a></li>
                <li><a href="#">베팅목록</a></li>
                <li><a href="#">입출금내역</a></li>
                <li><a href="#">새 쪽지(<span>0</span>)</a></li>
            </MenuList>
        </Holder>
    );
}
  
export default Menu;
  