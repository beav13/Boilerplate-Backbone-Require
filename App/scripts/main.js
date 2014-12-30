/*
*	Bootstrap for the require plugin
*/
require.config({
	//declare the dependencies of each library
	shim:{
		'backbone':{
			deps:['jquery','underscore'],
			exports:'Backbone'
		},
			'underscore':{
			exports:'_'
		},
			'jqueryui':{
			deps:['jquery']
		}
	},
	//declare static names for libraries paths
	paths:{
		text:'libs/require/text',
		css:'libs/require/css',
		jquery:'libs/jquery/jquery.min',
		jqueryui:'libs/jquery/jquery-ui.min',
		underscore:'libs/underscore/underscore.min',
		backbone:'libs/backbone/backbone.min'
	}
});

/*
*	Load the required libraries
*/
require(['jquery', 
		'jqueryui', 
		'backbone', 
		'underscore', 
		'css!../resources/css/main', 
		'css!../resources/css/jquery-ui'],function($){

	/*
	*	After loading the required libraries, initialize app
	*/
	require(['app'],function(App){

		/*
		* Add a 'close' method to each Backbone.View, this will remove elements
		* from the DOM, clean the events and call onClose (if any) to run custom* clean-up code.
		*/
		Backbone.View.prototype.close = function() {
			// - if there is a onClose function, call it
			if (this.onClose){
				this.onClose();
			}
			// - remove the HTML that populates this.el
			// - clean DOM element events (events: {...})
			this.remove();
			// - unbind any events that the view triggers directly
			this.unbind();
		};

		/*
		*	Start the app
		*/
		App.initialize();
	});

});