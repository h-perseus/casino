import styled from 'styled-components';
import Modal from 'react-modal';
import { useState } from 'react';

import all_ok_image from '../../../assets/img/all_ok.png';
import cancel_image from '../../../assets/img/cancel.png';
import back_edit_image from '../../../assets/img/back_edit.png'

const Holder = styled.div`
    padding: 140px 40px 40px;
    max-width: 890px;
    margin: 30px auto;
    position: relative;
    flex-basis: 100%;
    .list-bg{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        max-width: 100%;
        height: 100%;
    }
    .input-r {
        display: grid;
        grid-template-columns: 125px 260px auto;
        grid-gap: 10px;
        border-bottom: 1px solid #321c39;
        padding: 25px 0;
        align-items: center;
        label {
            color: #ce8bec;
            font-size: 14px;
            margin: 0;
        }
        input {
            background: rgba(255,255,255,0);
            border: none;
            height: 32px;
            padding: 0 15px;
            font-size: 14px;
            color: #fff;
            transition: .3s;
        }
    }
    .input-rw {
        display: grid;
        grid-template-columns: 125px 260px auto;
        grid-gap: 10px;
        border-bottom: 1px solid #321c39;
        padding: 25px 0;
        align-items: center;
        label {
            color: #ce8bec;
            font-size: 14px;
            margin: 0;
        }
        input {
            background: #141414;
            border: 1px solid #754783;
            height: 32px;
            padding: 0 15px;
            font-size: 14px;
            color: #fff;
            transition: .3s;
        }
    }
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

function EditUser(props) {
    
    return (
        <Holder>
            <img className="list-bg" src={back_edit_image} />
            <div className="relative z-1">  
                <form action="#">
                    <div className="input-r">
                        <label for="">+ 회원아이디</label>
                        <input type="text" value="chungmugong" readOnly/>
                        <p></p>
                    </div>
                    <div className="input-r">
                        <label for="">+ 이름</label>
                        <input type="text" value="chungmugong 본사" readOnly/>
                        <p></p>
                    </div>
                    <div className="input-rw">
                        <label for="">+ 비밀번호</label>
                        <input type="password" id="profile_password" value="" maxLength="20" readOnly/>
                    </div>
                    <div className="input-rw">
                        <label for="">+ 비밀번호확인</label>
                        <input type="password" id="profile_password_confirmation" value="" maxLength="20" readOnly/>
                    </div>
                    <div className="input-r">
                        <label for="">+ 출금은행</label>
                        <input type="text" id="profile_bank_name" value="" readOnly/>
                        <p></p>
                    </div>
                    <div className="input-r">
                        <label for="">+ 출금예금주명</label>
                        <input type="text" id="profile_bank_account_name" value="" readOnly/>
                    </div>
                    <div className="input-r">
                        <label for="">+  출금계좌번호</label>
                        <input type="text" id="profile_bank_account_no" value="" readOnly/>
                    </div>
                    <div className="input-r">
                        <label for="">+ 전화번호</label>
                        <input type="text" id="profile_phone_number" value="" maxLength="12" readOnly/>
                        <p className="color-gold">
                            계좌가 전송되오니 정확히 입력하세요.</p>
                    </div>

                    <div className="flex justify-center items-center pt-[25px]">
                        <a id="btn-profile-save" className="w-[112px] h-[36px] mr-2" href="#" onClick={props.close}><img src={all_ok_image} alt=""/></a>
                        <a data-dismiss="modal" className="w-[112px] h-[36px]" href="#" onClick={props.close}><img src={cancel_image} alt=""/></a>
                    </div>
                </form>
            </div>
        </Holder>
    );
}
  
export default EditUser;
  