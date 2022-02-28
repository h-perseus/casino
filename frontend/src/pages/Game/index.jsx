import styled from 'styled-components';
import logo_image from '../../assets/img/logo.png';
import btn_1 from '../../assets/img/btn-1.png';
import btn_hover_1 from '../../assets/img/btn-hover-1.png';
import btn_2 from '../../assets/img/btn-2.png';
import btn_hover_2 from '../../assets/img/btn-hover-2.png';
import btn_3 from '../../assets/img/btn-3.png';
import btn_hover_3 from '../../assets/img/btn-hover-3.png';
import btn_4 from '../../assets/img/btn-4.png';
import btn_hover_4 from '../../assets/img/btn-hover-4.png';
import btn_5 from '../../assets/img/btn-5.png';
import btn_hover_5 from '../../assets/img/btn-hover-5.png';

import okada_image from '../../assets/img/okada.png';
import evolution_image from '../../assets/img/evolution.png';
import cagayan_image from '../../assets/img/cagayan.png';
import rwmanila from '../../assets/img/rwmanila-logo.png';
import oriental from '../../assets/img/oriental.png';
import microgaming_image from '../../assets/img/microgaming.png';
import solaire_image from '../../assets/img/solaire.png';
import stotsenberg_image from '../../assets/img/stotsenberg.png';
import loader_gif from '../../assets/img/loader.gif'

import s1_image from '../../assets/img/s1.png';
import sh1_image from '../../assets/img/sh1.png';
import s2_image from '../../assets/img/s3.png';
import sh2_image from '../../assets/img/sh3.png';
import s3_image from '../../assets/img/s3.png';
import sh3_image from '../../assets/img/sh3.png';
import s4_image from '../../assets/img/s4.png';
import sh4_image from '../../assets/img/sh4.png';
import s5_image from '../../assets/img/s5.png';
import sh5_image from '../../assets/img/sh5.png';
import s6_image from '../../assets/img/s6.png';
import sh6_image from '../../assets/img/sh6.png';

import bet_ok from '../../assets/img/bet_ok.png';
import bet_ok_on from '../../assets/img/bet_ok_on.png';
import bet_re from '../../assets/img/bet_re.png';
import bet_re_on from '../../assets/img/bet_re_on.png';
import bet_no from '../../assets/img/bet_no.png';
import bet_no_on from '../../assets/img/bet_no_on.png';


import dot_image from '../../assets/img/dot.png';
import currency_image from '../../assets/img/currency.png';
import score_board_image from '../../assets/img/score-board.png';
import pattern_image from '../../assets/img/pattern.png';

import gt_b_e_image from '../../assets/img/gt_b_e.png';
import gt_b_i_image from '../../assets/img/gt_b_i.png';
import gt_b_f_image from '../../assets/img/gt_b_f.png';
import gt_b_c_image from '../../assets/img/gt_b_c.png';
import blue_circle_image from '../../assets/img/blue_circle.png';
import blue_dot_image from '../../assets/img/blue_dot.png';
import gt_b_a_image from '../../assets/img/gt_b_a.png';
import red_circle_image from '../../assets/img/red_circle.png';
import red_dot_image from '../../assets/img/red_dot.png';
import blue_line_image from '../../assets/img/blue_line.png';
import red_line_image from '../../assets/img/red_line.png';

import '../../assets/css/custom.css';
import '../../assets/css/midas.css';
import '../../assets/css/bead.css';
import '../../assets/css/game.css';
import '../../assets/css/lobby.css';
import '../../assets/css/custom-venetian.css';

import { useEffect } from 'react';

require('../../assets/js/js-cookie');
require('../../assets/js/jquery.timer');
require('../../assets/js/bootstrap.min');
require('../../assets/js/howler');
require('../../assets/js/helper');
require('../../assets/js/provider');
require('../../assets/js/broadcast');
require('../../assets/js/utils/game');
require('../../assets/js/utils/render');
require('../../assets/js/galaxy/player-game-galaxy');

