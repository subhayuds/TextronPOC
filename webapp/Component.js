jQuery.sap.declare("textron.revision.Component");
sap.ui.core.UIComponent.extend("textron.revision.Component", {
	createContent : function() {
		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "textron.revision.view.Main",
			type : "JS",
			viewData : { component : this }
		});
		
		var revisionSearchResultModel = new sap.ui.model.json.JSONModel("model/RevisionSearchResult.json");
		sap.ui.getCore().setModel(revisionSearchResultModel,"searchResult");
		oView.setModel(revisionSearchResultModel);
		
		var workOrdersModel = new sap.ui.model.json.JSONModel("model/WorkOrders.json");
		sap.ui.getCore().setModel(workOrdersModel,"workOrders");
		oView.setModel(workOrdersModel);
		
		//alert(workOrdersModel.getProperty("/Revision"));
		
		/*var oDataURL_VacationOverview = "http://dkasub.corp.lego.com:21000/sap/opu/odata/sap/Y_ABSENCE_QUOTA_SRV/QuotaOverviewItems";
		var oDataFilter_VacationOverview = "$filter=Deductbegin eq datetime'2014-10-05T00:00:00' and Deductend eq datetime'2014-10-10T00:00:00'";
		var oModel = new sap.ui.model.odata.ODataModel(oDataURL_VacationOverview + "?" + oDataFilter_VacationOverview);
		sap.ui.getCore().setModel(oModel,"odataSearchResult");*/
		
		return oView;
	}
});