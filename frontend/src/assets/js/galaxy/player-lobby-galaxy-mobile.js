const PlayerLobby = {
  scoreBoardFlag: 0,
  gameTableFlag: 0,
  renderFlag: 0,
  gameMaximumBetLookUpData: [],
  gameProviderId: 0,
  roomData: [],
  roomTimer: null,

  isVip: false,
  vipUrl: null,

  sampleBead: '',
  tableLimitData: [],
  popUpNoticeData: [],
  noteLookUpData: [],
  customerLookUpData: [],

  init: function () {
    var self = this;
    self.user_level = parseInt($('#level').val());

    self.api.post.gameMaximumBet();
    self.api.get.tableLimit();
    self.addEvents();

    // setInterval(function () {
    //   if (self.gameTableFlag == 1) {
    //     self.api.get.tableLimit();
    //     self.api.get.gameRoomSelection(self.gameProviderId);
    //   }
    // }, 10000);

    setTimeout(function () {
      var gameProviderId = ($(location).attr('href').split('p=')[1]) ? parseInt($(location).attr('href').split('p=')[1]) : 0;
      if (gameProviderId) {
        $('.game_select_' + gameProviderId).trigger('click');
      } else {
        // PlayerLobby.api.get.popUpNotification();
      }
    }, 1000);

    $(".marker > .game_btn_over > .game_btn.over").css("opacity", "0");
    $(".marker > .game_btn_over > .game_start").css("opacity", "0");
    $('.marker > .game_btn_over').hover(
      function () {
        $(this).children('.game_btn.over').stop().animate({opacity: 1}, 400);
        $(this).children('.game_start').stop().animate({opacity: 1}, 400);
      },
      function () {
        $(this).children('.game_btn.over').stop().animate({opacity: 0}, 400);
        $(this).children('.game_start').stop().animate({opacity: 0}, 400);
      }
    );

    $(".money_over").css("opacity", "0");
    $('.money_btn > li > .money_over').hover(
      function () {
        $(this).stop().animate({opacity: 1}, 400);
      },
      function () {
        $(this).stop().animate({opacity: 0}, 400);
      }
    );

    $('.slideRoll_event').skitter({label: false, numbers: false, interval: 4500, dots: false, hideTools: true});
  },

  countTableSummary: function (bead_road) {
    var self = this;

    var beadArray = {
      'banker': 0,
      'player': 0,
      'tie': 0
    };

    if (bead_road != null) {
      for (i = 0; i <= bead_road.length; i++) {
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
    var self = this;

    $('.question').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.renderQuestion();
    });

    $('.teamviewer').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.renderTeamViewer();
    });

    $('li[class*=game_info]').unbind('click').bind('click', function (e) {
      e.preventDefault();
      var id = $(this).attr('class').split('_')[2];
      self.renderGameInfo(id);
    });

    $('.convert_proceed').unbind('click').bind('click', function (e) {
      e.preventDefault();

      var amount = $('#current_points').val().trim();

      if (parseInt($('#profile-bonus').val().trim())) {
        if (confirm(`${SWITCH_POINTS_ASK_CONTINUATION}: ${amount}`)) {
          self.api.get.convertBonus();
        }
      }
    });

    $('#btn-profile').unbind('click').bind('click', function (e) {
      e.preventDefault();
//      LobbyRenderUtil.renderProfile();
      $('.sub-screen').hide();
      $('#mainpage').hide();
      self.api.post.getProfileInfo();
      $('#profile_password').val('');
      $('#profile_password_confirmation').val('');
      $('#info-modal').show();
      $("div.shy-menu").removeClass("is-open");
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

    $('.btn-back').unbind('click').bind('click', function (e) {
      e.preventDefault();
      if ( self.roomTimer ){
        clearInterval(self.roomTimer);
        self.roomTimer = null;
      }
      $('.sub-screen').hide();
      $('#mainpage').show();
    });

    // $('.my_btn > .profile').unbind('click').bind('click', function (e) {
    //   e.preventDefault();
    //   LobbyRenderUtil.renderProfile();
    // });

    $('.btn_customer').unbind().bind('click', function (e) {
      e.preventDefault();
      if ( self.roomTimer ){
        clearInterval(self.roomTimer);
        self.roomTimer = null;
      }
      self.renderFlag = 5;
      self.api.get.customer();
      $('.sub-screen').hide();
      $('#mainpage').hide();
      $('#customer-modal').show();
      $("div.shy-menu").removeClass("is-open");
    });

    $('a[class*=customer-detail-]').unbind().bind('click', function (e) {
      e.preventDefault();
      const customer_id = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);
      const data = self.customerLookUpData.find(x => x.id === customer_id);
      $('#view-customer-title').html(data.title);
      $('#view-customer-content').html(data.content);
      $('#view-customer-answer').html(data.answer);
      $('#customer-question-time').html(Helper.format.date.showDate(data.created));

      // $('#view-customer-modal').modal({
      //   backdrop: 'static',
      //   keyboard: false
      // });
      $('.sub-screen').hide();
      $('#mainpage').hide();
      $('#view-customer-modal').show();
    });

    $('a[class*=note-detail-]').unbind().bind('click', function (e) {
      e.preventDefault();
      const note_id = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);
      const data = self.noteLookUpData.find(x => x.id === note_id);
      if (data.status === 'PENDING') self.api.get.read_note(note_id);
      data.status = 'DONE';

      $('#view-note-title').html(data.title);
      $('#view-note-content').html(data.content);
      $('#note-time').html(Helper.format.date.showDate(data.created));

      $('.sub-screen').hide();
      $('#mainpage').hide();
      $('#view-note-modal').show();
    });


    $('#btn-customer-add').unbind('click').bind('click', function (e) {
      e.preventDefault();
      $('#customer-add-modal-form')[0].reset();
      $('.sub-screen').hide();
      $('#mainpage').hide();
      $('#customer-add-modal').show();
    });

    $('#btn-customer-send').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.api.post.addCustomer();
    });

    $('.my_info > .bonus').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.renderBonusPoint();
    });

    $('.bank_request').unbind('click').bind('click', function (e) {
      e.preventDefault();
      Helper.confirm.ok(`${CONFIRM}`, `${BANK_REQUEST_INQUIRY}`, function () {
        self.api.get.bankRequest();
      });
    });

    $('.msg_operator').unbind('click').bind('click', function (e) {
      e.preventDefault();
      $('.chat_list div').remove();
      self.api.get.inbox();
    });

    $('#btn-send-message').unbind().bind('click', function (e) {
      e.preventDefault();

      if ($('#reply-message').val()) {
        self.api.post.sendMessage();
      }
    });

    $('#reply-message').unbind().bind('keypress', function (e) {
      if (e.which == 13) {
        $('#btn-chat').trigger('click');
      }
    });

    $('#btn-chat').unbind().bind('click', function (e) {
      e.preventDefault();
      self.api.post.sendMessage();
    });

    $('a[class*=popupnotice], div[class*=popupnotice]').unbind('click').bind('click', function (e) {
      e.preventDefault();
      var id = $(this).attr('class').split('-')[1];
      var data = self.getSelectedNotice(id);
      self.renderSelectedNotice(data);
    });

    $('.more_notice').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.renderNoticeList(self.popUpNoticeData);
    });

    $('.chat-close').unbind('click').bind('click', function (e) {
      e.preventDefault();
      $('#chat_window_1').hide();
    });

    $('a[class*=game_select], button[class*=game_select]').unbind('click').bind('click', function (e) {
      e.preventDefault();
      // LobbyRenderUtil.renderTableModal();
      // self.scoreBoardFlag = 0;
      // self.gameTableFlag = 1;
      // self.gameProviderId = $(this).attr('class').split(' ')[2].split('_')[2];
      // self.api.get.gameRoomSelection(self.gameProviderId);
      $("div.shy-menu").removeClass("is-open");
      $("#mainpage").hide();
      $(".sub-screen").hide();
      $('.vegas_loader').show();
  
      self.scoreBoardFlag = 0;
      self.gameTableFlag = 1;
      self.gameProviderId = $(this).attr('class').split(' ')[2].split('_')[2];
      self.roomData = [];

      if (!self.scoreBoardFlag) {
        $('#standard-table div').remove();
        $('select[class*=game-table-max-bet] option').remove();
      }

      let img_url = '../static/css/jin/mobile/images/m_g1.jpg';
      let game_name = 'Okada';
      if (self.gameProviderId === '1') {
        img_url = '../static/css/jin/mobile/images/m_g5.jpg';
        game_name = 'Evolution';
      } else if (self.gameProviderId === '2') {
        img_url = '../static/css/jin/mobile/images/m_g3.jpg';
        game_name = 'CAGAYAN';
      } else if (self.gameProviderId === '3') {
        img_url = '../static/css/jin/mobile/images/m_g4.jpg';
        game_name = 'ResortWorldManilla';
      } else if (self.gameProviderId === '4') {
        img_url = '../static/css/jin/mobile/images/m_g7.jpg';
        game_name = 'Oriental';
      } else if (self.gameProviderId === '5') {
        img_url = '../static/css/jin/mobile/images/m_g8.jpg';
        game_name = 'MICROMING';
      } else if (self.gameProviderId === '6') {
        img_url = '../static/css/jin/mobile/images/m_g2.jpg';
        game_name = 'Solaire';
      } else if (self.gameProviderId === '7') {
        img_url = '../static/css/jin/mobile/images/m_g6.jpg';
        game_name = 'Stotsenberg';
      } else if (self.gameProviderId === '8') {
        img_url = '../static/css/jin/mobile/images/m_g1.jpg';
        game_name = 'OKADA';
      } else if (self.gameProviderId === '9') {
        img_url = '../static/css/bora/assets/img/game_okada_speed.png';
        game_name = 'OKADA2';
      } else if (self.gameProviderId === '10') {
        img_url = '../static/css/bora/assets/img/game_newworld_speed.png';
        game_name = 'ResortWorldManilla2';
      }
      // console.log($("#arr_table_cnt").val());
      let arr_table_cnt = JSON.parse($("#arr_table_cnt").val().replace(/(\d+):/g,"\"$1\":"));
      if ( parseInt(arr_table_cnt[self.gameProviderId]) > 0 ){
        $('#selected_game_logo').removeClass('grey');
        $('#selected_game_log_status').css('display','none');
      } else {
        $('#selected_game_logo').addClass('grey');
        $('#selected_game_log_status').css('display','flex');
      }
      $('#selected_game_logo').attr('src', img_url);
      $('select[name^="select_game_type"] option[selected="selected"]').attr("selected", false);
      $("#select_game_type option[value='"+self.gameProviderId+"']").attr("selected", true);
      $("#select_game_type").val(self.gameProviderId);
      $('#room-modal').show();

      if ( self.roomTimer ){
        clearInterval(self.roomTimer);
        self.roomTimer = null;
      }
      self.api.get.gameRoomSelection1(self.gameProviderId);
      self.roomTimer = setInterval(function () {
        self.api.get.gameRoomSelection1(self.gameProviderId);
      }, 7000);
    });

    $( "#select_game_type" ).change(function() {
      let id = $(this).val();
      $('.game_select_' + id).trigger('click');
    });

    $('.btn-note').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.renderFlag = 3;
      self.api.get.note();
      if ( self.roomTimer ){
        clearInterval(self.roomTimer);
        self.roomTimer = null;
      }
      $("#mainpage").hide();
      $(".sub-screen").hide();
      $("#note-modal").show();
      $("div.shy-menu").removeClass("is-open");
    });

    $('#btn-cashinout-history').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.renderFlag = 1;
      self.api.get.cashIn();
      $("#mainpage").hide();
      $(".sub-screen").hide();
      $("#cashin-modal").show();
      $("div.shy-menu").removeClass("is-open");
    });

    $('#btn-switchtocashout').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.renderFlag = 2;
      self.api.get.cashOut();
      $("#mainpage").hide();
      $(".sub-screen").hide();
      $("#cashout-modal").show();
    });
    
    $('#btn-switchtocashin').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.renderFlag = 1;
      self.api.get.cashIn();
      $("#mainpage").hide();
      $(".sub-screen").hide();
      $("#cashin-modal").show();
    });

    $('#btn-logout').unbind('click').bind('click', function (e) {
      e.preventDefault();
      window.location = baseUrl + '/logout';
    });

    $('#btn-vip-proceed').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.api.post.checkVipCode();
    });

    $('a[class*=page-button-]').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.page = parseInt($(this).attr('class').split(' ')[0].split('-')[2]);

      if (self.renderFlag == 1) {
        self.api.get.cashIn(self.page);
      } else if (self.renderFlag == 2) {
        self.api.get.cashOut(self.page);
      } else if (self.renderFlag == 3) {
        self.api.get.note(self.page);
      } else if (self.renderFlag == 4) {
        self.api.post.gameBetHistory(self.page);
      } else if (self.renderFlag == 5) {
        self.api.get.customer(self.page);
      }
    });

    $('#btn-bet-history').unbind('click').bind('click', function (e) {
      e.preventDefault();
      if ( self.roomTimer ){
        clearInterval(self.roomTimer);
        self.roomTimer = null;
      }
      $("div.shy-menu").removeClass("is-open");
      self.renderFlag = 4;
      self.api.post.gameBetHistory();
      $("#mainpage").hide();
      $(".sub-screen").hide();
      $("#bet-modal").show();
    });
    
    $('.cashin').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.api.get.cashIn();
    });

    $('.btn-cashin-request').unbind('click').bind('click', function (e) {
      e.preventDefault();
      $('#cashin-request-modal-form > table > tr > td').removeClass('has-error');
      $('#cashin-request-modal-form > table > tr > td > span').html('');
      $('#cashin-request-modal-form')[0].reset();
      $('#cashin_account').html('');
      $('#btn-cashin-proceed').attr('disabled', 'disabled');
      if ( self.roomTimer ){
        clearInterval(self.roomTimer);
        self.roomTimer = null;
      }
      $("#mainpage").hide();
      $(".sub-screen").hide();
      self.api.post.getProfileInfo();
      $("#cashin-request-modal").show();
    });

    $('.btn-cashout-request').unbind('click').bind('click', function (e) {
      e.preventDefault();
      $('#cashout-request-modal-form > table > tr > td').removeClass('has-error');
      $('#cashout-request-modal-form > table > tr > td > span').html('');
      $('#cashout-request-modal-form')[0].reset();
      $('#current_balance').html($('#profile-credits-display').html());
      $("#mainpage").hide();
      if ( self.roomTimer ){
        clearInterval(self.roomTimer);
        self.roomTimer = null;
      }
      $(".sub-screen").hide();
      self.api.post.getProfileInfo();
      $("#cashout-request-modal").show();
    });

    $('.cashin_request').unbind('click').bind('click', function (e) {
      e.preventDefault();
      LobbyRenderUtil.renderCashIn();
    });

    $('button[class*=cashinremove]').unbind('click').bind('click', function (e) {
      e.preventDefault();
      var id = $(this).attr('class').split(' ')[0].split('-')[1];

      if (confirm('입금요청을 취소하시겠습니까?')) {
        self.api.get.cashInCancelRequest(id);
      }
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
      if (cashInAmount)
        cashInAmount = Helper.format.number.withComma(cashInAmount);

      if (confirm('충전요청 ' + cashInAmount)) {
        self.api.post.cashIn();
      }
    });

    $('.cashout').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.api.get.cashOut();
    });

    $('.cashout_request').unbind('click').bind('click', function (e) {
      e.preventDefault();
      LobbyRenderUtil.renderCashOut();
    });

    $('button[class*=cashoutremove]').unbind('click').bind('click', function (e) {
      e.preventDefault();
      var id = $(this).attr('class').split(' ')[0].split('-')[1];

      if (confirm(`${WIDTHRAW_REQUEST_CANCEL}`)) {
        self.api.get.cashOutCancelRequest(id);
      }
    });

    $('#btn-cashout-proceed').unbind('click').bind('click', function (e) {
      e.preventDefault();

      var cashOutAmount = parseInt(Helper.format.number.removeComma($('#cashout_amount').val())) || 0;

      if (cashOutAmount)
        cashOutAmount = Helper.format.number.withComma(cashOutAmount);

      if (confirm(`${WITHDRAW_REQUEST} ${cashOutAmount}`)) {
        self.api.post.cashOut();
      }
    });

    $('#center_close, .close, .close_popup').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.gameTableFlag = 0;
      $('#wrap_cover').hide();
      $('#center_box, .sub_title, .sub_wrap').removeAttr('style');
      $('#center_contents div').remove();
