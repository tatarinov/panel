/**
 * @author Alexey Tatarivov <tatarinov@shogo.ru>
 * @link https://github.com/shogodev/argilla/
 * @copyright Copyright &copy; 2003-2014 Shogo
 * @license http://argilla.ru/LICENSE
 */
;$.widget('argilla.panelElementsContainer', {

  options : {
    type : null,
    settings : {}
  },

  _create: function() {
    if( this.options.type === 'panelScroll' )
      this.element.panelScroll(this.options.settings);
    else if( this.options.type === 'panelCarousel' )
      this.element.panelCarousel(this.options.settings);
    else
      alert('Укажите тип котейнера элементов(panelCarousel или panelScroll)');
  },

  _getWidgetName : function() {
    return 'argilla' + this.options.type.slice(0, 1).toUpperCase() + this.options.type.slice(1);
  },

  update : function(parameters) {
    return this.element.data(this._getWidgetName()).update(parameters);
  },

  getSelector : function() {
    return this.element.data(this._getWidgetName()).getSelector();
  },

  empty : function()
  {
    return this.element.data(this._getWidgetName()).empty();
  },

  destroy: function() {
    $.Widget.prototype.destroy.call(this);
  }
});