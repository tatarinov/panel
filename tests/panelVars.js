var emptyPanel = '\
  <div class="products-fixed-panel collapsed hidden" id="panel">\
    <div class="products-panel-header nofloat">\
      <div class="wrapper">\
        <a href="" class="panel-fav-link fl"><img src="i/fav-icon.png" alt="" /><span class="fav-counter">0</span>Избранное</a>\
        <a href="" class="panel-basket-link fr"><img src="i/dish-logo.png" alt="" /><span class="basket-counter">0</span>Корзина</a>\
      </div>\
    </div>\
    <div class="products-panel-body">\
      <div class="wrapper">\
        <div class="products-panel-content" id="favorites-block">\
          <div id="favorite-elements-container">\
            <div class="vitrine scrollpane">\
            </div><div class="keys" style="display:none" title="/132/"></div>\
          </div>\
    \
          <div class="nofloat" id="panel-footer-left">\
            <div class="fl" style="padding-top: 15px">\
              <span class="uppercase">В избранном <span class="green">0</span> блюд на сумму</span>\
              <span class="green"></span>\
            </div>\
            <div class="fr">\
              <a class="btn green-btn h47btn s30 bb favorite-to-basket merge-favorite-with-basket" href="#">Добавить в заказ</a>    </div>\
          </div>\
        </div>        <div class="products-panel-content" id="basket-block">\
        <div id="basket-elements-container">\
          <div class="vitrine scrollpane"></div>\
          </div>\
        </div>\
\
        <div class="nofloat" id="panel-footer-right">\
          <div class="fl" style="padding-top: 15px">\
            <span class="uppercase">В вашем заказе <span class="green">0</span> блюд на сумму</span>\
          </div>\
          <div class="fr">\
            <a href="" class="btn grey-btn h47btn s15 bb uppercase panel-one-click-link">Заказать в 1 клик</a>\
            <a href="" class="btn green-btn h47btn s30 bb">Оформить заказ</a>\
          </div>\
        </div>\
      </div>      </div>\
    </div>\
  </div>\
';

var oneProductPanel = '\
  <div class="products-fixed-panel collapsed hidden" id="panel">\
    <div class="products-panel-header nofloat">\
      <div class="wrapper">\
        <a href="" class="panel-fav-link fl"><img src="i/fav-icon.png" alt="" /><span class="fav-counter">0</span>Избранное</a>\
        <a href="" class="panel-basket-link fr"><img src="i/dish-logo.png" alt="" /><span class="basket-counter">1</span>Корзина</a>\
      </div>\
    </div>\
    <div class="products-panel-body">\
      <div class="wrapper">\
        <div class="products-panel-content" id="favorites-block">\
          <div id="favorite-elements-container">\
            <div class="vitrine scrollpane">\
            </div><div class="keys" style="display:none" title="/132/"></div>\
          </div>\
    \
          <div class="nofloat" id="panel-footer-left">\
            <div class="fl" style="padding-top: 15px">\
              <span class="uppercase">В избранном <span class="green">0</span> блюд на сумму</span>\
              <span class="green"></span>\
            </div>\
            <div class="fr">\
              <a class="btn green-btn h47btn s30 bb favorite-to-basket merge-favorite-with-basket" href="#">Добавить в заказ</a>    </div>\
          </div>\
        </div>        <div class="products-panel-content" id="basket-block">\
        <div id="basket-elements-container">\
          <div class="scrollpane vitrine">\
            <div class="product panel-product">\
              <a data-id="132" data-type="product" data-index="0" class="remove remove-basket" data-confirm="true" href="#"></a>        <a href="/132/" class="product-image" style="background-image: url(/f/product/demo1.jpg)"></a>\
              <div class="product-name">\
                <a href="/132/">Нью-Йорк</a>\
              </div>\
              <div class="center">\
                <div class="grey m3 s15">Цена за:</div>\
                <span class="spinner">\
                  <span class="spinner-down"></span>\
                  <input class="inp" type="text" value="1" />\
                  <span class="spinner-up"></span>\
                </span>\
                <div class="product-price">\
                  <span>699 руб.</span>\
                </div>\
              </div>\
            </div></div><div class="keys" style="display:none" title="/132/"><span>132</span></div>\
        </div>\
\
        <div class="nofloat" id="panel-footer-right">\
          <div class="fl" style="padding-top: 15px">\
            <span class="uppercase">В вашем заказе <span class="green">1</span> блюдо на сумму</span>\
            <span class="green">699 руб.</span>\
          </div>\
          <div class="fr">\
            <a href="" class="btn grey-btn h47btn s15 bb uppercase panel-one-click-link">Заказать в 1 клик</a>\
            <a href="" class="btn green-btn h47btn s30 bb">Оформить заказ</a>\
          </div>\
        </div>\
      </div>      </div>\
    </div>\
  </div>\
';