package com.zhiwei.credit.service.creditFlow.guarantee.EnterpriseBusiness;
/*
 *  北京互融时代软件有限公司   -- http://www.hurongtime.com
 *	Copyright @ 2004 - 2010 Yuseen.com all rights reserved.京ICP备 05007290 号
*/
import java.util.List;

import com.zhiwei.core.service.BaseService;
import com.zhiwei.credit.model.creditFlow.guarantee.EnterpriseBusiness.GLSuperviseRecord;

/**
 * 
 * @author 
 *
 */
public interface GlSuperviseRecordService extends BaseService<GLSuperviseRecord>{
	
	    public List<GLSuperviseRecord> getListByProjectId(Long projectId);
	
}


