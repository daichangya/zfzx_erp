//PlateFormAccountManagerView  平台账户管理
PlateFormAccountManagerView = Ext.extend(Ext.Panel, {
			title:"",
			// 构造函数
			constructor : function(_cfg) {
				Ext.applyIf(this, _cfg);
				if(this.accountType=="plateFormAccount"){
					this.title="平台台账"
				} else if(this.accountType=="plateFormRiskAccount"){
					this.title="平台风险保证金账户台账"
				}
				// 初始化组件
				this.initUIComponents();
				// 调用父类构造
				PlateFormAccountManagerView.superclass.constructor.call(this, {
							id : 'PlateFormAccountManagerView'+this.accountType,
							title : this.title,
							region : 'center',
							layout : 'border',
							iconCls :'btn-team29',
							items : [this.searchPanel, this.gridPanel]
						});
			},// end of constructor
			// 初始化组件
			initUIComponents : function() {
				// 初始化搜索条件Panel
				this.searchPanel = new HT.SearchPanel({
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
							items : [{
										columnWidth : .2,
										labelAlign : 'right',
										xtype : 'container',
										layout : 'form',
										labelWidth : 70,
										defaults : {
											anchor : anchor
										},
										items : [{
											fieldLabel : '起始日期',
											name : "startDate",
											xtype : 'datefield',
											labelSeparator : "",
											format : 'Y-m-d',
											value:new Date()
										}]
							         },{
							         	columnWidth : .2,
										labelAlign : 'right',
										xtype : 'container',
										layout : 'form',
										labelWidth : 70,
										defaults : {
											anchor : anchor
										},
										items : [{
											fieldLabel : '截止日期',
											name : "endDate",
											xtype : 'datefield',
											labelSeparator : "",
											format : 'Y-m-d',
											value:new Date()
										}]
							         },{
										columnWidth : .1,
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
										}]
									},{
										columnWidth : .1,
										xtype : 'container',
										layout : 'form',
										defaults : {
											xtype : 'button'
										},
										style : 'padding-left:10px;',
										items : [{
											text : '重置',
											scope : this,
											iconCls : 'reset',
											handler : this.reset
										}]
									}]
						});

				this.topbar = new Ext.Toolbar({
					items : [{
			        	iconCls : 'btn-user-sel',
			        	text : '开通平台账户',
						xtype : 'button',
						scope : this,
						//hidden : isGranted('_liushui_f_'+this.businessType)?false:true,
						handler : this.createAccount
							
					},new Ext.Toolbar.Separator({
						//hidden : isGranted('_liushui_f_'+this.businessType)?false:true
					}),{
						iconCls : 'btn-addmoney',
						text : '充值',
						xtype : 'button',
						scope : this,
						//hidden : isGranted('_liushuisee_f_'+this.businessType)?false:true,
						handler : this.recharge
			
					},new Ext.Toolbar.Separator({
						//hidden : isGranted('_liushuisee_f_'+this.businessType)?false:true
					}),{
						iconCls : 'btn-edit1',
						text :'取现',
						xtype : 'button',
						scope : this,
						//hidden : isGranted('_ping_f_'+this.businessType)?false:true,
						handler : this.withdraw
					},new Ext.Toolbar.Separator({
						//hidden : isGranted('_ping_f_'+this.businessType)?false:true
					}) ,{
						iconCls : 'btn-clock',
						text :'转账',
						xtype : 'button',
						scope : this,
						//hidden : isGranted('_sOverdue_f_'+this.businessType)?false:true,
						handler : this.transfer
					},new Ext.Toolbar.Separator({
						hidden : isGranted('_sOverdue_f_'+this.businessType)?false:true
					}),{
						iconCls : 'btn-clock',
						text :'调账',
						xtype : 'button',
						scope : this,
						//hidden : isGranted('_sOverdue_f_'+this.businessType)?false:true,
						handler : this.changeCorrect
					} ,'->',{
					    xtype:'label',html : '【<font style="line-height:20px">账号：</font><font style="line-height:20px"></font> <font style="line-height:20px">账户余额：</font><font style="line-height:20px">0元</font>】'
				    },{
						iconCls : 'btn-setting',
						text :'刷新余额',
						xtype : 'button',
						scope : this,
						//hidden : isGranted('_previewpz_f_'+this.businessType)?false:true,
						handler : this.refresh
			        	
			
					}]
				});

				var summary = new Ext.ux.grid.GridSummary();
				function totalMoney(v, params, data) {
					return '总计(元)';
				}
				this.gridPanel = new HT.GridPanel({
					bodyStyle : "width : 100%",
					region : 'center',
					tbar : this.topbar,
					sm : this.projectFundsm,
					plugins : [summary],
					viewConfig: {  
		            	forceFit:false  
		            },
		            forceFit: true,
					// 使用RowActions
					rowActions : false,
					id : 'PlateFormAccountManagerGrid',
					url : __ctxPath + "/plateForm/plateFromFinanceManagerPlateFormFinance.do?accountType="+this.accountType,
					fields : [{
								name : 'id',
								type : 'int'
							}, 'fundType','fundTypeName','incomeMoney', 'payMoney','balanceMoney', 'startDate','endDate'],
					columns : [{
								header : 'fundType',
								dataIndex : 'fundType',
								hidden : true
							}, {
								header : '资金类型',
								dataIndex : 'fundTypeName',
								width : 200,
								summaryType : 'sum',
				                summaryRenderer : totalMoney
							}, {
								header : '开始时间',
								width : 150,
								dataIndex : 'startDate',
								align : 'center'
							}, {
								header : '截止时间',
								width : 150,
								dataIndex : 'endDate'
							},{
								header : '收入',
								dataIndex : 'incomeMoney',
								width : 200,
								summaryType : 'sum',
								align : 'right',
								renderer:function(v){
								 return Ext.util.Format.number(v,',000,000,000.00')+"元"
                         	    }
							}, {
								header : '支出',
								dataIndex : 'payMoney',
								width :200,
								align : 'right',
								summaryType : 'sum',
								renderer:function(v){
								  return Ext.util.Format.number(v,',000,000,000.00')+"元"
                         	    }
							}, {
								header : '小计',
								dataIndex : 'balanceMoney',
								align : 'right',
								width : 200,
								summaryType : 'sum',
								renderer:function(v,a,r){
									return Ext.util.Format.number(r.data.incomeMoney-r.data.payMoney,',000,000,000.00')+"元"
                         	    }
							}
						]
					});

				 this.gridPanel.addListener('rowdblclick',this.rowClick);

			},
			
			reset : function() {
				this.searchPanel.getForm().reset();
				var obj = Ext.getCmp('Q_fundType_N_EQ');
				var arrStore= new Ext.data.SimpleStore({});
				obj.clearValue();
                obj.store = arrStore;
			    arrStore.load({"callback":test});
			    function test(r){
			    	if (obj.view) { // 刷新视图,避免视图值与实际值不相符
			    		obj.view.setStore(arrStore);
			        }
			   }
			},
			// 按条件搜索
			search : function() {
				var startDate=this.searchPanel.getCmpByName("startDate").getValue();
				var endDate=this.searchPanel.getCmpByName("endDate").getValue();
				if(startDate==null||startDate==""){
					this.searchPanel.getCmpByName("startDate").setValue(new Date());
				}
				if(endDate==null||endDate==""){
					this.searchPanel.getCmpByName("endDate").setValue(new Date());
				}
				$search({
							searchPanel : this.searchPanel,
							gridPanel : this.gridPanel
						});
			},
			
			rowClick:function(){
				
			},
			createAccount : function() {
				var accountType=this.accountType;
				Ext.Ajax.request({
					url: __ctxPath + '/plateForm/getPrepareMentPlateFormFinance.do?accountType=plateFormAccount',
					params : {
						accountType : accountType
					},
					scope : this,
					method : 'post',
					success : function(response){
						var result = Ext.util.JSON.decode(response.responseText)
						var code=result.code;
						if(eval(code)==eval(1)){//表示可以开通平台普通账户或者风险保证金账户
							var createnewForm=new PlateFormCreateAccountForm({
								accountType:accountType,
								thirdPayName:result.thirdPayName,
								thirdPayType:result.thirdPayTypeName,
								plateFormnumber:result.platFormNumber
								
							});
							createnewForm.show();
						}else{
							Ext.ux.Toast.msg('操作信息',result.msg);
						}
						
					},
					failure : function(){
						Ext.ux.Toast.msg('操作信息','操作出错,请联系管理员');
					}
				});
			},
		//
			refresh:function(){
				var accountType=this.accountType;
				var topbar=this.topbar
				Ext.Ajax.request({
					url: __ctxPath + '/plateForm/getAccountBalanceMoneyPlateFormFinance.do',
					params : {
						accountType : accountType
					},
					scope : this,
					method : 'post',
					success : function(response){
						var result = Ext.util.JSON.decode(response.responseText)
						var code=result.msg;
						topbar.items.get(topbar.items.length-2).setText(code,false);
					},
					failure : function(){
						Ext.ux.Toast.msg('操作信息','操作出错,请联系管理员');
					}
				});
			},
			recharge :function(){
				var accountType=this.accountType;
				var refreshPanel=this.gridPanel;
				Ext.Ajax.request({
					url: __ctxPath + '/plateForm/plateRechargePrePlateFormFinance.do?accountType=plateFormAccount',
					params : {
						accountType : accountType
					},
					scope : this,
					method : 'post',
					success : function(response){
						var result = Ext.util.JSON.decode(response.responseText)
						var code=result.code;
						if(eval(code)==eval(1)){//表示可以开通平台普通账户或者风险保证金账户
							var createnewForm=new PlateFormAccountRechargeForm({
								refreshPanel:refreshPanel,
								accountType:accountType,
								thirdPayName:result.thirdPayName,
								thirdPayType:result.thirdPayTypeName,
								plateFormnumber:result.platFormNumber,
								accountName:result.accountName,
								accountId:result.accountId,
								accountNumber:result.accountNumber,
								balanceMoney:result.balanceMoney,
								openNewPage:result.openNewPage  //表示充值页面是否需要用window.open 打开页面 0表示不需要，1需要
							});
							createnewForm.show();
						}else{
							Ext.ux.Toast.msg('操作信息',result.msg);
						}
						
					},
					failure : function(){
						Ext.ux.Toast.msg('操作信息','操作出错,请联系管理员');
					}
				});
			},
			withdraw:function(){
				var accountType=this.accountType;
				var refreshPanel=this.gridPanel;
				Ext.Ajax.request({
					url: __ctxPath + '/plateForm/plateRechargePrePlateFormFinance.do?accountType=plateFormAccount',
					params : {
						accountType : accountType
					},
					scope : this,
					method : 'post',
					success : function(response){
						var result = Ext.util.JSON.decode(response.responseText)
						var code=result.code;
						if(eval(code)==eval(1)){//表示可以开通平台普通账户或者风险保证金账户
							var createnewForm=new PlateFormAccountWithdraw({
								refreshPanel:refreshPanel,
								accountType:accountType,
								thirdPayName:result.thirdPayName,
								thirdPayType:result.thirdPayTypeName,
								plateFormnumber:result.platFormNumber,
								accountName:result.accountName,
								accountId:result.accountId,
								accountNumber:result.accountNumber,
								balanceMoney:result.balanceMoney,
								openNewPage:result.openNewPage  //表示充值页面是否需要用window.open 打开页面 0表示不需要，1需要
							});
							createnewForm.show();
						}else{
							Ext.ux.Toast.msg('操作信息',result.msg);
						}
						
					},
					failure : function(){
						Ext.ux.Toast.msg('操作信息','操作出错,请联系管理员');
					}
				});
			},
			//账户转账功能
			transfer:function(){
				Ext.ux.Toast.msg('操作信息',"功能开发中，敬请期待");
			},
			//账户调账功能
			changeCorrect:function(){
				Ext.ux.Toast.msg('操作信息',"功能开发中，敬请期待");
			}
		});
