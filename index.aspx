<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="CuteEditor6x.index" %>
<%@ Register TagPrefix="CE" Namespace="CuteEditor" Assembly="CuteEditor" %> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>WordPaster for CuteEditor6.7</title>
    <link type="text/css" rel="Stylesheet" href="WordPaster/css/WordPaster.css"/>
	<link type="text/css" rel="Stylesheet" href="WordPaster/js/skygqbox.css"/>
    <script type="text/javascript" src="WordPaster/js/json2.min.js" charset="utf-8"></script>
    <script type="text/javascript" src="WordPaster/js/jquery-1.4.min.js" charset="utf-8"></script>
    <script type="text/javascript" src="WordPaster/js/WordPaster.js" charset="utf-8"></script>
	<script type="text/javascript" src="WordPaster/js/skygqbox.js" charset="utf-8"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <CE:Editor id="Editor1" runat="server" /> 
    <script type="text/javascript">
        var pasterMgr = new WordPasterManager();
        //pasterMgr.Config["PostUrl"] = "http://www.ncmem.com/products/upload_ori.aspx"
        pasterMgr.Config["PostUrl"] = "http://localhost:58253/upload.aspx"
        pasterMgr.Config["Cookie"] = 'ASP.NET_SessionId=<%=Session.SessionID%>';
    	pasterMgr.Load(); //加载控件
    	var edt = document.getElementById('<%= Editor1.ClientID%>');

    	$(document).ready(function()
    	{
    	    pasterMgr.SetEditor(edt);
    	});
	</script>
    </div>
    </form>
</body>
</html>
