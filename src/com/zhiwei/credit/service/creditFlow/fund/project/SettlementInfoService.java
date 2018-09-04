package com.zhiwei.credit.service.creditFlow.fund.project;
/*
 *  北京互融时代软件有限公司   -- http://www.zhiweitime.com
 *	Copyright @ 2004 - 2010 Yuseen.com all rights reserved.京ICP备 05007290 号
*/
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.zhiwei.core.service.BaseService;
import com.zhiwei.credit.model.creditFlow.fund.project.SettlementInfo;

/**
 * 
 * @author 
 *
 */
public interface SettlementInfoService extends BaseService<SettlementInfo>{

	List<SettlementInfo> listByOrgId(HttpServletRequest request);

	List<SettlementInfo> listByOrgId(String orgId, String startDate,
			String endDate);
	
}


