var OxO72e0=["inp_title","inp_doctype","inp_description","inp_keywords","PageLanguage","HTMLEncoding","bgcolor","bgcolor_Preview","fontcolor","fontcolor_Preview","Backgroundimage","btnbrowse","TopMargin","BottomMargin","LeftMargin","RightMargin","MarginWidth","MarginHeight","btnok","btncc","editor","window","document","body","head","title","value","innerHTML","DOCTYPE","meta","length","name","keywords","content","description","httpEquiv","content-type","content-language","background","color","style","backgroundColor","bgColor","topMargin","bottomMargin","leftMargin","rightMargin","marginWidth","marginHeight","","[[ValidNumber]]","Please enter a valid color number.","text","childNodes","parentNode","http-equiv","Content-Type","Content-Language","META","onclick"];var inp_title=Window_GetElement(window,OxO72e0[0],true);var inp_doctype=Window_GetElement(window,OxO72e0[1],true);var inp_description=Window_GetElement(window,OxO72e0[2],true);var inp_keywords=Window_GetElement(window,OxO72e0[3],true);var PageLanguage=Window_GetElement(window,OxO72e0[4],true);var HTMLEncoding=Window_GetElement(window,OxO72e0[5],true);var bgcolor=Window_GetElement(window,OxO72e0[6],true);var bgcolor_Preview=Window_GetElement(window,OxO72e0[7],true);var fontcolor=Window_GetElement(window,OxO72e0[8],true);var fontcolor_Preview=Window_GetElement(window,OxO72e0[9],true);var Backgroundimage=Window_GetElement(window,OxO72e0[10],true);var btnbrowse=Window_GetElement(window,OxO72e0[11],true);var TopMargin=Window_GetElement(window,OxO72e0[12],true);var BottomMargin=Window_GetElement(window,OxO72e0[13],true);var LeftMargin=Window_GetElement(window,OxO72e0[14],true);var RightMargin=Window_GetElement(window,OxO72e0[15],true);var MarginWidth=Window_GetElement(window,OxO72e0[16],true);var MarginHeight=Window_GetElement(window,OxO72e0[17],true);var btnok=Window_GetElement(window,OxO72e0[18],true);var btncc=Window_GetElement(window,OxO72e0[19],true);var obj=Window_GetDialogArguments(window);var editor=obj[OxO72e0[20]];var editwin=obj[OxO72e0[21]];var editdoc=obj[OxO72e0[22]];var body=editdoc[OxO72e0[23]];var head=obj[OxO72e0[24]];var title=head.getElementsByTagName(OxO72e0[25])[0];if(title){inp_title[OxO72e0[26]]=title[OxO72e0[27]];} ;inp_doctype[OxO72e0[26]]=obj[OxO72e0[28]];var metas=head.getElementsByTagName(OxO72e0[29]);for(var m=0;m<metas[OxO72e0[30]];m++){if(metas[m][OxO72e0[31]].toLowerCase()==OxO72e0[32]){inp_keywords[OxO72e0[26]]=metas[m][OxO72e0[33]];} ;if(metas[m][OxO72e0[31]].toLowerCase()==OxO72e0[34]){inp_description[OxO72e0[26]]=metas[m][OxO72e0[33]];} ;if(metas[m][OxO72e0[35]].toLowerCase()==OxO72e0[36]){HTMLEncoding[OxO72e0[26]]=metas[m][OxO72e0[33]];} ;if(metas[m][OxO72e0[35]].toLowerCase()==OxO72e0[37]){PageLanguage[OxO72e0[26]]=metas[m][OxO72e0[33]];} ;} ;if(editdoc[OxO72e0[23]][OxO72e0[38]]){Backgroundimage[OxO72e0[26]]=editdoc[OxO72e0[23]][OxO72e0[38]];} ;if(editdoc[OxO72e0[23]][OxO72e0[40]][OxO72e0[39]]){fontcolor[OxO72e0[26]]=editdoc[OxO72e0[23]][OxO72e0[40]][OxO72e0[39]];fontcolor[OxO72e0[40]][OxO72e0[41]]=fontcolor[OxO72e0[26]];fontcolor_Preview[OxO72e0[40]][OxO72e0[41]]=fontcolor[OxO72e0[26]];} ;var body_bgcolor=editdoc[OxO72e0[23]][OxO72e0[40]][OxO72e0[41]]||editdoc[OxO72e0[23]][OxO72e0[42]];if(body_bgcolor){bgcolor[OxO72e0[26]]=body_bgcolor;bgcolor[OxO72e0[40]][OxO72e0[41]]=body_bgcolor;bgcolor_Preview[OxO72e0[40]][OxO72e0[41]]=body_bgcolor;} ;if(Browser_IsWinIE()){if(body[OxO72e0[43]]){TopMargin[OxO72e0[26]]=body[OxO72e0[43]];} ;if(body[OxO72e0[44]]){BottomMargin[OxO72e0[26]]=body[OxO72e0[44]];} ;if(body[OxO72e0[45]]){LeftMargin[OxO72e0[26]]=body[OxO72e0[45]];} ;if(body[OxO72e0[46]]){RightMargin[OxO72e0[26]]=body[OxO72e0[46]];} ;if(body[OxO72e0[47]]){MarginWidth[OxO72e0[26]]=body[OxO72e0[47]];} ;if(body[OxO72e0[48]]){MarginHeight[OxO72e0[26]]=body[OxO72e0[48]];} ;} else {if(body.getAttribute(OxO72e0[43])){TopMargin[OxO72e0[26]]=body.getAttribute(OxO72e0[43]);} ;if(body.getAttribute(OxO72e0[44])){BottomMargin[OxO72e0[26]]=body.getAttribute(OxO72e0[44]);} ;if(body.getAttribute(OxO72e0[45])){LeftMargin[OxO72e0[26]]=body.getAttribute(OxO72e0[45]);} ;if(body.getAttribute(OxO72e0[46])){RightMargin[OxO72e0[26]]=body.getAttribute(OxO72e0[46]);} ;if(body.getAttribute(OxO72e0[16])){MarginWidth[OxO72e0[26]]=body.getAttribute(OxO72e0[47]);} ;if(body.getAttribute(OxO72e0[48])){MarginHeight[OxO72e0[26]]=body.getAttribute(OxO72e0[48]);} ;} ;function do_insert(){try{if(Browser_IsWinIE()){body[OxO72e0[43]]=TopMargin[OxO72e0[26]];body[OxO72e0[44]]=BottomMargin[OxO72e0[26]];body[OxO72e0[45]]=LeftMargin[OxO72e0[26]];body[OxO72e0[46]]=RightMargin[OxO72e0[26]];if(MarginWidth[OxO72e0[26]]){body[OxO72e0[47]]=MarginWidth[OxO72e0[26]];} ;if(MarginHeight[OxO72e0[26]]){body[OxO72e0[48]]=MarginHeight[OxO72e0[26]];} ;} else {body.setAttribute(OxO72e0[43],TopMargin.value);body.setAttribute(OxO72e0[44],BottomMargin.value);body.setAttribute(OxO72e0[45],LeftMargin.value);body.setAttribute(OxO72e0[46],RightMargin.value);body.setAttribute(OxO72e0[47],MarginWidth.value);body.setAttribute(OxO72e0[48],MarginHeight.value);if(body.getAttribute(OxO72e0[43])==OxO72e0[49]){body.removeAttribute(OxO72e0[43]);} ;if(body.getAttribute(OxO72e0[44])==OxO72e0[49]){body.removeAttribute(OxO72e0[44]);} ;if(body.getAttribute(OxO72e0[45])==OxO72e0[49]){body.removeAttribute(OxO72e0[45]);} ;if(body.getAttribute(OxO72e0[46])==OxO72e0[49]){body.removeAttribute(OxO72e0[46]);} ;if(body.getAttribute(OxO72e0[47])==OxO72e0[49]){body.removeAttribute(OxO72e0[47]);} ;if(body.getAttribute(OxO72e0[48])==OxO72e0[49]){body.removeAttribute(OxO72e0[48]);} ;} ;} catch(er){alert(OxO72e0[50]);return ;} ;try{editdoc[OxO72e0[23]][OxO72e0[40]][OxO72e0[41]]=bgcolor[OxO72e0[26]];editdoc[OxO72e0[23]][OxO72e0[40]][OxO72e0[39]]=fontcolor[OxO72e0[26]];if(Backgroundimage[OxO72e0[26]]){editdoc[OxO72e0[23]][OxO72e0[38]]=Backgroundimage[OxO72e0[26]];} else {body.removeAttribute(OxO72e0[38]);} ;} catch(er){alert(OxO72e0[51]);return ;} ;if(!title){title=document.createElement(OxO72e0[25]);head.appendChild(title);} ;if(Browser_IsWinIE()){title[OxO72e0[52]]=inp_title[OxO72e0[26]];} else {var Ox462=document.createTextNode(inp_title.value);try{title.removeChild(title[OxO72e0[53]].item(0));} catch(x){} ;title.appendChild(Ox462);} ;for(var m=0;m<metas[OxO72e0[30]];m++){var Oxb7=metas[m];if(Oxb7){if(Oxb7[OxO72e0[31]].toLowerCase()==OxO72e0[32]||Oxb7[OxO72e0[31]].toLowerCase()==OxO72e0[34]||Oxb7[OxO72e0[31]].toLowerCase()==OxO72e0[36]||Oxb7[OxO72e0[31]].toLowerCase()==OxO72e0[37]){Oxb7[OxO72e0[54]].removeChild(Oxb7);Oxb7=null;} ;} ;} ;try{Ox463(OxO72e0[31],OxO72e0[32],inp_keywords.value);Ox463(OxO72e0[31],OxO72e0[34],inp_description.value);Ox463(OxO72e0[55],OxO72e0[56],HTMLEncoding.value);Ox463(OxO72e0[55],OxO72e0[57],PageLanguage.value);} catch(x){} ;function Ox463(Ox464,name,Oxce){var metas=head.getElementsByTagName(OxO72e0[29]);for(var m=0;m<metas[OxO72e0[30]];m++){if(metas[m][OxO72e0[31]].toLowerCase()==name.toLowerCase()){metas[m][OxO72e0[54]].removeChild(metas[m]);} ;} ;if(Oxce!=OxO72e0[49]&&Oxce!=null){var Ox465=editdoc.createElement(OxO72e0[58]);Ox465.setAttribute(Ox464,name);Ox465.setAttribute(OxO72e0[33],Oxce);head.appendChild(Ox465);} ;} ;Window_SetDialogReturnValue(window,inp_doctype[OxO72e0[26]]+OxO72e0[49]);Window_CloseDialog(window);} ;btnbrowse[OxO72e0[59]]=function btnbrowse_onclick(){function Ox35d(Ox13e){if(Ox13e){Backgroundimage[OxO72e0[26]]=Ox13e;FireUIChanged();} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox35d,Backgroundimage.value,Backgroundimage);} else {editor.ShowSelectImageDialog(Ox35d,Backgroundimage.value);} ;} ;function do_Close(){Window_CloseDialog(window);} ;fontcolor[OxO72e0[59]]=fontcolor_Preview[OxO72e0[59]]=function fontcolor_onclick(){SelectColor(fontcolor,fontcolor_Preview);} ;bgcolor[OxO72e0[59]]=bgcolor_Preview[OxO72e0[59]]=function bgcolor_onclick(){SelectColor(bgcolor,bgcolor_Preview);} ;