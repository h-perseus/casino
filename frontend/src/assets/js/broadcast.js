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
        self.api.post.updateNotification();
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
window['Broadcast'] = Broadcast;

$(function () {
  Broadcast.init();
});
