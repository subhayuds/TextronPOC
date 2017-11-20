sap.ui.jsview("textron.revision.view.Main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf lego_vacation_overview.Vacation_Overview_Main
	*/ 
	getControllerName : function() {
		return "textron.revision.controller.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf lego_vacation_overview.Vacation_Overview_Main
	*/ 
	createContent : function(oController) {
		this.setDisplayBlock(true);
		
		var app_RevisionsMain = new sap.m.App({
			id : "idMainApp", // sap.ui.core.ID
			height : '100%', // sap.ui.core.CSSSize
			width : '100%', // sap.ui.core.CSSSize
			visible : true, // boolean
			navigate : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ], // since 1.7.1
			afterNavigate : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ], // since 1.7.1
			orientationChange : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ]
		});

		var searchView = sap.ui.jsview("RevisionSearch", "textron.revision.view.Search");
		app_RevisionsMain.addPage(searchView);
		
		var workOrderView = sap.ui.jsview("WrokOrder", "textron.revision.view.WorkOrders");
		app_RevisionsMain.addPage(workOrderView);
		
		app_RevisionsMain.setInitialPage(searchView)
		
 		return app_RevisionsMain;
	}
});