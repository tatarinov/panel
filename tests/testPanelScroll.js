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
  equal($('#basket-elements-container .scrollpane .jspPane:has(div)').length, 1);
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
  equal($('#basket-elements-container .scrollpane .jspPane:has(div)').length, 0);

  ok($('#panel').hasClass('collapsed'));  
});