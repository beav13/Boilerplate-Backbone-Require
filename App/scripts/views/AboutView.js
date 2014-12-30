/*
*  Example Home View Class
*/
define([  
  'text!../../resources/templates/about.htm'
], function(template){

  var AboutView = Backbone.View.extend({

    initialize: function(){
    	//ex: add listeners to model when needed
    },

    render: function(){
    	// Compile the template using Underscores micro-templating
    	var compiled = _.template(template);
    	this.$el.html(compiled());
    }

  });

  return AboutView;
});