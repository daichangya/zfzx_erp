package com.zhiwei.credit.dao.arch.impl;
/*
 *  北京互融时代软件有限公司    -- http://www.hurongtime.com
 *  Copyright (C) 2008-2011 JinZhi WanWei Software Limited company.
*/
import com.zhiwei.core.dao.impl.BaseDaoImpl;
import com.zhiwei.credit.dao.arch.RollFileDao;
import com.zhiwei.credit.model.arch.RollFile;

public class RollFileDaoImpl extends BaseDaoImpl<RollFile> implements RollFileDao{

	public RollFileDaoImpl() {
		super(RollFile.class);
	}

}