const LobbyRenderUtil = {
  renderGameProvider (data) {
    const self = PlayerLobby;

    $.each(data, function (key, val) {

      var gameProviderImage = null;

      if (val.id == 1) {
        gameProviderImage = 'midas';
      } else if (val.id == 2) {
        gameProviderImage = 'cagayan';
      } else if (val.id == 3) {
        gameProviderImage = 'cod';
      } else if (val.id == 5) {
        gameProviderImage = 'real_cagayan'
      }

      var elemHtml = `<div class="game-${val.id}-${val.name} game-provider">
        <div class="provider-logo ${gameProviderImage}">
        <div class="rotating-circle"></div>
        </div>
        <div class="provider-name">
        <h5 class="provider-title">${val.name}</h5>
        <button class="btn btn-play">${ENTRANCE}</button>
        </div>
        </div>`;

      $('#game-provider').append(elemHtml);
    });

    self.addEvents();
  },

  renderGameProviderTable(data) {
    const self = PlayerLobby;

    if (!self.scoreBoardFlag) {
      $('.sub_wrap_contents div').remove();
      $('select[class*=game-table-max-bet] option').remove();
    }

    $('.sub_wrap').css('transform', 'scale(0.95)');
    $('.sub_wrap').css('margin-left', '-2%');

    $.each(data, function (key, val) {

      let beads = {
        'player': 0,
        'banker': 0,
        'tie': 0
      };

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
      // const table_status = Helper.baccarat.showStatus(val.table_status);

      if (!self.scoreBoardFlag) {

        var elemHtml = `<div class="col-xs-12 col-md-6">
          <div class="contents table-selection-modal">
            <div class="overlay overlay-${val.id}">
              <h1><strong>${tableNotice}</strong></h1>
            </div>
            <div class="panel panel-default" style="background: #fff;">
              <div class="panel-header" style="background:linear-gradient(#56daf6, #0e3e47);text-align:left!important;">
                <div class="tabs">
                  <a href="javascript:void(0)" class="game-table-selected-${val.game_provider.id}-${val.id} game-table">${val.table_name}</a>
                </div>
                <div class="pull-right">
                  <select class="game-table-max-bet-${val.id} form-control" style="margin: 5px 0px 0px -10px;"></select>
                </div>
              </div>
              <div class="panel-body p-0 m-b-10 m-l-10 m-t-0" style="height: 95px; overflow: hidden;">
                <div class="active" style="margin-top: -10px;">
                  <div class="text-center" style="height: 90px;">
                    <div class="pnl_2_mini bead-${val.id} m-t-10"></div>
                  </div>
                </div>
              </div>
              <div class="panel-footer" style="height: 40px;">
                <div class="col-xs-6 col-sm-6 col-md-6 p-0">
                  <span class="m-l-5 fc-blue"><img src="/static/images/game/gt_b_e.png" width="16" alt="" /><span class="player-sum-${val.id}">${beads['player']}</span></span> 
                  <span class="m-l-5 fc-red"><img src="/static/images/game/gt_b_a.png" width="16" alt="" /><span class="banker-sum-${val.id}">${beads['banker']}</span></span> 
                  <span class="m-l-5 fc-green"><img src="/static/images/game/gt_b_i.png" width="16" alt="" /><span class="tie-sum-${val.id}">${beads['tie']}</span></span> 
                </div>
                <div class="col-xs-5 col-sm-3 col-md-3 pull-right b-l" style="margin-top: -14px;">
                  <a href="javascript:void(0)" class="game-table-selected-${val.game_provider.id}-${val.id} btn btn-sm btn-left">
                    <button class="game-table-enter btn btn-primary">${ENTRANCE}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>`;

        $('.sub_wrap_contents').append(elemHtml);
      }

      if (tableOverlay) {
        $('.overlay-' + val.id).show();
      } else {
        $('.overlay-' + val.id).hide();
      }
      LobbyRenderUtil.renderSecondBoardPerTable(val.beads, val.id);

    });

    self.addTableSelectionEvents();

    setTimeout(function () {
      self.scoreBoardFlag = 1;
    }, 1500);
  },


  renderPreloader() {
    var self = PlayerLobby;

    var elemHtml = '<div style="width: 350px; text-align: center; margin-top: 35%;">'
      + '<img src="' + baseUrl + '/static/images/loader/1.gif" style="width: 100px;">'
      + '</div>';

    $('.sub_wrap_contents').append(elemHtml);
  },

  renderProfile() {
    var self = PlayerLobby;

    $('#center_box, .sub_title, .sub_wrap').removeAttr('style');
    $('#center_contents div').remove();

    var popUpData = '';
    var popUpBody = '';

    popUpData = `<table class="info_list" style="min-width:0!important;">'
      <tbody>
        <tr>
          <th width="150">${USERNAME}</th>
          <td class="pl10">
            <b>${$('#username').val()}</b>
          </td>
        </tr>
        <tr>
          <th width="150">${NICKNAME}</th>
          <td class="pl10">
            <b>${$('#nickname').val()}</b>
          </td>
        </tr>
        <tr>
          <th width="150">${MOBILE}</th>
          <td class="pl10">
            <b>${$('#mobile').val()}</b>
          </td>
        </tr>
        <tr>
          <th width="150">${BANK_NAME}</th>
          <td class="pl10">
            <b>${$('#bank_name').val()}</b>
          </td>
        </tr>
        <tr>
          <th width="150">${BANK_ACCOUNT_NAME}</th>
          <td class="pl10">
            <b>${$('#bank_account_name').val()}</b>
          </td>
        </tr>
        <tr>
          <th width="150">${BANK_ACCOUNT_NO}</th>
          <td class="pl10">
            <b>${$('#bank_account_no').val()}</b>
          </td>
        </tr>
      </tbody>
      </table>`;

    var elemHtml = '<div>'
      + '<style type="text/css">'
      + '.sub_title.sub_title_mypage {background-position: 0 -225px;}'
      + '</style>'
      + '<div class="sub_title sub_title_mypage"></div>'
      + '<div class="sub_wrap mypage">'
      + '<ul class="mypage_h">'
      // + '<li class="modify active">내정보관리</li>'
      + '</ul>'
      + '<div class="m_tab mypage_tab1">'
      + popUpData
      + '</div>'
      + '</div>'
      + '</div>';

    $('#center_contents').append(elemHtml);
    $('#wrap_cover').show();
  },

  renderBonusPoint() {
    var self = PlayerLobby;

    $('#center_contents div').remove();

    var elemHtml = `<div>'
      <style type="text/css">
        .sub_title_join {background-position:0 0;}
        .sub_input_wrap{ height:auto}
      </style>
      <div class="sub_title sub_title_join"></div>
      <div class="sub_wrap">
      <div class="sub_wrap_contents">
      <form name="join_form" id="join_form" method="post" onsubmit="return false">
      <div class="sub_input_wrap sub_input_wrap_left">
      <div class="sub_input">
      <div>${REMAINING_POINTS}: </div>
      <input type="text" id="current_points" class="input_field" disabled required>
      <span class="help-block"></span>
      </div>
      </div>
      </form>
      </div>
      </div>
      <div class="sub_btn convert_proceed">${COMMISSION_TRANSFER}</div>
      </div>`;

    $('#center_contents').append(elemHtml);

    $('#center_box').css({
      'width': '450px',
      'left': '0',
      'right': '0',
      'margin': '0 auto',
      'position': 'absolute'
    });

    $('.sub_title').css({
      'left': '20%'
    });

    $('.sub_btn').css({
      'margin': '15px 0 15px 100px'
    });

    $('#current_points').val($('#profile-bonus').val());
    $('#wrap_cover').show();

    self.addEvents();
  },

  renderVIP() {
    var self = PlayerLobby;

    $('#center_contents div').remove();

    var elemHtml = `<div>'
      <style type="text/css">
        .sub_title_join {background-position:0 0;}
        .sub_input_wrap{ height:auto}
      </style>
      <div class="sub_title sub_title_join"></div>
      <div class="sub_wrap">
      <div class="sub_wrap_contents">
      <form name="join_form" id="join_form" method="post" onsubmit="return false">
      <div class="sub_input_wrap sub_input_wrap_left">
      <div class="sub_input">
      <div>Vip코드를 입력하세요: </div>
      <input type="text" id="vip_code" class="input_field" required>
      <span class="help-block"></span>
      </div>
      </div>
      </form>
      </div>
      </div>
      <div id="btn-vip-proceed" class="sub_btn convert_proceed">${SUBMIT}</div>
      </div>`;

    $('#center_contents').append(elemHtml);

    $('#center_box').css({
      'width': '450px',
      'left': '0',
      'right': '0',
      'margin': '0 auto',
      'position': 'absolute'
    });

    $('.sub_title').css({
      'left': '20%'
    });

    $('.sub_btn').css({
      'margin': '15px 0 15px 100px'
    });

    $('#current_points').val($('#profile-bonus').val());
    $('#wrap_cover').show();

    self.addEvents();
  },

  renderCashOutList(data, paginate) {
    var self = PlayerLobby;

    self.renderFlag = 2;
    
    $('#cashout-content tr').remove();

    $.each(data, function (key, val) {

      var manageButton = '';
      const status = Helper.cash.showStatus(val.status);
      const cashout_amount = Helper.format.number.withComma(val.amount);
      const created = Helper.format.date.showDate(val.created);
      // manageButton = `<button type="button" class="cashoutremove-${val.id} btn btn-danger btn-outline btn-circle btn-xs m-r-5">${CANCEL}</button>`;
      // manageButton = `<button type="button" class="cashoutremove-${val.id} btn btn-danger btn-outline btn-circle btn-xs m-r-5">${CANCEL}</button>`;

      elemHtml = '<tr>'
        + '<td>' + val.account.nick_name + '</td>'
        + '<td>' + cashout_amount + '</td>'
        + '<td>' + status + '</td>'
        + '<td><span class="text-muted"><i class="fa fa-clock-o"></i> ' +created + '</span></td>'
        + '<td>'
        + manageButton
        + '</td>'
        + '</tr>';
        
      $('#cashout-content').append(elemHtml);
    });
    let height = $('#cashout-content').parents('.content_box').height()+20;
    $('#cashout-content').parents('.content_box').parent().css('height',height+'px');

    LobbyRenderUtil.renderTablePagination(paginate);
  },

  renderGameProviderTable1(data) {
    const self = PlayerLobby;
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
  
      let table_status = '';
      if (val.table_status === '1') {
        table_status = `배팅중`;
      } else if (val.table_status === '2') {
        table_status = `배팅마감`;
      } else if (val.table_status === '4') {
        table_status = `정산중`;
      } else {
        table_status = `배팅마감`;
      }

      if (!self.scoreBoardFlag) {
        let elemHtml = `
          <div class="col-xs-12 col-sm-12 col-md-12">
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
          if ( room && room.beads && val.beads.length > room.beads.length) {
            $(`.overlay-button-${val.id}`).addClass('bg-flash');
            $(`.overlay-button-${val.id}`).delay(3000).fadeOut(300, function () {
              $(this).removeClass('bg-flash');
              $(this).show();
            });
          }
        }
      }
      LobbyRenderUtil.renderSecondBoardPerTable1(val.beads, val.id);
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

  renderSecondBoardPerTable1: function (bead_road, table_id) {
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

      LobbyRenderUtil.renderSecondBoardBeadPerTable1(bead_road, table_id);
      LobbyRenderUtil.renderMaximumBet1();
    } else {
      LobbyRenderUtil.renderSecondBoardBeadPerTable1(bead_road, table_id);
    }
  },

  renderSecondBoardBeadPerTable1: function (bead_road, table_id) {
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
    if (bead_road.length == 0 || bead_road.length < $('.tb' + table_id + '.big-road').length ) { 
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
                  if ( $('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).attr('class') ){
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

  renderCashInList(data, paginate) {
    var self = PlayerLobby;

    self.renderFlag = 1;
    
    $('#cashin-content tr').remove();

    $.each(data, function (key, val) {
      var manageButton = '';
      const status = Helper.cash.showStatus(val.status);
      const created = Helper.format.date.showDate(val.created);

      elemHtml = '<tr>'
        + '<td>' + val.account.nick_name + '</td>'
        + '<td>' + Helper.format.number.withComma(val.amount) + '</td>'
        + '<td>' + status + '</td>'
        + '<td><span class="text-muted"><i class="fa fa-clock-o"></i> ' + created + '</span></td>'
        + '<td>'
        + manageButton
        + '</td>'
        + '</tr>';

      $('#cashin-content').append(elemHtml);
    });
    let height = $('#cashin-content').parents('.content_box').height()+20;
    $('#cashin-content').parents('.content_box').parent().css('height',height+'px');

    LobbyRenderUtil.renderTablePagination(paginate);
  },

  renderCashIn(data) {
    var self = PlayerLobby;

    $('#center_contents div').remove();

    var company = $('#_company').val();
    var banner1 = '';
    var banner2 = '';

    if (company == 'MAXIM') {
      banner1 = baseUrl + '/templates/girls_gen/images/maxim/event_banner_1.png';
      banner2 = baseUrl + '/templates/girls_gen/images/maxim/event_banner_2.png';
    } else if (company == 'SM') {
      banner1 = baseUrl + '/templates/girls_gen/images/sm/event_banner_1.png';
      banner2 = baseUrl + '/templates/girls_gen/images/sm/event_banner_2.png';
    } else {
      banner1 = baseUrl + '/templates/girls_gen/images/event_banner_1.png';
      banner2 = baseUrl + '/templates/girls_gen/images/event_banner_2.png';
    }

    var elemHtml = `<div>
      <style type="text/css">
        .sub_title_join {background-position:0 0;}
        .sub_input_wrap{ height:auto}
      </style>
      <div class="sub_title sub_title_join"></div>
      <div class="sub_wrap">
      <div style="margin-left: 15%;">
      <!--<ul>
      <li><img src="${banner1}" class="random" /></li>
      <li><img src="${banner2}" class="random" /></li>
      </ul>-->
      </div>
      <div class="sub_wrap_contents">
      <form name="join_form" id="join_form" method="post" onsubmit="return false">
      <div class="sub_input_wrap sub_input_wrap_left">
        <div class="sub_input">
          <div>${AMOUNT}: </div>
          <input type="text" id="cashin_amount" class="input_field" required>
          <span class="help-block"></span>
        </div>
        <div class="sub_input">
          <div>은행명: </div>
          <input type="text" id="cashin_bank_name" class="input_field" required>
        </div>
        <div class="sub_input">
          <div>계좌번호: </div>
          <input type="text" id="cashin_bank_account_no" class="input_field" required>
        </div>
        <div class="sub_input">
          <div>계좌명: </div>
          <input type="text" id="cashin_bank_account_name" class="input_field" required>
        </div>
      </div>
      </form>
      </div>
      </div>
      <div class="sub_btn cashin_proceed">${CONFIRM}</div>
      </div>`;

    $('#center_contents').append(elemHtml);

    $('#center_box').css({
      'width': '450px',
      'left': '0',
      'right': '0',
      'margin': '0 auto',
      'position': 'absolute'
    });

    $('.sub_title').css({
      'left': '20%'
    });

    $('.sub_btn').css({
      'margin': '15px 0 15px 100px'
    });

    $('#wrap_cover').show();

    self.addEvents();
  },

  renderCashOut() {
    var self = PlayerLobby;

    $('#center_contents div').remove();

    var elemHtml = `<div>'
      <style type="text/css">
        .sub_title_join {background-position:0 0;}
        .sub_input_wrap{ height:auto}
      </style>
      <div class="sub_title sub_title_join"></div>
      <div class="sub_wrap">
      <div class="sub_wrap_contents">
      <form name="join_form" id="join_form" method="post" onsubmit="return false">
      <div class="sub_input_wrap sub_input_wrap_left">
        <div class="sub_input">
          <div>${REMAINING_POINTS}: </div>
          <input type="text" id="current_balance" class="input_field" disabled required>
          <span class="help-block"></span>
        </div>
        <div class="sub_input">
          <div>${AMOUNT}: </div>
          <input type="number" id="cashout_amount" class="input_field" required>
          <span class="help-block"></span>
        </div>
        <div class="sub_input">
          <div>${WITHDRAWL_EXPENSES}: </div>
          <input type="password" id="cashout_pin" class="input_field" required>
          <span class="help-block"></span>
        </div>
        <div class="sub_input">
          <div>은행명: </div>
          <input type="text" id="cashout_bank_name" class="input_field" required>
        </div>
        <div class="sub_input">
          <div>계좌번호: </div>
          <input type="text" id="cashout_bank_account_no" class="input_field" required>
        </div>
        <div class="sub_input">
          <div>계좌명: </div>
          <input type="text" id="cashout_bank_account_name" class="input_field" required>
        </div>
      </div>
      </form>
      </div>
      </div>
      <div class="sub_btn cashout_proceed">${SUBMIT}</div>
      </div>`;

    $('#center_contents').append(elemHtml);

    $('#center_box').css({
      'width': '450px',
      'left': '0',
      'right': '0',
      'margin': '0 auto',
      'position': 'absolute'
    });

    $('.sub_title').css({
      'left': '20%'
    });

    $('.sub_btn').css({
      'margin': '15px 0 15px 100px'
    });

    $('#current_balance').val($('#profile-credits').val());
    $('#wrap_cover').show();

    self.addEvents();
  },

  renderPopupNotif(data) {
    var self = PlayerLobby;

    self.popUpNoticeData = data;

    $('#center_contents div').remove();

    var popUpData = '';
    var popUpBody = '';
    var data = data[0];

    if (data.photo) {
      popUpBody = '<tr class="notice_view">'
        + '<td colspan="2"><img src="' + baseUrl + '/uploads/' + data.photo + '" width="100%" height="300"></td>'
        + '</tr>';
    }

    popUpBody += '<tr class="notice_view">'
      + '<td colspan="2">' + data.message + '</td>'
      + '</tr>';

    popUpData = '<table class="info_list" style="min-width:auto!important;transform:scale(1)!important;">'
      + '<tbody>'
      + '<tr>'
      + '<th>' + data.subject + '</th>'
      + '<th width="200"><span class="text-muted"><i class="fa fa-clock-o"></i> ' + data.created_at + '</span></th>'
      + '</tr>'
      + popUpBody
      + '</tbody>'
      + '</table>'
      + '<div class="text-center">'
      + '<div class="pagination pagination-sm no-margin" style="margin: 0;">'
      + '<table class="table-pagination m-0 main_1" width="200" border="0" cellpadding="0" cellspacing="0" ></table>'
      + '</div>'
      + '</div>';

    var elemHtml = `<div>
      <style type="text/css">
        .sub_title_join {background-position:0 0;}
        .sub_input_wrap{ height:auto}
      </style>
      <div class="sub_title sub_title_notice"></div>
      <div class="cs" style="margin-left: -3%;">
      <div class="m_tab notice_list" style="transform: scale(0.9);">
      ${popUpData}
      </div>
      </div>
      <div class="sub_btn close_popup">${CLOSE}</div>
      </div>`;

    $('#center_contents').append(elemHtml);

    $('#center_box').css({
      'width': '800px',
      'left': '0',
      'right': '0',
      'margin': '0 auto',
      'position': 'absolute'
    });

    $('.sub_title').css({
      'left': '30%'
    });

    var window_height = $(window).height();

    if (window_height > 900) {
      $('.notice_list').slimScroll({
        position: 'right',
        height: '700px',
        color: '#c2c2c2',
        alwaysVisible: true
      });
    } else {
      $('.notice_list').slimScroll({
        position: 'right',
        height: '400px',
        color: '#c2c2c2',
        alwaysVisible: true
      });
    }

    $('#wrap_cover').show();

    self.addEvents();
  },

  renderCustomer: function (data,paginate) {
    const self = PlayerLobby;
    $('#customer-content tr').remove();

    $.each(data, function (key, val) {

      const status = Helper.customer.showStatus(val.status);
      const created = Helper.format.date.showDate(val.created);

      let elemHtml = `<tr>
        <td width="10%" height="35" align="center">${val.id}</td>
        <td width="60%" style="text-align:left"><a class="customer-detail-${val.id} white" href="javascript: void(0)">${val.title}</a></td>
        <td width="30%" align="center"><i class="fa fa-clock-o"></i> ${created}</td>
      </tr>
      <tr bgcolor="#442a4c">
        <td height="1" colspan="3" align="center" ></td>
      </tr>`;
      if ( val.answer != null ){
        elemHtml += `<tr>
          <td width="10%" height="35" align="right">답:</td>
          <td width="60%" style="text-align:left"><a class="customer-detail-${val.id} white" href="javascript: void(0)">${val.answer}</a></td>
          <td width="30%" align="center"><i class="fa fa-clock-o"></i> ${created}</td>
        </tr>
        <tr bgcolor="#442a4c">
          <td height="1" colspan="3" align="center" ></td>
        </tr>`
      }
      $('#customer-content').append(elemHtml);
    });

    LobbyRenderUtil.renderTablePagination(paginate);
  },

  renderNotice(data) {
    var self = PlayerLobby;

    $.each(data, function (key, val) {
      var time = val.created_at.split(' ')[1];

      var elemHtml = '<li>'
        + '<div class="popupnotice-' + val.id + ' title">' + val.subject + '</div>'
        + '<div class="date">' + time + '</div>'
        + '</li>';

      $('#notice_list').append(elemHtml);
    });

    if (typeof $().jCarouselLite != "function") {
      $.getScript("js/jcarousellite_1.0.1.min.js", function () {
        $(".jCarouselLite1").jCarouselLite({visible: 3, speed: 500, auto: 4000, vertical: true});
        $(".jCarouselLite2").jCarouselLite({visible: 3, speed: 400, auto: 1500, vertical: true});
      });
    } else {
      $(".jCarouselLite1").jCarouselLite({visible: 3, speed: 500, auto: 4000, vertical: true});
      $(".jCarouselLite2").jCarouselLite({visible: 3, speed: 400, auto: 1500, vertical: true});
    }

    self.addEvents();
  },

  renderNoticeList(data, paginate) {
    var self = PlayerLobby;

    self.renderFlag = 3;
    $('#center_contents div').remove();

    var popUpData = '';
    var popUpBody = '';

    $.each(data, function (key, val) {
      popUpBody += '<tr>'
        + '<td>' + val.id + '</td>'
        + '<td><a href="javascript:void(0)" class="popupnotice-' + val.id + '" style="text-decoration: none;"><strong style="color:#f1865c;">★' + val.subject + '★</strong></a></td>'
        + '<td><span class="text-muted"><i class="fa fa-clock-o"></i> ' + val.created_at + '</span> </td>'
        + '</tr>';
    });

    popUpData = `<table class="info_list">
      <tbody>
      <tr>
      <th width="50">#</th>
      <th width="200">${TITLE}</th>
      <th width="200">${CREATED_AT}</th>
      </tr>
      ${popUpBody}
      </tbody>
      </table>
      <div class="text-center">
      <div class="pagination pagination-sm no-margin" style="margin: 0;">
      <table class="table-pagination m-0 main_1" width="200" border="0" cellpadding="0" cellspacing="0" ></table>
      </div>
      </div>`;

    var elemHtml = '<div>'
      + '<style type="text/css">'
      + '.sub_title_join {background-position:0 0;}'
      + '.sub_input_wrap{ height:auto}'
      + '</style>'
      + '<div class="sub_title sub_title_notice"></div>'
      + '<div class="cs" style="margin-left: -3%;">'
      + '<div class="m_tab notice_list" style="transform: scale(0.9);">'
      + popUpData
      + '</div>'
      + '</div>'
      + '</div>';

    $('#center_contents').append(elemHtml);

    $('#center_box').css({
      'width': '800px',
      'left': '0',
      'right': '0',
      'margin': '0 auto',
      'position': 'absolute'
    });

    $('.sub_title').css({
      'left': '30%'
    });

    $('#wrap_cover').show();

    self.addEvents();
  },

  renderNote: function (data,paginate) {
    const self = PlayerLobby;
    $('#note-content tr').remove();

    $.each(data, function (key, val) {

      const status = Helper.note.showStatus(val.status);
      const created = Helper.format.date.showDate(val.created);

      const elemHtml = `<tr>
      <td width="178" height="43" align="center">${val.id}</td>
      <td width="1000" align="left"><a class="note-detail-${val.id} white" href="javascript: void(0)"><span class="notice_t_list">${val.title}</span></a></td>
      <td width="279" align="center">${status}</td>
      <td width="577" align="center" class="text_5">${created}</td>
    </tr>
    <tr bgcolor="#404040">
      <td height="1" colspan="4" align="center" ></td>
    </tr>`;
      $('#note-content').append(elemHtml);
    });
    LobbyRenderUtil.renderTablePagination(paginate);
  },

  renderSelectedNotice(data) {
    var self = PlayerLobby;

    $('#center_contents div').remove();

    var popUpData = '';
    var popUpBody = '';

    if (data.photo) {
      popUpBody = '<tr class="notice_view">'
        + '<td colspan="2"><img src="' + baseUrl + '/uploads/' + data.photo + '" width="100%" height="300"></td>'
        + '</tr>';
    }

    popUpBody += '<tr class="notice_view">'
      + '<td colspan="2">' + data.message + '</td>'
      + '</tr>';

    popUpData = '<table class="info_list">'
      + '<tbody>'
      + '<tr>'
      + '<th>' + data.subject + '</th>'
      + '<th width="200"><span class="text-muted"><i class="fa fa-clock-o"></i> ' + data.created_at + '</span></th>'
      + '</tr>'
      + popUpBody
      + '</tbody>'
      + '</table>'
      + '<div class="text-center">'
      + '<div class="pagination pagination-sm no-margin" style="margin: 0;">'
      + '<table class="table-pagination m-0 main_1" width="200" border="0" cellpadding="0" cellspacing="0" ></table>'
      + '</div>'
      + '</div>';

    var elemHtml = `<div>
      <style type="text/css">
        .sub_title_join {background-position:0 0;}
        .sub_input_wrap{ height:auto}
      </style>
      <div class="sub_title sub_title_notice"></div>
      <div class="cs" style="margin-left: -3%;">
      <div class="m_tab notice_list" style="transform: scale(0.9);">
      ${popUpData}
      </div>
      </div>
      <div class="sub_btn more_notice">${MORE_NOTICE}</div>
      </div>`;

    $('#center_contents').append(elemHtml);

    $('#center_box').css({
      'width': '800px',
      'left': '0',
      'right': '0',
      'margin': '0 auto',
      'position': 'absolute'
    });

    $('.sub_title').css({
      'left': '30%'
    });

    var window_height = $(window).height();

    if (window_height > 900) {
      $('.notice_list').slimScroll({
        position: 'right',
        height: '700px',
        color: '#c2c2c2',
        alwaysVisible: true
      });
    } else {
      $('.notice_list').slimScroll({
        position: 'right',
        height: '400px',
        color: '#c2c2c2',
        alwaysVisible: true
      });
    }

    $('#wrap_cover').show();

    self.addEvents();
  },

  renderGameInfo(gameId) {
    var self = PlayerLobby;

    $('#center_contents div').remove();

    var popUpData = '';
    var popUpBody = '';
    var gameTitle = '';
    var gameContent = '';
    var gamePhoto = '';

    var company = $('#_company').val();

    if (company == 'SM') {
      company = 'SM CASINO';
    } else if (company == 'MAXIM') {
      company = 'MAXIM';
    } else {
      company = '<NONE>';
    }

    if (gameId == 1) {
      gameTitle = 'MIDAS';
      gameContent = '1.실시간 마이다스 호텔에서 펼처지는 리얼카지노!<br/>2.실제 카지노에 있는듯한 룰없는 베팅!<br/>3.리얼리티 생생함 다이나믹 간편함!<br/><br/>';
      gameContent += '록사스 대로(Roxas Boulevard)에 위치하여 유명한 마닐라 베이(Manila Bay)의 전망을 감상할 수 있는<br/>';
      gameContent += 'Midas Hotel은 2개의 레스토랑, 카지노 및 전용 발코니를 갖춘 호텔카지노 입니다<br/>';
      gameContent += '지금부터 저희 <span style="color: red;">' + company + '</span> 카지노에서 직접 만나보세요';
      gamePhoto = '<img src="' + baseUrl + '/images/logo/midas.png">';
    } else if (gameId == 2) {
      gameTitle = 'CAGAYAN';
      gameContent = '1.실시간 CAGAYAN 호텔에서 펼처지는 리얼카지노!<br/>2.실제 카지노에 있는듯한 룰없는 베팅!<br/>3.리얼리티 생생함 다이나믹 간편함!<br/><br/>';
      gameContent += '필리핀 LUZON 섬 북부 에 위치하고 있습니다<br/>';
      gameContent += 'CAGAYAN 카지노는, 카지노 및 전용 발코니를 갖춘 호텔<br/>';
      gameContent += '지금부터 저희 <span style="color: red;">' + company + '</span> 카지노에서 직접 만나보세요';
      gamePhoto = '<img src="' + baseUrl + '/images/logo/cagayan.png">';
    } else if (gameId == 3) {
      gameTitle = 'CITY OF DREAMS';
      gameContent = '1.실시간 COD 호텔에서 펼처지는 리얼카지노!<br/>2.실제 카지노에 있는듯한 룰없는 베팅!<br/>3.리얼리티 생생함 다이나믹 간편함!<br/><br/>';
      gameContent += '마닐라에 macapagal blvd 에 위치한<br/>';
      gameContent += '하얏트 노부 크라운 호텔 이 있는 호텔카지노 입니다<br/>';
      gameContent += '카지노는 1층과 2층에 있습니다<br/>'
      gameContent += '지금부터 저희 <span style="color: red;">' + company + '</span> 카지노에서 직접 만나보세요';
      gamePhoto = '<img src="' + baseUrl + '/images/logo/cod.png">';
    } else if (gameId == 4) {
      gameTitle = 'SOLAIRE';
      gameContent = '1.실시간 SOLAIRE 호텔에서 펼처지는 리얼카지노!<br/>2.실제 카지노에 있는듯한 룰없는 베팅!<br/>3.리얼리티 생생함 다이나믹 간편함!<br/><br/>';
      gameContent += '마닐라베이 에 위치한 리조트 호텔카지노 입니다<br/>';
      gameContent += '생생한 필리핀 마닐라 의 리조트 호텔 카지노 현장<br/>';
      gameContent += '지금부터 저희 <span style="color: red;">' + company + '</span> 카지노에서 직접 만나보세요';
      gamePhoto = '<img src="' + baseUrl + '/images/logo/solaire.png" width="250" height="150">';
    } else if (gameId == 5) {
      gameTitle = 'MICROGAMING';
      gameContent = '마이크로게이밍은 모두를 위해 만들어졌습니다. 각기 다른<br/>';
      gameContent += '성향의 사람들과 각기 다른 시각을 합하여 최상의 침으로 만들어<br/>';
      gameContent += '진 우리 게임은, 보다 높은 퀄리티와 당사만의 독창성을 추구하여<br/>';
      gameContent += '차별화된 게임의 흥미와 재미를 선사합니다. 당사만의 독특한<br/>';
      gameContent += '방식으로 만들어진 게임은 이용자들에게 색다른 즐거움을<br/>';
      gameContent += '선사합니다.';
      gamePhoto = '<img src="' + baseUrl + '/images/logo/microgaming.png">';
    } else if (gameId == 6) {
      gameTitle = 'BBIN';
      gameContent = '비비아이엔은 1999년에 설립된 아시아 최고 온라인 카지노 소프트웨어와 <br/>';
      gameContent += '게임 상장 기업입니다. 중국 마켓을 중심으로 활동하고 있으며, <br/>';
      gameContent += '비비아이엔은 많은 제품 및 서비스를 다양한 언어로 제공하며, 400개 <br/>';
      gameContent += '이상의 글로벌 기업과 성공적으로 합작하여 동양 마켓에서는 인정받은 <br/>';
      gameContent += '플랫폼 제공을 하고 있습니다.';
      gamePhoto = '<img src="' + baseUrl + '/images/logo/bbin.png">';
    } else {
      gameTitle = 'ALLBET';
      gameContent = '올벳은 퀄리티와 독창적인 새로운 형식의 게임<br/>';
      gameContent += '플랫폼 개발으로 신생 기업임에도 불구하고 많이<br/>';
      gameContent += '알려져 있으며, 해당 기업은<br/>';
      gameContent += '퍼스트카가얀(FCLRC)와 CEZA의 라이선스를 취득여<br/>';
      gameContent += '세계적으로 안정적인 라이브카지노 제품을';
      gameContent += '선사하고 있습니다.';
      gamePhoto = '<img src="' + baseUrl + '/images/logo/allbet.png">';
    }

    popUpBody += '<tr class="notice_view">'
      + '<td>' + gameContent + '</td>'
      + '</tr>';

    popUpData = '<table class="info_list">'
      + '<tbody>'
      + '<tr>'
      + '<th>' + gamePhoto + '</th>'
      + '</tr>'
      + popUpBody
      + '</tbody>'
      + '</table>'
      + '<div class="text-center">'
      + '<div class="pagination pagination-sm no-margin" style="margin: 0;">'
      + '<table class="table-pagination m-0 main_1" width="200" border="0" cellpadding="0" cellspacing="0" ></table>'
      + '</div>'
      + '</div>';

    var elemHtml = '<div>'
      + '<style type="text/css">'
      + '.sub_title_join {background-position:0 0;}'
      + '.sub_input_wrap{ height:auto}'
      + '</style>'
      + '<div class="sub_title sub_title_notice"></div>'
      + '<div class="cs" style="margin-left: -3%;">'
      + '<div class="m_tab notice_list" style="transform: scale(0.9);">'
      + popUpData
      + '</div>'
      + '</div>'
      + '</div>';

    $('#center_contents').append(elemHtml);

    $('#center_box').css({
      'width': '800px',
      'left': '0',
      'right': '0',
      'margin': '0 auto',
      'position': 'absolute'
    });

    $('.sub_title').css({
      'left': '30%'
    });

    $('#wrap_cover').show();

    self.addEvents();
  },

  renderQuestion() {
    var self = PlayerLobby;

    $('#center_contents div').remove();

    var popUpData = '';
    var popUpBody = '';

    var company = $('#_company').val();

    if (company == 'MAXIM') {
      return;
    } else if (company == 'SM') {
      company = 'SM CASINO';
    } else {
      company = '<NONE>';
    }

    popUpBody += '<tr class="notice_view">'
      + '<td>'
      + '<p><center>'
      + '*입금시 주의사항<br/>'
      + '1.입금계좌와 출금계좌는 동일하여야 합니다.<br/>'
      + '2.입금 전 1:1채팅 상담으로 계좌문의를 꼭 해주세요. (계좌문의 없이 한 입금에 대하여 사이트는 책임을 지지 않습니다)<br/>'
      + '3.수표입금은 바로 충전되지 않으며 24시간 후에 충전됩니다.<br/>'
      + '4.입금신청 후 30분 후에 입금이 확인되지 않으면 입금신청은 자동으로 취소됩니다.<br/>'
      + '*:출금시 주의사항<br/>'
      + '1.입금계좌와 출금계좌는 동일하여야 합니다.<br/>'
      + '2.보유금 전액을 출금해주세요. 부분적인 출금은 허용하고 있지 않습니다.<br/>'
      + '*:입금신청 및 출금신청시 최소단위는 (입금:50,000원이상/출금:만원 단위까지)만 가능합니다.'
      + '*:입금시 발송된 계좌이외의 다른계좌로 입금시 불이익을 당할수 있습니다. (계좌확인을 하지않고 선입금으로 발생되는문제는 책임지지 않습니다.)<br/>'
      + '*:출금 신청시 본인명의 외에 다른명의로는 환전이 진행되지 않습니다. (어떠한 사유가 있더라도 본인명의 외에 환전이 진행되지 않습니다.)<br/>'
      + '*:다중아이디 사용제한<br/>'
      + '1.다중아이디 사용을 금지하고 있습니다.<br/>'
      + '2.다중아이디 사용은 보이스피싱등에 악용되어 사이트와 사이트를 이용하는 다른 회원들에게 직/간접적으로 파해를 입힐 수 있으니 주의부탁드립니다.<br/>'
      + '3.다중아이디 적발시 적발된 모든 아이디의 보유머니가 몰수되니 주의 부탁드립니다. (이름, 전화번호, 계좌번호가 다르더라도 같은 IP에서 게임시 1인으로 판단되니 주의 부탁드립니다. 친구, 지인등과 같은 장소(아이피)에서 게임을 할 경우 미리 고객센터에 알려주시고 한 아이피에서 동시 사용시 하나의 아이디로 간주되오니 참고 부탁드립니다)<br/>'
      + '*:양방베팅<br/>'
      + '1.양방베팅을 금지하고 있습니다.<br/>'
      + '2.양방베팅 적발시 적발된 모든 아이디의 보유머니가 몰수되며 양방을 한 다른 사이트에도 통보되오니 주의부탁드립니다.<br/>'
      + '*:시스템베팅(마틴베팅)<br/>'
      + '시스템베팅을 금지하고 있습니다. (1,2,4,8,16...혹은 유사한 방식으로 게임에 졌을 때 베팅액을 올려가며 하는 베팅을 금지하고 있습니다) 이는 온라인카지노 특성상 같은 테이블에서 입장금액을 변경하여 사실상 최대베팅금액 제한이 없이 베팅을 할 수 있기 때문이니 양해부탁드립니다.<br/>'
      + '*:각종 vpn 이용 아이피 및 불량 블랙리스트 아이피의 접속 베팅은 전액 몰수 강력 제제합니다.<br/>'
      + '*: 사이트내 불량이용자로 판단되는경우 경고없이 회원자격이 박탈될수 있습니다.<br/>'
      + '1. 양방배팅 및 자판기 프로그램 사용 유저<br/>'
      + '2. 사이트 신고 및 해킹을 목적으로 협박 또는 공격 유저<br/>'
      + '3. 사이트 규정을 반복적으로 무시한 유저<br/>'
      + '4. 사이트 프로모션을 부정한 방법으로 이용하는 유저<br/>'
      + '5. 기타 불량이용자로 판단되는 유저<br/>'
      + '*:항상 ' + company + ' 카지노를 사랑해주시는 고객님들께 감사드립니다.<br/>'
      + '</center></p>'
      + '</td>'
      + '</tr>';

    popUpData = '<table class="info_list">'
      + '<tbody>'
      + '<tr>'
      + '<th>··─━☆ 이용 규정 ☆━─··</th>'
      + '</tr>'
      + popUpBody
      + '</tbody>'
      + '</table>'
      + '<div class="text-center">'
      + '<div class="pagination pagination-sm no-margin" style="margin: 0;">'
      + '<table class="table-pagination m-0 main_1" width="200" border="0" cellpadding="0" cellspacing="0" ></table>'
      + '</div>'
      + '</div>';

    var elemHtml = '<div>'
      + '<style type="text/css">'
      + '.sub_title_join {background-position:0 0;}'
      + '.sub_input_wrap{ height:auto}'
      + '</style>'
      + '<div class="sub_title sub_title_notice"></div>'
      + '<div class="cs" style="margin-left: -3%;">'
      + '<div class="m_tab notice_list" style="transform: scale(0.9);">'
      + popUpData
      + '</div>'
      + '</div>'
      + '</div>';

    $('#center_contents').append(elemHtml);

    $('#center_box').css({
      'width': '800px',
      'left': '0',
      'right': '0',
      'margin': '0 auto',
      'position': 'absolute'
    });

    $('.sub_btn').css({
      'width': '150px',
      'left': '0',
      'right': '0',
      'margin': '0 auto',
      'position': 'absolute'
    });

    $('.sub_title').css({
      'left': '30%'
    });

    var window_height = $(window).height();

    if (window_height > 900) {
      $('.notice_list').slimScroll({
        position: 'right',
        height: '700px',
        color: '#c2c2c2',
        alwaysVisible: true
      });
    } else {
      $('.notice_list').slimScroll({
        position: 'right',
        height: '400px',
        color: '#c2c2c2',
        alwaysVisible: true
      });
    }

    $('#wrap_cover').show();

    self.addEvents();
  },

  renderBetHistory(data, paginate) {
    var self = PlayerLobby;

    self.renderFlag = 4;
    $('#bet-history-content tr').remove();

    $.each(data, function (key, val) {

      const status = Helper.bet.showBetLogStatus(val.status);
      let arrBetBeads = GameUtil.getBetBeadType(val);
      let date_betting = Helper.format.date.showDate(val.date_betting);

      var elemList = '<div class="bead_table"><ul class="bead-list">';

      $.each(arrBetBeads, function (key, val) {
        elemList += '<li><img src="' + baseUrl + '/static/images/game/gt_b_' + val + '.png" width="24"></li>';
      });

      elemList += '</ul></div>';

      elemHtml = '<tr>'
        + '<td><a href="javascript:void(0)">' + val.id + '</a></td>'
        + '<td>' + val.game_log.table_name + '</td>'
        + '<td>' + val.game_log.shoe_no + '</td>'
        + '<td>' + elemList + '</td>'
        + '<td>' + Helper.format.number.withComma(val.p_amount) + '</td>'
        + '<td>' + Helper.format.number.withComma(val.b_amount) + '</td>'
        + '<td>' + Helper.format.number.withComma(val.t_amount) + '</td>'
        + '<td>' + Helper.format.number.withComma(val.pp_amount) + '</td>'
        + '<td>' + Helper.format.number.withComma(val.bp_amount) + '</td>'
        + '<td><img src="' + baseUrl + '/static/images/game/gt_b_' + val.game_log.game_result + '.png" width="24"></td>'
        + '<td>' + status + '</td>'
        + '<td>' + Helper.format.number.withComma(val.winning_amount) + '</td>'
        + '<td>' + Helper.format.number.withComma(val.current_balance) + '</td>'
        + '<td>' + Helper.format.number.withComma(val.new_balance) + '</td>'
        + '<td><span class="text-muted"><i class="fa fa-clock-o"></i> ' + date_betting + '</span> </td>'
        + '</tr>';
        $('#bet-history-content').append(elemHtml);
    });
    let height = $('#bet-history-content').parents('.content_box').height()+20;
    $('#bet-history-content').parents('.content_box').parent().css('height',height+'px');

    LobbyRenderUtil.renderTablePagination(paginate);
  },

  renderTablePagination(data) {
    var self = PlayerLobby;
    $('.table-pagination tr').remove();
    if ( data.indexOf('tr') >= 0 )
      $('.table-pagination').append(data);
    self.addEvents();
  },

  renderTableModal() {
    var self = PlayerLobby;

    $('#center_contents div').remove();

    var elemHtml = `<div>
      <div class="sub_title sub_title_join"></div>
      <div class="sub_wrap">
      <div class="sub_wrap_contents">
      </div>
      </div>
      <div class="sub_btn close">${GO_TO_MAIN_SCREEN}</div>
      </div>`;

    $('#center_contents').append(elemHtml);

    $('#center_box').css({
      'width': '1270px',
      'left': '0',
      'right': '0',
      'margin': '0 auto',
      'position': 'absolute'
    });

    $('.sub_title').css({
      'left': '38%'
    });

    if (self.gameProviderId == 1) {
      $('.sub_title').css({
        // 'background' : 'url(images/logo/midas.png) no-repeat',
        'transform': 'scale(0.4)',
        'height': '152px',
        'top': '-28px'
      });
    } else if (self.gameProviderId == 2) {
      $('.sub_title').css({
        // 'background' : 'url(images/logo/cagayan.png) no-repeat',
        'transform': 'scale(0.4)',
        'height': '152px',
        'top': '-28px'
      });
    } else if (self.gameProviderId == 3) {
      $('.sub_title').css({
        // 'background' : 'url(images/logo/cod.png) no-repeat',
        'transform': 'scale(0.4)',
        'height': '152px',
        'top': '-28px'
      });
    }

    var window_height = $(window).height();

    if (window_height > 800) {
      $('#center_box').css('height', '810px');
      $('.sub_wrap_contents').css('height', '660px');
    } else {
      $('#center_box').css('height', '610px');
      $('.sub_wrap_contents').css('height', '460px');
    }

    $('.sub_btn').css({
      'width': '180px',
      'left': '0',
      'right': '0',
      'margin': '0 auto',
      'position': 'absolute'
    });

    $('#wrap_cover').show();
    LobbyRenderUtil.renderPreloader();
  },

  renderModal() {
    var self = PlayerLobby;

    $('#center_contents div').remove();

    var elemHtml = '<div>'
      + '<div class="sub_title sub_title_join"></div>'
      + '<div class="sub_wrap">'
      + '<div class="sub_wrap_contents">'
      + '</div>'
      + '</div>'
      + '</div>';

    $('#center_contents').append(elemHtml);

    $('#wrap_cover').show();
  },

  renderMaximumBet1: function () {
    const self = PlayerLobby;
    // console.log('render max bet-->', self.gameMaximumBetLookUpData);
    let temHtml = '';
    let selected = false;
    $('#select_bet_limit').html('');

    $.each(self.gameMaximumBetLookUpData, function (key, val) {
      let txtColor = '';
      let active = '';
      let disabled = '';
      if (self.user_level < val.level_no) {
        disabled = 'disabled';
      }

      if (val.is_vip) {
        txtColor = 'style="color: red;"';
      }
      if (!selected && disabled !== 'disabled') {
        active = `selected ${txtColor}`;
        selected = true;
      }
      temHtml += `
        <option value="${val.id}" class="" ${active} ${disabled}>${Helper.format.number.withComma(val.p_b_min)} ~ ${Helper.format.number.withComma(val.p_b_max)}</option>`;
    });
    $('#select_bet_limit').html(temHtml);
    self.addEvents();
  },

  renderMaximumBet() {
    var self = PlayerLobby;

    $('select[class*=game-table-max-bet] option').remove();
    let selected = false;

    $.each(self.gameMaximumBetLookUpData, function (key, val) {
      let elemHtml = '';
      let txtColor = '';
      let active = '';
      let disabled = '';
      if (self.user_level < val.level_no) {
        disabled = 'disabled';
      }

      if (val.is_vip) {
        txtColor = 'style="color: red;"';
      }
      if (!selected && disabled !== 'disabled') {
        active = `selected ${txtColor}`;
        selected = true;
      }
      elemHtml = `<option value="${val.id}" class="" ${active} ${disabled}>${val.p_b_min} - ${val.p_b_max}</option>`;
      // $('select[class*=game-table-max-bet]').prepend(elemHtml);
      $('select[class*=game-table-max-bet]').append(elemHtml);
    });

    self.addEvents();
  },

  renderSecondBoardPerTable(bead_road, table_id) {
    var self = PlayerLobby;

    var top = 0;
    var left = 0;
    var col = 0;
    var colCounter = 1;
    var topCounter = 0;
    var leftCounter = 1;

    if (!self.scoreBoardFlag) {
      // Generate empty board
      for (i = 0; i < 228; i++) {
        if (col == 6) {
          topCounter = top;
          leftCounter += 30;
          col = 1;
          colCounter++;
        } else {
          col++;
        }

        var style = 'style="top:' + topCounter + 'px; left:' + leftCounter + 'px;"';
        var elemHtml = '<div class="pnl_2_item_mini c_' + colCounter + ' c' + i + ' tb' + table_id + '"' + style + '></div>';
        $('.bead-' + table_id).append(elemHtml);
        topCounter += 30;
      }

      LobbyRenderUtil.renderSecondBoardBeadPerTable(bead_road, table_id);
      LobbyRenderUtil.renderMaximumBet();
    } else {
      LobbyRenderUtil.renderSecondBoardBeadPerTable(bead_road, table_id);
    }
  },

  renderSecondBoardBeadPerTable(bead_road, table_id) {
    var self = PlayerLobby;

    var bankerBead = ['a', 'b', 'c', 'd'];
    var playerBead = ['e', 'f', 'g', 'h'];
    var tieBead = ['i', 'j', 'k', 'l'];

    var uniqueCount = 0;
    var bankerCount = 0;
    var playerCount = 0;
    var tieCount = 0;
    var tieSameCount = 1;

    var biggestNum = 0;

    var col = 1;
    var marker = '';

    for (i = 0; i < bead_road.length; i++) {
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
              $('.big-' + table_id + '-' + last_tie_bead).append('<span class="big-road-tie-mini tie-' + table_id + '-' + i + '">1</span>');
            } else {
              // Else insert in first  column but check if there are ties
              var existing_marker_column_tie = $('.c0.tb' + table_id).find('span').html() || 0;

              if (!existing_marker_column_tie)
                $('.c0.tb' + table_id).append('<span class="big-road-tie-mini tie-' + table_id + '-' + i + '">1</span>');
              else {
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
                      if (!self.scoreBoardFlag)
                        $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon');
                      else
                        $('.c' + next_col + '.tb' + table_id).addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').addClass('dragon').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
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

                  if (!self.scoreBoardFlag)
                    $('.c_' + last_col + '.tb' + table_id + ':first').addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road');
                  else
                    $('.c_' + last_col + '.tb' + table_id + ':first').addClass('big-' + table_id + '-' + row_id).addClass('big-road-' + table_id).addClass(bead_road[i] + '_min').addClass(marker + '-' + table_id + '-' + uniqueCount).addClass('big-road').fadeIn().delay(200).fadeOut().delay(200).fadeIn().delay(200).fadeOut().delay(200).fadeIn();
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

    var beadArray = self.countTableSummary(bead_road);
    $('.player-sum-' + table_id).html(beadArray['player']);
    $('.banker-sum-' + table_id).html(beadArray['banker']);
    $('.tie-sum-' + table_id).html(beadArray['tie']);
  },

};

window['LobbyRenderUtil'] = LobbyRenderUtil;
