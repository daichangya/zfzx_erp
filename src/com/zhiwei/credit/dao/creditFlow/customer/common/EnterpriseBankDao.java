package com.zhiwei.credit.dao.creditFlow.customer.common;


import java.util.List;

import com.zhiwei.core.dao.BaseDao;
import com.zhiwei.core.web.paging.PageBean;
import com.zhiwei.credit.model.creditFlow.customer.common.EnterpriseBank;

public interface EnterpriseBankDao extends BaseDao<EnterpriseBank> {
	public List<EnterpriseBank> getBankList(Integer customerId,Short isEnterprise,Short iscredit,Short isInvest);
	public EnterpriseBank getById(Integer id);
	public List<EnterpriseBank> getList(Integer customerId, Short isEnterprise,Short isInvest, Integer start, Integer limit);
	public EnterpriseBank queryIscredit(Integer customerId, Short isEnterprise,Short isInvest);
	public List<EnterpriseBank> queryAlreadyAccount(Integer id,String accountnum);
	public void querySomeList(PageBean<EnterpriseBank> pageBean);
}
