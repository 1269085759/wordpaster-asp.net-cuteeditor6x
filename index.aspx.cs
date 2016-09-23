using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CuteEditor6x
{
	public partial class index : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			if (!this.IsPostBack)
			{
				//在工具栏上插入按钮
				CuteEditor.ToolControl tc = Editor1.ToolControls["insertcustombutonhere"];
				if (tc != null)
				{
					System.Web.UI.WebControls.Image Image1 = new System.Web.UI.WebControls.Image();
					Image1.ToolTip = "粘贴来自文件,剪帖板,Word中的图片";
					Image1.ImageUrl = "/WordPaster/css/paster.png";
					Image1.CssClass = "CuteEditorButton";
					//SetMouseEvents(Image1);
					Image1.Attributes["onclick"] = "pasterMgr.Paste()";
					tc.Control.Controls.Add(Image1);

					//netpaster
					System.Web.UI.WebControls.Image imgNet = new System.Web.UI.WebControls.Image();
					imgNet.ToolTip = "自动上传远程服务器图片";
					imgNet.ImageUrl = "/WordPaster/css/ico.png";
					imgNet.CssClass = "CuteEditorButton";
					//SetMouseEvents(Image1);
					imgNet.Attributes["onclick"] = "pasterMgr.UploadNetImg()";
					tc.Control.Controls.Add(imgNet);
				}
			}
		}
	}
}
