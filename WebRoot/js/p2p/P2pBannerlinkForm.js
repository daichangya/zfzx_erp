/**
 * @author
 * @createtime
 * @class P2pBannerlinkForm
 * @extends Ext.Window
 * @description P2pBannerlink表单
 * @company 智维软件
 */
P2pBannerlinkForm = Ext.extend(Ext.Window, {
	// 构造函数
	constructor : function(_cfg) {
		Ext.applyIf(this, _cfg);
		// 必须先初始化组件
		this.initUIComponents();
		P2pBannerlinkForm.superclass.constructor.call(this, {
					id : 'P2pBannerlinkFormWin',
					layout : 'fit',
					items : this.formPanel,
					modal : true,
					height : 300,
					width : 500,
					maximizable : true,
					title : 'banner详细信息',
					buttonAlign : 'center',
					buttons : [{
								text : '保存',
								iconCls : 'btn-save',
								scope : this,
								handler : this.save
							}, {
								text : '重置',
								iconCls : 'btn-reset',
								scope : this,
								handler : this.reset
							}, {
								text : '取消',
								iconCls : 'btn-cancel',
								scope : this,
								handler : this.cancel
							}]
				});
	},// end of the constructor
	// 初始化组件
	initUIComponents : function() {
		// 文件上传组件的回调函数
		function fn(data) {
			// 定义一个变量用来接收上传文件成功后返回的路径值
			var path;
			for (var i = 0; i < data.length; i++) {
				path = data[i].filePath;
				// 得到报表模块路径的字段，然后把上传成功后返回的路径值设到字段里面
				Ext.getCmp('banner').setValue(path);
			}
		}
		this.formPanel = new Ext.FormPanel({
					layout : 'form',
					bodyStyle : 'padding:10px',
					border : false,
					autoScroll : true,
					// id : 'P2pBannerlinkForm',
					defaults : {
						anchor : '96%,96%'
					},
					enctype : 'multipart/form-data',
					fileUpload: true,
					defaultType : 'textfield',
					items : [{
								name : 'p2pBannerlink.id',
								xtype : 'hidden',
								value : this.id == null ? '' : this.id
							}, {
								fieldLabel : '名称',
								name : 'p2pBannerlink.name',
								allowBlank : false,
								maxLength : 255
							}
						/*, {
								fieldLabel : '类型',
								allowBlank : false,
								xtype : 'combo',
								hiddenName:'p2pBannerlink.linkType',
								name:'p2pBannerlink.linkType',
								editable : false,
								mode : 'local',
								triggerAction : 'all',
								valueField:'id',
								displayField:'name',
								store : new Ext.data.SimpleStore({
									fields : ["id","name"],
									data : [['1', '图文'], ['2', '文字']]
								}),
								listeners : {
									scope:this,
									select : function(combo, record, value) {
										if (value == 0) {
											Ext.getCmp('logo')
													.setDisabled(false);
													Ext.getCmp('uploadBtn').setDisabled(false);
													
										}
										if (value == 1) {
											Ext.getCmp('logo')
													.setDisabled(true);
													Ext.getCmp('uploadBtn').setDisabled(true);
										}
									},
									afterrender : function(combox) {
										var st = combox.getStore();
										st.on("load", function() {
											combox.setValue(combox.getValue());
											combox.clearInvalid();
										})
									}
								},
								value : 1
							}*/
							/*,{
								xtype : 'textfield',
								fieldLabel : "banner",
								columnWidth : 1,
								allowBlank : true,
								blankText : '不能为空',
								id : 'fileUpload',
								name: 'myUpload',
								fileUpload: true ,
								frame: true,
			    				inputType: 'file'
							}*/,{
								xtype : 'hidden',
								columnWidth : .2,
								name: 'mark'
							}, {
								xtype : 'button',
								text:'上传图片',
								fieldLabel : '上传图片',
								value:'上传图片',
								width:.5,
								scope : this,
								handler : this.upload
							}, /*{
								fieldLabel : '文章图片',
								name:'articleImg',
								maxLength : 255
							},*/ 
							{
								fieldLabel : '图片地址',
								name : 'p2pBannerlink.url',
								allowBlank : false,
								maxLength : 255
								//value:'http://'
							},
							{
								fieldLabel : '链接地址',
								name : 'p2pBannerlink.urlLink',
								allowBlank : false,
								maxLength : 255
								//value:'http://'
							},{
										xtype : 'combo',
										fieldLabel : '网站类别',
										allowBlank : false,
										mode : 'local',
										displayField : 'typeValue',
						                valueField : 'typeId',
						                triggerAction : 'all',
						                editable : false,
										hiddenName : 'p2pBannerlink.webKey',
										store : new Ext.data.SimpleStore({
								        data : [['P2P网站',1],['手机端',2]],
								        fields:['typeValue','typeId']
							            })
									},{
								anchor : '96%',
								fieldLabel : '是否显示',
								hiddenName : 'p2pBannerlink.isShow',
								allowBlank : false,
								xtype : 'combo',
								store : [['0','否'],['1','是']],
								mode : 'local',
								editable : false,
								triggerAction : 'all'
								//emptyText : '--请选择表单状态--'
							},{
								fieldLabel : '排序',
								name : 'p2pBannerlink.orderList',
								allowBlank : false,
								xtype : 'numberfield'
							}]
				});
		// 加载表单对应的数据
		if (this.id != null && this.id != 'undefined') {
			this.formPanel.loadData({
						url : __ctxPath + '/p2p/getP2pBannerlink.do?id='
								+ this.id,
						root : 'data',
						preName : 'p2pBannerlink'
					});
		}

	},// end of the initcomponents

	/**
	 * 重置
	 * 
	 * @param {}
	 *            formPanel
	 */
	reset : function() {
		this.formPanel.getForm().reset();
	},
	/**
	 * 取消
	 * 
	 * @param {}
	 *            window
	 */
	cancel : function() {
		this.close();
	},
	/**
	 * 保存记录
	 */
	/*save : function() {
		// 
		  var img_reg = /\.([jJ][pP][gG]){1}$|\.([jJ][pP][eE][gG]){1}$|\.([gG][iI][fF]){1}$|\.([pP][nN][gG]){1}$|\.([bB][mM][pP]){1}$/  
			   var url = 'file://'+ Ext.get('fileUpload').dom.value;  
              var furl=Ext.get('fileUpload').dom.value;

              var extendname=furl.substring(furl.lastIndexOf("."),furl.length);//获取文件的后缀名
			   
//			   if(!img_reg.test(url) && extendname!=".pdf") {  
//	             	alert('您选择的文件格式不正确,请重新选择!');
//	                return false;
//               };
              $postForm({
					formPanel : this.formPanel,
					scope : this,
//					url :__ctxPath+'/p2p/ftpUploadFileP2pBannerlink.do',
					method : 'POST',
					waitTitle : '连接',
					waitMsg : '消息发送中...',
					params:{extendname:extendname,tablename:"p2p_BannerLink"},
					callback : function(fp, action) {
						
					}
				});
            
		$postForm({
					formPanel : this.formPanel,	
					scope : this,
					url : __ctxPath + '/p2p/saveP2pBannerlink.do',
					params:{extendname:extendname,tablename:"p2p_BannerLink",selectId:""},
					
				
					callback : function(fp, action) {
						 
						var gridPanel = Ext.getCmp('P2pBannerlinkGrid');
						if (gridPanel != null) {
							gridPanel.getStore().reload();
						}
						this.close();
					}
				});
	}// end of save*/
	save : function() {
		$postForm({
					formPanel : this.formPanel,
					scope : this,
					url : __ctxPath + '/p2p/saveP2pBannerlink.do',
					params : {
						
					},
					callback : function(fp, action) {
						 
						var gridPanel = Ext.getCmp('P2pBannerlinkGrid');
						if (gridPanel != null) {
							gridPanel.getStore().reload();
						}
						this.close();
					}
				});
	}// end of save,
	,upload : function() {
		 
	      new P2pBannerUpLoadFile({
				 talbeName: "p2p_bannerlink",
				 targetForm:this.formPanel
				 
			}).show();}// end of save
});