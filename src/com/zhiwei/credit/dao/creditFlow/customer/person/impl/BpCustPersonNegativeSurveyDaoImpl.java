package com.zhiwei.credit.dao.creditFlow.customer.person.impl;
/*
 *  北京互融时代软件有限公司   -- http://www.hurongtime.com
 *	Copyright @ 2004 - 2010 Yuseen.com all rights reserved.京ICP备 05007290 号
*/
import java.util.List;

import com.zhiwei.core.dao.impl.BaseDaoImpl;
import com.zhiwei.credit.dao.creditFlow.customer.person.BpCustPersonNegativeSurveyDao;
import com.zhiwei.credit.model.creditFlow.customer.person.BpCustPersonNegativeSurvey;

/**
 * 
 * @author 
 *
 */
@SuppressWarnings("unchecked")
public class BpCustPersonNegativeSurveyDaoImpl extends BaseDaoImpl<BpCustPersonNegativeSurvey> implements BpCustPersonNegativeSurveyDao{

	public BpCustPersonNegativeSurveyDaoImpl() {
		super(BpCustPersonNegativeSurvey.class);
	}
	public List<BpCustPersonNegativeSurvey> getNegativeInfoByPid(int personId){
		StringBuffer hql=new StringBuffer("from BpCustPersonNegativeSurvey as negative where negative.personId=?");
		return (List<BpCustPersonNegativeSurvey>)getSession().createQuery(hql.toString()).setParameter(0, personId).list();
	}

}