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


import $ from 'jquery';
import {Howl, Howler} from 'howler';
import Cookies from 'js-cookie'
const io = require("socket.io-client");

const baseUrl = 'http://localhost:3000'; //'http://139.180.203.83';
const USERNAME = "아이디";
const NICKNAME = "이름";
const MOBILE = "핸드폰번호";
const BANK_NAME = "출금은행";
const BANK_ACCOUNT_NAME = "출금예금주명";
const BANK_ACCOUNT_NO = "출금계좌번호";
const AMOUNT = "금액";
const STATUS = "상태";
const CREATED_AT = "생성일";
const MANAGE = "관리";
const DEPOSIT_REQUEST = "입금 요청";
const WITHDRAW_REQUEST = "출금 요청";
const CREDITS = "보유 잔액";
const CONFIRM = "확인";
const CASHOUT_PIN = "출금비번";
const CASHOUT = "출금요청";
const CLOSE = "창닫기";
const TITLE = "제목";
const MORE_NOTICE = "목록으로";
const BANK_REQUEST_INQUIRY = "입금 계좌를 문의 하시겠습니까?";
const MYPAGE_DETAILS = "내정보관리";
const REMAINING_POINTS = "잔여 포인트";
const SWITCH_POINTS = "포인트전환";
const ENTRANCE = "입장";
const GO_TO_MAIN_SCREEN = "매인화면으로 이동";
const TABLE_NOT_AVAILABLE = "서비스 준비중 입니다";
const WIN = "승";
const LOSE = "패";
const TIE = "타이";
const VOID = "환급";
const PENDING = "대기";
const ROOM = "테이블";
const IN_PROGRESS = "처리중";
const PLEASE_SELECT_CHIPS = "칩을 먼저 선택하세요";
const PLEASE_SELECT_BET = "배팅을 선택하세요";
const CANNOT_LEAVE_ROOM = "게임 진행시 테이블 이동은 불가합니다 게임 종료후 테이블 이동을 하여 주시기 바랍니다.";
const WARNING = "경고";
const PLAYER_BANKER_WARNING = "플레이어와 뱅커 동시에 베팅은 불가능합니다";
const BALANCE_WARNING = "잔액이 부족합니다";
const LOGIN = "로그인";
const CREATE_ACCOUNT = "계정 생성";

const PLAYER_MIN = "플레이어 최소";
const PLAYER_MAX = "플레이어 최고";
const BANKER_MIN = "뱅커 최소";
const BANKER_MAX = "뱅커 최고";
const PLAYER_PAIR_MIN = "플레이어 페어 최소";
const PLAYER_PAIR_MAX = "플레이어 페어 최고";
const BANKER_PAIR_MIN = "뱅커 페어 최소";
const BANKER_PAIR_MAX = "뱅커 페어 최고";
const TIE_MIN = "타이 최소";
const TIE_MAX = "타이 최고";

const AVAILABLE_AFTER_LOGIN = "로그인 후 이용 가능합니다";
const LOGIN_ERROR = "로그인정보 오류";
const REGISTER_COMPLETE = "가입신청 완료 가입승인후 이용 가능하십니다.";
const NOTICE = "공지사항";
const CANCEL ="취소";
const COMPLETE = "완료";
const VIDEO_DOWNLOAD_COMPLETE = "다운이 완료 되었습니다.";
const SEND_MESSAGE = "진행";
const CONVERSION_COMPLETE = "전환완료.";
const OK = "네";
const SUBMIT = "제출";
const CONTENT = "내용";

const RESET_PASSWORD = "비밀번호 재설정";

const MASTER = "부본사";
const AGENT = "본사";
const SUBAGENT = "총판";
const PARTNER ="파트너";

const ACTIVE = "활성";
const INACTIVE = "휴면";
const BLOCKED = "계정정블록";
const LOCKED = "잠김";

const SUCCESS = "성공";
const NEW = "신규";
const YES = "예";
const NO = "아니오";
const CLAIMED = "정산마감";
const LIMIT = "리미트";

const MEMBER = "회원";
const UPDATE = "최신 정보";
const NOT_APPLICABLE = "해당사항이 없습니다";

const MANAGER = "관리자";

const FIRST_CHARGE = "첫충전";
const RECHARGE = "재충전";
const ACKNOWLEDGEMENT = "승인";
const ROLLING_COMMISSION = "롤링커미션";
const LOSING_COMMISSION = "루징커미션";

const ACCOUNT_DELETE = "선택하신 정보를 삭제하시겠습니까?";
const REQUEST_CANCEL = "입금요청을 취소하시겠습니까?";
const REQUEST_CONFIRM_CANCEL = "입금요청이 취소되었습니다.";
const REQUEST_INSTRUCTION = "이체를 확인하시고 확인 버튼을 눌러주세요";
const WIDTHRAW_REQUEST_CANCEL = "출금요청을 취소하시겠습니까?";
const WIDTHRAW_REQUEST_CONFIRM_CANCEL = "출금요청이 취소되엇습니다.";
const DEPOSIT_SEND = "입금계좌정보를 보내시겠습니까?";
const NEW_PASSWORD = "신규비밀번호";
const WITHDRAWL_EXPENSES = "출금 비번";

const SWITCH_POINTS_ASK = "포인트 ";
const SWITCH_POINTS_ASK_CONTINUATION = " 를 전환 하시겠습니까?";

const WITHDRAW_ASK = "해당 금액 ";
const WITHDRAW_ASK_CONTINUATION = " 을 출금하시겟습니까?";

const DEPOSIT_ASK = "해당 금액 ";
const DEPOSIT_ASK_CONTINUATION = " 을 입금하시겟습니까?";

const STOP_BETTING = "배팅이 마감되었습니다";
const MULTIPLE_LOGIN = "다른장소에서 이미 로그인이 되어있습니다";
const T60_CHANGE_TABLE = "60회차 이후에는 배팅을 하실수 없습니다.<br/>다른 테이블 이용 부탁드립니다";
const TABLE_LIMIT_EXCEED = "테이블배팅한도가 초과되었습니다. 배팅은 인정되지 않습니다.";

const INVALID = "무효";
const ROLLING_RESERVE_BALANCE = "롤링 보유 잔액";
const LOOSE_HOLDING_BALANCE = "루징 보유 잔액";
const WATCH = "관전";
const BETTING_FAILED = "betting 실패";
const CONNECTION_ERROR = "접속에러";

const TABLE_EDITED = "서비스 준비중입니다.";
const CONNECTION_FAILURE = "접속장애로 인하여 잠시후에 이용 바랍니다.";
const VIEW_MESSAGE = "메시지보기";
const READ_MESSAGE = "확인";
const UNREAD_MESSAGE = "미확인";

const SELECT_BETTING_LIMIT = "배팅한도를 선택하여 주세요";
const CHECK_NOTE = "쪽지를  확인하여 주시기 바랍니다";
const LOGOUT_5TIMES = "5회이상 대기상태여서 자동로그아웃 됩니다 회원님의 로그인보안을 위하여 다시 로그인하여주십시오.";
const WON = "₩";
const COMMISSION_TRANSFER = "포인트전환";

const PLAYER_WIN = "플레이어 윈";
const BANKER_WIN = "뱅커 윈";

const PLEASE_LOGIN = "로그인 해주세요!";
const REGISTRATION_COMPLETE = "가입 신청이 완료 되었습니다... 5분내로 가입 확인 전화가 갈것입니다. 전화를 받으셔야 가입승인 이루어집니다.";
const ENROLMENT_COMPLETE = "가입신청 완료 가입승인후 이용 가능하십니다.";
const CONFIRM_INQUIRY = "가입신청을 승인 하시겠습니까?";

const CRITICAL = "주위";
const NORMAL = "정상";

const INACTIVE_DOMAIN_MESSAGE = "도메인을 비활성화 하시겠습니까?";
const INACTIVE_GAME_PROVIDER_MESSAGE = "이 게임 제공 업체를 비활성화 하시겠습니까?";

const BET_OVER = "배팅 마감되었습니다.";
const BET_DEADLINE = "배팅마감";
const BET_END = "배팅종료";
const TOTAL = "회차진행중";
const CANCEL_BET = "배팅취소";

const Inquiry = {

    selectedUserId: 0,
    lookUpData: [],
    bankLookUpData: [],
  
    init: function () {
      var self = this;
      self.api.get.all();
      self.api.get.banks();
      $('#li-account').addClass('active');
    },
  
    renderAccount: function (data) {
      var self = this;
      self.lookUpData = data;
      let elemHtml = '';
  
      $.each(data, function (key, val) {
  
        var status = val.status;
  
        if (status === 'ACTIVE') {
          status = `<div class="label label-table label-success">${ACTIVE}</div>`;
        } else if (status === 'INACTIVE') {
          status = `<div class="label label-table label-warning">${INACTIVE}</div>`;
        } else if (status === 'TERMINATED') {
          status = `<div class="label label-table label-danger">${BLOCKED}</div>`;
        } else {
          status = `<div class="label label-table label-default">${LOCKED}</div>`;
        }
  
        var manageButton = '';
  
        if ($('#is_admin').val() || $('#is_operator').val()) {
          manageButton = `
                      <button type="button" title="승인하기" class="approve-${val.id} btn btn-success btn-outline btn-circle btn-xs m-r-5"><i class="ti-check"></i></button>
                      <button type="button" title="입금계좌관리" class="setting-${val.id} btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-settings"></i></button>
                      <button type="button" title="출금계좌관리" class="bank-${val.id} btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-credit-card"></i></button>
                <button type="button" title="삭제" class="remove-${val.id} btn btn-danger btn-outline btn-circle btn-xs m-r-5"><i class="ti-trash"></i></button>`;
        }
  
        var distributorName = (val.account.player_hierarchy[0].distributor) ? val.account.player_hierarchy[0].distributor.nickname : '';
        var agentName = (val.account.player_hierarchy[0].agent) ? val.account.player_hierarchy[0].agent.nickname : '';
        var subAgentName = (val.account.player_hierarchy[0].sub_agent) ? val.account.player_hierarchy[0].sub_agent.nickname : '';
  
        elemHtml += `
                  <tr>
                      <td>${distributorName}</td>
                      <td>${agentName}</td>
                      <td>${subAgentName}</td>
                      <td>${val.account.nickname}</td>
                      <td>${val.username}</td>
                      <td>${val.account.mobile}</td>
                      <td>${val.account.referred_code}</td>
                      <td>${val.account.ip_address}</td>
                      <td>${val.account.device}</td>
                      <td>${status}</td>
                      <td><span class="text-muted"><i class="fa fa-clock-o"></i> ${val.created_at}</span></td>
                      <td>${manageButton}</td>
                  </tr>`;
      });
      $('#inquiry-content').append(elemHtml);
  
      self.addEvents();
    },
  
    renderTablePagination: function (data) {
      var self = this;
      $('#table-pagination ul').remove();
      $('#table-pagination').append(data);
  
      $.each($('#table-pagination	li a'), function (key, val) {
        var id = $(val).html();
        $(val).attr('href', '#');
        $(val).addClass('page-button-' + id + ' pages');
      });
  
      self.addEvents();
    },
  
    addEvents: function () {
      var self = this;
  
      $('button[class*=approve-]').unbind('click').bind('click', function (e) {
        e.preventDefault();
  
        var id = $(this).attr('class').split(' ')[0].split('-')[1];
        Helper.confirm.show('Confirm', 'Do you want to approve the account request?', function () {
          self.api.post.activate(id);
        });
      });
  
      $('button[class*=bank-]').unbind('click').bind('click', function (e) {
        e.preventDefault();
  
        self.selectedUserId = $(this).attr('class').split(' ')[0].split('-')[1];
        var data = self.getSelectedData(self.selectedUserId);
  
        $('#profile-bank_name').val(data.account.bank_name);
        $('#profile-bank_account_name').val(data.account.bank_account_name);
        $('#profile-bank_account_no').val(data.account.bank_account_no);
  
        $('#update-bank-modal-form > div > div').removeClass('has-error');
        $('#profile-bank_name, #profile-bank_account_name, #profile-bank_account_no').next().html('');
        $('#update-bank-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('button[class*=setting-]').unbind('click').bind('click', function (e) {
        e.preventDefault();
  
        self.selectedUserId = $(this).attr('class').split(' ')[0].split('-')[1];
        var data = self.getSelectedData(self.selectedUserId);
  
        // $('#profile-bank_name').val(data.account.bank_name);
        // $('#profile-bank_account_name').val(data.account.bank_account_name);
        // $('#profile-bank_account_no').val(data.account.bank_account_no);
        //
        // $('#update-bank-modal-form > div > div').removeClass('has-error');
        // $('#profile-bank_name, #profile-bank_account_name, #profile-bank_account_no').next().html('');
        $('#inquiry-banks-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('#btn-reload').unbind('click').bind('click', function (e) {
        e.preventDefault();
        $('#search').val('');
        self.api.get.all();
      });
  
      $('#search').unbind('keydown').bind('keydown', function (e) {
        if (e.keyCode == 13) {
          self.api.get.all();
        }
      });
  
      $('#btn-search').unbind('click').bind('click', function (e) {
        e.preventDefault();
        self.api.get.all();
      });
  
      $('button[class*=remove-]').unbind('click').bind('click', function (e) {
        e.preventDefault();
  
        var id = $(this).attr('class').split(' ')[0].split('-')[1];
        Helper.confirm.show(CONFIRM, ACCOUNT_DELETE, function () {
          self.api.post.deactivate(id);
        });
      });
  
      $('a[class*=page-button-]').unbind().bind('click', function (e) {
        e.preventDefault();
        self.page = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);
        self.api.get.all(self.page);
      });
  
      $('tr[class*=inquiry_bank-]').unbind().bind('click', function (e) {
        e.preventDefault();
        const bank_id = parseInt($(this).attr('class').split(' ')[0].split('-')[1]);
        self.api.post.setBankId(bank_id);
      });
    },
  
    getSelectedData: function (user_id) {
      var self = this;
      var index = 0;
  
      $.each(self.lookUpData, function (key, val) {
        if (val.id == user_id) {
          index = key;
        }
      });
  
      return self.lookUpData[index];
    },
  
    showErrors: function (errors, prefix) {
      var self = this;
  
      if (typeof prefix == 'undefined')
        prefix = '';
  
      $.each(errors, function (key, val) {
        $('#' + prefix + key).parent().addClass('has-error');
        $('#' + prefix + key).next().html(val);
      });
    },
    renderBanks: function (data) {
      var self = this;
  
      self.bankLookUpData = data;
  
      $('#notice-content tr').remove();
      var elemHtml = '';
  
      $.each(data, function (key, val) {
        var status = val.status;
  
        if (status == 'ACTIVE') {
          status = '<div class="label label-table label-success">' + ACTIVE + '</div>';
        } else {
          status = '<div class="label label-table label-default">' + INACTIVE + '</div>';
        }
  
        elemHtml += `
                  <tr class="inquiry_bank-${val.id} cursor">
            <td><a href="javascript:void(0)">${(key += 1)}</a></td>
            <td>${Helper.text_truncate(val.account_name, 10, '...')}</td>
            <td>${Helper.text_truncate(val.user_name, 10, '...')}</td>
            <td>${Helper.text_truncate(val.bank_name, 10, '...')}</td>
            <td>${Helper.text_truncate(val.bank_no, 10, '...')}</td>
            <td>${status}</td>
            <td><span class="text-muted"><i class="fa fa-clock-o"></i> ${val.created_at}</span> </td>				
                  </tr>`;
      });
      $('#inquiry-banks-content').html(elemHtml);
  
      self.addEvents();
    },
  
    api: {
      get: {
        all: function (page) {
          var self = Inquiry;
  
          $('#inquiry-content tr').remove();
  
          if (typeof page == 'undefined') {
            page = 1;
          }
  
          var params = {
            'page': page,
            'limit': 15,
            'role_id': self.roleId
          };
  
          if ($('#search-nickname').val()) {
            params['nickname'] = $('#search-nickname').val();
          }
          if ($('#search-referral-code').val()) {
            params['referral_code'] = $('#search-referral-code').val();
          }
  
          params['role_id'] = 7;
          params['status'] = 'INACTIVE';
          params['search'] = $('#search').val().trim();
  
          $.ajax({
            url: baseUrl + '/admin/account/all',
            method: 'GET',
            data: params,
            beforeSend: function () {
  
            },
            success: function (resp) {
              self.renderAccount(resp.data.data);
              self.renderTablePagination(resp.links);
            },
            error: function (resp) {
  
            },
            complete: function () {
  
            }
          });
        },
        banks: function (page) {
          const self = Inquiry;
  
          $.ajax({
            url: baseUrl + '/admin/bank/all',
            method: 'GET',
            beforeSend: function () {
            },
            success: function (resp) {
              self.renderBanks(resp.data);
            },
            error: function (resp) {
            },
            complete: function () {
            }
          });
        },
      },
  
      post: {
        setBankId: function (bank_id) {
          var self = Inquiry;
          $.ajax({
            url: baseUrl + '/admin/account/set_bank',
            method: 'POST',
            data: {
              'bank_id': bank_id,
              'account_id': self.selectedUserId,
              '_token': $('#_token').val()
            },
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                $('#inquiry-banks-modal').modal('toggle');
                Helper.notify('Success', '입금계좌가 설정되었습니다');
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
        deactivate: function (user_id) {
          var self = Inquiry;
  
          $.ajax({
            url: baseUrl + '/admin/account/deactivate/' + user_id,
            method: 'GET',
            beforeSend: function () {
            },
            success: function (resp) {
              Helper.notify('Success', 'Account was successfully deactivated.');
              Helper.confirm.hide();
              self.api.get.all();
            },
            error: function (resp) {
            },
            complete: function () {
            }
          });
        },
  
        activate: function (user_id) {
          var self = Inquiry;
  
          $.ajax({
            url: baseUrl + '/admin/account/activate/' + user_id,
            method: 'GET',
            beforeSend: function () {
  
            },
            success: function (resp) {
              Helper.notify('Success', 'Profile was successfully updated');
  
              var inquiryCount = parseInt($('.account_total > span:last').html()) ? parseInt($('.account_total > span:last').html()) : 0;
              inquiryCount -= 1;
  
              if (inquiryCount <= 0) {
                $('.account_total > span:last').html('').hide();
              } else {
                $('.account_total > span:last').html(inquiryCount).show();
              }
  
              var inquiryCount = parseInt($('.account_inquiry > span:last').html()) ? parseInt($('.account_inquiry > span:last').html()) : 0;
              inquiryCount -= 1;
  
              if (inquiryCount <= 0) {
                $('.account_inquiry > span:last').html('').hide();
              } else {
                $('.account_inquiry > span:last').html(inquiryCount).show();
              }
  
              self.api.get.all();
            },
            error: function (resp) {
            },
            complete: function () {
            }
          });
        }
      }
    }
};

var Message = {

	lookUpData : [],
	messageId : 0,

	init : function() {
		var self = this;
		$('#li-announcement').addClass('active');
		self.api.get.messages();
	},

	addEvents : function() {
		var self = this;

		$('#all').unbind('change').bind('change', function(e) {
			e.preventDefault();
			if($(this).prop('checked')) {
				$('#agent-select, #distributor-select, #player-select').prop('disabled', true);
			}
			else {
				$('#agent-select, #distributor-select, #player-select').prop('disabled', false);
			}
		});

		$('#btn-send').unbind('click').bind('click', function(e) {
			e.preventDefault();
			self.api.post.create();
		});

		$('#btn-new-message').unbind('click').bind('click', function(e) {
			e.preventDefault();
			$('#new-message-modal').modal('toggle');
			$('#new-message-modal-form > div > div > div').removeClass('has-error');
			$('#new-message-modal-form')[0].reset();
			$('#subject, #message').next().html('');
			$('#all').prop('checked', false);
			$('#agent-select, #distributor-select, #player-select').prop('disabled', false);
			$('#new-message-modal').modal({
			    backdrop: 'static',
				keyboard: false
			});
		});
	},

	renderMessage : function(data) {
		var self = this;

		self.lookUpData = data;

		$('#message-content tr').remove();

		$.each(data, function(key, val) {
			var elemHtml = '<tr>'
		                 +      '<td>'+ val.subject+'</td>'
		                 +      '<td>'+ val.message+'</td>'
		                 +      '<td><span class="text-muted"><i class="fa fa-clock-o"></i> '+ val.created_at +'</span> </td>'
		                 +  '</tr>';

			$('#message-content').append(elemHtml);
		});

		self.addEvents();
	},

	getSelectedData : function(id) {
		var self = this;
		var index = 0;

		$.each(self.lookUpData, function(key, val) {
			if(val.id == id) {
				index = key;
			}
		});

		return self.lookUpData[index];
	},

	showErrors : function(errors, prefix) {
		var self = this;

		if(typeof prefix == 'undefined') {
			prefix = '';
		}

		$.each(errors, function(key, val) {
			$('#'+prefix+key).parent().addClass('has-error');
			$('#'+prefix+key).next().html(val);
		});
	},

	api : {
		get : {
			messages : function(page) {
				var self = Message;

				$.ajax({
					url : baseUrl + '/admin/message/all',
					method : 'GET',
					beforeSend : function() {

					},
					success : function(resp) {
						self.renderMessage(resp.data.data);
					},
					error : function(resp) {

					},
					complete : function() {

					}
				});
			}
		},

		post : {
			create : function() {
				var self = Message;

				$.ajax({
					url : baseUrl + '/admin/message/create',
					method : 'POST',
					data : {
						'distributor_id' : $('#distributor-select').val(),
						'agent_id' : $('#agent-select').val(),
						'player_id' : $('#player-select').val(),
						'subject' : $('#subject').val().trim(),
						'message' : $('#message').val().trim(),
						'all' : ($('#all').is(':checked')) ? 1 : 0,
						'_token' : $('#_token').val()
					},
					beforeSend : function() {
						$('#btn-send').attr('disabled', 'disabled').html('Processing...');
					},
					success : function(resp) {
						if(resp.success) {
							$('#new-message-modal').modal('toggle');
							$('#new-message-modal-form > div > div > div').removeClass('has-error');
							$('#new-message-modal-form')[0].reset();
							$('#subject, #message').next().html('');
							self.api.get.messages();
							Helper.notify('Success', 'Message was successfull sent');
						}
					},
					error : function(resp) {
						self.showErrors(resp.responseJSON.errors);
						$('#btn-send').removeAttr('disabled').html('Send');
					},
					complete : function() {
						$('#btn-send').removeAttr('disabled').html('Send');
					}
				});
			}
		}
	}
};

const TableMonitoring = {

    lookUpData: [],
    lookUpRoom: [],
    lookUpSocket: [],
    lookUpBets: [],
  
    dt: null,
    totalRooms: 0,
    totalPlayers: 0,
    totalBets: 0,
  
    init: function () {
      const self = this;
    },
  
    joinRoom: function (data) {
      var self = this;
      self.prepareData(data);
  
      $.each(self.lookUpRoom, function (key, val) {
        var manageButton = '';
  
        if (!$('.' + val.room).length) {
          manageButton = '<button type="button" class="edit-' + val.room + ' btn btn-danger btn-outline btn-circle btn-xs m-r-5"><i class="ti-trash"></i></button>'
            + '<button type="button" class="limit-' + val.room + ' btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-pencil"></i></button>';
  
          var elemHtml = '<tr class="' + val.room + '">'
            + '<td>' + val.room + '</td>'
            + '<td class="players">' + val.players + '</td>'
            + '<td class="bets">' + Helper.format.number.withComma(val.bet) + '</td>'
            + '<td>' + manageButton + '</td>'
            + '</tr>';
  
          $('#monitoring-content').append(elemHtml);
        } else {
          $('.' + val.room + ' td.players').html(val.players);
          $('.' + val.room + ' td.bets').html(Helper.format.number.withComma(val.bet));
        }
      });
  
      self.addEvents();
    },
  
    leaveRoom: function (data) {
      var self = this;
      //$('.' + data.socket_id.substr(-11)).remove();
  
      console.log('leaving : ' + data.socket_id);
  
      setTimeout(function () {
        var socket_id = data.socket_id;
        var room = self.getRoomSocket(socket_id);
        self.deleteRoomSocket(room, socket_id);
  
        self.totalPlayers--;
        $('#total-players').html(self.totalPlayers);
      }, 3000);
    },
  
    kickPlayer: function (id, socket_id) {
      var self = this;
      var data = {
        socket_id: socket_id
      };
      self.leaveRoom(data);
      Broadcast.kickPlayer(id);
    },
  
    renderPlayerInRoom: function (room) {
      var self = this;
      var data = self.lookUpRoom[self.getRoom(room)];
  
      $('.modal-title').html('ROOM : ' + room);
  
      $('#player-content tr').remove();
  
      $.each(data.socket_id, function (key, val) {
        var player = self.lookUpBets[self.getLookUpBetIndex(val)];
  
        var elemHtml = '<tr class="player-' + player.id + '">'
          + '<td>' + player.nickname + '</td>'
          + '<td>' + Helper.format.number.withComma(player.bet) + '</td>'
          + '<td><button type="button" class="remove-' + player.id + '|' + val + ' btn btn-danger btn-outline btn-circle btn-xs m-r-5"><i class="ti-trash"></i></button></td>'
        +'</tr>';
  
        $('#player-content').append(elemHtml);
      });
  
      self.addEvents();
    },
  
    addEvents: function () {
      var self = this;
  
      $('button[class*=remove-').unbind('click').bind('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('class').split(' ')[0].split('-')[1].split('|')[0];
        var socket_id = $(this).attr('class').split(' ')[0].split('-')[1].split('|')[1];
        Helper.confirm.show('Kick Player', 'Do you want to kick the player out of the table?', function () {
          $('.player-' + id).fadeOut();
          self.kickPlayer(id, socket_id);
        })
      });
  
      $('button[class*=edit-').unbind('click').bind('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('class').split(' ')[0].split('edit-')[1];
        console.log(id);
  
        self.renderPlayerInRoom(id);
        $('#player-modal').modal({
          'backdrop': 'static',
          'keyboard': false
        });
      });
  
      $('button[class*=limit-').unbind('click').bind('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('class').split(' ')[0].split('edit-')[1];
  
        $('#limit-modal').modal({
          'backdrop': 'static',
          'keyboard': false
        });
      });
    },
  
    prepareData: function (data) {
      var self = this;
  
      if (self.lookUpData.length == 0) {
        self.lookUpData.push(data);
  
        self.lookUpRoom.push({
          'room': data.room,
          'players': 1,
          'bet': data.bet,
          'socket_id': []
        });
  
        self.lookUpRoom[0]['socket_id'].push(data.socket_id);
        self.lookUpSocket.push(data.room + '|' + data.socket_id);
  
        $('#total-players').html(1);
        $('#total-bets').html(0);
  
        self.totalBets = 0;
        self.totalPlayers = 1;
      } else {
        if (self.checkRoom(data) && self.checkRoomSocket(data)) {
          var roomIndex = self.getRoom(data);
          self.lookUpRoom[roomIndex]['players'] += 1;
          self.lookUpRoom[roomIndex]['bet'] += data.bet;
          self.lookUpRoom[roomIndex]['socket_id'].push(data.socket_id);
          self.lookUpSocket.push(data.room + '|' + data.socket_id);
  
          self.totalPlayers++;
        } else {
          if (!self.checkRoom(data)) {
            self.lookUpRoom.push({
              'room': data.room,
              'players': 1,
              'bet': data.bet,
              'socket_id': []
            });
  
            var roomIndex = self.getRoom(data);
            self.lookUpRoom[roomIndex]['socket_id'].push(data.socket_id);
            self.lookUpSocket.push(data.room + '|' + data.socket_id);
  
            self.totalPlayers++;
          } else {
            // Update Bets
            self.updateLookUpBets(data.socket_id, data.nickname, data.bet, data.id);
            self.updateBetByRoomSocket(data.room, data.socket_id, data.bet);
          }
        }
      }
  
      self.computeTotalBet();
  
      $('#total-players').html(self.totalPlayers);
      $('#total-bets').html(Helper.format.number.withComma(self.totalBets));
    },
  
    computeTotalBet: function (data) {
      var self = this;
      self.totalBets = 0;
  
      $.each(self.lookUpData, function (key, val) {
        self.totalBets += val.bet;
      });
    },
  
    checkExistingData: function (data) {
      var self = this;
      var retval = false;
  
      $.each(self.lookUpData, function (key, val) {
        if (val.nickname == data.nickname) {
          retval = true;
        }
      });
  
      return retval;
    },
  
    getExistingIndex: function (data) {
      var self = this;
      var id = 0;
  
      $.each(self.lookUpData, function (key, val) {
        if (val.nickname == data.nickname) {
          id = key;
        }
      });
  
      return id;
    },
  
    checkRoom: function (data) {
      var self = this;
      var id = 0;
      var retval = false;
  
      $.each(self.lookUpRoom, function (key, val) {
        if (val.room == data.room) {
          id = key;
          retval = true;
        }
      });
  
      return retval;
    },
  
    checkRoomSocket: function (data) {
      var self = this;
      var id = 0;
      var retval = false;
  
      $.each(self.lookUpRoom, function (key, val) {
        if (val.room == data.room) {
          id = key;
          retval = true;
        }
      });
  
      // Check Socket Id
      if (retval) {
        $.each(self.lookUpRoom[id].socket_id, function (key, val) {
          if (val == data.socket_id) {
            retval = false;
          }
        });
      }
  
      return retval;
    },
  
    getRoom: function (data) {
      var self = this;
      var id = 0;
  
      $.each(self.lookUpRoom, function (key, val) {
        if (val.room == data.room) {
          id = key;
        }
      });
  
      return id;
    },
  
    getRoomSocket: function (socket_id) {
      var self = this;
      var id = 0;
      var room = null;
  
      $.each(self.lookUpSocket, function (key, val) {
        var s_room = val.split('|')[0];
        var s_socket_id = val.split('|')[1];
  
        if (s_socket_id == socket_id) {
          room = s_room;
        }
      });
  
      return room;
    },
  
    deleteRoomSocket: function (room, socket_id) {
      var self = this;
      var id = 0;
  
      $.each(self.lookUpRoom, function (key, val) {
        if (val.room == room) {
          id = key;
        }
      });
  
      $.each(self.lookUpRoom[id].socket_id, function (key, val) {
        if (val == socket_id) {
          self.lookUpRoom[id].socket_id.splice(key, 1);
          self.lookUpRoom[id].players -= 1;
        }
      });
    },
  
    updateBetByRoomSocket: function (room, socket_id, bet) {
      var self = this;
      var id = 0;
  
      $.each(self.lookUpRoom, function (key, val) {
        if (val.room == room) {
          id = key;
        }
      });
  
      var total = 0;
      var player = 0;
  
      $.each(self.lookUpRoom[id].socket_id, function (key, val) {
        var betId = self.getLookUpBetIndex(val);
        total += self.lookUpBets[betId].bet;
        player++;
      });
  
      self.lookUpRoom[id].players = player;
      self.lookUpRoom[id].bet = total;
    },
  
    updateLookUpBets: function (socket_id, nickname, bet, id) {
      var self = this;
      var retval = false;
  
      $.each(self.lookUpBets, function (key, val) {
        if (val.socket_id == socket_id) {
          self.lookUpBets[key].bet = bet;
          retval = true;
        }
      });
  
      if (!retval) {
        self.lookUpBets.push({
          'id': id,
          'socket_id': socket_id,
          'nickname': nickname,
          'bet': bet
        });
      }
    },
  
    getLookUpBetIndex: function (socket_id) {
      var self = this;
      var id = 0;
  
      $.each(self.lookUpBets, function (key, val) {
        if (val.socket_id == socket_id) {
          id = key;
        }
      });
  
      return id;
    }
};

const BankRequest = {
    selectedUserId: 0,
    bankLookUpData: [],
    bankRequestLookUpData: [],
    page: 1,
  
    init: function () {
      var self = this;
      self.api.get.all();
      self.api.get.banks();
    },
  
    renderBankRequest: function (data) {
      var self = this;
      self.lookUpData = data;
  
      $('#bank-content tr').remove();
  
      $.each(data, function (key, val) {
  
        var bank = val;
        var val = val.player;
        var status = val.status;
  
        if (status == 'ACTIVE') {
          status = '<div class="label label-table label-success">' + ACTIVE + '</div>';
        } else if (status == 'INACTIVE') {
          status = '<div class="label label-table label-warning">' + INACTIVE + '</div>';
        } else if (status == 'TERMINATED') {
          status = '<div class="label label-table label-danger">' + BLOCKED + '</div>';
        } else {
          status = '<div class="label label-table label-default">' + LOCKED + '</div>';
        }
  
        var manageButton = '';
  
        if ($('#is_admin').val() || $('#is_operator').val()) {
          manageButton = `
            <button type="button" title="승인" class="approve-${bank.id} btn btn-success btn-outline btn-circle btn-xs m-r-5"><i class="ti-check"></i></button>'
            <button type="button" title="입금계좌관리" class="setting-${val.id} btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-settings"></i></button>
            <button type="button" title="삭제" class="remove-${bank.id} btn btn-danger btn-outline btn-circle btn-xs m-r-5"><i class="ti-trash"></i></button>`;
  
        }
  
        var distributorName = (val.player_hierarchy[0].distributor) ? val.player_hierarchy[0].distributor.nickname : '';
        var agentName = (val.player_hierarchy[0].agent) ? val.player_hierarchy[0].agent.nickname : '';
        var subAgentName = (val.player_hierarchy[0].sub_agent) ? val.player_hierarchy[0].sub_agent.nickname : '';
  
        const elemHtml = `<tr>
          <td>${distributorName}</td>
          <td>${agentName}</td>
          <td>${subAgentName}</td>
          <td>${val.nickname}</td>
          <td>${val.user.username}</td>
          <td>${val.bank_id ? val.bank_id.account_name : ''}</td>
          <td>${val.mobile}</td>
          <td>${val.referred_code}</td>
          <td>${val.ip_address}</td>
          <td>${val.device}</td>
          <td>${status}</td>
          <td><span class="text-muted"><i class="fa fa-clock-o"></i> ${val.created_at}</span></td>
          <td>${manageButton}</td>
          </tr>`;
  
        $('#bank-content').append(elemHtml);
      });
  
      self.addEvents();
    },
  
    renderTablePagination: function (data) {
      var self = this;
      $('#table-pagination ul').remove();
      $('#table-pagination').append(data);
  
      $.each($('#table-pagination	li a'), function (key, val) {
        var id = $(val).html();
        $(val).attr('href', '#');
        $(val).addClass('page-button-' + id + ' pages');
      });
  
      self.addEvents();
    },
  
    renderBanks: function (data) {
      var self = this;
  
      self.bankLookUpData = data;
  
      $('#notice-content tr').remove();
      var elemHtml = '';
  
      $.each(data, function (key, val) {
        var status = val.status;
  
        if (status == 'ACTIVE') {
          status = '<div class="label label-table label-success">' + ACTIVE + '</div>';
        } else {
          status = '<div class="label label-table label-default">' + INACTIVE + '</div>';
        }
  
        elemHtml += `
                  <tr class="inquiry_bank-${val.id} cursor">
            <td><a href="javascript:void(0)">${(key += 1)}</a></td>
            <td>${Helper.text_truncate(val.account_name, 10, '...')}</td>
            <td>${Helper.text_truncate(val.user_name, 10, '...')}</td>
            <td>${Helper.text_truncate(val.bank_name, 10, '...')}</td>
            <td>${Helper.text_truncate(val.bank_no, 10, '...')}</td>
            <td>${status}</td>
            <td><span class="text-muted"><i class="fa fa-clock-o"></i> ${val.created_at}</span> </td>				
                  </tr>`;
      });
      $('#inquiry-banks-content').html(elemHtml);
  
      self.addEvents();
    },
  
    getBankRequest(id) {
      const self = this;
      if (self.bankRequestLookUpData) {
        return self.bankRequestLookUpData.filter(x => x.id == id)[0];
      } else {
        return null;
      }
    },
  
    addEvents: function () {
      var self = this;
  
      $('button[class*=approve-').unbind().bind('click', function (e) {
        e.preventDefault();
        const id = $(this).attr('class').split(' ')[0].split('-')[1];
        const bankRequest = self.getBankRequest(id);
        if (bankRequest) {
          if (!bankRequest.player.bank_id) {
            Helper.confirm.show(CONFIRM, `입금계좌를 연결 하십시요.`, function () {});
          } else {
            Helper.confirm.show(CONFIRM, DEPOSIT_SEND, function () {
              self.api.get.approve(id);
            });
          }
        } else {
          Helper.confirm.show(CONFIRM, `Something went wrong.`, function () {});
        }
      });
  
      $('button[class*=setting-]').unbind('click').bind('click', function (e) {
        e.preventDefault();
  
        self.selectedUserId = $(this).attr('class').split(' ')[0].split('-')[1];
        $('#inquiry-banks-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('button[class*=remove-').unbind().bind('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('class').split(' ')[0].split('-')[1];
  
        Helper.confirm.show(CONFIRM, 'Reject Request?', function () {
          self.api.get.remove(id);
        });
      });
  
      $('tr[class*=inquiry_bank-]').unbind().bind('click', function (e) {
        e.preventDefault();
        const bank_id = parseInt($(this).attr('class').split(' ')[0].split('-')[1]);
        self.api.post.setBankId(bank_id);
      });
    },
  
    api: {
      get: {
        all: function () {
          var self = BankRequest;
  
          $.ajax({
            url: baseUrl + '/admin/bank/request/all',
            method: 'GET',
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                self.bankRequestLookUpData = resp.data.data;
                self.renderBankRequest(resp.data.data);
                self.renderTablePagination(resp.links);
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
  
        approve: function (bank_request_id) {
          const self = BankRequest;
  
          $.ajax({
            url: baseUrl + '/admin/bank/request/approve/' + bank_request_id,
            method: 'GET',
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                Helper.notify('Success', 'Bank Details has been sent.');
  
                var inquiryCount = parseInt($('.announcement_total > span:last').html()) ? parseInt($('.announcement_total > span:last').html()) : 0;
                inquiryCount -= 1;
  
                if (inquiryCount <= 0) {
                  $('.announcement_total > span:last').html('').hide();
                } else {
                  $('.announcement_total > span:last').html(inquiryCount).show();
                }
  
                var inquiryCount = parseInt($('.bank-request > span:last').html()) ? parseInt($('.bank-request > span:last').html()) : 0;
                inquiryCount -= 1;
  
                if (inquiryCount <= 0) {
                  $('.bank-request > span:last').html('').hide();
                } else {
                  $('.bank-request > span:last').html(inquiryCount).show();
                }
  
                self.api.get.all();
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
  
        remove: function (bank_request_id) {
          var self = BankRequest;
  
          $.ajax({
            url: baseUrl + '/admin/bank/request/remove/' + bank_request_id,
            method: 'GET',
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                Helper.notify('Success', 'Request was rejected!');
  
                var inquiryCount = parseInt($('.announcement_total > span:last').html()) ? parseInt($('.announcement_total > span:last').html()) : 0;
                inquiryCount -= 1;
  
                if (inquiryCount <= 0) {
                  $('.announcement_total > span:last').html('').hide();
                } else {
                  $('.announcement_total > span:last').html(inquiryCount).show();
                }
  
                var inquiryCount = parseInt($('.bank-request > span:last').html()) ? parseInt($('.bank-request > span:last').html()) : 0;
                inquiryCount -= 1;
  
                if (inquiryCount <= 0) {
                  $('.bank-request > span:last').html('').hide();
                } else {
                  $('.bank-request > span:last').html(inquiryCount).show();
                }
  
                self.api.get.all();
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
        banks: function (page) {
          const self = BankRequest;
  
          $.ajax({
            url: baseUrl + '/admin/bank/all',
            method: 'GET',
            beforeSend: function () {
            },
            success: function (resp) {
              self.renderBanks(resp.data);
            },
            error: function (resp) {
            },
            complete: function () {
            }
          });
        },
      },
      post: {
        setBankId: function (bank_id) {
          const self = BankRequest;
          $.ajax({
            url: baseUrl + '/admin/account/set_bank',
            method: 'POST',
            data: {
              'bank_id': bank_id,
              'account_id': self.selectedUserId,
              '_token': $('#_token').val()
            },
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                $('#inquiry-banks-modal').modal('toggle');
                Helper.notify('Success', '입금계좌가 설정되었습니다');
                self.api.get.all();
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
      }
    }
};

var TableLimit = {
	
	page : 1,
	tableId : 0,
	lookUpData : [],

	init : function() {
		var self = this;
		self.api.get.tables();
	},

	renderTable : function(data) {
		var self = this;

		self.lookUpData = data;

		$('#table-content tr').remove();

		$.each(data, function(key, val) {

			var status = val.status;

			if(status == 'ACTIVE') {
				status = '<div class="label label-table label-success">'+ ACTIVE +'</div>';
			}
			else {
				status = '<div class="label label-table label-warning">'+ INACTIVE +'</div>';
			}

			var	manageButton = '<button type="button" class="edit-'+ val.id +' btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-pencil-alt"></i></button>'
		                     + '<button type="button" class="remove-'+ val.id +' btn btn-danger btn-outline btn-circle btn-xs m-r-5"><i class="ti-trash"></i></button>';

			var elemHtml = '<tr>'
			             +   '<td>' + val.table_provider + '</td>'
			             +   '<td>' + val.table_name + '</td>'
			             +   '<td>' + val.total_player + '</td>'
			             +   '<td>' + val.total_player_limit + '</td>'
			             +   '<td>' + Helper.format.number.withComma(val.total_max_bet) + '</td>'
			             +   '<td>' + status + '</td>'
			             +   '<td><span class="text-muted"><i class="fa fa-clock-o"></i> '+ val.created_at +'</span> </td>'
			             +   '<td>' + manageButton + '</td>'
			             + '</tr>';

			$('#table-content').append(elemHtml);
		});

		self.addEvents();
	},

	renderTablePagination : function(data)
	{
		var self = this;
		$('#table-pagination ul').remove();
		$('#table-pagination').append(data);

		$.each($('#table-pagination	li a'), function(key, val)
		{
			var id = $(val).html();
			$(val).attr('href', '#');
			$(val).addClass('page-button-'+ id +' pages');
		});

		self.addEvents();
	},
	
	addEvents : function() {
		var self = this;

		$('button[class*=remove-]').unbind('click').bind('click', function(e) {
			e.preventDefault();

			self.tableId = $(this).attr('class').split(' ')[0].split('-')[1];
			Helper.confirm.show(CONFIRM, ACCOUNT_DELETE, function() {
				self.api.get.deactivate(self.tableId);
			});
		});

		$('button[class*=edit-]').unbind('click').bind('click', function(e) {
			e.preventDefault();

			self.tableId = $(this).attr('class').split(' ')[0].split('-')[1];
			var data = self.getSelectedData(self.tableId );

			$('#update-table_provider').val(data.table_provider);
			$('#update-table_name').val(data.table_name);
			$('#update-total_player').val(data.total_player);
			$('#update-total_player_limit').val(data.total_player_limit);
			$('#update-status').val(data.status);
			$('#update-total_max_bet').val(data.total_max_bet);

			$('#update-table-modal').modal({
				backdrop : 'static',
				keyboard : false
			});
		});

		$('#btn-new-table-limit').unbind('click').bind('click', function(e) {
			e.preventDefault();

			$('#new-table-modal').modal({
				backdrop : 'static',
				keyboard : false
			});
		});

		$('#btn-submit').unbind('click').bind('click', function(e) {
			e.preventDefault();
			self.api.post.create();
		});

		$('#btn-update').unbind('click').bind('click', function(e) {
			e.preventDefault();
			self.api.post.update();
		});

		$('a[class*=page-button-]').unbind().bind('click', function(e) {
			e.preventDefault();
			self.page = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);
			self.api.get.tables(self.page);
		});
	},

	getSelectedData : function(user_id) {
		var self = this;
		var index = 0;

		$.each(self.lookUpData, function(key, val) {
			if(val.id == user_id) {
				index = key;
			}
		});

		return self.lookUpData[index];
	},

	showErrors : function(errors, prefix) {
		var self = this;

		if(typeof prefix == 'undefined') 
			prefix = '';

		$.each(errors, function(key, val) {
			$('#'+prefix+key).parent().addClass('has-error');
			$('#'+prefix+key).next().html(val);
		});
	},

	api : {
		get : {
			tables : function(page) {
				var self = TableLimit;

				if(typeof page == 'undefined') {
					page = 1;
				}

				var params = {
					'page' : page,
					'limit': 15
				};

				$.ajax({
					url : baseUrl + '/admin/table/limit/all',
					method : 'GET',
					data : params,
					beforeSend : function() {

					},
					success : function(resp) {
						if(resp.success) {
							self.renderTable(resp.data.data);
							self.renderTablePagination(resp.links);
						}
					},
					error : function(resp) {

					},
					complete : function() {

					}
				});
			},

			deactivate : function(table_id) {
				var self = TableLimit;

				$.ajax({
					url : baseUrl + '/admin/table/limit/remove/' + table_id,
					method : 'GET',
					beforeSend : function() {

					},
					success : function(resp) {
						if(resp.success) {
							self.api.get.tables(self.page);
						}
					},
					error : function(resp) {

					},
					complete : function() {

					}
				});
			}
		},

		post : {
			create : function() {
				var self = TableLimit;

				var params = {
					'table_provider' : $('#table_provider').val(),
					'table_name' : $('#table_name').val().trim(),
					'total_player_limit' : $('#total_player_limit').val().trim(),
					'_token' : $('#_token').val()
				};

				$.ajax({
					url : baseUrl + '/admin/table/limit/create',
					method : 'POST',
					data : params,
					beforeSend : function() {
						$('#btn-submit').attr('disabled', 'disabled').html('...');
					},
					success : function(resp) {
						if(resp.success) {
							$('#new-table-modal').modal('toggle');
							self.api.get.tables();
						}
					},
					error : function(resp) {
						self.showErrors(resp.responseJSON.errors);
						$('#btn-submit').removeAttr('disabled').html(SUBMIT);
					},
					complete : function() {
						$('#btn-submit').removeAttr('disabled').html(SUBMIT);
					}
				});
			},

			update : function() {
				var self = TableLimit;

				var params = {
					'table_id' : self.tableId,
					'table_provider' : $('#update-table_provider').val(),
					'table_name' : $('#update-table_name').val().trim(),
					'total_player' : $('#update-total_player').val().trim(),
					'total_player_limit' : $('#update-total_player_limit').val().trim(),
					'total_max_bet' : $('#update-total_max_bet').val().trim(),
					'status' : $('#update-status').val(),
					'_token' : $('#_token').val()
				};

				$.ajax({
					url : baseUrl + '/admin/table/limit/update',
					method : 'POST',
					data : params,
					beforeSend : function() {
						$('#btn-update').attr('disabled', 'disabled').html('...');
					},
					success : function(resp) {
						if(resp.success) {
							$('#update-table-modal').modal('toggle');
							self.api.get.tables(self.page);
						}
					},
					error : function(resp) {
						self.showErrors(resp.responseJSON.errors);
						$('#btn-update').removeAttr('disabled').html(SUBMIT);
					},
					complete : function() {
						$('#btn-update').removeAttr('disabled').html(SUBMIT);
					}
				});
			}
		}
	}
};

var Inbox = {

    lookUpData: [],
    inboxId: 0,
    msgLength: 0,
  
    init: function () {
      var self = this;
      self.api.get.inbox();
    },
  
    renderInbox: function (data) {
      var self = this;
  
      self.lookUpData = data;
  
      $('#message-content tr').remove();
  
      $.each(data, function (key, val) {
        if (val.account) {
          var manageButton = '<button type="button" class="edit-' + val.id + ' btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-pencil-alt"></i></button>';
  
          var message = val.message;
  
          if (val.is_operator_read) {
            message = '<td>' + val.message + '</td>';
          } else {
            message = '<td><strong>' + val.message + '</strong></td>'
          }
  
          var elemHtml = '<tr>'
            + '<td>' + val.subject + '</td>'
            + message
            + '<td>' + val.account.nickname + '</td>'
            + '<td><span class="text-muted"><i class="fa fa-clock-o"></i> ' + val.created_at + '</span> </td>'
            + '<td>'
            + manageButton
            + '</td>'
            + '</tr>';
  
          $('#message-content').append(elemHtml);
        }
      });
  
      self.addEvents();
    },
  
    renderScroll: function () {
      var window_height = $(window).height();
  
      $('.chat-list li').remove();
  
      $('#conv div').remove();
      var elemHtml = '<div>'
        + '<ul class="chat-list p-t-30">'
        + '</ul>'
        + '</div>';
  
      $('#conv').append(elemHtml);
  
      if (window_height > 900) {
        $('.chat-list').parent().slimScroll({
          position: 'right',
          height: '400px',
          color: '#c2c2c2',
          alwaysVisible: true,
          start: 'bottom'
        });
      } else {
        $('.chat-list').parent().slimScroll({
          position: 'right',
          height: '200px',
          color: '#c2c2c2',
          alwaysVisible: true,
          start: 'bottom'
        });
      }
    },
  
    renderReply: function (data) {
      var self = this;
      var rowClass = '';
      var nickname = '';
  
      self.renderScroll();
  
      $.each(data.reply, function (key, val) {
  
        if (val.position) {
          rowClass = '';
        } else {
          rowClass = 'odd';
        }
  
        const elemHtml = '<li class="' + rowClass + '">'
          + '<div class="chat-body">'
          + '<div class="chat-text">'
          + '<h4>' + val.account.nickname + '</h4>'
          + '<p>' + val.message + '</p> <b>' + val.created_at + '</b> </div>'
          + '</div>'
          + '</li>';
  
        $('.chat-list').append(elemHtml);
      });
  
      setTimeout(function () {
        var bottomCoord = $('.chat-list').parent()[0].scrollHeight;
        console.log('bottomCoord', bottomCoord);
        $('.chat-list').parent().slimScroll({scrollTo: bottomCoord});
      }, 500);
    },
  
    continueRenderReply: function (data) {
      var self = this;
      var rowClass = '';
      var nickname = '';
      self.msgLength = data.reply.length;
  
      // self.renderScroll();
      let htmlStr = '';
      console.log('data.reply', data.reply.length);
  
      $.each(data.reply, function (key, val) {
  
        if (val.position) {
          rowClass = '';
        } else {
          rowClass = 'odd';
        }
  
        const elemHtml = '<li class="' + rowClass + '">'
          + '<div class="chat-body">'
          + '<div class="chat-text">'
          + '<h4>' + val.account.nickname + '</h4>'
          + '<p>' + val.message + '</p> <b>' + val.created_at + '</b> </div>'
          + '</div>'
          + '</li>';
        htmlStr += elemHtml;
        // $('.chat-list').append(elemHtml);
  
      });
      // $('.chat-list').html('');
      $('.chat-list').html(htmlStr);
  
      setTimeout(function () {
        var bottomCoord = $('.chat-list').parent()[0].scrollHeight;
        // console.log('bottomCoord', bottomCoord);
        // $('.chat-list').parent().stop().animate({ scrollTop: $('.chat-list').parent()[0].scrollHeight}, 1000);
        $('.chat-list').parent().slimScroll({scrollTo: bottomCoord});
      }, 1000);
    },
  
    addEvents: function () {
      var self = this;
  
      $('#btn-new-message').unbind().bind('click', function (e) {
        e.preventDefault();
        $('#new-message-modal').modal({
          backdrop: 'static',
          keyboard: false
        })
      });
  
      $('#btn-use-macro').unbind().bind('click', function (e) {
        e.preventDefault();
        self.api.get.getAllMacro();
        $('#use-macro-modal').modal({
          // backdrop: 'static',
          // keyboard: false
        })
      });
  
      $('#btn-send-message').unbind().bind('click', function (e) {
        e.preventDefault();
        self.api.post.sendMessage();
      });
      const messageHandler = function() {
        var data = self.getSelectedData(self.inboxId);
  
        if (data.is_operator_read == 0) {
          self.api.get.read(self.inboxId);
        }
  
        $('#reply-modal-title').html(data.account.nickname);
        $('#reply-modal-subject').html(data.subject);
        self.renderReply(data);
        var myVar = setInterval(realtime, 2000);
  
        function realtime() {
          var data = self.getSelectedData(self.inboxId);
  
          if (data.is_operator_read == 0) {
            self.api.get.read(self.inboxId);
          }
  
          $('#reply-modal-title').html(data.account.nickname);
          $('#reply-modal-subject').html(data.subject);
          self.continueRenderReply(data);
        }
  
      };
  
      $('button[class*=edit-').unbind().bind('click', function (e) {
        e.preventDefault();
        $('#reply-modal-form > div, #reply-modal-form > div > div > div').removeClass('has-error');
        $('#reply-message').val('');
        $('#reply-message').next().html('');
        self.inboxId = $(this).attr('class').split(' ')[0].split('-')[1];
  
        messageHandler();
  
        $('#reply-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('a[class*=page-button-]').unbind().bind('click', function (e) {
        e.preventDefault();
        self.page = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);
        self.api.get.inbox(self.page);
      });
  
      $('#btn-reply').unbind().bind('click', function (e) {
        e.preventDefault();
        self.api.post.reply();
      });
  
      $('.macro-item').unbind().bind('click', function (e) {
        e.preventDefault();
        const message = $(this).find('.message').attr('message-data');
        const originalMsg = $('#reply-message').val();
        console.log('originalMsg', originalMsg);
        $('#reply-message').val(`${originalMsg}\n${message}`);
        // console.log('message', message);
        $('#use-macro-modal').modal('hide');
      });
    },
  
    renderTablePagination: function (data) {
      var self = this;
      $('#table-pagination ul').remove();
      $('#table-pagination').append(data);
  
      $.each($('#table-pagination	li a'), function (key, val) {
        var id = $(val).html();
        $(val).attr('href', '#');
        $(val).addClass('page-button-' + id + ' pages');
      });
  
      self.addEvents();
    },
  
    getSelectedData: function (user_id) {
      var self = this;
      var index = 0;
  
      $.each(self.lookUpData, function (key, val) {
        if (val.id == user_id) {
          index = key;
        }
      });
  
      return self.lookUpData[index];
    },
    renderMacro : function(data) {
      var self = this;
  
      self.lookUpData = data;
  
      $('#notice-content tr').remove();
      let elemHtml = '';
  
      $.each(data, function(key, val) {
        var status = val.status;
  
        if(status == 'ACTIVE') {
          status = '<div class="label label-table label-success">'+ ACTIVE +'</div>';
        }
        else {
          status = '<div class="label label-table label-default">'+ INACTIVE +'</div>';
        }
  
        elemHtml += `
                  <tr class="macro-item">
                  <td><a href="javascript:void(0)" class="macrorow-${val.id}">${(key+=1)}</a></td>
                  <td>${Helper.text_truncate(val.title, 10, '...')}</td>
                  <td class="message" message-data="${val.message}">${Helper.text_truncate(val.message, 10, '...')}</td>				
                  </td>
                  </tr>`;
      });
      $('#macro-content').html(elemHtml);
  
      self.addEvents();
    },
  
  
    showErrors: function (errors, prefix) {
      var self = this;
  
      if (typeof prefix == 'undefined')
        prefix = '';
  
      $.each(errors, function (key, val) {
        $('#' + prefix + key).parent().addClass('has-error');
        $('#' + prefix + key).next().html(val);
      });
    },
  
    api: {
      get: {
        getAllMacro: function(page) {
          var self = Inbox;
  
          $.ajax({
            url : baseUrl + '/admin/macro/all',
            method : 'GET',
            beforeSend : function() {},
            success : function(resp) {
              self.renderMacro(resp.data.data);
            },
            error : function(resp) {},
            complete : function() {}
          });
        },
        inbox: function () {
          var self = Inbox;
  
          if (typeof page == 'undefined') {
            var page = 1;
          }
  
          var params = {
            'page': page,
            'limit': 15
          };
  
          $.ajax({
            url: baseUrl + '/inbox/all',
            method: 'GET',
            data: params,
            beforeSend: function () {
  
            },
            success: function (resp) {
              self.renderInbox(resp.data.data);
              self.renderTablePagination(resp.data.links);
            },
            error: function (resp) {
              self.showErrors(resp.responseJSON.errors);
            },
            complete: function () {
  
            }
          });
        },
  
        read: function (id) {
          var self = Inbox;
  
          $.ajax({
            url: baseUrl + '/inbox/read/' + id,
            method: 'GET',
            beforeSend: function () {
  
            },
            success: function (resp) {
              if (resp.success) {
  
                var requestCount = parseInt($('.announcement_total > span:last').html()) ? parseInt($('.announcement_total > span:last').html()) : 0;
                requestCount--;
  
                if (requestCount > 0)
                  $('.announcement_total > span:last').html(requestCount).show();
                else
                  $('.announcement_total > span:last').html(0).hide();
  
                requestCount = parseInt($('.inbox > span:last').html()) ? parseInt($('.inbox > span:last').html()) : 0;
                requestCount--;
  
                if (requestCount > 0)
                  $('.inbox > span:last').html(requestCount).show();
                else
                  $('.inbox > span:last').html(0).hide();
  
                self.api.get.inbox();
              }
            },
            error: function (resp) {
  
            },
            complete: function () {
  
            }
          });
        }
      },
  
      post: {
        reply: function () {
          var self = Inbox;
          const message = $('#reply-message').val();
  
          var params = {
            'inbox_id': self.inboxId,
            'message': message,
            'position': 0,
            '_token': $('#_token').val()
          };
  
          $.ajax({
            url: baseUrl + '/inbox/reply',
            method: 'POST',
            data: params,
            beforeSend: function () {
              $('#reply-modal-form > div').removeClass('has-error');
              $('#message').next().html('');
              $('#btn-reply').attr('disabled', 'disabled').html('Processing...');
            },
            success: function (resp) {
              if (resp.success) {
                Helper.notify('Success', 'Your message was successfully sent');
                $('#reply-modal-form')[0].reset();
                /*2018-11-28/2-4*/
                // $('#reply-modal').modal('toggle');
  
                var requestCount = parseInt($('.announcement_total > span:last').html()) ? parseInt($('.announcement_total > span:last').html()) : 0;
                requestCount--;
  
                if (requestCount > 0) {
                  $('.announcement_total > span:last').html(requestCount).show();
                } else {
                  $('.announcement_total > span:last').html(0).hide();
                }
  
                requestCount = parseInt($('.inbox > span:last').html()) ? parseInt($('.inbox > span:last').html()) : 0;
                requestCount--;
  
                if (requestCount > 0) {
                  $('.inbox > span:last').html(requestCount).show();
                } else {
                  $('.inbox > span:last').html(0).hide();
                }
                self.api.get.inbox();
              }
            },
            error: function (resp) {
              self.showErrors(resp.responseJSON.errors, 'reply-');
            },
            complete: function () {
              $('#btn-reply').removeAttr('disabled').html('Send');
            }
          });
        }
      }
    }
};

var PlayerInbox = {
	
	page : 1,
	lookUpData : [],
	inboxId : 0,

	init : function() {
		var self = this;
		self.api.get.inbox();
		self.renderScroll();
	},

	renderInbox : function(data) {
		var self = this;

		self.lookUpData = data;

		$('#message-content tr').remove();

		$.each(data, function(key, val) {
			var	manageButton = '<button type="button" class="edit-'+ val.id +' btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-pencil-alt"></i></button>';

			var message = val.message;

			if(val.is_read) {
				message = '<td>'+ val.message +'</td>';
			}
			else {
				message = '<td><strong>'+ val.message +'</strong></td>'
			}

			var	elemHtml = '<tr>'
		                 +      '<td>'+ val.subject +'</td>'
		                 +      message
 		                 +      '<td><span class="text-muted"><i class="fa fa-clock-o"></i> '+ val.created_at +'</span> </td>'
		                 +      '<td>'
		                 +			manageButton
		                 +      '</td>'
		                 +  '</tr>';

			$('#message-content').append(elemHtml);
		});

		self.addEvents();
	},

	renderScroll : function() {
		var window_height = $(window).height(); 

		$('.chat-list li').remove();

		$('#conv div').remove();
		var elemHtml = '<div>'
		             +   '<ul class="chat-list p-t-30">'
		             +   '</ul>'
		             + '</div>';

		$('#conv').append(elemHtml);

		if(window_height > 900)
		{
	        $('.chat-list').parent().slimScroll({
	            position: 'right',
	            height: '400px',
	            color: '#c2c2c2',
	            alwaysVisible: true,
	            start: 'bottom'
	        });
		}
		else
		{
	        $('.chat-list').parent().slimScroll({
	            position: 'right',
	            height: '200px',
	            color: '#c2c2c2',
	            alwaysVisible: true,
	            start: 'bottom'
	        });
		}
	},


	renderReply : function(data) {
		var self = this;
		var rowClass = '';

		self.renderScroll();

		$.each(data.reply, function(key, val) {

			if(val.position) {
				rowClass = 'odd';
			}
			else {
				rowClass = '';
			}

			var elemHtml = '<li class="'+ rowClass +'">'
                     +   '<div class="chat-body">'
                     +      '<div class="chat-text">'
                     +          '<h4>' + val.account.nickname + '</h4>'
                     +          '<p>'+ val.message +'</p> <b>'+ val.created_at +'</b> </div>'
                     +       '</div>'
                     + '</li>';

            $('.chat-list').append(elemHtml);
		});	

		setTimeout(function() {
			var bottomCoord = $('.chat-list').parent()[0].scrollHeight;
			$('.chat-list').parent().slimScroll({scrollTo: bottomCoord});
		}, 500);
	},

	renderTablePagination : function(data)
	{
		var self = this;
		$('#table-pagination ul').remove();
		$('#table-pagination').append(data);

		$.each($('#table-pagination	li a'), function(key, val)
		{
			var id = $(val).html();
			$(val).attr('href', '#');
			$(val).addClass('page-button-'+ id +' pages');
		});

		self.addEvents();
	},

	addEvents : function() {
		var self = this;

		$('#btn-new-message').unbind().bind('click', function(e) {
			e.preventDefault();
			$('#new-message-modal').modal({
				backdrop : 'static',
				keyboard : false
			});
		});

		$('#btn-send-message').unbind().bind('click', function(e) {
			e.preventDefault();
			self.api.post.sendMessage();
		});

		$('button[class*=edit-').unbind().bind('click', function(e) {
			e.preventDefault();
			$('#reply-modal-form > div > div > div').removeClass('has-error');
			$('#reply-message').next().html('');
			self.inboxId = $(this).attr('class').split(' ')[0].split('-')[1];
			var data = self.getSelectedData(self.inboxId);

			if(data.is_read == 0)
				self.api.get.read(self.inboxId);

			$('#reply-modal-subject').html(data.subject);
			self.renderReply(data);
			$('#reply-modal').modal({
				backdrop : 'static',
				keyboard : false
			});
		});

		$('a[class*=page-button-]').unbind().bind('click', function(e) {
			e.preventDefault();
			self.page = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);
			self.api.get.inbox(self.page);
		});

		$('#btn-reply').unbind().bind('click', function(e) {
			e.preventDefault();
			self.api.post.reply();
		});
	},

	getSelectedData : function(user_id) {
		var self = this;
		var index = 0;

		$.each(self.lookUpData, function(key, val) {
			if(val.id == user_id) {
				index = key;
			}
		});

		return self.lookUpData[index];
	},

	showErrors : function(errors, prefix) {
		var self = this;

		if(typeof prefix == 'undefined') 
			prefix = '';

		$.each(errors, function(key, val) {
			$('#'+prefix+key).parent().addClass('has-error');
			$('#'+prefix+key).next().html(val);
		});
	},

	api : {
		get : {
			inbox : function(page) {
				var self = PlayerInbox;

				if(typeof page == 'undefined') {
					page = 1;
				}

				var params = {
					'page' : page,
					'limit' : 15
				};

				$.ajax({
					url : baseUrl + '/inbox/all',
					method : 'GET',
					data : params,
					beforeSend : function() {
						
					},
					success : function(resp) {
						self.renderInbox(resp.data.data);
						self.renderTablePagination(resp.links);
					},
					error : function(resp) {

					},
					complete : function() {

					}
				});
			},

			read : function(id) {
				var self = PlayerInbox;

				$.ajax({
					url : baseUrl + '/inbox/read/' + id,
					method : 'GET',
					beforeSend : function() {
						
					},
					success : function(resp) {
						if(resp.success) {
							self.api.get.inbox();
						}
					},
					error : function(resp) {

					},
					complete : function() {

					}
				});
			}
		},

		post : {
			sendMessage : function() {
				var self = PlayerInbox;

				var params = {
					'subject' : $('#subject').val(),
					'message' : $('#message').val(),
					'_token'  : $('#_token').val()
				};

				$.ajax({
					url : baseUrl + '/inbox/create',
					method : 'POST',
					data : params,
					beforeSend : function() {
						$('#new-message-modal-form > div > div').removeClass('has-error');
						$('#subject, #message').next().html('');
						$('#btn-send-message').attr('disabled', 'disabled').html('Processing...');
					},
					success : function(resp) {
						if(resp.success) {
							Helper.notify('Success', 'Your message was successfully sent');
							$('#new-message-modal-form')[0].reset();
							$('#new-message-modal').modal('toggle');
							self.api.get.inbox();
						}
					},
					error : function(resp) {
						self.showErrors(resp.responseJSON.errors);
					},
					complete : function() {
						$('#btn-send-message').removeAttr('disabled').html('Send');
					}
				});
			},

			reply : function() {
				var self = PlayerInbox;

				var params = {
					'inbox_id' : self.inboxId,
					'message' : $('#reply-message').val(),
					'position' : 1,
					'_token'  : $('#_token').val()
				};

				$.ajax({
					url : baseUrl + '/inbox/reply',
					method : 'POST',
					data : params,
					beforeSend : function() {
						$('#reply-modal-form > div').removeClass('has-error');
						$('#message').next().html('');
						$('#btn-reply').attr('disabled', 'disabled').html('Processing...');
					},
					success : function(resp) {
						if(resp.success) {
							Helper.notify('Success', 'Your message was successfully sent');
							$('#reply-modal-form')[0].reset();
							$('#reply-modal').modal('toggle');
							self.api.get.inbox();
						}
					},
					error : function(resp) {
						self.showErrors(resp.responseJSON.errors, 'reply-');
						$('#btn-reply').removeAttr('disabled').html('Send');
					},
					complete : function() {
						$('#btn-reply').removeAttr('disabled').html('Send');
					}
				});
			}
		}
	}
};

var PlayerCredit = {

	cashInButtonText : null,
	selectedCashInId : 0,
	selectedCashOutId : 0,
	lookUpData : [],

	init : function() {
		var self = this;
		self.api.get.cashIn();
	},

	renderCashIn : function(data) {
		var self = this;

		self.lookUpData = data;

		$.each(data, function(key, val) {

			var status = val.status;

			if(status == 'ACCEPTED') {
				status = '<div class="label label-table label-success">확인</div>';
			}
			else if (status == 'ONGOING') {
				status = '<div class="label label-table label-warning">확인</div>';
			}
			else if (status == 'DECLINED' || status == 'CANCELED') {
				status = '<div class="label label-table label-danger">취소</div>';
			}
			else if(status == 'TRANSFERRED') {
				status = '<div class="label label-table label-info">완료</div>';
			}
			else {
				status = '<div class="label label-table label-default">대기</div>';
			}

			var cashin_amount = Helper.format.number.withComma(val.amount);

			var manageButton = '';

			if(val.status == 'ACCEPTED')
			{
				manageButton = '<button type="button" class="edit-'+ val.id +' btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-pencil-alt"></i></button>';

			}
			else if(val.status == 'CANCELED')
			{
				manageButton = '<button type="button" class="edit-'+ val.id +' btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-pencil-alt"></i></button>';
			}
			else
			{
				manageButton = '<button type="button" class="edit-'+ val.id +' btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-pencil-alt"></i></button>'
							 + '<button type="button" class="remove-'+ val.id +' btn btn-danger btn-outline btn-circle btn-xs m-r-5"><i class="ti-trash"></i></button>';
			}

			var elemHtml = '<tr>'
		                 +      '<td>'+ val.account.nickname +'</td>'
		                 +      '<td>'+ cashin_amount +'</td>'
		                 +      '<td>'+ status +'</td>'
		                 +      '<td><span class="text-muted"><i class="fa fa-clock-o"></i> '+ val.created_at +'</span> </td>'
		                 +      '<td>'
		                 +       manageButton
		                 +      '</td>'
		                 +  '</tr>';

		    $('#cashin-content').append(elemHtml);
		});

		self.addEvents();
	},

	renderCashInTablePagination : function(data)
	{
		var self = this;

		$('#table-cashin-pagination ul').remove();
		$('#table-cashin-pagination').append(data);

		$.each($('#table-cashin-pagination	li a'), function(key, val)
		{
			var id = $(val).html();
			$(val).attr('href', '#');
			$(val).addClass('pagecashin-button-'+ id +' pages');
		});

		self.addEvents();
	},

	renderCashOut : function(data) {
		var self=  this;

		self.lookUpData = data;

		$.each(data, function(key, val) {

			var status = val.status;

			if(status == 'ACCEPTED') {
				status = '<div class="label label-table label-success">확인</div>';
			}
			else if (status == 'ONGOING') {
				status = '<div class="label label-table label-warning">확인</div>';
			}
			else if (status == 'DECLINED' || status == 'CANCELED') {
				status = '<div class="label label-table label-danger">취소</div>';
			}
			else if(status == 'TRANSFERRED') {
				status = '<div class="label label-table label-info">완료</div>';
			}
			else {
				status = '<div class="label label-table label-default">대기</div>';
			}

			var manageButton = '';

			if(val.status == 'ACCEPTED')
			{
				manageButton = '<button type="button" class="editcashout-'+ val.id +' btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-pencil-alt"></i></button>';

			}
			else if(val.status == 'CANCELED')
			{
				manageButton = '<button type="button" class="editcashout-'+ val.id +' btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-pencil-alt"></i></button>';
			}
			else
			{
				manageButton = '<button type="button" class="editcashout-'+ val.id +' btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-pencil-alt"></i></button>'
							 + '<button type="button" class="removecashout-'+ val.id +' btn btn-danger btn-outline btn-circle btn-xs m-r-5"><i class="ti-trash"></i></button>';
			}

			var cashout_amount = Helper.format.number.withComma(val.cashout_amount);

			var elemHtml = '<tr>'
		                 +      '<td>'+ val.account.nickname +'</td>'
		                 +      '<td>'+ cashout_amount +'</td>'
		                 +      '<td>'+ status +'</td>'
		                 +      '<td><span class="text-muted"><i class="fa fa-clock-o"></i> '+ val.created_at +'</span> </td>'
		                 +      '<td>'
						 +			manageButton
		                 +      '</td>'
		                 +  '</tr>';

		    $('#cashout-content').append(elemHtml);
		});

		self.addEvents();
	},

	renderCashOutTablePagination : function(data)
	{
		var self = this;

		$('#table-cashout-pagination ul').remove();
		$('#table-cashout-pagination').append(data);

		$.each($('#table-cashout-pagination	li a'), function(key, val)
		{
			var id = $(val).html();
			$(val).attr('href', '#');
			$(val).addClass('pagecashout-button-'+ id +' pages');
		});

		self.addEvents();
	},

	addEvents : function() {
		var self = this;

		$('button[class*=removecashout-]').unbind('click').bind('click', function(e) {
			e.preventDefault();

			var id = $(this).attr('class').split(' ')[0].split('-')[1];
			Helper.confirm.show('확인', '출금요청을 취소하시겠습니까?', function() {
				self.api.get.cashOutCancelRequest(id);
			});
		});

		$('button[class*=remove-]').unbind('click').bind('click', function(e) {
			e.preventDefault();

			var id = $(this).attr('class').split(' ')[0].split('-')[1];
			Helper.confirm.show('확인', '입금요청을 취소하시겠습니까?', function() {
				self.api.get.cashInCancelRequest(id);
			});
		});

		$('#btn-cashin-submit').unbind('click').bind('click', function(e) {
			e.preventDefault();
			self.api.post.cashInUpdate();
		});

		$('button[class*=editcashout]').unbind('click').bind('click', function(e) {
			e.preventDefault();

			self.selectedCashOutId = $(this).attr('class').split(' ')[0].split('-')[1];
			var data = self.getSelectedData(self.selectedCashOutId);

			$('#cashout-player-name').val(data.account.nickname);
			$('#cashout-current-balance').val(Helper.format.number.withComma(data.current_balance));
			$('#cashout-amount').val(Helper.format.number.withComma(data.cashout_amount));
			$('#cashout-remaining-balance').val(Helper.format.number.withComma(data.remaining_balance));

			if(data.status == 'ACCEPTED') {
				$('#cashout-status').html('확인');
			}
			else if (data.status == 'ONGOING') {
				$('#cashout-status').html('확인');
			}
			else if (data.status == 'DECLINED' || data.status == 'CANCELED') {
				$('#cashout-status').html('취소');
			}
			else if(data.status == 'TRANSFERRED') {
				$('#cashout-status').html('완료');
			}
			else {
				$('#cashout-status').html('대기');
			}

			$('#cashout-update-modal').modal('toggle');
		});

		$('#btn-cashout-proceed').unbind().bind('click', function(e) {
			e.preventDefault();

			var cashOutAmount = parseInt($('#cashout_amount').val()) || 0;

			if(cashOutAmount)
				cashOutAmount = Helper.format.number.withComma(cashOutAmount);

			Helper.confirm.show('Confirm', 'Do you want to deposit the cash amount of <strong>' + cashOutAmount + '</strong> to your bank account? This will deduct to your current credits.', function() {
				Helper.confirm.hide();
				self.api.post.cashOut();
			});
		});

		$('#btn-cash-out').unbind('click').bind('click', function(e) {
			e.preventDefault();

			if($('#current_balance').html() <= 0) {
				$('#btn-cashout-proceed').attr('disabled', 'disabled');
			}
			else {
				$('#btn-cashout-proceed').removeAttr('disabled', 'disabled');
			}

			$('#cashout-modal-form > div').removeClass('has-error');
			$('#cashout_amount').next().html('');
			$('#cashout_pin').next().html('');
			$('#cashout-modal-form')[0].reset();
			$('#cashout-modal').modal('toggle');
		});

		$('#cashin-tab').unbind('click').bind('click', function(e) {
			e.preventDefault();
			self.api.get.cashIn();
		});	

		$('#cashout-tab').unbind('click').bind('click', function(e) {
			e.preventDefault();
			self.api.get.cashOut();
		});	

		$('button[class*=edit-]').unbind('click').bind('click', function(e) {
			e.preventDefault();
			self.selectedCashInId = $(this).attr('class').split(' ')[0].split('-')[1];
			var data = self.getSelectedData(self.selectedCashInId);

			$('#cashin-player-name').val(data.account.nickname);
			$('#cashin-requested-amount').val(Helper.format.number.withComma(data.amount));
			$('#cashin-operator_bank_name').val(data.operator_bank_name);
			$('#cashin-operator_bank_account_name').val(data.operator_bank_account_name);
			$('#cashin-operator_bank_account_no').val(data.operator_bank_account_no);

			if(data.status == 'ACCEPTED') {
				$('#cashin-status').html('확인');
			}
			else if (data.status == 'ONGOING') {
				$('#cashin-status').html('확인');
			}
			else if (data.status == 'DECLINED' || data.status == 'CANCELED') {
				$('#cashin-status').html('취소');
			}
			else if(data.status == 'TRANSFERRED') {
				$('#cashin-status').html('완료');
			}
			else {
				$('#cashin-status').html('대기');
			}
			
			if(data.status == 'ONGOING') {
				self.cashInButtonText = '이체';
				$('#btn-cashin-submit').html(self.cashInButtonText);
				$('#cashin-status').next().html('이체 완료후  확인버튼을 눌러주세요');
			}
			else {
				$('#cashin-status').next().html('');
				$('#btn-cashin-submit').hide();
				$('#btn-cashin-submit').attr('disabled', 'disabled');
				$("input[name=cashin-game_provider]").attr('disabled', 'disabled');
			}

			$('#cashin-update-modal').modal('toggle');
		});

		$('#btn-cash-in').unbind('click').bind('click', function(e) {
			e.preventDefault();

			$('#cashin-modal-form > div').removeClass('has-error');
			$('#cash_amount').next().html('');
			$('#cashin-modal-form')[0].reset();
			$('#cashin-modal').modal('toggle');
		});

		$('#btn-cashin-proceed').unbind('click').bind('click', function(e) {
			e.preventDefault();

			var cashInAmount = parseInt($('#cash_amount').val()) || 0;

			if(cashInAmount)
				cashInAmount = Helper.format.number.withComma(cashInAmount);

			Helper.confirm.show('Confirm', 'Do you want to deposit the cash amount of <strong>' + cashInAmount + '</strong> to operator bank account? This will convert your cash into your current credits. ', function() {
				Helper.confirm.hide();
				self.api.post.cashIn();
			});
		});

		$('a[class*=pagecashin-button-]').unbind().bind('click', function(e) {
			e.preventDefault();
			self.page = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);
			self.api.get.cashIn(self.page);
		});

		$('a[class*=pagecashout-button-]').unbind().bind('click', function(e) {
			e.preventDefault();
			self.page = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);
			self.api.get.cashOut(self.page);
		});
	},

	getSelectedData : function(id) {
		var self = this;
		var index = 0;

		$.each(self.lookUpData, function(key, val) {
			if(val.id == id) {
				index = key;
			}
		});

		return self.lookUpData[index];
	},

	showErrors : function(errors, prefix) {
		var self = this;

		if(typeof prefix == 'undefined') 
			prefix = '';

		$.each(errors, function(key, val) {
			$('#'+prefix+key).parent().addClass('has-error');
			$('#'+prefix+key).next().html(val);
		});
	},
	
	api : {
		get : {
			cashIn : function(page) {
				var self = PlayerCredit;
				$('#cashin-content tr').remove();

				if(typeof page == 'undefined') {
					page = 1;
				}

				var params = {
					'page' : page,
					'limit' : 15
				};

				$.ajax({
					url : baseUrl + '/credit/cashin',
					method : 'GET',
					data : params,
					beforeSend : function() {
						Helper.scroll.toTop();
					},
					success : function(resp) {
						self.renderCashIn(resp.data.data);
						self.renderCashInTablePagination(resp.links);
					},
					error : function(resp) {
						
					},
					complete : function() {

					}
				});
			},

			cashOut : function(page) {
				var self = PlayerCredit;

				$('#cashout-content tr').remove();

				if(typeof page == 'undefined') {
					page = 1;
				}

				var params = {
					'page' : page,
					'limit' : 15
				};

				$.ajax({
					url : baseUrl + '/credit/cashout',
					method : 'GET',
					data : params,
					beforeSend : function() {
						Helper.scroll.toTop();
					},
					success : function(resp) {
						self.renderCashOut(resp.data.data);
						self.renderCashOutTablePagination(resp.links);
					},
					error : function(resp) {
						
					},
					complete : function() {

					}
				});
			},

			cashInCancelRequest : function(id) {
				var self = PlayerCredit;

				$.ajax({
					url : baseUrl + '/credit/cashin/cancel/' + id,
					method : 'GET',
					beforeSend : function() {
						Helper.scroll.toTop();
					},
					success : function(resp) {
						Helper.notify('성공', '입금요청이 취소되었습니다.');
						self.api.get.cashIn();
					},
					error : function(resp) {
						
					},
					complete : function() {

					}
				});
			},

			cashOutCancelRequest : function(id) {
				var self = PlayerCredit;

				$.ajax({
					url : baseUrl + '/credit/cashout/cancel/' + id,
					method : 'GET',
					beforeSend : function() {
						Helper.scroll.toTop();
					},
					success : function(resp) {
						Helper.notify('성공', '출금요청이 취소되엇습니다.');
						self.api.get.cashOut();
					},
					error : function(resp) {
						
					},
					complete : function() {

					}
				});
			}
		},

		post : {
			cashIn : function() {
				var self = PlayerCredit;

				$.ajax({
					url : baseUrl + '/credit/cashin/request',
					method : 'POST',
					data : {
						'cash_amount'   : $('#cash_amount').val().trim(),
						'game_provider' : $('input[name=game_provider]:checked').val(),
						'_token'   		: $('#_token').val()
					},
					beforeSend : function() {
						$('#btn-cashin-proceed').attr('disabled', 'disabled').html('...');
					},
					success : function(resp) {
						Helper.notify('Success', 'Your request was successfully sent to our operator');
						$('#cashin-modal-form')[0].reset();
						$('#cashin-modal').modal('toggle');
						self.api.get.cashIn();
					},
					error : function(resp) {
						self.showErrors(resp.responseJSON.errors);
					},
					complete : function() {
						$('#btn-cashin-proceed').removeAttr('disabled').html('진행');
					}
				});
			},

			cashOut : function() {
				var self = PlayerCredit;

				$.ajax({
					url : baseUrl + '/credit/cashout/request',
					method : 'POST',
					data : {
						'cashout_amount': $('#cashout_amount').val().trim(),
						'cashout_pin'   : $('#cashout_pin').val().trim(),
						'_token'   		: $('#_token').val()
					},
					beforeSend : function() {
						$('#btn-cashout-proceed').attr('disabled', 'disabled').html('...');
					},
					success : function(resp) {
						Helper.notify('Success', 'Your request was successfully sent to our operator');
						$('#cashout-modal-form')[0].reset();
						$('#cashout-modal').modal('toggle');

						self.api.get.cashOut();
					},
					error : function(resp) {
						self.showErrors(resp.responseJSON.errors);
					},
					complete : function() {
						$('#btn-cashout-proceed').removeAttr('disabled').html('진행');
					}
				});
			},

			cashInUpdate : function() {
				var self = PlayerCredit;

				$.ajax({
					url : baseUrl + '/credit/cashin/update',
					method : 'POST',
					data : {
						'cashin_id' : self.selectedCashInId,
						'_token'   	: $('#_token').val()
					},
					beforeSend : function() {
						$('#btn-cashin-submit').attr('disabled', 'disabled').html('...');
					},
					success : function(resp) {
						Helper.notify('Success', 'Your request was successfully sent to our operator');
						$('#cashin-update-modal-form')[0].reset();
						$('#cashin-update-modal').modal('toggle');
						self.api.get.cashIn();
					},
					error : function(resp) {
						self.showErrors(resp.responseJSON.errors);
					},
					complete : function() {
						$('#btn-cashin-submit').removeAttr('disabled').html(self.cashInButtonText);
					}
				});
			}
		}
	}
};

var Settlement = {

	selectedCashOutId : 0,
	roleId : 7,
	lookUpData : [],
	status : null,

	init : function() {
		var self = this;
		$('#li-settlement').addClass('active');
		self.api.get.cashOut();
	},

	renderCashOut : function(data) {
		var self = this;

		self.lookUpData = data;
		$.each(data, function(key, val) {

			var status = val.status;

			if(status == 'TRANSFERRED' || status == 'ACCEPTED') {
				status = '<div class="label label-table label-success">'+ COMPLETE +'</div>';
			}
			else if (status == 'ONGOING') {
				status = '<div class="label label-table label-warning">'+ IN_PROGRESS +'</div>';
			}
			else if (status == 'DECLINED' || status == 'CANCELED') {
				status = '<div class="label label-table label-danger">'+ CANCEL +'</div>';
			}
			else {
				status = '<div class="label label-table label-default">'+ NEW +'</div>';
			}

			var cashout_amount = Helper.format.number.withComma(val.cashout_amount);

			var subAgentName = (val.account.player_hierarchy[0].subagent) ? val.account.player_hierarchy[0].subagent.nickname : '';
			var agentName = (val.account.player_hierarchy[0].agent) ? val.account.player_hierarchy[0].agent.nickname : '';
			var distName = (val.account.player_hierarchy[0].distributor) ? val.account.player_hierarchy[0].distributor.nickname : '';

			var manageButton = '';

			if(val.status == 'ACCEPTED' || val.status == 'DECLINED' || val.status == 'CANCELED') {
				manageButton = '<button type="button" class="editcashout-'+ val.id +' btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-pencil-alt"></i></button>';
			}
			else {
				manageButton = '<button type="button" class="editcashout-'+ val.id +' btn btn-info btn-outline btn-circle btn-xs m-r-5"><i class="ti-pencil-alt"></i></button>'
		                     + '<button type="button" class="removecashout-'+ val.id +' btn btn-danger btn-outline btn-circle btn-xs m-r-5"><i class="ti-trash"></i></button>';
			}

			var elemHtml = '<tr>'
			             +      '<td>'+ distName +'</td>'
		                 +      '<td>'+ agentName +'</td>'
		                 +      '<td>'+ subAgentName +'</td>'
		                 +      '<td>'+ val.account.nickname +'</td>'
		                 +      '<td>'+ Helper.format.number.withComma(val.current_balance) +'</td>'
		                 +      '<td>'+ cashout_amount +'</td>'
		                 +      '<td>'+ val.total_bets +'</td>'
		                 +      '<td>'+ val.account.bank_name+'</td>'
		                 +      '<td>'+ val.account.bank_account_name +'</td>'
		                 +      '<td>'+ val.account.bank_account_no +'</td>'
		                 +      '<td>'+ status +'</td>'
		                 +      '<td><span class="text-muted"><i class="fa fa-clock-o"></i> '+ val.created_at +'</span> </td>'
		                 +      '<td>'+ manageButton + '</td>'
		                 +  '</tr>';

		    $('#player-content').append(elemHtml);
		});

		self.addEvents();
	},

	renderTablePagination : function(data)
	{
		var self = this;

		$('#table-pagination ul').remove();
		$('#table-pagination').append(data);

		$.each($('#table-pagination	li a'), function(key, val)
		{
			var id = $(val).html();
			$(val).attr('href', '#');
			$(val).addClass('page-button-'+ id +' pages');
		});

		self.addEvents();
	},

	addEvents : function() {
		var self = this;

        $('#date-range').datepicker({
            toggleActive: true,
            autoclose: true,
            todayHighlight: true
        });
        
		$('#btn-reload').unbind('click').bind('click', function(e) {
			e.preventDefault();
			$('#search').val('');
			self.api.get.cashOut();
		});	
		
		$('#distributor-tab a').unbind('click').bind('click', function(e) {
			e.preventDefault();
			self.roleId = 4;
			self.api.get.cashOut();
		});

		$('#agent-tab a').unbind('click').bind('click', function(e) {
			e.preventDefault();
			self.roleId = 5;
			self.api.get.cashOut();
		});

		$('#player-tab a').unbind('click').bind('click', function(e) {
			e.preventDefault();
			self.roleId = 6;
			self.api.get.cashOut();
		});

		$('#search').unbind('keydown').bind('keydown', function(e) {
			if(e.keyCode  == 13) {
				self.api.get.cashOut();
			}
		});

		$('#btn-search, #btn-search-2').unbind('click').bind('click', function(e) {
			e.preventDefault();
			self.api.get.cashOut();
		});	

		$('#btn-cashout-submit').unbind('click').bind('click', function(e) {
			e.preventDefault();
			self.status = 'ACCEPTED';
			self.api.post.cashOutUpdate();
		});	

		$('#btn-cashout-ongoing').unbind('click').bind('click', function(e) {
			e.preventDefault();
			self.status = 'ONGOING';
			self.api.post.cashOutUpdate();
		});

		$('button[class*=editcashout]').unbind('click').bind('click', function(e) {
			e.preventDefault();

			self.selectedCashOutId = $(this).attr('class').split(' ')[0].split('-')[1];
			var data = self.getSelectedData(self.selectedCashOutId);

			$('#cashout-player-name').val(data.account.nickname);
			$('#cashout-bank-name').val(data.account.bank_name);
			$('#cashout-bank-account-name').val(data.account.bank_account_name);
			$('#cashout-bank-account-no').val(data.account.bank_account_no);
			$('#cashout-current-balance').val(Helper.format.number.withComma(data.current_balance));
			$('#cashout-amount').val(Helper.format.number.withComma(data.cashout_amount));
			$('#cashout-remaining-balance').val(Helper.format.number.withComma(data.remaining_balance));
			$('#cashout-remarks').html(data.remarks);
			$('#cashout-total_bets').val(Helper.format.number.withComma(data.total_bets));

			if(data.status == 'ACCEPTED') {
				$('#cashout-status').html(CONFIRM);
			}
			else if (data.status == 'ONGOING') {
				$('#cashout-status').html(CONFIRM);
			}
			else if (data.status == 'DECLINED' || data.status == 'CANCELED') {
				$('#cashout-status').html(CANCEL);
			}
			else if(data.status == 'TRANSFERRED') {
				$('#cashout-status').html(COMPLETE);
			}
			else {
				$('#cashout-status').html(PENDING);
			}

			if(data.status == 'ACCEPTED' || data.status == 'TRANSFERRED' || data.status == 'CANCELED') {
				$('#btn-cashout-submit, #btn-cashout-ongoing').hide();
				$('#btn-cashout-submit, #btn-cashout-ongoing').attr('disabled', 'disabled');
				$('#cashout-remarks').attr('disabled', 'disabled');
			}
			else if(data.status == 'ONGOING') {
				$('#btn-cashout-ongoing').hide();
			}
			else {
				$('#btn-cashout-submit').show();
				$('#btn-cashout-submit').removeAttr('disabled');
				$('#cashout-remarks').removeAttr('disabled');
			}
			$('#cashout-update-modal').modal('toggle');
		});

		$('button[class*=removecashout-]').unbind('click').bind('click', function(e) {
			e.preventDefault();

			var id = $(this).attr('class').split(' ')[0].split('-')[1];
			Helper.confirm.show(CONFIRM, WIDTHRAW_REQUEST_CONFIRM_CANCEL, function() {
				self.api.get.cashOutCancelRequest(id);
			});
		});
		
		$('a[class*=page-button-]').unbind().bind('click', function(e) {
			e.preventDefault();
			self.page = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);
			self.api.get.cashOut(self.page);
		});
	},

	getSelectedData : function(id) {
		var self = this;
		var index = 0;

		$.each(self.lookUpData, function(key, val) {
			if(val.id == id) {
				index = key;
			}
		});

		return self.lookUpData[index];
	},

	showErrors : function(errors, prefix) {
		var self = this;

		if(typeof prefix == 'undefined') 
			prefix = '';

		$.each(errors, function(key, val) {
			$('#'+prefix+key).parent().addClass('has-error');
			$('#'+prefix+key).next().html(val);
		});
	},

	api : {
		get : {
			cashOut : function(page) {
				var self = Settlement;

				$('#distributor-content tr, #agent-content tr, #player-content tr').remove();

				var start_date = $('#start_date').val();
				var end_date = $('#end_date').val();
				
				if(typeof page == 'undefined') {
					page = 1;
				}

				var params = {
					'page' : page,
					'limit' : 15
				};

				if(start_date)
					params['from_date'] = start_date;
				if(end_date)
					params['to_date'] = end_date;

				params['search'] = $('#search').val().trim();
				params['role_id'] = self.roleId;

				$.ajax({
					url : baseUrl + '/admin/credit/cashout',
					method : 'GET',
					data : params,
					beforeSend : function() {
						Helper.scroll.toTop();
					},
					success : function(resp) {
						self.renderCashOut(resp.data.data);
						self.renderTablePagination(resp.links);
					},
					error : function(resp) {
						
					},
					complete : function() {

					}
				});
			},

			cashOutCancelRequest : function(id) {
				var self = Settlement;

				$.ajax({
					url : baseUrl + '/admin/cashout/cancel/' + id,
					method : 'GET',
					beforeSend : function() {
						Helper.scroll.toTop();
					},
					success : function(resp) {
						Helper.notify(SUCCESS, WIDTHRAW_REQUEST_CONFIRM_CANCEL);

						var requestCount = parseInt($('.cashout_total > span:last').html()) ? parseInt($('.cashout_total > span:last').html()) : 0;
						requestCount--;
						
						if(requestCount > 0) 
							$('.cashout_total > span:last').html(requestCount).show();
						else
							$('.cashout_total > span:last').html(0).hide();

						requestCount = parseInt($('.cashout_player > span:last').html()) ? parseInt($('.cashout_player > span:last').html()) : 0;
						requestCount--;

						if(requestCount > 0) 
							$('.cashout_player > span:last').html(requestCount).show();
						else
							$('.cashout_player > span:last').html(0).hide();

						self.api.get.cashOut();
					},
					error : function(resp) {
						
					},
					complete : function() {

					}
				});
			}
		},

		post : {
			cashOutUpdate : function() {
				var self = Settlement;

				var params = {
					'cashout_id' : self.selectedCashOutId,
					'remarks' : $('#cashout-remarks').val().trim(),
					'status'  : self.status,
					'_token'  : $('#_token').val()
				};

				$.ajax({
					url : baseUrl + '/admin/credit/cashout-update',
					method : 'POST',
					data : params,
					beforeSend : function() {
						$('#btn-cashout-submit').attr('disabled', 'disabled').html('...');
					},
					success : function(resp) {
						Helper.notify('Success', 'The requested amount was successfully transferred to the player\'s Bank Account');
						$('#cashout-update-modal-form')[0].reset();
						$('#cashout-update-modal').modal('toggle');

						var inquiryCount = parseInt($('.cashout_total > span:last').html()) ? parseInt($('.cashout_total > span:last').html()) : 0;
						inquiryCount -= 1;

						if(inquiryCount <= 0) {
							$('.cashout_total > span:last').html('').hide();
						}
						else {
							$('.cashout_total > span:last').html(inquiryCount).show();
						}

						var inquiryCount = parseInt($('.cashout_player > span:last').html()) ? parseInt($('.cashout_player > span:last').html()) : 0;
						inquiryCount -= 1;

						if(inquiryCount <= 0) {
							$('.cashout_player > span:last').html('').hide();
						}
						else {
							$('.cashout_player > span:last').html(inquiryCount).show();
						}

						self.api.get.cashOut();
					},
					error : function(resp) {
						if(resp.responseJSON.errors.error) {
							$('#cashout-update-modal').modal('toggle');
							Helper.confirm.error('Unauthorized', resp.responseJSON.errors.error);
						}
						else {
							self.showErrors(resp.responseJSON.errors, 'cashout-');
						}
					},
					complete : function() {
						$('#btn-cashout-submit').removeAttr('disabled').html(ACKNOWLEDGEMENT);
					}
				});
			}
		}
	}
};

var CountUp = function(target, startVal, endVal, decimals, duration, options) {

	// make sure requestAnimationFrame and cancelAnimationFrame are defined
	// polyfill for browsers without native support
	// by Opera engineer Erik Möller
	var lastTime = 0;
	var vendors = ['webkit', 'moz', 'ms', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame =
		  window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); },
			  timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}
	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}

	var self = this;
    self.version = function () { return '1.8.5'; };

	function formatNumber(num) {
		num = num.toFixed(self.decimals);
		num += '';
		var x, x1, x2, rgx;
		x = num.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? self.options.decimal + x[1] : '';
		rgx = /(\d+)(\d{3})/;
		if (self.options.useGrouping) {
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + self.options.separator + '$2');
			}
		}
		return self.options.prefix + x1 + x2 + self.options.suffix;
	}
	// Robert Penner's easeOutExpo
	function easeOutExpo(t, b, c, d) {
		return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
	}
	function ensureNumber(n) {
		return (typeof n === 'number' && !isNaN(n));
	}
	
	// default options
	self.options = {
		useEasing: true, // toggle easing
		useGrouping: true, // 1,000,000 vs 1000000
		separator: ',', // character to use as a separator
		decimal: '.', // character to use as a decimal
		easingFn: easeOutExpo, // optional custom easing function, default is Robert Penner's easeOutExpo
		formattingFn: formatNumber, // optional custom formatting function, default is formatNumber above
		prefix: '', // optional text before the result
		suffix: '' // optional text after the result
	};

	// extend default options with passed options object
	if (options && typeof options === 'object') {
		for (var key in self.options) {
			if (options.hasOwnProperty(key) && options[key] !== null) {
				self.options[key] = options[key];
			}
		}
	}

	if (self.options.separator === '') self.options.useGrouping = false;

	self.initialize = function() { 
		if (self.initialized) return true;
		self.d = (typeof target === 'string') ? document.getElementById(target) : target;
		if (!self.d) { 
			console.error('[CountUp] target is null or undefined', self.d);
			return false;
		}
		self.startVal = Number(startVal);
		self.endVal = Number(endVal);
		// error checks
		if (ensureNumber(self.startVal) && ensureNumber(self.endVal)) {
			self.decimals = Math.max(0, decimals || 0);
			self.dec = Math.pow(10, self.decimals);
			self.duration = Number(duration) * 1000 || 2000;
			self.countDown = (self.startVal > self.endVal);
			self.frameVal = self.startVal;
			self.initialized = true;
			return true;
		}
		else {
			console.error('[CountUp] startVal or endVal is not a number', self.startVal, self.endVal);
			return false;
		}
	};

	// Print value to target
	self.printValue = function(value) {
		var result = self.options.formattingFn(value);

		if (self.d.tagName === 'INPUT') {
			this.d.value = result;
		}
		else if (self.d.tagName === 'text' || self.d.tagName === 'tspan') {
			this.d.textContent = result;
		}
		else {
			this.d.innerHTML = result;
		}
	};

	self.count = function(timestamp) {

		if (!self.startTime) { self.startTime = timestamp; }

		self.timestamp = timestamp;
		var progress = timestamp - self.startTime;
		self.remaining = self.duration - progress;

		// to ease or not to ease
		if (self.options.useEasing) {
			if (self.countDown) {
				self.frameVal = self.startVal - self.options.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
			} else {
				self.frameVal = self.options.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
			}
		} else {
			if (self.countDown) {
				self.frameVal = self.startVal - ((self.startVal - self.endVal) * (progress / self.duration));
			} else {
				self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
			}
		}

		// don't go past endVal since progress can exceed duration in the last frame
		if (self.countDown) {
			self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal;
		} else {
			self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal;
		}

		// decimal
		self.frameVal = Math.round(self.frameVal*self.dec)/self.dec;

		// format and print value
		self.printValue(self.frameVal);

		// whether to continue
		if (progress < self.duration) {
			self.rAF = requestAnimationFrame(self.count);
		} else {
			if (self.callback) self.callback();
		}
	};
	// start your animation
	self.start = function(callback) {
		if (!self.initialize()) return;
		self.callback = callback;
		self.rAF = requestAnimationFrame(self.count);
	};
	// toggles pause/resume animation
	self.pauseResume = function() {
		if (!self.paused) {
			self.paused = true;
			cancelAnimationFrame(self.rAF);
		} else {
			self.paused = false;
			delete self.startTime;
			self.duration = self.remaining;
			self.startVal = self.frameVal;
			requestAnimationFrame(self.count);
		}
	};
	// reset to startVal so animation can be run again
	self.reset = function() {
		self.paused = false;
		delete self.startTime;
		self.initialized = false;
		if (self.initialize()) {
			cancelAnimationFrame(self.rAF);
			self.printValue(self.startVal);
		}
	};
	// pass a new endVal and start animation
	self.update = function (newEndVal) {
		if (!self.initialize()) return;
		newEndVal = Number(newEndVal);
		if (!ensureNumber(newEndVal)) {
			console.error('[CountUp] update() - new endVal is not a number', newEndVal);
			return;
		}
		if (newEndVal === self.frameVal) return;
		cancelAnimationFrame(self.rAF);
		self.paused = false;
		delete self.startTime;
		self.startVal = self.frameVal;
		self.endVal = newEndVal;
		self.countDown = (self.startVal > self.endVal);
		self.rAF = requestAnimationFrame(self.count);
	};

	// format startVal on initialization
	if (self.initialize()) self.printValue(self.startVal);
};

var Helper = {
	lang : 'kr',

	init:  function() {
        
		if($('#_lang').val()) {
			this.lang = $('#_lang').val();
		}
		 $.fn.removeClassStartingWith = function (filter) {
		    $(this).removeClass(function (index, className) {
		        return (className.match(new RegExp("\\S*" + filter + "\\S*", 'g')) || []).join(' ')
		    });
		    return this;
		};
	},

	notify : function(title, message) {
		$.toast({
			heading: title,
			text: message,
			position: 'top-right',
			loaderBg:'#ff6849',
			icon: 'success',
			hideAfter: 3500, 
			stack: 6
		});
	},

	confirm : {
		ok : function(title, message, callback) {
			$('#confirm-ok-modal').remove();

			var elemHtml =	'<div id="confirm-ok-modal" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="confirm-ok-modal" aria-hidden="true" style="display: none; z-index: 999999999;">'
					     +      '<div class="modal-dialog modal-sm">'
					     +          '<div class="modal-content bg-black-1">'
					     +              '<div class="modal-header">'
        			 +							`<button class="btn btn-transparent" data-dismiss="modal">x</button>`
					     +                  '<h4 class="modal-title">'+ title +'</h4> </div>'
					     +              '<div class="modal-body">'
					     +                  '<p>'+ message +'</p>'
					     +              '</div>'
					     +              '<div class="modal-footer">'
					     +					'<button class="btn btn-danger waves-effect confirm-ok" data-dismiss="modal">'+ OK +'</button>'
					     +              '</div>'
					     +          '</div>'
					     +      '</div>'
					     +  '</div>';

			$('body').append(elemHtml);
			$('#confirm-ok-modal').modal({
				backdrop : 'static',
				keyboard : false
			});

			$('.confirm-ok').unbind().bind('click', function(e) {
				$('#confirm-ok-modal').modal('toggle');

				if(typeof callback != 'undefined') {
					callback();
				}
			});
		},

		info : function(title, message, callback) {
			$('#confirm-info-modal').remove();

			var elemHtml =	'<div id="confirm-info-modal" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="confirm-info-modal" aria-hidden="true" style="display: none; z-index: 999999999;">'
					     +      '<div class="modal-dialog modal-md">'
					     +          '<div class="modal-content bg-black-1">'
					     +              '<div class="modal-header">'
					     +                  '<h4 class="modal-title">'+ title +'</h4> </div>'
					     +              '<div class="modal-body">'
					     +                  '<h2>'+ message +'</h2>'
					     +              '</div>'
					     +              '<div class="modal-footer">'
					     +					'<button class="btn btn-danger waves-effect confirm-info" data-dismiss="modal">'+ OK +'</button>'
					     +              '</div>'
					     +          '</div>'
					     +      '</div>'
					     +  '</div>';

			$('body').append(elemHtml);
			$('#confirm-info-modal').modal({
				backdrop : 'static',
				keyboard : false
			});
			setTimeout(() => {
				$('.confirm-info').unbind().bind('click', function(e) {
					console.log('confirm ok clicked');
					$('#confirm-info-modal').modal('toggle');

					if(typeof callback != 'undefined') {
						callback();
					}
				});
			}, 1000);
		},

		show : function(title, message, callback) {
			$('#confirm-modal').remove();

			var elemHtml =	'<div id="confirm-modal" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true" style="display: none; z-index: 999999999;">'
					     +      '<div class="modal-dialog">'
					     +          '<div class="modal-content bg-black-1">'
					     +              '<div class="modal-header">'
					     +                  '<h4 class="modal-title">'+ title +'</h4> </div>'
					     +              '<div class="modal-body">'
					     +                  '<p>'+ message +'</p>'
					     +              '</div>'
					     +              '<div class="modal-footer">'
					     +                  '<button class="btn btn-default waves-effect" data-dismiss="modal">'+ CANCEL +'</button>'
					     +					'<button class="btn btn-danger waves-effect confirm-yes" data-dismiss="modal">'+ OK +'</button>'
					     +              '</div>'
					     +          '</div>'
					     +      '</div>'
					     +  '</div>';

			$('body').append(elemHtml);
			$('#confirm-modal').modal({
				backdrop : 'static',
				keyboard : false
			});

			$('.confirm-yes').unbind().bind('click', function(e) {
				$('.confirm-yes').attr('disabled', 'disabled');
				$('#confirm-modal').modal('toggle');

				if(typeof callback != 'undefined') {
					callback();
				}
			});
		},

		hide : function() {
			$('#confirm-modal, #confirm-ok-modal, #confirm-error-modal').modal('hide');
		},

		error : function(title, message) {
			var elemHtml =	'<div id="confirm-error-modal" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true" style="display: none; z-index: 999999999;">'
					     +      '<div class="modal-dialog">'
					     +          '<div class="modal-content bg-black-1">'
					     +              '<div class="modal-header alert alert-danger">'
					     +                  '<h4 class="modal-title">'+ title +'</h4> </div>'
					     +              '<div class="modal-body">'
					     +                  '<p>'+ message +'</p>'
					     +              '</div>'
					     +              '<div class="modal-footer">'
					     +                  '<button type="button" class="btn btn-default waves-effect" data-dismiss="modal">'+ OK +'</button>'
					     +              '</div>'
					     +          '</div>'
					     +      '</div>'
					     +  '</div>';

			$('body').append(elemHtml);
			$('#confirm-error-modal').modal({
				backdrop : 'static',
				keyboard : false
			});
		}
	},

	format : {
		number : {
			withComma : function(n) {
				n = parseInt(n);
        		if(isNaN(n)) {
        			return 0
				}
				var value = n.toLocaleString(
				  undefined, // use a string like 'en-US' to override browser locale
				  { minimumFractionDigits: 0 }
				);
				return value;
			},

			removeComma : function(n) {
				if (n) {
          return n.replace(/,/g, '');
				} else {
					return n;
				}
			},

			convertToTrailingZero : function(n) {
				var value = '';
				for( var i=0; i<n.length; i++) {
					value += '0';
				}

				return value;
			}
		},
		date: {
			showDate(value) {
				if (!value) return '';
				console.log('date:'+value);
				if ( value.length >= 19 )
					return value.substring(0,10)+" "+value.substring( 11, 19);
				if ( value.length >= 10 )
					// mdate = value.substring(0,10);
				return '';
//				return value ? moment(value).tz('America/Tokyo').format('YYYY-MM-DD HH:mm:ss') : '';
			}
		}
	},
	cash: {
		showStatus(status) {
			let statusStr = '';
			if (status === 'ACCEPTED') {
				statusStr = `<div class="label label-table label-success">${CONFIRM}</div>`;
			} else if (status === 'ONGOING') {
				statusStr = `<div class="label label-table label-warning">${CONFIRM}</div>`;
			} else if (status === 'DECLINED' || status === 'CANCELED' || status === 'CANCEL') {
				statusStr = `<div class="label label-table label-danger">${CANCEL}</div>`;
			} else if (status === 'TRANSFERRED' || status === 'DONE') {
				statusStr = `<div class="label label-table label-info">${COMPLETE}</div>`;
			} else if (status === 'PROCESS' || status === 'PROCESSING') {
				statusStr = `<div class="label label-table label-info">${IN_PROGRESS}</div>`;
			} else {
				statusStr = `<div class="label label-table label-default">${PENDING}</div>`;
			}
			return statusStr;
		},
	},
	baccarat: {
		showStatus(status) {
			let statusStr = '';
			if (status === '1') {
				statusStr = `배팅중`;
			} else if (status === '2') {
				statusStr = `배팅마감`;
			} else if (status === '4') {
				statusStr = `정산중`;
			} else {
				statusStr = `배팅마감`;
			}
			return statusStr;
		},
	},
	note: {
		showStatus(status) {
			let statusStr = '';
			if (status === 'DONE') {
        statusStr = `<div class="label label-table label-success">수신완료</div>`;
      } else if (status === 'PENDING') {
        statusStr = `<div class="label label-table label-warning">수신대기</div>`;
      }
			return statusStr;
		},
	},
	customer: {
		showStatus(status) {
			let statusStr = '';
			if (status === 'DONE') {
        statusStr = `<div class="label label-table label-success">답변완료</div>`;
      } else if (status === 'PENDING') {
        statusStr = `<div class="label label-table label-warning">답변대기</div>`;
      }
			return statusStr;
		},
	},
	bet: {
		showBetLogStatus(status) {
			let statusStr = '';
			if (status === 'WIN') {
				statusStr = `<div class="label label-table label-danger">${WIN}</div>`;
			} else if (status === 'LOSE') {
				statusStr = `<div class="label label-table label-info">${LOSE}</div>`;
			} else if (status === 'TIE') {
				statusStr = `<div class="label label-table label-success">${TIE}</div>`;
			} else if (status === 'VOID') {
				statusStr = `<div class="label label-table label-default">중지</div>`;
			} else if (status === 'CANCEL') {
				statusStr = `<div class="label label-table label-default">취소</div>`;
			} else {
				statusStr = `<div class="label label-table label-warning">${PENDING}</div>`;
			}
			return statusStr;
		},
	},

	scroll : {
		toTop : function() {
			$(document).scrollTop(0);
		}
	},

	sound : {

		render : function (file, file_type) {
			if(typeof file_type == 'undefined') {
				var sound = new Howl({
				  	src: [baseUrl + '/static/sounds/'+ file +'.mp3']
				});
				sound.play();
			}
			else {
				var sound = new Howl({
				  	src: [baseUrl + '/static/sounds/'+ file_type +'/'+ file +'.mp3']
				});
				sound.play();
			}
		},

		play : {

			announcement : function() {
				Helper.sound.render('announcement');
			},

			open_beep : function() {
				Helper.sound.render('open_beep');
			},

			win : function() {
				Helper.sound.render('win');
			},

			lose : function() {
				Helper.sound.render('lose');
			},

			press : function() {
				Helper.sound.render('press_but');
			},

			chip : function() {
				Helper.sound.render('chip');
			},

			collect : function() {
				Helper.sound.render('fiche_collect');
			},

			tick : function() {
				Helper.sound.render('tick');
			},

			beep : function() {
				Helper.sound.render('beep');
			},

			knock : function() {
				Helper.sound.render('knock');
			},
			
			bang : function() {
				Helper.sound.render('bang');
			},

			ding : function() {
				Helper.sound.render('ding');
			},

			email : function() {
				Helper.sound.render('email');
			},

			bell : function() {
				Helper.sound.render('bell');
			},

			bgm01 : function() {
				Helper.sound.render('bgm01', 'bgm');
			},

			bgm02 : function() {
				Helper.sound.render('bgm02', 'bgm');
			},

			bgm03 : function() {
				Helper.sound.render('bgm03', 'bgm');
			},

			bgm04 : function() {
				Helper.sound.render('bgm04', 'bgm');
			},

			bgm05 : function() {
				Helper.sound.render('bgm05', 'bgm');
			},

			bgm06 : function() {
				Helper.sound.render('bgm06', 'bgm');
			},

			bgm07 : function() {
				Helper.sound.render('bgm07', 'bgm');
			},

			bgm08 : function() {
				Helper.sound.render('bgm08', 'bgm');
			},

			bgm09 : function() {
				Helper.sound.render('bgm09', 'bgm');
			},

			bgm10 : function() {
				Helper.sound.render('bgm10', 'bgm');
			},

			bgm11 : function() {
				Helper.sound.render('bgm11', 'bgm');
			},

			bgm12 : function() {
				Helper.sound.render('bgm12', 'bgm');
			},

			bgm13 : function() {
				Helper.sound.render('bgm13', 'bgm');
			},

			bankerWon : function() {
				Helper.sound.render('banker_won', 'voice_over/' + this.lang);
			},

			playerWon : function() {
				Helper.sound.render('player_won', 'voice_over/' + this.lang);
			},

			bankerPairWon : function() {
				Helper.sound.render('banker_pair', 'voice_over/' + this.lang);
			},

			playerPairWon : function() {
				Helper.sound.render('player_pair', 'voice_over/' + this.lang);
			},

			tieWon : function() {
				Helper.sound.render('tie', 'voice_over/' + this.lang);
			},

			stopBetting : function() {
				Helper.sound.render('no_more_bet', 'voice_over/' + this.lang);
			},

			startBetting : function() {
				Helper.sound.render('bet_start', 'voice_over/' + this.lang);
			},

			enter : function() {
				Helper.sound.render('enter', 'voice_over/' + this.lang);
			},

			cancel : function() {
				Helper.sound.render('cancel', 'voice_over/' + this.lang);
			}
		}
	},

	url : {
		removeHash : function() {
			var clean_uri = window.location.protocol + "//" + window.location.host + window.location.pathname;
			window.history.replaceState({}, document.title, clean_uri);
		}
	},

	countUp : function(val) {
		var self = this;

		var options = {
		  useEasing : true, 
		  useGrouping : true, 
		  separator : ',', 
		  decimal : '.', 
		};

		var currentCredit = parseInt(Helper.format.number.removeComma($('#profile-credits').html() || $('#profile-credits').val()));
		var countUp = new CountUp("profile-credits", currentCredit, val, 0, 2.5, options);
		countUp.start();
	},
  text_truncate(str, length, ending) {
		str = str || '';
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  },
	logout(msg) {
		this.confirm.ok(WARNING, msg, function () {
			window.location = baseUrl + '/logout/';
		});
		setTimeout(() => {
			window.location = baseUrl + '/logout/';
		}, 3000);
	},
};

const Provider = {
    init : function() {
      const self =this;
      self.api.all();
    },
  
    api : {
      all : function() {
        $.ajax({
          url : baseUrl + '/providers',
          method : 'GET',
          data : {},
          beforeSend : function() {},
          success : function(resp) {
            $("#midas").html(Helper.format.number.withComma(resp.midas));
            $("#cagayan").html(Helper.format.number.withComma(resp.cagayan));
            $("#cd").html(Helper.format.number.withComma(resp.city_of_dreams));
            $("#g88").html(Helper.format.number.withComma(resp.g88));
            $("#total").html(Helper.format.number.withComma(resp.total));
            $("#total-chips").html(Helper.format.number.withComma(resp.total_chips));
            $("#oriental").html(Helper.format.number.withComma(resp.oriental));
          },
          error : function(resp) {},
          complete : function() {}
        });
      }
    }
};

const Broadcast = {
    socketHost: $('#_ip').val(),
    muteFlag: $('#mute-flag').val(),
  
    init: function () {
      const self = this;
      self.initSocket();
      self.addEvents();
    },
  
    initSocket: function () {
      console.log('init socket...'+this.socketHost);
      const self = this;
      let table_name = $('#table_name').val();
      const account_id = $('#account_id').val();
      table_name = table_name || '';
      // const socket = io.connect(self.socketHost, {query: `table_name=${table_name}&account_id=${account_id}`});
      let socket = io(self.socketHost, {
        query: `table_name=${table_name}&account_id=${account_id}`,
        transports: ['websocket'],
        upgrade: true,
        forceNew: false,
      });
      // socket.disconnect();
      // socket.removeAllListeners();
      // socket.open();
  
      socket.on('connect', () => {
         console.log('connect...');
        // socket.removeAllListeners();
      });
  
      socket.on('connect_echo', () => {
        console.log('connect_echo...');
      });
  
      socket.on('game_data', function (data) {
        console.log('game_data', data);
        let curDate = new Date();
        let offset = curDate.getTime() - data.current_time;
        console.log('time offset:'+offset+':'+data.current_time);
        let entity = {};
        if (PlayerGame && PlayerGame.oldGameData) {
          entity = JSON.parse(JSON.stringify(PlayerGame.oldGameData));
          const {beads, shoe_no, game_no, winning_cards, timer, table_status} = data;
          if (beads) entity.beads = beads; else entity.beads = "";
          if (shoe_no) entity.shoe_no = shoe_no;
          if (game_no) entity.game_no = game_no;
          if (winning_cards) entity.winning_cards = winning_cards;
          if (timer !== undefined) entity.timer = timer;
          if (table_status) entity.table_status = table_status;
          PlayerGame.api.get.gameSelectedRoomSocket(entity);
        }
      });
  
      socket.on('bet.finish', function (data) {
        console.log('bet.finish---> ', data);
        data = $.parseJSON(data);
        if (PlayerGame) {
          if (data.success) {
            PlayerGame.api.post.gameWinningResultRealTime(data);
            if (data.data.status === 'WIN' || data.data.status === 'TIE') {
              Helper.sound.play.win();
            } else {
              Helper.sound.play.lose();
            }
          } else {
            PlayerGame.lockChips(data.message);
          }
        }
      });
  
      socket.on('bet.error', function (data) {
        console.log('bet.error---> ', data);
        data = $.parseJSON(data);
        if (PlayerGame) {
          Helper.sound.play.cancel();
          PlayerGame.resetTables();
          PlayerGame.lockChips(data.message);
        }
      });
  
      socket.on('note.create', function (data) {
        data = $.parseJSON(data);
        console.log('note.create', data);
        const new_note_cnt_ele = $('#note-length');
        if (new_note_cnt_ele) {
          new_note_cnt_ele.html(data['new_note_cnt']);
        }
      });
  
      socket.on('cash.process', function (data) {
        data = $.parseJSON(data);
        console.log('cash.process', data);
  
        let title = '충전요청';
        if (data.cash.cash_kind === 'OUT') title = '환전요청';
  
        let message = `${title} 금액: ${data.cash.amount}원이 완료로 처리되었습니다.`;
        if (data.cash.status === 'CANCEL') message = `${title} 금액: ${data.cash.amount}원이 반려로 처리되었습니다. 관리자에게 문의하세요.`;
  
        Helper.confirm.info(title, message, () => {});
        if (window.PlayerLobby) PlayerLobby.api.get.credits();
        if (window.PlayerGame) PlayerGame.api.get.get_credits();
      });
  
      socket.on('account.force_logout', function (data) {
        data = $.parseJSON(data);
        Helper.logout(data.message);
      });
  
      socket.on('player.login', function (data) {
        data = $.parseJSON(data);
  
        if (data.operator_id == $('#account_id').val()) {
          Helper.sound.play.announcement();
        }
      });
  
      socket.on('online.user', function (data) {
        self.api.post.updateUserInfo(data.substr(-11), 1);
      });
  
      socket.on('offline.user', function (data) {
        self.api.post.updateUserInfo(data.substr(-11), 0);
      });
  
      socket.on('send.operator.message', function (data) {
        data = $.parseJSON(data);
  
        var has_message = false;
  
        if (data.is_operator) {
          if (data.account_id == $('#account_id').val()) {
            has_message = true;
          }
        } else {
          if (data.receiver_id == $('#account_id').val()) {
            has_message = true;
          }
        }
  
        if (has_message) {
          var requestCount = parseInt($('.announcement_total > span:last').html()) ? parseInt($('.announcement_total > span:last').html()) : 0;
          requestCount++;
  
          if (requestCount > 0) {
            $('.announcement_total > span:last').html(requestCount).show();
          } else {
            $('.announcement_total > span:last').html(requestCount).hide();
          }
          requestCount = parseInt($('.inbox > span:last').html()) ? parseInt($('.inbox > span:last').html()) : 0;
          requestCount++;
  
          if (requestCount > 0) {
            $('.inbox > span:last').html(requestCount).show();
          } else {
            $('.inbox > span:last').html(requestCount).hide();
          }
          if (typeof Inbox != 'undefined' && typeof Inbox.api != 'undefined') {
            Inbox.api.get.inbox();
          }
          Helper.sound.play.email();
        }
      });
  
      socket.on('send.player.message', function (data) {
        data = $.parseJSON(data);
  
        if (data.receiver_id == $('#account_id').val()) {
          $('#message-heartbit-indicator').show();
  
          if (typeof PlayerInbox != 'undefined' && typeof PlayerInbox.api != 'undefined') {
            PlayerInbox.api.get.inbox();
          }
  
          if (typeof PlayerLobby != 'undefined' && typeof PlayerLobby.api != 'undefined') {
            PlayerLobby.renderChat(data.reply);
            $('#chat_window_1').show();
          }
  
          if (typeof PlayerGame != 'undefined' && typeof PlayerGame.api != 'undefined') {
            PlayerGame.renderChat(data.reply);
            $('#chat_window_1').show();
          }
  
          Helper.sound.play.email();
        }
      });
  
      socket.on('request.operator.cashin', function (data) {
        data = $.parseJSON(data);
  
        if (data.operator_id == $('#account_id').val()) {
  
          var requestCount = parseInt($('.cashin > span:last').html()) ? parseInt($('.cashin > span:last').html()) : 0;
  
          if (data.status == 'CANCELED') {
            requestCount--;
          } else {
            requestCount++;
          }
  
          if (requestCount > 0) {
            $('.cashin > span:last').html(requestCount).show();
          } else {
            $('.cashin > span:last').html(requestCount).hide();
          }
          if (typeof Request != 'undefined' && typeof Request.api != 'undefined') {
            Request.api.get.cashIn();
          }
          if (self.muteFlag == 0) {
            Helper.sound.play.ding();
          }
        }
      });
  
      socket.on('request.player.cashin', function (data) {
        data = $.parseJSON(data);
  
        if (data.account_id == $('#account_id').val()) {
          var appCompany = $('#app_company').length ? $('#app_company').val() : 0;
  
          if (appCompany == 'MGM' || appCompany == 'STAR' || appCompany == 'NONI' || appCompany == 'WIDUS' || appCompany == 'KING' || appCompany == 'ANGEL' || appCompany == 'CLICK' || appCompany == 'GALAXY' || appCompany == 'SUN CITY' || appCompany == 'MIRACLE' || appCompany == 'GOOD' || appCompany == "PHIL" || appCompany == "MANILA" || appCompany == 'CENTER' || appCompany == 'TOP' || appCompany == '88' || appCompany == 'BOULEVARD' || appCompany == 'PRESTIGE') {
            Helper.confirm.ok(MANAGER, data.notice.description);
  
            if (data.status == 'ACCEPTED') {
              var current_balance = Helper.format.number.removeComma($('#profile_credits').val());
              var new_balance = parseInt(current_balance) + parseInt(data.cashin_amount);
              $('#profile_credits').val(new_balance);
              $('#coins_info2, #profile-credits').html(Helper.format.number.withComma(new_balance));
            }
          } else {
            var elemtHtml = `<li>
              <div class="message-center alert-success">
              <a href="${baseUrl}/credit">
              <div class="mail-contnet">
              <h5>${MANAGER}</h5>
              <span class="mail-desc">${data.notice.description}</span>
              <span class="time">${data.notice.created_at}</span>
              </div>
              </a>
              </div>
              </li>`;
  
            $('#ul-notice').prepend(elemtHtml);
            $('#heartbit-indicator').show();
            $('.no-notice').remove();
  
            if (data.status == 'ACCEPTED') {
              var current_balance = Helper.format.number.removeComma($('#profile-credits').val());
              var new_balance = parseInt(current_balance) + parseInt(data.cashin_amount);
              $('#profile-credits').val(Helper.format.number.withComma(new_balance));
            }
          }
  
          if (typeof PlayerCredit != 'undefined' && typeof PlayerCredit.api != 'undefined') {
            PlayerCredit.api.get.cashIn();
          }
  
          Helper.sound.play.ding();
        }
      });
  
      socket.on('request.operator.cashout', function (data) {
        data = $.parseJSON(data);
  
        if (data.cashout.operator_id == $('#account_id').val()) {
          var requestCount = parseInt($('.cashout_total > span:last').html()) ? parseInt($('.cashout_total > span:last').html()) : 0;
  
          if (data.cashout.status == 'CANCELED') {
            requestCount--;
          } else {
            requestCount++;
          }
  
          if (requestCount > 0) {
            $('.cashout_total > span:last').html(requestCount).show();
          } else {
            $('.cashout_total > span:last').html(requestCount).hide();
          }
          if (data.is_player) {
            var requestCount = parseInt($('.cashout_player > span:last').html()) ? parseInt($('.cashout_player > span:last').html()) : 0;
  
            if (data.cashout.status == 'CANCELED') {
              requestCount--;
            } else {
              requestCount++;
            }
  
            if (requestCount > 0) {
              $('.cashout_player > span:last').html(requestCount).show();
            } else {
              $('.cashout_player > span:last').html(requestCount).hide();
            }
          } else if (data.is_subagent) {
            var requestCount = parseInt($('.cashout_subagent > span:last').html()) ? parseInt($('.cashout_subagent > span:last').html()) : 0;
  
            if (data.cashout.status == 'CANCELED') {
              requestCount--;
            } else {
              requestCount++;
            }
  
            if (requestCount > 0) {
              $('.cashout_subagent > span:last').html(requestCount).show();
            } else {
              $('.cashout_subagent > span:last').html(requestCount).hide();
            }
          } else if (data.is_agent) {
            var requestCount = parseInt($('.cashout_agent > span:last').html()) ? parseInt($('.cashout_agent > span:last').html()) : 0;
  
            if (data.cashout.status == 'CANCELED') {
              requestCount--;
            } else {
              requestCount++;
            }
  
            if (requestCount > 0) {
              $('.cashout_agent > span:last').html(requestCount).show();
            } else {
              $('.cashout_agent > span:last').html(requestCount).hide();
            }
          } else {
            var requestCount = parseInt($('.cashout_distributor > span:last').html()) ? parseInt($('.cashout_distributor > span:last').html()) : 0;
  
            if (data.cashout.status == 'CANCELED') {
              requestCount--;
            } else {
              requestCount++;
            }
  
            if (requestCount > 0) {
              $('.cashout_distributor > span:last').html(requestCount).show();
            } else {
              $('.cashout_distributor > span:last').html(requestCount).hide();
            }
          }
  
          if (typeof Settlement != 'undefined' && typeof Settlement.api != 'undefined') {
            Settlement.api.get.cashOut();
          }
          if (self.muteFlag == 0) {
            Helper.sound.play.bell();
          }
        }
      });
  
      socket.on('request.player.cashout', function (data) {
        data = $.parseJSON(data);
  
        if (data.account_id == $('#account_id').val() && data.notice) {
          var appCompany = $('#app_company').length ? $('#app_company').val() : 0;
  
          if (appCompany == 'MGM' || appCompany == 'STAR' || appCompany == 'NONI' || appCompany == 'WIDUS' || appCompany == 'KING' || appCompany == 'ANGEL' || appCompany == 'CLICK' || appCompany == 'GALAXY' || appCompany == 'SUN CITY' || appCompany == 'MIRACLE' || appCompany == 'GOOD' || appCompany == "PHIL" || appCompany == "MANILA" || appCompany == 'CENTER' || appCompany == 'TOP' || appCompany == '88' || appCompany == 'BOULEVARD' || appCompany == 'PRESTIGE') {
            Helper.confirm.ok(MANAGER, data.notice.description);
  
            var current_balance = $('#profile_credits').val();
  
            if (data.status == 'CANCELED') {
              var new_balance = parseInt(current_balance) + parseInt(data.cashout_amount);
              $('#profile_credits').val(new_balance);
              $('#coins_info2, #profile-credits').html(Helper.format.number.withComma(new_balance));
            }
          } else {
            var elemtHtml = `<li>
              <div class="message-center alert-success">
              <a href="${baseUrl}/credit">
              <div class="mail-contnet">
              <h5>${MANAGER}</h5>
              <span class="mail-desc">${data.notice.description}</span>
              <span class="time">${data.notice.created_at}</span>
              </div>
              </a>
              </div>
              </li>`;
  
            $('#ul-notice').prepend(elemtHtml);
            $('#heartbit-indicator').show();
            $('.no-notice').remove();
  
            var current_balance = Helper.format.number.removeComma($('#profile-credits').val());
  
            if (data.status == 'CANCELED') {
              var new_balance = parseInt(current_balance) + parseInt(data.cashout_amount);
              $('#profile-credits').val(Helper.format.number.withComma(new_balance));
            }
          }
  
          if (typeof PlayerCredit != 'undefined' && typeof PlayerCredit.api != 'undefined') {
            PlayerCredit.api.get.cashOut();
          }
  
          Helper.sound.play.bell();
        }
      });
  
      socket.on('request.refund', function (data) {
        data = $.parseJSON(data);
  
        if (data.account_id == $('#account_id').val()) {
          Helper.confirm.show('Refund', data.notice, function () {
            var current_balance = Helper.format.number.removeComma($('#profile-credits').html() || $('#profile-credits').val());
            var new_balance = parseInt(current_balance) + parseInt(data.refund_amount);
            self.api.post.gameDealRefund(data.game_provider_id, data.game_provider_table_id, data.game_referrence_no, new_balance);
          });
        }
      });
  
      socket.on('request.account', function (data) {
        data = $.parseJSON(data);
  
        if (data.operator_id == $('#account_id').val()) {
          var requestCount = parseInt($('.account_total > span:last').html()) ? parseInt($('.account_total > span:last').html()) : 0;
          requestCount++;
          $('.account_total > span:last').html(requestCount).show();
  
          var requestCount = parseInt($('.account_inquiry > span:last').html()) ? parseInt($('.account_inquiry > span:last').html()) : 0;
          requestCount++;
          $('.account_inquiry > span:last').html(requestCount).show();
  
          if (typeof Inquiry != 'undefined' && typeof Inquiry.api != 'undefined') {
            Inquiry.api.get.all();
          }
          if (self.muteFlag == 0) {
            Helper.sound.play.knock();
          }
        }
      });
  
      socket.on('instant.message', function (data) {
        data = $.parseJSON(data);
        if (data.player_id == $('#account_id').val()) {
          var requestCount = parseInt($('.announcement_total > span:last').html()) ? parseInt($('.announcement_total > span:last').html()) : 0;
          requestCount++;
  
          if (requestCount > 0) {
            $('.announcement_total > span:last').html(requestCount).show();
          } else {
            $('.announcement_total > span:last').html(requestCount).hide();
          }
          if (typeof Message != 'undefined' && typeof Message.api != 'undefined') {
            Message.api.get.all();
          } else {
            Helper.confirm.ok(data.subject, data.message);
            Helper.sound.play.beep();
          }
        }
      });
  
      socket.on('cash.giveaway', function (data) {
        data = $.parseJSON(data);
  
        if (data.account_id == $('#account_id').val()) {
          $('.modal-open').css('padding-right', '0');
          $('#confirm-ok-modal').remove();
          $('.modal-backdrop.in').remove();
  
          Helper.confirm.ok(MANAGER, data.notice.description);
  
          var elemtHtml = `<li>
            <div class="message-center alert-success">
            <a href="#">
            <div class="mail-contnet">
            <h5>${MANAGER}</h5>
            <span class="mail-desc">${data.notice.description}</span>
            <span class="time">${data.notice.created_at}</span>
            </div>
            </a>
            </div>
            </li>`;
  
          $('#ul-notice').prepend(elemtHtml);
          $('#heartbit-indicator').show();
          $('.no-notice').remove();
  
          var current_balance = $('#profile_credits').val();
          var new_balance = parseInt(current_balance) + parseInt(data.amount);
          $('#profile_credits').val(new_balance);
          $('#profile-credits').html(Helper.format.number.withComma(new_balance));
          if (self.muteFlag == 0) {
            Helper.sound.play.email();
          }
        }
      });
  
      socket.on('subscribe', function (data) {
        if (typeof TableMonitoring != 'undefined' && typeof TableMonitoring.joinRoom != 'undefined') {
          TableMonitoring.joinRoom(data);
        }
      });
  
      socket.on('unsubscribe', function (data) {
        if (typeof TableMonitoring != 'undefined' && typeof TableMonitoring.leaveRoom != 'undefined') {
          TableMonitoring.leaveRoom(data);
        }
      });
  
      socket.on('kick.player', function (data) {
        if ($('#account_id').val() == data.id) {
          if (typeof PlayerGame != 'undefined' && typeof PlayerGame.api != 'undefined') {
            PlayerGame.kickFlag = 1;
          }
        }
      });
  
      socket.on('player.logout', function (data) {
        data = $.parseJSON(data);
  
        if ($('#account_id').val() == data.account_id) {
          if (typeof PlayerGame != 'undefined' && typeof PlayerGame.api != 'undefined') {
            PlayerGame.logoutFlag = 1;
          } else {
            window.location = baseUrl + '/logout';
          }
        }
      });
  
      socket.on('request.operator.bank', function (data) {
        data = $.parseJSON(data);
  
        if (data.operator_id == $('#account_id').val()) {
          var requestCount = parseInt($('.announcement_total > span:last').html()) ? parseInt($('.announcement_total > span:last').html()) : 0;
          requestCount++;
          $('.announcement_total > span:last').html(requestCount).show();
  
          var requestCount = parseInt($('.bank-request > span:last').html()) ? parseInt($('.bank-request > span:last').html()) : 0;
          requestCount++;
          $('.bank-request > span:last').html(requestCount).show();
  
          if (typeof BankRequest != 'undefined' && typeof BankRequest.api != 'undefined') {
            BankRequest.api.get.all();
          }
  
          Helper.sound.play.announcement();
        }
      });
  
      socket.on('request.player.bank', function (data) {
        data = $.parseJSON(data);
  
        if (data.account_id == $('#account_id').val()) {
          // Helper.confirm.info(MANAGER, data.message);
          Helper.sound.play.announcement();
        }
      });
  
      socket.on('superadmin.tablelimit', function () {
        if (typeof TableLimit != 'undefined' && typeof TableLimit.api != 'undefined') {
          TableLimit.api.get.tables(TableLimit.page);
        }
      });
  
      socket.on('disconnect', () => {
        socket.removeAllListeners();
      });
    },
  
    joinRoom: function (id, nickName, roomName, bet) {
      var self = this;
      var socket = io.connect(self.socketHost);
  
      socket.emit("subscribe", {
        id: id,
        room: roomName,
        nickname: nickName,
        bet: bet
      });
    },
  
    leaveRoom: function (id, nickName, roomName, bet) {
      var self = this;
      var socket = io.connect(self.socketHost);
  
      socket.emit("unsubscribe", {
        id: id
      });
    },
  
    kickPlayer: function (id) {
      var self = this;
      var socket = io.connect(self.socketHost);
  
      socket.emit("kick.player", {
        id: id,
      });
    },
  
    addEvents: function () {
      $('#heartbit-indicator').parent().unbind().bind('click', function (e) {
        e.preventDefault();
  
        if ($('#heartbit-indicator').css('display') == 'block') {
          this.api.post.updateNotification();
        }
      });
    },
  
    api: {
      post: {
        updateUserInfo: function (socket_id, is_online) {
          // $.ajax({
          //   url: baseUrl + '/account/update/online',
          //   method: 'POST',
          //   data: {
          //     'socket_id': socket_id,
          //     'is_online': is_online,
          //     '_token': $('#_token').val()
          //   },
          //   beforeSend: function () {},
          //   success: function (resp) {},
          //   error: function (resp) {},
          //   complete: function () {}
          // });
        },
  
        updateNotification: function () {
          $.ajax({
            url: baseUrl + '/notification/read',
            method: 'GET',
            beforeSend: function () {},
            success: function (resp) {
              $('#heartbit-indicator').hide();
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
  
        gameDealRefund: function (game_provider_id, game_provider_table_id, game_ref, new_balance) {
          $.ajax({
            url: baseUrl + '/game/deal-refund',
            method: 'POST',
            data: {
              'game_provider_id': game_provider_id,
              'game_provider_table_id': game_provider_table_id,
              'game_referrence_no': game_ref,
              '_token': $('#_token').val()
            },
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                if (typeof PlayerGame != 'undefined') {
                  if ($('#game-referrence-no').val() == game_ref) {
                    $('#bet-amount').html(0);
                    PlayerGame.lockChips('', false);
                    PlayerGame.dealFlag = 0;
                    PlayerGame.callFlag = 0;
                  }
                  PlayerGame.countUp(new_balance);
                } else {
                  Helper.countUp(new_balance);
                }
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        }
      }
    }
};

const RenderUtil = {
    renderFirstBoardTable: function (table_id) {
      const self = PlayerGame;
  
      let top = 0;
      let left = 0;
      let col = 0;
      let colCounter = 1;
      let topCounter = 0;
      let leftCounter = 1;
      let maxCols = 108;
      let colSize = 37;
      if (self.appCompany === 'VENETIAN') {
        colSize = 42;
      }
      if (self.osPlatform.toLowerCase().indexOf('ios') >= 0 || self.osPlatform.toLowerCase().indexOf('android') >= 0 ) {
        colSize = 25;
      }
      if ($(window).width() >= 1700) {
        maxCols = 108;
      }
  
      // Generate empty board
      for (let i = 0; i < maxCols; i++) {
        if (col === 6) {
          topCounter = top;
          leftCounter += colSize;
          col = 1;
          colCounter++;
        } else {
          col++;
        }
        let style = 'style="top:' + topCounter + 'px; left:' + leftCounter + 'px;"';
        let elemHtml = '<div class="pnl_1_item b_' + colCounter + ' b' + i + ' tb' + table_id + '"' + style + '></div>';
        $('.pnl_1').append(elemHtml);
  
        topCounter += colSize;
      }
    },
  
    renderSecondBoardTable: function (table_id) {
      const self = PlayerGame;
  
      let top = 0;
      let left = 0;
      let col = 0;
      let colCounter = 1;
      let topCounter = 0;
      let leftCounter = 1;
      let maxCols = 318;
      let colSize = 17;
  
      if ($(window).width() >= 1700) {
        maxCols = 388;
      }
  
      // Generate empty board
      for (let i = 0; i < maxCols; i++) {
        if (col == 6) {
          topCounter = top;
          if (self.osPlatform.toLowerCase().indexOf('ios') >= 0 || self.osPlatform.toLowerCase().indexOf('android') >= 0 ){
            leftCounter += 15;
          } else {
            leftCounter += colSize;
          }
          col = 1;
          colCounter++;
        } else {
          col++;
        }
        let style = 'style="top:' + topCounter + 'px; left:' + leftCounter + 'px;"';
        let elemHtml = '<div class="pnl_2_item c_' + colCounter + ' c' + i + ' tb' + table_id + '"' + style + '></div>';
        $('.pnl_2').append(elemHtml);
  
        if (self.osPlatform.toLowerCase().indexOf('ios') >= 0 || self.osPlatform.toLowerCase().indexOf('android') >= 0 ){
          topCounter += 15;
        } else {
          topCounter += colSize;
        }
      }
    },
  
    renderThirdBoardTable: function (table_id) {
      const self = PlayerGame;
  
      let top = 0;
      let left = 0;
      let col = 0;
      let colCounter = 1;
      let topCounter = 0;
      let leftCounter = 1;
      let maxCols = 600;
      let colSize = 9;
  
      if ($(window).width() >= 1700) {
        maxCols = 726;
      }
  
      // Generate empty board
      for (let i = 0; i < maxCols; i++) {
        if (col == 6) {
          topCounter = top;
          leftCounter += colSize;
          col = 1;
          colCounter++;
        } else {
          col++;
        }
  
        let style = 'style="top:' + topCounter + 'px; left:' + leftCounter + 'px;"';
        let elemHtml = '<div class="pnl_3_item d_' + colCounter + ' d' + i + ' tb' + table_id + '"' + style + '></div>';
        $('.pnl_3').append(elemHtml);
        topCounter += colSize;
      }
    },
  
    renderFourthBoardTable: function (table_id) {
      const self = PlayerGame;
  
      let top = 0;
      let left = 0;
      let col = 0;
      let colCounter = 1;
      let topCounter = 0;
      let leftCounter = 1;
      let maxCols = 300;
      let colSize = 9;
      if ($(window).width() >= 1700) {
        maxCols = 372;
      }
  
      // Generate empty board
      for (let i = 0; i < maxCols; i++) {
        if (col == 6) {
          topCounter = top;
          leftCounter += colSize;
          col = 1;
          colCounter++;
        } else {
          col++;
        }
  
        let style = 'style="top:' + topCounter + 'px; left:' + leftCounter + 'px;"';
        let elemHtml = '<div class="pnl_4_item e_' + colCounter + ' e' + i + ' tb' + table_id + '"' + style + '></div>';
        $('.pnl_4').append(elemHtml);
        topCounter += colSize;
      }
    },
  
    renderFifthBoardTable: function (table_id) {
      const self = PlayerGame;
  
      let top = 0;
      let left = 0;
      let col = 0;
      let colCounter = 1;
      let topCounter = 0;
      let leftCounter = 1;
      let maxCols = 300;
      let colSize = 9;
      if ($(window).width() >= 1700) {
        maxCols = 372;
      }
  
      // Generate empty board
      for (let i = 0; i < maxCols; i++) {
        if (col == 6) {
          topCounter = top;
          leftCounter += colSize;
          col = 1;
          colCounter++;
        } else {
          col++;
        }
  
        let style = 'style="top:' + topCounter + 'px; left:' + leftCounter + 'px;"';
        let elemHtml = '<div class="pnl_5_item f_' + colCounter + ' f' + i + ' tb' + table_id + '"' + style + '></div>';
        $('.pnl_5').append(elemHtml);
        topCounter += colSize;
      }
    },
  
    renderBeadRoad: function (bead_road, winning_cards, table_id) {
      const self = PlayerGame;
  
      if (self.predictFlag) {
        $(".pnl_1_item:not('.bead-road'):first").addClass(bead_road).fadeIn().delay(200).fadeOut(function () {
          $(".pnl_1_item:not('.bead-road'):first").removeClass(bead_road).show();
        });
  
        return;
      }
      let last_col_threshold = 66;
      if (self.osPlatform.toLowerCase().indexOf('ios') >= 0 || self.osPlatform.toLowerCase().indexOf('android') >= 0 )
        last_col_threshold = 23;
  
      if ( bead_road.length >= last_col_threshold ){
        if ( $('#scoreboard .pnl_1').css('overflow-x') != 'auto' ){
          $('#scoreboard .pnl_1').css('overflow-x','auto');
          $('#scoreboard .pnl_1').scrollLeft("150");
        }
      }
      if (bead_road.length > $('.bead-road').length) {
        for (let idx = 0; idx < bead_road.length; idx++) {
          if (!$('.item-' + idx).length) {
            // Render Beads
            if (!PlayerGame.flag) {
              $(".pnl_1_item:not('.bead-road'):first").addClass('bead-road').addClass('item-' + idx).addClass(bead_road[idx]);
              self.countSummaryBeads();
            } else {
              $(".pnl_1_item:not('.bead-road'):first").addClass('bead-road').addClass('item-' + idx).addClass(bead_road[idx]).fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
              self.countSummaryBeads();
              GameUtil.validateWinner(bead_road[idx]);
  
              if (winning_cards) {
                RenderUtil.renderWinningCards(winning_cards, bead_road[idx]);
              }
            }
  
            Helper.confirm.hide();
          }
        }
      } 
  
      RenderUtil.renderBigRoad(bead_road, table_id);
    },
  
    renderBigRoad: function (bead_road, table_id) {
      const self = PlayerGame;
  
      let bankerBead = ['a', 'b', 'c', 'd'];
      let playerBead = ['e', 'f', 'g', 'h'];
      let tieBead = ['i', 'j', 'k', 'l'];
  
      let uniqueCount = 0;
      let bankerCount = 0;
      let playerCount = 0;
      let tieCount = 0;
      let tieSameCount = 1;
  
      let biggestNum = 0;
  
      let col = 1;
      let marker = '';
  
      for (let i = 0; i < bead_road.length; i++) {
        if ($.inArray(bead_road[i], playerBead) != -1) // Check if Player Bead
        {
          marker = 'player';
        } else if ($.inArray(bead_road[i], bankerBead) != -1) // Check if Banker Bead
        {
          marker = 'banker';
        } else // If tie, put number on the last bead
        {
          marker = 'tie';
        }
  
        if (marker == 'tie') {
          // Check if tie is existing
          if (!$('.tie-' + table_id + '-' + i).length) {
            // If tie, check the last inserted bead
            var last_tie_bead = (i - tieCount) - 1;
            var existing_marker_tie = $('.big-' + table_id + '-' + last_tie_bead).find('span').html() || 0;
  
            if (!existing_marker_tie) {
              // Check if the last bead exists
              if ($('.big-' + table_id + '-' + last_tie_bead).length) {
                // Add 1 to the last bead
                $('.big-' + table_id + '-' + last_tie_bead).append('<span class="big-road-tie tie-' + table_id + '-' + i + '">1</span>');
              } else {
                // Else insert in first  column but check if there are ties
                var existing_marker_column_tie = $('.c0').find('span').html() || 0;
  
                if (!existing_marker_column_tie) {
                  $('.c0').append('<span class="big-road-tie tie-' + table_id + '-' + i + '">1</span>');
                } else {
                  // If there are ties in the bead, increment it by 1
                  existing_marker_column_tie = parseInt(existing_marker_column_tie) + 1;
                  $('.c0').find('span').addClass('tie-' + table_id + '-' + i).html(existing_marker_column_tie);
                }
              }
            } else {
              // If there are ties in the bead, increment it by 1 and add the class i to prevent multiple tie counts
              existing_marker_tie = parseInt(existing_marker_tie) + 1;
              $('.big-' + table_id + '-' + last_tie_bead).find('span').addClass('tie-' + table_id + '-' + i);
              $('.big-' + table_id + '-' + last_tie_bead).find('span').html(existing_marker_tie);
            }
          }
  
          tieCount++;
        } else {
          var row_id = (i - tieCount);
  
          if (row_id == 0) {
            // Put unique id to each bead
            if (marker == 'banker') {
              bankerCount++;
              uniqueCount = bankerCount;
            } else if (marker == 'player') {
              playerCount++;
              uniqueCount = playerCount;
            }
  
            // Insert just once
            if (!$('.big-' + table_id + '-' + row_id).length)
              $('.c' + row_id + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road');
          } else {
            // Check if element is exists
            if (!$('.big-' + table_id + '-' + row_id).length) {
              // Check last inserted bead
              $("div[class*=big-" + table_id + "]").each(function () {
                var currentNum = parseInt($(this).attr('class').split(' ')[4].split('-')[2]);
  
                if (currentNum > biggestNum) {
                  biggestNum = currentNum;
                  uniqueCount = parseInt($(this).attr('class').split(' ')[7].split('-')[2]);
                }
              });
  
              if (!$('.big-' + table_id + '-' + row_id).length && $('.big-' + table_id + '-' + biggestNum).length) {
                var existing_marker = $('.big-' + table_id + '-' + biggestNum).attr('class').split(' ')[7].split('-')[0];
  
                // If existing marker is equal to new marker, insert new row below it
                if (existing_marker == marker) {
                  if ($('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').length) {
                    // Check the length of the last column
                    var existing_marker_id = $('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[7].split('-')[2];
                    var prev_row = parseInt($('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[2].split('c')[1]);
  
                    // First Dragon
                    if ($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).length == 6) {
                      // Get the row number and add 6 to move to another column
                      var next_col = prev_row + 6;
                      // Check if element is exists
                      if (!$('.big-' + table_id + '-' + row_id).length) {
                        if (self.predictFlag) {
                          $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                            $('.c' + next_col + '.tb' + table_id).removeClass('big-' + table_id + '-' + row_id).removeClass('big-road-' + table_id).removeClassStartingWith('_min').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('big-road').removeClass('dragon').show();
                          });
                        } else {
                          if (!self.scoreBoardFlag) {
                            $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon');
                          } else {
                            $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                          }
                        }
                      }
                    } else {
                      // Check if there are bead on the next
                      var prev_col = $('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).attr('class').split(' ')[1];
  
                      // 2nd Dragon
                      if ($('.' + prev_col + '.big-road-' + table_id).length == 6) {
                        // Get the row number and add 6 to move to another column
                        var next_col = prev_row + 6;
  
                        // Check if element is exists
                        if (!$('.big-' + table_id + '-' + row_id).length) {
                          if (self.predictFlag) {
                            $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                              $('.c' + next_col + '.tb' + table_id).removeClass('big-' + table_id + '-' + row_id).removeClass('big-road-' + table_id).removeClassStartingWith('_min').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('big-road').removeClass('dragon').show();
                            });
                          } else {
                            if (!self.scoreBoardFlag)
                              $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon');
                            else
                              $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                          }
                        }
                      } else {
                        // Check if the next row has dragon
                        if ($('.big-' + table_id + '-' + biggestNum).next().hasClass('dragon')) {
                          // 3rd dragon
                          var next_col = parseInt($('.big-' + table_id + '-' + biggestNum).attr('class').split(' ')[2].split('c')[1]);
                          var next_col = next_col + 6;
  
                          if (self.predictFlag) {
                            $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                              $('.c' + next_col + '.tb' + table_id).removeClass('big-' + table_id + '-' + row_id).removeClass('big-road-' + table_id).removeClassStartingWith('_min').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('big-road').removeClass('dragon').show();
                            });
                          } else {
                            if (!self.scoreBoardFlag)
                              $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon');
                            else
                              $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                          }
                        } else {
                          // Check if bead is dragon to follow its path
                          if ($('.big-' + table_id + '-' + biggestNum).hasClass('dragon')) {
                            // Dragon Path
                            var next_col = parseInt($('.big-' + table_id + '-' + biggestNum).attr('class').split(' ')[2].split('c')[1]);
                            var next_col = next_col + 6;
  
                            if (self.predictFlag) {
                              $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                                $('.c' + next_col + '.tb' + table_id).removeClass('big-' + table_id + '-' + row_id).removeClass('big-road-' + table_id).removeClassStartingWith('_min').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('big-road').removeClass('dragon').show();
                              });
                            } else {
                              if (!self.scoreBoardFlag)
                                $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon');
                              else
                                $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                            }
                          } else {
                            if (self.predictFlag) {
                              $('.big-' + table_id + '-' + biggestNum).next().addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').fadeIn().delay(200).fadeOut(function () {
                                $('.big-' + table_id + '-' + biggestNum).next().removeClass('big-' + table_id + '-' + row_id).removeClass('big-road-' + table_id).removeClassStartingWith('_min').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('big-road').show();
                              });
                            } else {
                              if (!self.scoreBoardFlag) {
                                $('.big-' + table_id + '-' + biggestNum).next().addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road');
                              } else {
                                $('.big-' + table_id + '-' + biggestNum).next().addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  // Check the length of the last column
                  if ($('.' + existing_marker + '-' + table_id + '-' + uniqueCount).length) {
                    var existing_marker_id = $('.' + existing_marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[7].split('-')[2];
                    var prev_row = parseInt($('.' + existing_marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[2].split('c')[1]);
                    var last_col = 0;
  
                    // If new bead, insert it to next column
                    // Get the last bead column and add plus 1 to go to next column (dragon not included)
                    if ($('.' + existing_marker + '-' + existing_marker_id).length >= 6) {
                      last_col = parseInt($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):first').attr('class').split(' ')[1].split('_')[1]) + 1;
                    } else {
                      last_col = parseInt($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):last').attr('class').split(' ')[1].split('_')[1]) + 1;
                    }
  
                    // Put unique id to each bead
                    if (marker == 'banker') {
                      bankerCount++;
                      uniqueCount = bankerCount;
                    } else if (marker == 'player') {
                      playerCount++;
                      uniqueCount = playerCount;
                    }
  
                    if (self.predictFlag) {
                      $('.c_' + last_col + '.tb' + table_id + ':first').addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').fadeIn().delay(200).fadeOut(function () {
                        $('.c_' + last_col + '.tb' + table_id + ':first').removeClass('big-' + table_id + '-' + row_id).removeClass('big-road-' + table_id).removeClassStartingWith('_min').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('big-road').show();
                      });
                    } else {
                      if (!self.scoreBoardFlag)
                        $('.c_' + last_col + '.tb' + table_id + ':first').addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road');
                      else
                        $('.c_' + last_col + '.tb' + table_id + ':first').addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                    }
                  }
                }
              }
            } else {
              // Put unique id to each bead
              if (marker == 'banker') {
                bankerCount++;
                uniqueCount = bankerCount;
              } else if (marker == 'player') {
                playerCount++;
                uniqueCount = playerCount;
              }
            }
          }
        }
      }
  
      biggestNum = 0;
      $("div[class*=big-" + table_id + "]").each(function () {
        var currentNum = parseInt($(this).attr('class').split(' ')[4].split('-')[2]);
  
        if (currentNum > biggestNum) {
          biggestNum = currentNum;
        }
      });
      let last_col_threshold = 33;
      if (self.osPlatform.toLowerCase().indexOf('ios') >= 0 || self.osPlatform.toLowerCase().indexOf('android') >= 0 )
        last_col_threshold = 23;
      // console.log('biggestNum:'+biggestNum);
      if ( biggestNum > 20 ){
        last_col = parseInt($('.big-'+table_id+'-'+biggestNum).attr('class').split(' ')[1].split('_')[1]);
        // console.log('last_col:'+last_col);
        if ( last_col >= last_col_threshold ){
          if ( $('#scoreboard .pnl_2').css('overflow-x') != 'auto' ){
            $('#scoreboard .pnl_2').css('overflow-x','auto');
            $('#scoreboard .pnl_2').scrollLeft("180");
          }
        }  
      }
      RenderUtil.renderBigEyeRoad(bead_road, table_id);
      RenderUtil.renderSmallRoad(bead_road, table_id);
      RenderUtil.renderCockroachRoad(bead_road, table_id);
    },
  
    renderBigEyeRoad: function (bead_road, table_id) {
      const self = PlayerGame;
  
      let bigEyeBeads = [];
      let uniqueCount = 0;
      let bankerCount = 0;
      let playerCount = 0;
      let biggestNum = 0;
  
      let col = 1;
      let marker = '';
      let startingPoint = null;
  
      // Starting point B2 else C1 of Big Road
      // Check if B2 bead exists in Big Road
      if ($('.c7').hasClass('big-road')) {
        startingPoint = 'c7';
      } else {
        startingPoint = 'c12';
      }
  
      // Check if starting point exists
      if (!$('.' + startingPoint + '.big-road').length) {
        return;
      }
  
      // Get the starting point number
      let startingBead = parseInt($('.' + startingPoint).attr('class').split(' ')[4].split('-')[2]);
  
      // Get the Big Road beads length
      let bigRoadBeadLength = $('.big-road').length;
  
      for (let i = startingBead; i < bigRoadBeadLength; i++) {
        // Get the cel number
        let cel = parseInt($('.big-' + table_id + '-' + i).attr('class').split(' ')[2].split('c')[1]);
  
        // Check if the bead position is in first column of Big Road
        if ($.inArray(cel, self.bigRoadColumns) != -1) {
          // Apply rule 1 : check the previous 2 columns to the left if equal in length
  
          // Get the previous 1st and 2nd cell
          var prevCol1 = cel - 6;
          var prevCol2 = prevCol1 - 6;
  
          // Get the column class
          var prevCol1 = $('.c' + prevCol1).attr('class').split(' ')[1];
          var prevCol2 = $('.c' + prevCol2).attr('class').split(' ')[1];
  
          if ($('.' + prevCol1 + '.big-road:not(.dragon)').length == $('.' + prevCol2 + '.big-road:not(.dragon)').length) {
            // If equal in length, true (red mark)
            bigEyeBeads.push('a');
          } else {
            // If not, false (blue mark)
            bigEyeBeads.push('e');
          }
  
          //console.log('col : ' + cel + ' | prev col : ' + prevCol1 + ' ' + prevCol2);
        } else {
          // If not, apply rule 2 : check the previous column, compare cel 1 and 2 if match
  
          // Get previous left cell in a row
          var prevRow2 = cel - 6;
          var prevRow1 = prevRow2 - 1;
  
          if ($('.c' + prevRow1 + '.big-road').length == $('.c' + prevRow2 + '.big-road').length || $('.c' + cel).hasClass('dragon')) {
            // If previous 2 cels is match
            bigEyeBeads.push('a');
          } else {
            bigEyeBeads.push('e');
          }
  
          //console.log('row : ' + cel + ' | prev col : ' + prevRow1 + ' ' + prevRow2);
          //console.log($('.c' + prevRow1 + '.big-road').length + ' | ' + $('.c' + prevRow2 + '.big-road').length);
        }
      }
  
      bead_road = bigEyeBeads.join('');
  
      // Iterate the collected beads
      for (let i = 0; i < bead_road.length; i++) {
        if (bead_road[i] == 'a') {
          marker = 'red_mark';
        } else {
          marker = 'blue_mark';
        }
  
        var row_id = i;
  
        if (row_id == 0) {
          // Put unique id to each bead
          if (marker == 'red_mark') {
            bankerCount++;
            uniqueCount = bankerCount;
          } else if (marker == 'blue_mark') {
            playerCount++;
            uniqueCount = playerCount;
          }
  
          // Insert just once
          if (!$('.eye-' + table_id + '-' + row_id).length)
            $('.d' + row_id + '.tb' + table_id).addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road');
        } else {
          // Check if element is exists
          if (!$('.eye-' + table_id + '-' + row_id).length) {
            // Check last inserted bead
            $("div[class*=eye-" + table_id + "]").each(function () {
              var currentNum = parseInt($(this).attr('class').split(' ')[4].split('-')[2]);
  
              if (currentNum > biggestNum) {
                biggestNum = currentNum;
                uniqueCount = parseInt($(this).attr('class').split(' ')[7].split('-')[2]);
              }
            });
  
            if (!$('.eye-' + table_id + '-' + row_id).length && $('.eye-' + table_id + '-' + biggestNum).length) {
              var existing_marker = $('.eye-' + table_id + '-' + biggestNum).attr('class').split(' ')[7].split('-')[0];
  
              // If existing marker is equal to new marker, insert new row below it
              if (existing_marker == marker) {
                if ($('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').length) {
                  // Check the length of the last column
                  var existing_marker_id = $('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[7].split('-')[2];
                  var prev_row = parseInt($('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[2].split('d')[1]);
  
                  // First Dragon
                  if ($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).length == 6) {
                    // Get the row number and add 6 to move to another column
                    var next_col = prev_row + 6;
                    // Check if element is exists
  
                    if (!$('.eye-' + table_id + '-' + row_id).length) {
                      if (self.predictFlag) {
                        $('.d' + next_col + '.tb' + table_id).addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                          $('.d' + next_col + '.tb' + table_id).removeClass('eye-' + table_id + '-' + row_id).removeClass('eye-road-' + table_id).removeClassStartingWith('_mark').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('eye-road').removeClass('dragon').show();
                        });
                      } else {
                        if (!self.scoreBoardFlag)
                          $('.d' + next_col + '.tb' + table_id).addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').addClass('dragon');
                        else
                          $('.d' + next_col + '.tb' + table_id).addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                      }
                    }
                  } else {
                    // Check if there are bead on the next
                    var prev_col = $('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).attr('class').split(' ')[1];
  
                    // 2nd Dragon
                    if ($('.' + prev_col + '.eye-road-' + table_id).length == 6) {
                      // Get the row number and add 6 to move to another column
                      var next_col = prev_row + 6;
  
                      // Check if element is exists
                      if (!$('.eye-' + table_id + '-' + row_id).length) {
                        if (self.predictFlag) {
                          $('.d' + next_col + '.tb' + table_id).addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                            $('.d' + next_col + '.tb' + table_id).removeClass('eye-' + table_id + '-' + row_id).removeClass('eye-road-' + table_id).removeClassStartingWith('_mark').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('eye-road').removeClass('dragon').show();
                          });
                        } else {
                          if (!self.scoreBoardFlag)
                            $('.d' + next_col + '.tb' + table_id).addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').addClass('dragon');
                          else
                            $('.d' + next_col + '.tb' + table_id).addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                        }
                      }
                    } else {
                      // Check if the next row has dragon
                      if ($('.eye-' + table_id + '-' + biggestNum).next().hasClass('dragon')) {
                        // 3rd dragon
                        var next_col = parseInt($('.eye-' + table_id + '-' + biggestNum).attr('class').split(' ')[2].split('d')[1]);
                        var next_col = next_col + 6;
  
                        if (self.predictFlag) {
                          $('.d' + next_col + '.tb' + table_id).addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                            $('.d' + next_col + '.tb' + table_id).removeClass('eye-' + table_id + '-' + row_id).removeClass('eye-road-' + table_id).removeClassStartingWith('_mark').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('eye-road').removeClass('dragon').show();
                          });
                        } else {
                          if (!self.scoreBoardFlag)
                            $('.d' + next_col + '.tb' + table_id).addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').addClass('dragon');
                          else
                            $('.d' + next_col + '.tb' + table_id).addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                        }
                      } else {
                        // Check if bead is dragon to follow its path
                        if ($('.eye-' + table_id + '-' + biggestNum).hasClass('dragon')) {
                          // Dragon Path
                          var next_col = parseInt($('.eye-' + table_id + '-' + biggestNum).attr('class').split(' ')[2].split('d')[1]);
                          var next_col = next_col + 6;
  
                          if (self.predictFlag) {
                            $('.d' + next_col + '.tb' + table_id).addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                              $('.d' + next_col + '.tb' + table_id).removeClass('eye-' + table_id + '-' + row_id).removeClass('eye-road-' + table_id).removeClassStartingWith('_mark').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('eye-road').removeClass('dragon').show();
                            });
                          } else {
                            if (!self.scoreBoardFlag)
                              $('.d' + next_col + '.tb' + table_id).addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').addClass('dragon');
                            else
                              $('.d' + next_col + '.tb' + table_id).addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                          }
                        } else {
                          if (self.predictFlag) {
                            $('.eye-' + table_id + '-' + biggestNum).next().addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').fadeIn().delay(200).fadeOut(function () {
                              $('.eye-' + table_id + '-' + biggestNum).next().removeClass('eye-' + table_id + '-' + row_id).removeClass('eye-road-' + table_id).removeClassStartingWith('_mark').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('eye-road').show();
                            });
                          } else {
                            if (!self.scoreBoardFlag)
                              $('.eye-' + table_id + '-' + biggestNum).next().addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road');
                            else
                              $('.eye-' + table_id + '-' + biggestNum).next().addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                // Check the length of the last column
                if ($('.' + existing_marker + '-' + table_id + '-' + uniqueCount).length) {
                  var existing_marker_id = $('.' + existing_marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[7].split('-')[2];
                  var prev_row = parseInt($('.' + existing_marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[2].split('c')[1]);
                  var last_col = 0;
  
                  // If new bead, insert it to next column
                  // Get the last bead column and add plus 1 to go to next column (dragon not included)
                  if ($('.' + existing_marker + '-' + existing_marker_id).length >= 6) {
                    last_col = parseInt($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):first').attr('class').split(' ')[1].split('_')[1]) + 1;
                  } else {
                    last_col = parseInt($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):last').attr('class').split(' ')[1].split('_')[1]) + 1;
                  }
  
                  // Put unique id to each bead
                  if (marker == 'red_mark') {
                    bankerCount++;
                    uniqueCount = bankerCount;
                  } else if (marker == 'blue_mark') {
                    playerCount++;
                    uniqueCount = playerCount;
                  }
  
                  if (self.predictFlag) {
                    $('.d_' + last_col + '.tb' + table_id + ':first').addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').fadeIn().delay(200).fadeOut(function () {
                      $('.d_' + last_col + '.tb' + table_id + ':first').removeClass('eye-' + table_id + '-' + row_id).removeClass('eye-road-' + table_id).removeClassStartingWith('_mark').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('eye-road').show();
                    });
                  } else {
                    if (!self.scoreBoardFlag)
                      $('.d_' + last_col + '.tb' + table_id + ':first').addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road');
                    else
                      $('.d_' + last_col + '.tb' + table_id + ':first').addClass('eye-' + table_id + '-' + row_id).addClass('eye-road-' + table_id).addClass(bead_road[i] + '_mark').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('eye-road').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                  }
                }
              }
            }
          } else {
            // Put unique id to each bead
            if (marker == 'red_mark') {
              bankerCount++;
              uniqueCount = bankerCount;
            } else if (marker == 'blue_mark') {
              playerCount++;
              uniqueCount = playerCount;
            }
          }
        }
      }
  
      RenderUtil.renderBigEyeRoadPrediction();
    },
  
    renderSmallRoad: function (bead_road, table_id) {
      const self = PlayerGame;
  
      let smallRoadBeads = [];
  
      let uniqueCount = 0;
      let bankerCount = 0;
      let playerCount = 0;
  
      let biggestNum = 0;
  
      let col = 1;
      let marker = '';
      let startingPoint = null;
  
      // Starting point C2 else D1 of Big Road
      // Check if C2 bead exists in Big Road
      if ($('.c13').hasClass('big-road')) {
        startingPoint = 'c13';
      } else {
        startingPoint = 'c18';
      }
  
      // Check if starting point exists
      if (!$('.' + startingPoint + '.big-road').length) {
        return;
      }
  
      // Get the starting point number
      var startingBead = parseInt($('.' + startingPoint).attr('class').split(' ')[4].split('-')[2]);
  
      // Get the Big Road beads length
      var bigRoadBeadLength = $('.big-road').length;
  
      for (let i = startingBead; i < bigRoadBeadLength; i++) {
        // Get the cel number
        var cel = parseInt($('.big-' + table_id + '-' + i).attr('class').split(' ')[2].split('c')[1]);
  
        // Check if the bead position is in first column of Big Road
        if ($.inArray(cel, self.bigRoadColumns) != -1) {
          // Apply rule 1 : check the previous 2 columns to the left if equal in length. skip 1 column in between
  
          // Get the previous 1st and 2nd cell
          var prevCol1 = cel - 6;
          var prevCol2 = prevCol1 - 12;
  
          // Get the column class
          if ($('.c' + prevCol1).length && $('.c' + prevCol2).length) {
            var prevCol1 = $('.c' + prevCol1).attr('class').split(' ')[1];
            var prevCol2 = $('.c' + prevCol2).attr('class').split(' ')[1];
  
            if ($('.' + prevCol1 + '.big-road:not(.dragon)').length == $('.' + prevCol2 + '.big-road:not(.dragon)').length) {
              // If equal in length, true (red mark)
              smallRoadBeads.push('a');
            } else {
              // If not, false (blue mark)
              smallRoadBeads.push('e');
            }
          } else {
            smallRoadBeads.push('e');
          }
  
          //console.log('col : ' + cel + ' | prev col : ' + prevCol1 + ' ' + prevCol2);
        } else {
          // If not, apply rule 2 : check the previous column, compare cel 1 and 2 if match, skip 1 column in between
  
          // Get previous left cell in a row
          var prevRow2 = cel - 12;
          var prevRow1 = prevRow2 - 1;
  
          if ($('.c' + prevRow1 + '.big-road').length == $('.c' + prevRow2 + '.big-road').length || $('.c' + cel).hasClass('dragon')) {
            // If previous 2 cels is match
            smallRoadBeads.push('a');
          } else {
            smallRoadBeads.push('e');
          }
  
          //console.log('row : ' + cel + ' | prev col : ' + prevRow1 + ' ' + prevRow2);
          //console.log($('.c' + prevRow1 + '.big-road').length + ' | ' + $('.c' + prevRow2 + '.big-road').length);
        }
      }
  
      bead_road = smallRoadBeads.join('');
  
      // Iterate the collected beads
      for (let i = 0; i < bead_road.length; i++) {
        if (bead_road[i] == 'a') {
          marker = 'red_dot';
        } else {
          marker = 'blue_dot';
        }
  
        var row_id = i;
  
        if (row_id == 0) {
          // Put unique id to each bead
          if (marker == 'red_dot') {
            bankerCount++;
            uniqueCount = bankerCount;
          } else if (marker == 'blue_dot') {
            playerCount++;
            uniqueCount = playerCount;
          }
  
          // Insert just once
          if (!$('.small-' + table_id + '-' + row_id).length) {
            $('.e' + row_id + '.tb' + table_id).addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road');
          }
        } else {
          // Check if element is exists
          if (!$('.small-' + table_id + '-' + row_id).length) {
            // Check last inserted bead
            $("div[class*=small-" + table_id + "]").each(function () {
              var currentNum = parseInt($(this).attr('class').split(' ')[4].split('-')[2]);
  
              if (currentNum > biggestNum) {
                biggestNum = currentNum;
                uniqueCount = parseInt($(this).attr('class').split(' ')[7].split('-')[2]);
              }
            });
  
            if (!$('.small-' + table_id + '-' + row_id).length && $('.small-' + table_id + '-' + biggestNum).length) {
              var existing_marker = $('.small-' + table_id + '-' + biggestNum).attr('class').split(' ')[7].split('-')[0];
  
              // If existing marker is equal to new marker, insert new row below it
              if (existing_marker == marker) {
                if ($('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').length) {
                  // Check the length of the last column
                  var existing_marker_id = $('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[7].split('-')[2];
                  var prev_row = parseInt($('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[2].split('e')[1]);
  
                  // First Dragon
                  if ($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).length == 6) {
                    // Get the row number and add 6 to move to another column
                    var next_col = prev_row + 6;
                    // Check if element is exists
                    if (!$('.small-' + table_id + '-' + row_id).length) {
                      if (self.predictFlag) {
                        $('.e' + next_col + '.tb' + table_id).addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                          $('.e' + next_col + '.tb' + table_id).removeClass('small-' + table_id + '-' + row_id).removeClass('small-road-' + table_id).removeClassStartingWith('_dot').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('small-road').removeClass('dragon').show();
                        });
                      } else {
                        if (!self.scoreBoardFlag) {
                          $('.e' + next_col + '.tb' + table_id).addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').addClass('dragon');
                        } else {
                          $('.e' + next_col + '.tb' + table_id).addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                        }
                      }
                    }
                  } else {
                    // Check if there are bead on the next
                    var prev_col = $('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).attr('class').split(' ')[1];
  
                    // 2nd Dragon
                    if ($('.' + prev_col + '.small-road-' + table_id).length == 6) {
                      // Get the row number and add 6 to move to another column
                      var next_col = prev_row + 6;
  
                      // Check if element is exists
                      if (!$('.small-' + table_id + '-' + row_id).length) {
                        if (self.predictFlag) {
                          $('.e' + next_col + '.tb' + table_id).addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                            $('.e' + next_col + '.tb' + table_id).removeClass('small-' + table_id + '-' + row_id).removeClass('small-road-' + table_id).removeClassStartingWith('_dot').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('small-road').removeClass('dragon').show();
                          });
                        } else {
                          if (!self.scoreBoardFlag) {
                            $('.e' + next_col + '.tb' + table_id).addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').addClass('dragon');
                          } else {
                            $('.e' + next_col + '.tb' + table_id).addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                          }
                        }
                      }
                    } else {
                      // Check if the next row has dragon
                      if ($('.small-' + table_id + '-' + biggestNum).next().hasClass('dragon')) {
                        // 3rd dragon
                        var next_col = parseInt($('.small-' + table_id + '-' + biggestNum).attr('class').split(' ')[2].split('e')[1]);
                        var next_col = next_col + 6;
  
                        if (self.predictFlag) {
                          $('.e' + next_col + '.tb' + table_id).addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                            $('.e' + next_col + '.tb' + table_id).removeClass('small-' + table_id + '-' + row_id).removeClass('small-road-' + table_id).removeClassStartingWith('_dot').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('small-road').removeClass('dragon').show();
                          });
                        } else {
                          if (!self.scoreBoardFlag) {
                            $('.e' + next_col + '.tb' + table_id).addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').addClass('dragon');
                          } else {
                            $('.e' + next_col + '.tb' + table_id).addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                          }
                        }
                      } else {
                        // Check if bead is dragon to follow its path
                        if ($('.small-' + table_id + '-' + biggestNum).hasClass('dragon')) {
                          // Dragon Path
                          var next_col = parseInt($('.small-' + table_id + '-' + biggestNum).attr('class').split(' ')[2].split('e')[1]);
                          var next_col = next_col + 6;
  
                          if (self.predictFlag) {
                            $('.e' + next_col + '.tb' + table_id).addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                              $('.e' + next_col + '.tb' + table_id).removeClass('small-' + table_id + '-' + row_id).removeClass('small-road-' + table_id).removeClassStartingWith('_dot').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('small-road').removeClass('dragon').show();
                            });
                          } else {
                            if (!self.scoreBoardFlag)
                              $('.e' + next_col + '.tb' + table_id).addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').addClass('dragon');
                            else
                              $('.e' + next_col + '.tb' + table_id).addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                          }
                        } else {
                          if (self.predictFlag) {
                            $('.small-' + table_id + '-' + biggestNum).next().addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').fadeIn().delay(200).fadeOut(function () {
                              $('.small-' + table_id + '-' + biggestNum).next().removeClass('small-' + table_id + '-' + row_id).removeClass('small-road-' + table_id).removeClassStartingWith('_dot').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('small-road').show();
                            });
                          } else {
                            if (!self.scoreBoardFlag) {
                              $('.small-' + table_id + '-' + biggestNum).next().addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road');
                            } else {
                              $('.small-' + table_id + '-' + biggestNum).next().addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                // Check the length of the last column
                if ($('.' + existing_marker + '-' + table_id + '-' + uniqueCount).length) {
                  var existing_marker_id = $('.' + existing_marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[7].split('-')[2];
                  var prev_row = parseInt($('.' + existing_marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[2].split('e')[1]);
                  var last_col = 0;
  
                  // If new bead, insert it to next column
                  // Get the last bead column and add plus 1 to go to next column (dragon not included)
                  if ($('.' + existing_marker + '-' + existing_marker_id).length >= 6) {
                    last_col = parseInt($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):first').attr('class').split(' ')[1].split('_')[1]) + 1;
                  } else {
                    last_col = parseInt($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):last').attr('class').split(' ')[1].split('_')[1]) + 1;
                  }
  
                  // Put unique id to each bead
                  if (marker == 'red_dot') {
                    bankerCount++;
                    uniqueCount = bankerCount;
                  } else if (marker == 'blue_dot') {
                    playerCount++;
                    uniqueCount = playerCount;
                  }
  
                  if (self.predictFlag) {
                    $('.e_' + last_col + '.tb' + table_id + ':first').addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').fadeIn().delay(200).fadeOut(function () {
                      $('.e_' + last_col + '.tb' + table_id + ':first').removeClass('small-' + table_id + '-' + row_id).removeClass('small-road-' + table_id).removeClassStartingWith('_dot').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('small-road').show();
                    })
                  } else {
                    if (!self.scoreBoardFlag) {
                      $('.e_' + last_col + '.tb' + table_id + ':first').addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road');
                    } else {
                      $('.e_' + last_col + '.tb' + table_id + ':first').addClass('small-' + table_id + '-' + row_id).addClass('small-road-' + table_id).addClass(bead_road[i] + '_dot').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('small-road').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                    }
                  }
                }
              }
            }
          } else {
            // Put unique id to each bead
            if (marker == 'red_dot') {
              bankerCount++;
              uniqueCount = bankerCount;
            } else if (marker == 'blue_dot') {
              playerCount++;
              uniqueCount = playerCount;
            }
          }
        }
      }
  
      RenderUtil.renderSmallRoadPrediction();
    },
  
    renderBigEyeRoadPrediction: function () {
      const self = PlayerGame;
  
      if (self.predictFlag) {
        return;
      }
  
      let marker = '';
      let startingPoint = null;
  
      // Starting point B2 else C1 of Big Road
      // Check if B2 bead exists in Big Road
      if ($('.c7').hasClass('big-road')) {
        startingPoint = 'c7';
      } else {
        startingPoint = 'c12';
      }
  
      // Check if starting point exists
      if (!$('.' + startingPoint + '.big-road').length) {
        return;
      }
  
      // Get the cel number of last bead in big road
      let curCel = parseInt($('.big-road:last').attr('class').split(' ')[2].split('c')[1]);
      let cel = parseInt($('.big-road:last').attr('class').split(' ')[2].split('c')[1]) + 1;
      let bead_choice = $('.big-road:last').attr('class').split(' ')[7].split('-')[0];
  
      // Check if the bead position is in first column of Big Road
      if ($.inArray(cel, self.bigRoadColumns) != -1) {
        // Apply rule 1 : check the previous 2 columns to the left if equal in length
  
        // Get the previous 1st and 2nd cell
        var prevCol1 = cel - 6;
        var prevCol2 = prevCol1 - 6;
  
        // Get the column class
        var prevCol1 = $('.c' + prevCol1).attr('class').split(' ')[1];
        var prevCol2 = $('.c' + prevCol2).attr('class').split(' ')[1];
  
        if ($('.' + prevCol1 + '.big-road:not(.dragon)').length == $('.' + prevCol2 + '.big-road:not(.dragon)').length) {
          // If equal in length, true (red mark)
          marker = true;
        } else {
          // If not, false (blue mark)
          marker = false;
        }
  
        if (self.roadLog) {
          console.log('Big Eye Road Prediction : COL : ' + cel + ' | 2 COL to compare if equal in length : ' + prevCol1 + ' ' + prevCol2);
        }
      } else {
        // If not, apply rule 2 : check the previous column, compare cel 1 and 2 if match
  
        // Get previous left cell in a row
        var prevRow2 = cel - 6;
        var prevRow1 = prevRow2 - 1;
  
        if ($('.c' + prevRow1 + '.big-road').length == $('.c' + prevRow2 + '.big-road').length || $('.c' + cel).hasClass('dragon')) {
          // If previous 2 cels is match
          marker = true;
        } else {
          marker = false;
        }
  
        if (self.roadLog) {
          console.log('Big Eye Road Prediction : CEL : ' + cel + ' | 2 PREV CEL to compare if match : ' + prevRow1 + ' ' + prevRow2);
        }
      }
  
      RenderUtil.changeBigEyeRoadPrediction(bead_choice, marker);
    },
  
    renderSmallRoadPrediction: function () {
      const self = PlayerGame;
  
      if (self.predictFlag) {
        return;
      }
  
      let marker = '';
      let startingPoint = null;
  
      // Starting point C2 else D1 of Big Road
      // Check if C2 bead exists in Big Road
      if ($('.c13').hasClass('big-road')) {
        startingPoint = 'c13';
      } else {
        startingPoint = 'c18';
      }
  
      // Check if starting point exists
      if (!$('.' + startingPoint + '.big-road').length) {
        return;
      }
  
      // Get the cel number of last bead in big road
      let curCel = parseInt($('.big-road:last').attr('class').split(' ')[2].split('c')[1]);
      let curCelDragon = $('.c' + curCel + '.big-road.dragon').length;
  
      let cel = parseInt($('.big-road:last').attr('class').split(' ')[2].split('c')[1]) + 1;
      let bead_choice = $('.big-road:last').attr('class').split(' ')[7].split('-')[0];
  
      // Check if the bead position is in first column of Big Road
      if ($.inArray(cel, self.bigRoadColumns) != -1 && curCelDragon == 0) {
        // Apply rule 1 : check the previous 2 columns to the left if equal in length. skip 1 column in between
  
        // Get the previous 1st and 2nd cell
        var prevCol1 = cel - 6;
        var prevCol2 = prevCol1 - 12;
  
        // Get the column class
        if ($('.c' + prevCol1).length && $('.c' + prevCol2).length) {
          var prevCol1 = $('.c' + prevCol1).attr('class').split(' ')[1];
          var prevCol2 = $('.c' + prevCol2).attr('class').split(' ')[1];
  
          if ($('.' + prevCol1 + '.big-road:not(.dragon)').length == $('.' + prevCol2 + '.big-road:not(.dragon)').length) {
            // If equal in length, true (red mark)
            marker = true;
          } else {
            // If not, false (blue mark)
            marker = false;
          }
        } else {
          marker = false;
        }
  
        if (self.roadLog) {
          console.log('Small Road Prediction : CEL : ' + cel + ' | 2 COL to compare if equal in length : ' + prevCol1 + ' ' + prevCol2);
        }
      } else {
        // If not, apply rule 2 : check the previous column, compare cel 1 and 2 if match, skip 1 column in between
  
        // Get previous left cell in a row
        if (curCelDragon) {
          var prevRow2 = curCel - 12;
          var prevRow1 = prevRow2 - 1;
        } else {
          var prevRow2 = cel - 12;
          var prevRow1 = prevRow2 - 1;
        }
  
        if ($('.c' + prevRow1 + '.big-road').length == $('.c' + prevRow2 + '.big-road').length || $('.c' + cel).hasClass('dragon')) {
          // If previous 2 cels is match
          marker = true;
        } else {
          marker = false;
        }
  
        if (self.roadLog) {
          console.log('Small Road Prediction : CEL : ' + cel + ' | 2 PREV CEL to compare if match : ' + prevRow1 + ' ' + prevRow2);
        }
      }
  
      RenderUtil.changeSmallRoadPrediction(bead_choice, marker);
    },
  
    renderCockRoadPrediction: function () {
      const self = PlayerGame;
  
      if (self.predictFlag) {
        return;
      }
  
      let marker = '';
      let startingPoint = null;
  
      // Starting point D2 else E1 of Big Road
      // Check if D2 bead exists in Big Road
      if ($('.c19').hasClass('big-road')) {
        startingPoint = 'c19';
      } else {
        startingPoint = 'c24';
      }
  
      // Check if starting point exists
      if (!$('.' + startingPoint + '.big-road').length) {
        return;
      }
  
      // Get the cel number of last bead in big road
      var curCel = parseInt($('.big-road:last').attr('class').split(' ')[2].split('c')[1]);
      var curCelDragon = $('.c' + curCel + '.big-road.dragon').length;
  
      var cel = parseInt($('.big-road:last').attr('class').split(' ')[2].split('c')[1]) + 1;
      var bead_choice = $('.big-road:last').attr('class').split(' ')[7].split('-')[0];
  
      // Check if the bead position is in first column of Big Road
      if ($.inArray(cel, self.bigRoadColumns) != -1 && curCelDragon == 0) {
        // Apply rule 1 : check the previous 2 columns to the left if equal in length. skip 2 column in between
  
        // Get the previous 1st and 2nd cell
        var prevCol1 = cel - 6;
        var prevCol2 = prevCol1 - 18;
  
        // Get the column class
        if ($('.c' + prevCol1).length && $('.c' + prevCol2).length) {
          var prevCol1 = $('.c' + prevCol1).attr('class').split(' ')[1];
          var prevCol2 = $('.c' + prevCol2).attr('class').split(' ')[1];
  
          if ($('.' + prevCol1 + '.big-road:not(.dragon)').length == $('.' + prevCol2 + '.big-road:not(.dragon)').length) {
            // If equal in length, true (red mark)
            marker = true;
          } else {
            // If not, false (blue mark)
            marker = false;
          }
        } else {
          marker = false;
        }
  
        if (self.roadLog) {
          console.log('Cockroach Road Prediction : CEL : ' + cel + ' | 2 COL to compare if equal in length : ' + prevCol1 + ' ' + prevCol2);
        }
      } else {
        // If not, apply rule 2 : check the previous column, compare cel 1 and 2 if match, skip 2 column in between
  
        // Get previous left cell in a row
        if (curCelDragon) {
          var prevRow2 = curCel - 18;
          var prevRow1 = prevRow2 - 1;
        } else {
          var prevRow2 = cel - 18;
          var prevRow1 = prevRow2 - 1;
        }
  
        if ($('.c' + prevRow1 + '.big-road').length == $('.c' + prevRow2 + '.big-road').length || $('.c' + cel).hasClass('dragon')) {
          // If previous 2 cels is match
          marker = true;
        } else {
          marker = false;
        }
  
        if (self.roadLog) {
          console.log('Cockroach Road Prediction : CELL : ' + cel + ' | 2 PREV CEL to compare if match : ' + prevRow1 + ' ' + prevRow2);
        }
      }
  
      RenderUtil.changeCockRoadPrediction(bead_choice, marker);
    },
  
    changeBigEyeRoadPrediction: function (bead_choice, marker) {
      const self = PlayerGame;
  
      let redLine = 'red_line.png';
      let blueLine = 'blue_line.png';
  
      let redCircle = 'red_circle.png';
      let blueCircle = 'blue_circle.png';
  
      let predictEyeRoad1 = null;
      let predictEyeRoad2 = null;
  
      if (bead_choice == 'player') {
        if (marker) {
          predictEyeRoad1 = `<img src="${baseUrl}/static/images/game/bead/dark/${redCircle}" alt="img" class="blue red_circle bead-count pair-view">`;
          predictEyeRoad2 = `<img src="${baseUrl}/static/images/game/bead/dark/${blueCircle}" alt="img" class="red blue_circle bead-count pair-view">`;
        } else {
          predictEyeRoad1 = `<img src="${baseUrl}/static/images/game/bead/dark/${blueCircle}" alt="img" class="blue blue_circle bead-count pair-view">`;
          predictEyeRoad2 = `<img src="${baseUrl}/static/images/game/bead/dark/${redCircle}" alt="img" class="red red_circle bead-count pair-view">`;
        }
  
        // render big eye prediction
        $('.predict-p1 img').remove();
        $('.predict-p1').append(predictEyeRoad1);
        $('.predict-b1 img').remove();
        $('.predict-b1').append(predictEyeRoad2);
      } else {
        if (marker) {
          predictEyeRoad1 = '<img src="' + baseUrl + '/static/images/game/bead/dark/' + redCircle + '" class="blue red_circle bead-count pair-view">';
          predictEyeRoad2 = '<img src="' + baseUrl + '/static/images/game/bead/dark/' + blueCircle + '" class="red blue_circle bead-count pair-view">';
        } else {
          predictEyeRoad1 = '<img src="' + baseUrl + '/static/images/game/bead/dark/' + blueCircle + '" class="blue blue_circle bead-count pair-view">';
          predictEyeRoad2 = '<img src="' + baseUrl + '/static/images/game/bead/dark/' + redCircle + '" class="red red_circle bead-count pair-view">';
        }
  
        // render big eye prediction
        $('.predict-b1 img').remove();
        $('.predict-b1').append(predictEyeRoad1);
        $('.predict-p1 img').remove();
        $('.predict-p1').append(predictEyeRoad2);
      }
    },
  
    changeSmallRoadPrediction: function (bead_choice, marker) {
      const self = PlayerGame;
  
      let redDot = 'red_dot.png';
      let blueDot = 'blue_dot.png';
  
      let predictRoad1 = null;
      let predictRoad2 = null;
  
      if (bead_choice == 'player') {
        if (marker) {
          predictRoad1 = `<img src="${baseUrl}/static/images/game/bead/dark/${redDot}" alt="img" class="blue red_dot bead-count pair-view">`;
          predictRoad2 = `<img src="${baseUrl}/static/images/game/bead/dark/${blueDot}" alt="img" class="red blue_dot bead-count pair-view">`;
        } else {
          predictRoad1 = `<img src="${baseUrl}/static/images/game/bead/dark/${blueDot}" alt="img" class="blue blue_dot bead-count pair-view">`;
          predictRoad2 = `<img src="${baseUrl}/static/images/game/bead/dark/${redDot}" alt="img" class="red red_dot bead-count pair-view">`;
        }
  
        // render big eye prediction
        $('.predict-p2 img').remove();
        $('.predict-p2').append(predictRoad1);
        $('.predict-b2 img').remove();
        $('.predict-b2').append(predictRoad2);
      } else {
        if (marker) {
          predictRoad1 = `<img src="${baseUrl}/static/images/game/bead/dark/${redDot}" alt="img" class="blue red_dot bead-count pair-view">`;
          predictRoad2 = `<img src="${baseUrl}/static/images/game/bead/dark/${blueDot}" alt="img" class="red blue_dot bead-count pair-view">`;
        } else {
          predictRoad1 = `<img src="${baseUrl}/static/images/game/bead/dark/${blueDot}" alt="img" class="blue blue_dot bead-count pair-view">`;
          predictRoad2 = `<img src="${baseUrl}/static/images/game/bead/dark/${redDot}" alt="img" class="red red_dot bead-count pair-view">`;
        }
  
        // render big eye prediction
        $('.predict-b2 img').remove();
        $('.predict-b2').append(predictRoad1);
        $('.predict-p2 img').remove();
        $('.predict-p2').append(predictRoad2);
      }
    },
  
    changeCockRoadPrediction: function (bead_choice, marker) {
      const self = PlayerGame;
  
      let redLine = 'red_line.png';
      let blueLine = 'blue_line.png';
  
      let predictRoad1 = null;
      let predictRoad2 = null;
  
      if (bead_choice == 'player') {
        if (marker) {
          predictRoad1 = `<img src="${baseUrl}/static/images/game/bead/dark/${redLine}" alt="img" class="blue red_line bead-count pair-view">`;
          predictRoad2 = `<img src="${baseUrl}/static/images/game/bead/dark/${blueLine}" alt="img" class="red blue_line bead-count pair-view">`;
        } else {
          predictRoad1 = `<img src="${baseUrl}/static/images/game/bead/dark/${blueLine}" alt="img" class="blue blue_line bead-count pair-view">`;
          predictRoad2 = `<img src="${baseUrl}/static/images/game/bead/dark/${redLine}" alt="img" class="red red_line bead-count pair-view">`;
        }
  
        // render big eye prediction
        $('.predict-p3 img').remove();
        $('.predict-p3').append(predictRoad1);
        $('.predict-b3 img').remove();
        $('.predict-b3').append(predictRoad2);
      } else {
        if (marker) {
          predictRoad1 = `<img src="${baseUrl}/static/images/game/bead/dark/${redLine}" alt="img" class="blue red_line bead-count pair-view">`;
          predictRoad2 = `<img src="${baseUrl}/static/images/game/bead/dark/${blueLine}" alt="img" class="red blue_line bead-count pair-view">`;
        } else {
          predictRoad1 = `<img src="${baseUrl}/static/images/game/bead/dark/${blueLine}" alt="img" class="blue blue_line bead-count pair-view">`;
          predictRoad2 = `<img src="${baseUrl}/static/images/game/bead/dark/${redLine}" alt="img" class="red red_line bead-count pair-view">`;
        }
  
        // render big eye prediction
        $('.predict-b3 img').remove();
        $('.predict-b3').append(predictRoad1);
        $('.predict-p3 img').remove();
        $('.predict-p3').append(predictRoad2);
      }
    },
  
    renderReconnection: function (flag) {
      const self = PlayerGame;
  
      if (typeof flag == 'undefined')
        flag = 0;
  
      if (flag && self.loaderFlag) {
        let loader = `<div class="reconnecting text-center">
          <div class="sk-fading-circle">
          <div class="sk-circle1 sk-circle"></div>
          <div class="sk-circle2 sk-circle"></div>
          <div class="sk-circle3 sk-circle"></div>
          <div class="sk-circle4 sk-circle"></div>
          <div class="sk-circle5 sk-circle"></div>
          <div class="sk-circle6 sk-circle"></div>
          <div class="sk-circle7 sk-circle"></div>
          <div class="sk-circle8 sk-circle"></div>
          <div class="sk-circle9 sk-circle"></div>
          <div class="sk-circle10 sk-circle"></div>
          <div class="sk-circle11 sk-circle"></div>
          <div class="sk-circle12 sk-circle"></div>
          </div>
          <h3><b>Reconnecting to Server. Please Wait...</b></h3>
          </div>`;
  
        $('#block-chips').append(loader);
  
        self.loaderFlag = 0;
      } else if (flag && !self.loaderFlag) {
        $('#block-chips .reconnecting').css('display', 'block');
        $('#block-chips .bet-message').css('display', 'none');
      } else {
        $('#block-chips .reconnecting').css('display', 'none');
        $('#block-chips .bet-message').css('display', 'block');
      }
  
      if (flag) {
        $('#block-chips').css('background', 'rgba(241, 68, 68, 0.65)');
      } else {
        $('#block-chips').css('background', 'rgba(25, 29, 32, 0.8)');
      }
    },
  
    renderBetHistory: function (data) {
      const self = PlayerGame;
  
      $('#bet-history-content tr').remove();
  
      $.each(data, function (key, val) {
  
        const status = Helper.bet.showBetLogStatus(val.bet_status);
        let date_betting = Helper.format.date.showDate(val.date_betting);
        let txtColor = '';
  
        if (val.winning_amount === 0)
          txtColor = '';
        else if (val.winning_amount > 0)
          txtColor = 'style="color: #00ff0a;"';
        else
          txtColor = 'style="color: red;"';
  
        let arrBetBeads = GameUtil.getBetBeadType(val);
  
        let elemList = '<div class="bead_table"><ul class="beads">';
        let cardList = '';
  
  
        $.each(arrBetBeads, function (key, val) {
          elemList += '<li><img src="' + baseUrl + '/static/images/game/bead/dark/gt_b_' + val + '.png" width="24" alt=""></li>';
        });
  
        if (val.winning_cards) {
          var arrWinningCards = val.winning_cards.split(',');
          var cardname = '';
          cardList = '<span class="popover">';
  
          $.each(arrWinningCards, function (key, val) {
            // cardList += '<img src="'+ baseUrl + '/images/game/card/'+ val +'.png">';
  
            if (val != null) {
              if (key == 0) {
                cardname = 'PLAYER';
              } else if (key == 4) {
                cardname = 'BANKER';
              }
  
              if (key == 0 || key == 4) {
                cardList += '<div>'
                  + '<img src="' + baseUrl + '/static/images/game/card/' + val + '.png">'
                  + '<span class="message">' + cardname + '</span>'
                  + '</div>';
              } else if (key == 2 && val == "00") {
                cardList += '<div>'
                  + '<span>&nbsp;</span>'
                  + '</div>';
              } else if (key == 5 && val == "00") {
                cardList += '<div>'
                  + '<span>&nbsp;</span>'
                  + '</div>';
              } else if (key == 6 && val == "00") {
                cardList += '<div>'
                  + '<span>&nbsp;</span>'
                  + '</div>';
              } else if (key == 3 && val != "00") {
                cardList += '<div>'
                  + '<span>&nbsp;</span>'
                  + '</div>';
  
                cardList += '<div>'
                  + '<img src="' + baseUrl + '/static/images/game/card/' + val + '.png">'
                  + '</div>';
              } else if (val == "00") {
                cardList += '<div>'
                  + '<span>&nbsp;</span>'
                  + '</div>';
              } else {
                cardList += '<div>'
                  + '<img src="' + baseUrl + '/static/images/game/card/' + val + '.png">'
                  + '</div>';
              }
            }
          });
  
          cardList += '</span>';
        }
  
        elemList += '</ul></div>';
        let resultImg = '';
        if (val.game_log.game_result) {
          resultImg = `<img src="${baseUrl}/static/images/game/bead/dark/gt_b_${val.game_log.game_result}.png" alt="img" width="24">`;
        }
  
        var elemHtml = `<tr>
          <td align="center"><span class="ref-no">${val.id + cardList}</span></td>
          <td align="center">${val.game_log.table_name}</td>
          <td align="center">${val.game_log.shoe_no} - ${val.game_log.game_no}</td>
          <td align="center">${elemList}</td>
          <td align="center">${Helper.format.number.withComma(val.p_amount)}</td>
          <td align="center">${Helper.format.number.withComma(val.b_amount)}</td>
          <td align="center">${Helper.format.number.withComma(val.t_amount)}</td>
          <td align="center">${Helper.format.number.withComma(val.pp_amount)}</td>
          <td align="center">${Helper.format.number.withComma(val.bp_amount)}</td>
          <td align="center">${resultImg}</td>
          <td align="center">${status}</td>
          <td  align="center" ${txtColor}>${Helper.format.number.withComma(val.winning_amount)}</td>
          <td align="center">${Helper.format.number.withComma(val.before_amount)}</td>
          <td align="center">${Helper.format.number.withComma(val.after_amount)}</td>
          <td align="center"><span class="text-muted"><i class="fa fa-clock-o"></i> ${date_betting}</span> </td>
          </tr>`;
  
        $('#bet-history-content').append(elemHtml);
      });
    },
  
    renderBetHistoryTablePagination: function (data) {
      const self = PlayerGame;
      $('.table-pagination tr').remove();
      $('.table-pagination').append(data);
  
      // $.each($('.table-pagination	li a'), function (key, val) {
      //   let id = $(val).html();
      //   $(val).attr('href', '#');
      //   $(val).addClass('page-button-' + id + ' pages');
      // });
  
      self.addEvents();
    },
  
    renderGameProviderTable(data) {
      const self = PlayerGame;
      if (!self.scoreBoardFlag) {
        $('#standard-table div').remove();
        $('select[class*=game-table-max-bet] option').remove();
      }
      $('.vegas_loader').hide();
  
      $.each(data, function (key, val) {
        if ( val.table_name == self.table_name )
          return;
        let beads = {
          'player': 0,
          'banker': 0,
          'tie': 0
        };
        let is_live = '';
        val.beads = val.beads || '';
        beads = self.countTableSummary(val.beads);
        let tableOverlay = false;
        let tableNotice = TABLE_NOT_AVAILABLE;
        if (val.table_status === '6' || val.status == 'INACTIVE') {
          tableOverlay = true;
          tableNotice = '점검중';
        } else if (val.table_status === '5') {
          tableOverlay = true;
          tableNotice = '셔플중';
        }
  
        let gameProviderImage = '';
  
        if (val.game_provider_id === '1') {
          gameProviderImage = 'evolution.png';
        } else if (val.game_provider_id === '2') {
          gameProviderImage = 'cagayan.png';
        } else if (val.game_provider_id === '3') {
          gameProviderImage = 'newworld.png';
        } else if (val.game_provider_id === '4') {
          gameProviderImage = 'oriental.png';
        } else if (val.game_provider_id === '5') {
          gameProviderImage = 'microgaming.png';
        } else if (val.game_provider_id === '6') {
          gameProviderImage = 'solaire.png';
        } else if (val.game_provider_id === '7') {
          gameProviderImage = 'stotsenberg.png';
        } else if (val.game_provider_id === '8') {
          gameProviderImage = 'okada.png';
        }
        let name_style = '';
        if (val.game_provider_id === '8') {
          name_style = 'font-size: 12px';
        }
  
        const table_status = Helper.baccarat.showStatus(val.table_status);
  
        if (!self.scoreBoardFlag) {
          let elemHtml = `
            <div class="">
              <div class="midas-table_header list-inline ${is_live}">
                <span class="midas-table_item_first">
                  <a href="javascript:void(0)" style="${name_style}" class="c-white ame-table-selected-${val.game_provider_id}-${val.id}">${val.table_name}</a>
                </span>
                <div class="midas-table_header-right_menu">
                  <span class="midas-table_item"><div><span class="round-sum-${val.id}">${val.game_no}</span> <span class="f-11">회차</span></div><div class="round-status-${val.id}">${table_status}</div></span>
                  <span class="midas-table_item"><div class="player-sum-${val.id}">${beads['player']}</div><div>Player</div></span>
                  <span class="midas-table_item"><div class="banker-sum-${val.id}">${beads['banker']}</div><div>Banker</div></span>
                  <span class="midas-table_item"><div class="tie-sum-${val.id}">${beads['tie']}</div><div>Tie</div></span>
                </div>
              </div>
              <div class="contents">
                <div class="overlay overlay-${val.id}">
                  <h3><strong>${tableNotice}</strong></h3>
                </div>
                <div class="overlay-button overlay-button-${val.id}">
                  <a href="javascript:void(0)" class="game-table-selected-${val.game_provider.id}-${val.id}"><button class="btn btn-default btn-enter">${ENTRANCE}</button></a>
                </div>
                <div class="panel panel-default">
                  <div class="panel-body" style="height: 107px;overflow: hidden;width: 100%">
                    <div class="active" style="margin-top: -17px;">
                      <div class="text-center" style="height: 80px;">
                        <div class="pnl_2_mini bead-${val.id}" style="margin-left:-288px;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
          $('#standard-table').append(elemHtml);
        }
  
        if (tableOverlay) {
          $('.overlay-' + val.id).show();
        } else {
          $('.overlay-' + val.id).hide();
        }
  
        if (self.roomData.length !== 0) {
          let roomArray = self.roomData.filter(x => x.id === val.id);
          if (roomArray) {
            const room = roomArray[0];
            if (val.beads.length > room.beads.length) {
              $(`.overlay-button-${val.id}`).addClass('bg-flash');
              $(`.overlay-button-${val.id}`).delay(3000).fadeOut(300, function () {
                $(this).removeClass('bg-flash');
                $(this).show();
              });
            }
          }
        }
        RenderUtil.renderSecondBoardPerTable(val.beads, val.id);
        $('.round-sum-' + val.id).html(val.game_no);
        $('.round-status-' + val.id).html(table_status);
      });
      /* temporary */
      self.scoreBoardFlag = 1;
      setTimeout(function () {
        self.roomData = data;
        self.addTableSelectionEvents();
      }, 500);
    },
  
    renderMaximumBet: function () {
      const self = PlayerGame;
      // console.log('render max bet-->', self.gameMaximumBetLookUpData);
      $('.midas-betting-price_body').html('');
      let temHtml = '';
      let selected = false;
      $('select[class*=game-table-max-bet] option').remove();
  
      $.each(self.gameMaximumBetLookUpData, function (key, val) {
        let disabled = '';
        if (self.user_level < val.level_no) {
          disabled = 'disabled';
        }
        let txtColor = '';
        let active = '';
        if (val.is_vip) {
          txtColor = 'style="color: red;"';
        }
        if (!selected && disabled !== 'disabled') {
          active = 'active';
          selected = true;
        }
        temHtml += `
          <div class="midas-betting-price_item ${active} ${disabled}" value="${val.id}"">
            <div><span>Minimum</span><span>${Helper.format.number.withComma(val.p_b_min)}</span></div>
            <div><span>Maximum</span><span>${Helper.format.number.withComma(val.p_b_max)}</span></div>
          </div>`;
      });
      $('.midas-betting-price_body').html(temHtml);
      self.addEvents();
    },
  
    renderSecondBoardPerTable: function (bead_road, table_id) {
      const self = PlayerGame;
      let top = 0;
      let left = 0;
      let col = 0;
      let colCounter = 1;
      let topCounter = 0;
      let leftCounter = 1;
  
      if (!self.scoreBoardFlag) {
        // Generate empty board
        for (let i = 0; i < 356; i++) {
          if (col === 6) {
            topCounter = top;
            leftCounter += 30;
            col = 1;
            colCounter++;
          } else {
            col++;
          }
  
          const style = 'style="top:' + topCounter + 'px; left:' + leftCounter + 'px;"';
          const elemHtml = '<div class="pnl_2_item_mini c_' + colCounter + ' c' + i + ' tb' + table_id + '"' + style + '></div>';
          $('.bead-' + table_id).append(elemHtml);
          topCounter += 30;
        }
  
        RenderUtil.renderSecondBoardBeadPerTable(bead_road, table_id);
        RenderUtil.renderMaximumBet();
      } else {
        RenderUtil.renderSecondBoardBeadPerTable(bead_road, table_id);
      }
    },
  
    renderSecondBoardBeadPerTable: function (bead_road, table_id) {
      const self = PlayerGame;
  
      var bankerBead = ['a', 'b', 'c', 'd'];
      var playerBead = ['e', 'f', 'g', 'h'];
      var tieBead = ['i', 'j', 'k', 'l'];
  
      var uniqueCount = 0;
      var bankerCount = 0;
      var playerCount = 0;
      var tieCount = 0;
  
      var biggestNum = 0;
  
      var col = 1;
      var marker = '';
  
      if (!bead_road) {
        return;
      }
  
      // Remove classses if bead road is zero to reset the table
      if (bead_road.length == 0 || bead_road.length < $('.big-road-' + table_id).length ) {
        $('.tb' + table_id).removeClassStartingWith('big-' + table_id).removeClassStartingWith('big-road-' + table_id).removeClassStartingWith('player').removeClassStartingWith('banker');
        $('.tb' + table_id).removeClass('a_min').removeClass('b_min').removeClass('c_min').removeClass('d_min').removeClass('e_min').removeClass('f_min').removeClass('g_min').removeClass('h_min');
        $('.tb' + table_id).removeClass('i_min').removeClass('j_min').removeClass('k_min').removeClass('l_min');
        $('.tb' + table_id).removeClass('big-road');
        $('.tb' + table_id + ' .big-road-tie-mini').remove();
  
        $('.round-sum-' + table_id).html(0);
        $('.player-sum-' + table_id).html(0);
        $('.banker-sum-' + table_id).html(0);
        $('.tie-sum-' + table_id).html(0);
        return;
      }
  
      for (let i = 0; i < bead_road.length; i++) {
        // Check if Player Bead
        if ($.inArray(bead_road[i], playerBead) != -1) {
          marker = 'player';
          // Check if Banker Bead
        } else if ($.inArray(bead_road[i], bankerBead) != -1) {
          marker = 'banker';
          // If tie, put number on the last bead
        } else {
          marker = 'tie';
        }
  
        if (marker == 'tie') {
          // Check if tie is existing
          if (!$('.tie-' + table_id + '-' + i).length) {
            // If tie, check the last inserted bead
            var last_tie_bead = (i - tieCount) - 1;
            var existing_marker_tie = $('.big-' + table_id + '-' + last_tie_bead).find('span').html() || 0;
  
            if (!existing_marker_tie) {
              // Check if the last bead exists
              if ($('.big-' + table_id + '-' + last_tie_bead).length) {
                // Add 1 to the last bead
                $('.big-' + table_id + '-' + last_tie_bead).append('<span class="big-road-tie-mini tie-' + table_id + '-' + i + '">1</span>');
              } else {
                // Else insert in first  column but check if there are ties
                var existing_marker_column_tie = $('.c0.tb' + table_id).find('span').html() || 0;
  
                if (!existing_marker_column_tie) {
                  $('.c0.tb' + table_id).append('<span class="big-road-tie-mini tie-' + table_id + '-' + i + '">1</span>');
                } else {
                  // If there are ties in the bead, increment it by 1
                  existing_marker_column_tie = parseInt(existing_marker_column_tie) + 1;
                  $('.c0.tb' + table_id).find('span').addClass('tie-' + table_id + '-' + i).html(existing_marker_column_tie);
                }
              }
            } else {
              // If there are ties in the bead, increment it by 1 and add the class i to prevent multiple tie counts
              existing_marker_tie = parseInt(existing_marker_tie) + 1;
              $('.big-' + table_id + '-' + last_tie_bead).find('span').addClass('tie-' + table_id + '-' + i);
              $('.big-' + table_id + '-' + last_tie_bead).find('span').html(existing_marker_tie);
            }
          }
  
          tieCount++;
        } else {
          var row_id = (i - tieCount);
  
          if (row_id == 0) {
            // Put unique id to each bead
            if (marker == 'banker') {
              bankerCount++;
              uniqueCount = bankerCount;
            } else if (marker == 'player') {
              playerCount++;
              uniqueCount = playerCount;
            }
  
            // Insert just once
            if (!$('.big-' + table_id + '-' + row_id).length) {
              $('.c' + row_id + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road');
            }
          } else {
            // Check last inserted bead
            $("div[class*=big-" + table_id + "]").each(function () {
              var currentNum = parseInt($(this).attr('class').split(' ')[4].split('-')[2]);
  
              if (currentNum > biggestNum) {
                biggestNum = currentNum;
                uniqueCount = parseInt($(this).attr('class').split(' ')[7].split('-')[2]);
              }
            });
  
            if (!$('.big-' + table_id + '-' + row_id).length && $('.big-' + table_id + '-' + biggestNum).length) {
              var existing_marker = $('.big-' + table_id + '-' + biggestNum).attr('class').split(' ')[7].split('-')[0];
  
              // If existing marker is equal to new marker, insert new row below it
              if (existing_marker == marker) {
                if ($('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').length) {
                  // Check the length of the last column
                  var existing_marker_id = $('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[7].split('-')[2];
                  var prev_row = parseInt($('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[2].split('c')[1]);
  
                  // First Dragon
                  if ($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).length == 6) {
                    // Get the row number and add 6 to move to another column
                    var next_col = prev_row + 6;
                    // Check if element is exists
                    if (!$('.big-' + table_id + '-' + row_id).length) {
                      if (!self.scoreBoardFlag) {
                        $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon');
                      } else {
                        $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                      }
                    }
                  } else {
                    // Check if there are bead on the next
                    var prev_col = $('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).attr('class');
                    if ( prev_col )
                      prev_col = prev_col.split(' ')[1];
  
                    // 2nd Dragon
                    if ($('.' + prev_col + '.big-road-' + table_id).length == 6) {
                      // Get the row number and add 6 to move to another column
                      var next_col = prev_row + 6;
  
                      // Check if element is exists
                      if (!$('.big-' + table_id + '-' + row_id).length) {
                        if (!self.scoreBoardFlag)
                          $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon');
                        else
                          $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                      }
                    } else {
                      // Check if the next row has dragon
                      if ($('.big-' + table_id + '-' + biggestNum).next().hasClass('dragon')) {
                        // 3rd dragon
                        var next_col = parseInt($('.big-' + table_id + '-' + biggestNum).attr('class').split(' ')[2].split('c')[1]);
                        var next_col = next_col + 6;
  
                        if (!self.scoreBoardFlag)
                          $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon');
                        else
                          $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                      } else {
                        // Check if bead is dragon to follow its path
                        if ($('.big-' + table_id + '-' + biggestNum).hasClass('dragon')) {
                          // Dragon Path
                          var next_col = parseInt($('.big-' + table_id + '-' + biggestNum).attr('class').split(' ')[2].split('c')[1]);
                          var next_col = next_col + 6;
  
                          if (!self.scoreBoardFlag)
                            $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon');
                          else
                            $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                        } else {
                          if (!self.scoreBoardFlag)
                            $('.big-' + table_id + '-' + biggestNum).next().addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road');
                          else
                            $('.big-' + table_id + '-' + biggestNum).next().addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                        }
                      }
                    }
                  }
                }
              } else {
                // Check the length of the last column
                if ($('.' + existing_marker + '-' + table_id + '-' + uniqueCount).length) {
                  var existing_marker_id = $('.' + existing_marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[7].split('-')[2];
                  var prev_row = parseInt($('.' + existing_marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[2].split('c')[1]);
                  var last_col = 0;
  
                  // If new bead, insert it to next column
                  // Get the last bead column and add plus 1 to go to next column (dragon not included)
                  if ($('.' + existing_marker + '-' + existing_marker_id).length >= 6) {
                    last_col = parseInt($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):first').attr('class').split(' ')[1].split('_')[1]) + 1;
                  } else {
                    last_col = parseInt($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):last').attr('class').split(' ')[1].split('_')[1]) + 1;
                  }
  
                  // Put unique id to each bead
                  if (marker == 'banker') {
                    bankerCount++;
                    uniqueCount = bankerCount;
                  } else if (marker == 'player') {
                    playerCount++;
                    uniqueCount = playerCount;
                  }
  
                  if (!self.scoreBoardFlag) {
                    $('.c_' + last_col + '.tb' + table_id + ':first').addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road');
                  } else {
                    $('.c_' + last_col + '.tb' + table_id + ':first').addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                  }
                }
              }
            }
          }
        }
      }
  
      const beadArray = self.countTableSummary(bead_road);
      $('.player-sum-' + table_id).html(beadArray['player']);
      $('.banker-sum-' + table_id).html(beadArray['banker']);
      $('.tie-sum-' + table_id).html(beadArray['tie']);
    },
  
    renderRoomBox: function (rooms) {
      const self = PlayerGame;
      $.each(rooms, function (key, val) {
        const room_id = val.id;
        const room_name = val.table_name;
        let elemHtml = '';
        if (!$('.change-room-' + room_id).length) {
          let tableOverlay = true;
          let tableNotice = TABLE_NOT_AVAILABLE;
          let table_limit = self.getSelectedTableLimit(val.table_name);
  
          if (table_limit && table_limit.table_name == val.table_name) {
            if (table_limit.status == 'ACTIVE') {
              tableOverlay = false;
              if (table_limit.total_player_limit <= table_limit.total_player) {
                tableOverlay = true;
              }
            } else {
              if (table_limit.total_player_limit < table_limit.total_player) {
                tableOverlay = false;
              }
            }
          } else {
  /*          if (val.game_provider_id == 3) {
              if (val.id >= 23 && val.id <= 28) {
                tableOverlay = false;
              }
            } else {*/
              tableOverlay = false;
  //          }
          }
  
          if(val.status !== 'ACTIVE') {
            tableOverlay = true;
  
            tableNotice = '<span><span class="loader"></span> Reconnecting...</span>';
            $('.overlay-'+ val.id).css('background', 'rgba(0,0,0,0.5)');
          }
  
          if(val.beads && val.beads.length >= 60 && self.appGameShoeLimit) {
            tableOverlay = true;
            tableNotice = '<span style="font-size: 10.5pt;">' + T60_CHANGE_TABLE + '</span>';
          }
          const disabledClass = tableOverlay ? 'disabled' : '';
          /*render button*/
          if (self.osPlatform.toLowerCase().indexOf('ios') >= 0 || self.osPlatform.toLowerCase().indexOf('android') >= 0 ){
            elemHtml = `<li class="btn-primary-outlined" data-ripple><a href="javascript:void(0);" class="change-room-${room_id} btn-calendar">${room_name}</a></li>`;
          } else {
            elemHtml = `
          <div class="game-table_item ${self.gameProviderTableId == room_id ? 'active' : ''} ${disabledClass}">
            <a href="javascript:void(0)" class="change-room-${room_id} btn-calendar">${room_name}</a>
          </div>`;
          }
          $('.game-table_body').append(elemHtml);
        }
      });
      self.addEvents();
    },
  
    renderRebet: function () {
      const self = PlayerGame;
  
      let credits = $('#profile-credits').html().replace(/,/g, '');
  
      if (credits >= self.rebet['total']) {
        $.each(self.rebet, function (key, val) {
  
          if (key == 'player' && val > 0) {
            self.playerFlag = 1;
            self.playerBetAmount = val;
            $('#bet-player-amount').html(Helper.format.number.withComma(val));
          } else if (key == 'banker' && val > 0) {
            self.bankerFlag = 1;
            self.bankerBetAmount = val;
            $('#bet-banker-amount').html(Helper.format.number.withComma(val));
          } else if (key == 'tie' && val > 0) {
            self.tieFlag = 1;
            self.tieBetAmount = val;
            $('#bet-tie-amount').html(Helper.format.number.withComma(val));
          } else if (key == 'player-pair' && val > 0) {
            self.playerPairFlag = 1;
            self.playerPairBetAmount = val;
            $('#bet-player-pair-amount').html(Helper.format.number.withComma(val));
          } else if (key == 'banker-pair' && val > 0) {
            self.bankerPairFlag = 1;
            self.bankerPairBetAmount = val;
            $('#bet-banker-pair-amount').html(Helper.format.number.withComma(val));
          }
        });
  
        self.totalTableChipsAmount = self.rebet['total'];
      } else {
        self.showTableError(BALANCE_WARNING);
      }
    },
  
    renderWinningCards: function (data, bead_winner) {
      const self = PlayerGame;
      $('.show-cards').remove();
      let cards = data.split(',');
  
      let winner_color = '';
      let winner_text = '';
      let titleWidth = '';
      let winner_title_style = '';
  
      titleWidth = '6';
  
      if (bead_winner === 'a' || bead_winner === 'b' || bead_winner === 'c' || bead_winner === 'd') {
        winner_text = BANKER_WIN;
        winner_color = '#c1272d';
        winner_title_style = 'background:rgba(255, 82, 88, 0.49);border-color:#c1272d;float:right';
      } else if (bead_winner === 'e' || bead_winner === 'f' || bead_winner === 'g' || bead_winner === 'h') {
        winner_text = PLAYER_WIN;
        winner_color = '#0071bc';
        winner_title_style = 'background:rgba(3, 155, 255, 0.46);border-color:#0071bc';
      } else if (bead_winner === 'i' || bead_winner === 'j' || bead_winner === 'k' || bead_winner === 'l') {
        winner_text = TIE;
        titleWidth = '12';
        winner_color = '#0cba5a';
        winner_title_style = 'background:rgba(12, 186, 90, 0.46);border-color:#0cba5a;width:100%;';
      }
  
      var temp = '';
      var card3 = '';
  
      $.each(cards, function (key, val) {
        if (key === 7) {
          return;
        }
        if (val != null) {
          if (key === 2) {
            if (val === "00") {
              card3 = `<div class="col-sm-2 animated flipInY" style="width: 15%;padding:.2rem;"></div>`;
            } else {
              card3 = `<div class="col-sm-2 animated flipInY" style="width: 15%;padding:.2rem;">
                <img src="${baseUrl}/static/images/game/card/${val}.png" style="width: 87%;transform: rotateZ(90deg);margin-top: 17px;">
                </div>`;
            }
            temp = card3 + temp;
          } else if (key === 5 && val === "00") {
            temp += `<div class="col-sm-2">
              <span>&nbsp;</span>
              </div>`;
          } else if (key === 6 && val === "00") {
            temp += `<div class="col-sm-1">
              <span>&nbsp;</span>
              </div>`;
          } else if (key === 3 && val !== "00") {
            temp += `<div class="col-sm-1">
              <span>&nbsp;</span>'
              </div>`;
  
            temp += `<div class="col-sm-2 animated flipInY" style="width: 15%;padding:.2rem;">
              <img src="${baseUrl}/static/images/game/card/${val}.png" alt="img" style="width: 100%;">
              </div>`;
          } else if (val === "00") {
            temp += `<div class="col-sm-1">
              <span>&nbsp;</span>
              </div>`;
          } else if (key === 6 && val !== "00") {
            temp += `<div class="col-sm-2 animated flipInY" style="width: 15%;padding:.2rem;">
              <img src="${baseUrl}/static/images/game/card/${val}.png" alt="img" style="width: 87%;transform: rotateZ(90deg);margin-left: 15px;margin-top: 17px;">
              </div>`;
          } else {
            temp += `<div class="col-sm-2 animated flipInY" style="width: 15%;padding:.2rem;">
              <img src="${baseUrl}/static/images/game/card/${val}.png" alt="img" style="width: 100%;">
              </div>`;
          }
        }
      });
  
      const elemHtml = `
        <div class="col-md-12 show-cards">
          <div class="col-sm-${titleWidth} text-center" style="${winner_title_style}">
            <h2 style="color: ${winner_color};">${winner_text}</h2>
          </div>
        <div class="clearfix"></div>
        ${temp}
        </div>`;
  
      $('.live-video_body').append(elemHtml);
      self.firstRoundDisable = false;
  
      $('.show-cards').delay(3000).fadeOut(300, function () {
        $(this).remove();
      });
    },
  
    renderTableLimit: function () {
      let tableMin = parseInt($('#minimum-bet').val());
      let tableMax = parseInt($('#maximum-bet').val());
  
      let pairMin = Math.floor(tableMin / 11);
      let pairMax = Math.floor(tableMax / 11);
      let tieMin = Math.floor(tableMin / 8);
      let tieMax = Math.floor(tableMax / 8);
  
      /* Remove Denomination */
      let strPairMin = Helper.format.number.withComma(strPairMin);
  
      if (strPairMin.length > 3) {
        strPairMin = Helper.format.number.withComma(strPairMin).toString().split(',');
        strPairMin = strPairMin[0] + Helper.format.number.convertToTrailingZero(strPairMin[1]);
        pairMin = parseInt(strPairMin);
      }
  
      let strPairMax = Helper.format.number.withComma(pairMax);
  
      if (strPairMax.toString().length > 3) {
        strPairMax = Helper.format.number.withComma(pairMax).toString().split(',');
        strPairMax = strPairMax[0] + Helper.format.number.convertToTrailingZero(strPairMax[1]);
        pairMax = parseInt(strPairMax);
      }
  
      if (pairMin < 1000) {
        pairMin = 1000;
      }
  
      if (tieMin < 1000) {
        tieMin = 1000;
      }
  
      let strTieMin = Helper.format.number.withComma(tieMin);
  
      if (strTieMin.length > 3) {
        strTieMin = strTieMin.split(',');
        strTieMin = strTieMin[0] + Helper.format.number.convertToTrailingZero(strTieMin[1]);
        tieMin = parseInt(strTieMin);
      }
  
      let strTieMax = Helper.format.number.withComma(tieMax);
  
      if (strTieMax.length > 3) {
        strTieMax = strTieMax.split(',');
        strTieMax = strTieMax[0] + Helper.format.number.convertToTrailingZero(strTieMax[1]);
        tieMax = parseInt(strTieMax);
      }
  
      $('#player-bet-limit').html(Helper.format.number.withComma(tableMin) + ' - ' + Helper.format.number.withComma(tableMax));
      $('#banker-bet-limit').html(Helper.format.number.withComma(tableMin) + ' - ' + Helper.format.number.withComma(tableMax));
      $('#tie-bet-limit').html(Helper.format.number.withComma(tieMin) + ' - ' + Helper.format.number.withComma(tieMax));
      $('#pp-bet-limit').html(Helper.format.number.withComma(pairMin) + ' - ' + Helper.format.number.withComma(pairMax));
      $('#bp-bet-limit').html(Helper.format.number.withComma(pairMin) + ' - ' + Helper.format.number.withComma(pairMax));
    },
  
    renderCockroachRoad: function (bead_road, table_id) {
      const self = PlayerGame;
  
      let cockRoadBeads = [];
  
      let uniqueCount = 0;
      let bankerCount = 0;
      let playerCount = 0;
  
      let biggestNum = 0;
  
      let col = 1;
      let marker = '';
      let startingPoint = null;
  
      // Starting point D2 else E1 of Big Road
      // Check if D2 bead exists in Big Road
      if ($('.c19').hasClass('big-road')) {
        startingPoint = 'c19';
      } else {
        startingPoint = 'c24';
      }
  
      // Check if starting point exists
      if (!$('.' + startingPoint + '.big-road').length) {
        return;
      }
  
      // Get the starting point number
      var startingBead = parseInt($('.' + startingPoint).attr('class').split(' ')[4].split('-')[2]);
  
      // Get the Big Road beads length
      var bigRoadBeadLength = $('.big-road').length;
  
      for (let i = startingBead; i < bigRoadBeadLength; i++) {
        // Get the cel number
        var cel = parseInt($('.big-' + table_id + '-' + i).attr('class').split(' ')[2].split('c')[1]);
  
        // Check if the bead position is in first column of Big Road
        if ($.inArray(cel, self.bigRoadColumns) != -1) {
          // Apply rule 1 : check the previous 2 columns to the left if equal in length. skip 2 column in between
  
          // Get the previous 1st and 2nd cell
          var prevCol1 = cel - 6;
          var prevCol2 = prevCol1 - 18;
  
          // Get the column class
          if ($('.c' + prevCol1).length && $('.c' + prevCol2).length) {
            var prevCol1 = $('.c' + prevCol1).attr('class').split(' ')[1];
            var prevCol2 = $('.c' + prevCol2).attr('class').split(' ')[1];
  
            if ($('.' + prevCol1 + '.big-road:not(.dragon)').length == $('.' + prevCol2 + '.big-road:not(.dragon)').length) {
              // If equal in length, true (red mark)
              cockRoadBeads.push('a');
            } else {
              // If not, false (blue mark)
              cockRoadBeads.push('e');
            }
          } else {
            cockRoadBeads.push('e');
          }
  
          //console.log('col : ' + cel + ' | prev col : ' + prevCol1 + ' ' + prevCol2);
        } else {
          // If not, apply rule 2 : check the previous column, compare cel 1 and 2 if match, skip 2 column in between
  
          // Get previous left cell in a row
          var prevRow2 = cel - 18;
          var prevRow1 = prevRow2 - 1;
  
          if ($('.c' + prevRow1 + '.big-road').length == $('.c' + prevRow2 + '.big-road').length || $('.c' + cel).hasClass('dragon')) {
            // If previous 2 cels is match
            cockRoadBeads.push('a');
          } else {
            cockRoadBeads.push('e');
          }
  
          //console.log('row : ' + cel + ' | prev col : ' + prevRow1 + ' ' + prevRow2);
          //console.log($('.c' + prevRow1 + '.big-road').length + ' | ' + $('.c' + prevRow2 + '.big-road').length);
        }
      }
  
      bead_road = cockRoadBeads.join('');
  
      // Iterate the collected beads
      for (let i = 0; i < bead_road.length; i++) {
        if (bead_road[i] == 'a') {
          marker = 'red_line';
        } else {
          marker = 'blue_line';
        }
  
        var row_id = i;
  
        if (row_id == 0) {
          // Put unique id to each bead
          if (marker == 'red_line') {
            bankerCount++;
            uniqueCount = bankerCount;
          } else if (marker == 'blue_line') {
            playerCount++;
            uniqueCount = playerCount;
          }
  
          // Insert just once
          if (!$('.cock-' + table_id + '-' + row_id).length)
            $('.f' + row_id + '.tb' + table_id).addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road');
        } else {
  
          // Check if element is exists
          if (!$('.cock-' + table_id + '-' + row_id).length) {
            // Check last inserted bead
            $("div[class*=cock-" + table_id + "]").each(function () {
              var currentNum = parseInt($(this).attr('class').split(' ')[4].split('-')[2]);
  
              if (currentNum > biggestNum) {
                biggestNum = currentNum;
                uniqueCount = parseInt($(this).attr('class').split(' ')[7].split('-')[2]);
              }
            });
  
            if (!$('.cock-' + table_id + '-' + row_id).length && $('.cock-' + table_id + '-' + biggestNum).length) {
              var existing_marker = $('.cock-' + table_id + '-' + biggestNum).attr('class').split(' ')[7].split('-')[0];
  
              // If existing marker is equal to new marker, insert new row below it
              if (existing_marker == marker) {
                if ($('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').length) {
                  // Check the length of the last column
                  var existing_marker_id = $('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[7].split('-')[2];
                  var prev_row = parseInt($('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[2].split('f')[1]);
  
                  // First Dragon
                  if ($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).length == 6) {
                    // Get the row number and add 6 to move to another column
                    var next_col = prev_row + 6;
                    // Check if element is exists
                    if (!$('.cock-' + table_id + '-' + row_id).length) {
                      if (self.predictFlag) {
                        $('.f' + next_col + '.tb' + table_id).addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                          $('.f' + next_col + '.tb' + table_id).removeClass('cock-' + table_id + '-' + row_id).removeClass('cock-road-' + table_id).removeClassStartingWith('_line').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('cock-road').removeClass('dragon').show();
                        });
                      } else {
                        if (!self.scoreBoardFlag)
                          $('.f' + next_col + '.tb' + table_id).addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').addClass('dragon');
                        else
                          $('.f' + next_col + '.tb' + table_id).addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                      }
                    }
                  } else {
                    // Check if there are bead on the next
                    var prev_col = $('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).attr('class').split(' ')[1];
  
                    // 2nd Dragon
                    if ($('.' + prev_col + '.cock-road-' + table_id).length == 6) {
                      // Get the row number and add 6 to move to another column
                      var next_col = prev_row + 6;
  
                      // Check if element is exists
                      if (!$('.cock-' + table_id + '-' + row_id).length) {
                        if (self.predictFlag) {
                          $('.f' + next_col + '.tb' + table_id).addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                            $('.f' + next_col + '.tb' + table_id).removeClass('cock-' + table_id + '-' + row_id).removeClass('cock-road-' + table_id).removeClassStartingWith('_line').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('cock-road').removeClass('dragon').show();
                          });
                        } else {
                          if (!self.scoreBoardFlag)
                            $('.f' + next_col + '.tb' + table_id).addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').addClass('dragon');
                          else
                            $('.f' + next_col + '.tb' + table_id).addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                        }
                      }
                    } else {
                      // Check if the next row has dragon
                      if ($('.cock-' + table_id + '-' + biggestNum).next().hasClass('dragon')) {
                        // 3rd dragon
                        var next_col = parseInt($('.cock-' + table_id + '-' + biggestNum).attr('class').split(' ')[2].split('f')[1]);
                        var next_col = next_col + 6;
  
                        if (self.predictFlag) {
                          $('.f' + next_col + '.tb' + table_id).addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                            $('.f' + next_col + '.tb' + table_id).removeClass('cock-' + table_id + '-' + row_id).removeClass('cock-road-' + table_id).removeClassStartingWith('_line').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('cock-road').removeClass('dragon').show();
                          });
                        } else {
                          if (!self.scoreBoardFlag)
                            $('.f' + next_col + '.tb' + table_id).addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').addClass('dragon');
                          else
                            $('.f' + next_col + '.tb' + table_id).addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                        }
                      } else {
                        // Check if bead is dragon to follow its path
                        if ($('.cock-' + table_id + '-' + biggestNum).hasClass('dragon')) {
                          // Dragon Path
                          var next_col = parseInt($('.cock-' + table_id + '-' + biggestNum).attr('class').split(' ')[2].split('f')[1]);
                          var next_col = next_col + 6;
  
                          if (self.predictFlag) {
                            $('.f' + next_col + '.tb' + table_id).addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').addClass('dragon').fadeIn().delay(200).fadeOut(function () {
                              $('.f' + next_col + '.tb' + table_id).removeClass('cock-' + table_id + '-' + row_id).removeClass('cock-road-' + table_id).removeClassStartingWith('_line').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('cock-road').removeClass('dragon').show();
                            });
                          } else {
                            if (!self.scoreBoardFlag)
                              $('.f' + next_col + '.tb' + table_id).addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').addClass('dragon');
                            else
                              $('.f' + next_col + '.tb' + table_id).addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                          }
                        } else {
                          if (self.predictFlag) {
                            $('.cock-' + table_id + '-' + biggestNum).next().addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').fadeIn().delay(200).fadeOut(function () {
                              $('.cock-' + table_id + '-' + biggestNum).next().removeClass('cock-' + table_id + '-' + row_id).removeClass('cock-road-' + table_id).removeClassStartingWith('_line').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('cock-road').show();
                            });
                          } else {
                            if (!self.scoreBoardFlag)
                              $('.cock-' + table_id + '-' + biggestNum).next().addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road');
                            else
                              $('.cock-' + table_id + '-' + biggestNum).next().addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                // Check the length of the last column
                if ($('.' + existing_marker + '-' + table_id + '-' + uniqueCount).length) {
                  var existing_marker_id = $('.' + existing_marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[7].split('-')[2];
                  var prev_row = parseInt($('.' + existing_marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[2].split('f')[1]);
                  var last_col = 0;
  
                  // If new bead, insert it to next column
                  // Get the last bead column and add plus 1 to go to next column (dragon not included)
                  if ($('.' + existing_marker + '-' + existing_marker_id).length >= 6) {
                    last_col = parseInt($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):first').attr('class').split(' ')[1].split('_')[1]) + 1;
                  } else {
                    last_col = parseInt($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):last').attr('class').split(' ')[1].split('_')[1]) + 1;
                  }
  
                  // Put unique id to each bead
                  if (marker == 'red_line') {
                    bankerCount++;
                    uniqueCount = bankerCount;
                  } else if (marker == 'blue_line') {
                    playerCount++;
                    uniqueCount = playerCount;
                  }
  
                  if (self.predictFlag) {
                    $('.f_' + last_col + '.tb' + table_id + ':first').addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').fadeIn().delay(200).fadeOut(function () {
                      $('.f_' + last_col + '.tb' + table_id + ':first').removeClass('cock-' + table_id + '-' + row_id).removeClass('cock-road-' + table_id).removeClassStartingWith('_line').removeClass(marker + '-' + table_id + '-' + uniqueCount).removeClass('cock-road').show();
                    });
                  } else {
                    if (!self.scoreBoardFlag)
                      $('.f_' + last_col + '.tb' + table_id + ':first').addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road');
                    else
                      $('.f_' + last_col + '.tb' + table_id + ':first').addClass('cock-' + table_id + '-' + row_id).addClass('cock-road-' + table_id).addClass(bead_road[i] + '_line').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('cock-road').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                  }
                }
              }
            }
          } else {
            // Put unique id to each bead
            if (marker == 'red_line') {
              bankerCount++;
              uniqueCount = bankerCount;
            } else if (marker == 'blue_line') {
              playerCount++;
              uniqueCount = playerCount;
            }
          }
        }
      }
  
      RenderUtil.renderCockRoadPrediction();
      setTimeout(function () {
        self.predictFlag = 0;
      }, 1500);
    },
  
};

const LobbyRenderUtil = {
    renderNotice: function (data) {
      const self = PlayerLobby;
      self.lookUpData = data;
      $('#notice-content li').remove();
  
      $.each(data, function (key, val) {
        let elemHtml = '';
        if (key == 0) {
          elemHtml = `<li>
            <td><a href="javascript:void(0);" class="notice-${val.id}">★ ${val.subject} ★ <span class="text-red">new</span></a></td>
            </li>`;
        } else {
          elemHtml = `<li>
            <td><a href="javascript:void(0);" class="notice-${val.id}">★ ${val.subject} ★</a></td>
            </li>`;
        }
        $('#notice-content').append(elemHtml);
      });
  
      self.addEvents();
    },
  
    renderSelectedNotice: function (data) {
      const self = PlayerLobby;
  
      $('#notification-modal .modal-photo').remove();
      $('#notification-modal .modal-title').html(data.subject);
  
      if (data.message)
        $('#notification-modal .modal-message').html(data.message);
  
      if (data.photo) {
        if (!$('#notification-modal .modal-photo').length) {
          var elemHtml = '<img src="' + baseUrl + '/uploads/' + data.photo + '" class="modal-photo img-responsive w-100">';
          $('#photo-holder').append(elemHtml);
        } else {
          $('#notification-modal .modal-photo').attr('src', baseUrl + '/uploads/' + data.photo);
        }
      }
  
      $('#notification-modal').modal('toggle');
    },
  
    renderGameProvider: function (data) {
      const self = PlayerLobby;
      $.each(data, function (key, val) {
        var gameProviderImage = null;
  
  //      if (val.id == 1 || val.id == 2 || val.id == 3 || val.id == 5 || val.id == 6) {
        if (val.id >= 1 && val.id <= 8 ) {
          if (val.id == 1) {
            gameProviderImage = 'evolution';
          } else if (val.id == 2) {
            gameProviderImage = 'cagayan';
          } else if (val.id == 3) {
            gameProviderImage = 'newworld';
          } else if (val.id == 4) {
            gameProviderImage = 'oriental';
          } else if (val.id == 5) {
            gameProviderImage = 'microgaming';
          } else if (val.id == 6) {
            gameProviderImage = 'solaire';
          } else if (val.id == 7) {
            gameProviderImage = 'stotsenberg';
          } else if (val.id == 8) {
            gameProviderImage = 'okada';
          }
  
          var gameName = '';
  
          if (val.name == 'CITY OF DREAMS') {
            gameName = 'CITY&nbsp;OF&nbsp;DREAMS';
          } else if (val.name == 'PAN PACIFIC') {
            gameName = 'PAN&nbsp;PACIFIC';
          } else {
            gameName = val.name;
          }
  
          let elemHtml = `<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div class="casino-games border-gold-hover">
            <div class="casino-logo">
            <img src="${baseUrl}/static/templates/star/img/${gameProviderImage}.png" alt="${gameName}" class="img-responsive m-0-auto" style="width: 200px; height: 150px;"/>
            <br>
            </div>
            <div class="casino-button">
            <button class="game-${val.id}-${gameName} btn btn-block bg-gold b-r-0 f-s-26">PLAY GAME</button>
            </div>
            </div>
            </div>`;
  
          $('#game-provider').append(elemHtml);
        }
      });
  
      self.addEvents();
    },
  
    renderGameProviderTable(data) {
      const self = PlayerLobby;
      if (!self.scoreBoardFlag) {
        $('#standard-table div').remove();
        $('select[class*=game-table-max-bet] option').remove();
      }
      $('.vegas_loader').hide();
  
      $.each(data, function (key, val) {
        let beads = {
          'player': 0,
          'banker': 0,
          'tie': 0
        };
        let is_live = '';
        val.beads = val.beads || '';
        beads = self.countTableSummary(val.beads);
        let tableOverlay = false;
        let tableNotice = TABLE_NOT_AVAILABLE;
  
        if (val.table_status === '5') {
          tableOverlay = true;
          tableNotice = '셔플중';
        } else if (val.table_status === '6') {
          tableOverlay = true;
          tableNotice = '점검중';
        }
  
        let gameProviderImage = '';
  
        if (val.game_provider_id === '1') {
          gameProviderImage = 'evolution.png';
        } else if (val.game_provider_id === '2') {
          gameProviderImage = 'cagayan.png';
        } else if (val.game_provider_id === '3') {
          gameProviderImage = 'newworld.png';
        } else if (val.game_provider_id === '4') {
          gameProviderImage = 'oriental.png';
        } else if (val.game_provider_id === '5') {
          gameProviderImage = 'microgaming.png';
        } else if (val.game_provider_id === '6') {
          gameProviderImage = 'solaire.png';
        } else if (val.game_provider_id === '7') {
          gameProviderImage = 'stotsenberg.png';
        } else if (val.game_provider_id === '8') {
          gameProviderImage = 'okada.png';
        }
        let name_style = '';
        if (val.game_provider_id === '8') {
          name_style = 'font-size: 12px';
        }
  
        const table_status = Helper.baccarat.showStatus(val.table_status);
  
        if (!self.scoreBoardFlag) {
          let elemHtml = `
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div class="midas-table_header list-inline ${is_live}">
                <span class="midas-table_item_first">
                  <a href="javascript:void(0)" style="${name_style}" class="c-white ame-table-selected-${val.game_provider_id}-${val.id}">${val.table_name}</a>
                </span>
                <div class="midas-table_header-right_menu">
                  <span class="midas-table_item"><div><span class="round-sum-${val.id}">${val.game_no}</span> <span class="f-11">회차</span></div><div class="round-status-${val.id}">${table_status}</div></span>
                  <span class="midas-table_item"><div class="player-sum-${val.id}">${beads['player']}</div><div>Player</div></span>
                  <span class="midas-table_item"><div class="banker-sum-${val.id}">${beads['banker']}</div><div>Banker</div></span>
                  <span class="midas-table_item"><div class="tie-sum-${val.id}">${beads['tie']}</div><div>Tie</div></span>
                </div>
              </div>
              <div class="contents">
                <div class="overlay overlay-${val.id}">
                  <h3><strong>${tableNotice}</strong></h3>
                </div>
                <div class="overlay-button overlay-button-${val.id}">
                  <a href="javascript:void(0)" class="game-table-selected-${val.game_provider.id}-${val.id}"><button class="btn btn-default btn-enter">${ENTRANCE}</button></a>
                </div>
                <div class="panel panel-default">
                  <div class="panel-body p-0 m-b-10 m-l-10 m-t-0" style="height: 107px;overflow: hidden;width: 100%">
                    <div class="active" style="margin-top: -17px;">
                      <div class="text-center" style="height: 80px;">
                        <div class="pnl_2_mini bead-${val.id} m-t-10" style="margin-left:-288px;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
          $('#standard-table').append(elemHtml);
        }
  
        if (tableOverlay) {
          $('.overlay-' + val.id).show();
        } else {
          $('.overlay-' + val.id).hide();
        }
  
        if (self.roomData.length !== 0) {
          let roomArray = self.roomData.filter(x => x.id === val.id);
          if (roomArray) {
            const room = roomArray[0];
            if (val.beads.length > room.beads.length) {
              $(`.overlay-button-${val.id}`).addClass('bg-flash');
              $(`.overlay-button-${val.id}`).delay(3000).fadeOut(300, function () {
                $(this).removeClass('bg-flash');
                $(this).show();
              });
            }
          }
        }
  
        LobbyRenderUtil.renderSecondBoardPerTable(val.beads, val.id);
        $('.round-sum-' + val.id).html(val.game_no);
        $('.round-status-' + val.id).html(table_status);
      });
      /* temporary */
      self.scoreBoardFlag = 1;
      setTimeout(function () {
        self.roomData = data;
        self.addTableSelectionEvents();
      }, 500);
    },
  
    renderMaximumBet: function () {
      const self = PlayerLobby;
      // console.log('render max bet-->', self.gameMaximumBetLookUpData);
      $('.midas-betting-price_body').html('');
      let temHtml = '';
      let selected = false;
      $('select[class*=game-table-max-bet] option').remove();
  
      $.each(self.gameMaximumBetLookUpData, function (key, val) {
        let disabled = '';
        if (self.user_level < val.level_no) {
          disabled = 'disabled';
        }
        let txtColor = '';
        let active = '';
        if (val.is_vip) {
          txtColor = 'style="color: red;"';
        }
        if (!selected && disabled !== 'disabled') {
          active = 'active';
          selected = true;
        }
        temHtml += `
          <div class="midas-betting-price_item ${active} ${disabled}" value="${val.id}"">
            <div><span>Minimum</span><span>${Helper.format.number.withComma(val.p_b_min)}</span></div>
            <div><span>Maximum</span><span>${Helper.format.number.withComma(val.p_b_max)}</span></div>
          </div>`;
      });
      $('.midas-betting-price_body').html(temHtml);
      self.addEvents();
    },
  
    renderSecondBoardPerTable: function (bead_road, table_id) {
      const self = PlayerLobby;
      let top = 0;
      let left = 0;
      let col = 0;
      let colCounter = 1;
      let topCounter = 0;
      let leftCounter = 1;
  
      if (!self.scoreBoardFlag) {
        // Generate empty board
        for (let i = 0; i < 356; i++) {
          if (col === 6) {
            topCounter = top;
            leftCounter += 30;
            col = 1;
            colCounter++;
          } else {
            col++;
          }
  
          const style = 'style="top:' + topCounter + 'px; left:' + leftCounter + 'px;"';
          const elemHtml = '<div class="pnl_2_item_mini c_' + colCounter + ' c' + i + ' tb' + table_id + '"' + style + '></div>';
          $('.bead-' + table_id).append(elemHtml);
          topCounter += 30;
        }
  
        LobbyRenderUtil.renderSecondBoardBeadPerTable(bead_road, table_id);
        LobbyRenderUtil.renderMaximumBet();
      } else {
        LobbyRenderUtil.renderSecondBoardBeadPerTable(bead_road, table_id);
      }
    },
  
    renderSecondBoardBeadPerTable: function (bead_road, table_id) {
      const self = PlayerLobby;
  
      var bankerBead = ['a', 'b', 'c', 'd'];
      var playerBead = ['e', 'f', 'g', 'h'];
      var tieBead = ['i', 'j', 'k', 'l'];
  
      var uniqueCount = 0;
      var bankerCount = 0;
      var playerCount = 0;
      var tieCount = 0;
  
      var biggestNum = 0;
  
      var col = 1;
      var marker = '';
  
      if (!bead_road) {
        return;
      }
  
      // Remove classses if bead road is zero to reset the table
      if (bead_road.length == 0) {
        $('.tb' + table_id).removeClassStartingWith('big-' + table_id).removeClassStartingWith('big-road-' + table_id).removeClassStartingWith('player').removeClassStartingWith('banker');
        $('.tb' + table_id).removeClass('a_min').removeClass('b_min').removeClass('c_min').removeClass('d_min').removeClass('e_min').removeClass('f_min').removeClass('g_min').removeClass('h_min');
        $('.tb' + table_id).removeClass('i_min').removeClass('j_min').removeClass('k_min').removeClass('l_min');
  
        $('.round-sum-' + table_id).html(0);
        $('.player-sum-' + table_id).html(0);
        $('.banker-sum-' + table_id).html(0);
        $('.tie-sum-' + table_id).html(0);
        return;
      }
  
      for (let i = 0; i < bead_road.length; i++) {
        // Check if Player Bead
        if ($.inArray(bead_road[i], playerBead) != -1) {
          marker = 'player';
          // Check if Banker Bead
        } else if ($.inArray(bead_road[i], bankerBead) != -1) {
          marker = 'banker';
          // If tie, put number on the last bead
        } else {
          marker = 'tie';
        }
  
        if (marker == 'tie') {
          // Check if tie is existing
          if (!$('.tie-' + table_id + '-' + i).length) {
            // If tie, check the last inserted bead
            var last_tie_bead = (i - tieCount) - 1;
            var existing_marker_tie = $('.big-' + table_id + '-' + last_tie_bead).find('span').html() || 0;
  
            if (!existing_marker_tie) {
              // Check if the last bead exists
              if ($('.big-' + table_id + '-' + last_tie_bead).length) {
                // Add 1 to the last bead
                $('.big-' + table_id + '-' + last_tie_bead).append('<span class="big-road-tie-mini tie-' + table_id + '-' + i + '">1</span>');
              } else {
                // Else insert in first  column but check if there are ties
                var existing_marker_column_tie = $('.c0.tb' + table_id).find('span').html() || 0;
  
                if (!existing_marker_column_tie) {
                  $('.c0.tb' + table_id).append('<span class="big-road-tie-mini tie-' + table_id + '-' + i + '">1</span>');
                } else {
                  // If there are ties in the bead, increment it by 1
                  existing_marker_column_tie = parseInt(existing_marker_column_tie) + 1;
                  $('.c0.tb' + table_id).find('span').addClass('tie-' + table_id + '-' + i).html(existing_marker_column_tie);
                }
              }
            } else {
              // If there are ties in the bead, increment it by 1 and add the class i to prevent multiple tie counts
              existing_marker_tie = parseInt(existing_marker_tie) + 1;
              $('.big-' + table_id + '-' + last_tie_bead).find('span').addClass('tie-' + table_id + '-' + i);
              $('.big-' + table_id + '-' + last_tie_bead).find('span').html(existing_marker_tie);
            }
          }
  
          tieCount++;
        } else {
          var row_id = (i - tieCount);
  
          if (row_id == 0) {
            // Put unique id to each bead
            if (marker == 'banker') {
              bankerCount++;
              uniqueCount = bankerCount;
            } else if (marker == 'player') {
              playerCount++;
              uniqueCount = playerCount;
            }
  
            // Insert just once
            if (!$('.big-' + table_id + '-' + row_id).length) {
              $('.c' + row_id + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road');
            }
          } else {
            // Check last inserted bead
            $("div[class*=big-" + table_id + "]").each(function () {
              var currentNum = parseInt($(this).attr('class').split(' ')[4].split('-')[2]);
  
              if (currentNum > biggestNum) {
                biggestNum = currentNum;
                uniqueCount = parseInt($(this).attr('class').split(' ')[7].split('-')[2]);
              }
            });
  
            if (!$('.big-' + table_id + '-' + row_id).length && $('.big-' + table_id + '-' + biggestNum).length) {
              var existing_marker = $('.big-' + table_id + '-' + biggestNum).attr('class').split(' ')[7].split('-')[0];
  
              // If existing marker is equal to new marker, insert new row below it
              if (existing_marker == marker) {
                if ($('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').length) {
                  // Check the length of the last column
                  var existing_marker_id = $('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[7].split('-')[2];
                  var prev_row = parseInt($('.' + marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[2].split('c')[1]);
  
                  // First Dragon
                  if ($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).length == 6) {
                    // Get the row number and add 6 to move to another column
                    var next_col = prev_row + 6;
                    // Check if element is exists
                    if (!$('.big-' + table_id + '-' + row_id).length) {
                      if (!self.scoreBoardFlag) {
                        $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon');
                      } else {
                        $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                      }
                    }
                  } else {
                    // Check if there are bead on the next
                    var prev_col = $('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).attr('class').split(' ')[1];
  
                    // 2nd Dragon
                    if ($('.' + prev_col + '.big-road-' + table_id).length == 6) {
                      // Get the row number and add 6 to move to another column
                      var next_col = prev_row + 6;
  
                      // Check if element is exists
                      if (!$('.big-' + table_id + '-' + row_id).length) {
                        if (!self.scoreBoardFlag)
                          $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon');
                        else
                          $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                      }
                    } else {
                      // Check if the next row has dragon
                      if ($('.big-' + table_id + '-' + biggestNum).next().hasClass('dragon')) {
                        // 3rd dragon
                        var next_col = parseInt($('.big-' + table_id + '-' + biggestNum).attr('class').split(' ')[2].split('c')[1]);
                        var next_col = next_col + 6;
  
                        if (!self.scoreBoardFlag)
                          $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon');
                        else
                          $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                      } else {
                        // Check if bead is dragon to follow its path
                        if ($('.big-' + table_id + '-' + biggestNum).hasClass('dragon')) {
                          // Dragon Path
                          var next_col = parseInt($('.big-' + table_id + '-' + biggestNum).attr('class').split(' ')[2].split('c')[1]);
                          var next_col = next_col + 6;
  
                          if (!self.scoreBoardFlag)
                            $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon');
                          else
                            $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                        } else {
                          if (!self.scoreBoardFlag)
                            $('.big-' + table_id + '-' + biggestNum).next().addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road');
                          else
                            $('.big-' + table_id + '-' + biggestNum).next().addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                        }
                      }
                    }
                  }
                }
              } else {
                // Check the length of the last column
                if ($('.' + existing_marker + '-' + table_id + '-' + uniqueCount).length) {
                  var existing_marker_id = $('.' + existing_marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[7].split('-')[2];
                  var prev_row = parseInt($('.' + existing_marker + '-' + table_id + '-' + uniqueCount + ':last').attr('class').split(' ')[2].split('c')[1]);
                  var last_col = 0;
  
                  // If new bead, insert it to next column
                  // Get the last bead column and add plus 1 to go to next column (dragon not included)
                  if ($('.' + existing_marker + '-' + existing_marker_id).length >= 6) {
                    last_col = parseInt($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):first').attr('class').split(' ')[1].split('_')[1]) + 1;
                  } else {
                    last_col = parseInt($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):last').attr('class').split(' ')[1].split('_')[1]) + 1;
                  }
  
                  // Put unique id to each bead
                  if (marker == 'banker') {
                    bankerCount++;
                    uniqueCount = bankerCount;
                  } else if (marker == 'player') {
                    playerCount++;
                    uniqueCount = playerCount;
                  }
  
                  if (!self.scoreBoardFlag) {
                    $('.c_' + last_col + '.tb' + table_id + ':first').addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road');
                  } else {
                    $('.c_' + last_col + '.tb' + table_id + ':first').addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
                  }
                }
              }
            }
          }
        }
      }
  
      const beadArray = self.countTableSummary(bead_road);
      $('.player-sum-' + table_id).html(beadArray['player']);
      $('.banker-sum-' + table_id).html(beadArray['banker']);
      $('.tie-sum-' + table_id).html(beadArray['tie']);
    },
  
    renderCashIn: function (data) {
      const self = PlayerLobby;
      self.lookUpData = data;
      $('#cashin-content tr').remove();
  
      $.each(data, function (key, val) {
  
        const status = Helper.cash.showStatus(val.status);
  
        const cashin_amount = Helper.format.number.withComma(val.amount);
        const created = Helper.format.date.showDate(val.created);
  
        var elemHtml = `<tr align="center" bgcolor="#101010">
        <td height="32" bgcolor="#150b18" class="text_5">${val.account.nick_name}</td>
        <td bgcolor="#150b18" class="text_13">${cashin_amount} 원 </td>
        <td bgcolor="#150b18" class="text_5"><span class="text_13">${status}</span></td>
        <td bgcolor="#150b18" class="text_5"><i class="fa fa-clock-o"></i> ${created}</td>
        </tr>`;
        $('#cashin-content').append(elemHtml);
      });
  
      self.addEvents();
    },
  
    renderCashOut: function (data) {
      const self = PlayerLobby;
      self.lookUpData = data;
      $('#cashout-content tr').remove();
  
      $.each(data, function (key, val) {
  
        const status = Helper.cash.showStatus(val.status);
  
        // const current_balance = Helper.format.number.withComma(val.current_balance);
        const cashout_amount = Helper.format.number.withComma(val.amount);
        // const remaining_balance = Helper.format.number.withComma(val.remaining_balance);
        const created = Helper.format.date.showDate(val.created);
  
        const elemHtml = `
        <tr align="center" bgcolor="#101010">
        <td height="32" bgcolor="#150b18" class="text_5">${val.account.nick_name}</td>
        <td bgcolor="#150b18" class="text_13">${cashout_amount} 원 </td>
        <td bgcolor="#150b18" class="text_5"><span class="text_13">${status}</span></td>
        <td bgcolor="#150b18" class="text_5"><i class="fa fa-clock-o"></i> ${created}</td>
      </tr>`;
        $('#cashout-content').append(elemHtml);
      });
      self.addEvents();
    },
  
    renderNote: function (data) {
      const self = PlayerLobby;
      $('#note-content tr').remove();
  
      $.each(data, function (key, val) {
  
        const status = Helper.note.showStatus(val.status);
        const created = Helper.format.date.showDate(val.created);
  
        const elemHtml = `<tr>
          <td width="92" height="35" align="center">${val.id}</td>
          <td width="565" align="left"><a class="note-detail-${val.id} white" href="javascript: void(0)">${val.title}</a></td>
          <td width="105" align="center">${status}</td>
          <td width="138" align="center"><i class="fa fa-clock-o"></i> ${created}</td>
        </tr>
        <tr bgcolor="#442a4c">
          <td height="1" colspan="4" align="center" ></td>
        </tr>`;
        $('#note-content').append(elemHtml);
      });
      self.addEvents();
    },
  
    renderCustomer: function (data) {
      const self = PlayerLobby;
      $('#customer-content tr').remove();
  
      $.each(data, function (key, val) {
  
        const status = Helper.customer.showStatus(val.status);
        const created = Helper.format.date.showDate(val.created);
        const elemHtml = `<tr>
          <td width="92" height="35" align="center">${val.id}</td>
          <td width="565" align="left"><a class="customer-detail-${val.id} white" href="javascript: void(0)">${val.title}</a></td>
          <td width="105" align="center">${status}</td>
          <td width="138" align="center"><i class="fa fa-clock-o"></i> ${created}</td>
        </tr>
        <tr bgcolor="#442a4c">
          <td height="1" colspan="4" align="center" ></td>
        </tr>`;
  
        $('#customer-content').append(elemHtml);
      });
      self.addEvents();
    },
  
    renderBetHistory: function (data) {
      const self = PlayerLobby;
  
      $('#bet-history-content tr').remove();
  
      $.each(data, function (key, val) {
        var txtColor = '';
        const status = Helper.bet.showBetLogStatus(val.bet_status);
        let arrBetBeads = GameUtil.getBetBeadType(val);
        let date_betting = Helper.format.date.showDate(val.date_betting);
  
        let elemList = '<div class="bead_table"><ul class="beads">';
  
        let cardList = '';
        if (val.winning_cards) {
          var arrWinningCards = val.winning_cards.split(',');
          var cardname = '';
          cardList = '<span class="popover">';
  
          $.each(arrWinningCards, function (key, val) {
            //cardList += '<img src="'+ baseUrl + '/images/game/card/'+ val +'.png">';
            if (val != null) {
              if (key == 0) {
                cardname = 'PLAYER';
              } else if (key == 4) {
                cardname = 'BANKER';
              }
  
              if (key == 0 || key == 4) {
                cardList += `<div><img src="${baseUrl}/images/game/card/${val}.png"><span class="message">${cardname}</span></div>`;
              } else if (key == 2 && val == "00") {
                cardList += `<div><span>&nbsp;</span></div>`;
              } else if (key == 5 && val == "00") {
                cardList += `<div><span>&nbsp;</span></div>`;
              } else if (key == 6 && val == "00") {
                cardList += `<div><span>&nbsp;</span></div>`;
              } else if (key == 3 && val != "00") {
                cardList += `<div><span>&nbsp;</span></div>`;
                cardList += `<div><img src="${baseUrl}/images/game/card/${val}.png"></div>`;
              } else if (val == "00") {
                cardList += `<div><span>&nbsp;</span></div>`;
              } else {
                cardList += `<div><img src="${baseUrl}/images/game/card/${val}.png"></div>`;
              }
            }
          });
  
          cardList += '</span>';
        }
  
        $.each(arrBetBeads, function (key, val) {
          elemList += '<li><img src="' + baseUrl + '/static/images/game/bead/dark/gt_b_' + val + '.png" width="24"></li>';
        });
  
        elemList += '</ul></div>';
        let resultImg = '';
        if (val.game_log.game_result) {
          resultImg = `<img src="${baseUrl}/static/images/game/bead/dark/gt_b_${val.game_log.game_result}.png" alt="img" width="24">`;
        }
  
        var elemHtml = `<tr>
          <td align="center" ><span class="ref-no">${val.id + cardList}</span></td>
          <td align="center" >${val.game_log.table_name}</td>
          <td align="center" >${val.game_log.shoe_no} - ${val.game_log.game_no}</td>
          <td align="center" >${elemList}</td>
          <td align="center" >${Helper.format.number.withComma(val.p_amount)}</td>
          <td align="center" >${Helper.format.number.withComma(val.b_amount)}</td>
          <td align="center" >${Helper.format.number.withComma(val.t_amount)}</td>
          <td align="center" >${Helper.format.number.withComma(val.pp_amount)}</td>
          <td align="center" >${Helper.format.number.withComma(val.bp_amount)}</td>
          <td align="center" >${resultImg}</td>
          <td align="center" >${status}</td>
          <td align="center"  ${txtColor}>${Helper.format.number.withComma(val.winning_amount)}</td>
          <td align="center" >${Helper.format.number.withComma(val.before_amount)}</td>
          <td align="center" >${Helper.format.number.withComma(val.after_amount)}</td>
          <td align="center" ><span class="text-muted"><i class="fa fa-clock-o"></i> ${date_betting}</span> </td>
          </tr>`;
  
        $('#bet-history-content').append(elemHtml);
      });
    },
  
    renderTablePagination: function (data) {
      const self = PlayerLobby;
  
      $('.table-pagination tr').remove();
      $('.table-pagination').append(data);
  
  /*    $.each($('.table-pagination	td a'), function (key, val) {
        var id = $(val).html();
        $(val).attr('href', '#');
        $(val).addClass('page-button-' + id + ' pages');
      });*/
  
      self.addEvents();
    },
};

const PlayerGame = {
    flag: 0,
    timerFlag: 0,
  
    scoreBoardFlag: 0,
    roomTimer: null,
    roomData: [],
    gameMaximumBetLookUpData: [],
    user_level: 1,
  
    muteFlag: 0,
    betStartMessageFlag: 1,
    otherRoadsFlag: 0,
    scoreBoardFlag: 0,
    beadCount: 0,
    shoeCount: '',
    firstRoundDisable: 0,
    appCompany: '',
    video_url: '',
    table_name: '',
    table_status: 6,
  
    callFlag: 0,
    dealFlag: 0,
    stateFlag: 0,
    confirmFlag: 0,
    limitFlag: 0,
    predictFlag: 0,
    canPredict: 0,
    canConfirm: 1,
    canBet: 0,
    playerFlag: 0,
    bankerFlag: 0,
    tieFlag: 0,
    playerPairFlag: 0,
    bankerPairFlag: 0,
  
    playerConfirmFlag: 0,
    bankerConfirmFlag: 0,
    tieConfirmFlag: 0,
    playerPairConfirmFlag: 0,
    bankerPairConfirmFlag: 0,
  
    winningBeads: null,
  
    playerBetAmount: 0,
    bankerBetAmount: 0,
    tieBetAmount: 0,
    playerPairBetAmount: 0,
    bankerPairBetAmount: 0,
    totalTableChipsAmount: 0,
  
    lastPlayerBetAmount: 0,
    lastBankerBetAmount: 0,
    lastTieBetAmount: 0,
    lastPlayerPairBetAmount: 0,
    lastBankerPairBetAmount: 0,
  
    playerConfirmedBetAmount: 0,
    bankerConfirmedBetAmount: 0,
    tieConfirmedBetAmount: 0,
    playerPairConfirmedBetAmount: 0,
    bankerPairConfirmedBetAmount: 0,
    shoeBetLimitFlag: 0,
  
    gameProviderId: 0,
    gameProviderTableId: 0,
    gameProviderMaxBetId: 0,
    gameVideoUrl: null,
  
    isTableSelected: false,
    isChipSelected: false,
    chipSelectedElem: null,
  
    bigRoadArray: {},
    isBankerBigRoad: 0,
    isPlayerBigRoad: 0,
    bigRoadColNo: 0,
    bigRoadColumns: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 252, 258],
    bigDragonCounter: 1,
    bigTieCounter: 0,
  
    origBal: 0,
    gameIdleCount: 0,
    shoeDeletedCount: 0,
    kickFlag: 0,
    logoutFlag: 0,
    roomBetLimit: 0,
    roadLog: 0,
    predictBead: '',
  
    rebet: {
      'player': 0,
      'banker': 0,
      'tie': 0,
      'player-pair': 0,
      'banker-pair': 0,
      'total': 0
    },
  
    timer: null,
    timerCount: 40,
    currentPage: 1,
    maxPage: 0,
  
    loaderFlag: 1,
    language: 'kr',//$('html').attr('lang'),
    api_credits: "",
    creditFlag: 1,
    tableLimitData: [],
    oldGameData: {},
    cnt_no_bet_ok: 0,
    expand_percent: 100,
    is_first: true,
    init: function () {
      const self = this;
      self.gameProviderId = parseInt($('#game-provider-id').val());
      self.gameProviderTableId = parseInt($('#game-provider-table-id').val());
      self.gameProviderMaxBetId = $('#game-provider-max-bet-id').val();
      self.gameProviderVelocity = $('#game-provider-velocity').val();
      self.gameProviderChannelId = parseInt($('#game-provider-channel-id').val()) || 0;
      self.gameHashId = $('#game-hash').val();
      self.origBal = Helper.format.number.removeComma($('#profile-credits').html());
      self.osPlatform = $('#os-platform-detect').val();
      self.appCompany = $('#app_company').val();
      self.video_url = $('#video_url').val();
      self.table_name = $('#table_name').val();
      self.cnt_no_bet_ok = $('#cnt_no_bet_ok').val();
      self.firstRoundDisable = $('#first_betting_yn').val() === 'N';
      self.user_level = parseInt($('#account_level').val());
  
      // self.shoeBetLimitFlag = parseInt($('#app-game-shoe-limit').val()) || 0;
      self.cnt_no_bet_ok = self.cnt_no_bet_ok ? parseInt(self.cnt_no_bet_ok) : 0;
  
      self.addEvents();
      self.initMulitpleSession();
      // self.api.get.tableLimit();
      self.api.get.gameRoom();
      self.initVideo();
  
      self.api.get.gameSelectedRoom();
      // setInterval(function () {
      //   self.api.get.gameSelectedRoom();
      // }, 1500);
      // console.log('app status', self.cnt_no_bet_ok);
      self.api.post.gameMaximumBet();
    },
  
    initVideo() {
      const self = this;
  /*    if (self.osPlatform.toLowerCase() === 'ios' || self.osPlatform.toLowerCase() === 'androidos') {
        if (self.gameProviderId === 1 || self.gameProviderId === 2 || self.gameProviderId === 3 || self.gameProviderId === 4 || self.gameProviderId === 5) {
          GameUtil.initIframePlayer();
        }
      } else {
        if (self.gameProviderId === 1 || self.gameProviderId === 2 || self.gameProviderId === 3 || self.gameProviderId === 6) {
          GameUtil.initIframePlayer();
        }
      }*/
      self.expand_percent = 100;
  //    if (self.gameProviderId >=1 && self.gameProviderId <=8 ) {
        GameUtil.initIframePlayer();
  //    }
      $('.video_iframe').width('100%');
      $('.video_iframe').height('100%');
    },
  
    credits: function () {
      var self = this;
  
      //self.api.get.get_api_for_credits();
      self.api.get.get_credits();
    },
  
    initCounter: function () {
      const self = this;
  
      self.timer = $.timer(function () {
        if (self.timerCount <= 20 && self.timerCount >= 0) {
  //        if (self.gameProviderId == 5 || self.gameProviderId == 6) {
            if (!self.muteFlag) {
              Helper.sound.play.tick();
            }
  //        }
        }
  
        if (self.timerCount >= 0) {
          $('#timer').html(self.timerCount);
        }
        self.timerCount--;
        if ( self.timerCount < 0 ){
            // console.log('stopbetting');
          self.lockChips(BET_END);
          $('#btn-bet-deal, #btn-bet-rebet, #btn-bet-clear').attr('disabled', 'disabled');
          if (!self.muteFlag) {
            Helper.sound.play.stopBetting();
          }
  
          if (self.timerFlag == 1) {
            self.timer.stop();
            $('#timer').html(0);
          }
            self.timerFlag = 2;
          self.canPredict = 0;
        }
      });
  
  /*    if ((self.gameProviderId == 2 && (self.gameProviderTableId == 17 || self.gameProviderTableId == 18)) || self.gameProviderId == 5 || self.gameProviderId == 6 || self.gameProviderId == 7) {
        if (self.gameProviderId == 5 || self.gameProviderId == 7) {
          self.timer.set({time: 950, autostart: false});
        } else {
          self.timer.set({time: 1130, autostart: false});
        }
  
        $('.timer').show();
      } else {*/
        self.timer.set({time: 850, autostart: false});
  //    }
    },
  
    initMulitpleSession: function () {
      const self = this;
      let isMultiple = false;
  
      // if (+Cookies.get('tabs') > 0) {
      //   isMultiple = true;
      //   // alert('Invalid Access');
      // } else {
      //   Cookies.set('tabs', 0);
      // }
      // Cookies.set('tabs', +Cookies.get('tabs') + 1);
  
      // window.onunload = function () {
      //   Cookies.set('tabs', +Cookies.get('tabs') - 1);
      // };
  
      // if (isMultiple) {
      //   // window.location = baseUrl + '/lobby';
      //   window.location = baseUrl + '/403';
      // }
    },
  
    countUp: function (val) {
      const self = this;
      const options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
      };
  
      const currentCredit = parseInt(Helper.format.number.removeComma($('#profile-credits').html()));
      const countUp = new CountUp("profile-credits", currentCredit, val, 0, 2.5, options);
      countUp.start();
    },
  
    countTableSummary: function (bead_road) {
      var self = this;
      var beadArray = {
        'banker': 0,
        'player': 0,
        'tie': 0
      };
      if (bead_road != null) {
        for (let i = 0; i <= bead_road.length; i++) {
          if (bead_road[i] == 'a' || bead_road[i] == 'b' || bead_road[i] == 'c' || bead_road[i] == 'd') {
            beadArray['banker'] += 1;
          } else if (bead_road[i] == 'e' || bead_road[i] == 'f' || bead_road[i] == 'g' || bead_road[i] == 'h') {
            beadArray['player'] += 1;
          } else if (bead_road[i] == 'i' || bead_road[i] == 'j' || bead_road[i] == 'k' || bead_road[i] == 'l') {
            beadArray['tie'] += 1;
          }
        }
      }
  
      return beadArray;
    },
  
    addTableSelectionEvents: function () {
      const self = this;
      $('a[class*=game-table-selected]').unbind('click').bind('click', function (e) {
        e.preventDefault();
        var params = $(this).attr('class').split(' ')[0].split('-');
  
        const room_id = params[4];//$(this).attr('class').split(' ')[0].split('-')[2];
        const betLimit = `&m=${self.gameProviderMaxBetId}`;
        const oldGameData = self.oldGameData || {};
        if ((oldGameData.table_status !== '5' || oldGameData.table_status !== 5) && self.dealFlag) {
          Helper.confirm.ok(WARNING, CANNOT_LEAVE_ROOM);
        } else {
          if (room_id) {
            $(this).attr('disabled', 'disabled');
            self.api.post.gameChangeRoom(room_id, baseUrl + '/game?p=' + self.gameProviderId + '&t=' + room_id + betLimit);
            setTimeout(() => {
              $(this).removeAttr('disabled');
            }, 3000);
          }
        }  
      });
    },
  
    addEvents: function () {
      const self = this;
  
      $('#banker-probe').unbind().bind('click', function (e) {
        e.preventDefault();
        if (self.canPredict) {
          self.predictFlag = 1;
          RenderUtil.renderBeadRoad('a', 0, self.gameProviderTableId);
          RenderUtil.renderBigRoad(self.predictBead + 'a', self.gameProviderTableId);
        }
      });
  
      $('#player-probe').unbind().bind('click', function (e) {
        e.preventDefault();
        if (self.canPredict) {
          self.predictFlag = 1;
          RenderUtil.renderBeadRoad('e', 0, self.gameProviderTableId);
          RenderUtil.renderBigRoad(self.predictBead + 'e', self.gameProviderTableId);
        }
      });
  
      $('.btn_changetable').unbind().bind('click', function (e) {
        e.preventDefault();
        $('.bet_table').show();
        $('.vegas_loader').show();
        self.scoreBoardFlag = 0;
        self.roomData = [];
        self.api.get.gameRoomSelection(self.gameProviderId);
        self.roomTimer = setInterval(function () {
          self.api.get.gameRoomSelection(self.gameProviderId);
        }, 7000);
      });
  
      $('.close_2').unbind().bind('click', function (e) {
        e.preventDefault();
        $('.bet_table').hide();
        clearInterval(self.roomTimer);
      });
  
      $('.btn_fullscreen').unbind().bind('click', function (e) {
        e.preventDefault();
        var elem = document.getElementsByTagName("body");
        // console.log('full screen', elem);
        elem = elem[0];
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
      });
      $(document).on("fullscreenchange webkitfullscreenchange msfullscreenchange mozfullscreenchange", function(event)
      {
        var fullScreenElement =
        document.fullscreenElement ||
        document.msFullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement;
  
        var isFullscreen = !!fullScreenElement;
  
        // console.log("In fullscreen mode?", isFullscreen);
  
        if (isFullscreen === true)
        {
            // TODO: Prevent the browser from entering full screen mode. These three lines don't prevent that behavior
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
            $('.btn_fullscreen').hide();
            $('.btn_window').show();
            return false;
  
            // The commented code below works. Ideally, we'd want to prevent the browser from even entering full screen mode 
            //document.webkitExitFullscreen();
        } else {
          $('.btn_fullscreen').show();
          $('.btn_window').hide();
        }
      });
      $('.btn_window').unbind().bind('click', function (e) {
        e.preventDefault();
        var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
          (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
          (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
          (document.msFullscreenElement && document.msFullscreenElement !== null);
  
        var docElm = document.documentElement;
        if (isInFullScreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
      });
  
      $('img[class*=x_bet]').unbind().bind('click', function (e) {
        e.preventDefault();
        let table = $(this).attr('class').split(' ')[0].split('_')[1];
        let credits = parseInt(Helper.format.number.removeComma($('#profile-credits').html()));
        let bets = parseInt(Helper.format.number.removeComma($('#bet-amount').html()));
  
        if (table === 'bet-player') {
          if (self.playerConfirmFlag) {
            credits = credits + (self.playerConfirmedBetAmount - self.lastPlayerBetAmount);
            //$('#profile-credits').html(Helper.format.number.withComma(credits));
            $('#' + table + '-amount').html(Helper.format.number.withComma(self.playerConfirmedBetAmount));
  
            self.playerFlag = 1;
            self.playerConfirmFlag = 1;
          } else {
            $('#' + table + '-amount').html(0);
            $('#' + table + ' li').remove();
  
            self.playerFlag = 0;
            self.playerConfirmFlag = 0;
            self.playerConfirmedBetAmount = 0;
          }
        } else if (table === 'bet-banker') {
          credits = credits + (self.bankerConfirmedBetAmount - self.lastBankerBetAmount);
  
          if (self.bankerConfirmFlag) {
            //$('#profile-credits').html(Helper.format.number.withComma(credits));
            $('#' + table + '-amount').html(Helper.format.number.withComma(self.bankerConfirmedBetAmount));
  
            self.bankerFlag = 1;
            self.bankerConfirmFlag = 1;
          } else {
            $('#' + table + '-amount').html(0);
            $('#' + table + ' li').remove();
  
            self.bankerFlag = 0;
            self.bankerConfirmFlag = 0;
            self.bankerConfirmedBetAmount = 0;
          }
        } else if (table === 'bet-tie') {
          credits = credits + (self.tieConfirmedBetAmount - self.lastTieBetAmount);
  
          if (self.tieConfirmFlag) {
            //$('#profile-credits').html(Helper.format.number.withComma(credits));
            $('#' + table + '-amount').html(Helper.format.number.withComma(self.tieConfirmedBetAmount));
  
            self.tieFlag = 1;
            self.tieConfirmFlag = 1;
          } else {
            $('#' + table + '-amount').html(0);
            $('#' + table + ' li').remove();
  
            self.tieFlag = 0;
            self.tieConfirmFlag = 0;
            self.tieConfirmedBetAmount = 0;
          }
        } else if (table === 'bet-player-pair') {
          credits = credits + (self.playerPairConfirmedBetAmount - self.lastPlayerPairBetAmount);
  
          if (self.playerPairConfirmFlag) {
            //$('#profile-credits').html(Helper.format.number.withComma(credits));
            $('#' + table + '-amount').html(Helper.format.number.withComma(self.playerPairConfirmedBetAmount));
  
            self.playerPairFlag = 1;
            self.playerPairConfirmFlag = 1;
          } else {
            $('#' + table + '-amount').html(0);
            $('#' + table + ' li').remove();
  
            self.playerPairFlag = 0;
            self.playerPairConfirmFlag = 0;
            self.playerPairConfirmedBetAmount = 0;
          }
        } else if (table === 'bet-banker-pair') {
          credits = credits + (self.bankerPairConfirmedBetAmount - self.lastBankerPairBetAmount);
  
          if (self.bankerPairConfirmFlag) {
            //$('#profile-credits').html(Helper.format.number.withComma(credits));
            $('#' + table + '-amount').html(Helper.format.number.withComma(self.bankerPairConfirmedBetAmount));
  
            self.bankerPairFlag = 1;
            self.bankerPairConfirmFlag = 1;
          } else {
            $('#' + table + '-amount').html(0);
            $('#' + table + ' li').remove();
  
            self.bankerPairFlag = 0;
            self.bankerPairConfirmFlag = 0;
            self.bankerPairConfirmedBetAmount = 0;
          }
        }
        if (!self.muteFlag)
          Helper.sound.play.press();
      });
  
      $('a[class*=change-room]').unbind('click').bind('click', function () {
        const room_id = $(this).attr('class').split(' ')[0].split('-')[2];
        const betLimit = `&m=${self.gameProviderMaxBetId}`;
        const oldGameData = self.oldGameData || {};
        if ((oldGameData.table_status !== '5' || oldGameData.table_status !== 5) && self.dealFlag) {
          Helper.confirm.ok(WARNING, CANNOT_LEAVE_ROOM);
        } else {
          if (room_id) {
            $(this).attr('disabled', 'disabled');
            self.api.post.gameChangeRoom(room_id, baseUrl + '/game?p=' + self.gameProviderId + '&t=' + room_id + betLimit);
            setTimeout(() => {
              $(this).removeAttr('disabled');
            }, 3000);
          }
        }
      });
  
      $('.go_lobby').unbind('click').bind('click', function (e) {
        e.preventDefault();
        if (self.dealFlag) {
          Helper.confirm.ok(WARNING, CANNOT_LEAVE_ROOM);
        } else {
          $(this).attr('disabled', 'disabled');
          if ($("#api_user").val()) {
            self.api.get.gameLeaveRoom(baseUrl + '/lobby/' + self.gameProviderId);
          } else {
            self.api.get.gameLeaveRoom(baseUrl + '/lobby?p=' + self.gameProviderId);
          }
        }
      });
  
      $('#btn-reload-stream').unbind('click').bind('click', function (e) {
        e.preventDefault();
  
  //      if (self.gameProviderId >= 1 && self.gameProviderId <= 8) {
          $('#stream_holder').attr('src', self.gameVideoUrl);
  //      }/* else {
  //        GameUtil.initPlayer(self.gameVideoUrl, $('#room-name').html());
  //      }
      });
  
      $('#btn-reload-iframe').unbind('click').bind('click', function (e) {
        e.preventDefault();
        // GameUtil.initIframePlayer();
        self.initVideo();
      });
  
      $('#btn-plus-iframe').unbind('click').bind('click', function (e) {
        e.preventDefault();
        // GameUtil.initIframePlayer();
        self.expand_percent += 15;
        if ( self.expand_percent > 175 ){
          self.expand_percent -= 15;
          return;
        }
        $('.video_iframe').width(self.expand_percent.toString()+'%');
        $('.video_iframe').height(self.expand_percent.toString()+'%');  
      });
  
      $('#btn-minus-iframe').unbind('click').bind('click', function (e) {
        e.preventDefault();
        // GameUtil.initIframePlayer();
        self.expand_percent -= 15;
        if ( self.expand_percent < 25 ){
          self.expand_percent += 15;
          return;
        }
        $('.video_iframe').width(self.expand_percent.toString()+'%');
        $('.video_iframe').height(self.expand_percent.toString()+'%');  
      });
  
      $('.bet-chips').unbind('click').bind('click', function (e) {
        e.preventDefault();
  
        self.chipSelectedElem = $(this);
        const id = $(this).attr('class').split(' ')[1].split('-')[1];
        $('.bet-chips').each(function (key, ele) {
          $(ele).removeClass('active');
        });
        $(this).addClass('active');
        self.isChipSelected = true;
      });
  
      $('ul[class*=chips-]').unbind('click').bind('click', function (e) {
        e.preventDefault();
        if ( self.dealFlag )
          return;
        if (!self.isChipSelected) {
          self.showTableError(PLEASE_SELECT_CHIPS);
          return;
        }
  
        $('.bet-table').removeClass('bet-table-selected');
        $(this).addClass('bet-table-selected');
        self.isTableSelected = true;
  
        const chipSelected = self.chipSelectedElem.parent().clone();
  
        $.each($('ul[class*=chips-]'), function (key, element) {
          if ($(element).hasClass('bet-table-selected')) {
            $(element).append(chipSelected);
            GameUtil.calculateChipsInTable();
          }
        });
      });
  
      $('#btn-lobby').unbind('click').bind('click', function (e) {
        e.preventDefault();
        if (self.dealFlag) {
          Helper.confirm.ok(WARNING, CANNOT_LEAVE_ROOM);
        } else {
          $(this).attr('disabled', 'disabled');
          if ($("#api_user").val()) {
            self.api.get.gameLeaveRoom(baseUrl + '/lobby/' + self.gameProviderId);
          } else {
            self.api.get.gameLeaveRoom(baseUrl + '/lobby?p=' + self.gameProviderId);
          }
        }
      });
  
      $('#btn-bet-history').unbind('click').bind('click', function (e) {
        e.preventDefault();
        self.api.post.gameBetHistory();
        $('#chips-section').parent().css('z-index', 0);
        $('.bet').show();
      });
  
      $('.close_1').unbind('click').bind('click', function (e) {
        e.preventDefault();
        $('.bet').hide();
      });
  
      $('#btn-bet-deal').unbind('click').bind('click', function (e) {
        e.preventDefault();
  
        if (!self.canConfirm) {
          return;
        }
        if (self.dealFlag) {
          return;
        }
        const playerBet = parseInt(Helper.format.number.removeComma($('#bet-player-amount').html()));
        const bankerBet = parseInt(Helper.format.number.removeComma($('#bet-banker-amount').html()));
        const playerPairBet = parseInt(Helper.format.number.removeComma($('#bet-player-pair-amount').html()));
        const bankerPairBet = parseInt(Helper.format.number.removeComma($('#bet-banker-pair-amount').html()));
        const tieBet = parseInt(Helper.format.number.removeComma($('#bet-tie-amount').html()));
  
        const totalBets = playerBet + bankerBet + playerPairBet + bankerPairBet + tieBet;
  
        if (!totalBets) {
          self.showTableError(PLEASE_SELECT_BET);
          return;
        }
  
        self.canConfirm = 0;
        self.api.post.updateLastConfirm();
  
        setTimeout(function () {
          self.limitFlag = 1;
          self.canConfirm = 1;
        }, 1500);
      });
  
      $('#btn-bet-clear').unbind('click').bind('click', function (e) {
        e.preventDefault();
  
        const playerBet = parseInt(Helper.format.number.removeComma($('#bet-player-amount').html()));
        const bankerBet = parseInt(Helper.format.number.removeComma($('#bet-banker-amount').html()));
        const playerPairBet = parseInt(Helper.format.number.removeComma($('#bet-player-pair-amount').html()));
        const bankerPairBet = parseInt(Helper.format.number.removeComma($('#bet-banker-pair-amount').html()));
        const tieBet = parseInt(Helper.format.number.removeComma($('#bet-tie-amount').html()));
  
        const totalBets = playerBet + bankerBet + playerPairBet + bankerPairBet + tieBet;
  
        if (!totalBets) {
          return;
        }
  
        if (!self.callFlag) {
          self.dealFlag = 0;
          self.limitFlag = 0;
          setTimeout(() => {
            self.api.post.cancelBet();
          }, 500);
        }
      });
  
      $('#btn-bet-rebet').unbind('click').bind('click', function (e) {
        e.preventDefault();
        RenderUtil.renderRebet();
  
        if (!self.muteFlag) {
          Helper.sound.play.press();
        }
      });
  
      $('.close-modal').unbind('click').bind('click', function (e) {
        e.preventDefault();
        $('#chips-section').parent().css('z-index', 99999);
      });
  
      $('a[class*=page-button-]').unbind().bind('click', function (e) {
        e.preventDefault();
        self.page = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);
        self.api.post.gameBetHistory(self.page);
      });
  
      $('.previous').unbind().bind('click', function (e) {
        e.preventDefault();
  
        if (!$(this).parent().hasClass('disabled')) {
          $('.next').parent().removeClass('disabled');
  
          self.currentPage--;
          self.api.post.gameBetHistory(self.currentPage);
  
          if (self.currentPage == 1) {
            $(this).parent().addClass('disabled');
          }
        }
      });
  
      $('.next').unbind().bind('click', function (e) {
        e.preventDefault();
  
        if (!$(this).parent().hasClass('disabled')) {
          $('.previous').parent().removeClass('disabled');
  
          self.currentPage++;
          self.api.post.gameBetHistory(self.currentPage);
  
          if (self.currentPage == self.maxPage) {
            $(this).parent().addClass('disabled');
          }
        }
      });
  
      $('#btn-sound').unbind().bind('click', function (e) {
        e.preventDefault();
  
        if (self.muteFlag) {
          $(this).find('i').addClass('fa-volume-up');
          $(this).find('i').removeClass('fa-volume-off');
  
          self.muteFlag = 0;
        } else {
          $(this).find('i').removeClass('fa-volume-up');
          $(this).find('i').addClass('fa-volume-off');
  
          self.muteFlag = 1;
        }
      });
  
      $('#btn-zoom-in').unbind().bind('click', function (e) {
        e.preventDefault();
  
        if (!$('#stream_holder').hasClass('zoom'))
          $('#stream_holder').addClass('zoom');
      });
  
      $('#btn-zoom-out').unbind().bind('click', function (e) {
        e.preventDefault();
  
        if ($('#stream_holder').hasClass('zoom'))
          $('#stream_holder').removeClass('zoom');
      });
    },
  
    resetTables: function () {
      // console.log('resettables');
      const self = this;
  
      $.each($('.chips'), function (key, element) {
        if ($(element).hasClass('bet-table-selected')) {
          $(element).removeClass('bet-table-selected').removeClass('chip-unselected').addClass('bet-table');
        }
      });
  
      self.lastPlayerBetAmount = 0;
      self.lastBankerBetAmount = 0;
      self.lastTieBetAmount = 0;
      self.lastPlayerPairBetAmount = 0;
      self.lastBankerPairBetAmount = 0;
  
      self.playerFlag = 0;
      self.bankerFlag = 0;
      self.tieFlag = 0;
      self.playerPairFlag = 0;
      self.bankerPairFlag = 0;
      self.playerConfirmFlag = 0;
      self.bankerConfirmFlag = 0;
      self.tieConfirmFlag = 0;
      self.playerPairConfirmFlag = 0;
      self.bankerPairConfirmFlag = 0;
      self.playerBetAmount = 0;
      self.bankerBetAmount = 0;
      self.tieBetAmount = 0;
      self.playerPairBetAmount = 0;
      self.bankerPairBetAmount = 0;
      self.totalTableChipsAmount = 0;
      self.playerConfirmedBetAmount = 0;
      self.bankerConfirmedBetAmount = 0;
      self.tieConfirmedBetAmount = 0;
      self.playerPairConfirmedBetAmount = 0;
      self.bankerPairConfirmedBetAmount = 0;
      self.isTableSelected = false;
  
      $('#bet-player-table').removeClass('player-highlight');
      $('#bet-player-table > p').removeClass('player-highlight-text');
      $('#bet-banker-table').removeClass('banker-highlight');
      $('#bet-banker-table > p').removeClass('banker-highlight-text');
      $('#bet-tie-table').removeClass('tie-highlight');
      $('#bet-tie-table > p').removeClass('tie-highlight-text');
      $('#bet-player-pair-table').removeClass('pp-highlight');
      $('#bet-player-pair-table > p').removeClass('pp-highlight-text');
      $('#bet-banker-pair-table').removeClass('bp-highlight');
      $('#bet-banker-pair-table > p').removeClass('bp-highlight-text');
  
      $('#bet-banker, #bet-player, #bet-tie, #bet-player-pair, #bet-banker-pair').removeAttr('style').removeClass('bet-table-selected');
      $('#profile-credits').html(Helper.format.number.withComma(self.origBal));
      self.resetChips();
    },
  
    resetChips: function () {
      const self = this;
  
      $('#bet-player-amount, #bet-banker-amount, #bet-tie-amount, #bet-player-pair-amount, #bet-banker-pair-amount').html(0);
      $('#bet-player li, #bet-banker li, #bet-tie li, #bet-player-pair li, #bet-banker-pair li').remove();
      $('#bet-amount').html(0);
    },
  
    countSummaryBeads: function () {
      const self = this;
  
      let banker = $('.pnl_1 .a').length;
      let player = $('.pnl_1 .e').length;
      let tie = $('.pnl_1 .i').length;
  
      let bankerPlayerPair = $('.pnl_1 .b').length;
      let bankerPair = $('.pnl_1 .c').length;
      let bankerPlayerBothPair = $('.pnl_1 .d').length;
  
      let playerBankerPair = $('.pnl_1 .g').length;
      let playerPair = $('.pnl_1 .f').length;
      let playerBankerBothPair = $('.pnl_1 .h').length;
  
      let tieBankerPair = $('.pnl_1 .k').length;
      let tiePlayerPair = $('.pnl_1 .j').length;
      let tiePlayerBankerBothPair = $('.pnl_1 .l').length;
  
      let bankerTotalScore = banker + bankerPair + bankerPlayerPair + bankerPlayerBothPair;
      $('#banker-score').html(bankerTotalScore);
  
      let playerTotalScore = player + playerPair + playerBankerPair + playerBankerBothPair;
      $('#player-score').html(playerTotalScore);
  
      let tieTotalScore = tie + tieBankerPair + tiePlayerPair + tiePlayerBankerBothPair;
      $('#tie-score').html(tieTotalScore);
  
      let bankerPairTotalScore = bankerPair + bankerPlayerBothPair + playerBankerPair + playerBankerBothPair + tieBankerPair + tiePlayerBankerBothPair;
      $('#banker-pair-score').html(bankerPairTotalScore);
  
      let playerPairTotalScore = playerPair + playerBankerBothPair + bankerPlayerPair + bankerPlayerBothPair + tiePlayerPair + tiePlayerBankerBothPair;
      $('#player-pair-score').html(playerPairTotalScore);
    },
  
    getSelectedTableLimit: function (table_name) {
      const self = this;
      var index = 0;
  
      $.each(self.tableLimitData, function (key, val) {
        if (val.table_name == table_name) {
          index = key;
        }
      });
  
      return self.tableLimitData[index];
    },
  
    showTableError: function (message, flag) {
      const self = this;
  
      if (typeof flag == 'undefined') {
        flag = 0;
      }
  
      $('#table-error center h4').html(message);
  
      if (flag) {
        $('#table-error').removeClass('alert-danger').addClass('alert-success');
        $('#table-error').fadeIn().delay(2000).fadeOut();
      } else {
        $('#table-error').removeClass('alert-success').addClass('alert-danger');
        $('#table-error').fadeIn().delay(2000).fadeOut();
      }
    },
  
    showBetConfirmMessage: function (message) {
      $('.show-cards').remove();
  
      const elemHtml = `
        <div class="col-md-12 show-cards">
          <div class="col-sm-12 text-center" style="background:rgba(3, 155, 255, 0.46);border-color:#0071bc">
            <h4 style="color: #0071bc;">${message}</h4>
          </div>
        </div>`;
  
      $('.live-video_body').append(elemHtml);
  
      $('.show-cards').delay(3000).fadeOut(300, function () {
        $(this).remove();
      });
    },
  
    showBetStatus: function (message, flag) {
      const self = this;
  
      if (typeof flag == 'undefined') {
        flag = 0;
      }
  
      $('#bet-status h1').html(message);
      $('#bet-status').removeClass('bet-failed').removeClass('bet-success');
  
      if (flag) {
        $('#bet-status').addClass('bet-success');
      } else {
        $('#bet-status').addClass('bet-failed');
      }
  
      $('#bet-status').fadeIn().delay(2000).fadeOut();
    },
  
    lockChips: function (message, bool) {
      // console.log('lockchips: '+message+' bool:'+bool);
      const self = this;
  
      if (typeof bool == 'undefined') {
        bool = true;
      }
  /*    if ( message = '셔플중'){
      self.resetTables();
      }*/
      if (self.betStartMessageFlag) {
        self.lockStatusMessage(message, bool);
      }
  
      if ($('#block-chips').length) {
        if (!bool) {
          if (!self.firstRoundDisable) {
            $('#block-chips').hide();
            self.betStartMessageFlag = 1;
            self.creditFlag = 1;
          }
        } else {
          $('#block-chips').css('display', 'flex');
          $('#block-chips .bet-message h1').html(message ? message : BET_END);
          self.betStartMessageFlag = 0;
        }
      } else {
        let elemHtml = `<div id="block-chips" class="overlay">
          <h1 style="margin-top: 21%;"><b>${message ? message : BET_END}</b></h1>
          </div>`;
        $('.game-coins').append(elemHtml);
      }
    },
  
    lockStatusMessage: function (message, bool) {
      const self = this;
  
      if (typeof bool == 'undefined') {
        bool = true;
      }
  
      if ($('.bet-start-message').length) {
        $('.bet-start-message > h1 b').html(message);
        if (bool) {
          $('.bet-start-message').fadeIn().delay(3000).fadeOut();
        }
      }
    },
    loadLastConfirmedBetData(){
      const self = this;
      if ( !self.is_first )
        return;
      self.is_first = false;
      let curGameInfo = window.localStorage.getItem('gameInfo');
      if ( curGameInfo ){
        curGameInfo = JSON.parse(curGameInfo);
        // console.log('gameInfo:', JSON.stringify(curGameInfo) );
        if ( curGameInfo.account == $('#account_id').val() && curGameInfo.gameData.table_name == self.table_name && curGameInfo.gameData.shoe_no == $('#shoe-count').html() && curGameInfo.gameData.game_no == $('#game-no').html() ){
          if ( new Date().getTime() - curGameInfo.currentTime < 10000 ){
            $('#bet-amount').html(Helper.format.number.withComma(curGameInfo.totalBet));
            if (curGameInfo.playerFlag) {
              $('#bet-player-table').addClass('player-highlight');
              $('#bet-player-table > p').addClass('player-highlight-text');
              $('#bet-player-amount').html(Helper.format.number.withComma(curGameInfo.playerConfirmedBetAmount));
            }
            if (curGameInfo.bankerFlag) {
              $('#bet-banker-table').addClass('banker-highlight');
              $('#bet-banker-table > p').addClass('banker-highlight-text');
              $('#bet-banker-amount').html(Helper.format.number.withComma(curGameInfo.bankerConfirmedBetAmount));
            }
            if (curGameInfo.tieFlag) {
              $('#bet-tie-table').addClass('tie-highlight');
              $('#bet-tie-table > p').addClass('tie-highlight-text');
              $('#bet-tie-amount').html(Helper.format.number.withComma(curGameInfo.tieConfirmedBetAmount));
            }
            if (curGameInfo.playerPairFlag) {
              $('#bet-player-pair-table').addClass('pp-highlight');
              $('#bet-player-pair-table > p').addClass('pp-highlight-text');
              $('#bet-player-pair-amount').html(Helper.format.number.withComma(curGameInfo.playerPairConfirmedBetAmount));
            }
            if (curGameInfo.bankerPairFlag) {
              $('#bet-banker-pair-table').addClass('bp-highlight');
              $('#bet-banker-pair-table > p').addClass('bp-highlight-text');
              $('#bet-banker-pair-amount').html(Helper.format.number.withComma(curGameInfo.bankerPairConfirmedBetAmount));
            }
            let credits = self.origBal;
            credits = credits - parseInt(curGameInfo.totalBet);
            $('#profile-credits').html(Helper.format.number.withComma(credits));      
            self.dealFlag = 1;
          }
        }
      }
    },
    handleSelectedRoomData(val) {
      const self = PlayerGame;
      self.oldGameData = val;
      let beads = val.beads;
      self.table_status = val.table_status;
      if (val.video_url) {
        self.video_url = val.video_url;
      }
      $('#shoe-count').html(val.shoe_no);
      $('#game-no').html(val.game_no);
      if (!self.flag) {
        $('#room-name').html(val.table_name);
  
        self.timerCount = val.timer;
        self.shoeCount = val.shoe_no;
        self.gameVideoUrl = val.video_url;
        self.gameProviderChannelId = 1;
  
        // Render Score Boards
        RenderUtil.renderFirstBoardTable(val.id);
        RenderUtil.renderSecondBoardTable(val.id);
        RenderUtil.renderThirdBoardTable(val.id);
        RenderUtil.renderFourthBoardTable(val.id);
        RenderUtil.renderFifthBoardTable(val.id);
  
        self.initCounter();
      }
  
      if (val.status !== 'ACTIVE') {
        if (self.dealFlag && !self.callFlag) {
          self.dealFlag = 0;
          self.limitFlag = 0;
          self.showBetStatus(BETTING_FAILED);
        }
  
        RenderUtil.renderReconnection(1);
        self.lockChips(BET_END);
        $('#btn-bet-deal, #btn-bet-rebet, #btn-bet-clear').attr('disabled', 'disabled');
        return;
      } else {
        RenderUtil.renderReconnection();
      }
  
      if (beads.length > 60 && self.shoeBetLimitFlag) {
        self.canBet = 0;
        Helper.confirm.ok(WARNING, T60_CHANGE_TABLE, function () {
          if ($('#api_user').val()) {
            self.api.get.gameLeaveRoom(baseUrl + '/lobby/' + self.gameProviderId);
          } else {
            self.api.get.gameLeaveRoom(baseUrl + '/lobby');
          }
        });
        setTimeout(() => {
          self.api.get.gameLeaveRoom(baseUrl + '/lobby?p=' + self.gameProviderId);
        }, 3000);
        return;
      } else {
        self.canBet = 1;
      }
      if (self.cnt_no_bet_ok && self.gameIdleCount > self.cnt_no_bet_ok) {
        if ($('#confirm-ok-modal').length === 0 || $('#confirm-ok-modal').css('display') === 'none') {
          Helper.confirm.ok(WARNING, LOGOUT_5TIMES, function () {
            if ($('#api_user').val()) {
              self.api.get.gameLeaveRoom(baseUrl + '/lobby/' + self.gameProviderId);
            } else {
              self.api.get.gameLeaveRoom(baseUrl + '/lobby');
            }
          });
          setTimeout(() => {
            self.api.get.gameLeaveRoom(baseUrl + '/lobby?p=' + self.gameProviderId);
          }, 5000);
          return;
        }
      }
  
      if (!self.canBet) {
        $('#block-chips h1').css({
          'margin-top': '10px',
          'font-size': '21px'
        });
  
        self.lockChips(T60_CHANGE_TABLE);
        $('#btn-bet-deal, #btn-bet-rebet, #btn-bet-clear').attr('disabled', 'disabled');
      }
  
      if (self.canBet) {
        // console.log(val.timer, val.table_status, val.shoe_no, val.game_no, self.dealFlag, self.gameProviderId, self.timerCount);
        if (val.table_status === 1 || val.table_status === '1') {
          self.resetTables();
          self.dealFlag = 0;
          self.lockChips('', false);
          $('#btn-bet-deal, #btn-bet-rebet, #btn-bet-clear').removeAttr('disabled');
          Helper.sound.play.startBetting();
        } else if ((val.table_status === 2 || val.table_status === '2') && self.timerCount != 0 && self.timerFlag != 2 ) {
          self.lockChips(BET_END);
          $('#btn-bet-deal, #btn-bet-rebet, #btn-bet-clear').attr('disabled', 'disabled');
          if (!self.muteFlag) {
            Helper.sound.play.stopBetting();
          }
        } else if (val.table_status === 4 || val.table_status === '4') {
          self.lockChips('정산중');
          $('#btn-bet-deal, #btn-bet-rebet, #btn-bet-clear').attr('disabled', 'disabled');
        } else if (val.table_status === 5 || val.table_status === '5') {
          self.lockChips('셔플중');
          $('#btn-bet-deal, #btn-bet-rebet, #btn-bet-clear').attr('disabled', 'disabled');
        } else if (val.table_status === 6 || val.table_status === '6') {
          self.lockChips('점검중');
          $('#btn-bet-deal, #btn-bet-rebet, #btn-bet-clear').attr('disabled', 'disabled');
        }
        if (val.timer === 0 || val.table_status >= 4) {
          if (self.timerFlag == 1) {
            self.timer.stop();
            $('#timer').html(0);
          }
  
          self.timerFlag = 0;
          self.canPredict = 0;
        } else {
          if (!self.timerFlag) {
            self.timerCount = val.timer;
            self.timer.play(true);
          }
  
          $('#shoe-count').html(val.shoe_no);
  
          self.shoeCount = val.shoe_no;
          if ( !self.timerFlag )
            self.timerFlag = 1;
          if ( self.timerFlag != 2 )
              self.canPredict = 1;
        }
      }
      
      self.loadLastConfirmedBetData();
  
      self.predictBead = beads;
      self.beadCount = beads.length;
  
      if (beads.length === 0) {
        $('#shoe-count').html(val.shoe_no);
        $('.pnl_1 div').removeClass().addClass('pnl_1_item');
        $('.pnl_2 div').find('span').remove();
        $('.pnl_2 div').removeClassStartingWith('big-road').removeClassStartingWith('big-').removeClassStartingWith('_min').removeClassStartingWith('player').removeClassStartingWith('banker').removeClassStartingWith('tie').removeClassStartingWith('dragon');
        $('.pnl_3 div').removeClassStartingWith('eye-road').removeClassStartingWith('eye-').removeClassStartingWith('a_mark').removeClassStartingWith('e_mark').removeClassStartingWith('dragon');
        $('.pnl_4 div').removeClassStartingWith('small-road').removeClassStartingWith('small-').removeClassStartingWith('a_dot').removeClassStartingWith('e_dot').removeClassStartingWith('dragon');
        $('.pnl_5 div').removeClassStartingWith('cock-road').removeClassStartingWith('cock-').removeClassStartingWith('a_line').removeClassStartingWith('e_line').removeClassStartingWith('dragon');
        $('.predict-b1 img, .predict-b2 img, .predict-b3 img, .predict-p1 img, .predict-p2 img, .predict-p3 img').remove();
  
        self.countSummaryBeads();
        self.shoeDeletedCount = 0;
        self.shoeCount = val.shoe_no;
        if ( $('#scoreboard .pnl_2').css('overflow-x') == 'auto' ){
          $('#scoreboard .pnl_2').css('overflow-x','hidden');
          $('#scoreboard .pnl_2').scrollLeft("0");
        }  
        if ( $('#scoreboard .pnl_1').css('overflow-x') == 'auto' ){
          $('#scoreboard .pnl_1').css('overflow-x','hidden');
          $('#scoreboard .pnl_1').scrollLeft("0");
        }
      } else {
        if (beads.length < $('.bead-road').length) {
          $('#shoe-count').html(val.shoe_no);
          $('.pnl_1 div').removeClass().addClass('pnl_1_item');
          $('.pnl_2 div').find('span').remove();
          $('.pnl_2 div').removeClassStartingWith('big-road').removeClassStartingWith('big-').removeClassStartingWith('_min').removeClassStartingWith('player').removeClassStartingWith('banker').removeClassStartingWith('tie').removeClassStartingWith('dragon');
          $('.pnl_3 div').removeClassStartingWith('eye-road').removeClassStartingWith('eye-').removeClassStartingWith('a_mark').removeClassStartingWith('e_mark').removeClassStartingWith('dragon');
          $('.pnl_4 div').removeClassStartingWith('small-road').removeClassStartingWith('small-').removeClassStartingWith('a_dot').removeClassStartingWith('e_dot').removeClassStartingWith('dragon');
          $('.pnl_5 div').removeClassStartingWith('cock-road').removeClassStartingWith('cock-').removeClassStartingWith('a_line').removeClassStartingWith('e_line').removeClassStartingWith('dragon');
          $('.predict-b1 img, .predict-b2 img, .predict-b3 img, .predict-p1 img, .predict-p2 img, .predict-p3 img').remove();
    
          self.countSummaryBeads();
          self.shoeDeletedCount = 0;
          self.shoeCount = val.shoe_no;  
          if ( $('#scoreboard .pnl_2').css('overflow-x') == 'auto' ){
            $('#scoreboard .pnl_2').css('overflow-x','hidden');
            $('#scoreboard .pnl_2').scrollLeft("0");
          }  
          if ( $('#scoreboard .pnl_1').css('overflow-x') == 'auto' ){
            $('#scoreboard .pnl_1').css('overflow-x','hidden');
            $('#scoreboard .pnl_1').scrollLeft("0");
          }
        }
  
        // Check if bead length if morethan 78
        // if (beads.length > 66) {
        //   beads = beads.substr(66);
  
        //   if (!self.shoeDeletedCount) {
        //     $('.pnl_1 div').removeClass().addClass('pnl_1_item');
        //     $('.pnl_2 div').find('span').remove();
        //     $('.pnl_2 div').removeClassStartingWith('big-road').removeClassStartingWith('big-').removeClassStartingWith('_min').removeClassStartingWith('player').removeClassStartingWith('banker').removeClassStartingWith('tie').removeClassStartingWith('dragon');
        //     $('.pnl_3 div').removeClassStartingWith('eye-road').removeClassStartingWith('eye-').removeClassStartingWith('a_mark').removeClassStartingWith('e_mark').removeClassStartingWith('dragon');
        //     $('.pnl_4 div').removeClassStartingWith('small-road').removeClassStartingWith('small-').removeClassStartingWith('a_dot').removeClassStartingWith('e_dot').removeClassStartingWith('dragon');
        //     $('.pnl_5 div').removeClassStartingWith('cock-road').removeClassStartingWith('cock-').removeClassStartingWith('a_line').removeClassStartingWith('e_line').removeClassStartingWith('dragon');
        //     $('.predict-b1 img, .predict-b2 img, .predict-b3 img, .predict-p1 img, .predict-p2 img, .predict-p3 img').remove();
        //     self.countSummaryBeads();
        //   }
  
        //   self.shoeDeletedCount = 1;
        // }
  
        // Render Bead Road
        // RenderUtil.renderBeadRoad(beads, val.winning_cards, val.id);
        try {
          if (!self.predictFlag) {
            RenderUtil.renderBeadRoad(beads, val.winning_cards, val.id);
          }
        } catch (err) {
          console.log('Failed rendering the roads:'+ err)
        }
      }
  
      self.flag = 1;
    },
  
    api: {
      get: {
        tableLimit: function () {
          const self = PlayerGame;
          $.ajax({
            url: baseUrl + '/table/limit/all',
            method: 'GET',
            beforeSend: function () {
            },
            success: function (resp) {
              if (resp.success) {
                self.tableLimitData = resp.data;
                self.api.get.gameRoom();
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
  
        gameRoomSelection: function (game_provider_id) {
          const self = PlayerGame;
          $.ajax({
            url: baseUrl + '/bet/room/' + game_provider_id,
            method: 'GET',
            success: function (resp) {
              RenderUtil.renderGameProviderTable(resp.data);
            },
            error: function (resp) {},
            complete: function () {}
          });
        },    
        gameSelectedRoom: function () {
          const self = PlayerGame;
          const resp = {"success": true, "data": {"id": 898, "game_log": 8140413, "table_no": 1, "table_name": "OK-1", "shoe_no": 617, "game_no": 38, "shoe_update_date": "2021-07-21 04:54:43.454713+09:00", "result": "", "table_status": "1", "timer": 40, "status": "ACTIVE", "updated": null, "created": "2021-06-27T10:02:34.406265+09:00", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "beads": "kaeeaeaaeafeaieaeabaecaebafiaacafeeai", "winning_cards": "00,00,00,00,00,00,00,00"}};
          self.handleSelectedRoomData(resp.data);
          return;
          $.ajax({
            url: baseUrl + '/bet/room/selected/' + self.gameProviderTableId,
            method: 'GET',
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                if (resp.is_multiple_auth) {
                  if ($('#confirm-ok-modal').length == 0 || $('#confirm-ok-modal').css('display') == 'none') {
                    Helper.confirm.ok(WARNING, MULTIPLE_LOGIN, function () {
                      self.api.get.gameLeaveRoom(baseUrl + '/logout');
                    });
                  }
                } else {
                  self.handleSelectedRoomData(resp.data);
                }
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
  
        gameSelectedRoomSocket: function (val) {
          PlayerGame.handleSelectedRoomData(val);
        },
  
        gameRoom: function () {
          const self = PlayerGame;
          const resp = {"success": true, "data": [{"id": 898, "game_log": 8140413, "table_no": 1, "table_name": "OK-1", "shoe_no": 617, "game_no": 38, "shoe_update_date": "2021-07-21 04:54:43.454713+09:00", "result": "", "table_status": "1", "timer": 40, "status": "ACTIVE", "updated": null, "created": "2021-06-27T10:02:34.406265+09:00", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "beads": "kaeeaeaaeafeaieaeabaecaebafiaacafeeai", "winning_cards": "00,00,00,00,00,00,00,00"}, {"id": 901, "game_log": 8140415, "table_no": 2, "table_name": "OK-2", "shoe_no": 605, "game_no": 36, "shoe_update_date": "2021-07-21 04:54:44.463236+09:00", "result": "", "table_status": "1", "timer": 40, "status": "ACTIVE", "updated": null, "created": "2021-06-27T10:17:05.106252+09:00", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "beads": "ieagaebeeeiaaaaiaaegicaeiaeieaeeiae", "winning_cards": "00,00,00,00,00,00,00,00"}, {"id": 902, "game_log": 8140412, "table_no": 3, "table_name": "OK-3", "shoe_no": 596, "game_no": 31, "shoe_update_date": "2021-07-21 04:54:43.319320+09:00", "result": "", "table_status": "1", "timer": 40, "status": "ACTIVE", "updated": null, "created": "2021-06-27T10:31:55.288812+09:00", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "beads": "eaaegaeieecieeeeeeeaeefeiaiaaa", "winning_cards": "00,00,00,00,00,00,00,00"}, {"id": 879, "game_log": 8140462, "table_no": 6, "table_name": "OK-6", "shoe_no": 578, "game_no": 37, "shoe_update_date": "2021-07-21 04:55:29.824481+09:00", "result": "", "table_status": "1", "timer": 40, "status": "ACTIVE", "updated": null, "created": "2021-06-27T06:43:28.514426+09:00", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "beads": "ecaebbeaeiaaeaeiiaafeafaaeeeaeeeeaee", "winning_cards": "00,00,00,00,00,00,00,00"}, {"id": 893, "game_log": 8140436, "table_no": 7, "table_name": "OK-7", "shoe_no": 592, "game_no": 19, "shoe_update_date": "2021-07-21 04:55:05.415531+09:00", "result": "", "table_status": "1", "timer": 40, "status": "ACTIVE", "updated": null, "created": "2021-06-27T06:44:26.382923+09:00", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "beads": "eiaeeeaaaaeaaegaae", "winning_cards": "00,00,00,00,00,00,00,00"}, {"id": 891, "game_log": 8140450, "table_no": 8, "table_name": "OK-8", "shoe_no": 605, "game_no": 29, "shoe_update_date": "2021-07-21 04:55:19.954040+09:00", "result": "", "table_status": "1", "timer": 40, "status": "ACTIVE", "updated": null, "created": "2021-06-27T06:44:04.933624+09:00", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "beads": "feaaafkaaieiaieijaaaeaaaiaea", "winning_cards": "00,00,00,00,00,00,00,00"}]};
          RenderUtil.renderRoomBox(resp.data);
          return;
          $.ajax({
            url: baseUrl + '/bet/room/' + self.gameProviderId,
            method: 'GET',
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                RenderUtil.renderRoomBox(resp.data);
              }
            },
            error: function (resp) {}
          });
        },
  
        gameLeaveRoom: function (url) {
          const self = PlayerGame;
          window.location = url;
          // $.ajax({
          //   url: baseUrl + '/bet/table/leave/' + $('#room-name').html(),
          //   method: 'GET',
          //   beforeSend: function () {},
          //   success: function (resp) {
          //     if (resp.success) {
          //       // self.monitorPlayerLeave();
          //       if (url) {
          //         window.location = url;
          //       }
          //     }
          //   },
          //   error: function (resp) {
          //     alert(resp.error);
          //   },
          //   complete: function () {}
          // });
        },
  
        get_credits: function () {
          const self = PlayerGame;
  
          $.ajax({
            url: baseUrl + "/app/user/credits/",
            data: {
              "api_id": $('#api_id').val(),
            },
            method: 'GET',
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                self.origBal = resp.credits;
                const user_credits = parseInt(resp.credits) - Helper.format.number.removeComma($('#bet-amount').html());
  
                $("#profile-credits").html(Helper.format.number.withComma(user_credits));
  
              } else {
                $("#error").html(resp.errors);
              }
            },
            error(resp) {},
            complete() {}
          });
        },
      },
  
      post: {
        gameMaximumBet: function () {
          const self = PlayerGame;
          $.ajax({
            url: baseUrl + '/bet/maximum-bet',
            method: 'GET',
            beforeSend: function () {
            },
            success: function (resp) {
              self.gameMaximumBetLookUpData = resp.data;
            },
            error: function (resp) {
            },
            complete: function () {
            }
          });
        },
        gameChangeRoom: function (room_id, url) {
          const self = PlayerGame;
          $.ajax({
            url: baseUrl + '/bet/table/change/',
            method: 'POST',
            data: {
              baccarat_id: room_id,
            },
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                if (url) {
                  window.location = url;
                }
              } else {
                alert(resp.message);
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
        updateLastConfirm: function () {
          const self = PlayerGame;
          let params = {};
          let betCardsArray = [];
          let arrBeadType = [];
  
          if (self.playerFlag || self.playerConfirmedBetAmount) {
            betCardsArray.push('PLAYER');
            arrBeadType.push('e');
            params['bet_player_amount'] = self.playerBetAmount;
          }
  
          if (self.bankerFlag || self.bankerConfirmedBetAmount) {
            betCardsArray.push('BANKER');
            arrBeadType.push('a');
            params['bet_banker_amount'] = self.bankerBetAmount;
          }
  
          if (self.tieFlag || self.tieConfirmedBetAmount) {
            betCardsArray.push('TIE');
            arrBeadType.push('i');
            params['bet_tie_amount'] = self.tieBetAmount;
          }
  
          if (self.playerPairFlag || self.playerPairConfirmedBetAmount) {
            betCardsArray.push('PLAYER PAIR');
            arrBeadType.push('f');
            params['bet_playerpair_amount'] = self.playerPairBetAmount;
          }
  
          if (self.bankerPairFlag || self.bankerPairConfirmedBetAmount) {
            betCardsArray.push('BANKER PAIR');
            arrBeadType.push('c');
            params['bet_bankerpair_amount'] = self.bankerPairBetAmount;
          }
  
          params['bet_bead'] = betCardsArray.join();
          params['bet_bead_type'] = arrBeadType.join();
          params['table_name'] = self.oldGameData.table_name;
          params['_token'] = $('#_token').val();
  
          // self.callFlag = 1;
          self.gameIdleCount = 0;
          // self.lockChips(BET_END);
  
          $('img[class*=x_bet]').hide();
  
          $('#winning-amount').html(0);
  
          // $('#btn-bet-deal, #btn-bet-clear, #btn-bet-rebet').attr('disabled', 'disabled');
  
          $.ajax({
            url: baseUrl + '/bet/last_confirm/',
            method: 'POST',
            data: params,
            beforeSend: function () {},
            success: function (resp) {
              // console.log('last_confirm', resp);
              if (resp.success) {
                GameUtil.confirmChipsInTable();
                Helper.sound.play.enter();
                self.dealFlag = 1;
                self.showBetStatus('betting 성공', 1);
                self.showBetConfirmMessage("배팅이 완료되었습니다. 배팅금액을 변경하시려면 '취소'후 다시 배팅을 해주세요",1);
              } else {
                self.lockChips(resp.message);
                setTimeout(() => {
                  self.handleSelectedRoomData(self.oldGameData);
                }, 2000);
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
  
        cancelBet: function () {
          const self = PlayerGame;
          let params = {};
          params['table_name'] = self.oldGameData.table_name;
          params['_token'] = $('#_token').val();
  
          $.ajax({
            url: baseUrl + '/bet/cancel_bet/',
            method: 'POST',
            data: params,
            beforeSend: function () {},
            success: function (resp) {
              // console.log('last_confirm', resp);
              if (resp.success) {
                self.resetTables();
                self.dealFlag = 0;
                Helper.sound.play.cancel();
                window.localStorage.removeItem('gameInfo');
              } else {
                self.lockChips(resp.message);
                setTimeout(() => {
                  self.handleSelectedRoomData(self.oldGameData);
                }, 2000);
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
  
        gameWinningResultRealTime: function (resp) {
          const self = PlayerGame;
  
          if (resp.data.status == 'WIN' || resp.data.status == 'TIE' || resp.data.status == 'VOID') {
            if (!self.muteFlag)
              Helper.sound.play.win();
  
            if (resp.data.status == 'WIN') {
  //            $('#winning-amount').find('b').html(WIN);
              $('#winning-amount').html(`${Helper.format.number.withComma(resp.data.winning_amount)}`);
              self.lockChips(WIN + ' ' + Helper.format.number.withComma(resp.data.winning_amount),true);
            } else if (resp.data.status == 'VOID') {
  //            $('#winning-amount').find('b').html(CANCEL_BET);
              $('#winning-amount').html(`${Helper.format.number.withComma(resp.data.winning_amount)}`);
              self.lockChips(CANCEL_BET,true);
            } else {
  //            $('#winning-amount').find('b').html(TIE);
              $('#winning-amount').html(Helper.format.number.withComma(resp.data.winning_amount));
              self.lockChips(TIE + ' ' + Helper.format.number.withComma(resp.data.winning_amount),true);
            }
  
            self.origBal = resp.data.credits;
          } else {
            if (!self.muteFlag) Helper.sound.play.lose();
  
  //          $('#winning-amount').find('b').html(LOSE);
            $('#winning-amount').html(`${Helper.format.number.withComma(resp.data.winning_amount)}`);
            self.lockChips(LOSE + ' ' + Helper.format.number.withComma(resp.data.winning_amount));
  
            self.origBal = resp.data.credits;
          }
  
          self.countUp(resp.data.credits);
  
          if (resp.data.message) {
            Helper.confirm.ok(WARNING, resp.data.message);
          }
  
          setTimeout(function () {
            if ( self.table_status == 1 || self.table_status == '1')
              return;
            self.dealFlag = 0;
            self.callFlag = 0;
              // console.log('settimeout reset');
            self.resetTables();
          }, 5000);
  
          $('#game-referrence-no').val(resp.data.rand);
        },
  
        gameBetHistory: function (page) {
          const self = PlayerGame;
  
          if (typeof page == 'undefined') {
            page = 1;
          }
  
          const resp = {"success": true, "data": [{"id": 2471, "game_log": {"id": 8140413, "date_created": "2021-07-21T04:54:43.457270+09:00", "date_closed": null, "date_finished": null, "table_no": 1, "shoe_no": 617, "game_no": 38, "card_player": null, "card_banker": null, "game_result": null, "table_status": "1", "calc_status": "PENDING", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "table_name": "OK-1"}, "account": {"id": 2, "user": {"id": 2, "email": "chungmugong@gmail.com", "username": "chungmugong", "is_superuser": true, "is_staff": true, "last_login": "2022-03-11T16:12:03.497562+09:00", "date_joined": "2019-09-30T15:56:09.966807+09:00", "first_name": "", "last_name": ""}, "nick_name": "chungmugong \ubcf8\uc0ac", "level_no": 1, "total_bet_amount": 1200000.0, "credit": 72465000.0, "point": 0.0, "bet_result_amount": 165000.0, "phone_number": null, "status": "OK", "register_ip": null, "register_domain": null, "last_bet_date": null, "login_ip": "50.7.159.34", "game_type": null, "game_table_no": null, "game_token": null, "visit_count": 0, "bank_name": null, "bank_account_name": null, "bank_account_no": null, "bank_request_spiel": null, "referral_code": null, "my_referral_code": "bonsa", "is_vip": false, "is_online": false, "cashout_pin": null, "total_cash_in_count": 0, "total_cash_out_count": 0, "total_cash_in_amount": 100000000.0, "total_cash_out_amount": 0.0, "note": null, "socket_addr": "", "room_entered": "", "room_current_bet": null, "room_bet_bead_type": null, "room_status": null, "created": "2019-09-30T15:56:10.133308+09:00", "is_admin": false, "is_first": true, "is_second": false, "is_third": false, "is_fourth": false, "is_player": false}, "date_betting": "2022-02-11T23:01:48.329887+09:00", "p_amount": 0, "b_amount": 0, "t_amount": 0, "pp_amount": 0, "bp_amount": 0, "bet_amount": 0, "winning_amount": 0, "result_amount": 0, "before_amount": 0.0, "after_amount": 0.0, "device": null, "ip_address": "50.7.159.34", "bet_status": "CANCEL", "calc_status": "PENDING"}, {"id": 2388, "game_log": {"id": 7886492, "date_created": "2021-07-18T00:52:50.926110+09:00", "date_closed": "2021-07-18T00:53:08.456410+09:00", "date_finished": "2021-07-18T00:53:19.569572+09:00", "table_no": 6, "shoe_no": 15849, "game_no": 37, "card_player": "H1,S3,CQ", "card_banker": "SK,S6", "game_result": "a", "table_status": "4", "calc_status": "PENDING", "game_provider": {"id": 1, "game_name": "Evolution", "game_kind": "Evolution", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "table_name": "EV-6"}, "account": {"id": 2, "user": {"id": 2, "email": "chungmugong@gmail.com", "username": "chungmugong", "is_superuser": true, "is_staff": true, "last_login": "2022-03-11T16:12:03.497562+09:00", "date_joined": "2019-09-30T15:56:09.966807+09:00", "first_name": "", "last_name": ""}, "nick_name": "chungmugong \ubcf8\uc0ac", "level_no": 1, "total_bet_amount": 1200000.0, "credit": 72465000.0, "point": 0.0, "bet_result_amount": 165000.0, "phone_number": null, "status": "OK", "register_ip": null, "register_domain": null, "last_bet_date": null, "login_ip": "50.7.159.34", "game_type": null, "game_table_no": null, "game_token": null, "visit_count": 0, "bank_name": null, "bank_account_name": null, "bank_account_no": null, "bank_request_spiel": null, "referral_code": null, "my_referral_code": "bonsa", "is_vip": false, "is_online": false, "cashout_pin": null, "total_cash_in_count": 0, "total_cash_out_count": 0, "total_cash_in_amount": 100000000.0, "total_cash_out_amount": 0.0, "note": null, "socket_addr": "", "room_entered": "", "room_current_bet": null, "room_bet_bead_type": null, "room_status": null, "created": "2019-09-30T15:56:10.133308+09:00", "is_admin": false, "is_first": true, "is_second": false, "is_third": false, "is_fourth": false, "is_player": false}, "date_betting": "2021-07-18T00:52:54.583614+09:00", "p_amount": 0, "b_amount": 100000, "t_amount": 0, "pp_amount": 0, "bp_amount": 0, "bet_amount": 100000, "winning_amount": 95000, "result_amount": 0, "before_amount": 75720000.0, "after_amount": 75815000.0, "device": null, "ip_address": "220.127.238.105", "bet_status": "WIN", "calc_status": "DONE"}, {"id": 2387, "game_log": {"id": 7886465, "date_created": "2021-07-18T00:52:23.720714+09:00", "date_closed": "2021-07-18T00:52:41.249794+09:00", "date_finished": "2021-07-18T00:52:47.369729+09:00", "table_no": 6, "shoe_no": 15849, "game_no": 36, "card_player": "S2,D7,00", "card_banker": "SQ,D3", "game_result": "e", "table_status": "4", "calc_status": "PENDING", "game_provider": {"id": 1, "game_name": "Evolution", "game_kind": "Evolution", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "table_name": "EV-6"}, "account": {"id": 2, "user": {"id": 2, "email": "chungmugong@gmail.com", "username": "chungmugong", "is_superuser": true, "is_staff": true, "last_login": "2022-03-11T16:12:03.497562+09:00", "date_joined": "2019-09-30T15:56:09.966807+09:00", "first_name": "", "last_name": ""}, "nick_name": "chungmugong \ubcf8\uc0ac", "level_no": 1, "total_bet_amount": 1200000.0, "credit": 72465000.0, "point": 0.0, "bet_result_amount": 165000.0, "phone_number": null, "status": "OK", "register_ip": null, "register_domain": null, "last_bet_date": null, "login_ip": "50.7.159.34", "game_type": null, "game_table_no": null, "game_token": null, "visit_count": 0, "bank_name": null, "bank_account_name": null, "bank_account_no": null, "bank_request_spiel": null, "referral_code": null, "my_referral_code": "bonsa", "is_vip": false, "is_online": false, "cashout_pin": null, "total_cash_in_count": 0, "total_cash_out_count": 0, "total_cash_in_amount": 100000000.0, "total_cash_out_amount": 0.0, "note": null, "socket_addr": "", "room_entered": "", "room_current_bet": null, "room_bet_bead_type": null, "room_status": null, "created": "2019-09-30T15:56:10.133308+09:00", "is_admin": false, "is_first": true, "is_second": false, "is_third": false, "is_fourth": false, "is_player": false}, "date_betting": "2021-07-18T00:52:33.853494+09:00", "p_amount": 0, "b_amount": 100000, "t_amount": 0, "pp_amount": 0, "bp_amount": 0, "bet_amount": 100000, "winning_amount": -100000, "result_amount": 0, "before_amount": 75820000.0, "after_amount": 75720000.0, "device": null, "ip_address": "220.127.238.105", "bet_status": "LOSE", "calc_status": "DONE"}, {"id": 2386, "game_log": {"id": 7886429, "date_created": "2021-07-18T00:51:52.638617+09:00", "date_closed": "2021-07-18T00:52:10.169330+09:00", "date_finished": "2021-07-18T00:52:20.160836+09:00", "table_no": 6, "shoe_no": 15849, "game_no": 35, "card_player": "D9,S5,H1", "card_banker": "H7,H5,H4", "game_result": "a", "table_status": "4", "calc_status": "PENDING", "game_provider": {"id": 1, "game_name": "Evolution", "game_kind": "Evolution", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "table_name": "EV-6"}, "account": {"id": 2, "user": {"id": 2, "email": "chungmugong@gmail.com", "username": "chungmugong", "is_superuser": true, "is_staff": true, "last_login": "2022-03-11T16:12:03.497562+09:00", "date_joined": "2019-09-30T15:56:09.966807+09:00", "first_name": "", "last_name": ""}, "nick_name": "chungmugong \ubcf8\uc0ac", "level_no": 1, "total_bet_amount": 1200000.0, "credit": 72465000.0, "point": 0.0, "bet_result_amount": 165000.0, "phone_number": null, "status": "OK", "register_ip": null, "register_domain": null, "last_bet_date": null, "login_ip": "50.7.159.34", "game_type": null, "game_table_no": null, "game_token": null, "visit_count": 0, "bank_name": null, "bank_account_name": null, "bank_account_no": null, "bank_request_spiel": null, "referral_code": null, "my_referral_code": "bonsa", "is_vip": false, "is_online": false, "cashout_pin": null, "total_cash_in_count": 0, "total_cash_out_count": 0, "total_cash_in_amount": 100000000.0, "total_cash_out_amount": 0.0, "note": null, "socket_addr": "", "room_entered": "", "room_current_bet": null, "room_bet_bead_type": null, "room_status": null, "created": "2019-09-30T15:56:10.133308+09:00", "is_admin": false, "is_first": true, "is_second": false, "is_third": false, "is_fourth": false, "is_player": false}, "date_betting": "2021-07-18T00:51:57.260131+09:00", "p_amount": 0, "b_amount": 100000, "t_amount": 0, "pp_amount": 0, "bp_amount": 0, "bet_amount": 100000, "winning_amount": 95000, "result_amount": 0, "before_amount": 75725000.0, "after_amount": 75820000.0, "device": null, "ip_address": "220.127.238.105", "bet_status": "WIN", "calc_status": "DONE"}, {"id": 2385, "game_log": {"id": 7886398, "date_created": "2021-07-18T00:51:21.777569+09:00", "date_closed": "2021-07-18T00:51:39.323026+09:00", "date_finished": "2021-07-18T00:51:49.330799+09:00", "table_no": 6, "shoe_no": 15849, "game_no": 34, "card_player": "CJ,D2,SJ", "card_banker": "S3,SQ,H0", "game_result": "a", "table_status": "4", "calc_status": "PENDING", "game_provider": {"id": 1, "game_name": "Evolution", "game_kind": "Evolution", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "table_name": "EV-6"}, "account": {"id": 2, "user": {"id": 2, "email": "chungmugong@gmail.com", "username": "chungmugong", "is_superuser": true, "is_staff": true, "last_login": "2022-03-11T16:12:03.497562+09:00", "date_joined": "2019-09-30T15:56:09.966807+09:00", "first_name": "", "last_name": ""}, "nick_name": "chungmugong \ubcf8\uc0ac", "level_no": 1, "total_bet_amount": 1200000.0, "credit": 72465000.0, "point": 0.0, "bet_result_amount": 165000.0, "phone_number": null, "status": "OK", "register_ip": null, "register_domain": null, "last_bet_date": null, "login_ip": "50.7.159.34", "game_type": null, "game_table_no": null, "game_token": null, "visit_count": 0, "bank_name": null, "bank_account_name": null, "bank_account_no": null, "bank_request_spiel": null, "referral_code": null, "my_referral_code": "bonsa", "is_vip": false, "is_online": false, "cashout_pin": null, "total_cash_in_count": 0, "total_cash_out_count": 0, "total_cash_in_amount": 100000000.0, "total_cash_out_amount": 0.0, "note": null, "socket_addr": "", "room_entered": "", "room_current_bet": null, "room_bet_bead_type": null, "room_status": null, "created": "2019-09-30T15:56:10.133308+09:00", "is_admin": false, "is_first": true, "is_second": false, "is_third": false, "is_fourth": false, "is_player": false}, "date_betting": "2021-07-18T00:51:26.438554+09:00", "p_amount": 0, "b_amount": 100000, "t_amount": 0, "pp_amount": 0, "bp_amount": 0, "bet_amount": 100000, "winning_amount": 95000, "result_amount": 0, "before_amount": 75630000.0, "after_amount": 75725000.0, "device": null, "ip_address": "220.127.238.105", "bet_status": "WIN", "calc_status": "DONE"}, {"id": 2384, "game_log": {"id": 7886367, "date_created": "2021-07-18T00:50:49.949487+09:00", "date_closed": "2021-07-18T00:51:07.487012+09:00", "date_finished": "2021-07-18T00:51:18.241067+09:00", "table_no": 6, "shoe_no": 15849, "game_no": 33, "card_player": "CK,S0,S7", "card_banker": "H1,S4,C7", "game_result": "e", "table_status": "4", "calc_status": "PENDING", "game_provider": {"id": 1, "game_name": "Evolution", "game_kind": "Evolution", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "table_name": "EV-6"}, "account": {"id": 2, "user": {"id": 2, "email": "chungmugong@gmail.com", "username": "chungmugong", "is_superuser": true, "is_staff": true, "last_login": "2022-03-11T16:12:03.497562+09:00", "date_joined": "2019-09-30T15:56:09.966807+09:00", "first_name": "", "last_name": ""}, "nick_name": "chungmugong \ubcf8\uc0ac", "level_no": 1, "total_bet_amount": 1200000.0, "credit": 72465000.0, "point": 0.0, "bet_result_amount": 165000.0, "phone_number": null, "status": "OK", "register_ip": null, "register_domain": null, "last_bet_date": null, "login_ip": "50.7.159.34", "game_type": null, "game_table_no": null, "game_token": null, "visit_count": 0, "bank_name": null, "bank_account_name": null, "bank_account_no": null, "bank_request_spiel": null, "referral_code": null, "my_referral_code": "bonsa", "is_vip": false, "is_online": false, "cashout_pin": null, "total_cash_in_count": 0, "total_cash_out_count": 0, "total_cash_in_amount": 100000000.0, "total_cash_out_amount": 0.0, "note": null, "socket_addr": "", "room_entered": "", "room_current_bet": null, "room_bet_bead_type": null, "room_status": null, "created": "2019-09-30T15:56:10.133308+09:00", "is_admin": false, "is_first": true, "is_second": false, "is_third": false, "is_fourth": false, "is_player": false}, "date_betting": "2021-07-18T00:50:56.628977+09:00", "p_amount": 0, "b_amount": 100000, "t_amount": 0, "pp_amount": 0, "bp_amount": 0, "bet_amount": 100000, "winning_amount": -100000, "result_amount": 0, "before_amount": 75730000.0, "after_amount": 75630000.0, "device": null, "ip_address": "220.127.238.105", "bet_status": "LOSE", "calc_status": "DONE"}, {"id": 2383, "game_log": {"id": 7886335, "date_created": "2021-07-18T00:50:22.321126+09:00", "date_closed": "2021-07-18T00:50:39.852904+09:00", "date_finished": "2021-07-18T00:50:46.391915+09:00", "table_no": 6, "shoe_no": 15849, "game_no": 32, "card_player": "D9,D0,00", "card_banker": "S9,S4", "game_result": "e", "table_status": "4", "calc_status": "PENDING", "game_provider": {"id": 1, "game_name": "Evolution", "game_kind": "Evolution", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "table_name": "EV-6"}, "account": {"id": 2, "user": {"id": 2, "email": "chungmugong@gmail.com", "username": "chungmugong", "is_superuser": true, "is_staff": true, "last_login": "2022-03-11T16:12:03.497562+09:00", "date_joined": "2019-09-30T15:56:09.966807+09:00", "first_name": "", "last_name": ""}, "nick_name": "chungmugong \ubcf8\uc0ac", "level_no": 1, "total_bet_amount": 1200000.0, "credit": 72465000.0, "point": 0.0, "bet_result_amount": 165000.0, "phone_number": null, "status": "OK", "register_ip": null, "register_domain": null, "last_bet_date": null, "login_ip": "50.7.159.34", "game_type": null, "game_table_no": null, "game_token": null, "visit_count": 0, "bank_name": null, "bank_account_name": null, "bank_account_no": null, "bank_request_spiel": null, "referral_code": null, "my_referral_code": "bonsa", "is_vip": false, "is_online": false, "cashout_pin": null, "total_cash_in_count": 0, "total_cash_out_count": 0, "total_cash_in_amount": 100000000.0, "total_cash_out_amount": 0.0, "note": null, "socket_addr": "", "room_entered": "", "room_current_bet": null, "room_bet_bead_type": null, "room_status": null, "created": "2019-09-30T15:56:10.133308+09:00", "is_admin": false, "is_first": true, "is_second": false, "is_third": false, "is_fourth": false, "is_player": false}, "date_betting": "2021-07-18T00:50:25.646131+09:00", "p_amount": 0, "b_amount": 100000, "t_amount": 0, "pp_amount": 0, "bp_amount": 0, "bet_amount": 100000, "winning_amount": -100000, "result_amount": 0, "before_amount": 75830000.0, "after_amount": 75730000.0, "device": null, "ip_address": "220.127.238.105", "bet_status": "LOSE", "calc_status": "DONE"}, {"id": 2382, "game_log": {"id": 7886198, "date_created": "2021-07-18T00:48:06.816807+09:00", "date_closed": "2021-07-18T00:49:09.069785+09:00", "date_finished": "2021-07-18T00:49:17.490362+09:00", "table_no": 1, "shoe_no": 531, "game_no": 24, "card_player": "SK,CK,00", "card_banker": "S8,CK", "game_result": "b", "table_status": "4", "calc_status": "PENDING", "game_provider": {"id": 10, "game_name": "Resort World Manilla 2", "game_kind": "ResortWorldManilla2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "table_name": "RW-1"}, "account": {"id": 2, "user": {"id": 2, "email": "chungmugong@gmail.com", "username": "chungmugong", "is_superuser": true, "is_staff": true, "last_login": "2022-03-11T16:12:03.497562+09:00", "date_joined": "2019-09-30T15:56:09.966807+09:00", "first_name": "", "last_name": ""}, "nick_name": "chungmugong \ubcf8\uc0ac", "level_no": 1, "total_bet_amount": 1200000.0, "credit": 72465000.0, "point": 0.0, "bet_result_amount": 165000.0, "phone_number": null, "status": "OK", "register_ip": null, "register_domain": null, "last_bet_date": null, "login_ip": "50.7.159.34", "game_type": null, "game_table_no": null, "game_token": null, "visit_count": 0, "bank_name": null, "bank_account_name": null, "bank_account_no": null, "bank_request_spiel": null, "referral_code": null, "my_referral_code": "bonsa", "is_vip": false, "is_online": false, "cashout_pin": null, "total_cash_in_count": 0, "total_cash_out_count": 0, "total_cash_in_amount": 100000000.0, "total_cash_out_amount": 0.0, "note": null, "socket_addr": "", "room_entered": "", "room_current_bet": null, "room_bet_bead_type": null, "room_status": null, "created": "2019-09-30T15:56:10.133308+09:00", "is_admin": false, "is_first": true, "is_second": false, "is_third": false, "is_fourth": false, "is_player": false}, "date_betting": "2021-07-18T00:48:12.500449+09:00", "p_amount": 0, "b_amount": 100000, "t_amount": 0, "pp_amount": 0, "bp_amount": 0, "bet_amount": 100000, "winning_amount": 95000, "result_amount": 0, "before_amount": 75735000.0, "after_amount": 75830000.0, "device": null, "ip_address": "220.127.238.105", "bet_status": "WIN", "calc_status": "DONE"}, {"id": 2381, "game_log": {"id": 7886132, "date_created": "2021-07-18T00:46:57.526121+09:00", "date_closed": "2021-07-18T00:47:48.829143+09:00", "date_finished": "2021-07-18T00:48:03.822362+09:00", "table_no": 1, "shoe_no": 531, "game_no": 23, "card_player": "C7,C8,H1", "card_banker": "H1,S4", "game_result": "e", "table_status": "4", "calc_status": "PENDING", "game_provider": {"id": 10, "game_name": "Resort World Manilla 2", "game_kind": "ResortWorldManilla2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "table_name": "RW-1"}, "account": {"id": 2, "user": {"id": 2, "email": "chungmugong@gmail.com", "username": "chungmugong", "is_superuser": true, "is_staff": true, "last_login": "2022-03-11T16:12:03.497562+09:00", "date_joined": "2019-09-30T15:56:09.966807+09:00", "first_name": "", "last_name": ""}, "nick_name": "chungmugong \ubcf8\uc0ac", "level_no": 1, "total_bet_amount": 1200000.0, "credit": 72465000.0, "point": 0.0, "bet_result_amount": 165000.0, "phone_number": null, "status": "OK", "register_ip": null, "register_domain": null, "last_bet_date": null, "login_ip": "50.7.159.34", "game_type": null, "game_table_no": null, "game_token": null, "visit_count": 0, "bank_name": null, "bank_account_name": null, "bank_account_no": null, "bank_request_spiel": null, "referral_code": null, "my_referral_code": "bonsa", "is_vip": false, "is_online": false, "cashout_pin": null, "total_cash_in_count": 0, "total_cash_out_count": 0, "total_cash_in_amount": 100000000.0, "total_cash_out_amount": 0.0, "note": null, "socket_addr": "", "room_entered": "", "room_current_bet": null, "room_bet_bead_type": null, "room_status": null, "created": "2019-09-30T15:56:10.133308+09:00", "is_admin": false, "is_first": true, "is_second": false, "is_third": false, "is_fourth": false, "is_player": false}, "date_betting": "2021-07-18T00:47:01.735219+09:00", "p_amount": 0, "b_amount": 100000, "t_amount": 0, "pp_amount": 0, "bp_amount": 0, "bet_amount": 100000, "winning_amount": -100000, "result_amount": 0, "before_amount": 75835000.0, "after_amount": 75735000.0, "device": null, "ip_address": "220.127.238.105", "bet_status": "LOSE", "calc_status": "DONE"}, {"id": 2380, "game_log": {"id": 7886059, "date_created": "2021-07-18T00:45:48.659213+09:00", "date_closed": "2021-07-18T00:46:45.502772+09:00", "date_finished": "2021-07-18T00:46:54.540141+09:00", "table_no": 1, "shoe_no": 531, "game_no": 22, "card_player": "D0,H6,00", "card_banker": "C3,D1,H3", "game_result": "a", "table_status": "4", "calc_status": "PENDING", "game_provider": {"id": 10, "game_name": "Resort World Manilla 2", "game_kind": "ResortWorldManilla2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "table_name": "RW-1"}, "account": {"id": 2, "user": {"id": 2, "email": "chungmugong@gmail.com", "username": "chungmugong", "is_superuser": true, "is_staff": true, "last_login": "2022-03-11T16:12:03.497562+09:00", "date_joined": "2019-09-30T15:56:09.966807+09:00", "first_name": "", "last_name": ""}, "nick_name": "chungmugong \ubcf8\uc0ac", "level_no": 1, "total_bet_amount": 1200000.0, "credit": 72465000.0, "point": 0.0, "bet_result_amount": 165000.0, "phone_number": null, "status": "OK", "register_ip": null, "register_domain": null, "last_bet_date": null, "login_ip": "50.7.159.34", "game_type": null, "game_table_no": null, "game_token": null, "visit_count": 0, "bank_name": null, "bank_account_name": null, "bank_account_no": null, "bank_request_spiel": null, "referral_code": null, "my_referral_code": "bonsa", "is_vip": false, "is_online": false, "cashout_pin": null, "total_cash_in_count": 0, "total_cash_out_count": 0, "total_cash_in_amount": 100000000.0, "total_cash_out_amount": 0.0, "note": null, "socket_addr": "", "room_entered": "", "room_current_bet": null, "room_bet_bead_type": null, "room_status": null, "created": "2019-09-30T15:56:10.133308+09:00", "is_admin": false, "is_first": true, "is_second": false, "is_third": false, "is_fourth": false, "is_player": false}, "date_betting": "2021-07-18T00:45:50.834139+09:00", "p_amount": 0, "b_amount": 100000, "t_amount": 0, "pp_amount": 0, "bp_amount": 0, "bet_amount": 100000, "winning_amount": 95000, "result_amount": 0, "before_amount": 75740000.0, "after_amount": 75835000.0, "device": null, "ip_address": "220.127.238.105", "bet_status": "WIN", "calc_status": "DONE"}], "paginator": "\n\n  <tr align=\"center\" style=\"margin:3px\" class=\"pagination\">\n    \n      <td width=\"30\" class=\"disabled\"><img src=\"/static/css/jin/images/notice_icon_1.gif\" width=\"26\" height=\"22\" disabled></td>\n      <td width=\"30\" class=\"disabled\"><img src=\"/static/css/jin/images/notice_icon_2.gif\" width=\"26\" height=\"22\" disabled></td>\n    \n    \n      \n        <td width=\"30\" class=\"active\"><span>1 <span class=\"sr-only\">(current)</span></span></td>\n      \n    \n      \n        <td width=\"30\"><a href=\"#\" class=\"page-button-2 pages\">2</a></td>\n      \n    \n    \n      <td width=\"30\"><a href=\"#\" class=\"page-button-2 pages\"><img src=\"/static/css/jin/images/notice_icon_3.gif\" width=\"26\" height=\"22\"></a></td>\n      <td width=\"30\"><a href=\"#\" class=\"page-button-2 pages\"><img src=\"/static/css/jin/images/notice_icon_4.gif\" width=\"26\" height=\"22\"></a></td>\n    \n  </tr>\n"}
  
          // $.ajax({
          //   url: baseUrl + '/bet/bet_history/',
          //   method: 'POST',
          //   data: {
          //     '_token': $('#_token').val(),
          //     'page': page,
          //     'limit': 10
          //   },
          //   beforeSend: function () {
          //   },
          //   success: function (resp) {
              if (resp.success) {
                RenderUtil.renderBetHistory(resp.data);
                RenderUtil.renderBetHistoryTablePagination(resp.paginator);
              }
          //   },
          //   error: function (resp) {},
          //   complete: function () {}
          // });
        },
      }
    }
};
const GameUtil = {
    flvPlayer() {
      const self = PlayerGame;
    //   if (flvjs.isSupported()) {
    //     var videoElement = document.getElementById('movie_pnl');
    //     var flvPlayer = flvjs.createPlayer({
    //       type: 'flv',
    //       // isLive: true,
    //       enableStashBuffer: true,
    //       hasVideo: false,
    //       url: self.video_url,
    //     });
    //     flvPlayer.attachMediaElement(videoElement);
    //     flvPlayer.load();
    //     flvPlayer.play();
    //   } else {
    //     $('.not-supported').css('display', 'block');
    //   }
    },
  
    renderPlayer: function (stream_link, stream_name) {
      if (this.gameProviderVelocity) {
        // Do Nothing
      } else {
        $('#player embed, #player noembed').remove();
  
        var elemHtml = `<embed type="application/x-shockwave-flash" 
            src="${baseUrl}/plugins/bower_components/f4player-master/player.swf?v1.3.5"
            width="860" height="480" id="f" name="f"
            flashvars="skin=${baseUrl}/plugins/bower_components/f4player-master/skins/mySkin.swf&stream=${stream_link}&streamname=${stream_name}&autoplay=1"
            allowScriptAccess="always"
            allowfullscreen="true"
            bgcolor="#000000"/>
            <noembed>
            You need Adobe Flash Player to watch this video. <br>
            <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>
            <a href="http://gokercebeci.com/dev/f4player" title="flv player">flv player</a>
            </noembed>`;
  
        $('#player').append(elemHtml);
      }
    },
  
    initPlayer: function (url, table_name) {
      const self = PlayerGame;
      if (self.osPlatform.toLowerCase() == 'androidos') {
        if (self.gameProviderId == 1) {
          var table_name = $('#room-name').html().split('-')[1];
        //   if (flvjs.isSupported()) {
        //     var videoElement = document.getElementById('movie_pnl');
        //     var flvPlayer = flvjs.createPlayer({
        //       type: 'flv',
        //       isLive: true,
        //       hasVideo: true,
        //       url: self.gameHashId + table_name + 'table1'
        //     });
        //     flvPlayer.attachMediaElement(videoElement);
        //     flvPlayer.load();
        //     flvPlayer.play();
        //   } else {
        //     $('.not-supported').css('display', 'block');
        //   }
        }
      } else {
        $('#scoreboard-section').css('margin-top', '3.5%');
        $('#user-details').css('margin-top', '-5px');
  
        if (self.gameProviderId == 3) {
          var url = 'http://ibd080.com/www_html5/videoMpeg.html?url=' + self.gameVideoUrl;
          self.gameVideoUrl = url;
          $('#stream_canvas').hide();
          $('#stream_holder').attr('src', url);
        } else {
          $('#user-details').css('margin-top', '-1%');
          $('.game-button').css('margin-top', '-2%');
  
          if (self.gameProviderTableId > 95) {
            $('.movie_pnl').css('margin-top', '-12.5%');
          } else {
            $('.movie_pnl').css('margin-top', '-1.5%');
          }
  
          $('#_stream').val(url);
          document.getElementById('frame_holder').submit();
        }
      }
    },
  
    initIframePlayer: function () {
      const self = PlayerGame;
      let video_src = '';
      video_src = `http://108.61.161.122/render_video?video_url=${self.video_url}`;
      $('#stream_canvas').hide();
      $('#stream_holder').attr('src', video_src);
    },
  
    initRtmpPlayer: function () {
      const self = PlayerGame;
      let isHandled = false;
      setTimeout(function () {
        if (self.gameVideoUrl && !isHandled) {
          isHandled = true;
          const value = `path=${self.gameVideoUrl}`;
          $('#rtmp_param-flashbars').attr('value', value);
          $('#rtmp_embed-flashbars').attr('flashvars', value);
        } else {
          self.initRtmpPlayer();
        }
      }, 500);
    },
  
    initSoundTrack: function () {
      const self = PlayerGame;
      var soundId = Math.floor((Math.random() * 9) + 1);
      switch (soundId) {
        case 1 :
          Helper.sound.play.bgm01();
          break;
        case 2 :
          Helper.sound.play.bgm02();
          break;
        case 3 :
          Helper.sound.play.bgm03();
          break;
        case 4 :
          Helper.sound.play.bgm04();
          break;
        case 5 :
          Helper.sound.play.bgm05();
          break;
        case 6 :
          Helper.sound.play.bgm06();
          break;
        case 7 :
          Helper.sound.play.bgm07();
          break;
        case 8 :
          Helper.sound.play.bgm08();
          break;
        case 9 :
          Helper.sound.play.bgm09();
          break;
      }
  
      if (!self.muteFlag) {
        $(".sound-player").prop("volume", 0.3);
        setInterval(function () {
          var soundId = Math.floor((Math.random() * 9) + 1);
          switch (soundId) {
            case 1 :
              Helper.sound.play.bgm01();
              break;
            case 2 :
              Helper.sound.play.bgm02();
              break;
            case 3 :
              Helper.sound.play.bgm03();
              break;
            case 4 :
              Helper.sound.play.bgm04();
              break;
            case 5 :
              Helper.sound.play.bgm05();
              break;
            case 6 :
              Helper.sound.play.bgm06();
              break;
            case 7 :
              Helper.sound.play.bgm07();
              break;
            case 8 :
              Helper.sound.play.bgm08();
              break;
            case 9 :
              Helper.sound.play.bgm09();
              break;
          }
  
          $(".sound-player").prop("volume", 0.3);
        }, 200000);
      }
    },
  
    validateBetTableLimit: function (playerAmount, bankerAmount, playerPairAmount, bankerPairAmount, tieAmount) {
      const self = PlayerGame;
      let result = true;
  
      let tableMin = parseInt($('#minimum-bet').val());
      let tableMax = parseInt($('#maximum-bet').val());
  
      let pairMin = parseInt($('#player_pair_min').val());
      let pairMax = parseInt($('#player_pair_max').val());
      let tieMin = parseInt($('#tie_min').val());
      let tieMax = parseInt($('#tie_max').val());
  
      if (playerAmount) {
        result = true;
        if (playerAmount < tableMin) {
          self.showTableError(PLAYER_MIN + ' ' + Helper.format.number.withComma(tableMin));
          result = false;
        }
  
        if (playerAmount > tableMax) {
          self.showTableError(PLAYER_MAX + ' ' + Helper.format.number.withComma(tableMax));
          result = false;
        }
  
        if (!result) {
          self.playerBetAmount = self.playerBetAmount - self.lastPlayerBetAmount;
          $('.x_bet-player').trigger('click');
        }
      }
  
      if (bankerAmount) {
        result = true;
        if (bankerAmount < tableMin) {
          self.showTableError(BANKER_MIN + ' ' + Helper.format.number.withComma(tableMin));
          result = false;
        }
  
        if (bankerAmount > tableMax) {
          self.showTableError(BANKER_MAX + ' ' + Helper.format.number.withComma(tableMax));
          result = false;
        }
  
        if (!result) {
          self.bankerBetAmount = self.bankerBetAmount - self.lastBankerBetAmount;
          $('.x_bet-banker').trigger('click');
        }
      }
  
      if (playerPairAmount) {
        result = true;
        if (playerPairAmount < pairMin) {
          self.showTableError(PLAYER_PAIR_MIN + ' ' + Helper.format.number.withComma(pairMin));
          result = false;
        }
  
        if (playerPairAmount > pairMax) {
          self.showTableError(PLAYER_PAIR_MAX + ' ' + Helper.format.number.withComma(pairMax));
          result = false;
        }
  
        if (!result) {
          self.playerPairBetAmount = self.playerPairBetAmount - self.lastPlayerPairBetAmount;
          $('.x_bet-player-pair').trigger('click');
        }
      }
  
      if (bankerPairAmount) {
        result = true;
        if (bankerPairAmount < pairMin) {
          self.showTableError(BANKER_PAIR_MIN + ' ' + Helper.format.number.withComma(pairMin));
          result = false;
        }
  
        if (bankerPairAmount > pairMax) {
          self.showTableError(BANKER_PAIR_MAX + ' ' + Helper.format.number.withComma(pairMax));
          result = false;
        }
  
        if (!result) {
          self.bankerPairBetAmount = self.bankerPairBetAmount - self.lastBankerPairBetAmount;
          $('.x_bet-banker-pair').trigger('click');
        }
      }
  
      if (tieAmount) {
        result = true;
        if (tieAmount < tieMin) {
          self.showTableError(TIE_MIN + ' ' + Helper.format.number.withComma(tieMin));
          result = false;
        }
  
        if (tieAmount > tieMax) {
          self.showTableError(TIE_MAX + ' ' + Helper.format.number.withComma(tieMax));
          result = false;
        }
  
        if (!result) {
          self.tieBetAmount = self.tieBetAmount - self.lastTieBetAmount;
          $('.x_bet-tie').trigger('click');
        }
      }
  
      return result;
    },
  
    validateWinner: function (bead_type) {
      const self = PlayerGame;
      let winningTable = null;
      let winningChips = 0;
      let winningBeads = '';
  
      if (bead_type == 'a') {
        winningTable = $('#bet-banker-table');
        winningChips = parseInt($('#bet-banker-amount').html());
        winningBeads = 'BANKER';
  
        if (!self.muteFlag) {
          Helper.sound.play.bankerWon();
        }
      } else if (bead_type == 'b') {
        winningTable = $('#bet-banker-table, #bet-player-pair-table');
        winningChips = parseInt($('#bet-banker-amount').html()) + parseInt($('#bet-player-pair-amount').html());
        winningBeads = 'BANKER,PLAYER PAIR';
  
        if (!self.muteFlag) {
          Helper.sound.play.bankerWon();
          setTimeout(function () {
            Helper.sound.play.playerPairWon();
          }, 2000);
        }
      } else if (bead_type == 'c') {
        winningTable = $('#bet-banker-table, #bet-banker-pair-table');
        winningChips = parseInt($('#bet-banker-amount').html()) + parseInt($('#bet-banker-pair-amount').html());
        winningBeads = 'BANKER,BANKER PAIR';
  
        if (!self.muteFlag) {
          Helper.sound.play.bankerWon();
          setTimeout(function () {
            Helper.sound.play.bankerPairWon();
          }, 2000);
        }
      } else if (bead_type == 'd') {
        winningTable = $('#bet-banker-table, #bet-banker-pair-table, #bet-player-pair-table');
        winningChips = parseInt($('#bet-banker-amount').html()) + parseInt($('#bet-banker-pair-amount').html()) + parseInt($('#bet-player-pair-amount'));
        winningBeads = 'BANKER,BANKER PAIR,PLAYER PAIR';
  
        if (!self.muteFlag) {
          Helper.sound.play.bankerWon();
          setTimeout(function () {
            Helper.sound.play.bankerPairWon();
          }, 2000);
          setTimeout(function () {
            Helper.sound.play.playerWon();
          }, 4000);
          setTimeout(function () {
            Helper.sound.play.playerPairWon();
          }, 4000);
        }
      } else if (bead_type == 'e') {
        winningTable = $('#bet-player-table');
        winningChips = parseInt($('#bet-player-amount').html());
        winningBeads = 'PLAYER';
  
        if (!self.muteFlag) {
          Helper.sound.play.playerWon();
        }
      } else if (bead_type == 'f') {
        winningTable = $('#bet-player-table, #bet-player-pair-table');
        winningChips = parseInt($('#bet-player-amount').html()) + $('#bet-player-pair-amount').html();
        winningBeads = 'PLAYER,PLAYER PAIR';
  
        if (!self.muteFlag) {
          Helper.sound.play.playerWon();
          setTimeout(function () {
            Helper.sound.play.playerPairWon();
          }, 2000);
        }
      } else if (bead_type == 'g') {
        winningTable = $('#bet-player-table, #bet-banker-pair-table');
        winningChips = parseInt($('#bet-player-amount').html()) + parseInt($('#bet-banker-pair-amount').html());
        winningBeads = 'PLAYER,BANKER PAIR';
  
        if (!self.muteFlag) {
          Helper.sound.play.playerWon();
          setTimeout(function () {
            Helper.sound.play.bankerPairWon();
          }, 2000);
        }
      } else if (bead_type == 'h') {
        winningTable = $('#bet-player-table, #bet-player-pair-table, #bet-banker-pair-table');
        winningChips = parseInt($('#bet-player-amount').html()) + parseInt($('#bet-player-pair-amount').html()) + parseInt($('#bet-banker-pair-amount').html());
        winningBeads = 'PLAYER,PLAYER PAIR,BANKER PAIR';
  
        if (!self.muteFlag) {
          Helper.sound.play.playerWon();
          setTimeout(function () {
            Helper.sound.play.playerPairWon();
          }, 2000);
          setTimeout(function () {
            Helper.sound.play.bankerWon();
          }, 4000);
          setTimeout(function () {
            Helper.sound.play.bankerPairWon();
          }, 6000);
        }
      } else if (bead_type == 'i') {
        winningTable = $('#bet-tie-table');
        winningChips = parseInt($('#bet-tie-amount').html());
        winningBeads = 'TIE';
  
        if (!self.muteFlag) {
          Helper.sound.play.tieWon();
        }
      } else if (bead_type == 'j') {
        winningTable = $('#bet-tie-table, #bet-player-pair-table');
        winningChips = parseInt($('#bet-tie-amount').html()) + parseInt($('#bet-player-amount').html());
        winningBeads = 'TIE,PLAYER PAIR';
  
        if (!self.muteFlag) {
          Helper.sound.play.tieWon();
          setTimeout(function () {
            Helper.sound.play.playerPairWon();
          }, 2000);
        }
      } else if (bead_type == 'k') {
        winningTable = $('#bet-tie-table, #bet-banker-pair-table');
        winningChips = parseInt($('#bet-tie-amount').html()) + parseInt($('#bet-banker-pair-amount').html());
        winningBeads = 'TIE,BANKER PAIR';
  
        if (!self.muteFlag) {
          Helper.sound.play.tieWon();
          setTimeout(function () {
            Helper.sound.play.bankerPairWon();
          }, 2000);
        }
      } else if (bead_type == 'l') {
        winningTable = $('#bet-tie-table, #bet-player-pair-table, #bet-banker-pair-table');
        winningChips = parseInt($('#bet-tie-amount').html()) + parseInt($('#bet-player-pair-amount').html()) + parseInt($('#bet-banker-pair-amount').html());
        winningBeads = 'TIE,PLAYER PAIR,BANKER PAIR';
  
        if (!self.muteFlag) {
          Helper.sound.play.tieWon();
          setTimeout(function () {
            Helper.sound.play.playerPairWon();
          }, 2000);
          setTimeout(function () {
            Helper.sound.play.bankerPairWon();
          }, 4000);
        }
      }
  
      if (winningTable) {
        for (let x = 1; x <= 5; x++) {
          $('.chips-' + x).removeClass('chip-unselected');
        }
  
        self.totalTableChipsAmount = winningChips;
  
        winningTable.addClass('animate-win');
        setTimeout(function () {
          winningTable.removeClass('animate-win');
        }, 3500);
      }
  
      if (self.dealFlag) {
        self.gameIdleCount = 0;
      } else {
        self.gameIdleCount++;
        self.nextEditionFlag = 0;
      }
  
      if (self.limitFlag) {
        self.limitFlag = 0;
        self.resetTables();
      }
  
      self.canPredict = 1;
  
      setTimeout(function () {
        $('#btn-bet-deal, #btn-bet-rebet, #btn-bet-clear').removeAttr('disabled');
      }, 5000);
    },
  
    calculateChipsInTable: function () {
      const self = PlayerGame;
  
      let b1 = 0;
      let b2 = 0;
      let b3 = 0;
      let b4 = 0;
      let b5 = 0;
      let b1_amount = 0;
      let b2_amount = 0;
      let b3_amount = 0;
      let b4_amount = 0;
      let b5_amount = 0;
      let b6_amount = 0;
  
      if (self.language == 'en') {
        b1_amount = 50;
        b2_amount = 100;
        b3_amount = 500;
        b4_amount = 1000;
        b5_amount = 10000;
        b6_amount = 50000;
      } else {
        b1_amount = 1000;
        b2_amount = 10000;
        b3_amount = 50000;
        b4_amount = 100000;
        b5_amount = 500000;
        b6_amount = 1000000;
      }
  
      $.each($('#bet-player li a'), function (key, element) {
        const player_bet_amount = $(element).attr('class').split(' ')[1];
        $(element).parent().fadeOut().remove();
  
        if (player_bet_amount == 'b-1') {
          b1 += b1_amount;
          self.lastPlayerBetAmount = b1_amount;
        } else if (player_bet_amount == 'b-2') {
          b1 += b2_amount;
          self.lastPlayerBetAmount = b2_amount;
        } else if (player_bet_amount == 'b-3') {
          b1 += b3_amount;
          self.lastPlayerBetAmount = b3_amount;
        } else if (player_bet_amount == 'b-4') {
          b1 += b4_amount;
          self.lastPlayerBetAmount = b4_amount;
        } else if (player_bet_amount == 'b-5') {
          b1 += b5_amount;
          self.lastPlayerBetAmount = b5_amount;
        } else if (player_bet_amount == 'b-6') {
          b1 += b6_amount;
          self.lastPlayerBetAmount = b6_amount;
        }
        self.playerFlag = 1;
      });
  
      $.each($('#bet-banker li a'), function (key, element) {
        const player_bet_amount = $(element).attr('class').split(' ')[1];
        $(element).parent().fadeOut().remove();
  
        if (player_bet_amount == 'b-1') {
          b2 += b1_amount;
          self.lastBankerBetAmount = b1_amount;
        } else if (player_bet_amount == 'b-2') {
          b2 += b2_amount;
          self.lastBankerBetAmount = b2_amount;
        } else if (player_bet_amount == 'b-3') {
          b2 += b3_amount;
          self.lastPlayerBetAmount = b3_amount;
        } else if (player_bet_amount == 'b-4') {
          b2 += b4_amount;
          self.lastBankerBetAmount = b4_amount;
        } else if (player_bet_amount == 'b-5') {
          b2 += b5_amount;
          self.lastBankerBetAmount = b5_amount;
        } else if (player_bet_amount == 'b-6') {
          b2 += b6_amount;
          self.lastBankerBetAmount = b6_amount;
        }
  
        self.bankerFlag = 1;
      });
  
      $.each($('#bet-tie li a'), function (key, element) {
        const player_bet_amount = $(element).attr('class').split(' ')[1];
        $(element).parent().fadeOut().remove();
  
        if (player_bet_amount == 'b-1') {
          b3 += b1_amount;
          self.lastTieBetAmount = b1_amount;
        } else if (player_bet_amount == 'b-2') {
          b3 += b2_amount;
          self.lastTieBetAmount = b2_amount;
        } else if (player_bet_amount == 'b-3') {
          b3 += b3_amount;
          self.lastTieBetAmount = b3_amount;
        } else if (player_bet_amount == 'b-4') {
          b3 += b4_amount;
          self.lastTieBetAmount = b4_amount;
        } else if (player_bet_amount == 'b-5') {
          b3 += b5_amount;
          self.lastTieBetAmount = b5_amount;
        } else if (player_bet_amount == 'b-6') {
          b3 += b6_amount;
          self.lastTieBetAmount = b6_amount;
        }
        self.tieFlag = 1;
      });
  
      $.each($('#bet-player-pair li a'), function (key, element) {
        const player_bet_amount = $(element).attr('class').split(' ')[1];
        $(element).parent().fadeOut().remove();
  
        if (player_bet_amount == 'b-1') {
          b4 += b1_amount;
          self.lastPlayerPairBetAmount = b1_amount;
        } else if (player_bet_amount == 'b-2') {
          b4 += b2_amount;
          self.lastPlayerPairBetAmount = b2_amount;
        } else if (player_bet_amount == 'b-3') {
          b4 += b3_amount;
          self.lastPlayerPairBetAmount = b3_amount;
        } else if (player_bet_amount == 'b-4') {
          b4 += b4_amount;
          self.lastPlayerPairBetAmount = b4_amount;
        } else if (player_bet_amount == 'b-5') {
          b4 += b5_amount;
          self.lastPlayerPairBetAmount = b5_amount;
        } else if (player_bet_amount == 'b-6') {
          b4 += b6_amount;
          self.lastPlayerPairBetAmount = b6_amount;
        }
        self.playerPairFlag = 1;
      });
  
      $.each($('#bet-banker-pair li a'), function (key, element) {
        const player_bet_amount = $(element).attr('class').split(' ')[1];
        $(element).parent().fadeOut().remove();
  
        if (player_bet_amount == 'b-1') {
          b5 += b1_amount;
          self.lastBankerPairBetAmount = b1_amount;
        } else if (player_bet_amount == 'b-2') {
          b5 += b2_amount;
          self.lastBankerPairBetAmount = b2_amount;
        } else if (player_bet_amount == 'b-3') {
          b5 += b3_amount;
          self.lastBankerPairBetAmount = b3_amount;
        } else if (player_bet_amount == 'b-4') {
          b5 += b4_amount;
          self.lastBankerPairBetAmount = b4_amount;
        } else if (player_bet_amount == 'b-5') {
          b5 += b5_amount;
          self.lastBankerPairBetAmount = b5_amount;
        } else if (player_bet_amount == 'b-6') {
          b5 += b6_amount;
          self.lastBankerPairBetAmount = b6_amount;
        }
        self.bankerPairFlag = 1;
      });
  
      let credits = self.origBal;
      let curPlayerBet = parseInt(Helper.format.number.removeComma($('#bet-player-amount').html())) + b1;
      let curBankerBet = parseInt(Helper.format.number.removeComma($('#bet-banker-amount').html())) + b2;
      let curTieBet = parseInt(Helper.format.number.removeComma($('#bet-tie-amount').html())) + b3;
      let curPPBet = parseInt(Helper.format.number.removeComma($('#bet-player-pair-amount').html())) + b4;
      let curBPBet = parseInt(Helper.format.number.removeComma($('#bet-banker-pair-amount').html())) + b5;
      let totalTableChipsAmount = (curPlayerBet + curBankerBet + curTieBet + curPPBet + curBPBet);
  
      const controlAmount = (diff) => {
        let ad_index = 0;
        let ad_value = 0;
        for (const [index, value] of [b1, b2, b3, b4, b5].entries()) {
          if (value > 0) {
            ad_index = index;
            ad_value = value;
            break;
          }
        }
        switch (ad_index) {
          case 0:
            curPlayerBet -= diff;
            break;
          case 1:
            curBankerBet -= diff;
            break;
          case 2:
            curTieBet -= diff;
            break;
          case 3:
            curPPBet -= diff;
            break;
          case 4:
            curBPBet -= diff;
            break;
        }
        totalTableChipsAmount = (curPlayerBet + curBankerBet + curTieBet + curPPBet + curBPBet);
      };
      if (parseInt(credits) < totalTableChipsAmount) {
        self.showTableError(BALANCE_WARNING);
        const diff = totalTableChipsAmount - parseInt(credits);
        controlAmount(diff);
        // self.resetTables();
        // return;
      }
      const validateMinMax = () => {
        const tableMin = parseInt($('#minimum-bet').val());
        const tableMax = parseInt($('#maximum-bet').val());
        const pairMin = parseInt($('#player_pair_min').val());
        const pairMax = parseInt($('#player_pair_max').val());
        const tieMin = parseInt($('#tie_min').val());
        const tieMax = parseInt($('#tie_max').val());
        if (b1 > 0) {
          if (curPlayerBet < tableMin) {
            self.showTableError(PLAYER_MIN + ' ' + Helper.format.number.withComma(tableMin));
          }
          if (curPlayerBet > tableMax) {
            self.showTableError(PLAYER_MAX + ' ' + Helper.format.number.withComma(tableMax));
            curPlayerBet = tableMax;
          }
        }
        if (b2 > 0) {
          if (curBankerBet < tableMin) {
            self.showTableError(BANKER_MIN + ' ' + Helper.format.number.withComma(tableMin));
          }
          if (curBankerBet > tableMax) {
            self.showTableError(BANKER_MAX + ' ' + Helper.format.number.withComma(tableMax));
            curBankerBet = tableMax;
          }
        }
        if (b3 > 0) {
          if (curTieBet < tieMin) {
            self.showTableError(TIE_MIN + ' ' + Helper.format.number.withComma(tieMin));
          }
          if (curTieBet > tieMax) {
            self.showTableError(TIE_MAX + ' ' + Helper.format.number.withComma(tieMax));
            curTieBet = tieMax;
          }
        }
        if (b4 > 0) {
          if (curPPBet < pairMin) {
            self.showTableError(PLAYER_PAIR_MIN + ' ' + Helper.format.number.withComma(pairMin));
          }
          if (curPPBet > pairMax) {
            self.showTableError(PLAYER_PAIR_MAX + ' ' + Helper.format.number.withComma(pairMax));
            curPPBet = pairMax;
          }
        }
        if (b5 > 0) {
          if (curBPBet < pairMin) {
            self.showTableError(BANKER_PAIR_MIN + ' ' + Helper.format.number.withComma(pairMin));
          }
          if (curBPBet > pairMax) {
            self.showTableError(BANKER_PAIR_MAX + ' ' + Helper.format.number.withComma(pairMax));
            curBPBet = pairMax;
          }
        }
        totalTableChipsAmount = (curPlayerBet + curBankerBet + curTieBet + curPPBet + curBPBet);
      };
      validateMinMax();
  
      self.playerBetAmount = curPlayerBet;
      self.bankerBetAmount = curBankerBet;
      self.tieBetAmount = curTieBet;
      self.playerPairBetAmount = curPPBet;
      self.bankerPairBetAmount = curBPBet;
      self.totalTableChipsAmount = totalTableChipsAmount;
  
      if (curPlayerBet && curBankerBet) {
        self.showTableError(PLAYER_BANKER_WARNING);
        return;
      }
  
      $('#bet-player-amount').html(Helper.format.number.withComma(curPlayerBet));
      $('#bet-banker-amount').html(Helper.format.number.withComma(curBankerBet));
      $('#bet-tie-amount').html(Helper.format.number.withComma(curTieBet));
      $('#bet-player-pair-amount').html(Helper.format.number.withComma(curPPBet));
      $('#bet-banker-pair-amount').html(Helper.format.number.withComma(curBPBet));
    },
  
    confirmChipsInTable: function () {
      const self = PlayerGame;
  
      if (!GameUtil.validateBetTableLimit(self.playerBetAmount, self.bankerBetAmount, self.playerPairBetAmount, self.bankerPairBetAmount, self.tieBetAmount)) {
        return;
      }
  
      let credits = self.origBal;
  
      if (self.playerFlag) {
        credits = credits - self.playerBetAmount;
        $('#profile-credits').html(Helper.format.number.withComma(credits));
        self.playerConfirmedBetAmount = parseInt(Helper.format.number.removeComma($('#bet-player-amount').html()));
        self.playerConfirmFlag = 1;
  
        $('#bet-player-table').addClass('player-highlight');
        $('#bet-player-table > p').addClass('player-highlight-text');
      } else {
        self.playerConfirmedBetAmount = 0;
        self.playerConfirmFlag = 0;
        $('#bet-player-table').removeClass('player-highlight');
        $('#bet-player-table > p').removeClass('player-highlight-text');
      }
  
      if (self.bankerFlag) {
        credits = credits - self.bankerBetAmount;
        $('#profile-credits').html(Helper.format.number.withComma(credits));
        self.bankerConfirmedBetAmount = parseInt(Helper.format.number.removeComma($('#bet-banker-amount').html()));
        self.bankerConfirmFlag = 1;
  
        $('#bet-banker-table').addClass('banker-highlight');
        $('#bet-banker-table > p').addClass('banker-highlight-text');
      } else {
        self.bankerConfirmedBetAmount = 0;
        self.bankerConfirmFlag = 0;
        $('#bet-banker-table').removeClass('banker-highlight');
        $('#bet-banker-table > p').removeClass('banker-highlight-text');
      }
  
      if (self.tieFlag) {
        credits = credits - self.tieBetAmount;
        $('#profile-credits').html(Helper.format.number.withComma(credits));
        self.tieConfirmedBetAmount = parseInt(Helper.format.number.removeComma($('#bet-tie-amount').html()));
        self.tieConfirmFlag = 1;
  
        $('#bet-tie-table').addClass('tie-highlight');
        $('#bet-tie-table > p').addClass('tie-highlight-text');
      } else {
        self.tieConfirmFlag = 0;
        self.tieConfirmedBetAmount = 0;
        $('#bet-tie-table').removeClass('tie-highlight');
        $('#bet-tie-table > p').removeClass('tie-highlight-text');
      }
  
      if (self.playerPairFlag) {
        credits = credits - self.playerPairBetAmount;
        $('#profile-credits').html(Helper.format.number.withComma(credits));
        self.playerPairConfirmedBetAmount = parseInt(Helper.format.number.removeComma($('#bet-player-pair-amount').html()));
        self.playerPairConfirmFlag = 1;
  
        $('#bet-player-pair-table').addClass('pp-highlight');
        $('#bet-player-pair-table > p').addClass('pp-highlight-text');
      } else {
        self.playerPairConfirmFlag = 0;
        self.playerPairConfirmedBetAmount = 0;
        $('#bet-player-pair-table').removeClass('pp-highlight');
        $('#bet-player-pair-table > p').removeClass('pp-highlight-text');
      }
  
      if (self.bankerPairFlag) {
        credits = credits - self.bankerPairBetAmount;
        $('#profile-credits').html(Helper.format.number.withComma(credits));
        self.bankerPairConfirmedBetAmount = parseInt(Helper.format.number.removeComma($('#bet-banker-pair-amount').html()));
        self.bankerPairConfirmFlag = 1;
  
        $('#bet-banker-pair-table').addClass('bp-highlight');
        $('#bet-banker-pair-table > p').addClass('bp-highlight-text');
      } else {
        self.bankerPairConfirmFlag = 0;
        self.bankerPairConfirmedBetAmount = 0;
        $('#bet-banker-pair-table').removeClass('bp-highlight');
        $('#bet-banker-pair-table > p').removeClass('bp-highlight-text');
      }
      let totalBet = self.playerConfirmedBetAmount + self.bankerConfirmedBetAmount + self.tieConfirmedBetAmount + self.playerPairConfirmedBetAmount + self.bankerPairConfirmedBetAmount;
      if (self.playerFlag || self.bankerFlag || self.tieFlag || self.playerPairFlag || self.bankerPairFlag) {
        $('#bet-amount').html(Helper.format.number.withComma(totalBet));
        self.rebet['player'] = self.playerConfirmedBetAmount;
        self.rebet['banker'] = self.bankerConfirmedBetAmount;
        self.rebet['tie'] = self.tieConfirmedBetAmount;
        self.rebet['player-pair'] = self.playerPairConfirmedBetAmount;
        self.rebet['banker-pair'] = self.bankerPairConfirmedBetAmount;
        self.rebet['total'] = totalBet;
      }
      //save game status to local storage~~~~
      let gameInfo = {
        currentTime: new Date().getTime(),
        account: $('#account_id').val(),
        gameData: self.oldGameData,
        playerFlag: self.playerFlag,
        bankerFlag: self.bankerFlag,
        tieFlag: self.tieFlag,
        playerPairFlag: self.playerPairFlag,
        bankerPairFlag: self.bankerPairFlag,
        totalBet: totalBet.toString(),
        playerConfirmedBetAmount: self.playerConfirmedBetAmount.toString(),
        bankerConfirmedBetAmount: self.bankerConfirmedBetAmount.toString(),
        tieConfirmedBetAmount: self.tieConfirmedBetAmount.toString(),
        playerPairConfirmedBetAmount: self.playerPairConfirmedBetAmount.toString(),
        bankerPairConfirmedBetAmount: self.bankerPairConfirmedBetAmount.toString()
      }
      window.localStorage.setItem('gameInfo', JSON.stringify(gameInfo));
    },
  
    calculateConfirmChipsInTable: function (flag) {
      const self = PlayerGame;
  
      if (self.playerConfirmFlag) {
        self.playerBetAmount = self.playerConfirmedBetAmount;
        $('#bet-player-amount').html(Helper.format.number.withComma(self.playerConfirmedBetAmount));
      } else {
        self.playerFlag = 0;
        self.playerBetAmount = 0;
        self.playerConfirmedBetAmount = 0;
        $('#bet-player-amount').html(0);
      }
  
      if (self.bankerConfirmFlag) {
        self.bankerBetAmount = self.bankerConfirmedBetAmount;
        $('#bet-banker-amount').html(Helper.format.number.withComma(self.bankerConfirmedBetAmount));
      } else {
        self.bankerFlag = 0;
        self.bankerBetAmount = 0;
        self.bankerConfirmFlag = 0;
        $('#bet-banker-amount').html(0);
      }
  
      if (self.tieConfirmFlag) {
        self.tieBetAmount = self.tieConfirmedBetAmount;
        $('#bet-tie-amount').html(Helper.format.number.withComma(self.tieConfirmedBetAmount));
      } else {
        self.tieFlag = 0;
        self.tieBetAmount = 0;
        self.tieConfirmFlag = 0;
        $('#bet-tie-amount').html(0);
      }
  
      if (self.playerPairConfirmFlag) {
        self.playerPairBetAmount = self.playerPairConfirmedBetAmount;
        $('#bet-player-pair-amount').html(Helper.format.number.withComma(self.playerPairConfirmedBetAmount));
      } else {
        self.playerPairFlag = 0;
        self.playerPairBetAmount = 0;
        self.playerPairConfirmFlag = 0;
        $('#bet-player-pair-amount').html(0);
      }
  
      if (self.bankerPairConfirmFlag) {
        self.bankerPairBetAmount = self.bankerPairConfirmedBetAmount;
        $('#bet-banker-pair-amount').html(Helper.format.number.withComma(self.bankerPairConfirmedBetAmount));
      } else {
        self.bankerPairFlag = 0;
        self.bankerPairBetAmount = 0;
        self.bankerPairConfirmFlag = 0;
        $('#bet-banker-pair-amount').html(0);
      }
    },
  
    getBetBeadType(bet_log) {
      let bead_type = [];
      bet_log = bet_log || {};
      if (bet_log.p_amount) bead_type.push('e');
      if (bet_log.b_amount) bead_type.push('a');
      if (bet_log.pp_amount) bead_type.push('f');
      if (bet_log.bp_amount) bead_type.push('c');
      if (bet_log.t_amount) bead_type.push('i');
      return bead_type;
    }
  
};

const PlayerLobby = {
    pageFlag: 0,
    scoreBoardFlag: 0,
    gameProviderId: 0,
    tableRefresh: null,
    gameMaximumBetLookUpData: [],
    tableLimitData: [],
    lookUpData: [],
    loginNotificationModals: [],
    roomData: [],
    appGameShoeLimit: true,
    user_level: 1,
    app_lang: '',
    roomTimer: null,
    noteLookUpData: [],
    customerLookUpData: [],
  
    init: function () {
      const self = this;
      self.user_level = parseInt($('#account_level').val());
      self.app_lang = $('#app_lang').val();
      self.api.get.gameProviders();
      self.api.post.gameMaximumBet();
      self.api.get.tableLimit();
      self.addEvents();
  
      self.user_level = self.user_level ? parseInt(self.user_level) : 1;
  
      // self.api.get.gameRoomSelection(1);
  
      setInterval(function () {
        if (self.gameTableFlag == 1) {
          // self.api.get.tableLimit();
        }
      }, 20000);
  
      setTimeout(function () {
        var gameProviderId = (window.location.href.split('p=')[1]) ? parseInt(window.location.href.split('p=')[1]) : 0;
        console.log(gameProviderId)
        if (gameProviderId) {
          $('.notification-modal-body').hide();
          $('a[class*=game-' + gameProviderId + '-]').trigger('click');
        } else {
          self.initLoginPopup();
        }
      }, 1500);
    },
  
    initLoginPopup: function () {
      const self = this;
      const notificationsStr = localStorage.notification;
      let oldNotifications = notificationsStr ? JSON.parse(notificationsStr) : [];
      // console.log('oldNotifications', oldNotifications);
      $('.notification-modal').each(function (index, ele) {
        // console.log('modal found');
        const eleId = $(ele).attr('data-not-id');
        const eleIndex = oldNotifications.findIndex(function (x) {
          return x.id === eleId
        });
        if (eleIndex > -1) {
          const inputDate = oldNotifications[eleIndex].date;
          const todayDate = new Date();
          if (new Date(inputDate).setHours(0, 0, 0, 0) === todayDate.setHours(0, 0, 0, 0)) {
            // console.log('same day!!!!!!!!');
          } else {
            $(`#notification-modal-${eleId}`).show();
          }
        } else {
          $(`#notification-modal-${eleId}`).show();
        }
      });
  
      $('.notification_dismiss_today').unbind('click').bind('click', function (e) {
        const id = $(e.target).attr('data-noti-id');
        if ($(e.target).parent().find('.checkbox').is(':checked')) {
  //        console.log('clicked', id);
          const notificationsStr = localStorage.notification;
          let oldNotifications = notificationsStr ? JSON.parse(notificationsStr) : [];
          const index = oldNotifications.findIndex(function (x) {
            return x.id === id
          });
  //        console.log('index', index);
          if (index > -1) {
            oldNotifications[index].date = new Date();
          } else {
            oldNotifications.push({
              id,
              date: new Date(),
            });
          }
          localStorage.notification = JSON.stringify(oldNotifications);
        }
        $(`#notification-modal-${id}`).remove();
      });
    },
  
    countTableSummary: function (bead_road) {
      var self = this;
      var beadArray = {
        'banker': 0,
        'player': 0,
        'tie': 0
      };
      if (bead_road != null) {
        for (let i = 0; i <= bead_road.length; i++) {
          if (bead_road[i] == 'a' || bead_road[i] == 'b' || bead_road[i] == 'c' || bead_road[i] == 'd') {
            beadArray['banker'] += 1;
          } else if (bead_road[i] == 'e' || bead_road[i] == 'f' || bead_road[i] == 'g' || bead_road[i] == 'h') {
            beadArray['player'] += 1;
          } else if (bead_road[i] == 'i' || bead_road[i] == 'j' || bead_road[i] == 'k' || bead_road[i] == 'l') {
            beadArray['tie'] += 1;
          }
        }
      }
  
      return beadArray;
    },
  
    addEvents: function () {
      const self = this;
  
      $('a[class*=notice]').unbind('click').bind('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('class').split('-')[1];
        var data = self.getSelectedNotice(id);
        LobbyRenderUtil.renderSelectedNotice(data);      
      });
  
      $('a[class*=note-detail-]').unbind().bind('click', function (e) {
        e.preventDefault();
        const note_id = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);
        const data = self.noteLookUpData.find(x => x.id === note_id);
        if (data.status === 'PENDING') self.api.get.read_note(note_id);
        data.status = 'DONE';
        LobbyRenderUtil.renderNote(self.noteLookUpData);
  //      console.log(self.noteLookUpData);
        $('#view-note-title').html(data.title);
        $('#view-note-content').html(data.content);
        $('#note-time').html(Helper.format.date.showDate(data.created));
  
        $('#view-note-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('a[class*=customer-detail-]').unbind().bind('click', function (e) {
        e.preventDefault();
        const customer_id = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);
        const data = self.customerLookUpData.find(x => x.id === customer_id);
        $('#view-customer-title').html(data.title);
        $('#view-customer-content').html(data.content);
        $('#view-customer-answer').html(data.answer);
        if ( data.agent != null)
          $('#customer-answer-agent').html(data.agent);
        
        $('#customer-question-time').html(Helper.format.date.showDate(data.created));
  
        $('#view-customer-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('a[class*=page-button-]').unbind().bind('click', function (e) {
        e.preventDefault();
        self.page = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);
  
        if (self.pageFlag === 1) {
          self.api.post.gameBetHistory(self.page);
        } else if (self.pageFlag === 2) {
          self.api.get.cashIn(self.page);
        } else if (self.pageFlag === 3) {
          self.api.get.cashOut(self.page);
        } else if (self.pageFlag === 4) {
          self.api.get.note(self.page);
        } else if (self.pageFlag === 5) {
          self.api.get.customer(self.page);
        }
      });
  
      $('#btn-history').unbind('click').bind('click', function (e) {
        e.preventDefault();
        self.pageFlag = 1;
        self.api.post.gameBetHistory();
        $('#bet-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('#btn-cashin').unbind('click').bind('click', function (e) {
        e.preventDefault();
        self.pageFlag = 2;
        self.api.get.cashIn();
        $('#cashin-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('#btn-cashout').unbind('click').bind('click', function (e) {
        e.preventDefault();
        self.pageFlag = 3;
        self.api.get.cashOut();
        $('#cashout-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
      
      $('.btn_note').unbind('click').bind('click', function (e) {
        e.preventDefault();
        self.pageFlag = 4;
        self.api.get.note();
        $('#note-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('.btn_customer').unbind().bind('click', function (e) {
        e.preventDefault();
        self.pageFlag = 5;
        self.api.get.customer();
        $('#customer-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('#btn-profile-save').unbind().bind('click', function (e) {
        e.preventDefault();
        if ( $('#profile_password').val().length == 0 ){
          alert('비밀번호를 정확히 입력하십시요.');
          return;
        }
        if ( $('#profile_password').val() != $('#profile_password_confirmation').val() ){
          alert('비번이 일치하지 않습니다.');
          return;
        }
        self.api.post.updateProfile();
      });
  
      $('#btn-bonus').unbind('click').bind('click', function (e) {
        e.preventDefault();
        $('#cashout_current').html($('#profile-bonus').val());
        $('#bonus-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('#btn-logout').unbind().bind('click', function (e) {
        e.preventDefault();
        window.location = baseUrl + '/logout/';
      });
  
      $('#btn-cashout-proceed').unbind().bind('click', function (e) {
        e.preventDefault();
        var cashOutAmount = parseInt(Helper.format.number.removeComma($('#cashout_amount').val().trim())) || 0;
        if (cashOutAmount) {
          cashOutAmount = Helper.format.number.withComma(cashOutAmount);
        }
        let msg = `해당 금액 <strong>${cashOutAmount}</strong> 을 출금하시겟습니까?`;
        if (self.app_lang == 'mn') {
          msg = `Тухайн мөнгөн <strong>${cashOutAmount}</strong> гаргах уу?`;
        }
        Helper.confirm.show(CONFIRM, msg, function () {
          Helper.confirm.hide();
          self.api.post.cashOut();
        });
      });
  
      $('#btn-cashout-request').unbind('click').bind('click', function (e) {
        e.preventDefault();
        // $('#cashout-request-modal-form > table > tr > td').removeClass('has-error');
        // $('#cashout-request-modal-form > table > tr > td > span').html('');
        $('#cashout-request-modal-form')[0].reset();
        $('#current_balance').html($('#profile-credits-display').html());
        self.api.post.getProfileInfo();
        $('#cashout-request-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('#btn-cashinout-history').unbind('click').bind('click', function (e) {
        e.preventDefault();
        self.pageFlag = 2;
        self.api.get.cashIn();
        $('#cashin-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('#btn-switchtocashout').unbind('click').bind('click', function (e) {
        e.preventDefault();
        self.pageFlag = 3;
        self.api.get.cashOut();
        $('#cashin-modal').modal('toggle');
        $('#cashout-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
      
      $('#btn-switchtocashin').unbind('click').bind('click', function (e) {
        e.preventDefault();
        self.pageFlag = 2;
        self.api.get.cashIn();
  
        $('#cashout-modal').modal('toggle');
        $('#cashin-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('#btn-info').unbind('click').bind('click', function (e) {
        e.preventDefault();
        self.api.post.getProfileInfo();
        $('#profile_password').val('');
        $('#profile_password_confirmation').val('');
        $('#info-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
      $('.btn-money').unbind('click').bind('click', function (e) {
        e.preventDefault();
        let currentAmount = parseInt(Helper.format.number.removeComma($('#cashin_amount').val().trim())) || 0;
        let unit = parseInt($(this).attr('data'));
        currentAmount += unit*10000;
        $('#cashin_amount').val(Helper.format.number.withComma(currentAmount));
      });
      $('.btn-money-cashout').unbind('click').bind('click', function (e) {
        e.preventDefault();
        let currentAmount = parseInt(Helper.format.number.removeComma($('#cashout_amount').val().trim())) || 0;
        let unit = parseInt($(this).attr('data'));
        currentAmount += unit*10000;
        $('#cashout_amount').val(Helper.format.number.withComma(currentAmount));
      });
  
      $('#btn-get-account').unbind('click').bind('click', function (e) {
        e.preventDefault();
        self.api.post.getCashInAccount();      
      });
      $('.btn-copy').unbind('click').bind('click', function (e) {
        e.preventDefault();
        const el = document.createElement('textarea');
        el.value = $('#cashin_account').html();;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      });
  
      $('#btn-cashin-proceed').unbind('click').bind('click', function (e) {
        e.preventDefault();
  
        var cashInAmount = parseInt(Helper.format.number.removeComma($('#cashin_amount').val().trim())) || 0;
        if (cashInAmount) {
          cashInAmount = Helper.format.number.withComma(cashInAmount);
        }
        let msg = `해당 금액 <strong>${cashInAmount}</strong> 을 입금하시겟습니까?`;
        if (self.app_lang == 'mn') {
          msg = `Тухайн мөнгөн <strong>${cashInAmount}</strong> шилжүүлэхүү?`;
        }
        Helper.confirm.show(CONFIRM, msg, function () {
          Helper.confirm.hide();
          self.api.post.cashIn();
        });
      });
  
      $('#btn-cashin-request').unbind('click').bind('click', function (e) {
        e.preventDefault();
        // $('#cashin-request-modal-form > div > tr > td').removeClass('has-error');
        // $('#cashin-request-modal-form > table > tr > td > span').html('');
        $('#cashin-request-modal-form')[0].reset();
        $('#cashin_account').html('');
        $('#btn-cashin-proceed').attr('disabled', 'disabled');
        self.api.post.getProfileInfo();
        $('#cashin-request-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('#btn-customer-add').unbind('click').bind('click', function (e) {
        e.preventDefault();
        // $('#customer-add-modal-form > table > tr > td').removeClass('has-error');
        // $('#customer-add-modal-form > table > tr > td > span').html('');
        $('#customer-add-modal-form')[0].reset();
        $('#customer-add-modal').modal({
          backdrop: 'static',
          keyboard: false
        });
      });
  
      $('#btn-customer-send').unbind('click').bind('click', function (e) {
        e.preventDefault();
        self.api.post.addCustomer();
      });
  
      $('.close_table_selection').unbind('click').bind('click', function (e) {
        e.preventDefault();
        if ( self.roomTimer )
          clearInterval(self.roomTimer);
      });
  
      $('.close').unbind('click').bind('click', function (e) {
        e.preventDefault();
        clearInterval(self.tableRefresh);
      });
  
      $('.midas-betting-price_item').unbind('click').bind('click', function (e) {
        e.preventDefault();
        $('.midas-betting-price_item').each(function (key, ele) {
          $(ele).removeClass('active');
        });
        $(this).addClass('active');
      });
  
      $('a[class*=game-]').unbind('click').bind('click', function (e) {
        e.preventDefault();
        $('#table-selection-name').html('');
        $('#table-selection-logo').attr('src', '');
  
        $('#standard-table div').remove();
        $('select[class*=game-table-max-bet] option').remove();
  
        self.gameProviderId = $(this).attr('class').split('game-')[1].split('-')[0];
  //      console.log('id:'+self.gameProviderId);
        let img_url = '../static/templates/galaxy/img/icons/evolution_logo.png';
        let game_name = 'Evolution';
        if (self.gameProviderId === '1') {
          img_url = '../static/templates/galaxy/img/icons/evolution_logo.png';
          game_name = 'Evolution';
        } else if (self.gameProviderId === '2') {
          img_url = '../static/templates/galaxy/img/icons/logo_cagayan.png';
          game_name = 'CAGAYAN';
        } else if (self.gameProviderId === '3') {
          img_url = '../static/templates/galaxy/img/icons/resortworld_logo.png';
          game_name = 'ResortWorldManilla';
        } else if (self.gameProviderId === '4') {
          img_url = '../static/templates/galaxy/img/icons/oriental_logo.png';
          game_name = 'Oriental';
        } else if (self.gameProviderId === '5') {
          img_url = '../static/templates/shinsegae/img/logo_micro_api.png';
          game_name = 'MICROMING';
        } else if (self.gameProviderId === '6') {
          img_url = '../static/templates/galaxy/img/icons/solaire_logo.png';
          game_name = 'Solaire';
        } else if (self.gameProviderId === '7') {
          img_url = '../static/templates/galaxy/img/icons/stotsenberg_logo.png';
          game_name = 'Stotsenberg';
        } else if (self.gameProviderId === '8') {
          img_url = '../static/templates/galaxy/img/icons/okada_logo.png';
          game_name = 'OKADA';
        } else if (self.gameProviderId === '9') {
          img_url = '../static/templates/galaxy/img/icons/okada_logo.png';
          game_name = 'OKADA2';
        } else if (self.gameProviderId === '10') {
          img_url = '../static/templates/galaxy/img/icons/resortworld_logo.png';
          game_name = 'ResortWorldManilla2';
        }
        $('#table-selection-name').html(game_name);
        $('#table-selection-logo').attr('src', img_url);
        self.roomData = [];
        if ( self.roomTimer )
          clearInterval(self.roomTimer);
        // $('.table-selection-modal').modal('show').on('hidden.bs.modal', function () {
        // });
        $('.vegas_loader').show();
        self.scoreBoardFlag = 0;
        self.api.get.gameRoomSelection(self.gameProviderId);
        self.roomTimer = setInterval(function () {
          self.api.get.gameRoomSelection(self.gameProviderId);
        }, 7000);
      });
    },
  
    addTableSelectionEvents: function () {
      const self = this;
      $('a[class*=game-table-selected]').unbind('click').bind('click', function (e) {
        e.preventDefault();
        const new_note_cnt_ele = $('#note-length');
        let new_note_cnt = parseInt(new_note_cnt_ele.html());
        if (new_note_cnt > 0) {
          alert('읽지않은 쪽지가 있습니다.');
          return;
        }
  
        var params = $(this).attr('class').split(' ')[0].split('-');
        // var selectedBetSettings = $('.game-table-max-bet-' + params[4]).val();
        // var is_vip = parseInt($('.game-table-max-bet-' + params[4] + ' :selected').attr('class').split('-')[2]);
        const selectedBetSettings = $('.midas-betting-price_item.active').attr('value');
        const is_vip = parseInt($('.midas-betting-price_item.active').attr('is-vip'));
        /* temporary */
        window.location = baseUrl + '/game?p=' + params[3] + '&t=' + params[4] + '&m=' + selectedBetSettings;
      });
    },
  
    showErrors: function (errors, prefix) {
      const self = this;
      if (typeof prefix == 'undefined') {
        prefix = '';
      }
      $.each(errors, function (key, val) {
        $('#' + prefix + key).parent().addClass('has-error');
        $('#' + prefix + key).next().html(val);
      });
    },
  
    getSelectedNotice: function (notice_id) {
      const self = this;
      var index = 0;
      $.each(self.lookUpData, function (key, val) {
        if (val.id == notice_id) {
          index = key;
        }
      });
  
      return self.lookUpData[index];
    },
  
    getSelectedTableLimit: function (table_name) {
      const self = this;
      var index = 0;
  
      $.each(self.tableLimitData, function (key, val) {
        if (val.table_name == table_name) {
          index = key;
        }
      });
  
      return self.tableLimitData[index];
    },
  
    api: {
      post: {
        getCashInAccount: function () {
          const self = PlayerLobby;
          $.ajax({
            url: baseUrl + '/app/get_cashin_account/',
            method: 'POST',
            data: {
              '_token': $('#_token').val(),
            },
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                console.log( resp.cashin_account);
                $("#cashin_account").html(resp.cashin_account);
                $('#btn-cashin-proceed').removeAttr('disabled');
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
  
        getProfileInfo: function () {
          const self = PlayerLobby;
          $.ajax({
            url: baseUrl + '/app/get_profile_info/',
            method: 'POST',
            data: {
              '_token': $('#_token').val(),
            },
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                // console.log( resp.account);
                $("#cashout_bank_name").val(resp.account.bank_name);
                $("#cashout_bank_account_name").val(resp.account.bank_account_name);
                $("#cashout_bank_account_no").val(resp.account.bank_account_no);
                if ( resp.account.bank_account_no ){
                  $("#cashout_bank_account_no_str").val("*".repeat(resp.account.bank_account_no.length-4)+resp.account.bank_account_no.substring(resp.account.bank_account_no.length-4,resp.account.bank_account_no.length));
                }
  
                $("#cashin_bank_name").val(resp.account.bank_name);
                $("#cashin_bank_account_name").val(resp.account.bank_account_name);
                $("#cashin_bank_account_no").val(resp.account.bank_account_no);              
                if ( resp.account.bank_account_no ){
                  $("#cashin_bank_account_no_str").val("*".repeat(resp.account.bank_account_no.length-4)+resp.account.bank_account_no.substring(resp.account.bank_account_no.length-4,resp.account.bank_account_no.length));
                }
  
                $("#profile_bank_name").val(resp.account.bank_name);
                $("#profile_phone_number").val(resp.account.phone_number);
                $("#profile_bank_account_name").val(resp.account.bank_account_name);
                $("#profile_bank_account_no").val(resp.account.bank_account_no);
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
  
        gameMaximumBet: function () {
          const self = PlayerLobby;
          $.ajax({
            url: baseUrl + '/bet/maximum-bet',
            method: 'GET',
            beforeSend: function () {
              $(".preloader").show();
            },
            success: function (resp) {
              self.gameMaximumBetLookUpData = resp.data;
            },
            error: function (resp) {
            },
            complete: function () {
              $(".preloader").fadeOut();
            }
          });
        },
  
        gameBetHistory: function (page) {
          const self = PlayerLobby;
          if (typeof page == 'undefined') {
            page = 1;
          }
          $.ajax({
            url: baseUrl + '/bet/bet_history/',
            method: 'POST',
            data: {
              '_token': $('#_token').val(),
              'page': page,
              'limit': 10
            },
            success: function (resp) {
              if (resp.success) {
                LobbyRenderUtil.renderBetHistory(resp.data);
                LobbyRenderUtil.renderTablePagination(resp.paginator);
              }
            },
            error(resp) {},
            complete() {}
          });
        },
  
        updateProfile() {
          const self = PlayerLobby;
          $.ajax({
            url: baseUrl + '/app/update_profile/',
            method: 'POST',
            data: {
              '_token': $('#_token').val(),
              'phone_number': $('#profile_phone_number').val(),
              'bank_name': $('#profile_bank_name').val(),
              'bank_account_name': $('#profile_bank_account_name').val(),
              'bank_account_no': $('#profile_bank_account_no').val(),
              'password': $('#profile_password').val()
            },
            beforeSend: function(){
              $('#btn-profile-save').attr('disabled','disabled');
            },
            success: function (resp) {
              alert(resp.message);
              if (resp.success) {
                $('#info-modal').modal('toggle');
  //              console.log(resp);
              }
            },
            error(resp) {},
            complete() {
              $('#btn-profile-save').removeAttr('disabled');
            }
          });
        },
  
        cashIn: function () {
          const self = PlayerLobby;
          $.ajax({
            url: baseUrl + '/money/cash_in_request/',
            method: 'POST',
            data: {
              'cashin_amount': parseInt(Helper.format.number.removeComma($('#cashin_amount').val().trim())) || 0,
              'cashin_bank_name': $('#cashin_bank_name').val().trim(),
              'cashin_bank_account_no': $('#cashin_bank_account_no').val().trim(),
              'cashin_bank_account_name': $('#cashin_bank_account_name').val().trim(),
              '_token': $('#_token').val()
            },
            beforeSend: function () {
              $('#btn-cashin-proceed').attr('disabled', 'disabled');
            },
            success: function (resp) {
              if (resp.success) {
                self.api.get.cashIn();
                // $('#cashin-request-modal-form > table > tr > td').removeClass('has-error');
                // $('#cashin-request-modal-form > table > tr > td > span').html('');
                $('#cashin-request-modal-form')[0].reset();
                $('#cashin-request-modal').modal('toggle');
              } else {
                $("#deposit-error").html(resp.errors);
                alert(resp.data);
              }
            },
            error: function (err) {
              // self.showErrors(err);
              alert(err);
            },
            complete: function () {
              $('#btn-cashin-proceed').removeAttr('disabled');
            }
          });
        },
  
        cashOut: function () {
          const self = PlayerLobby;
          $.ajax({
            url: baseUrl + '/money/cash_out_request/',
            method: 'POST',
            data: {
              'cashout_amount': parseInt(Helper.format.number.removeComma($('#cashout_amount').val().trim())) || 0,
              'cashout_pin': $('#cashout_pin').val().trim(),
              'cashout_bank_name': $('#cashout_bank_name').val().trim(),
              'cashout_bank_account_no': $('#cashout_bank_account_no').val().trim(),
              'cashout_bank_account_name': $('#cashout_bank_account_name').val().trim(),
              '_token': $('#_token').val()
            },
            beforeSend: function () {
              $('#btn-cashout-proceed').attr('disabled', 'disabled');
            },
            success: function (resp) {
              if (resp.success) {
                self.api.get.cashOut();
                $('#cashout-request-modal-form')[0].reset();
                $('#cashout-request-modal').modal('toggle');
                $('#profile-credits').val(resp.remaining_balance)
                $('#profile-credits-display').html(Helper.format.number.withComma(resp.remaining_balance));
                $('#profile-credits-display-lobby').html(Helper.format.number.withComma(resp.remaining_balance));
                $('#current_balance').html(Helper.format.number.withComma(resp.remaining_balance));
              } else {
                alert(resp.data);
              }
            },
            error: function (err) {
              // self.showErrors(resp.responseJSON.errors);
              alert(err)
            },
            complete: function () {
              $('#btn-cashout-proceed').removeAttr('disabled');
            }
          });
        },
        addCustomer: function () {
          const self = PlayerLobby;
          $.ajax({
            url: baseUrl + '/com/add_customer/',
            method: 'POST',
            data: {
              'title': $('#customer-add-title').val() || '제목없음',
              'content': $('#customer-add-content').val(),
            },
            success: function (resp) {
              if (resp.success) {
                self.pageFlag = 5;
                self.api.get.customer();        
              }
            },
            error: function (err) {
              alert(err)
            },
          });
        },
      },
  
      get: {
        tableLimit: function () {
          const self = PlayerLobby;
          $.ajax({
            url: baseUrl + '/bet/table_limit/',
            method: 'GET',
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                self.tableLimitData = resp.data;
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
  
        gameRoomSelection: function (game_provider_id) {
          const self = PlayerLobby;
  //        console.log(baseUrl + '/bet/room/' + game_provider_id);
          const resp = {"success": true, "data": [{"id": 898, "game_log": 8140413, "table_no": 1, "table_name": "OK-1", "shoe_no": 617, "game_no": 38, "shoe_update_date": "2021-07-21 04:54:43.454713+09:00", "result": "", "table_status": "1", "timer": 40, "status": "ACTIVE", "updated": null, "created": "2021-06-27T10:02:34.406265+09:00", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "beads": "kaeeaeaaeafeaieaeabaecaebafiaacafeeai", "winning_cards": "00,00,00,00,00,00,00,00"}, {"id": 901, "game_log": 8140415, "table_no": 2, "table_name": "OK-2", "shoe_no": 605, "game_no": 36, "shoe_update_date": "2021-07-21 04:54:44.463236+09:00", "result": "", "table_status": "1", "timer": 40, "status": "ACTIVE", "updated": null, "created": "2021-06-27T10:17:05.106252+09:00", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "beads": "ieagaebeeeiaaaaiaaegicaeiaeieaeeiae", "winning_cards": "00,00,00,00,00,00,00,00"}, {"id": 902, "game_log": 8140412, "table_no": 3, "table_name": "OK-3", "shoe_no": 596, "game_no": 31, "shoe_update_date": "2021-07-21 04:54:43.319320+09:00", "result": "", "table_status": "1", "timer": 40, "status": "ACTIVE", "updated": null, "created": "2021-06-27T10:31:55.288812+09:00", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "beads": "eaaegaeieecieeeeeeeaeefeiaiaaa", "winning_cards": "00,00,00,00,00,00,00,00"}, {"id": 879, "game_log": 8140462, "table_no": 6, "table_name": "OK-6", "shoe_no": 578, "game_no": 37, "shoe_update_date": "2021-07-21 04:55:29.824481+09:00", "result": "", "table_status": "1", "timer": 40, "status": "ACTIVE", "updated": null, "created": "2021-06-27T06:43:28.514426+09:00", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "beads": "ecaebbeaeiaaeaeiiaafeafaaeeeaeeeeaee", "winning_cards": "00,00,00,00,00,00,00,00"}, {"id": 893, "game_log": 8140436, "table_no": 7, "table_name": "OK-7", "shoe_no": 592, "game_no": 19, "shoe_update_date": "2021-07-21 04:55:05.415531+09:00", "result": "", "table_status": "1", "timer": 40, "status": "ACTIVE", "updated": null, "created": "2021-06-27T06:44:26.382923+09:00", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "beads": "eiaeeeaaaaeaaegaae", "winning_cards": "00,00,00,00,00,00,00,00"}, {"id": 891, "game_log": 8140450, "table_no": 8, "table_name": "OK-8", "shoe_no": 605, "game_no": 29, "shoe_update_date": "2021-07-21 04:55:19.954040+09:00", "result": "", "table_status": "1", "timer": 40, "status": "ACTIVE", "updated": null, "created": "2021-06-27T06:44:04.933624+09:00", "game_provider": {"id": 9, "game_name": "Okada2", "game_kind": "Okada2", "status": "ACTIVE", "created": "2021-06-08T11:41:10+09:00"}, "beads": "feaaafkaaieiaieijaaaeaaaiaea", "winning_cards": "00,00,00,00,00,00,00,00"}]};
          LobbyRenderUtil.renderGameProviderTable(resp.data);
          // $.ajax({
          //   url: baseUrl + '/bet/room/' + game_provider_id,
          //   method: 'GET',
          //   success: function (resp) {
          //     LobbyRenderUtil.renderGameProviderTable(resp.data);
          //   },
          //   error: function (resp) {},
          //   complete: function () {}
          // });
        },
  
        cashIn: function (page) {
          const self = PlayerLobby;
          if (typeof page == 'undefined') {
            page = 1;
          }
          var params = {
            'page': page,
            'limit': 10
          };
          $.ajax({
            url: baseUrl + '/money/get_cash_in/',
            method: 'POST',
            data: params,
            success: function (resp) {
              if (resp.success) {
                LobbyRenderUtil.renderCashIn(resp.data);
                LobbyRenderUtil.renderTablePagination(resp.paginator);
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
  
        cashOut: function (page) {
          const self = PlayerLobby;
          if (typeof page == 'undefined') {
            page = 1;
          }
          var params = {
            'page': page,
            'limit': 10
          };
          $.ajax({
            url: baseUrl + '/money/get_cash_out/',
            method: 'POST',
            data: params,
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                LobbyRenderUtil.renderCashOut(resp.data);
                LobbyRenderUtil.renderTablePagination(resp.paginator);
              } else {
                alert(resp.data);
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
  
        note (page) {
          const self = PlayerLobby;
          if (typeof page == 'undefined') {
            page = 1;
          }
          var params = {
            'page': page,
            'limit': 10
          };
          $.ajax({
            url: baseUrl + '/com/get_note/',
            method: 'POST',
            data: params,
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                self.noteLookUpData = resp.data;
                LobbyRenderUtil.renderNote(resp.data);
                LobbyRenderUtil.renderTablePagination(resp.paginator);
              }
            },
            error: function (resp) {},
            complete: function () {}
          });
        },
  
        customer(page) {
          const self = PlayerLobby;
          if (typeof page == 'undefined') {
            page = 1;
          }
          const params = {
            'page': page,
            'limit': 10
          };
          $.ajax({
            url: baseUrl + '/com/get_customer/',
            method: 'POST',
            data: params,
            success: function (resp) {
              if (resp.success) {
                self.customerLookUpData = resp.data;
                LobbyRenderUtil.renderCustomer(resp.data);
                LobbyRenderUtil.renderTablePagination(resp.paginator);
              }
            },
            error: function (resp) {},
          });
        },
  
        read_note (note_id) {
          const self = PlayerLobby;
          const params = {
            note_id,
          };
          $.ajax({
            url: baseUrl + '/com/read_note/',
            method: 'POST',
            data: params,
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                const new_note_cnt_ele = $('#note-length');
                let new_note_cnt = parseInt(new_note_cnt_ele.html());
                if (new_note_cnt > 0) new_note_cnt_ele.html(--new_note_cnt);
              }
            },
            error: function (resp) {alert(resp)},
            complete: function () {}
          });
        },
  
        credits: function () {
          const self = PlayerLobby;
          $.ajax({
            url: baseUrl + "/app/user/credits/",
            method: 'GET',
            beforeSend: function () {},
            success: function (resp) {
              if (resp.success) {
                $('#profile-credits-display').html(Helper.format.number.withComma(resp.credits));
                $('#profile-credits-display-lobby').html(Helper.format.number.withComma(resp.credits));
                $('#current_balance').html(Helper.format.number.withComma(resp.credits));
                $('#profile-credits').val(resp.credits);
              }
            },
            error: function (resp) {
            },
            complete: function (resp) {
            }
          })
        },
  
        gameProviders() {
          const self = PlayerLobby;
          $.ajax({
            url: baseUrl + '/bet/game_providers/',
            method: 'GET',
            beforeSend: function () {},
            success: function (resp) {
              // console.log('game_providers', resp);
              if (resp.success) {
                // console.log(resp.data);
                for (const game of resp.data) {
                  let ele = $(`a[class*=game-${game.id}-]`);
                  if (ele) {
                    if (game.status === 'CHECKING') {
                      ele.addClass('repairing');
                    } else if (game.status === 'INACTIVE') {
                      ele.addClass('hidden');
                    }
                  }
                }
              }
            },
            error: function (resp) {
            },
            complete: function (resp) {
            }
          })
        },
      }
    }
};


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
            $(function() {
                Helper.init();
                Broadcast.init();
                PlayerLobby.init();
            });
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
  