package com.credit.proj.mortgage.business.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.credit.proj.entity.ProcreditMortgage;
import com.credit.proj.entity.ProcreditMortgageBusiness;
import com.credit.proj.entity.VProcreditDictionary;
import com.credit.proj.entity.VProcreditDictionaryFinance;
import com.credit.proj.entity.VProcreditDictionaryGuarantee;
import com.credit.proj.entity.VProjMortBusiness;
import com.credit.proj.mortgage.business.service.BusinessServMort;
import com.credit.proj.mortgage.morservice.service.MortgageService;
import com.credit.proj.mortgage.morservice.service.pageconfig;
import com.zhiwei.credit.core.commons.CreditBaseAction;
import com.zhiwei.credit.core.creditUtils.JsonUtil;
import com.zhiwei.credit.model.creditFlow.fileUploads.FileForm;
import com.zhiwei.credit.service.creditFlow.fileUploads.FileFormService;


/**
 * 
 * @author weipengfei
 * 
 */
@SuppressWarnings("all")
public class BusinessMortAction extends CreditBaseAction {
	private static final long serialVersionUID = 1L;
	private BusinessServMort businessServMort;
	private MortgageService mortgageService;
	private ProcreditMortgage procreditMortgage;
	private VProcreditDictionary vProcreditDictionary;
	private ProcreditMortgageBusiness procreditMortgageBusiness;
	private VProjMortBusiness vProjMortBusiness;
	private Long projectId;
	private Integer mortgageid;
	//private Integer personType;
	//private Integer assuretypeid;
	private Integer customerEnterpriseName;
	private Integer customerPersonName;
	
	//private int processType;//1：企业贷款保前；2：二次放款；3：个人经营性贷款。
	private String businessType;//业务种类
	private String mfinancingId;

