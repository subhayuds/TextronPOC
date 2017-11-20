sap.ui.controller("textron.revision.controller.Search", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Detail
*/
	onInit: function() {

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Detail
*/
	onBeforeRendering: function() {

	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Detail
*/
	onAfterRendering: function() {
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Detail
*/
	onExit: function() {

	},
	
	displaySearchResult: function(evt) {
		var searchResultModel = sap.ui.getCore().getModel("searchResult");
		var app_Revision = sap.ui.getCore().byId("idMainApp");
		var table_SearchResult = sap.ui.getCore().byId("id_Table_Search_Result");
		var columnListItem_SerachResult = sap.ui.getCore().byId("id_ColumnListItem_SearchResult");
		
		table_SearchResult.bindItems("/Revision", columnListItem_SerachResult);
	},
	
	handleLineItemPress: function(evt) {
		var app_Revision = sap.ui.getCore().byId("idMainApp");
		app_Revision.to("WrokOrder");
	}
});