package com.zhiwei.credit.dao.creditFlow.guarantee.guaranteefinance;
/*
 *  北京互融时代软件有限公司   -- http://www.hurongtime.com
 *	Copyright @ 2004 - 2010 Yuseen.com all rights reserved.京ICP备 05007290 号
*/
import java.util.List;

import com.zhiwei.core.dao.BaseDao;
import com.zhiwei.credit.model.creditFlow.guarantee.guaranteefinance.GlAccountBankCautionmoney;

/**
 * 
 * @author 
 *
 */
public interface GlAccountBankCautionmoneyDao extends BaseDao<GlAccountBankCautionmoney>{
	public List<GlAccountBankCautionmoney> getallbybankId(Long glAccountBankId);
	public List<GlAccountBankCautionmoney> getalllist();
}