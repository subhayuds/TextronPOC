sap.ui.jsview("textron.revision.view.Search", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Detail
	*/ 
	getControllerName : function() {
		return "textron.revision.controller.Search";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Detail
	*/ 
	createContent : function(oController) {
		var textronLogo = new sap.m.Image("img_TextronLogo");
		textronLogo.setSrc("./mime/TextronLogo.jpg");
		
		var labelWorkOrderHeader = new sap.m.Label({
			id : "label_SearchRevisionHeader", // sap.ui.core.ID
			design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
			text : "Revision Search", // string
		});
		labelWorkOrderHeader.addStyleClass("customHeader");

		var searchRevisionHeaderBar = new sap.m.Bar({
			id : "bar_SearchRevisionHeader", // sap.ui.core.ID
			enableFlexBox : false, // boolean
			translucent : false, // boolean, since 1.12
			design : sap.m.BarDesign.SubHeader, // sap.m.BarDesign, since 1.22
			visible : true, // boolean, since 1.22
			width : "100%",
			contentLeft : [textronLogo], // sap.ui.core.Control
			contentMiddle : [labelWorkOrderHeader], // sap.ui.core.Control
		});
		
		var horizontalSpacer =  new sap.ui.commons.layout.AbsoluteLayout("absolute_Horizontal_Spacer");
		horizontalSpacer.setWidth("50px");
		
		var searchViewMasterLayout = new sap.ui.commons.layout.MatrixLayout({
								id : 'id_SearchViewMasterLayout',
								layoutFixed : false,
								columns : 1,
								width : '100%',
							});
		
		/******* Row 1 Start *****/
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow("searchViewMasterLayout_Row-1");
	    oRow.setHeight("50px");
	    var oCell = new sap.ui.commons.layout.MatrixLayoutCell("searchViewMasterLayout_Cell-1-1");
	    oCell.setHAlign(sap.ui.commons.layout.HAlign.Center);
	    oCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    searchViewMasterLayout.addRow(oRow);
	    
	    var searchParamsLayout = new sap.ui.commons.layout.MatrixLayout({
										id : 'id_SearchParamsLayout',
										layoutFixed : true,
										columns : 3,
										width : '85%',
									});
	    
	    /****** Search Parameter Row 1 Start ******/
	    var searchParamRow = new sap.ui.commons.layout.MatrixLayoutRow("SearchScreenParam_Row-1");
	    searchParamRow.setHeight("50px");
	    var searchParamCell = new sap.ui.commons.layout.MatrixLayoutCell("SearchScreenParam_Cell-1-1");
	    searchParamCell.setHAlign(sap.ui.commons.layout.HAlign.Right);
	    searchParamCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    searchParamsLayout.addRow(searchParamRow);
	    
	    var label1 =  new sap.m.Label({
						id : "lbl_SearchParam_AircraftNumber", // sap.ui.core.ID
						design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
						text : "Aircraft Number:", // string
					});

	    searchParamCell.addContent(label1);
	    searchParamRow.insertCell(searchParamCell,0);
	    
	    var searchParamCell = new sap.ui.commons.layout.MatrixLayoutCell("SearchScreenParam_Cell-1-2");
	    searchParamCell.addStyleClass("customMatrixLayoutCellWidth");
	    searchParamRow.insertCell(searchParamCell,1);
	    
	    var searchParamCell = new sap.ui.commons.layout.MatrixLayoutCell("SearchScreenParam_Cell-1-3");
	    searchParamCell.setHAlign(sap.ui.commons.layout.HAlign.Left);
	    searchParamCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    
	    var input1 =  new sap.m.Input("txt_SearchParam_AircraftNumber");
	    input1.setWidth("300px");
	    
	    searchParamCell.addContent(input1);
	    searchParamRow.insertCell(searchParamCell,2);
	    /****** Search Parameter Row 1 End ******/
	    
	    /****** Search Parameter Row 2 Start ******/
	    var searchParamRow = new sap.ui.commons.layout.MatrixLayoutRow("SearchScreenParam_Row-2");
	    searchParamRow.setHeight("50px");
	    var searchParamCell = new sap.ui.commons.layout.MatrixLayoutCell("SearchScreenParam_Cell-2-1");
	    searchParamCell.setHAlign(sap.ui.commons.layout.HAlign.Right);
	    searchParamCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    searchParamsLayout.addRow(searchParamRow);
	    
	    var label2 =  new sap.m.Label({
							id : "lbl_SearchParam_RevisionNumber", // sap.ui.core.ID
							design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
							text : "Revision Number:", // string
						});

	    searchParamCell.addContent(label2);
	    searchParamRow.insertCell(searchParamCell,0);
	    
	    var searchParamCell = new sap.ui.commons.layout.MatrixLayoutCell("SearchScreenParam_Cell-2-2");
	    searchParamCell.addStyleClass("customMatrixLayoutCellWidth");
	    searchParamRow.insertCell(searchParamCell,1);
	    
	    var searchParamCell = new sap.ui.commons.layout.MatrixLayoutCell("SearchScreenParam_Cell-2-3");
	    searchParamCell.setHAlign(sap.ui.commons.layout.HAlign.Left);
	    searchParamCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    
	    var input2 =  new sap.m.Input("txt_SearchParam_RevisionNumber");
	    input2.setWidth("300px");
	    
	    searchParamCell.addContent(input2);
	    searchParamRow.insertCell(searchParamCell,2);
	    /****** Search Parameter Row 2 End ******/
	    
	    /****** Search Parameter Row 3 Start ******/
	    var searchParamRow = new sap.ui.commons.layout.MatrixLayoutRow("SearchScreenParam_Row-3");
		searchParamRow.setHeight("50px");
	    var searchParamCell = new sap.ui.commons.layout.MatrixLayoutCell("SearchScreenParam_Cell-3-1");
	    searchParamCell.setHAlign(sap.ui.commons.layout.HAlign.Right);
	    searchParamCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    searchParamsLayout.addRow(searchParamRow);
	    
	    var label3 =  new sap.m.Label({
							id : "lbl_CSRName", // sap.ui.core.ID
							design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
							text : "CSR Name:", // string
						});

	    searchParamCell.addContent(label3);
	    searchParamRow.insertCell(searchParamCell,0);
	    
	    var searchParamCell = new sap.ui.commons.layout.MatrixLayoutCell("SearchScreenParam_Cell-3-2");
	    searchParamCell.addStyleClass("customMatrixLayoutCellWidth");
	    searchParamRow.insertCell(searchParamCell,1);
	    
	    var searchParamCell = new sap.ui.commons.layout.MatrixLayoutCell("SearchScreenParam_Cell-3-3");
	    searchParamCell.setColSpan(1);
	    searchParamCell.setHAlign(sap.ui.commons.layout.HAlign.Left);
	    searchParamCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    
	    var input3 =  new sap.m.Input("txt_CSRName");
	    input3.setWidth("300px");
	    
	    searchParamCell.addContent(input3);
	    searchParamRow.insertCell(searchParamCell,2);
	    /****** Search Parameter Row 3 End ******/
	    
	    /****** Search Parameter Row 4 Start ******/
	    var searchParamRow = new sap.ui.commons.layout.MatrixLayoutRow("SearchScreenParam_Row-4");
		searchParamRow.setHeight("75px");
	    var searchParamCell = new sap.ui.commons.layout.MatrixLayoutCell("SearchScreenParam_Cell-4-1");
	    searchParamCell.setColSpan(3);
	    searchParamCell.setHAlign(sap.ui.commons.layout.HAlign.Center);
	    searchParamCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    searchParamsLayout.addRow(searchParamRow);
	    
	    var button_Search = new sap.m.Button({
			id : "id_Button_Search", // sap.ui.core.ID
			text : "Display", // string
			type : sap.m.ButtonType.Accept, // sap.m.ButtonType
			width : undefined, // sap.ui.core.CSSSize
			enabled : true, // boolean
			visible : true, // boolean
			icon : "sap-icon://display", // sap.ui.core.URI
			iconFirst : true, // boolean
			activeIcon : undefined, // sap.ui.core.URI
			iconDensityAware : true, // boolean
			tooltip : "Search", // sap.ui.core.TooltipBase
			width: "70%",
			tap : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			press : [ function(oEvent) {
				var control = oEvent.getSource();
				oController.displaySearchResult(oEvent);
			}, this ]
		});
	    
	    button_Search.setWidth("100px");
		
	    searchParamCell.addContent(button_Search);
	    searchParamRow.addCell(searchParamCell,3);
	    /****** Search Parameter Row 4 End ******/
	    
	    oCell.addContent(searchParamsLayout);
	    oRow.addCell(oCell);
	    /******* Row 1 End *****/
	    
	    /******* Row 2 Start *****/
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow("searchViewMasterLayout_Row-2");
	    oRow.setHeight("100%");
	    var oCell = new sap.ui.commons.layout.MatrixLayoutCell("searchViewMasterLayout_Cell-2-1");
	    oCell.setHAlign(sap.ui.commons.layout.HAlign.Center);
	    oCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    searchViewMasterLayout.addRow(oRow);
	    
		var table_result = new sap.m.Table("id_Table_Search_Result");
		table_result.setMode(sap.m.ListMode.SingleSelectMaster);
		table_result.setWidth("80%");
		table_result.attachItemPress(function(oEvent) {
			oController.handleLineItemPress(oEvent);
		});
		
		oCell.addContent(table_result);
		oRow.addCell(oCell);
		/******* Row 2 End *****/
	    
		var tableColumn = new sap.m.Column("id_TableColumn_RevisionNo");
		var lbl_TableHeaderRevisionNo = new sap.m.Label({
											id : "id_TableColumnLabel_RevisionNo", // sap.ui.core.ID
											design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
											text : "Revision No", // string
											visible : true, // boolean
											textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
											textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
										// sap.ui.core.Control
										});
		lbl_TableHeaderRevisionNo.addStyleClass("customTableHeader");
		tableColumn.setHeader(lbl_TableHeaderRevisionNo);
		tableColumn.setHAlign(sap.ui.commons.layout.HAlign.Center);
		tableColumn.setVAlign(sap.ui.commons.layout.VAlign.Middle);
		table_result.addColumn(tableColumn);
		
		var lbl_TableHeaderRevisionDate = new sap.m.Label({
											id : "id_TableColumnLabel_RevisionDate", // sap.ui.core.ID
											design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
											text : "Revision Date", // string
											visible : true, // boolean
											textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
											textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
										});
		lbl_TableHeaderRevisionDate.addStyleClass("customTableHeader");
		tableColumn = new sap.m.Column("id_TableColumn_RevisionDate");
		tableColumn.setHeader(lbl_TableHeaderRevisionDate);
		tableColumn.setHAlign(sap.ui.commons.layout.HAlign.Center);
		tableColumn.setVAlign(sap.ui.commons.layout.VAlign.Middle);
		tableColumn.attach
		table_result.addColumn(tableColumn);
		
		var lbl_TableHeaderPlant = new sap.m.Label({
											id : "id_TableColumnLabel_Plant", // sap.ui.core.ID
											design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
											text : "Plant", // string
											visible : true, // boolean
											textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
											textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
										});
		lbl_TableHeaderPlant.addStyleClass("customTableHeader");
		tableColumn = new sap.m.Column("id_TableColumn_Plant");
		tableColumn.setHeader(lbl_TableHeaderPlant);
		tableColumn.setHAlign(sap.ui.commons.layout.HAlign.End);
		tableColumn.setVAlign(sap.ui.commons.layout.VAlign.Middle);
		table_result.addColumn(tableColumn);
		
		var lbl_TableHeaderAircraftNo = new sap.m.Label({
										id : "id_TableColumnLabel_AircraftNo", // sap.ui.core.ID
										design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
										text : "Aircraft No", // string
										visible : true, // boolean
										textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
										textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
									});
		lbl_TableHeaderAircraftNo.addStyleClass("customTableHeader");
		tableColumn = new sap.m.Column("id_TableColumn_AircraftNo");
		tableColumn.setHeader(lbl_TableHeaderAircraftNo);
		tableColumn.setHAlign(sap.ui.commons.layout.HAlign.End);
		tableColumn.setVAlign(sap.ui.commons.layout.VAlign.Middle);
		table_result.addColumn(tableColumn);
		
		var lbl_TableHeaderEquip = new sap.m.Label({
										id : "id_TableColumnLabel_Equip", // sap.ui.core.ID
										design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
										text : "Equipment No", // string
										visible : true, // boolean
										textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
										textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
									});
		lbl_TableHeaderEquip.addStyleClass("customTableHeader");
		tableColumn = new sap.m.Column("id_TableColumn_Equip");
		tableColumn.setHeader(lbl_TableHeaderEquip);
		tableColumn.setHAlign(sap.ui.commons.layout.HAlign.End);
		tableColumn.setVAlign(sap.ui.commons.layout.VAlign.Middle);
		table_result.addColumn(tableColumn);
		
		var columnListItem_SearchResult = new sap.m.ColumnListItem({
			id : "id_ColumnListItem_SearchResult",
			type : "Active", // sap.m.ListType
			cells : [
				         new sap.m.Text({
				        	 text : "{path:'Revnr'}" // string
				         }),
				         new sap.m.Text({
				        	 text : "{path:'RevDate'}", // string
				         }),
				         new sap.m.Text({
				        	 text : "{path:'Plant'}" // string
				         }),
				         new sap.m.Text({
				        	 text : "{path:'Tplnr'}", // string
				         }),
				         new sap.m.Text({
				        	 text : "{path:'Equnr'}", // string
				         })
					],
		});
		
		var searchPage = new sap.m.Page("id_Page_Detail");
		searchPage.setBackgroundDesign(sap.m.PageBackgroundDesign.Solid);
		searchPage.setCustomHeader(searchRevisionHeaderBar);
		searchPage.setShowHeader(true);
		searchPage.setShowFooter(false);
		searchPage.addContent(searchViewMasterLayout);
 		return searchPage;
	}
});