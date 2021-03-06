package com.zhiwei.credit.dao.p2p;
/*
 *  北京互融时代软件有限公司   -- http://www.zhiweitime.com
 *	Copyright @ 2004 - 2010 Yuseen.com all rights reserved.京ICP备 05007290 号
*/
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.zhiwei.core.dao.BaseDao;
import com.zhiwei.credit.model.creditFlow.customer.person.Person;
import com.zhiwei.credit.model.p2p.BpFinanceApplyUser;

/**
 * 
 * @author 
 *
 */
public interface BpFinanceApplyUserDao extends BaseDao<BpFinanceApplyUser>{
	public List<BpFinanceApplyUser> personList(Integer start, Integer limit,Integer state, HttpServletRequest request);
	public BpFinanceApplyUser getDetailed(String loanId);
}