const Holder = styled.div`
    overflow: hidden;
    display: grid;
    justify-content: center;
    min-height: 100vh;
    .header-area {
        grid-template-columns: 210px auto 400px;
        display: grid;
        grid-gap: 15px;
        align-items: center;
        padding: 10px;
        padding-bottom: 0;
        box-shadow: inset 0px 18px 12px -10px #292a2c;
    }
    .page-wrapper {
        border: 1px solid #622658;
    }
    .header-middle-part .data:not(:last-child) {
        margin-right: 5px;
    }
    .data {
        color: #e892ff;
        background-color: #292A2C;
        border-radius: 30px;
        padding: 5px 15px;
        font-size: 14px;
        font-weight: bold;
        span.value {
            color: #fff;
            display: inline-block;
            margin-left: 4px;
        }
    }
    .dash-area {
        position: relative;
        display: grid;
        grid-template-columns: .55fr 2fr 1fr;
        grid-gap: 10px;
        padding: 10px;
    }
    .left-part {
        height: 100%;
        background: linear-gradient(110deg, #212229, #101114);
        padding: 10px;
    }
    .oriantal-logo {
        min-height: auto;
        margin-top: 5px;
        margin-bottom: 10px;
        padding: 7px;
    }

    .oriantal-logo {
        min-height: auto;
        margin-top: 5px;
        margin-bottom: 10px;
        
    }
    .oriantal-logo {
        border: 2px solid #3D3243;
        background: linear-gradient(110deg, #101114, #212229);
        text-align: center;
        padding: 15px;
        margin: 5px;
        min-height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        min-height: auto;
        margin-top: 5px;
        margin-bottom: 10px;
        padding: 7px;
    }
    .info-rw {
        padding-top: 4px;
        padding-bottom: 4px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-left: 28px;
        padding-right: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        p{ 
            font-size: 14px;
            color: #e892ffd1;
            font-weight: bold;
        }
    }
    .property-name {
        position: relative;
    }
    .property-name::after {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        background-image: url(${dot_image});;
        top: 50%;
        transform: translateY(-50%);
        left: -25px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
    .property-value {
        color: #fff !important;
        text-align: right;
    }
    .btn-rw {
        padding: 10px 0;
        a {
            background: #292a2c;
            width: 100%;
            display: block;
            color: #fff;
            text-transform: uppercase;
            font-size: 15px;
            text-align: center;
            padding: 10px;
            border-radius: 30px;
            font-weight: bold;
            transition: .3s;
        }
    }
    .balance-rw {
        margin-top: 11px;
        background: linear-gradient(to top, #7726ab, #AF34FC);
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 10px;
        margin-top: 21px;
        .property-name {
            font-size: 15px;
            color: #fff;
            text-transform: uppercase;
            padding-left: 24px;
            line-height: 24px;
        }
        .property-name::after {
            content: "";
            position: absolute;
            transform: translateY(-50%);
            left: -25px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            background-image: url(${currency_image});
            left: -5px;
            width: 20px;
            height: 20px;
            top: calc(50% + 1px);
        }
        p.property-value {
            color: #FFF614 !important;
            font-weight: bold;
        }
    }
    .stamp-list {
        padding-bottom: 10px;
        bottom: 5px;
        padding: 15px;
        margin-left: 1px;
        li:not(:last-child) {
            margin-right: 6px;
        }
        li a {
            display: inline-block;
            position: relative;
            transform: translateX(2px);
        }
    }
    .link-list.pge-main-login li:not(:first-child) {
        margin-left: 10px;
    }
    .link-list.pge-main-login li {
        font-size: 14px;
    }
    .list-box-wrapper {
        grid-template-columns: 2fr 1fr;
        grid-gap: 30px;
    }
    .list-twin-table {
        grid-column: 1/3;
    }
    .header-area {
        grid-template-columns: 210px auto 400px;
    }
    .oriantal-logo {
        min-height: auto;
        margin-top: 5px;
        margin-bottom: 10px;
        padding: 7px;
    }
    .oriantal-logo img {
        max-width: 100px;
    }
    .info-rw {
        padding-top: 4px;
        padding-bottom: 4px;
    }
    .btn-rw {
        padding: 10px 0;
    }
    .balance-rw {
        margin-top: 11px;
        min-width: 194.317px;
        padding: 10px;
    }
    .balance-rw .property-name {
        font-size: 15px;
    }
    .info-rw p {
        font-size: 14px;
    }
    .link-list.pge-main-login li:not(:first-child) {
        margin-left: 10px;
    }
    .list-box-wrapper {
        grid-template-columns: 2fr 1fr;
        grid-gap: 30px;
    }
    .list-twin-table {
        grid-column: 1/3;
    }

    .bet{
        z-index:99999;
        display:none;
        position: absolute;
        top: 10px;
        left: 10px;
        width: calc(100% - 20px);
        font-family: 'NanumSquareRound','Malgun Gothic','Dotum','Gulim',sans-serif;
        font-size: 16px;
        color: #FFF614;
        font-weight: bold;
        align-items: center;
        line-height: 36px;
        overflow-x: hidden;
        overflow-y: auto;
        text-align: right;
        background-color: #131313;
        height: calc(100% - 20px);
    }
    .disabled{
        background: rgba(255,255,255,0)
    }
    .dash-area{
        position:relative;
    }
    .bet_table {
        position: absolute;
        z-index: 1000;
        top: 0px;
        left: 0px;
        align-items: center;
        height: 100%;
        width:100%;
        overflow-x:hidden;
        overflow-y:auto;
        background-color: #212229;
    }
    .video-part{
        width:100%;
        height:100%;
        padding: 10px;
        background: #212229;
    }
    #video-section{
        margin: 0 !important;
        position: relative;
        border: none;
        border-image: none !important;
        #timer-holder {
            width: 12%;
            position: absolute;
        }
    }
    .left-part{
        height:100%;
    }
    .right-part{
        position:relative;
    }
    .stamp-list{
        position:relative !important;
    }
    .betting_cont{
        width:100%;
        padding: 10px;
    }
    #game-table{
        background-image: url(${score_board_image});
        background-size: cover;
        margin:0 !important;
    }
    #bet-player-pair-table{
        width:27%;
    }
    .game-button_item {
        border-color:rgb(255,255,255) !important;
        border-image: none !important;
        height: 130px;
        background: #0000008a;
        border: 3px solid;
        border-radius: 0;
    }
    #bet-tie-table{
        width:46%;
        max-width: 46% !important;
    }
    .hover-ppair:hover {
        background: #2e5d7b;
    }
    .hover-tie:hover {
        background: #007e3c;
    }
    .hover-bpair:hover {
        background: #7b2929;
    }
    .hover-p:hover {
        background: #003150;
    }
    .hover-b:hover {
        background: #520000;
    }
    .game-button_item:hover {
        background-image: url(${pattern_image});
    }
    #bet-tie-table > .game-button_item {
        border-color:rgb(255,255,255) !important;
        border-image: none !important;
        height: 130px;
        border-left:none;
        border-right:none;
    }
    #bet-banker-pair-table{
        width:27%;
    }
    #bet-banker-pair-table > .game-button_item {
        border-color:rgb(255,255,255) !important;
        border-image: none !important;
        height: 130px;
    }
    #bet-player-table > .game-button_item {
        border-color:rgb(255,255,255) !important;
        border-image: none !important;
        height: 150px;
        border-top:none;
        border-right:none;
    }
    #bet-banker-pair-table,#bet-player-pair-table{
        position:relative;
        width:27%;
        float:left;
    }
    #bet-tie-table{
        position:relative;
        width:46%;
        float:left;
    }
    #bet-banker-table, #bet-player-table{
        position:relative;
        width:50%;
        float:left;
    }
    #bet-banker-table > .game-button_item {
        border-color:rgb(255,255,255) !important;
        border-image: none !important;
        height: 150px;
        border-top:none;
    }
    .text-nickname{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 110px;
    }
    #scoreboard{
        margin:0 !important;
    }
    .viewport-wrapper{
        padding: 0 !important;
    }
    .game-room-prediction_body{
        text-align:center;
    
    }
    .game-room-prediction {
        > * {
            display: flex;
            justify-content: center;
        }
        border-color: #343a40!important;
    }
    #scoreboard{
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        flex-wrap: wrap;
    }
    .game-room_info_item {
        font-size: 15px;
        color: white;
    }
    .close_2{
        position: absolute;
        top: 13px;
        right: 10px;
    }
    .close_1 {
        position: absolute;
        top: 10px;
        right: 5%;
    }
    .t_text_1 {
        font-family: 'NanumSquareRound','Malgun Gothic','Dotum','Gulim',sans-serif;
        font-size: 14px;
        color: #fff;
        font-weight: bold;
    }
    .t_text_2 {
        font-family: 'NanumSquareRound','Malgun Gothic','Dotum','Gulim',sans-serif;
        font-size: 24px;
        color: #fff;
        font-weight: bold;
    }
    .midas-table_item{
        width: 60px !important;
    }
    #standard-table{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(305px, 1fr));
        grid-gap: 1rem;
    }
    .list-inline {
        margin-left: 0px !important;
    }
    .p-5 {
        padding-left: 5px !important;
        padding-right: 5px !important;
        padding: 5px !important;
        padding-top: 3rem !important;
    }
    #btn-reload-iframe {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background: transparent;
        border: none;
        color: white;
        font-size: 25px;
        border-radius: 50%;
    }
    #btn-plus-iframe {
        position: absolute;
        bottom: 60px;
        right: 10px;
        background: transparent;
        border: none;
        color: white;
        font-size: 25px;
        border-radius: 50%;
    }
    #btn-minus-iframe {
        position: absolute;
        bottom: 110px;
        right: 10px;
        background: transparent;
        border: none;
        color: white;
        font-size: 25px;
        border-radius: 50%;
    }
    .stamp-link-g-wrapper {
        display: grid;
        grid-template-columns: 2fr 1.25fr 1.25fr;
        grid-gap: 5px;
        align-items: center;
        margin-top: 12px;
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

function Game() {

    useEffect(() => {
        window['PlayerGame'].init();
    }, [])

    return (
        <Holder>
            <div className='announcement w-100 text-white h-[15px]'>
                <marquee></marquee>
            </div>
            <div className="viewport-wrapper" >
                <div className="container" style={{maxWidth: '100%'}}>
                    <div className="page-wrapper">
                        <header className="header-area">
                            <div className="logo-part">
                                <a href="#" className="logo"><img src={logo_image} /></a>
                            </div>
                            <div className="header-middle-part d-1280-none flex items-center justify-center">
                                <p className="data">배팅한도 : <span className="value">1,000 ~ 100,000</span></p>
                                <p className="data">패어한도 : <span className="value">1,001 ~ 60,000</span></p>
                                <p className="data">타이한도 : <span className="value">1,000 ~ 100,000</span></p>
                            </div>
                            <div className="header-right">
                                <ul className="link-list flex items-center justify-end">
                                    <li>
                                        <Button className="btn_changetable" href="#">
                                            <img className="default" src={btn_1} />
                                            <img className="default" src={btn_hover_1} />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button className="btn_fullscreen" href="#">
                                            <img className="default" src={btn_2} />
                                            <img className="default" src={btn_hover_2} />
                                        </Button>
                                        <Button className="btn_window hidden" href="#" >
                                            <img className="default" src={btn_5} />
                                            <img className="default" src={btn_hover_5} />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button id="btn-bet-history" href="#">
                                            <img className="default" src={btn_3} />
                                            <img className="default" src={btn_hover_3} />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button className="go_lobby" href="#">
                                            <img className="default" src={btn_4} />
                                            <img className="default" src={btn_hover_4} />
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </header>
                        <main>
                            <div className="dash-area">
                                <div className="left-helper">
                                    <div className="left-part">
                                        <div className="oriantal-logo">
                                            <img src={okada_image} />
                                        </div>
                                        <div className="information-table">
                                            <div className="info-rw">
                                                <p className="property-name">Nick Name</p>
                                                <p className="property-value">{ 'account.nick_name' }</p>
                                            </div>
                                            <div className="info-rw">
                                                <p className="property-name">Table No.</p>
                                                <p id="room-name" className="property-value">{ 'baccarat.table_name' }</p>
                                            </div>
                                            <div className="info-rw">
                                                <p className="property-name">Shoe No.</p>
                                                <p id="shoe-count" className="property-value">{ 'baccarat.shoe_no' }</p>
                                            </div>
                                            <div className="info-rw">
                                                <p className="property-name">Game No.</p>
                                                <p id="game-no" className="property-value">{ 'baccarat.game_no'}</p>
                                            </div>
                                            <div className="btn-rw">
                                                <a href="#">Betting Information</a>
                                            </div>
                                            <div className="info-rw">
                                                <p className="property-name">Bet</p>
                                                <p id="bet-amount" className="property-value">0</p>
                                            </div>
                                            <div className="info-rw">
                                                <p className="property-name">Result</p>
                                                <p id="winning-amount" className="property-value">0</p>
                                            </div>
                                            <div className="balance-rw">
                                                <p className="property-name">Balance</p>
                                                <p id="profile-credits" className="property-value">{ '72,465,500' }</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="middle-part">
                                    <div id="video-section" className="live-video_body video video-part">
                                    <div className="video-holder">
                                        <div className="movie_pnl">
                                        <iframe id="stream_holder" name="holder" scrolling="no" className="video_iframe"></iframe>
                                        <button id="btn-reload-iframe"><i className="fa fa-refresh"></i></button>
                                        <button id="btn-plus-iframe"><i className="fa fa-plus"></i></button>
                                        <button id="btn-minus-iframe"><i className="fa fa-minus"></i></button>
                                        </div>
                                    </div>
                                    <div id="timer-holder" className="col-sm-2 col-xs-2 text-center no-padding">
                                        <div id="timer-container" className="background-gradient-dark-inverse">
                                        <span className="text-white" id="timer">0</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="right-part">
                                    <div className="score-board">
                                        <div id="game-table" className="flex flex-wrap game-button_body bet-table text-center betting_cont">
                                        <div className="holder betting_cont">
                                            <div id="bet-player-pair-table" className="no-padding btn_p_pair">
                                            <div className="game-button_item inner_shadow p-5 b-tl-10 hover-ppair">
                                                <h3 className="pair-text text-xl text-white" >플.패어</h3>
                                                <p className="pair-text text-xl text-white"  id="bet-player-pair-amount">0</p>
                                                <ul id="bet-player-pair" className="list-inline bet-table chips-1 bet-list player-pair-deck"></ul>
                                                <img src="{% static 'images/game/x5.png' %}" className="x_bet-player-pair remove-bet-upper hidden"
                                                     alt="x5"/>
                                            </div>
                                            </div>
                                            <div id="bet-tie-table" className="no-padding btn_tie">
                                            <div className="game-button_item inner_shadow p-5 hover-tie">
                                                <h3 className="tie-text text-3xl text-green" >타이</h3>
                                                <p className="tie-text text-white text-3xl"  id="bet-tie-amount">0</p>
                                                <ul id="bet-tie" className="list-inline bet-table chips-2 bet-list tie-deck"></ul>
                                                <img src="{% static 'images/game/x5.png' %}" className="x_bet-tie remove-bet-upper hidden"
                                                    alt="x5"/>
                                            </div>
                                            </div>
                                            <div id="bet-banker-pair-table" className="no-padding btn_b_pair">
                                            <div className="game-button_item inner_shadow p-5 b-tr-10 hover-bpair">
                                                <h3 className="pair-text text-xl text-white" >뱅.패어</h3>
                                                <p className="pair-text text-xl text-white"  id="bet-banker-pair-amount">0</p>
                                                <ul id="bet-banker-pair" className="list-inline bet-table chips-3 bet-list banker-pair-deck"></ul>
                                                <img src="{% static 'images/game/x5.png' %}" className="x_bet-banker-pair remove-bet-upper hidden"
                                                    alt="x5"/>
                                            </div>
                                            </div>

                                            <div className="clearfix"></div>

                                            <div id="bet-player-table" className="player-table no-padding btn_player">
                                            <div className="game-button_item inner_shadow p-5 b-bl-10 hover-p">
                                                <h3 className="player-text text-4xl text-blue-300" >플레이어</h3>
                                                <p className="player-text text-white text-3xl"  id="bet-player-amount">0</p>
                                                <ul id="bet-player" className="list-inline bet-table chips-4 bet-list player-deck"></ul>
                                                <img src="{% static 'images/game/x5.png' %}" className="x_bet-player remove-bet-bottom hidden"
                                                     alt="x5"/>
                                            </div>
                                            </div>

                                            <div id="bet-banker-table" className="no-padding btn_banker">
                                            <div className="game-button_item inner_shadow p-5 b-br-10 hover-b">
                                                <h3 className="player-text text-4xl text-pink-300" >뱅커&nbsp;&nbsp;</h3>
                                                <p  className="player-text text-white text-3xl"  id="bet-banker-amount">0</p>
                                                <ul id="bet-banker" className="list-inline bet-table chips-5 bet-list banker-deck"></ul>
                                                <img src="{% static 'images/game/x5.png' %}" className="x_bet-banker remove-bet-bottom hidden"
                                                     alt="x5"/>
                                            </div>
                                            </div>
                                        </div>

                                        <div id="table-error" className="alert hidden alert-danger p-5 bet-table-error">
                                            <center><h4></h4></center>
                                        </div>
                                        <div id="chips-section">
                                            <ul id="chip-list" className="stamp-list flex items-center justify-between">
                                            <li className="game-chip_item">
                                                <Button className="bet-chips b-1 p-0" href="#">
                                                    <img className="default" src={s1_image} />
                                                    <img className="after-hover" src={sh1_image} />
                                                </Button>
                                            </li>
                                            <li className="game-chip_item">
                                                <Button className="bet-chips b-2 p-0" href="#">
                                                    <img className="default" src={s2_image} />
                                                    <img className="after-hover" src={sh2_image} />
                                                </Button>
                                            </li>
                                            <li className="game-chip_item">
                                                <Button className="bet-chips b-3 p-0" href="#">
                                                    <img className="default" src={s3_image} />
                                                    <img className="after-hover" src={sh3_image} />
                                                </Button>
                                            </li>
                                            <li className="game-chip_item">
                                                <Button className="bet-chips b-4 p-0" href="#">
                                                    <img className="default" src={s4_image} />
                                                    <img className="after-hover" src={sh4_image} />
                                                </Button>
                                            </li>
                                            <li className="game-chip_item">
                                                <Button className="bet-chips b-5 p-0" href="#">
                                                    <img className="default" src={s5_image} />
                                                    <img className="after-hover" src={sh5_image} />
                                                </Button>
                                            </li>
                                            <li className="game-chip_item">
                                                <Button className="bet-chips b-6 p-0" href="#">
                                                    <img className="default" src={s6_image} />
                                                    <img className="after-hover" src={sh6_image} />
                                                </Button>
                                            </li>
                                            </ul>    
                                        </div>  
                                    </div>
                                </div>
                                <div className="stamp-link-g-wrapper">
                                    <Button id="btn-bet-deal" href="#">
                                        <img className="default" src={bet_ok} />
                                        <img className="after-hover" src={bet_ok_on} />
                                    </Button>
                                    <Button id="btn-bet-rebet" href="#">
                                        <img className="default" src={bet_re} />
                                        <img className="after-hover" src={bet_re_on} />
                                    </Button>
                                    <Button id="btn-bet-clear" href="#">
                                        <img className="default" src={bet_no} />
                                        <img className="after-hover" src={bet_no_on} />
                                    </Button>
                                </div>
                                {/* <div id="block-chips" className="overlay">
                                    <div className="bet-message block" >
                                    <h1 className='text-red-300' >배팅종료</h1>
                                    </div>
                                    <div id="bet-status" className="bet-status">
                                    <h1></h1>
                                    </div>
                                </div> */}
                                <div className="bet_table hidden">
                                    <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                                    <tbody>
                                        <tr>
                                        <td height="50" align="center" className="t_text_1">이동하실 테이블을 선택하세요.</td>
                                        </tr>
                                        <tr>
                                            <td className="vegas_loader">
                                                <img src={loader_gif} />
                                            </td>
                                        </tr>      
                                        <tr>
                                            <td align="center">
                                                <div id="standard-table max-h-[475px] overflow-auto text-white" >
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="close_2"><a href="#"><img src="{% static 'css/bora/assets/img/close.png' %}" width="17" height="21" alt=""/></a></div>
                                </div>                  
                                </div>
                                <div className="bet hidden" >
                                <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                                    <tbody>
                                    <tr>
                                        <td height="60" align="center" className="t_text_2">베팅내역</td>
                                    </tr>
                                    <tr>
                                        <td align="center"><table width="90%" border="1" cellPadding="0" cellSpacing="0" className="t_text_1 bg-[#1F1F1F]">
                                        <thead>
                                            <tr>
                                            <td align="center bg-[#3B2042]" >#</td>
                                            <td className="w-[60px] bg-[#3B2042]" align="center" >{'room'}</td>
                                            <td className="w-[60px] bg-[#3B2042]" align="center" >{'Shoe'}</td>
                                            <td className="w-[120px] bg-[#3B2042]" align="center" >{'bet'}</td>
                                            <td align="center bg-[#3B2042]" >{'player'}</td>
                                            <td align="center bg-[#3B2042]" >{'banker'}</td>
                                            <td align="center bg-[#3B2042]" >{'tie'}</td>
                                            <td align="center bg-[#3B2042]" >{'player_pair'}</td>
                                            <td align="center bg-[#3B2042]" >{'banker_pair'}</td>
                                            <td align="center bg-[#3B2042]" >{'result'}</td>
                                            <td align="center bg-[#3B2042]" >{'status'}</td>
                                            <td align="center bg-[#3B2042]" >{'winning_amount'}</td>
                                            <td align="center bg-[#3B2042]" >{'previous_balance'}</td>
                                            <td align="center bg-[#3B2042]" >{'current_balance'}</td>
                                            <td className="w-[170px] bg-[#3B2042]" align="center" >{'created_at'}</td>
                                            </tr>
                                        </thead>
                                        <tbody id="bet-history-content"></tbody>
                                        </table></td>
                                    </tr>
                                    <tr>
                                        <td align="center">
                                        <table className="table-pagination m-0 main_1" width="200" border="0" cellPadding="0" cellSpacing="0" >
                                        </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="close_1">
                                    <a href="#">
                                    <img className="default" src="{% static 'css/bora/assets/img/betlist_bu.png' %}" />
                                    <img className="after-hover" src="{% static 'css/bora/assets/img/betlist_bu_on.png' %}" />
                                    </a>
                                </div>
                                </div>    
                            </div>
                            <div id="scoreboard" className="row bacarrat_scoreboard">
                                <div style={{width:'37%'}} className="no-padding">
                                    <div className="pnl_1 border-gray">
                                        <span
                                            style={{position: 'absolute', top: '115px', opacity: 0.2, fontSize: '24px', marginLeft: '50%', transform: 'translate(-50%)', zIndex: 9999, color: 'black'}}>
                                        <b>BEAD PLATE</b>
                                        </span>
                                    </div>
                                </div>
                                <div id="scoreboard-small" style={{width:'50%'}} className="no-padding">
                                    <div className="pnl_2 border-gray">
                                        <span
                                            style={{position: 'absolute', top: '35px', opacity: 0.2, fontSize: '20px', marginLeft: '50%', transform: 'translate(-50%)', zIndex: 9999, color: 'black'}}>
                                        <b>BIG ROAD</b>
                                        </span>
                                    </div>
                            
                                    <div className="pnl_3 border-gray">
                                        <span
                                            style={{position: 'absolute', top: '12px', opacity: 0.2, fontSize: '20px', marginLeft: '50%', transform: 'translate(-50%)', zIndex: 9999, color: 'black'}}>
                                        <b>BIG EYE ROAD</b>
                                        </span>
                                    </div>
                            
                                    <div style={{ width: '50%', float: 'left' }} className="no-padding">
                                    <div className="pnl_4 border-gray">
                                        <span
                                            style={{position: 'absolute', top: '15px', opacity: 0.2, fontSize: '16px', marginLeft: '50%', transform: 'translate(-50%)', zIndex: 9999, color: 'black'}}>
                                            <b>SMALL ROAD</b>
                                        </span>
                                    </div>
                                    </div>
                            
                                    <div style={{width: '50%', float: 'left'}} className="no-padding">
                                    <div className="pnl_5 border-gray">
                                        <span
                                            style={{position: 'absolute',  left: '50%', top: '15px', opacity: 0.2, fontSize: '16px', width:'fit-content', transform: 'translate(-50%)', zIndex: 9999, color: 'black'}}>
                                            <b>COCKROACH ROAD</b>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                <div id="game-room" style={{width:'13%'}} className="game-room_body no-padding">
                                    <div className="game-room-prediction_body">
                                    <div id="player-probe"
                                        className="game-room-prediction prediction-player no-padding background-wood  inset-shadow"
                                        style={{background: '#1e1e925e'}}>
                                        <div className="">
                                            <img src={gt_b_e_image} alt="" className="bead-count"/>
                                        </div>
                                        <div className="">
                                            <img src={blue_circle_image} alt="" className="bead-count"/>
                                        </div>
                                        <div className="">
                                            <img src={blue_dot_image} alt="" className="bead-count"/>
                                        </div>
                                        <div className="">
                                            <img src={red_line_image} alt="" className="bead-count"/>
                                        </div>
                                    </div>
                                    <div id="banker-probe" className="game-room-prediction no-padding background-wood  inset-shadow"
                                        style={{background: '#b3161663'}}>
                                        <div className="">
                                            <img src={gt_b_a_image} alt="" className="bead-count"/>
                                        </div>
                                        <div className="">
                                            <img src={red_circle_image} alt="" className="bead-count"/>
                                        </div>
                                        <div className="">
                                            <img src={red_dot_image} alt="" className="bead-count"/>
                                        </div>
                                        <div className="">
                                            <img src={blue_line_image} alt="" className="bead-count"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="game-room_info">
                                    <div className="game-room_info_item">
                                        <div className="game-room_info_item_text">
                                        <img src={gt_b_e_image} alt="player" className="img-responsive"/>
                                        <span style={{color: 'rgb(90,63,253)'}}>PLAYER</span>
                                        </div>
                                        <div id="player-score">0</div>
                                    </div>
                            
                                    <div className="game-room_info_item">
                                        <div className="game-room_info_item_text">
                                        <img src={gt_b_a_image} alt="player" className="img-responsive"/>
                                        <span style={{color: 'rgb(213,84,84)'}}>BANKER</span>
                                        </div>
                                        <div id="banker-score">0</div>
                                    </div>
                            
                                    <div className="game-room_info_item">
                                        <div className="game-room_info_item_text">
                                        <img src={gt_b_i_image} alt="player" className="img-responsive"/>
                                        <span style={{color: 'rgb(86,229,147)'}}>TIE</span>
                                        </div>
                                        <div id="tie-score">0</div>
                                    </div>
                            
                                    <div className="game-room_info_item">
                                        <div className="game-room_info_item_text">
                                        <img src={gt_b_f_image} alt="player" className="img-responsive"/>
                                        <span style={{color: 'rgb(93,160,253)'}}>P.PAIR</span>
                                        </div>
                                        <div id="player-pair-score">0</div>
                                    </div>
                            
                                    <div className="game-room_info_item">
                                        <div className="game-room_info_item_text">
                                        <img src={gt_b_c_image} alt="player" className="img-responsive"/>
                                        <span style={{color: 'rgb(213,84,84)'}}>B.PAIR</span>
                                        </div>
                                        <div id="banker-pair-score">0</div>
                                    </div>
                                    <div className="game-room_info_item">
                                        <div className="game-room_info_item_text">
                                        <span className="gold-color">TOTAL</span>
                                        </div>
                                        <div id="total-score">0</div>
                                    </div>
                                    </div>
                                </div>  
                            </div>   
                        </main>
                    </div>
                </div>
            </div>
            <input id="game-provider-id" type="hidden" value="9" />
            <input id="game-provider-table-id" type="hidden" value="898" />
            <input id="game-provider-max-bet-id" type="hidden" value="11"/>
            <input id="game-provider-channel-id" type="hidden" value="c" />
            <input id="os-platform-detect" type="hidden" value="desktop" />
            <input id="minimum-bet" type="hidden" value="1000" />
            <input id="maximum-bet" type="hidden" value="100000" />
            <input id="player_pair_min" type="hidden" value="1001" />
            <input id="player_pair_max" type="hidden" value="60000" />
            <input id="banker_pair_min" type="hidden" value="0" />
            <input id="banker_pair_max" type="hidden" value="0" />
            <input id="tie_min" type="hidden" value="1000" />
            <input id="tie_max" type="hidden" value="100000" />
            <input id="nickname" type="hidden" value="chung" />
            <input id="account_id" type="hidden" value="2" />
            <input type="hidden" id="account_level" value="1" />
            <input id="video_url" type="hidden" value="http%3A%2F%2Fphl.starstudio.live%2Fvideo.php%3FtableType%3DOK%26tableNo%3D1" />
            <input id="table_name" type="hidden" value="OK-1" />
            <input type="hidden" id="app-game-next-edition" value="1" />
            <input type="hidden" id="app-game-shoe-limit" value="1" />
            <input type="hidden" id="_ip" value="http://139.180.203.83:8890/" />
            <input type="hidden" id="_lang" value="kr" />
            <input type="hidden" id="app_company" value="VENETIAN" />
            <input type="hidden" id="_company" value="VENETIAN" />
            <input type="hidden" id="cnt_no_bet_ok" value="3" />
            <input type="hidden" id="first_betting_yn" value="N" />
        </Holder>
    );
}
  
export default Game;
  