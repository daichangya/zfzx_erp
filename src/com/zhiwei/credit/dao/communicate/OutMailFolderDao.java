package com.zhiwei.credit.dao.communicate;
/*
 *  北京互融时代软件有限公司    -- http://www.hurongtime.com
 *  Copyright (C) 2008-2011 JinZhi WanWei Software Limited company.
*/
import java.util.List;

import com.zhiwei.core.dao.BaseDao;
import com.zhiwei.credit.model.communicate.MailFolder;
import com.zhiwei.credit.model.communicate.OutMailFolder;

/**
 * 
 * @author 
 *
 */
public interface OutMailFolderDao extends BaseDao<OutMailFolder>{
	public List<OutMailFolder> getAllUserFolderByParentId(Long userId,Long parentId);
	public List<OutMailFolder> getUserFolderByParentId(Long userId,Long parentId);
	public List<OutMailFolder> getFolderLikePath(String path);
	
	
	
}