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
          if (room && val.beads.length > room.beads.length) {
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
//    console.log('render max bet-->', self.gameMaximumBetLookUpData);
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
                  var prev_col=' ';
                  if ( $('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).attr('class') )
                    prev_col = $('.' + existing_marker + '-' + table_id + '-' + existing_marker_id).attr('class').split(' ')[1];

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
                  if ( $('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):first').attr('class') )
                    last_col = parseInt($('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):first').attr('class').split(' ')[1].split('_')[1]) + 1;
                } else {
                  if ( $('.' + existing_marker + '-' + table_id + '-' + existing_marker_id + ':not(.dragon):last').attr('class'))
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
      let nick_name = '';
      if ( val.account && val.account.nick_name )
        nick_name = val.account.nick_name;
      let elemHtml = `<tr>
        <td width="92" height="35" align="center">${val.id}</td>
        <td width="565" style="text-align:left"><a class="customer-detail-${val.id}" href="javascript: void(0)">${val.title}</a></td>
        <td width="105" align="center">${nick_name}</td>
        <td width="138" align="center"><i class="fa fa-clock-o"></i> ${created}</td>
      </tr>`;
      if ( val.answer != null ){
        let date_answered = '';
        if ( val.date_answered )
          date_answered = Helper.format.date.showDate(val.date_answered);
        elemHtml += `<tr>
          <td width="92" height="35" align="right">답:</td>
          <td width="565" style="text-align:left"><a class="customer-detail-${val.id}" href="javascript: void(0)">${val.answer}</a></td>
          <td width="105" align="center">${val.agent}</td>
          <td width="138" align="center"><i class="fa fa-clock-o"></i> ${date_answered}</td>
        </tr>`;
      }
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

window['LobbyRenderUtil'] = LobbyRenderUtil;
