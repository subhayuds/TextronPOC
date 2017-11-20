sap.ui.jsview("textron.revision.view.WorkOrders", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.WorkOrders
	*/ 
	getControllerName : function() {
		return "textron.revision.controller.WorkOrders";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.WorkOrders
	*/ 
	createContent : function(oController) {
		var verticalSpacer =  new sap.ui.commons.layout.AbsoluteLayout("absolute_Spacer_Vertical");
		verticalSpacer.setHeight("25px");
		
		var horizontalSpacer =  new sap.ui.commons.layout.AbsoluteLayout("absolute_Spacer_Horizontal");
		horizontalSpacer.setWidth("25px");
		
		var imageLogo = new sap.m.Image("img_Logo");
		imageLogo.setSrc("./mime/TextronLogo.jpg");
		
		var labelWorkOrderHeader = new sap.m.Label({
			id : "label_WorkOrderHeader", // sap.ui.core.ID
			design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
			text : "Revision Items", // string
		});
		labelWorkOrderHeader.addStyleClass("customHeader");
		
		/*var labelLoginInfo = new sap.m.Label({
			id : "label_LoginInfo", // sap.ui.core.ID
			design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
			text : "Logged in: Anil.V", // string
		});*/
		
		var workOrderHeaderBar = new sap.m.Bar({
			id : "bar_WorkOrderHeader", // sap.ui.core.ID
			enableFlexBox : false, // boolean
			translucent : false, // boolean, since 1.12
			design : sap.m.BarDesign.SubHeader, // sap.m.BarDesign, since 1.22
			visible : true, // boolean, since 1.22
			width : "100%",
			contentLeft : [imageLogo], // sap.ui.core.Control
			contentMiddle : [labelWorkOrderHeader], // sap.ui.core.Control
		});
		
		var workOrderFooterBar = new sap.m.Bar({
			id : "bar_WorkOrderFooter", // sap.ui.core.ID
			enableFlexBox : false, // boolean
			translucent : false, // boolean, since 1.12
			design : sap.m.BarDesign.Footer, // sap.m.BarDesign, since 1.22
			visible : true, // boolean, since 1.22
			width : "100%",
		});
		
		var masterLayout = new sap.ui.commons.layout.MatrixLayout({
								id : 'layout_Master',
								layoutFixed : true,
								columns : 1,
								width : '100%',
							});
		
		var horizontalDivider =  new sap.ui.commons.HorizontalDivider({
			id : "divider_1", // sap.ui.core.ID
			visible : true, // boolean
			width : "100%", // sap.ui.core.CSSSize
			type : sap.ui.commons.HorizontalDividerType.Area, // sap.ui.commons.HorizontalDividerType
			height : sap.ui.commons.HorizontalDividerHeight.Medium, // sap.ui.commons.HorizontalDividerHeight\
		});
		
		/***** Row 1 Start*****/
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow("Row-1");
	    var oCell = new sap.ui.commons.layout.MatrixLayoutCell("Cell-1-1");
	    oCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    masterLayout.addRow(oRow);

		oCell.addContent(horizontalDivider);
		oRow.addCell(oCell);
		/***** Row 1 End *****/
		
		/***** Row 2 Start*****/
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow("Row-2");
	    oRow.setHeight("45px");
	    var oCell = new sap.ui.commons.layout.MatrixLayoutCell("Cell-2-1");
	    oCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    oCell.setHAlign(sap.ui.commons.layout.HAlign.Center);
	    masterLayout.addRow(oRow);
	    
	    var layoutToolbar = new sap.ui.commons.layout.MatrixLayout("layout_Toolbar");
	    layoutToolbar.setColumns(10);
	    layoutToolbar.setWidth("100%");
	    var toolbarRow = new sap.ui.commons.layout.MatrixLayoutRow("layout_Toolbar_Row-1");
	    layoutToolbar.addRow(toolbarRow);
	    
	    var iconPageBack = new sap.ui.core.Icon({
			id : "icon_PageBack", // sap.ui.core.ID
			src : "sap-icon://nav-back", // sap.ui.core.URI
			size: "25px",
			press : [ function(oEvent) {
				var control = oEvent.getSource();
				oController.navigateBakeToSearch();
			}, this ]
		});
	    
	    var toolbarCell = new sap.ui.commons.layout.MatrixLayoutCell("layout_Toolbar_Cell-1-1");
	    toolbarCell.addStyleClass("customMatrixLayoutCellWidth");
	    toolbarRow.insertCell(toolbarCell,0);
	    
	    var toolbarCell = new sap.ui.commons.layout.MatrixLayoutCell("layout_Toolbar_Cell-1-2");
	    toolbarCell.setHAlign(sap.ui.commons.layout.HAlign.Left);
	    toolbarCell.addContent(iconPageBack);
	    toolbarRow.insertCell(toolbarCell,1);
	    
	    var buttonToolbarApproved = new sap.m.Button({
			id : "button_ToolbarApproved", // sap.ui.core.ID
			text : 'Approved: 1', // string
			type : sap.m.ButtonType.Accept , // sap.m.ButtonType
			width : "150px", // sap.ui.core.CSSSize
			enabled : false, // boolean
			visible : true, // boolean
			icon : "sap-icon://begin", // sap.ui.core.URI
		});
	    
	    var buttonToolbarTotal = new sap.m.Button({
			id : "button_ToolbarTotal", // sap.ui.core.ID
			text : 'Total: 5', // string
			type : sap.m.ButtonType.Emphasized, // sap.m.ButtonType
			width : "150px", // sap.ui.core.CSSSize
			enabled : false, // boolean
			visible : true, // boolean
			icon : "sap-icon://inventory", // sap.ui.core.URI
		});
	       
	    var buttonToolbarRejected = new sap.m.Button({
			id : "button_ToolbarRejected", // sap.ui.core.ID
			text : 'Rejected: 1', // string
			type : sap.m.ButtonType.Reject , // sap.m.ButtonType
			width : "150px", // sap.ui.core.CSSSize
			enabled : false, // boolean
			visible : true, // boolean
			icon : "sap-icon://compare", // sap.ui.core.URI
		});
	    
	    var toolbarCell = new sap.ui.commons.layout.MatrixLayoutCell("layout_Toolbar_Cell-1-3");
	    toolbarCell.setColSpan(6);
	    toolbarCell.setHAlign(sap.ui.commons.layout.HAlign.Center);
	    toolbarCell.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    toolbarCell.insertContent(buttonToolbarTotal,0);
	    toolbarCell.insertContent(buttonToolbarApproved,1);
	    toolbarCell.insertContent(buttonToolbarRejected,2);
	    toolbarRow.insertCell(toolbarCell,2);
	    
	    
	    var button_CreateNotification = new sap.m.Button({
			id : "button_CreateNotofication", // sap.ui.core.ID
			text : "Create Notification", // string
			type : sap.m.ButtonType.Emphasized, // sap.m.ButtonType
			width : undefined, // sap.ui.core.CSSSize
			enabled : true, // boolean
			visible : true, // boolean
			icon : "sap-icon://create", // sap.ui.core.URI
			iconFirst : true, // boolean
			activeIcon : undefined, // sap.ui.core.URI
			iconDensityAware : true, // boolean
			tap : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ],
			press : [ function(oEvent) {
				var control = oEvent.getSource();
				oController.createNotification();
			}, this ]
		});
	    
	    var toolbarCell = new sap.ui.commons.layout.MatrixLayoutCell("layout_Toolbar_Cell-1-4");
	    toolbarCell.setHAlign(sap.ui.commons.layout.HAlign.Right);
	    toolbarCell.addContent(button_CreateNotification);
	    toolbarRow.insertCell(toolbarCell,3);
	    
	    var toolbarCell = new sap.ui.commons.layout.MatrixLayoutCell("layout_Toolbar_Cell-1-5");
	    toolbarCell.addStyleClass("customMatrixLayoutCellWidth");
	    toolbarRow.insertCell(toolbarCell,4);
	    
	    oCell.addContent(layoutToolbar);
		oRow.addCell(oCell);
		/***** Row 2 End *****/
		
		/***** Row 3 Start*****/
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow("Row-3");
	    var oCell = new sap.ui.commons.layout.MatrixLayoutCell("Cell-3-1");
	    masterLayout.addRow(oRow);

		oCell.addContent(horizontalDivider);
		oRow.addCell(oCell);
		/***** Row 3 End *****/
		
		/***** Row 4 Start*****/
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow("Row-4");
		oRow.setHeight("100px");
	    var oCell = new sap.ui.commons.layout.MatrixLayoutCell("Cell-4-1");
	    oCell.setHAlign(sap.ui.commons.layout.HAlign.Center);
	    masterLayout.addRow(oRow);
	    
	    var headerLayout = new sap.ui.commons.layout.MatrixLayout({
			id : 'layout_Header',
			layoutFixed : true,
			columns : 6,
			width : '50%',
		});
	    
	    var oRowHeader = new sap.ui.commons.layout.MatrixLayoutRow("HeaderRow-1");
	    headerLayout.addRow(oRowHeader);
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-1-1");
	    oCellHeader.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    oCellHeader.setHAlign(sap.ui.commons.layout.HAlign.Right);
	    var labelRevisionNumber = new sap.m.Label({
			id : "label_RevisionNumber", // sap.ui.core.ID
			design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
			text : "Revision Number:", // string
		});
	    oCellHeader.addContent(labelRevisionNumber);
	    oRowHeader.insertCell(oCellHeader,0);
	    
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-1-2");
	    oCellHeader.addStyleClass("customMatrixLayoutCellWidth");
	    oRowHeader.insertCell(oCellHeader,1);

	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-1-3");
	    oCellHeader.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    oCellHeader.setHAlign(sap.ui.commons.layout.HAlign.Left);
	    var textRevisionNumber = new sap.m.Text("textRevisionNumber");
	    textRevisionNumber.setText("00010997");
	    oCellHeader.addContent(textRevisionNumber);
	    oRowHeader.insertCell(oCellHeader,2);
	    
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-1-4");
	    oCellHeader.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    oCellHeader.setHAlign(sap.ui.commons.layout.HAlign.Right);
	    var labelRevisionDate = new sap.m.Label({
			id : "label_RevisionDate", // sap.ui.core.ID
			design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
			text : "Revision Date:", // string
		});
	    oCellHeader.addContent(labelRevisionDate);
	    oRowHeader.insertCell(oCellHeader,3);
	    
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-1-5");
	    oCellHeader.addStyleClass("customMatrixLayoutCellWidth");
	    oRowHeader.insertCell(oCellHeader,4);

	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-1-6");
	    oCellHeader.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    oCellHeader.setHAlign(sap.ui.commons.layout.HAlign.Left);
	    var textRevisionDate = new sap.m.Text("textRevisionDate");
	    textRevisionDate.setText("Apr 04 2015");
	    oCellHeader.addContent(textRevisionDate);
	    oRowHeader.insertCell(oCellHeader,5);
	    
	    var oRowHeader = new sap.ui.commons.layout.MatrixLayoutRow("HeaderRow-2");
	    headerLayout.addRow(oRowHeader);
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-2-1");
	    oCellHeader.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    oCellHeader.setHAlign(sap.ui.commons.layout.HAlign.Right);
	    var labelPlant = new sap.m.Label({
			id : "label_Plant", // sap.ui.core.ID
			design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
			text : "Plant:", // string
		});
	    oCellHeader.addContent(labelPlant);
	    oRowHeader.insertCell(oCellHeader,0);
	    
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-2-2");
	    oCellHeader.addStyleClass("customMatrixLayoutCellWidth");
	    oRowHeader.insertCell(oCellHeader,1);

	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-2-3");
	    oCellHeader.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    oCellHeader.setHAlign(sap.ui.commons.layout.HAlign.Left);
	    var textPlant = new sap.m.Text("textPlant");
	    textPlant.setText("45XX");
	    oCellHeader.addContent(textPlant);
	    oRowHeader.insertCell(oCellHeader,2);
	    
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-2-4");
	    oCellHeader.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    oCellHeader.setHAlign(sap.ui.commons.layout.HAlign.Right);
	    var labelAircraftNumber = new sap.m.Label({
			id : "label_AircraftNumber", // sap.ui.core.ID
			design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
			text : "Aircraft Number:", // string
		});
	    oCellHeader.addContent(labelAircraftNumber);
	    oRowHeader.insertCell(oCellHeader,3);
	    
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-2-5");
	    oCellHeader.addStyleClass("customMatrixLayoutCellWidth");
	    oRowHeader.insertCell(oCellHeader,4);

	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-2-6");
	    oCellHeader.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    oCellHeader.setHAlign(sap.ui.commons.layout.HAlign.Left);
	    var textAircraftNumber = new sap.m.Text("textAircraftNumber");
	    textAircraftNumber.setText("680-0180 (0180)");
	    oCellHeader.addContent(textAircraftNumber);
	    oRowHeader.insertCell(oCellHeader,5);
	    
	    var oRowHeader = new sap.ui.commons.layout.MatrixLayoutRow("HeaderRow-3");
	    headerLayout.addRow(oRowHeader);
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-3-1");
	    oCellHeader.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    oCellHeader.setHAlign(sap.ui.commons.layout.HAlign.Right);
	    var labelCSR = new sap.m.Label({
			id : "label_CSR", // sap.ui.core.ID
			design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
			text : "CSR Name:", // string
		});
	    oCellHeader.addContent(labelCSR);
	    oRowHeader.insertCell(oCellHeader,0);
	    
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-3-2");
	    oCellHeader.addStyleClass("customMatrixLayoutCellWidth");
	    oRowHeader.insertCell(oCellHeader,1);
	    
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-3-3");
	    oCellHeader.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    oCellHeader.setHAlign(sap.ui.commons.layout.HAlign.Left);
	    var textCSR = new sap.m.Text("text_CSR");
	    textCSR.setText("Bary Richardson");
	    oCellHeader.addContent(textCSR);
	    oRowHeader.insertCell(oCellHeader,2);
	    
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("CarouselElementCell-3-4");
	    oCellHeader.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    oCellHeader.setHAlign(sap.ui.commons.layout.HAlign.Right);
	    var labelCustometNumber = new sap.m.Label({
			id : "label_CustometNumber", // sap.ui.core.ID
			design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
			text : "Customet Number:", // string
		});
	    oCellHeader.addContent(labelCustometNumber);
	    oRowHeader.insertCell(oCellHeader,3);
	    
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-3-5");
	    oCellHeader.addStyleClass("customMatrixLayoutCellWidth");
	    oRowHeader.insertCell(oCellHeader,4);
	    
	    var oCellHeader = new sap.ui.commons.layout.MatrixLayoutCell("HeaderCell-4-6");
	    oCellHeader.setVAlign(sap.ui.commons.layout.VAlign.Middle);
	    oCellHeader.setHAlign(sap.ui.commons.layout.HAlign.Left);
	    var textCustometNumber = new sap.m.Text("text_CustometNumber");
	    textCustometNumber.setText("1234567890");
	    oCellHeader.addContent(textCustometNumber);
	    oRowHeader.insertCell(oCellHeader,5);
	    
		oCell.addContent(headerLayout);
		oRow.addCell(oCell);
		/***** Row 4 End *****/
		
		/***** Row 5 Start*****/
		var oRow = new sap.ui.commons.layout.MatrixLayoutRow("Row-5");
	    var oCell = new sap.ui.commons.layout.MatrixLayoutCell("Cell-5-1");
	    masterLayout.addRow(oRow);
	    
	    var oCarousel = new sap.ui.commons.Carousel();
        oCarousel.setWidth("100%");
        oCarousel.setHeight("400px");
        oCarousel.setOrientation("horizontal");
	    
	    for(i=0;i<5;i++){
		    var carouselMatrixLayout = new sap.ui.commons.layout.MatrixLayout({
				id : "layout_CarouselElement_"+i,
				layoutFixed : true,
				columns : 2,
				width : '300px',
			});
		    carouselMatrixLayout.addStyleClass("customWorkOrderLayout");
		    
		    var oRowCarouselElement = new sap.ui.commons.layout.MatrixLayoutRow("CarouselElementRow-1_"+i);
		    carouselMatrixLayout.addRow(oRowCarouselElement);
		    var oCellCarouselElement = new sap.ui.commons.layout.MatrixLayoutCell("CarouselElementCell-1-1_"+i);
		    oCellCarouselElement.setColSpan(2);
		    oCellCarouselElement.setVAlign(sap.ui.commons.layout.VAlign.Middle);
		    oCellCarouselElement.setHAlign(sap.ui.commons.layout.HAlign.Center);
		    
		    var labelworkOrderNumber = new sap.m.Label({
				id : "label_WorkOrderNumber_"+i, // sap.ui.core.ID
				design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
				text : "Work Order: 300920242", // string
				visible : true, // boolean
				textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
				textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			});
		    labelworkOrderNumber.addStyleClass("customWorkOrderBarText");
		    
		    var labelworkOrderDate = new sap.m.Label({
				id : "label_WorkOrderDate_"+i, // sap.ui.core.ID
				design : sap.m.LabelDesign.Bold, // sap.m.LabelDesign
				text : "Apr 10 2015", // string
				visible : true, // boolean
				textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
				textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			});
		    labelworkOrderDate.addStyleClass("customWorkOrderBarText");
		    
		    var workOrderBar = new sap.m.Bar({
				id : "bar_WorkOrder_"+i, // sap.ui.core.ID
				enableFlexBox : false, // boolean
				translucent : false, // boolean, since 1.12
				design : sap.m.BarDesign.Auto, // sap.m.BarDesign, since 1.22
				visible : true, // boolean, since 1.22
				width : "100%",
				contentLeft : [labelworkOrderNumber], // sap.ui.core.Control
				contentRight : [labelworkOrderDate], // sap.ui.core.Control
			});
		    workOrderBar.addStyleClass("customWorkOrderBar");
		    
		    oCellCarouselElement.addContent(workOrderBar);
		    oRowCarouselElement.addCell(oCellCarouselElement);
		    
		    var oRowCarouselElement = new sap.ui.commons.layout.MatrixLayoutRow("CarouselElementRow-2_"+i);
		    oRowCarouselElement.setHeight("100px");
		    carouselMatrixLayout.addRow(oRowCarouselElement);
		    var oCellCarouselElement = new sap.ui.commons.layout.MatrixLayoutCell("CarouselElementCell-2-1_"+i);
		    oCellCarouselElement.setColSpan(2);
		    oCellCarouselElement.setVAlign(sap.ui.commons.layout.VAlign.Middle);
		    oCellCarouselElement.setHAlign(sap.ui.commons.layout.HAlign.Center);
		    
		    var textDescription = new sap.m.Text("text_Description_"+i);
		    textDescription.setMaxLines(5);
		    textDescription.setWrapping(true);
		    textDescription.setText("Test Messages as reported -Mach trim failed, CAS message displayed inflight.Another issue is that main tire is worn to limits.  Component needs immediate attention and fixing.");
		    
		    oCellCarouselElement.addContent(textDescription);
		    oRowCarouselElement.addCell(oCellCarouselElement);
		    
		    var oRowCarouselElement = new sap.ui.commons.layout.MatrixLayoutRow("CarouselElementRow-5_"+i);
		    oRowCarouselElement.setHeight("75px");
		    carouselMatrixLayout.addRow(oRowCarouselElement);

		    var button_Approved = new sap.m.Button({
									id : "button_Approved_"+i, // sap.ui.core.ID
									text : "Approved", // string
									type : sap.m.ButtonType.Accept, // sap.m.ButtonType
									width : "225px", // sap.ui.core.CSSSize
									enabled : false, // boolean
									visible : true, // boolean
									icon : "sap-icon://approvals", // sap.ui.core.URI
									iconFirst : true, // boolean
									activeIcon : undefined, // sap.ui.core.URI
									iconDensityAware : true, // boolean
								});
		    
		    var button_Rejected = new sap.m.Button({
				id : "button_Rejected_"+i, // sap.ui.core.ID
				text : "Rejected", // string
				type : sap.m.ButtonType.Reject, // sap.m.ButtonType
				width : "225px", // sap.ui.core.CSSSize
				enabled : false, // boolean
				visible : true, // boolean
				icon : "sap-icon://sys-cancel", // sap.ui.core.URI
				iconFirst : true, // boolean
				activeIcon : undefined, // sap.ui.core.URI
				iconDensityAware : true, // boolean
			});
		    
		    var button_Approve = new sap.m.Button({
									id : "button_Approve_"+i, // sap.ui.core.ID
									text : "Approve", // string
									type : sap.m.ButtonType.Accept, // sap.m.ButtonType
									width : "110px", // sap.ui.core.CSSSize
									enabled : true, // boolean
									visible : true, // boolean
									icon : "sap-icon://accept", // sap.ui.core.URI
									iconFirst : true, // boolean
									activeIcon : undefined, // sap.ui.core.URI
									iconDensityAware : true, // boolean
									tap : [ function(oEvent) {
										var control = oEvent.getSource();
									}, this ],
									press : [ function(oEvent) {
										var control = oEvent.getSource();
										oController.workOrderApprove();
									}, this ]
								});
		    
		    var button_Reject = new sap.m.Button({
									id : "button_Reject_"+i, // sap.ui.core.ID
									text : "Reject", // string
									type : sap.m.ButtonType.Reject, // sap.m.ButtonType
									width : "110px", // sap.ui.core.CSSSize
									enabled : true, // boolean
									visible : true, // boolean
									icon : "sap-icon://decline", // sap.ui.core.URI
									iconFirst : true, // boolean
									activeIcon : undefined, // sap.ui.core.URI
									iconDensityAware : true, // boolean
									tap : [ function(oEvent) {
										var control = oEvent.getSource();
									}, this ],
									press : [ function(oEvent) {
										var control = oEvent.getSource();
										oController.workOrderReject();
									}, this ]
								});
		    
		    if(i==2){
		    	var oCellCarouselElement = new sap.ui.commons.layout.MatrixLayoutCell("CarouselElementCell-5-1_"+i);
			    oCellCarouselElement.setVAlign(sap.ui.commons.layout.VAlign.Middle);
			    oCellCarouselElement.setHAlign(sap.ui.commons.layout.HAlign.Center);
		    	oCellCarouselElement.setColSpan(2);
		    	oCellCarouselElement.addContent(button_Approved);
		    	
		    	oRowCarouselElement.addCell(oCellCarouselElement);
		    } else if(i==3){
		    	var oCellCarouselElement = new sap.ui.commons.layout.MatrixLayoutCell("CarouselElementCell-5-1_"+i);
			    oCellCarouselElement.setVAlign(sap.ui.commons.layout.VAlign.Middle);
			    oCellCarouselElement.setHAlign(sap.ui.commons.layout.HAlign.Center);
		    	oCellCarouselElement.setColSpan(2);
		    	oCellCarouselElement.addContent(button_Rejected);
		    	
		    	oRowCarouselElement.addCell(oCellCarouselElement);
		    }else{
		    	var oCellCarouselElement = new sap.ui.commons.layout.MatrixLayoutCell("CarouselElementCell-5-1_"+i);
			    oCellCarouselElement.setVAlign(sap.ui.commons.layout.VAlign.Middle);
			    oCellCarouselElement.setHAlign(sap.ui.commons.layout.HAlign.Center);
		    	oCellCarouselElement.addContent(button_Approve);
		    	oRowCarouselElement.insertCell(oCellCarouselElement,0);
		    	
		    	var oCellCarouselElement = new sap.ui.commons.layout.MatrixLayoutCell("CarouselElementCell-5-2_"+i);
			    oCellCarouselElement.setVAlign(sap.ui.commons.layout.VAlign.Middle);
			    oCellCarouselElement.setHAlign(sap.ui.commons.layout.HAlign.Center);
		    	oCellCarouselElement.addContent(button_Reject);
		    	oRowCarouselElement.insertCell(oCellCarouselElement,1);
		    }
		    
		    
		    var oRowCarouselElement = new sap.ui.commons.layout.MatrixLayoutRow("CarouselElementRow-6_"+i);
		    oRowCarouselElement.setHeight("100px");
		    carouselMatrixLayout.addRow(oRowCarouselElement);
		    var oCellCarouselElement = new sap.ui.commons.layout.MatrixLayoutCell("CarouselElementCell-6-1_"+i);
		    oCellCarouselElement.setColSpan(2);
		    oCellCarouselElement.setVAlign(sap.ui.commons.layout.VAlign.Middle);
		    oCellCarouselElement.setHAlign(sap.ui.commons.layout.HAlign.Center);
		    
		    var textNote = new sap.m.Text("text_Note_"+i);
		    textNote.setMaxLines(5);
		    textNote.setWrapping(true);
		    textNote.setText("Copy of Technical comments - Found defect but no codes were present.  Opened the panel to access the match trim actuator and connected the breakout box and air data test set.  Performed the match trim system check, operational check was good.");
		    
		    oCellCarouselElement.addContent(textNote);
		    oRowCarouselElement.addCell(oCellCarouselElement);
		    
		    oCarousel.addContent(carouselMatrixLayout);
	    }

        oCell.addContent(oCarousel);
		oRow.addCell(oCell);
		/***** Row 5 End *****/
		
		
		var workOrdersPage = new sap.m.Page("page_WorkOrders");
		workOrdersPage.setBackgroundDesign(sap.m.PageBackgroundDesign.Solid);
		workOrdersPage.setCustomHeader(workOrderHeaderBar);
		workOrdersPage.setShowHeader(true);
		workOrdersPage.setShowFooter(false);
		workOrdersPage.setFooter(workOrderFooterBar);
		workOrdersPage.addContent(masterLayout);
 		return workOrdersPage;
	}
});