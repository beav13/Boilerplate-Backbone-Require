/*
*  Main App View, will be attached to the router;
*  Responsible for switching views when changing routes.
*  Attaches itself to the app container
*/
define([], function() {

  var AppView = Backbone.View.extend({
    el: $('#app-container'),

    /*
    *   Renders the given view, shows new view and
    *   hides the old one
    *   
    *   @param view   the new view to be displayed
    */
    setView : function(view) {
      var closingView = this.view;

      this.view = view;
      this.view.render();
      this.view.$el.hide();
      this.$el.append(this.view.el);

      this.openView(this.view);
      this.closeView(closingView);
    },

    /*
    *   Add efect to view before showing it
    *   
    *   @param view   the view which will receive the efect
    */
    openView: function(view){
      view.$el.slideToggle(500);
    },

    /*
    *   Closes view
    *   
    *   @param view   the view which will be closed
    */
    closeView: function(view){
      if (view){
        view.$el.slideToggle(500, function(){
          view.close();
        });
      }
    }

  });

  return AppView;
});