/*
*   Bootstrap the App
*   Create the App View, create the App namespace, initialize the router
*/
define(['views/AppView', 'router'], function(AppView, Router){
  
  var initialize = function(){
    var appView = new AppView();
    App = {};
    App.router = new Router({appView: appView});
    Backbone.history.start();
  }

  return {
    initialize: initialize
  };

});