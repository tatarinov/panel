/**
 * @author Alexey Tatarivov <tatarinov@shogo.ru>
 * @link https://github.com/shogodev/argilla/
 * @copyright Copyright &copy; 2003-2014 Shogo
 * @license http://argilla.ru/LICENSE
 */
;$.widget('argilla.panelScroll', {

  options : {
    controls : {
      container : '.scrollpane'
    },
    showArrows: true,
    autoReinitialise: true,
    horizontalDragMinWidth: 30,
    horizontalDragMaxWidth: 30
  },

  _create: function() {
    var widget = this;
    var options = widget.options;
    var controls = options.controls;

    controls.container = widget.element.find(controls.container);

    controls.container.jScrollPane({
      showArrows: options.showArrows,
      autoReinitialise: options.autoReinitialise,
      horizontalDragMinWidth: options.horizontalDragMinWidth,
      horizontalDragMaxWidth: options.horizontalDragMaxWidth
    });
  },

  update : function(parameters)
  {
    var newContent = parameters.newContent;
    var itemsBlock = this.element.find('.jspPane');
    var newItemsBlock = newContent.find('#' + this.element.attr('id') + ' ' + this.getSelector());
    var emptyBeforeUpdate = this.empty();
    itemsBlock.html(newItemsBlock.html());
    var emptyAfterUpdate = this.empty();

    return !emptyBeforeUpdate && emptyAfterUpdate;
  },

  empty : function()
  {
    return this.element.find('.jspPane div').length > 0 ? false : true;
  },

  getSelector : function() {
    return this.options.controls.container.selector;
  },

  destroy: function() {
    $.Widget.prototype.destroy.call(this);
  }
});