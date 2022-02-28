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

window['RenderUtil'] = RenderUtil;
