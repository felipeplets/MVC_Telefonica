sap.ui.controller("views.Main", {
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mvc_telefonica.Main
*/
	onInit: function() {
  	var itemTemplate = new sap.m.StandardListItem({
             title : { 
             			path: 'ms', 
             		   	formatter: function(value) {
             		   					var sText = "";
										switch(value.p)
										{
											case 'amount':
												if (value.v == 1) {
													sText = 'Button pressed';
												} else {
													sText = 'Button not pressed';
												}
												break;
											case 'temperature':
												sText = 'Temperature ' + value.v + 'ºC';
												break;
											case 'relativeHumidity':
												sText = 'Humidity ' + value.v + '%';
												break;
											case 'luminousIntensity':
												if (value.v < 200) {
													sText = 'Bad luminosity';
												} else {
													sText = 'Good luminosity';
												}
												break;
											case 'sound':
												sText = 'Sound ' + value.v + ' per meter';
												break;
											default:
												sText = value.v;
												break;
										}
										return sText;
             		   				}
             },
             iconInset: false
         });
		sap.ui.getCore().byId("oList").bindAggregation("items", { path: "/data/sensorData" , template: itemTemplate});		this.readSensors();
		setInterval($.proxy(this.readSensors, this), 2000);
	},


	readSensors: function(){
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("http://dca.telefonicabeta.com/m2m/v2/services/tlkqkc64i1ad/assets/tlkqkc64i1ad/",{},false);
		this.getView().setModel(oModel);
	}

});