	@Resource
	private FileFormService fileFormService;
	/**
	 * 
	 * 添加信息
	 */
	public void addBusiness() {
		try {
			//final String projId = JbpmUtil.piKeyToProjectId(projectId);
			procreditMortgage.setMortgagenametypeid(pageconfig.BusinessID);
			procreditMortgage.setProjid(projectId);
			if(null!=procreditMortgage.getBusinessType() &&  procreditMortgage.getBusinessType().equals("SmallLoan")){
			    procreditMortgage.setMortgageStatus("smallcblr");
			}else if(null!=procreditMortgage.getBusinessType() &&  procreditMortgage.getBusinessType().equals("Guarantee")){
			    procreditMortgage.setMortgageStatus("guaranteecblr");
			}else if(null!=procreditMortgage.getBusinessType() &&  procreditMortgage.getBusinessType().equals("Financing")){
			    procreditMortgage.setMortgageStatus("financingwbl");
			}
			procreditMortgage.setContractid(0);
			if(null !=customerEnterpriseName){
				procreditMortgage.setAssureofname(customerEnterpriseName);
			}else{
				procreditMortgage.setAssureofname(customerPersonName);
			}
			procreditMortgage.setMortgagepersontypeforvalue(pageconfig.BusinessValue);
			businessServMort.addBusiness(procreditMortgageBusiness,procreditMortgage);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 从反担保主表,商业表查询数据显示在更新页面
	 */
	
	public void seeBusinessForUpdate() throws Exception{
		Map<String, Object> mapObject = new HashMap<String, Object>();
		int rid=0;
		VProcreditDictionaryGuarantee vpg = null;
		VProcreditDictionaryFinance vpf = null;
		
		if(getRequest().getParameter("id")!=null){
			rid=Integer.parseInt(getRequest().getParameter("id"));
		}
		
	//	ProcreditMortgage pm = mortgageService.seeMortgage(ProcreditMortgage.class, rid);
		ProcreditMortgage pro = mortgageService.seeMortgage(ProcreditMortgage.class, rid);
		/*if(pro!=null){
			short isPledged = pro.getIsPledged();
			if(isPledged==1){
				SlMortgageFinancing sl = slMortgageFinancingService.getMortgageByMortId(rid);
				if(sl!=null){
					mfinancingId = sl.getMfinancingId().toString();
				}
			}
		}*/
		if("SmallLoan".equals(businessType)){
			vProcreditDictionary=mortgageService.seeMortgage(rid);
			List<FileForm> list1 = fileFormService.getFileList("cs_procredit_mortgage."+vProcreditDictionary.getId(),null,null,null);//获取办理文件
			List<FileForm> list2 = fileFormService.getFileList("cs_procredit_mortgage_jc."+vProcreditDictionary.getId(),null,null,null);//获取 解除文件
			vProcreditDictionary.setHavingTransactFile(null!=list1&&list1.size()>0);
			vProcreditDictionary.setHavingUnchainFile(null!=list2&&list2.size()>0);
		}else if("Guarantee".equals(businessType)){
			vpg = mortgageService.seeMortgageGuarantee(rid);
			List<FileForm> list1 = fileFormService.getFileList("cs_procredit_mortgage."+vpg.getId(),null,null,null);//获取办理文件
			List<FileForm> list2 = fileFormService.getFileList("cs_procredit_mortgage_jc."+vpg.getId(),null,null,null);//获取 解除文件
			vpg.setHavingTransactFile(null!=list1&&list1.size()>0);
			vpg.setHavingUnchainFile(null!=list2&&list2.size()>0);
		}else if("Financing".equals(businessType)){
			/*if(mfinancingId!=null&&!"".equals(mfinancingId)&&!"null".equals(mfinancingId)){
				vmf = mortgageService.getFinance(Integer.parseInt(mfinancingId));
				List<FileForm> list1 = fileFormService.getFileList("cs_procredit_mortgage."+vmf.getId(),null,null,null);//获取办理文件
				List<FileForm> list2 = fileFormService.getFileList("cs_procredit_mortgage_jc."+vmf.getId(),null,null,null);//获取 解除文件
				vmf.setHavingTransactFile(null!=list1&&list1.size()>0);
				vmf.setHavingUnchainFile(null!=list2&&list2.size()>0);
			}else{*/
				vpf = mortgageService.seeMortgageFinance(rid);
				List<FileForm> list1 = fileFormService.getFileList("cs_procredit_mortgage."+vpf.getId(),null,null,null);//获取办理文件
				List<FileForm> list2 = fileFormService.getFileList("cs_procredit_mortgage_jc."+vpf.getId(),null,null,null);//获取 解除文件
				vpf.setHavingTransactFile(null!=list1&&list1.size()>0);
				vpf.setHavingUnchainFile(null!=list2&&list2.size()>0);
			//}
		}
		
		List list=businessServMort.seeBusiness(rid);
		if(null!=list && list.size()!=0){
			vProjMortBusiness=(VProjMortBusiness)list.get(0);
			
			if("SmallLoan".equals(businessType)){
				mapObject.put("vProcreditDictionary", vProcreditDictionary);
			}else if("Guarantee".equals(businessType)){
				mapObject.put("vProcreditDictionary", vpg);
			}else if("Financing".equals(businessType)){
				/*if(mfinancingId!=null&&!"".equals(mfinancingId)&&!"null".equals(mfinancingId)){
					mapObject.put("vProcreditDictionary", vmf);
				}else{*/
					mapObject.put("vProcreditDictionary", vpf);
				//}
			}
			mapObject.put("vProjMortBusiness", vProjMortBusiness);
			JsonUtil.jsonFromObject(mapObject, true);
		}
	}
	
	/**
	 * 
	 * 更新记录
	 */
	public void updateBusiness(){
		if(null !=customerEnterpriseName){
			procreditMortgage.setAssureofname(customerEnterpriseName);
		}else{
			procreditMortgage.setAssureofname(customerPersonName);
		}
		try {
			businessServMort.updateBusiness(mortgageid,procreditMortgageBusiness,procreditMortgage);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public BusinessServMort getBusinessServMort() {
		return businessServMort;
	}

	public void setBusinessServMort(BusinessServMort businessServMort) {
		this.businessServMort = businessServMort;
	}

	public ProcreditMortgage getProcreditMortgage() {
		return procreditMortgage;
	}

	public void setProcreditMortgage(ProcreditMortgage procreditMortgage) {
		this.procreditMortgage = procreditMortgage;
	}

	public ProcreditMortgageBusiness getProcreditMortgageBusiness() {
		return procreditMortgageBusiness;
	}

	public void setProcreditMortgageBusiness(
			ProcreditMortgageBusiness procreditMortgageBusiness) {
		this.procreditMortgageBusiness = procreditMortgageBusiness;
	}



	public VProcreditDictionary getvProcreditDictionary() {
		return vProcreditDictionary;
	}

	public void setvProcreditDictionary(VProcreditDictionary vProcreditDictionary) {
		this.vProcreditDictionary = vProcreditDictionary;
	}

	public MortgageService getMortgageService() {
		return mortgageService;
	}

	public void setMortgageService(MortgageService mortgageService) {
		this.mortgageService = mortgageService;
	}
	
	/**
	 * ---------------方法-----------------
	 */

	public VProjMortBusiness getvProjMortBusiness() {
		return vProjMortBusiness;
	}

	public void setvProjMortBusiness(VProjMortBusiness vProjMortBusiness) {
		this.vProjMortBusiness = vProjMortBusiness;
	}


	public Long getProjectId() {
		return projectId;
	}

	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

	public Integer getMortgageid() {
		return mortgageid;
	}

	public void setMortgageid(Integer mortgageid) {
		this.mortgageid = mortgageid;
	}


	public Integer getCustomerEnterpriseName() {
		return customerEnterpriseName;
	}

	public void setCustomerEnterpriseName(Integer customerEnterpriseName) {
		this.customerEnterpriseName = customerEnterpriseName;
	}

	public Integer getCustomerPersonName() {
		return customerPersonName;
	}

	public void setCustomerPersonName(Integer customerPersonName) {
		this.customerPersonName = customerPersonName;
	}

	public String getBusinessType() {
		return businessType;
	}

	public void setBusinessType(String businessType) {
		this.businessType = businessType;
	}

	public String getMfinancingId() {
		return mfinancingId;
	}

	public void setMfinancingId(String mfinancingId) {
		this.mfinancingId = mfinancingId;
	}
	
}
