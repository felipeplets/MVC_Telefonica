sap.ui.controller("views.Main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mvc_telefonica.Main
*/
	onInit: function() {

		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("http://dca.telefonicabeta.com/m2m/v2/services/tlkqkc64i1ad/assets/tlkqkc64i1ad/",{},false);

		this.getView().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mvc_telefonica.Main
*/
	onBeforeRendering: function() {
  	var itemTemplate = new sap.m.StandardListItem({
             title : "{ms/v}",
             iconInset: false
         });
		sap.ui.getCore().byId("teste").bindAggregation("items", { path: "/data/sensorData" , template: itemTemplate});
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mvc_telefonica.Main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mvc_telefonica.Main
*/
//	onExit: function() {
//
//	}

});