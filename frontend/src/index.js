import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
const io = require("socket.io-client");
window.jQuery = window.$ = $;
window.io = io;
window.baseUrl = 'http://localhost:3000';
window.USERNAME = "아이디";
window.NICKNAME = "이름";
window.MOBILE = "핸드폰번호";
window.BANK_NAME = "출금은행";
window.BANK_ACCOUNT_NAME = "출금예금주명";
window.BANK_ACCOUNT_NO = "출금계좌번호";
window.AMOUNT = "금액";
window.STATUS = "상태";
window.CREATED_AT = "생성일";
window.MANAGE = "관리";
window.DEPOSIT_REQUEST = "입금 요청";
window.WITHDRAW_REQUEST = "출금 요청";
window.CREDITS = "보유 잔액";
window.CONFIRM = "확인";
window.CASHOUT_PIN = "출금비번";
window.CASHOUT = "출금요청";
window.CLOSE = "창닫기";
window.TITLE = "제목";
window.MORE_NOTICE = "목록으로";
window.BANK_REQUEST_INQUIRY = "입금 계좌를 문의 하시겠습니까?";
window.MYPAGE_DETAILS = "내정보관리";
window.REMAINING_POINTS = "잔여 포인트";
window.SWITCH_POINTS = "포인트전환";
window.ENTRANCE = "입장";
window.GO_TO_MAIN_SCREEN = "매인화면으로 이동";
window.TABLE_NOT_AVAILABLE = "서비스 준비중 입니다";
window.WIN = "승";
window.LOSE = "패";
window.TIE = "타이";
window.VOID = "환급";
window.PENDING = "대기";
window.ROOM = "테이블";
window.IN_PROGRESS = "처리중";
window.PLEASE_SELECT_CHIPS = "칩을 먼저 선택하세요";
window.PLEASE_SELECT_BET = "배팅을 선택하세요";
window.CANNOT_LEAVE_ROOM = "게임 진행시 테이블 이동은 불가합니다 게임 종료후 테이블 이동을 하여 주시기 바랍니다.";
window.WARNING = "경고";
window.PLAYER_BANKER_WARNING = "플레이어와 뱅커 동시에 베팅은 불가능합니다";
window.BALANCE_WARNING = "잔액이 부족합니다";
window.LOGIN = "로그인";
window.CREATE_ACCOUNT = "계정 생성";

window.PLAYER_MIN = "플레이어 최소";
window.PLAYER_MAX = "플레이어 최고";
window.BANKER_MIN = "뱅커 최소";
window.BANKER_MAX = "뱅커 최고";
window.PLAYER_PAIR_MIN = "플레이어 페어 최소";
window.PLAYER_PAIR_MAX = "플레이어 페어 최고";
window.BANKER_PAIR_MIN = "뱅커 페어 최소";
window.BANKER_PAIR_MAX = "뱅커 페어 최고";
window.TIE_MIN = "타이 최소";
window.TIE_MAX = "타이 최고";

window.AVAILABLE_AFTER_LOGIN = "로그인 후 이용 가능합니다";
window.LOGIN_ERROR = "로그인정보 오류";
window.REGISTER_COMPLETE = "가입신청 완료 가입승인후 이용 가능하십니다.";
window.NOTICE = "공지사항";
window.CANCEL ="취소";
window.COMPLETE = "완료";
window.VIDEO_DOWNLOAD_COMPLETE = "다운이 완료 되었습니다.";
window.SEND_MESSAGE = "진행";
window.CONVERSION_COMPLETE = "전환완료.";
window.OK = "네";
window.SUBMIT = "제출";
window.CONTENT = "내용";

window.RESET_PASSWORD = "비밀번호 재설정";

window.MASTER = "부본사";
window.AGENT = "본사";
window.SUBAGENT = "총판";
window.PARTNER ="파트너";

window.ACTIVE = "활성";
window.INACTIVE = "휴면";
window.BLOCKED = "계정정블록";
window.LOCKED = "잠김";

window.SUCCESS = "성공";
window.NEW = "신규";
window.YES = "예";
window.NO = "아니오";
window.CLAIMED = "정산마감";
window.LIMIT = "리미트";

window.MEMBER = "회원";
window.UPDATE = "최신 정보";
window.NOT_APPLICABLE = "해당사항이 없습니다";

