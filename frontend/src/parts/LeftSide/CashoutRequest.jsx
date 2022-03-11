import styled from 'styled-components';
import all_ok_image from '../../assets/img/all_ok.png';
import cancel_image from '../../assets/img/cancel.png';
import modal_back_image from '../../assets/img/modal_back.png';
import corner_lefttop_image from '../../assets/img/corner_lefttop.png';
import corner_rightbottom_image from '../../assets/img/corner_rightbottom.png';
import modal_logo_image from '../../assets/img/modal_logo.png';
import modal_title_cashoutrequest_image from '../../assets/img/modal_title_cashoutrequest.png';
import modal_desc_cashoutrequest_image from '../../assets/img/modal_desc_cashoutrequest.png';
import modal_top_cashoutrequest_image from '../../assets/img/modal_top_cashoutrequest.png';
import modal_top_sep_line_image from '../../assets/img/modal_top_sep_line.png';
import money_1_image from '../../assets/img/money_1.png';
import money_1_on_image from '../../assets/img/money_1_on.png';
import money_5_image from '../../assets/img/money_5.png';
import money_5_on_image from '../../assets/img/money_5_on.png';
import money_10_image from '../../assets/img/money_10.png';
import money_10_on_image from '../../assets/img/money_10_on.png';
import money_50_image from '../../assets/img/money_50.png';
import money_50_on_image from '../../assets/img/money_50_on.png';
import money_100_image from '../../assets/img/money_100.png';
import money_100_on_image from '../../assets/img/money_100_on.png';


const Holder = styled.div`
    max-width: 890px;
    margin: 30px auto;
    position: relative;
    padding: 30px 40px 40px;
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
    .c-top-left {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 145px;
    }
    .c-bottom-right {
        position: absolute;
        bottom: 0;
        right: 0;
        max-width: 124px;
    }
    .hd-part-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        margin-bottom: 10px;
        .lf-part-wrap {
            display: grid;
            grid-template-columns: 80px auto;
            align-items: center;
        }
        .l_go img {
            width: 80px;
        }
        .ttl-div .m-title {
            margin-bottom: 5px;
            max-height: 36px;
        }
        .ttl-div .desc_ask {
            max-height: 25px;
        }
        .lr-part-wrap img {
            max-height: 155px;
        }
    }
    .hd-part-wrapper::after {
        content: "";
        background-image: url(${modal_top_sep_line_image});;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
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
    .check-account {
        text-align: center;
        border-bottom: 1px solid #321c39;
        padding-bottom: 10px;
        padding-top: 10px;
    }
    .green_text {
        font-family: "malgun","돋움", Seoul, "한강체";
        font-size: 18px;
        font-weight: bold;
        color: green;
    }
    .cashout-account {
        display: grid;
        grid-template-columns: 125px 400px auto;
        grid-gap: 10px;
        border-bottom: 1px solid #321c39;
        padding: 25px 0;
        align-items: center;
    }
    .cashout-amount {
        display: grid;
        grid-template-columns: 125px 150px auto;
        grid-gap: 10px;
        padding: 25px 0;
        align-items: center;
        border-bottom: none;
    }
    .cashout-name {
        display: grid;
        grid-template-columns: 125px 150px auto;
        grid-gap: 10px;
        border-bottom: 1px solid #321c39;
        padding: 25px 0;
        align-items: center;
    }
    .white_strong_text {
        font-family: "malgun","돋움", Seoul, "한강체";
        font-size: 20px !important;
        color: #fff !important;
        font-weight: bold;
        padding-left: 0px !important;
    }
    .cashout-amount-buttons, .cashout-amount-buttons {
        display: flex;
        justify-content: center;
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

function CashoutRequest(props) {
    
    return (
        <Holder>
            <img className="list-bg" src={modal_back_image} />
            <img className="c-top-left" src={corner_lefttop_image} />
            <img className="c-bottom-right" src={corner_rightbottom_image} />
            <div className="relative z-1">
                <div className="hd-part-wrapper">
                    <div className="lf-part-wrap">
                        <a href="#" className="l_go"><img src={modal_logo_image} alt=""/></a>
                        <div className="ttl-div">
                            <img src={modal_title_cashoutrequest_image} alt="" className="m-title"/> <br/>
                            <img src={modal_desc_cashoutrequest_image} alt="" className="desc_ask"/>
                        </div>
                    </div>
                    <div className="lr-part-wrap">
                        <img src={modal_top_cashoutrequest_image} alt=""/>
                    </div>
                </div>
                <form id="cashout-request-modal-form" action="#">
                    <div className="input-r">
                        <label >+ 보유 잔액</label>
                        <span id="current_balance" className="white_strong_text">72,465,000</span>
                    </div>
                    <div className="cashout-amount input-r">
                        <label >+ 출금금액</label>
                        <input type="text" className="white_strong_text" id="cashout_amount" value="" readOnly/>
                        <p><strong className="white_strong_text">원</strong><strong className="green_text">   [최저10만원부터 / 만원단위만 출금가능]</strong></p>
                    </div>
                    <div className="cashout-amount-buttons">
                        <Button className="btn-hover btn-money-cashout" data="1" href="#">
                            <img className="default" src={money_1_image} alt="btn"/>
                            <img className="after-hover" src={money_1_on_image} alt="btn"/>
                        </Button>
                        <Button className="btn-hover btn-money-cashout" data="5" href="#">
                            <img className="default" src={money_5_image} alt="btn"/>
                            <img className="after-hover" src={money_5_on_image} alt="btn"/>
                        </Button>
                        <Button className="btn-hover btn-money-cashout" data="10" href="#">
                            <img className="default" src={money_10_image} alt="btn"/>
                            <img className="after-hover" src={money_10_on_image} alt="btn"/>
                        </Button>
                        <Button className="btn-hover btn-money-cashout" data="50" href="#">
                            <img className="default" src={money_50_image} alt="btn"/>
                            <img className="after-hover" src={money_50_on_image} alt="btn"/>
                        </Button>
                        <Button className="btn-hover btn-money-cashout" data="100" href="#">
                            <img className="default" src={money_100_image} alt="btn"/>
                            <img className="after-hover" src={money_100_on_image} alt="btn"/>
                        </Button>
                    </div>
                    <div className="input-rw">
                        <label >+ 출금비번</label>
                        <input type="password" id="cashout_pin" value="" readOnly/> 
                        <p> </p>
                    </div>
                    <div className="input-r">
                        <label >+ 은행명</label>
                        <input type="text" className="white_strong_text" id="cashout_bank_name" value=""readOnly/>
                    </div>
                    <div className="input-r">
                        <label >+ 계좌번호</label>
                        <input type="text" className="white_strong_text" id="cashout_bank_account_no_str" value="" readOnly/>
                        <input type="hidden" id="cashout_bank_account_no" value=""readOnly/>
                    </div>
                    <div className="input-r">
                        <label >+ 예 금 주</label>
                        <input type="text" className="white_strong_text" id="cashout_bank_account_name" value=""readOnly/>
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
  
export default CashoutRequest;
  