package com.zhiwei.credit.dao.creditFlow.finance;
/*
 *  北京互融时代软件有限公司   -- http://www.hurongtime.com
 *	Copyright @ 2004 - 2010 Yuseen.com all rights reserved.京ICP备 05007290 号
*/
import java.util.List;

import com.zhiwei.core.dao.BaseDao;
import com.zhiwei.credit.model.creditFlow.finance.SlFundIntent;
import com.zhiwei.credit.model.creditFlow.finance.SlPunishInterest;

/**
 * 
 * @author 
 *
 */
public interface SlPunishInterestDao extends BaseDao<SlPunishInterest>{
	public List<SlPunishInterest> listbyisInitialorId( Long fundIntentId);
}