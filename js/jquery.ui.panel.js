/**
 * @author Alexey Tatarivov <tatarinov@shogo.ru>
 * @link https://github.com/shogodev/argilla/
 * @copyright Copyright &copy; 2003-2014 Shogo
 * @license http://argilla.ru/LICENSE
 */

 /**
  * controls [
  *  {
  *	   'header' : '#panel-header-left',
  *	   'body' : '#panel-body-left',
  *	   'footer' : '#panel-footer-left',
  *	}
  * ]
  *
  */
;$.widget('argilla.panel', {
  options : {
    tabs : [
      {
        header: '#panel-header-left',
        body: '#panel-body-left',
        footer: '#panel-footer-left',
        carousel : undefined
      }
    ],
    hidePanelButton: '#panel-hide-button',
  /*
  headerRight: '#panel-header-right',
      bodyRight: '#panel-body-right',
      footerRight: '#panel-footer-right',

      carouselRight : undefined,
  */
    ajaxUpdateSelectors : [],
    activeClass : 'active',
    collapseClass : 'collapsed',
    hiddenClass : 'hidden',
    panelItemElement : 'li'
  },

  _create: function() {
    var widget = this;
    var options = this.options;
    var tabs = options.tabs;

    for(i in tabs)
    {
      $(tabs[i].header).bind('click', function(e) {
          e.preventDefault();
          widget._clickByHeader($(this), $(tabs[i].body));
      });
    }

    $(options.hidePanelButton).bind('click', function(e) {
      e.preventDefault();
      widget._collapse();
    });

    if( !widget.element.hasClass(options.collapseClass) )
      widget.element.addClass(options.collapseClass);

    widget._checkEmptyPanel();
  },

  _clickByHeader : function(header, boody) {
    if( !header.hasClass(this.options.activeClass) )
    {
      this._deactivateHeader();
      header.addClass(this.options.activeClass);
      boody.show();
      this._showPanel();
    }
    else
      this._collapse();
  },

  _collapse : function() {
    this._deactivateHeader();
    if( !this.element.hasClass(this.options.collapseClass) )
      this.element.addClass(this.options.collapseClass);
  },

  _deactivateHeader : function() {
    var options = this.options;
    var tabs = options.tabs;

    for(i in tabs)
    {
      var tab = tabs[i];
      $(tab.header).removeClass(options.activeClass);
      $(tab.body).hide();
    }
  },

  _showPanel : function() {
    this.element.removeClass(this.options.collapseClass);
  },

  _checkEmptyPanel : function() {
    var options = this.options;
    var tabs = options.tabs;
    var oneTabNotEmpty = false;

    for(i in tabs)
    {
      var tab = tabs[i];
      var emptyBody = tab.carousel.empty();

      if( emptyBody )
      {
        $(tab.header).addClass(options.hiddenClass);
        $(tab.footer).hide();
      }
      else
      {
        oneTabNotEmpty = true;
        $(tab.header).removeClass(options.hiddenClass);
        $(tab.footer).show();
      }
    }

    if( oneTabNotEmpty )
    {
      this.element.removeClass(options.hiddenClass);
    }
    else
    {
      this._collapse();
      this.element.addClass(options.hiddenClass);
    }
  },

/*  _updateCarousel : function(carousel, body ,content) {
    var options = this.options;
    var controls = options.controls;

    if( carousel != undefined )
    {

      var selector = carousel.panelCarousel('getSelector') + ' ul';
      var carouselItems = controls[body].find(selector);
      var newCarouselItems = content.find(controls[body].selector + ' ' + selector).html();
      var emptyBeforeUpdate = this._isEmptyBody(controls[body]);
      carouselItems.html(newCarouselItems);
      var emptyAfterUpdate = this._isEmptyBody(controls[body]);

      if( !emptyBeforeUpdate && emptyAfterUpdate )
        this._collapse();

      carousel.panelCarousel('update');
    }
  },*/

  _updateCarousel : function(carousel, content) {
    if( carousel != undefined )
    {
      var collapse = carousel.panelElementsContainer('update', {'newContent' : content});

      if( collapse )
        this._collapse();
    }
  },

  update : function(response)
  {
    var options = this.options;
    var tabs = options.tabs;
    var content = $('<div>' + response + '</div>');
    var newPanel = $(content.find('#' + this.element.attr('id')));

    for(i in tabs)
    {
      $(tabs[i].header).html(newPanel.find(tabs[i].header).html());
      $(tabs[i].footer).html(newPanel.find(tabs[i].footer).html());
      this._updateCarousel(tabs[i].carousel, newPanel);
    }

    for(var i in options.ajaxUpdateSelectors)
    {
      if( options.ajaxUpdateSelectors.hasOwnProperty(i) )
      {
        var oldElement = $(options.ajaxUpdateSelectors[i]);
        var newElement = newPanel.find(options.ajaxUpdateSelectors[i]);

        if( oldElement.length > 0 &&  newElement.length > 0 )
        {
          oldElement.replaceWith(newElement);
        }
      }
    }

    this._checkEmptyPanel();
  },

  animate : function(pic, panelHeader) {
    $(this.options.controls[panelHeader].selector).addInCollection(pic)
  },

  destroy: function() {
    $.Widget.prototype.destroy.call(this);
  }
});