//      clearInterval(self.tableRefresh);
    });
  },

  addTableSelectionEvents: function () {
    var self = this;

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
      var selectedBetSettings = $('#select_bet_limit').val();

      window.location = baseUrl + '/game?p=' + params[3] + '&t=' + params[4] + '&m=' + selectedBetSettings;

      // var is_vip = parseInt($('.game-table-max-bet-' + params[4] + ' :selected').attr('class').split('-')[2]);
      //
      // if (is_vip) {
      //   self.renderVIP();
      //   self.vipUrl = baseUrl + '/game?p=' + params[3] + '&t=' + params[4] + '&m=' + selectedBetSettings;
      // } else {
      //   window.location = baseUrl + '/game?p=' + params[3] + '&t=' + params[4] + '&m=' + selectedBetSettings;
      // }
    });
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

  getSelectedTableLimit: function (table_name) {
    var self = this;
    var index = 0;

    $.each(self.tableLimitData, function (key, val) {
      if (val.table_name == table_name) {
        index = key;
      }
    });

    return self.tableLimitData[index];
  },

  getSelectedNotice: function (id) {
    var self = this;
    var index = 0;

    $.each(self.popUpNoticeData, function (key, val) {
      if (val.id == id) {
        index = key;
      }
    });

    return self.popUpNoticeData[index];
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
      gameLobby: function () {
        const self = PlayerLobby;

        $.ajax({
          url: baseUrl + '/game/lobby',
          method: 'POST',
          data: {
            '_token': $('#_token').val()
          },
          beforeSend: function () {
            $(".preloader").show();
          },
          success: function (resp) {
            LobbyRenderUtil.renderGameProvider(resp.data);
          },
          error: function (resp) {},
          complete: function () {
            $(".preloader").fadeOut();
          }
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

      gameSession: function (game_provider_id, game_provider_table_id) {
        var self = PlayerLobby;

        $.ajax({
          url: baseUrl + '/game/session',
          method: 'POST',
          data: {
            'game_provider_id': game_provider_id,
            'game_provider_table_id': game_provider_table_id,
            '_token': $('#_token').val()
          },
          beforeSend: function () {},
          success: function (resp) {
            if (resp.data.game_provider_id && resp.data.game_provider_table_id) {
              window.location = baseUrl + '/game';
            }
          },
          error: function (resp) {},
          complete: function () {}
        });
      },

      gameBetHistory: function (page, paginate) {
        var self = PlayerLobby;

        if (typeof page == 'undefined') {
          page = 1;
        }

        $.ajax({
          url: baseUrl + '/game/bet-history',
          method: 'POST',
          data: {
            '_token': $('#_token').val(),
            'page': page,
            'limit': 10
          },
          beforeSend: function () {},
          success: function (resp) {
            if (resp.success) {
              self.renderBetHistory(resp.data.data, paginate);
            }
          },
          error: function (resp) {},
          complete: function () {}
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
              $('.btn-back').click();
             // console.log(resp);
            }
          },
          error(resp) {},
          complete() {            
            $('#btn-profile-save').removeAttr('disabled');
          }
        });
      },

      cashIn: function () {
        var self = PlayerLobby;

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
              Helper.confirm.ok(`${CONFIRM}`, `${SUCCESS}`);
//              $('#center_close').trigger('click');
              $('.btn-back').trigger('click');
            } else {
              alert(resp.data);
            }
          },
          error(err) {
            alert(err);
          },
          complete: function () {
            $('btn-cashin-proceed').removeAttr('disabled');
          }
        });
      },

      cashOut: function () {
        var self = PlayerLobby;

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
              Helper.confirm.ok(`${CONFIRM}`, `${SUCCESS}`);
              // $('#center_close').trigger('click');
              $('.btn-back').trigger('click');

              $('#profile-credits').val(resp.remaining_balance);
              $('#profile-credits-display').html(Helper.format.number.withComma(resp.remaining_balance));
              $('#profile-credits-display-lobby').html(Helper.format.number.withComma(resp.remaining_balance));
              $('#current_balance').html(Helper.format.number.withComma(resp.remaining_balance));
            } else {
              alert(resp.data);
            }
          },
          error(err) {
            alert(err)
          },
          complete: function () {
            $('#btn-cashout-proceed').removeAttr('disabled');
          }
        });
      },

      checkVipCode: function () {
        var self = PlayerLobby;

        $.ajax({
          url: baseUrl + '/game/vip-code/check',
          method: 'POST',
          data: {
            'vip_code': $('#vip_code').val().trim(),
            '_token': $('#_token').val()
          },
          beforeSend: function () {
            $('#btn-vip-proceed').attr('disabled', 'disabled');
          },
          success: function (resp) {
            if (resp.success) {
              window.location = self.vipUrl;
            }
          },
          error: function (resp) {
            self.showErrors(resp.responseJSON.errors);
          },
          complete: function () {
            $('#btn-vip-proceed').removeAttr('disabled').html(`${SUBMIT}`);
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
              LobbyRenderUtil.renderBetHistory(resp.data, resp.paginator);
            }
          },
          error(resp) {},
          complete() {}
        });
      },

      sendMessage: function () {
        var self = PlayerLobby;

        var params = {
          'inbox_id': self.inboxId,
          'message': $('#reply-message').val(),
          'position': 0,
          '_token': $('#_token').val()
        };

        $.ajax({
          url: baseUrl + '/inbox/create',
          method: 'POST',
          data: params,
          beforeSend: function () {
            $('#btn-chat').attr('disabled', 'disabled').html('...');
          },
          success: function (resp) {
            if (resp.success) {
              self.renderChat(resp.data, 0);
              $('#reply-message').val('');
            }
          },
          error: function (resp) {},
          complete: function () {
            $('#btn-chat').removeAttr('disabled').html(`${IN_PROGRESS}`);
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
              $('.btn_customer').click();
            }
          },
          error: function (err) {
            alert(err)
          },
        });
      }
    },

    get: {
      credits: function () {
        const self = PlayerLobby;
        $.ajax({
          url: baseUrl + "/app/user/credits/",
          method: 'GET',
          beforeSend: function () {},
          success: function (resp) {
            if (resp.success) {
              $('#profile-credits').val(resp.credits);
              $('#profile-credits-display').html(Helper.format.number.withComma(resp.credits));
              $('#profile-credits-display-lobby').html(Helper.format.number.withComma(resp.credits));
              $('#current_balance').html(Helper.format.number.withComma(resp.credits));
            }
          },
          error: function (resp) {
          },
          complete: function (resp) {
          }
        })
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
          error: function (resp) {alert(error)},
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
              LobbyRenderUtil.renderCustomer(resp.data, resp.paginator);
            }
          },
          error: function (resp) {},
        });
      },
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
        $.ajax({
          url: baseUrl + '/bet/room/' + game_provider_id,
          method: 'GET',
          success: function (resp) {
            if ($('#wrap_cover').css('display') == 'block') {
              LobbyRenderUtil.renderGameProviderTable(resp.data);
            } else {
              LobbyRenderUtil.renderGameProviderTable(resp.data);
            }
          },
          error: function (resp) {},
          complete: function () {}
        });
      },

      gameRoomSelection1: function (game_provider_id) {
        const self = PlayerLobby;
        $.ajax({
          url: baseUrl + '/bet/room/' + game_provider_id,
          method: 'GET',
          success: function (resp) {
              LobbyRenderUtil.renderGameProviderTable1(resp.data);
          },
          error: function (resp) {},
          complete: function () {}
        });
      },

      gameLeaveRoom: function () {
        var self = PlayerLobby;

        $.ajax({
          url: baseUrl + '/game/table/leave/by/account',
          method: 'GET',
          beforeSend: function () {},
          success: function (resp) {
            if (resp.success) {}
          },
          error: function (resp) {},
          complete: function () {}
        });
      },

      inbox: function () {
        var self = PlayerLobby;

        if (typeof page == 'undefined') {
          page = 1;
        }

        var params = {
          'page': page,
          'limit': 15
        };

        $.ajax({
          url: baseUrl + '/inbox/all',
          method: 'GET',
          data: params,
          beforeSend: function () {},
          success: function (resp) {
            if (resp.success) {
              if (resp.data.data.length) {
                self.renderChat(resp.data.data[0].reply, 1);
                self.inboxId = resp.data.data[0].id;
                $('#chat_window_1').show();
                self.api.get.read(self.inboxId);
              } else {
                $('#chat_window_1').show();
              }
            }
          },
          error: function (resp) {},
          complete: function () {}
        });
      },

      read: function (id) {
        var self = PlayerLobby;

        $.ajax({
          url: baseUrl + '/inbox/read/' + id,
          method: 'GET',
          beforeSend: function () {},
          success: function (resp) {},
          error: function (resp) {},
          complete: function () {}
        });
      },

      bankRequest: function () {
        var self = PlayerLobby;

        $.ajax({
          url: baseUrl + '/bank/request',
          method: 'GET',
          beforeSend: function () {},
          success: function (resp) {
            if (resp.success) {
              // Helper.confirm.ok('확인', '입금 계좌를 문의 하시겠습니까?');
            }
          },
          error: function (resp) {},
          complete: function () {}
        });
      },

      popUpNotification: function () {
        var self = PlayerLobby;

        $.ajax({
          url: baseUrl + '/login/popup/all',
          method: 'GET',
          beforeSend: function () {},
          success: function (resp) {
            if (resp.success) {
              if (resp.data.length) {
                self.renderNotice(resp.data);
                self.renderPopupNotif(resp.data);
              }
            }
          },
          error: function (resp) {},
          complete: function () {}
        });
      },

      cashIn: function (page) {
        const self = PlayerLobby;
        $('#cashin-content tr').remove();
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
              LobbyRenderUtil.renderCashInList(resp.data, resp.paginator);
            }
          },
          error: function (resp) {},
          complete: function () {}
        });
      },

      cashOut: function (page) {
        const self = PlayerLobby;
        $('#cashout-content tr').remove();
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
              LobbyRenderUtil.renderCashOutList(resp.data, resp.paginator);
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
              LobbyRenderUtil.renderNote(resp.data, resp.paginator);
            }
          },
          error: function (resp) {},
          complete: function () {}
        });
      },

      cashInCancelRequest: function (id) {
        var self = PlayerLobby;

        $.ajax({
          url: baseUrl + '/credit/cashin/cancel/' + id,
          method: 'GET',
          beforeSend: function () {
            Helper.scroll.toTop();
          },
          success: function (resp) {
            Helper.confirm.ok(`${CONFIRM}`, `${SUCCESS}`);
            self.api.get.cashIn();
          },
          error: function (resp) {},
          complete: function () {}
        });
      },

      cashOutCancelRequest: function (id) {
        var self = PlayerLobby;

        $.ajax({
          url: baseUrl + '/credit/cashout/cancel/' + id,
          method: 'GET',
          beforeSend: function () {
            Helper.scroll.toTop();
          },
          success: function (resp) {
            Helper.confirm.ok(`${CONFIRM}`, `${SUCCESS}`);
            self.api.get.cashOut();
          },
          error: function (resp) {},
          complete: function () {}
        });
      },

      convertBonus: function () {
        var self = PlayerLobby;

        $.ajax({
          url: baseUrl + '/convert/bonus',
          method: 'GET',
          beforeSend: function () {
            $('.convert_proceed').attr('disabled', 'disabled');
          },
          success: function (resp) {
            if (resp.success) {
              Helper.confirm.ok(`${CONFIRM}`, `${MOBILE}`);
              $('#profile-credits').val(resp.data.credits);
              $('#profile-credits-display').html(Helper.format.number.withComma(resp.data.credits));
              $('#profile-credits-display-lobby').html(Helper.format.number.withComma(resp.data.credits));
              $('#current_balance').html(Helper.format.number.withComma(resp.data.credits));
              $('#profile-bonus').val(resp.data.bonus);
              $('#profile-bonus-display').html(Helper.format.number.withComma(resp.data.bonus));
            }
          },
          error: function (resp) {
            $('.convert_proceed').removeAttr('disabled');
          },
          complete: function (resp) {
            $('.convert_proceed').removeAttr('disabled');
          }
        })
      }
    }
  }
};
window['PlayerLobby'] = PlayerLobby;

$(function () {
  PlayerLobby.init();
});
