<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'testupload.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript" src="<%=basePath%>/js/dynamic.jsp"></script>
	
  </head>
  
  <body>
  <div style="color:red">上传失败</div><% String a=(String)request.getAttribute("jsonString");%></br>
  <div style="color:red;float:left;">错误提示：</div><div style="float:left;"><%= a %></div></br></br></br>
  <a href="testupload.jsp" ><input  type="button" name="" value="重新上传" ></a>
  
 
 
  </body>
</html>
