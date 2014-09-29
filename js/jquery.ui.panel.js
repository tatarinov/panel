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

  tabs : [
    {
      header: '#panel-header-left',
      body: '#panel-body-left',
      footer: '#panel-footer-left',
	  carousel : undefined,
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
    var options = widget.options;
//    var controls = options.controls;

	/*
    for(var i in options.controls)
      if( options.controls.hasOwnProperty(i) &&  i != 'carouselLeft' && i != 'carouselRight' && i != 'ajaxUpdateSelectors' )
        controls[i] = $(options.controls[i]);
	*/	
	
	for(i in tabs)
	{
	  $(tabs[i].header).bind('click', function(e) {
        e.preventDefault();
        widget._clickByHeader($(this), $(tabs[i].body));
	  });
	}

    $(hidePanelButton).bind('click', function(e) {
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
    var controls = options.controls;

    controls.headerLeft.removeClass(options.activeClass);
    controls.headerRight.removeClass(options.activeClass);
    controls.bodyLeft.hide();
    controls.bodyRight.hide();
  },

  _showPanel : function() {
    this.element.removeClass(this.options.collapseClass);
  },

  _checkEmptyPanel : function() {
    var options = this.options;
    var controls = options.controls;
    var bodyStateLeft = !this._isEmptyBody(controls.bodyLeft);
    var bodyStateRight = !this._isEmptyBody(controls.bodyRight);

    if( bodyStateLeft )
    {
      controls.headerLeft.removeClass(options.hiddenClass);
      controls.footerLeft.show();
    }
    else
    {
      controls.headerLeft.addClass(options.hiddenClass);
      controls.footerLeft.hide();
    }

    if( bodyStateRight )
    {
      controls.headerRight.removeClass(options.hiddenClass);
      controls.footerRight.show();
    }
    else
    {
      controls.headerRight.addClass(options.hiddenClass);
      controls.footerRight.hide();
    }

    if( bodyStateLeft || bodyStateRight )
    {
      this.element.removeClass(options.hiddenClass);
    }
    else
    {
      this._collapse();
      this.element.addClass(options.hiddenClass);
    }
  },

  _isEmptyBody : function(body) {
     return body.find(this.options.panelItemElement).length > 0 ? false : true;
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
    var controls = options.controls;
    var content = $('<div>' + response + '</div>');
    var panel = $(content.find('#' + this.element.attr('id')));

    controls.headerLeft.html(panel.find(controls.headerLeft.selector).html());
    controls.headerRight.html(panel.find(controls.headerRight.selector).html());

    controls.footerLeft.html(panel.find(controls.footerLeft.selector).html());
    controls.footerRight.html(panel.find(controls.footerRight.selector).html());

    this._updateCarousel(controls.carouselLeft, panel);
    this._updateCarousel(controls.carouselRight, panel);

    for(var i in controls.ajaxUpdateSelectors)
    {
      if( controls.ajaxUpdateSelectors.hasOwnProperty(i) )
      {
        var oldElement = $(controls.ajaxUpdateSelectors[i]);
        var newElement = panel.find(controls.ajaxUpdateSelectors[i]);

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