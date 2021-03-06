/**
 * @author:
 * @class SlCompanyMainView
 * @extends Ext.Panel
 * @description [SlCompanyMain]管理
 * @company 北京互融时代软件有限公司
 * @createtime:
 */
LoanAccept = Ext.extend(Ext.Panel, {
	// 构造函数
	constructor : function(_cfg) {
		Ext.applyIf(this, _cfg);
		// 初始化组件
		this.initUIComponents();
		// 调用父类构造
		LoanAccept.superclass.constructor.call(this, {
			id : 'LoanAccept',
			title : '贷款尽调',
			region : 'center',
			layout : 'border',
			iconCls :'btn-tree-team7',
			items : [ this.searchPanel, this.gridPanel ]
		});
	},// end of constructor
	// 初始化组件
	initUIComponents : function() {
		// 初始化搜索条件Panel
		this.searchPanel = new Ext.FormPanel( {
			layout : 'column',
			border : false,
			region : 'north',
			height : 40,
			anchor : '96%',
			layoutConfig: {
               align:'middle'
            },
             bodyStyle : 'padding:10px 10px 10px 10px',
			items : [  {
				columnWidth : 0.25,
				layout : 'form',
				border : false,
				labelWidth : 60,
				labelAlign : 'right',
				items : [ {
					xtype : 'textfield',
					fieldLabel : '项目编号',
					anchor:'100%',
					name : 'projectNumber'
				} ]
			},{
				columnWidth : 0.25,
				layout : 'form',
				border : false,
				labelWidth : 60,
				labelAlign : 'right',
				items : [ {
					xtype : 'textfield',
					fieldLabel : '项目名称',
					anchor:'100%',
					name : 'projectName'
				}]
			}, {
				columnWidth : 0.25,
				layout : 'form',
				border : false,
				labelWidth : 60,
				labelAlign : 'right',
			
				items : [ {
					xtype : 'textfield',
					fieldLabel : '客户名称',
					anchor:'95%',
					name : 'customerName'
				} ]
			}, {
				columnWidth : 0.07,
				layout : 'form',
				border : false,

				labelAlign : 'right',
				items : [ {
					xtype : 'button',
					text : '查询',
					width : 60,
					scope : this,
					iconCls : 'btn-search',
					handler : this.search
				} ]
			}, {
				columnWidth : 0.07,
				layout : 'form',
				border : false,

				labelAlign : 'right',
				items : [ {
					xtype : 'button',
					text : '重置',
					width : 60,
					scope : this,
					iconCls : 'btn-reset',
					handler : this.reset
				} ]
			} ]

		})
		this.topbar = new Ext.Toolbar({
			items : [ {
						iconCls : 'menu-flowWait',
						text : '贷款尽调',
						xtype : 'button',
						scope : this,
						//hidden : isGranted('_loanAccept_flow')? false: true,
						handler : this.detailPro
					}/*, new Ext.Toolbar.Separator({
						hidden : isGranted('_loanAccept_projectInfo')? false: true
					})*//*,{
						iconCls : 'menu-flowWait',
						text : '编辑贷款信息',
						xtype : 'button',
						scope : this,
						hidden : isGranted('_loanAccept_projectInfo') ? false : true,
						handler : this.seeProjectInfo
					}*/]
		});
		this.gridPanel = new HT.GridPanel( {
			id:'LoanAcceptGrid',
			region : 'center',
			hiddenCm:true,
			notmask :true,
			tbar:this.topbar,
			url : __ctxPath + "/flow/getByProcessNameNodeKeyOfCommonTask.do?processName=smallLoanCommonFlow&flowNodeKey=slcfAcceptAndHearACase&searchType=byUserId",
			fields : [ {
				name : 'task.taskId',
				type : 'int'
			}, 'task.dueDate',
			'task.activityName',
			'vSmallloanProject.runId',
			'vSmallloanProject.taskCreateTime',
			'vSmallloanProject.projectId',
			'vSmallloanProject.subject',
			'vSmallloanProject.customerName',
			'vSmallloanProject.projectNumber',
			// 'vCommonProjectFlow.operationTypeValue',//视图没有，删除掉。
			'vSmallloanProject.activityName',
			'vSmallloanProject.businessType',
			'vSmallloanProject.projectName',
			'vSmallloanProject.oppositeTypeValue',
			'vSmallloanProject.projectMoney',
			'vSmallloanProject.businessManagerValue'
			],
			columns : [ {
				header : 'id',
				dataIndex : 'vSmallloanProject.projectId',
				hidden : true
			}, {
				header : '项目编号',
				dataIndex : 'vSmallloanProject.projectNumber'
			}, {
				header : '项目名称',
				dataIndex : 'vSmallloanProject.projectName',
				width:300
			}, {
				header : '客户类型',
				dataIndex : 'vSmallloanProject.oppositeTypeValue',
				width:100
			}, {
				header : '金额',
				align:'right',
				dataIndex : 'vSmallloanProject.projectMoney',
				renderer : function(value,metaData, record,rowIndex, colIndex,store) {
				
					return Ext.util.Format.number(value,'0,000.00')+"元"	
				}
			}, {
				header : '业务经理',
				dataIndex : 'vSmallloanProject.businessManagerValue'
			}, {
				header : '提交时间',
				dataIndex : 'vSmallloanProject.taskCreateTime'
			}]
		//end of columns
				});
		this.gridPanel.addListener('rowdblclick', this.rowClick);
		this.gridPanel.addListener('afterrender', function(){
			 this.loadMask1 = new Ext.LoadMask(this.gridPanel.getEl (), {
				 msg  : '正在加载数据中······,请稍候······',
				 store:this.gridPanel.store,
				 removeMask : true// 完成后移除
			});
			this.loadMask1 .show(); //显示
			
		},this);
	},// end of the initComponents()
	//重置查询表单
	reset : function() {
		this.searchPanel.getForm().reset();
	},
	//按条件搜索
	search : function() {
		$search( {
			searchPanel : this.searchPanel,
			gridPanel : this.gridPanel
		});
	},
	detailPro : function() {
		
		var rs = this.gridPanel.getSelectionModel().getSelections();
		if (rs.length == 0) {
			Ext.ux.Toast.msg('操作信息', '请选择任务记录!');
			return;
		}
		if (rs.length > 1) {
			Ext.ux.Toast.msg('操作信息', '只能选择一条任务记录!');
			return;
		}
		var record = rs[0];
		var contentPanel = App.getContentPanel();
		var formView = contentPanel.getItem('ProcessNextForm'+ record.get('task.taskId'));
		if (formView == null) {
			formView = new ProcessNextForm({
				taskId : record.get('task.taskId'),
				activityName : record.get('task.activityName'),
				agentTask : true
			});
			contentPanel.add(formView);
		}
		contentPanel.activate(formView);
	},
	seeProjectInfo:function(){
		var selected = this.gridPanel.getSelectionModel().getSelected();
			if (null == selected) {
				Ext.ux.Toast.msg('状态', '请选择一条记录!');
			}else{

			var projectId = selected.get('vSmallloanProject.projectId');	
				var	idPrefix = "SmallLoanProjectInfoEdit_";
				
				Ext.Ajax.request({
					url : __ctxPath + '/creditFlow/getProjectViewObjectCreditProject.do',
					params : {
						businessType : 'SmallLoan',
						projectId : projectId
					},
					method : 'post',
					success : function(resp, op) {
						var record = Ext.util.JSON.decode(resp.responseText);//JSON对象，root为data,通过record对象取数据必须符合"record.data.name"格式
						showProjectInfoTab(record, idPrefix)
					},
					failure : function() {
						Ext.ux.Toast.msg('信息提示', '出错，请联系管理员！');
					}
				})
			
		}
	},
	rowClick : function(grid, rowindex, e) {
		grid.getSelectionModel().each(function(record) {
		var contentPanel = App.getContentPanel();
		var formView = contentPanel.getItem('ProcessNextForm'+ record.get('task.taskId'));
		if (formView == null) {
			formView = new ProcessNextForm({
				taskId : record.get('task.taskId'),
				activityName : record.get('task.activityName'),
				agentTask : true
			});
			contentPanel.add(formView);
		}
		contentPanel.activate(formView);
			
		});
	}
});