window.MANAGER = "관리자";

window.FIRST_CHARGE = "첫충전";
window.RECHARGE = "재충전";
window.ACKNOWLEDGEMENT = "승인";
window.ROLLING_COMMISSION = "롤링커미션";
window.LOSING_COMMISSION = "루징커미션";

window.ACCOUNT_DELETE = "선택하신 정보를 삭제하시겠습니까?";
window.REQUEST_CANCEL = "입금요청을 취소하시겠습니까?";
window.REQUEST_CONFIRM_CANCEL = "입금요청이 취소되었습니다.";
window.REQUEST_INSTRUCTION = "이체를 확인하시고 확인 버튼을 눌러주세요";
window.WIDTHRAW_REQUEST_CANCEL = "출금요청을 취소하시겠습니까?";
window.WIDTHRAW_REQUEST_CONFIRM_CANCEL = "출금요청이 취소되엇습니다.";
window.DEPOSIT_SEND = "입금계좌정보를 보내시겠습니까?";
window.NEW_PASSWORD = "신규비밀번호";
window.WITHDRAWL_EXPENSES = "출금 비번";

window.SWITCH_POINTS_ASK = "포인트 ";
window.SWITCH_POINTS_ASK_CONTINUATION = " 를 전환 하시겠습니까?";

window.WITHDRAW_ASK = "해당 금액 ";
window.WITHDRAW_ASK_CONTINUATION = " 을 출금하시겟습니까?";

window.DEPOSIT_ASK = "해당 금액 ";
window.DEPOSIT_ASK_CONTINUATION = " 을 입금하시겟습니까?";

window.STOP_BETTING = "배팅이 마감되었습니다";
window.MULTIPLE_LOGIN = "다른장소에서 이미 로그인이 되어있습니다";
window.T60_CHANGE_TABLE = "60회차 이후에는 배팅을 하실수 없습니다.<br/>다른 테이블 이용 부탁드립니다";
window.TABLE_LIMIT_EXCEED = "테이블배팅한도가 초과되었습니다. 배팅은 인정되지 않습니다.";

window.INVALID = "무효";
window.ROLLING_RESERVE_BALANCE = "롤링 보유 잔액";
window.LOOSE_HOLDING_BALANCE = "루징 보유 잔액";
window.WATCH = "관전";
window.BETTING_FAILED = "betting 실패";
window.CONNECTION_ERROR = "접속에러";

window.TABLE_EDITED = "서비스 준비중입니다.";
window.CONNECTION_FAILURE = "접속장애로 인하여 잠시후에 이용 바랍니다.";
window.VIEW_MESSAGE = "메시지보기";
window.READ_MESSAGE = "확인";
window.UNREAD_MESSAGE = "미확인";

window.SELECT_BETTING_LIMIT = "배팅한도를 선택하여 주세요";
window.CHECK_NOTE = "쪽지를  확인하여 주시기 바랍니다";
window.LOGOUT_5TIMES = "5회이상 대기상태여서 자동로그아웃 됩니다 회원님의 로그인보안을 위하여 다시 로그인하여주십시오.";
window.WON = "₩";
window.COMMISSION_TRANSFER = "포인트전환";

window.PLAYER_WIN = "플레이어 윈";
window.BANKER_WIN = "뱅커 윈";

window.PLEASE_LOGIN = "로그인 해주세요!";
window.REGISTRATION_COMPLETE = "가입 신청이 완료 되었습니다... 5분내로 가입 확인 전화가 갈것입니다. 전화를 받으셔야 가입승인 이루어집니다.";
window.ENROLMENT_COMPLETE = "가입신청 완료 가입승인후 이용 가능하십니다.";
window.CONFIRM_INQUIRY = "가입신청을 승인 하시겠습니까?";

window.CRITICAL = "주위";
window.NORMAL = "정상";

window.INACTIVE_DOMAIN_MESSAGE = "도메인을 비활성화 하시겠습니까?";
window.INACTIVE_GAME_PROVIDER_MESSAGE = "이 게임 제공 업체를 비활성화 하시겠습니까?";

window.BET_OVER = "배팅 마감되었습니다.";
window.BET_DEADLINE = "배팅마감";
window.BET_END = "배팅종료";
window.TOTAL = "회차진행중";
window.CANCEL_BET = "배팅취소";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
