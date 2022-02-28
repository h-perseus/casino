const Welcome = {

  selectedLang: 'kr',

  init: function () {
    var self = this;
    self.addEvents();
    // Initialize Dropdown Function
    self.initLanguageDropdown();
  },

  initLanguage: function () {
    var self = this;

    var company = $('#_company').val();

    var username = $('#username').val();
    var password = $('#password').val();
    var login = $('#login').val();
    var signup = $('#signup').val();

    var nickname = $('#nickname').val();
    var confirm_password = $('#confirm_password').val();
    var mobile = $('#mobile').val();
    var referral_code = $('#referral_code').val();
    var bank_name = $('#bank_name').val();
    var bank_account_name = $('#bank_account_name').val();
    var bank_account_no = $('#bank_account_no').val();
    var cashout_pin = $('#cashout_pin').val();
    var cancel = $('#cancel').val();
    var logo = '';
    // console.log(login)

    if (company == 'DEADPOOL') {
      $('#signin-username').attr('placeholder', username);
      $('#signin-password').attr('placeholder', password);

      $('#signin-username').prev().html(username);
      $('#signin-password').prev().html(password);

      $('#btn-signin, .login.login100-form-title').html(login);
      $('#btn-register').html(signup + '<i class="fa fa-long-arrow-right m-l-5"></i>');
//      $('#btn-back').html(login + '<i class="fa fa-long-arrow-right m-l-5"></i>');
      
      $('#signup-nickname').prev().html(nickname);
      $('#signup-username').prev().html(username);
      $('#signup-password').prev().html(password);
      $('#signup-password_confirmation').prev().html(confirm_password);
      $('#signup-mobile').prev().html(mobile);
      $('#signup-referral_code').prev().html(referral_code);
      $('#signup-bank_name').prev().html(bank_name);
      $('#signup-bank_account_name').prev().html(bank_account_name);
      $('#signup-bank_account_no').prev().html(bank_account_no);
      $('#signup-cashout_pin').prev().html(cashout_pin);

      $('#signup-nickname').attr('placeholder', nickname);
      $('#signup-username').attr('placeholder', username);
      $('#signup-password').attr('placeholder', password);
      $('#signup-password_confirmation').attr('placeholder', confirm_password);
      $('#signup-mobile').attr('placeholder', mobile);
      $('#signup-referral_code').attr('placeholder', referral_code);
      $('#signup-bank_name').attr('placeholder', bank_name);
      $('#signup-bank_account_name').attr('placeholder', bank_account_name);
      $('#signup-bank_account_no').attr('placeholder', bank_account_no);
      $('#signup-cashout_pin').attr('placeholder', cashout_pin);

      $('#btn-signup, .signup.login100-form-title').html(signup);
      $('#signupc_btn span').html(cancel);

      $('.main-logo').attr('src', 'templates/girls_gen/images/deadpool/' + logo + '.png')
    }
  },

  initLanguageDropdown: function () {
    var self = this;

    $('.drop-down').append('<div class="button"></div>');
    $('.drop-down').append('<ul class="select-list"></ul>');

    $('.drop-down select option').each(function () {
      $('.select-list').append('<li class="cls-anchor"><span value="' + $(this).val() + '" class="' + $(this).attr('class') + '"><img src="images/language/' + $(this).attr('class') + '.png" class="dp-img"/>' + $(this).text() + '</span></li>');
    });

    $('.drop-down .button').html('<span><img src="images/language/' + $('.drop-down select').find(':selected').attr('class') + '.png" class="dp-img"/>' + $('.drop-down select').find(':selected').text() + '</span>' + '<a href="javascript:void(0);" class="select-list-link"><svg aria-hidden="true" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-caret-down fa-w-10"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" class=""></path></svg></a>');

    $('.drop-down ul li').each(function () {
      if ($(this).find('span').text() == $('.drop-down select').find(':selected').text()) {
        $(this).addClass('active');
      }
    });

    self.addEvents();
  },

  renderRegistrationForm: function () {
    var self = this;

    $('#center_contents div').remove();

    var elemHtml = '<div>'
      + '<style type="text/css">'
      + '.sub_title_join {background-position:0 0;}'
      + '.sub_input_wrap{ height:auto}'
      + '</style>'
      + '<div class="sub_title sub_title_join"></div>'
      + '<div class="sub_wrap">'
      + '<div class="sub_wrap_contents">'
      + '<form name="join_form" id="join_form" method="post" onsubmit="return false">'
      + '<div class="sub_input_wrap sub_input_wrap_left">'
      + '<div class="sub_input">'
      + '<div>아이디: </div>'
      + '<input type="text" id="signup-username" class="input_field" required>'
      + '<span class="help-block"></span>'
      + '</div>'
      + '<div class="sub_input">'
      + '<div>비밀번호: </div>'
      + '<input id="signup-password" type="password" class="input_field" required>'
      + '<span class="help-block"></span>'
      + '</div>'
      + '<div class="sub_input">'
      + '<div>출금은행: </div>'
      + '<select id="signup-bank_name">'
      + '<option value="">은행선택</option>'
      + '<option value="1">국민은행</option>'
      + '<option value="2">기업은행</option>'
      + '<option value="3">NH농협</option>'
      + '<option value="4">우리은행</option>'
      + '<option value="5">신한은행</option>'
      + '<option value="6">하나은행</option>'
      + '<option value="7">우체국</option>'
      + '<option value="8">외환은행</option>'
      + '<option value="9">SC제일은행</option>'
      + '<option value="10">새마을금고</option>'
      + '<option value="11">한국씨티은행</option>'
      + '<option value="12">신용협동조합</option>'
      + '<option value="13">수산업협동조합</option>'
      + '<option value="14">제주은행</option>'
      + '<option value="15">부산은행</option>'
      + '<option value="16">대구은행</option>'
      + '<option value="17">광주은행</option>'
      + '<option value="18">전북은행</option>'
      + '<option value="19">경남은행</option>'
      + '<option value="20">산업은행</option>'
      + '<option value="21">홍콩HSBC</option>'
      + '<option value="22">도이치뱅크</option>'
      + '<option value="23">상호저축은행</option>'
      + '<option value="24">뱅크오브아메리카</option>'
      + '<option value="25">JP모건</option>'
      + '<option value="26">우리투자증권</option>'
      + '<option value="27">유안타증권(구 동양증권)</option>'
      + '<option value="28">대우증권</option>'
      + '<option value="29">현대증권</option>'
      + '<option value="30">삼성증권</option>'
      + '<option value="31">한국투자증권</option>'
      + '<option value="32">미래에세증권</option>'
      + '<option value="33">교보증권</option>'
      + '<option value="34">SK증권</option>'
      + '<option value="35">한화증권</option>'
      + '<option value="36">한화대투증권</option>'
      + '<option value="37">신한금융투자</option>'
      + '<option value="38">타이투자증권</option>'
      + '<option value="39">HNC투자증권</option>'
      + '<option value="40">유진투자증권</option>'
      + '<option value="41">메리츠종합금융증권</option>'
      + '<option value="42">신영증권</option>'
      + '<option value="43">이트레이드증권</option>'
      + '<option value="44">솔로몬투자증권</option>'
      + '<option value="45">NH투자증권</option>'
      + '<option value="46">LIG투자증권</option>'
      + '<option value="47">산림조합</option>'
      + '<option value="48">부국증권</option>'
      + '<option value="49">키움증권</option>'
      + '<option value="50">대신증권</option>'
      + '<option value="51">동부증권</option>'
      + '</select>'
      + '</div>'
      + '<div class="sub_input">'
      + '<div>출금계좌번호: </div>'
      + '<input type="text" id="signup-bank_account_no" required>'
      + '<span class="help-block"></span>'
      + '</div>'
      + '<div class="sub_input" style="padding-bottom:20px">'
      + '<div>출금비번: </div>'
      + '<input type="text" id="signup-cashout_pin" maxlength="6">'
      + '<span class="help-block"></span>'
      + '</div>'
      + '</div>'
      + '<div class="sub_input_wrap sub_input_wrap_right">'
      + '<div class="sub_input">'
      + '<div>회원이름: </div>'
      + '<input type="text" id="signup-nickname" name="join_name" maxlength="12" required>'
      + '<span class="help-block"></span>'
      + '</div>'
      + '<div class="sub_input">'
      + '<div>비밀번호확인: </div>'
      + '<input type="password" id="signup-password_confirmation" class="input_field" maxlength="12" required>'
      + '<span class="help-block"></span>'
      + '</div>'
      + '<div class="sub_input">'
      + '<div>출금예금주명: </div>'
      + '<input type="text" id="signup-bank_account_name" required>'
      + '<span class="help-block"></span>'
      + '</div>	'
      + '<div class="sub_input">'
      + '<div>핸드폰번호: </div>'
      + '<input type="text" id="signup-mobile" required>'
      + '<span class="help-block"></span>'
      + '</div>'
      + '<div class="sub_input" style="padding-bottom:20px">'
      + '<div>추천인코드: </div>'
      + '<input type="text" id="signup-referral_code" required>'
      + '<span class="help-block"></span>'
      + '</div>'
      + '<input type="hidden" name="checkavale" id="checkavale" value="N" maxlength="">'
      + '</div>'
      + '</form>'
      + '</div>'
      + '</div>'
      + '<div class="sub_btn register_account">동의합니다</div>'
      + '</div>';

    $('#center_contents').append(elemHtml);
    $('#wrap_cover').show();

    self.addEvents();
  },

  addEvents: function () {
    var self = this;

    $('.drop-down .select-list span').unbind('click').bind('click', function (e) {
      e.preventDefault();
      var dd_text = $(this).text();
      var dd_val = $(this).attr('value');

      $('.drop-down .button').html('<span><img src="images/language/' + dd_val + '.png" class="dp-img"/>' + dd_text + '</span>' + '<a href="javascript:void(0);" class="select-list-link"><svg aria-hidden="true" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-caret-down fa-w-10"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" class=""></path></svg></a>');
      $('.drop-down .select-list span').parent().removeClass('active');
      $(this).parent().addClass('active');
      $('.drop-down select[name=options]').val(dd_val);
      $('.drop-down .select-list li').slideUp();

      self.selectedLang = dd_val;
      self.initLanguage();

      self.addEvents();
    });

    $('.drop-down .button').unbind('click').bind('click', function (e) {
      e.preventDefault();
      $('.drop-down ul li').slideToggle();
      self.addEvents();
    });

    $('#btn-register').unbind('click').bind('click', function (e) {
      e.preventDefault();
      $('#register-container').modal({
        backdrop: 'static',
        keyboard: false
      });
    });

    $('.register_account').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.api.post.register();
    });

    $('.register').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.renderRegistrationForm();
    });

    $('#link-login').unbind('click').bind('click', function (e) {
      e.preventDefault();
      $('#errors').remove();
    });

    $('#link-register').unbind('click').bind('click', function (e) {
      e.preventDefault();
      $('#errors').remove();
      $('#cd-signup div, #cd-signup input').removeClass('has-error');
      $('#cd-signup input').next().html('');
      $('#cd-signup input').val('');
    });

    // $('#signin-password').unbind().bind('keyup', function(e) {
    //     if(e.which == 13) {
    //         $('#btn-signin').trigger('click');
    //     }
    // });

    $('#signin-password').keypress(function (e) {
      if (e.which == 13) {
        $('#btn-signin').trigger('click');
      }
    });

    $('#btn-signin').unbind().bind('click', function (e) {
      e.preventDefault();
      self.api.post.auth();
    });

    $('#btn-signup').unbind('click').bind('click', function (e) {
      e.preventDefault();
      self.api.post.register();
    });
  },

  api: {
    post: {
      auth: function () {
        const self = Welcome;
        $.ajax({
          url: baseUrl + '/app/user/login/',
          method: 'POST',
          data: {
            'username': $('#signin-username').val().trim(),
            'password': $('#signin-password').val().trim(),
            'lang': self.selectedLang,
            '_token': $('#_token').val()
          },
          beforeSend: function () {
            $('#btn-signin').attr('disabled', 'disabled');//.html('...');
          },
          success: function (resp) {
            if (resp.success) {
              window.location = baseUrl + '/' + resp.redirect_url
            } else {
              alert(resp.message);
            }
          },
          error: function (resp) {
            alert(LOGIN_ERROR);
          },
          complete: function () {
            $('#btn-signin').removeAttr('disabled');//.html(LOGIN);
          }
        });
      },

      register() {
        $.ajax({
          url: baseUrl + '/app/registration/',
          method: 'POST',
          data: {
            'username': $('#signup-username').val().trim(),
            'password': $('#signup-password').val().trim(),
            'password_confirmation': $('#signup-password_confirmation').val().trim(),
            'nickname': $('#signup-nickname').val().trim(),
            'mobile': $('#signup-mobile1').val().trim()+$('#signup-mobile2').val().trim()+$('#signup-mobile3').val().trim(),
            'bank_name': $('#signup-bank_name').val().trim(),
            'bank_account_name': $('#signup-bank_account_name').val().trim(),
            'bank_account_no': $('#signup-bank_account_no').val().trim(),
            'cashout_pin': $('#signup-cashout_pin').val().trim(),
            'referral_code': $('#signup-referral_code').val().trim(),
          },
          beforeSend: function () {
            $('.register_account').attr('disabled', 'disabled');//.html('...');
          },
          success: function (resp) {
            if (resp.success) {
              alert(REGISTER_COMPLETE);
              $('#wrap_cover').hide();
              $('#register-container').modal('toggle');
            } else {
              alert(resp.message);
            }
          },
          error: function (resp) {
            alert(resp);
            // if (resp.responseJSON.errors) {
            //   if (resp.responseJSON.flag) {
            //     alert(resp.responseJSON.errors);
            //   } else {
            //     $.each(resp.responseJSON.errors, function (key, error) {
            //       $('#signup-' + key).addClass('has-error');
            //       $('#signup-' + key).next().html(error);
            //     });
            //   }
            // }
          },
          complete: function () {
            $('.register_account').removeAttr('disabled');//.html(CREATE_ACCOUNT);
          }
        });
      }
    }
  }
};

window['Welcome'] = Welcome;

$(function () {
  Welcome.init();
});

$(window).load(function () {

  var theWindow = $(window),
    $bg = $("#bg"),
    aspectRatio = $bg.width() / $bg.height();

  function resizeBg() {

    if ((theWindow.width() / theWindow.height()) < aspectRatio) {
      $bg
        .removeClass()
        .addClass('bgheight');
    } else {
      $bg
        .removeClass()
        .addClass('bgwidth');
    }

  }

  theWindow.resize(resizeBg).trigger("resize");
});