jQuery.sap.require("sap.m.MessageToast");
sap.ui.controller("textron.revision.controller.WorkOrders", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.WorkOrders
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.WorkOrders
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.WorkOrders
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.WorkOrders
*/
//	onExit: function() {
//
//	},
	
	navigateBakeToSearch: function() {
		var app_Revision = sap.ui.getCore().byId("idMainApp");
		app_Revision.to("RevisionSearch");
	},
	
	workOrderApprove: function() {
		var msg = 'The Work Order is successfully APPROVED';
	    sap.m.MessageToast.show(msg);
	},
	
	workOrderReject: function() {
		var msg = 'The Work Order is successfully REJECTED';
	    sap.m.MessageToast.show(msg);
	},
	
	createNotification: function() {
		if (! this._oDialog) {
	      this._oDialog = sap.ui.xmlfragment("textron.revision.fragments.CreateNotification", this);
	      this.getView().addDependent(this._oDialog);
	    }

	    // toggle compact style
	    jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oDialog);
	    this._oDialog.open();
	},
	
	onCloseDialog: function() {
		this._oDialog.close();
	}
});