const GameUtil = {
  flvPlayer() {
    const self = PlayerGame;
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('movie_pnl');
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        // isLive: true,
        enableStashBuffer: true,
        hasVideo: false,
        url: self.video_url,
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();
    } else {
      $('.not-supported').css('display', 'block');
    }
  },

  renderPlayer: function (stream_link, stream_name) {
    if (self.gameProviderVelocity) {
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
        if (flvjs.isSupported()) {
          var videoElement = document.getElementById('movie_pnl');
          var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            isLive: true,
            hasVideo: true,
            url: self.gameHashId + table_name + 'table1'
          });
          flvPlayer.attachMediaElement(videoElement);
          flvPlayer.load();
          flvPlayer.play();
        } else {
          $('.not-supported').css('display', 'block');
        }
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

window['GameUtil'] = GameUtil;
