var Helper = {
	lang : 'kr',

	init : function() {
		if($('#_lang').val()) {
			self.lang = $('#_lang').val();
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
				for(i=0; i<n.length; i++) {
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
					mdate = value.substring(0,10);
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
				Helper.sound.render('banker_won', 'voice_over/' + self.lang);
			},

			playerWon : function() {
				Helper.sound.render('player_won', 'voice_over/' + self.lang);
			},

			bankerPairWon : function() {
				Helper.sound.render('banker_pair', 'voice_over/' + self.lang);
			},

			playerPairWon : function() {
				Helper.sound.render('player_pair', 'voice_over/' + self.lang);
			},

			tieWon : function() {
				Helper.sound.render('tie', 'voice_over/' + self.lang);
			},

			stopBetting : function() {
				Helper.sound.render('no_more_bet', 'voice_over/' + self.lang);
			},

			startBetting : function() {
				Helper.sound.render('bet_start', 'voice_over/' + self.lang);
			},

			enter : function() {
				Helper.sound.render('enter', 'voice_over/' + self.lang);
			},

			cancel : function() {
				Helper.sound.render('cancel', 'voice_over/' + self.lang);
			}
		}
	},

	url : {
		removeHash : function() {
			var clean_uri = location.protocol + "//" + location.host + location.pathname;
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
window['Helper'] = Helper;

$(function() {
	Helper.init();
});
