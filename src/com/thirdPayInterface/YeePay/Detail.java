package com.thirdPayInterface.YeePay;

public class Detail {
	
	/**
	 * 转账请求转账金额
	 */
	private String amount;
	

	/**
	 * 收款人用户类型【用户类型】
	 */
	private String targetUserType;
	/**
	 * 收款人平台用户编号
	 */
	private String targetPlatformUserNo;
	
	private String BizType;
	
	public String getBizType() {
		return BizType;
	}
	public void setBizType(String bizType) {
		BizType = bizType;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getAmount() {
		return amount;
	}
	public void setTargetPlatformUserNo(String targetPlatformUserNo) {
		this.targetPlatformUserNo = targetPlatformUserNo;
	}
	public String getTargetPlatformUserNo() {
		return targetPlatformUserNo;
	}
	public void setTargetUserType(String targetUserType) {
		this.targetUserType = targetUserType;
	}
	public String getTargetUserType() {
		return targetUserType;
	}
	
	
	
}