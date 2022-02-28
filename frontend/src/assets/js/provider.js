const Provider = {
  init : function() {
    const self =this;
    self.api.all();
  },

  api : {
    all : function() {
      $.ajax({
        url : baseUrl + '/providers',
        method : 'GET',
        data : {},
        beforeSend : function() {},
        success : function(resp) {
          $("#midas").html(Helper.format.number.withComma(resp.midas));
          $("#cagayan").html(Helper.format.number.withComma(resp.cagayan));
          $("#cd").html(Helper.format.number.withComma(resp.city_of_dreams));
          $("#g88").html(Helper.format.number.withComma(resp.g88));
          $("#total").html(Helper.format.number.withComma(resp.total));
          $("#total-chips").html(Helper.format.number.withComma(resp.total_chips));
          $("#oriental").html(Helper.format.number.withComma(resp.oriental));
        },
        error : function(resp) {},
        complete : function() {}
      });
    }
  }
};
window['Provider'] = Provider;

$(function() {
  // Provider.init();
});
