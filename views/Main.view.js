sap.ui.jsview("views.Main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mvc_telefonica.Main
	*/ 
	getControllerName : function() {
		return "views.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mvc_telefonica.Main
	*/ 
	createContent : function(oController) {

		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});

		var oPage = new sap.m.Page({
			title: "{i18n>Title}",
			content: [
				new sap.m.List("oList",{headerText: "{i18n>Sensors}"})
			]
		});
		oPage.setModel(i18nModel, "i18n");
 		return oPage; 
	}

});