/**
 * @author
 * @createtime
 * @class PlOrReleaseListForm
 * @extends Ext.Window
 * @description PlOrRelease表单
 * @company 智维软件
 */
transfereToOrList = Ext.extend(Ext.Panel, {
	// 构造函数
	constructor : function(_cfg) {
		Ext.applyIf(this, _cfg);
		// 必须先初始化组件
		this.initUIComponents();
		transfereToOrList.superclass.constructor.call(this, {
					id : 'transfereToOrList'+this.mark,
					title : this.mark == 'sale_3' ? '已转到债权库查询' : '已转到债权库手续费管理',
					layout : 'border',
					items : [this.searchPanel ,this.gridPanel],
					iconCls : 'btn-tree-team30',
					buttonAlign : 'center'

				});
	},// end of the constructor
	// 初始化组件
	initUIComponents : function() {
		var summary = new Ext.ux.grid.GridSummary();
		function totalMoney(v, params, data) {
			return '总计(元)';
		}
		var labelsize=70;
		var labelsize1=115;
		// 初始化搜索条件Panel
		this.searchPanel = new HT.SearchPanel({
			                id:"transfereToOrListsearch"+this.mark,
							layout : 'column',
							style : 'padding-left:5px;padding-right:5px;padding-top:5px;',
							region : 'north',
							height : 20,
							anchor : '96%',
							keys : [{
								key : Ext.EventObject.ENTER,
								fn : this.search,
								scope : this
							}, {
								key : Ext.EventObject.ESC,
								fn : this.reset,
								scope : this
							}],
							layoutConfig: {
				               align:'middle',
				               padding : '5px'
				               
				            },
							items : [ {   columnWidth : 0.2,
								layout : 'form',
								border : false,
								labelWidth : labelsize1,
								labelAlign : 'right',
								items : [ {
									fieldLabel : '出让人',
										name : 'outCustName',
										labelSeparator : '',
										xtype : 'textfield',
										anchor : '100%'
										
								} ] 
								      
							}/*,{   columnWidth : 0.2,
								layout : 'form',
								border : false,
								labelWidth : labelsize1,
								labelAlign : 'right',
								items : [ {
									fieldLabel : '受让人',
										name : 'inCustName',
										labelSeparator : '',
										xtype : 'textfield',
										anchor : '100%'
										
								} ] 
								      
							}*/,{   columnWidth : 0.2,
								layout : 'form',
								border : false,
								labelWidth : labelsize1,
								labelAlign : 'right',
								items : [ {
									fieldLabel : '到债权的日期：从',
										name : 'saleSuccessTimel',
										labelSeparator : '',
										xtype : 'datefield',
										format:"Y-m-d",
										anchor : '100%'
										
								} ] 
								      
							},{   columnWidth : 0.2,
								layout : 'form',
								border : false,
								labelWidth : labelsize1-90,
								labelAlign : 'right',
								items : [ {
									fieldLabel : '到',
										name : 'saleSuccessTimeg',
										labelSeparator : '',
										format:"Y-m-d",
										xtype : 'datefield',
										anchor : '65%'
										
								} ] 
								      
							}
							, {
								columnWidth : .07,
								xtype : 'container',
								layout : 'form',
								defaults : {
									xtype : 'button'
								},
								style : 'padding-left:10px;',
								items : [{
									text : '查询',
									scope : this,
									iconCls : 'btn-search',
									handler : this.search
								}]}, {
								columnWidth : .07,
								xtype : 'container',
								layout : 'form',
								defaults : {
									xtype : 'button'
								},
								style : 'padding-left:10px;',
								items : [{
									text : '重置',
									scope : this,
									iconCls : 'btn-reset',
									handler : this.reset
								}]}
									
									

							]

						});// end of searchPanel

	 /*   if(this.keystr=="transferFee"){
	    	this.topbar = new Ext.Toolbar({
					items : []
				});
	    }else{*/
	    	this.topbar = new Ext.Toolbar({
					items : [{
								iconCls : 'btn-ok',
								text : '确认实收手续费',
								xtype : 'button',
								scope : this,
								hidden : this.mark == 'sale_6' ? false : true,
								handler : this.confirmtransferFee
							},{
								iconCls : 'btn-ok',
								text : '取消预收手续费',
								xtype : 'button',
								scope : this,
								hidden : this.mark == 'sale_6' ? false : true,
								handler : this.canceltransferFee
							}]
				});
	    /*}*/
		
       var params1={
      	 listtype:"transfereToOrList"
       };
		this.gridPanel = new HT.GridPanel({
			region : 'center',
			// 使用RowActions
			tbar:this.topbar,
			id : 'PlBidSaleListgrid2'+this.mark,
			 plugins : [summary],
			//plugins : [this.mark=="transferFee"?summary:null],
			url : __ctxPath
					+ "/creditFlow/financingAgency/listPlBidSale.do?listtype=transfereToOrList",
			fields : [{
						name : 'id',
						type : 'int'
					}, 'outCustName','inCustName','bidProName', 'yearAccrualRate', 'intentDate', 'saleMoney','saleSuccessTime','transferFee',
					'changeMoneyRate', 'changeMoneyType','changeMoney','saleStartTime', 'saleCloseTime','saleDealTime', 'sumMoney','changeMoney'],
			columns : [{
						header : 'id',
						dataIndex : 'id',
						align:'center',
						hidden : true
					}, {
						header : '出让人',
						width:120,
						dataIndex : 'outCustName'
					}/*, {
						header : '受让人',
						width:120,
						dataIndex : 'inCustName'
					}*/, {
						header : '债权名称',
						width:180,
						summaryRenderer : totalMoney,
						dataIndex : 'bidProName'
					}, {
						header : '到期日',
						width:110,
						align:'center',
						dataIndex : 'intentDate'
					}, {
						header : '年化利率',
						width:100,
						dataIndex : 'yearAccrualRate',
					    align : 'right',
						renderer:function(v){
							return v+"%";
						}
						
					}, {
						header : '出让本金(元)',
						width:120,
						dataIndex : 'saleMoney',
						align : 'right',
						  summaryType : 'sum',
						renderer:function(v){
							return Ext.util.Format.number(v,',000,000,000.00');
						}
					}, {
						header : '折让金（元）',
						width:120,
						dataIndex : 'changeMoney',
						align : 'right',
						summaryType : 'sum',
						renderer:function(v){
							return Ext.util.Format.number(v,',000,000,000.00');
						}
					},  {
						header : '折让率',
						width:100,
						align : 'right',
						dataIndex : 'changeMoneyRate',
						renderer:function(v){
							return v+"%";
						}
						
					}, /*{
						header : '结算总金额',
						width:120,
						dataIndex : 'sumMoney',
						align : 'right',
						renderer:function(v){
							if(null==v){
								return "";
							}else{
							 return Ext.util.Format.number(v,',000,000,000.00')+"元";
							}
							
						}
					},*/ {
						header : '服务费(元)',
						width:120,
						dataIndex : 'transferFee',
						align : 'right',
						summaryType : 'sum',
						renderer:function(v){
							if(null==v){
								return "";
							}else{
							 return Ext.util.Format.number(v,',000,000,000.00');
							}
							
						}
					}, {
						header : '到债权库的时间',
						width:120,
						align:'center',
						dataIndex : 'saleSuccessTime'
					}]
				// end of columns
			});

	},// end of the initComponents()
	// 重置查询表单
	reset : function() {
		this.searchPanel.getForm().reset();
	},
	// 按条件搜索
	search : function() {
		$search({
					searchPanel : this.searchPanel,
					gridPanel : this.gridPanel
				});
	},
	
	// 预收转实收确认
	confirmtransferFee : function() {
		var selectRs = this.gridPanel.getSelectionModel().getSelections();
		if (selectRs.length == 0) {
			Ext.ux.Toast.msg('操作信息', '请选择记录!');
			return;
		} else if (selectRs.length > 1) {
			Ext.ux.Toast.msg('操作信息', '只能选择一条记录!');
			return;
		} else {
			var record = selectRs[0];
			var confirmtransferFee=new ConfirmTransferFeeWindow({
				id:record.data.id,
				transferType:"agree"
			})
			confirmtransferFee.show();
		}

	},
	//取消预收
	canceltransferFee:function(){
		var selectRs = this.gridPanel.getSelectionModel().getSelections();
		if (selectRs.length == 0) {
			Ext.ux.Toast.msg('操作信息', '请选择记录!');
			return;
		} else if (selectRs.length > 1) {
			Ext.ux.Toast.msg('操作信息', '只能选择一条记录!');
			return;
		} else {
			var record = selectRs[0];
			var confirmtransferFee=new ConfirmTransferFeeWindow({
				id:record.data.id,
				transferType:"cancel"
			})
			confirmtransferFee.show();
		}
	},
	// 预览
	preview : function() {
		var selectRs = this.gridPanel.getSelectionModel().getSelections();
		if (selectRs.length == 0) {
			Ext.ux.Toast.msg('操作信息', '请选择记录!');
			return;
		} else if (selectRs.length > 1) {
			Ext.ux.Toast.msg('操作信息', '只能选择一条记录!');
			return;
		} else {
			var record = selectRs[0];
			window.open(__p2pPath + "/creditFlow/financingAgency/getDetailPlManageMoneyPlan.do?mmplanId="+record.data.mmplanId,'_blank');
		}

	},
	// 发布
	publish : function() {
		var selectRs = this.gridPanel.getSelectionModel().getSelections();
		if (selectRs.length == 0) {
			Ext.ux.Toast.msg('操作信息', '请选择记录!');
			return;
		} else if (selectRs.length > 1) {
			Ext.ux.Toast.msg('操作信息', '只能选择一条记录!');
			return;
		} else {
			var record = selectRs[0];
			var url =__ctxPath
					+ "/creditFlow/financingAgency/previewPublishPlManageMoneyPlan.do"
			Ext.Ajax.request({
						url : url,
						method : "post",
						success : function(response, opts) {
								var res = Ext.util.JSON.decode(response.responseText);
								alert("发布成功!");
							//	window.open(__p2pPath + res.htmlPath,'_blank');
						},
						params : {
							mmplanId : record.data.mmplanId,
							isPublish:true
						}
					})
		}

	},
	start:function(){
	
	var selectRs = this.gridPanel.getSelectionModel().getSelections();
		if (selectRs.length == 0) {
			Ext.ux.Toast.msg('操作信息', '请选择记录!');
			return;
		} else if (selectRs.length > 1) {
			Ext.ux.Toast.msg('操作信息', '只能选择一条记录!');
			return;
		} else {
			var record = selectRs[0];
				new PlManageMoneyPlanForm({
						mmplanId : record.data.mmplanId,
						isAllReadOnly:true,
						isHidden:false
		 }).show();
		}

	}
,
	liubaio:function(){
	
		var selectRs = this.gridPanel.getSelectionModel().getSelections();
		if (selectRs.length == 0) {
			Ext.ux.Toast.msg('操作信息', '请选择记录!');
			return;
		} else if (selectRs.length > 1) {
			Ext.ux.Toast.msg('操作信息', '只能选择一条记录!');
			return;
		} else {
			var record = selectRs[0];
			var url = __ctxPath
					+ "/creditFlow/financingAgency/streamBidPlManageMoneyPlan.do";
					
					
												
						Ext.Msg.confirm("提示!",'确定要流标吗？',
										function(btn) {

											if (btn == "yes") {
											
												Ext.Ajax.request({
												url : url,
												method : "post",
												scope:this,
												success : function(response, opts) {
													Ext.ux.Toast.msg('操作信息', '流标成功!');
												
												},
												params : {
													mmplanId : record.data.mmplanId
													
												}
											})
												
												
												
											}
										  }
											
											)
		
		}

	
	
	}
});
