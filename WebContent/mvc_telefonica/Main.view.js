sap.ui.jsview("mvc_telefonica.Main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mvc_telefonica.Main
	*/ 
	getControllerName : function() {
		return "mvc_telefonica.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mvc_telefonica.Main
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
			new sap.m.List("teste",{headerText: "Teste de List"})
			]
		});
	}

});