package com.zhiwei.credit.dao.creditFlow.archives;
/*
 *  北京互融时代软件有限公司   -- http://www.hurongtime.com
 *	Copyright @ 2004 - 2010 Yuseen.com all rights reserved.京ICP备 05007290 号
*/
import java.util.List;
import java.util.Map;

import com.zhiwei.core.dao.BaseDao;
import com.zhiwei.credit.model.creditFlow.archives.VProjectArchives;

/**
 * 
 * @author 
 *
 */
public interface VProjectArchivesDao extends BaseDao<VProjectArchives>{
	public int searchprojectsize(Map<String,String> map,String businessType);
	public List<VProjectArchives> searchproject(Map<String,String> map,String businessType);
	public List<VProjectArchives> getbyproject(Long projectId,String businessType);
}