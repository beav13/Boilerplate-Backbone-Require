/*
*   Default Router class with example routes
*/
define(['models/ProjectModel',
        'views/HomeView',
        'views/AboutView'
  ], function(ProjectModel, HomeView, AboutView){

  var AppRouter = Backbone.Router.extend({

    //save the app view
    appView: null,

    initialize: function(options){
      this.appView = options.appView;
    },

    /*
    * Define the routes
    */
    routes: {      
      '': 'rerouteHome',
      'about': 'rerouteAbout',
      '*default': 'redirectHome'
    },

    /*
    * Home route handler
    */
    rerouteHome: function(){
      var homeView = new HomeView({model: new ProjectModel()});
      this.appView.setView(homeView);
    },

    /*
    * About route handler
    */
    rerouteAbout: function(){
      var aboutView = new AboutView();
      this.appView.setView(aboutView);
    },

    /*
    * Undeclared route handler
    */
    redirectHome: function(){
      this.navigate('/');
    }
  });
  
  return AppRouter;
});