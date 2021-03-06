//ObligationProductInfo
ObligationProductInfo = Ext.extend(Ext.Window, {
	unid:null,
	idDefinition:null,
	obligationId:null,
	// 构造函数
	investPersonPanel : null,
	constructor : function(_cfg) {
		if (_cfg == null) {
			_cfg = {};
		};
		if(typeof(_cfg.unid) != "undefined")
		{
			this.unid=_cfg.unid;
		};
		if(typeof(_cfg.idDefinition) != "undefined"){
		    this.idDefinition=_cfg.idDefinition;
		};
		if (typeof(_cfg.obligationId) != "undefined") {
			this.obligationId = _cfg.obligationId;
		}
		Ext.applyIf(this, _cfg);
		this.initUIComponents();
		ObligationProductInfo.superclass.constructor.call(this, {
					id : 'ObligationProductInfo_'+this.unid,
					layout : 'fit',
					items : [this.formPanel],
					modal : true,
					autoHeight : true,
					width : 1000,
					maximizable : true,
					title : this.title,
					buttonAlign : 'center',
					buttons : [{
								text : '保存',
								iconCls : 'btn-save',
								hidden : this.isLook,
								scope : this,
								handler : this.save
							}, {
								text : '重置',
								iconCls : 'btn-reset',
								hidden : this.isLook,
								scope : this,
								handler : this.reset
							}, {
								text : '取消',
								iconCls : 'btn-cancel',
								hidden : this.isLook,
								scope : this,
								handler : this.cancel
							}]
				});
	},// end of the constructor
	// 初始化组件
	initUIComponents : function() {
		var leftlabel = 100;
		var storepayintentPeriod="[";
		  for (var i = 1; i <31; i++) {
				storepayintentPeriod = storepayintentPeriod + "[" + i
						+ ", " + i + "],";
			}
			storepayintentPeriod = storepayintentPeriod.substring(0,storepayintentPeriod.length - 1);
			storepayintentPeriod = storepayintentPeriod + "]";
			var obstorepayintentPeriod = Ext.decode(storepayintentPeriod);
		this.formPanel = new Ext.form.FormPanel({
			autoHeight : true,
			autoWidth : true,
			layout : 'column',
			bodyStyle : 'padding:10px',
			border : false,
			autoScroll : true,
			frame : true,
			labelAlign : 'right',
			defaults : {
					anchor : '96%',
					labelWidth : 60
				},
				
			items : [{
							xtype : "hidden",
							name : "obObligationProject.projectId",
							value:this.projectId
			},{
							xtype : "hidden",
							name : "obObligationProject.obligationStatus",
							value:0
			},{
							xtype : "hidden",
							name : "obObligationProject.id",
							value:this.obligationId 
			},{
							xtype : "hidden",
							name : "obObligationProject.companyId"
			},{
							xtype : "hidden",
							name : "obObligationProject.businessType"
			},{
							columnWidth : 0.7,
							layout : "form", // 从上往下的布局
							labelWidth : 70,
							labelAlign :'right',
							items:[{
								xtype:'combo',
								border:false,
								triggerClass : 'x-form-search-trigger',
								allowBlank : false,
								fieldLabel : "项目名称",
								blankText :'项目名称',
								readOnly : this.isReadOnly,
								name:"obObligationProject.projectName",
								scope : this,
								onTriggerClick : function() {
											var op =this.ownerCt.ownerCt;
											var selectProductProject =function(obj){
												op.getCmpByName("obObligationProject.projectId").setValue("");
											    op.getCmpByName("obObligationProject.projectName").setValue("");
											    op.getCmpByName("obObligationProject.projectNumber").setValue("");
											    op.getCmpByName("obObligationProject.projectMoney").setValue("");
											    op.getCmpByName("projectMoney1").setValue("");
											    op.getCmpByName("obObligationProject.accrual").setValue("");
											    op.getCmpByName("obObligationProject.companyId").setValue("");
											    op.getCmpByName("obObligationProject.intentDate").setValue("");
											    op.getCmpByName("obObligationProject.businessType").setValue("");
											    op.getCmpByName("obObligationProject.payintentPeriod").setValue("");
											    if(obj.projectId!=0 && obj.projectId!=""){
											    	op.getCmpByName("obObligationProject.projectId").setValue(obj.projectId);
											    }if(obj.projectName!=0 && obj.projectName!=""){
											    	op.getCmpByName("obObligationProject.projectName").setValue(obj.projectName);
											    }if(obj.projectMoney!=0 && obj.projectMoney!=""){
											    	op.getCmpByName("projectMoney1").setValue(obj.projectMoney);
											    	 op.getCmpByName("obObligationProject.projectMoney").setValue(obj.projectMoney);
											    }if(obj.accrual!=0 && obj.accrual!=""){
											    	op.getCmpByName("obObligationProject.accrual").setValue(obj.accrual*12);
											    }if(obj.intentDate!=0 && obj.intentDate!=""){
											    	op.getCmpByName("obObligationProject.intentDate").setValue(obj.intentDate);
											    }if(obj.companyId!=0 && obj.companyId!=""){
											    	op.getCmpByName("obObligationProject.companyId").setValue(obj.companyId);
											    }if(obj.businessType!=0 && obj.businessType!=""){
											    	op.getCmpByName("obObligationProject.businessType").setValue(obj.businessType);
											    }if(obj.projectNumber!=0 && obj.projectNumber!=""){
											    	op.getCmpByName("obObligationProject.projectNumber").setValue(obj.projectNumber);
											    }if(obj.payintentPeriod!=0 && obj.payintentPeriod!=""){
											    	op.getCmpByName("obObligationProject.payintentPeriod").setValue(obj.payintentPeriod);
											    }
											    
											}
											selectSmallLoadProject(selectProductProject);
								},
								anchor : '100%'
							}]
							
					},{
						columnWidth : .3, // 该列在整行中所占的百分比
						layout : "form", // 从上往下的布局
						labelWidth : 90,
						labelAlign :'right',
						items : [{
							xtype : "textfield",
							name : "obObligationProject.projectNumber",
							allowBlank : false,
							readOnly : true,
							fieldLabel : '项目编号',
							//name:"systemAccountNumber",
							value:this.systemAccountNumber,
							blankText :'系统账号不能为空，请正确填写系统账号！',
							anchor : '100%'
							
						}]
					},{
						columnWidth : .7, // 该列在整行中所占的百分比
						layout : "form", // 从上往下的布局
						labelWidth : 70,
						labelAlign :'right',
						items : [{
							xtype : "textfield",
							name : "obObligationProject.obligationName",
							allowBlank : false,
							readOnly : this.isReadOnly,
							fieldLabel : '产品名称',
							//name:"systemAccountNumber",
							value:this.systemAccountNumber,
							blankText :'系统账号不能为空，请正确填写系统账号！',
							anchor : '100%'
							
						}]
					},{
						columnWidth : .3, // 该列在整行中所占的百分比
						layout : "form", // 从上往下的布局
						labelWidth : 90,
						labelAlign :'right',
						items : [{
							xtype : "textfield",
							name : "obObligationProject.obligationNumber",
							allowBlank : false,
							readOnly : this.isReadOnly,
							fieldLabel : '产品编号',
							//name:"systemAccountNumber",
							value:this.systemAccountNumber,
							blankText :'系统账号不能为空，请正确填写系统账号！',
							anchor : '100%'
							
						}]
					},{
						columnWidth : .35, // 该列在整行中所占的百分比
						layout : "form", // 从上往下的布局
						labelWidth : 70,
						labelAlign :'right',
						items : [{
							xtype : "textfield",
							name : "projectMoney1",
							allowBlank : false,
							readOnly : this.isReadOnly,
							style : {
								imeMode : 'disabled'
							},
							fieldClass : 'field-align',
							fieldLabel : '债权金额',
							blankText :'债权金额不能为空，请正确填写债权金额！',
							anchor : '100%',
							listeners : {
								change : function(nf) {
									var value = nf.getValue();
									var continuationMoneyObj = nf.nextSibling();
									var index = value.indexOf(".");
									if (index <= 0) { // 如果第一次输入 没有进行格式化
										nf.setValue(Ext.util.Format.number(value,'0,000.00'))
										continuationMoneyObj.setValue(value);
									} else {
										if (value.indexOf(",") <= 0) {
											var ke = Ext.util.Format.number(value,'0,000.00')
											nf.setValue(ke);
											continuationMoneyObj.setValue(value);
										} else {
											var last = value.substring(index + 1,value.length);
											if (last == 0) {
												var temp = value.substring(0, index);
												temp = temp.replace(/,/g, "");
												continuationMoneyObj.setValue(temp);
											} else {
												var temp = value.replace(/,/g, "");
												continuationMoneyObj.setValue(temp);
											}
										}
									}
									
								}
							}
						},{
							xtype : "hidden",
							name : "obObligationProject.projectMoney"
							
						}]
					},{
						columnWidth : .05, // 该列在整行中所占的百分比
						layout : "form", // 从上往下的布局
						labelWidth : 30,
						items : [{
									fieldLabel : "元 ",
									labelSeparator : '',
									anchor : "90%"
								}]
				},{
							columnWidth : .25, // 该列在整行中所占的百分比
							layout : "form", // 从上往下的布局
							labelWidth : 70,
							labelAlign :'right',
							items : [{
								xtype : 'textfield',
								fieldLabel : '年利率',
								allowBlank : false,
								anchor : '100%',
								readOnly : this.isReadOnly,
								name : "obObligationProject.accrual"
							}]
				
				},{
						columnWidth : .05, // 该列在整行中所占的百分比
						layout : "form", // 从上往下的布局
						labelWidth : 30,
						items : [{
									fieldLabel : "% ",
									labelSeparator : '',
									anchor : "90%"
								}]
				},{
							columnWidth : .3, // 该列在整行中所占的百分比
							layout : "form", // 从上往下的布局
							labelWidth : 90,
							labelAlign :'right',
							items : [{
								xtype : 'datefield',
								fieldLabel : '自动关闭时间',
								allowBlank : false,
								readOnly : this.isReadOnly,
								name : "obObligationProject.intentDate",
								anchor : '100%',
								format : 'Y-m-d'
							}]
				
				},{
						columnWidth : .35, // 该列在整行中所占的百分比
						layout : "form", // 从上往下的布局
						labelWidth : 70,
						labelAlign :'right',
						items : [{
							xtype : "textfield",
							name : "minInvestMent1",
							readOnly : this.isReadOnly,
							allowBlank : false,
							style : {
								imeMode : 'disabled'
							},
							fieldClass : 'field-align',
							fieldLabel : '最小投资额',
							blankText :'最小投资额不能为空，请正确填写最小投资额！',
							anchor : '100%',
							scope : this,
							listeners : {
								scope : this,
								change : function(nf) {
									var value = nf.getValue();
									var continuationMoneyObj = nf.nextSibling();
									var index = value.indexOf(".");
									if (index <= 0) { // 如果第一次输入 没有进行格式化
										nf.setValue(Ext.util.Format.number(value,'0,000.00'))
										continuationMoneyObj.setValue(value);
									} else {
										if (value.indexOf(",") <= 0) {
											var ke = Ext.util.Format.number(value,'0,000.00')
											nf.setValue(ke);
											continuationMoneyObj.setValue(value);
										} else {
											var last = value.substring(index + 1,value.length);
											if (last == 0) {
												var temp = value.substring(0, index);
												temp = temp.replace(/,/g, "");
												continuationMoneyObj.setValue(temp);
											} else {
												var temp = value.replace(/,/g, "");
												continuationMoneyObj.setValue(temp);
											}
										}
									}
									
								},
								blur:function(){
									
													var obj1=this.getCmpByName("obObligationProject.projectMoney");
													var obj2=this.getCmpByName("obObligationProject.totalQuotient");
													
													var projectMoney=obj1.getValue(); //贷款金额
													//alert("projectMoney==="+projectMoney);
													var minInvestMent=this.getCmpByName("obObligationProject.minInvestMent").getValue();//最小投资份额
													obj2.setValue(projectMoney/minInvestMent);
												}
							}
						},{
							xtype : "hidden",
							name : "obObligationProject.minInvestMent"
							
						}]
					},{
						columnWidth : .05, // 该列在整行中所占的百分比
						layout : "form", // 从上往下的布局
						labelWidth : 30,
						items : [{
									fieldLabel : "元 ",
									labelSeparator : '',
									anchor : "90%"
								}]
				},{
							columnWidth : .25, // 该列在整行中所占的百分比
							layout : "form", // 从上往下的布局
							labelWidth : 70,
							labelAlign :'right',
							items : [{
								xtype : 'textfield',
								fieldLabel : '总份额',
								allowBlank : false,
								readOnly : true,
								name : "obObligationProject.totalQuotient",
								anchor : '100%'
							}]
				
				},{
						columnWidth : .05, // 该列在整行中所占的百分比
						layout : "form", // 从上往下的布局
						labelWidth : 30,
						items : [{
									fieldLabel : "份 ",
									labelSeparator : '',
									anchor : "90%"
								}]
				},{
							columnWidth : .25, // 该列在整行中所占的百分比
							layout : "form", // 从上往下的布局
							labelWidth :90,
							labelAlign :'right',
							items : [{
								xtype : 'textfield',
								fieldLabel : '债权期限',
								allowBlank : false,
								readOnly : this.isReadOnly,
								anchor : '100%',
								name : "obObligationProject.payintentPeriod"
							}]
				
				},{
						columnWidth : .05, // 该列在整行中所占的百分比
						layout : "form", // 从上往下的布局
						labelWidth : 30,
						items : [{
									fieldLabel : "月 ",
									labelSeparator : '',
									anchor : "90%"
								}]
				},{
							columnWidth : 1, // 该列在整行中所占的百分比
							layout : "form", // 从上往下的布局
							labelWidth : 70,
							labelAlign :'right',
							items : [{
								xtype : 'textfield',
								fieldLabel : '债权目的',
								readOnly : this.isReadOnly,
								allowBlank : false,
								anchor : '100%',
								name : "obObligationProject.purposeType"
							}]
				
				},/*{
							columnWidth : .25, // 该列在整行中所占的百分比
							layout : "form", // 从上往下的布局
							labelWidth :90,
							labelAlign :'right',
							items : [{
								xtype : 'textfield',
								fieldLabel : '最小份额',
								allowBlank : false,
								readOnly : this.isReadOnly,
								anchor : '100%',
								name : "obObligationProject.minQuotient"
							}]
				
				},{
						columnWidth : .05, // 该列在整行中所占的百分比
						layout : "form", // 从上往下的布局
						labelWidth : 30,
						items : [{
									fieldLabel : "份",
									labelSeparator : '',
									anchor : "90%"
								}]
				},*/{
						columnWidth : 1,
						layout:'column',
						items : [
						 {
						columnWidth : .13, // 该列在整行中所占的百分比
						layout : "form", // 从上往下的布局
						labelWidth : 70,
						items : [{
							 fieldLabel : "计息方式 ",
							// fieldClass : 'field-align',
							//html : "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计息周期:",
							anchor : "100%"
						}]
					}, {
						columnWidth : 0.12,
						labelWidth : 5,
						layout : 'form',
						items : [{
							xtype : 'radio',
							boxLabel : '等额本金',
							// fieldLabel : "计息方式",
							name : 'f1',
							id : "jixifs1" +this.idDefinition,
							inputValue : false,
							anchor : "100%",
							disabled : this.isReadOnly,
							listeners : {
								scope : this,
								check : function(obj, checked) {
									var flag = Ext.getCmp("jixifs1"
											+ this.idDefinition).getValue();
									if (flag == true) {
										this.getCmpByName('month').show();
										this.getCmpByName('periord').hide()
										this.getCmpByName('obObligationProject.accrualtype').setValue("sameprincipal");
										Ext.getCmp("jixizq1"+this.idDefinition).setDisabled(true);
									      Ext.getCmp("jixizq2"+ this.idDefinition).setDisabled(true);
									        Ext.getCmp("jixizq3"+ this.idDefinition).setDisabled(true);
									          Ext.getCmp("jixizq4"+ this.idDefinition).setDisabled(true);  
									          
									           Ext.getCmp("jixizq6"+ this.idDefinition).setDisabled(true);
									           this.getCmpByName('obObligationProject.dayOfEveryPeriod').setDisabled(true);
								 	            this.getCmpByName('obObligationProject.dayOfEveryPeriod').setValue("");
								 	    
									              Ext.getCmp("jixizq2"+ this.idDefinition).setValue(true);
									             Ext.getCmp("jixizq1" +this.idDefinition).setValue(false);
									            this.getCmpByName('obObligationProject.payaccrualType').setValue("monthPay");
									            
									             this.getCmpByName('obObligationProject.payintentPeriod').setDisabled(false);  //修改的  zcb
									              this.getCmpByName('mqhkri1').hide();
								                   this.getCmpByName('mqhkri').show();
									}
								}
							}
						}]
					}, {
						columnWidth : 0.12,
						labelWidth : 5,
						layout : 'form',
						items : [{
							xtype : 'radio',
							boxLabel : '等额本息',
							anchor : "100%",
							name : 'f1',
							id : "jixifs2" +this.idDefinition,
							inputValue : false,
							disabled : this.isReadOnly,
							listeners : {
								scope : this,
								check : function(obj, checked) {
									var flag = Ext.getCmp("jixifs2"+ this.idDefinition).getValue();
									if (flag == true) {
										this.getCmpByName('month').show();
										this.getCmpByName('periord').hide()
										this.getCmpByName('obObligationProject.accrualtype').setValue("sameprincipalandInterest");
									    Ext.getCmp("jixizq1"+ this.idDefinition).setDisabled(true);
									      Ext.getCmp("jixizq2"+ this.idDefinition).setDisabled(true);
									        Ext.getCmp("jixizq3"+ this.idDefinition).setDisabled(true);
									          Ext.getCmp("jixizq4"+ this.idDefinition).setDisabled(true);  
									           
									           Ext.getCmp("jixizq6"+ this.idDefinition).setDisabled(true);
									           this.getCmpByName('obObligationProject.dayOfEveryPeriod').setDisabled(true);
								 	           this.getCmpByName('obObligationProject.dayOfEveryPeriod').setValue("");
									          
								 	           Ext.getCmp("jixizq2"+ this.idDefinition).setValue(true);
									             Ext.getCmp("jixizq1"+ this.idDefinition).setValue(false);
									            this.getCmpByName('obObligationProject.payaccrualType').setValue("monthPay");
									            
									             this.getCmpByName('obObligationProject.payintentPeriod').setDisabled(false); //修改的  zcb
									              this.getCmpByName('mqhkri1').hide();
								                    this.getCmpByName('mqhkri').show();
									}
								}
							}
						}]
					},{
						columnWidth : 0.12,
						labelWidth : 5,
						layout : 'form',
						items : [{
							xtype : 'radio',
							boxLabel : '等本等息',
							anchor : "100%",
							name : 'f1',
							id : "jixifs5" +this.idDefinition,
							inputValue : false,
							disabled : this.isReadOnly,
							listeners : {
								scope : this,
								check : function(obj,checked){
									
									var flag = Ext.getCmp("jixifs5"
											+ this.idDefinition).getValue();
									if (flag == true) {
										this.getCmpByName('month').hide();
										this.getCmpByName('periord').show()
										this.getCmpByName('obObligationProject.accrualtype').setValue("sameprincipalsameInterest");
										  Ext.getCmp("jixizq1"+ this.idDefinition).setDisabled(false);
									      Ext.getCmp("jixizq2"+ this.idDefinition).setDisabled(false);
									        Ext.getCmp("jixizq3"+ this.idDefinition).setDisabled(false);
									          Ext.getCmp("jixizq4"+ this.idDefinition).setDisabled(false);  
									           Ext.getCmp("jixizq6"+ this.idDefinition).setDisabled(false);
									//          this.getCmpByName('slSmallloanProject.dayOfEveryPeriod').setDisabled(false);
	                                         if(this.getCmpByName('obObligationProject.payaccrualType').getValue()==""){
									          Ext.getCmp("jixizq2"+ this.idDefinition).setValue(true);
									             Ext.getCmp("jixizq1"+ this.idDefinition).setValue(false);
									            this.getCmpByName('obObligationProject.payaccrualType').setValue("monthPay");
	                                         }
									}
								
								}
							}
						}]
					}, {
						columnWidth : 0.14,
						labelWidth : 5,
						layout : 'form',
						items : [{
							xtype : 'radio',
							boxLabel : '按期收息,到期还本',
							name : 'f1',
							id : "jixifs3" +this.idDefinition,
							inputValue : false,
							checked : true,
							anchor : "100%",
							disabled : this.isReadOnly,
							listeners : {
								scope : this,
								check : function(obj, checked) {
									var flag = Ext.getCmp("jixifs3"
											+ this.idDefinition).getValue();
									if (flag == true) {
										this.getCmpByName('month').show();
										this.getCmpByName('periord').hide()
										this.getCmpByName('obObligationProject.accrualtype').setValue("singleInterest");
										  Ext.getCmp("jixizq1"+ this.idDefinition).setDisabled(false);
									      Ext.getCmp("jixizq2"+ this.idDefinition).setDisabled(false);
									        Ext.getCmp("jixizq3"+ this.idDefinition).setDisabled(false);
									          Ext.getCmp("jixizq4"+ this.idDefinition).setDisabled(false);  
									           Ext.getCmp("jixizq6"+ this.idDefinition).setDisabled(false);
									//          this.getCmpByName('slSmallloanProject.dayOfEveryPeriod').setDisabled(false);
	                                         if(this.getCmpByName('obObligationProject.payaccrualType').getValue()==""){
									          Ext.getCmp("jixizq2"+ this.idDefinition).setValue(true);
									             Ext.getCmp("jixizq1"+ this.idDefinition).setValue(false);
									            this.getCmpByName('obObligationProject.payaccrualType').setValue("monthPay");
	                                         }
									}
								}
							}
						}, {
							xtype : "hidden",
							name : "obObligationProject.accrualtype",
							value : "singleInterest"

						}]
					}, {
						columnWidth : 0.15,
						labelWidth : 5,
						layout : 'form',
						items : [{
							xtype : 'radio',
							boxLabel : '一次性还本付息',
							name : 'f1',
							id : "jixifs4" +this.idDefinition,
							inputValue : true,
							anchor : "100%",
							disabled : this.isReadOnly,
							listeners : {
								scope : this,
								check : function(obj, checked) {
									var flag = Ext.getCmp("jixifs4"+ this.idDefinition).getValue();
									if (flag == true) {
										this.getCmpByName('month').show();
										this.getCmpByName('periord').hide()
										this.getCmpByName('obObligationProject.accrualtype').setValue("ontTimeAccrual");
										Ext.getCmp("jixizq1"+this.idDefinition).setDisabled(true);
									      Ext.getCmp("jixizq2"+ this.idDefinition).setDisabled(true);
									        Ext.getCmp("jixizq3"+ this.idDefinition).setDisabled(true);
									          Ext.getCmp("jixizq4"+ this.idDefinition).setDisabled(true);  
								                
									           Ext.getCmp("jixizq6"+ this.idDefinition).setDisabled(true);
									           this.getCmpByName('obObligationProject.dayOfEveryPeriod').setDisabled(true);
								 	            this.getCmpByName('obObligationProject.dayOfEveryPeriod').setValue("");
								 	    
									              Ext.getCmp("jixizq6"+ this.idDefinition).setValue(false);
									             Ext.getCmp("jixizq1" +this.idDefinition).setValue(false);
									             Ext.getCmp("jixizq2" +this.idDefinition).setValue(false);
									            this.getCmpByName('obObligationProject.payaccrualType').setValue("");
									            
									             
								                   
										 // this.getCmpByName('payintentPeriod1').setDisabled(true);
										  //this.getCmpByName('payintentPeriod1').setValue(1);
									      this.getCmpByName('obObligationProject.payintentPeriod').setDisabled(true); //修改的  zcb
										  this.getCmpByName('obObligationProject.payintentPeriod').setValue(1);
									   this.getCmpByName('mqhkri').hide();
								       this.getCmpByName('mqhkri1').show();
								        
									}else{
									  // this.getCmpByName('payintentPeriod1').setDisabled(false);
									   this.getCmpByName('obObligationProject.payintentPeriod').setDisabled(false); //修改的  zcb
										
									   this.getCmpByName('mqhkri1').hide();
								       this.getCmpByName('mqhkri').show();
									
									}
								}
							}
						}, {
							xtype : "hidden",
							name : "obObligationProject.payaccrualType",
							value : "monthPay"

						}]
					}
					]
				},{
					
				columnWidth : 1,
					layout:'column',
					items : [ {
					columnWidth : .13, // 该列在整行中所占的百分比
					layout : "form", // 从上往下的布局
					labelWidth : 70,
					items : [{
						 fieldLabel : "计息周期 ",
						// fieldClass : 'field-align',
						//html : "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计息周期:",
						anchor : "100%"
					}]
				}, {
					columnWidth : 0.12,
					labelWidth : 5,
					layout : 'form',
					items : [{
						xtype : 'radio',
						boxLabel : '日',
						name : 'z1',
						id : "jixizq1" + this.idDefinition,
						inputValue : true,
						anchor : "100%",
						disabled : this.isReadOnly,
						listeners : {
							scope : this,
							check : function(obj, checked) {
								var flag = Ext.getCmp("jixizq1"	+ this.idDefinition).getValue();
								if (flag == true) {
									this.getCmpByName('obObligationProject.payaccrualType').setValue("dayPay");
									
									 Ext.getCmp("meiqihkrq1"+this.idDefinition).setDisabled(true);
									 Ext.getCmp("meiqihkrq1"+ this.idDefinition).setValue(false);
									 Ext.getCmp("meiqihkrq2"+ this.idDefinition).setDisabled(true);
									 Ext.getCmp("meiqihkrq2"+ this.idDefinition).setValue(true);
								
									 	this.getCmpByName('obObligationProject.isStartDatePay').setValue("2");
									 	
									 
								     
								     
								}else {
								       
								       
								     Ext.getCmp("meiqihkrq1"+this.idDefinition).setDisabled(false);
									 Ext.getCmp("meiqihkrq2"+ this.idDefinition).setDisabled(false);
									 if(Ext.getCmp("meiqihkrq1"+ this.idDefinition).getValue()==true){
									 this.getCmpByName('obObligationProject.payintentPerioDate').setDisabled(false);
									 }
								       }
								 
							}
						}
					}]
				}, {
					columnWidth : 0.12,
					labelWidth : 5,
					layout : 'form',
					items : [{
						xtype : 'radio',
						boxLabel : '月',
						name : 'z1',
						id : "jixizq2" +this.idDefinition,
						inputValue : false,
						checked : true,
						anchor : "100%",
						disabled : this.isReadOnly,
						listeners : {
							scope : this,
							check : function(obj, checked) {
								var flag = Ext.getCmp("jixizq2"
										+this.idDefinition).getValue();
								if (flag == true) {
									this.getCmpByName('obObligationProject.payaccrualType').setValue("monthPay");
								}
							}
						}
					}]
				}, {
					columnWidth : 0.12,
					labelWidth : 5,
					layout : 'form',
					items : [{
						xtype : 'radio',
						boxLabel : '季',
						name : 'z1',
						id : "jixizq3" + this.idDefinition,
						inputValue : false,
						anchor : "100%",
						disabled : this.isReadOnly,
						listeners : {
							scope : this,
							check : function(obj, checked) {
								var flag = Ext.getCmp("jixizq3"
										+this.idDefinition).getValue();
								if (flag == true) {
									this.getCmpByName('obObligationProject.payaccrualType').setValue("seasonPay");
								
								}
							}
						}
					}]
				}, {
					columnWidth : 0.14,
					labelWidth : 5,
					layout : 'form',
					items : [{
						xtype : 'radio',
						boxLabel : '年',
						name : 'z1',
						id : "jixizq4" + this.idDefinition,
						inputValue : false,
						anchor : "100%",
						disabled : this.isReadOnly,
						listeners : {
							scope : this,
							check : function(obj, checked) {
								var flag = Ext.getCmp("jixizq4"
										+ this.idDefinition).getValue();
								if (flag == true) {
									this.getCmpByName('obObligationProject.payaccrualType').setValue("yearPay");
									
								}
							}
						}
					}]
				}, {
					columnWidth : 0.1,
					labelWidth : 5,
					layout : 'form',
					items : [{
						xtype : 'radio',
						boxLabel : '自定义周期',
						name : 'z1',
						id : "jixizq6" + this.idDefinition,
						inputValue : false,
						anchor : "100%",
						disabled : this.isReadOnly,
						listeners : {
							scope : this,
							check : function(obj, checked) {
								var flag = Ext.getCmp("jixizq6"
										+ this.idDefinition).getValue();
								if (flag == true) {
									this.getCmpByName('obObligationProject.payaccrualType').setValue("owerPay");
									
								   this.getCmpByName('obObligationProject.dayOfEveryPeriod').setDisabled(false);
								   
								    Ext.getCmp("meiqihkrq1"+this.idDefinition).setDisabled(true);
									 Ext.getCmp("meiqihkrq1"+ this.idDefinition).setValue(false);
									 Ext.getCmp("meiqihkrq2"+ this.idDefinition).setDisabled(true);
									 Ext.getCmp("meiqihkrq2"+ this.idDefinition).setValue(true);
								}else{
								 this.getCmpByName('obObligationProject.dayOfEveryPeriod').setDisabled(true);
							 	    this.getCmpByName('obObligationProject.dayOfEveryPeriod').setValue("");
							 	    if(Ext.getCmp("jixizq1"+ this.idDefinition).getValue()==false){
								 	     Ext.getCmp("meiqihkrq1"+this.idDefinition).setDisabled(false);
										 Ext.getCmp("meiqihkrq2"+ this.idDefinition).setDisabled(false);
										 if(Ext.getCmp("meiqihkrq1"+ this.idDefinition).getValue()==true){
										  this.getCmpByName('obObligationProject.payintentPerioDate').setDisabled(false);
										 }
									  }
								    
								}
							}
						}
					}]
				}, {
					columnWidth : 0.06,
					labelWidth : 5,
					layout : 'form',
					items : [{
					 xtype:'textfield',
					 anchor : "100%",
				 	readOnly : this.isReadOnly,
				 	fieldClass : 'field-align',
					 name:'obObligationProject.dayOfEveryPeriod'
					}
					]}, {
						columnWidth : 0.04,
						labelWidth :20,
						layout : 'form',
						items : [{
						fieldLabel : "天",
							labelSeparator : '',
							anchor : "100%"
								}]}
					
					]
				},{
					
					columnWidth : 1,
					layout:'column',
					items:[ {
					columnWidth : .5, 
					name :"mqhkri",
					layout : "column", 
					items : [ {
							columnWidth : 0.328,
							labelWidth : 69,
							layout : 'form',
							items : [{
										xtype : 'radio',
										fieldLabel : '每期还款日',
										boxLabel : '固定在',
										name : 'q1',
										id : "meiqihkrq1" + this.idDefinition,
										inputValue : true,
										anchor : "100%",
										disabled :this.isReadOnly,
										listeners : {
										scope : this,
										check : function(obj, checked) {
											var flag = Ext.getCmp("meiqihkrq1"+ this.idDefinition).getValue();
											if (flag == true) {
												this.getCmpByName('obObligationProject.isStartDatePay').setValue("1");
												this.getCmpByName('obObligationProject.payintentPerioDate').setDisabled(false);
											}
										}
									}

									}, {
										xtype : "hidden",
										name : "obObligationProject.isStartDatePay"

									}]
						}, {
							columnWidth : 0.132,
							labelWidth : 1,
							layout : 'form',
							items : [{
										xtype : 'textfield',
										readOnly : this.isReadOnly,
										name : "obObligationProject.payintentPerioDate",
										xtype : 'combo',
										mode : 'local',
										disabled :true,
										displayField : 'name',
										valueField : 'id',
										editable : true,
										store : new Ext.data.SimpleStore({
													fields : ["name", "id"],
													data : obstorepayintentPeriod
												}),
										triggerAction : "all",
										hiddenName : "obObligationProject.payintentPerioDate",
										fieldLabel : "",
										anchor : '100%'
									}]
						}, {
							columnWidth : 0.12,
							labelWidth :45,
							layout : 'form',
							items : [{
							fieldLabel : "日还款",
								labelSeparator : '',
								anchor : "100%"
									}]
						}, {
							columnWidth : 0.42,
							labelWidth : 10,
							layout : 'form',
							items : [{
										xtype : 'radio',
										boxLabel : '按实际放款日对日还款',
										name : 'q1',
										id : "meiqihkrq2" + this.idDefinition,
										inputValue : true,
										checked : true,
										anchor : "100%",
										disabled : this.isReadOnly,
										listeners : {
										scope : this,
										check : function(obj, checked) {
											var flag = Ext.getCmp("meiqihkrq2"
													+ this.idDefinition).getValue();
											if (flag == true) {
												this.getCmpByName('obObligationProject.isStartDatePay').setValue("2");
												this.getCmpByName('obObligationProject.payintentPerioDate').setValue(null);
														this.getCmpByName('obObligationProject.payintentPerioDate').setDisabled(true);
											}
										}
									}

									}]
						}]}
						,  {
							columnWidth : .12, // 该列在整行中所占的百分比
							layout : "form", // 从上往下的布局
							labelWidth : 13,
							items : [{
								xtype : "checkbox",
								boxLabel : "是否前置付息",
								disabled : this.isReadOnly,
								anchor : "100%",
								name : "isPreposePayAccrualcheck",
								listeners : {
									scope : this,
									'check' : function(box,value){
										if(value==true){
											this.getCmpByName('obObligationProject.isPreposePayAccrual').setValue(1);
										}else{
											this.getCmpByName('obObligationProject.isPreposePayAccrual').setValue(0);
										}
									}
								}
							},{
								xtype : 'hidden',
								name : 'obObligationProject.isPreposePayAccrual',
								value : 0
							}]
						}]
				
				}]
		});
		// this.gridPanel.addListener('rowdblclick', this.rowClick);
		// 加载表单对应的数据
		if (this.obligationId  != null && this.obligationId  != 'undefined') {
			var   panel =this;
			this.formPanel.loadData({
						url : __ctxPath + "/creditFlow/creditAssignment/project/getObObligationProject.do?id="+ this.obligationId ,
						root : 'data',
						preName : 'obObligationProject',
						success : function(response, options) {
							var respText = response.responseText;
								var alarm_fields = Ext.util.JSON.decode(respText);
							   // this.ownerCt.ownerCt.getCmpByName('comments').setValue(alarm_fields.data.comments);
								this.getCmpByName('projectMoney1').setValue(Ext.util.Format.number(alarm_fields.data.projectMoney,'0,000.00'));
								this.getCmpByName('minInvestMent1').setValue(Ext.util.Format.number(alarm_fields.data.minInvestMent,'0,000.00'));
								fillData(this,alarm_fields,panel.idDefinition);
							}
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
	save : function() {
		var viewId =this.viewId;
		var panel =this.gridPanel;
		$postForm({
					formPanel : this.formPanel,
					scope : this,
					url : __ctxPath + "/creditFlow/creditAssignment/project/saveObligationProjectObObligationProject.do",
					callback : function(fp, action) {
						panel.getStore().reload();
						this.close();
						
					}
				});
	}// end of save

});