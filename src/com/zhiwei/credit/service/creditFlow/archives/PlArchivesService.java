package com.zhiwei.credit.service.creditFlow.archives;
/*
 *  北京互融时代软件有限公司   -- http://www.hurongtime.com
 *	Copyright @ 2004 - 2010 Yuseen.com all rights reserved.京ICP备 05007290 号
*/
import java.util.List;

import com.zhiwei.core.service.BaseService;
import com.zhiwei.credit.model.creditFlow.archives.PlArchives;

/**
 * 
 * @author 
 *
 */
public interface PlArchivesService extends BaseService<PlArchives>{
	public List<PlArchives> getallcabinet(int start,int limit);
	public List<PlArchives> getallchecker(int start,int limit);
	public int getallcabinetsize();
	public int getallcheckersize();
	public List<PlArchives> getcheckerbyparentid(Long parentId,int start,int limit);
	public int getcheckerbyparentidsize(Long parentId);
	public List<PlArchives> searchcabinet(String name,String companyId,int start,int limit);
	public int searchcabinetsize(String name,String companyId);
	public String getCheckerTree(String node,String companyId);
}


