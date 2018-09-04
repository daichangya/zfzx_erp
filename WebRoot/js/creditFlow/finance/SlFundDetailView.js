/**
 * @author
 * @class SlFundDetailView
 * @extends Ext.Panel
 * @description [SlFundDetail]管理
 * @company 智维软件
 * @createtime:
 */
SlFundDetailView = Ext.extend(Ext.Panel, {
			// 构造函数
			constructor : function(_cfg) {
				Ext.applyIf(this, _cfg);
				// 初始化组件
				this.initUIComponents();
				// 调用父类构造
				SlFundDetailView.superclass.constructor.call(this, {
							id : 'SlFundDetailView',
							title : '[SlFundDetail]管理',
							region : 'center',
							layout : 'border',
							items : [this.searchPanel, this.gridPanel]
						});
			},// end of constructor
			// 初始化组件
			initUIComponents : function() {
				// 初始化搜索条件Panel
				this.searchPanel=new HT.SearchPanel({
							layout : 'form',
							region : 'north',
							colNums:3,
							items:[
																					 																																					 								{
									fieldLabel:'fundIntentId',
									name : 'Q_fundIntentId_L_EQ',
									flex:1,
																		xtype:'numberfield'
																	}
																,
															 							 																																					 								{
									fieldLabel:'fundQlideId',
									name : 'Q_fundQlideId_L_EQ',
									flex:1,
																		xtype:'numberfield'
																	}
																,
															 							 																																					 								{
									fieldLabel:'overdueNum',
									name : 'Q_overdueNum_SN_EQ',
									flex:1,
																		xtype:'numberfield'
																	}
																,
															 							 																																					 								{
									fieldLabel:'overdueAccrual',
									name : 'Q_overdueAccrual_S_EQ',
									flex:1,
																		xtype:'numberfield'
																	}
																,
															 							 																																					 								{
									fieldLabel:'operTime',
									name : 'Q_operTime_D_EQ',
									flex:1,
																		xtype:'datefield',
									format:'Y-m-d'
																	}
																,
															 							 																																					 								{
									fieldLabel:'afterMoney',
									name : 'Q_afterMoney_S_EQ',
									flex:1,
																		xtype:'numberfield'
																	}
															 							 							 															],
								buttons:[
									{
										text:'查询',
										scope:this,
										iconCls:'btn-search',
										handler:this.search
									},{
										text:'重置',
										scope:this,
										iconCls:'btn-reset',
										handler:this.reset
									}							
								]	
				});// end of searchPanel

				this.topbar = new Ext.Toolbar({
						items : [{
									iconCls : 'btn-add',
									text : '添加[SlFundDetail]',
									xtype : 'button',
									scope : this,
									handler : this.createRs
								}, {
									iconCls : 'btn-del',
									text : '删除[SlFundDetail]',
									xtype : 'button',
									scope:this,
									handler : this.removeSelRs
								}]
				});
	
				this.gridPanel=new HT.GridPanel({
					region:'center',
					tbar:this.topbar,
					//使用RowActions
					rowActions:true,
					id:'SlFundDetailGrid',
					url : __ctxPath + "/creditFlow/finance/listSlFundDetail.do",
					fields : [{
									name : 'fundDetailId',
									type : 'int'
								}
																																																	,'fundIntentId'
																																										,'fundQlideId'
																																										,'overdueNum'
																																										,'overdueAccrual'
																																										,'operTime'
																																										,'afterMoney'
																																			],
					columns:[
								{
									header : 'fundDetailId',
									dataIndex : 'fundDetailId',
									hidden : true
								}
																																																								,{
																	header : 'fundIntentId',	
																	dataIndex : 'fundIntentId'
								}
																																																,{
																	header : 'fundQlideId',	
																	dataIndex : 'fundQlideId'
								}
																																																,{
																	header : 'overdueNum',	
																	dataIndex : 'overdueNum'
								}
																																																,{
																	header : 'overdueAccrual',	
																	dataIndex : 'overdueAccrual'
								}
																																																,{
																	header : 'operTime',	
																	dataIndex : 'operTime'
								}
																																																,{
																	header : 'afterMoney',	
																	dataIndex : 'afterMoney'
								}
																																								, new Ext.ux.grid.RowActions({
									header:'管理',
									width:100,
									actions:[{
											 iconCls:'btn-del',qtip:'删除',style:'margin:0 3px 0 3px'
										},{
											 iconCls:'btn-edit',qtip:'编辑',style:'margin:0 3px 0 3px'
										}
									],
									listeners:{
										scope:this,
										'action':this.onRowAction
									}
								})
					]//end of columns
				});
				
				this.gridPanel.addListener('rowdblclick',this.rowClick);
					
			},// end of the initComponents()
			//重置查询表单
			reset : function(){
				this.searchPanel.getForm().reset();
			},
			//按条件搜索
			search : function() {
				$search({
					searchPanel:this.searchPanel,
					gridPanel:this.gridPanel
				});
			},
			//GridPanel行点击处理事件
			rowClick:function(grid,rowindex, e) {
				grid.getSelectionModel().each(function(rec) {
					new SlFundDetailForm({fundDetailId:rec.data.fundDetailId}).show();
				});
			},
			//创建记录
			createRs : function() {
				new SlFundDetailForm().show();
			},
			//按ID删除记录
			removeRs : function(id) {
				$postDel({
					url:__ctxPath+ '/creditFlow/finance/multiDelSlFundDetail.do',
					ids:id,
					grid:this.gridPanel
				});
			},
			//把选中ID删除
			removeSelRs : function() {
				$delGridRs({
					url:__ctxPath + '/creditFlow/finance/multiDelSlFundDetail.do',
					grid:this.gridPanel,
					idName:'fundDetailId'
				});
			},
			//编辑Rs
			editRs : function(record) {
				new SlFundDetailForm({
					fundDetailId : record.data.fundDetailId
				}).show();
			},
			//行的Action
			onRowAction : function(grid, record, action, row, col) {
				switch (action) {
					case 'btn-del' :
						this.removeRs.call(this,record.data.fundDetailId);
						break;
					case 'btn-edit' :
						this.editRs.call(this,record);
						break;
					default :
						break;
				}
			}
});
