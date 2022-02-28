const ChatUtil = {
  renderChat: function (data, flag) {
    const self = this;
    let rowClass = '';
    let msgClass = '';

    self.renderScroll();

    if (flag) {
      $.each(data, function (key, val) {
        let elemHtml = '';
        if (val.position) {
          rowClass = 'base_sent';
          msgClass = 'msg_sent';

          elemHtml = `<div class="row msg_container ${rowClass} msg-${val.id}">
            <div class="col-md-10 col-xs-10">
            <div class="messages ${msgClass}">
            <p>${val.message}</p>
            <time datetime="2009-11-13T20:00">${val.account.nickname}  • </time>
            </div>
            </div>
            <div class="col-md-2 col-xs-2 avatar">
            <img src="${baseUrl}/plugins/images/users/unknown.jpg" class=" img-responsive ">
            </div>
            </div>`;
        } else {
          rowClass = 'base_receive';
          msgClass = 'msg_receive';

          elemHtml = `<div class="row msg_container ${rowClass}">
            <div class="col-md-2 col-xs-2 avatar">
            <img src="${baseUrl}/plugins/images/users/unknown.jpg" class=" img-responsive ">
            </div>
            <div class="col-md-10 col-xs-10">
            <div class="messages ${msgClass}">
            <p>${val.message}</p>
            <time datetime="2009-11-13T20:00">${val.account.nickname} • </time>
            </div>
            </div>
            </div>`;
        }

        if (!$('.msg-' + val.id).length) {
          $('.chat_list').append(elemHtml);
        }
      });
    } else {
      let elemHtml = '';
      if (data.position) {
        rowClass = 'base_sent';
        msgClass = 'msg_sent';
        elemHtml = `<div class="row msg_container ${rowClass} msg-${data.id}">
          <div class="col-md-10 col-xs-10">
          <div class="messages ${msgClass}">
          <p>${data.message}</p>
          <time datetime="2009-11-13T20:00">${data.account.nickname} • </time>
          </div>
          </div>
          <div class="col-md-2 col-xs-2 avatar">
          <img src="${baseUrl}/plugins/images/users/unknown.jpg" class=" img-responsive ">
          </div>
          </div>`;
      } else {
        rowClass = 'base_receive';
        msgClass = 'msg_receive';

        elemHtml = `<div class="row msg_container ${rowClass} msg-${data.id}">
          <div class="col-md-2 col-xs-2 avatar">
          <img src="${baseUrl}/plugins/images/users/unknown.jpg" class=" img-responsive ">
          </div>
          <div class="col-md-10 col-xs-10">
          <div class="messages ${msgClass}">
          <p>${data.message}</p>
          <time datetime="2009-11-13T20:00">${data.account.nickname} • </time>
          </div>
          </div>
          </div>`;
      }

      if (!$('.msg-' + data.id).length) {
        $('.chat_list').append(elemHtml);
      }
    }

    setTimeout(function () {
      let bottomCoord = $('.chat_list').parent()[0].scrollHeight;
      $('.chat_list').parent().slimScroll({scrollTo: bottomCoord});
    }, 500);

    if ($('#minim_chat_window').hasClass('panel-collapsed')) {
      $('#minim_chat_window').trigger('click');
    }
  },

  renderScroll: function () {
    const window_height = $(window).height();

    $('.chat_list').parent().slimScroll({
      position: 'right',
      height: '200px',
      color: '#000000',
      alwaysVisible: true,
      start: 'bottom'
    });
  },

};

window['ChatUtil'] = ChatUtil;
