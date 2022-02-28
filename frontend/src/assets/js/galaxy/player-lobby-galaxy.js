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
      var gameProviderId = ($(location).attr('href').split('p=')[1]) ? parseInt($(location).attr('href').split('p=')[1]) : 0;
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
      $('.table-selection-modal').modal('show').on('hidden.bs.modal', function () {
      });
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
          error: function (resp) {alert(error)},
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
window['PlayerLobby'] = PlayerLobby;

$(function () {
  PlayerLobby.init();
  var self = PlayerLobby;
  if (typeof isMobile === 'undefined' || !isMobile) {
    const ori_width = 1300;
    const ori_height = 930;
    const win_width = $(window).width();
    const win_height = $(window).height();
    // const scale_val = ori_width / win_width;
    let scale_val = 0;
    const scale_width = win_width / ori_width;
    const scale_height = win_height / ori_height;
    if ((ori_height * scale_width) > win_height) {
      scale_val = scale_height;
      // $('.lobby-body').css('width', `${ori_width}px`);
      $('.lobby-body').css('zoom', scale_val);
      // $('.lobby-body').css('height', `${win_height - 50}px`);
    } else {
      scale_val = scale_width;
      $('.lobby-body').css('zoom', scale_val);
    }
    $('.announcement').attr('style', '');

    $( window ).resize(function() {
      const win_width = $(window).width();
      const win_height = $(window).height();
      // const scale_val = ori_width / win_width;
      let scale_val = 0;
      const scale_width = win_width / ori_width;
      const scale_height = win_height / ori_height;
      if ((ori_height * scale_width) > win_height) {
        scale_val = scale_height;
        // $('.lobby-body').css('width', `${ori_width}px`);
        $('.lobby-body').css('zoom', scale_val);
        // $('.lobby-body').css('height', `${win_height - 50}px`);
      } else {
        scale_val = scale_width;
        $('.lobby-body').css('zoom', scale_val);
      }
    });
  }

  // var myVar = setInterval(realtime, 5000);

  // realtime();
  function realtime() {
    PlayerLobby.api.get.credits();
  }

  // let cookiedata = document.cookie;
  //
  //   if (cookiedata.indexOf("maindiv=dong1") > 0) {
  //     //document.all['divpop'].style.visibility = "visible";
  //   } else {
  //     document.all['divpop'].style.visibility = "hidden";
  //   }
  //
  //   if (cookiedata.indexOf("maindiv2=dong1") > 0) {
  //     //document.all['divpop2'].style.visibility = "visible";
  //   } else {
  //     document.all['divpop2'].style.visibility = "hidden";
  //   }
});
