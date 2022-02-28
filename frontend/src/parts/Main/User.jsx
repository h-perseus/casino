import styled from 'styled-components';
import login_icon_1 from '../../assets/img/login_icon_1.png';
import login_icon_1_on from '../../assets/img/login_icon_1_on.png';
import login_icon_2 from '../../assets/img/login_icon_2.png';
import login_icon_2_on from '../../assets/img/login_icon_2_on.png';

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

function User() {
    return (
        <Holder>
            <ul className="flex justify-end items-center">
                  <li className='text-base text-white'>{ 'account.nick_name'}님 환영합니다.</li>
                  <li className="ml-[10px] text-base text-yellow-300">+ 보유머니 : <span id="profile-credits-display">{'credits'}</span> 원</li>
                  <li className="ml-[15px]">
                      <Button href="#">
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
        </Holder>
    );
}
  
export default User;
  