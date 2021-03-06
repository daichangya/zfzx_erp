/**
 * @author 
 * @createtime 
 * @class OurProcreditAssuretenetGuaranteeForm
 * @extends Ext.Window
 * @description OurProcreditAssuretenetGuaranteeForm表单
 * @company 智维软件
 */
OurProcreditAssuretenetGuaranteeForm = Ext.extend(Ext.Window, {
	gridPanel:null,
	productId:null,
	constructor : function(_cfg) {
		if (typeof(_cfg.gridPanel) != "undefined") {
			this.gridPanel = _cfg.gridPanel;
		}
		if (typeof(_cfg.productId) != "undefined") {
			this.productId = _cfg.productId;
		}
		Ext.applyIf(this, _cfg);
		this.initUIComponents();
		OurProcreditAssuretenetGuaranteeForm.superclass.constructor.call(this, {
			layout : 'fit',
			items : this.materialsPanel,
			modal : true,
			height:220,
			width : 520,
			maximizable : true,
			title : '贷款必备条件详细信息'
		});
	},//end of the constructor
	//初始化组件
	initUIComponents : function() {
		// 材料清单树Panel
		
		this.dic_TreeLoader = new Ext.tree.TreeLoader({
				dataUrl :  __ctxPath+"/assuretenet/getAssuretenetTreeOurProcreditAssuretenet.do?productId="+this.productId
			})
		this.dic_Root = new Ext.tree.AsyncTreeNode({
			id : '0',
			text : "贷款必备条件"
		});
		
		var gridPanel=this.gridPanel;
		
		this.materialsPanel= new Ext.Panel({
			id : 'assuretenet_TreePanel',
			frame : false,
			autoWidth:true,
			collapsible : false,
			titleCollapse : false,
			autoScroll:true,
			height : Ext.getBody().getViewSize().height-115,
			items : [{
				id :'assuretenetTree_panel',
				xtype : 'treepanel',
				border : false,
				iconCls : 'icon-nav',
				rootVisible : true,
				loader : this.dic_TreeLoader,
				root : this.dic_Root,
				listeners:{
					'dblclick': function(node) {
						if(node.leaf){
							var flag=true;
							var items=gridPanel.getStore().data.items;
							if(items){
								for(var i=0;i<items.length;){
									if(items[i].data.assuretenet==node.text){
										flag=false;
										break;
									}else{
										i++;
									}
								}
							}
							if(flag){
								var newRecord = gridPanel.getStore().recordType;
								var newData = new newRecord({
									assuretenetId : '',
									assuretenet : node.text,
									outletopinion:''
								});
								gridPanel.stopEditing();
								gridPanel.getStore().insert(gridPanel.getStore().getCount(),newData);
								gridPanel.getView().refresh();
								gridPanel.getSelectionModel().selectRow((gridPanel.getStore().getCount() - 1));
								gridPanel.startEditing(0,1);
							}
						}else{
							return;
						}
					}
				}
			}]
		});
	}
});