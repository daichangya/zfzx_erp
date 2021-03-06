package com.zhiwei.credit.dao.creditFlow.common.impl;
/*
 *  北京互融时代软件有限公司   -- http://www.hurongtime.com
 *	Copyright @ 2004 - 2010 Yuseen.com all rights reserved.京ICP备 05007290 号
*/
import java.util.List;

import com.zhiwei.core.dao.impl.BaseDaoImpl;
import com.zhiwei.credit.dao.creditFlow.common.AreaManagementDao;
import com.zhiwei.credit.model.creditFlow.common.AreaManagement;

/**
 * 
 * @author 
 *
 */
@SuppressWarnings("unchecked")
public class AreaManagementDaoImpl extends BaseDaoImpl<AreaManagement> implements AreaManagementDao{

	public AreaManagementDaoImpl() {
		super(AreaManagement.class);
	}

	@Override
	public List<AreaManagement> getListByParentId(Long parentId) {
		String hql="from AreaManagement as a where a.parentId=?";
		return getSession().createQuery(hql).setParameter(0, parentId).list();
	}

}