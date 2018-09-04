package com.zhiwei.credit.service.creditFlow.finance;
/*
 *  北京互融时代软件有限公司   -- http://www.hurongtime.com
 *	Copyright @ 2004 - 2010 Yuseen.com all rights reserved.京ICP备 05007290 号
*/
import java.util.Date;
import java.util.List;

import com.zhiwei.core.service.BaseService;
import com.zhiwei.credit.model.creditFlow.finance.ProfitRateMaintenance;

/**
 * 
 * @author 
 *
 */
public interface ProfitRateMaintenanceService extends BaseService<ProfitRateMaintenance>{
	public List getList(String startDate,String endDate,String strs);
	public List<ProfitRateMaintenance> getRateList(Date adjustDate);
}


