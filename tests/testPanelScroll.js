module("Panel ", {
  setup: function () {

  },
  teardown: function () {

  }
});

test('test check empty', function() {
  equal(0, $('#basket-elements-container .scrollpane .jspPane:has(div)').length);
  ok($('#panel').hasClass('collapsed'));
});

test("test add product in basket", function () {
  $('#panel').panel('update', top.oneProductPanel);
  equal(1, $('#basket-elements-container .scrollpane .jspPane:has(div)').length);
  ok($('#panel').hasClass('collapsed'));
});

test("test show basket panel", function () {
  $('.panel-basket-link').click();
  ok(!$('#panel').hasClass('collapsed'));
});

test("test hide basket panel", function () {
  $('.panel-basket-link').click();
  ok($('#panel').hasClass('collapsed'));
});

test("test remove product from basket", function () {
  $('.panel-basket-link').click();
  ok(!$('#panel').hasClass('collapsed'));

  $('#panel').panel('update', top.emptyPanel);
  equal(0, $('#basket-elements-container .scrollpane .jspPane:has(div)').length);

  ok($('#panel').hasClass('collapsed'));  
});


module("Panel 2", {
  setup: function () {

  },
  teardown: function () {

  }
});

test("test remove product from basket", function () {
  $('#panel').panel('update', top.emptyPanel);
  equal('0', $('#panel').find('.basket-counter').text());
  equal(0, $('#basket-elements-container .scrollpane .jspPane:has(div)').length);
});