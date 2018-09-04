package com.zhiwei.credit.service.creditFlow.smallLoan.finance;
/*
 *  北京互融时代软件有限公司   -- http://www.hurongtime.com
 *	Copyright @ 2004 - 2010 Yuseen.com all rights reserved.京ICP备 05007290 号
*/
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.zhiwei.core.service.BaseService;
import com.zhiwei.credit.action.flow.FlowRunInfo;
import com.zhiwei.credit.model.creditFlow.smallLoan.finance.SlEarlyRepaymentRecord;

/**
 * 
 * @author 
 *
 */
public interface SlEarlyRepaymentRecordService extends BaseService<SlEarlyRepaymentRecord>{
	
	public List<SlEarlyRepaymentRecord> getByProjectId(Long projectId);
	public List<SlEarlyRepaymentRecord> listByProIdAndType(Long projectId,String businessType);
	/**
	 * 提前还款提交下一步
	 */
	public Integer updateEarlyProjectInfoNextStep(FlowRunInfo flowRunInfo);
	/**
	 * 提前还款列表记录
	 */
	public List allList(HttpServletRequest request,Integer start,Integer limit);
	
	public Long allListCount(HttpServletRequest request);
public String startSlEarlyRepaymentProcess(Long projectId);
	
	public Integer savePrepaymentInfoNextStep(FlowRunInfo flowRunInfo);
	public String investSettle(String id,String organId);
}


