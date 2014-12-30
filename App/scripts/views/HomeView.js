/*
*  Example Home View Class
*/
define([  
  'text!../../resources/templates/home.htm'
], function(template){

  var HomeView = Backbone.View.extend({

    initialize: function(){
    	//ex: add listeners to model when needed
    },

    render: function(){
    	// Compile the template using Underscores micro-templating
    	var compiled = _.template(template);
    	this.$el.html(compiled({name: this.model.get("name")}));
    }

  });

  return HomeView;
});