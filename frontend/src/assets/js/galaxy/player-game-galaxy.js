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
  language: $('html').attr('lang'),
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
    curGameInfo = window.localStorage.getItem('gameInfo');
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

        $.ajax({
          url: baseUrl + '/bet/table/leave/' + $('#room-name').html(),
          method: 'GET',
          beforeSend: function () {},
          success: function (resp) {
            if (resp.success) {
              // self.monitorPlayerLeave();
              if (url) {
                window.location = url;
              }
            }
          },
          error: function (resp) {
            alert(resp.error);
          },
          complete: function () {}
        });
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

        $.ajax({
          url: baseUrl + '/bet/bet_history/',
          method: 'POST',
          data: {
            '_token': $('#_token').val(),
            'page': page,
            'limit': 10
          },
          beforeSend: function () {
          },
          success: function (resp) {
            if (resp.success) {
              RenderUtil.renderBetHistory(resp.data);
              RenderUtil.renderBetHistoryTablePagination(resp.paginator);
            }
          },
          error: function (resp) {},
          complete: function () {}
        });
      },
    }
  }
};

window['PlayerGame'] = PlayerGame;

$(function () {
  PlayerGame.init();
  if (typeof isMobile === 'undefined' || !isMobile) {
    const ori_width = 1361;
    const ori_height = 780.266;
    const win_width = $(window).width();
    const win_height = $(window).height();
    // const scale_val = ori_width / win_width;
    let scale_val = 0;
    const scale_width = win_width / ori_width;
    const scale_height = (win_height-15) / ori_height;
    if ((ori_height * scale_width) > win_height) {
      scale_val = scale_height;
      $('.viewport-wrapper').css('width', `1361px`);
      $('.viewport-wrapper').css('zoom', scale_val);
      $('.viewport-wrapper').css('height', `780.266px`);
    } else {
      scale_val = scale_width;
    }
    $('.viewport-wrapper').css('width', `1361px`);
    $('.viewport-wrapper').css('zoom', scale_val);
    $('.viewport-wrapper').css('height', `780.266px`);

    $( window ).resize(function() {
      const win_width = $(window).width();
      const win_height = $(window).height();
      // const scale_val = ori_width / win_width;
      let scale_val = 0;
      const scale_width = win_width / ori_width;
      const scale_height = (win_height-15) / ori_height;
      if ((ori_height * scale_width) > win_height) {
        scale_val = scale_height;
      } else {
        scale_val = scale_width;
      }
      $('.viewport-wrapper').css('width', `1361px`);
      $('.viewport-wrapper').css('zoom', scale_val);
      $('.viewport-wrapper').css('height', `780.266px`);
    });
  }

  // if ($("#api_user").val() == "yes") {
  //   const myVar = setInterval(realtime, 10000);
    realtime();

    function realtime() {
      PlayerGame.credits();
    }
  // }
});
