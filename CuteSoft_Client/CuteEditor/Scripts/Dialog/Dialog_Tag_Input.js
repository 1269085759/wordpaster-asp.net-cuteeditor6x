var OxO7e45=["inp_type","inp_name","inp_value","row_txt1","inp_Size","row_txt2","inp_MaxLength","row_img","inp_src","btnbrowse","row_img2","sel_Align","optNotSet","optLeft","optRight","optTexttop","optAbsMiddle","optBaseline","optAbsBottom","optBottom","optMiddle","optTop","inp_Border","row_img3","inp_width","inp_height","row_img4","inp_HSpace","inp_VSpace","row_img5","AlternateText","inp_id","row_txt3","inp_access","row_txt4","inp_index","row_chk","inp_checked","row_txt5","inp_Disabled","row_txt6","inp_Readonly","onclick","value","Name","name","id","src","type","checked","disabled","readOnly","tabIndex","","accessKey","size","maxLength","width","height","vspace","hspace","border","align","alt","text","display","style","none","password","hidden","radio","checkbox","submit","reset","button","image","className","class"];var inp_type=Window_GetElement(window,OxO7e45[0],true);var inp_name=Window_GetElement(window,OxO7e45[1],true);var inp_value=Window_GetElement(window,OxO7e45[2],true);var row_txt1=Window_GetElement(window,OxO7e45[3],true);var inp_Size=Window_GetElement(window,OxO7e45[4],true);var row_txt2=Window_GetElement(window,OxO7e45[5],true);var inp_MaxLength=Window_GetElement(window,OxO7e45[6],true);var row_img=Window_GetElement(window,OxO7e45[7],true);var inp_src=Window_GetElement(window,OxO7e45[8],true);var btnbrowse=Window_GetElement(window,OxO7e45[9],true);var row_img2=Window_GetElement(window,OxO7e45[10],true);var sel_Align=Window_GetElement(window,OxO7e45[11],true);var optNotSet=Window_GetElement(window,OxO7e45[12],true);var optLeft=Window_GetElement(window,OxO7e45[13],true);var optRight=Window_GetElement(window,OxO7e45[14],true);var optTexttop=Window_GetElement(window,OxO7e45[15],true);var optAbsMiddle=Window_GetElement(window,OxO7e45[16],true);var optBaseline=Window_GetElement(window,OxO7e45[17],true);var optAbsBottom=Window_GetElement(window,OxO7e45[18],true);var optBottom=Window_GetElement(window,OxO7e45[19],true);var optMiddle=Window_GetElement(window,OxO7e45[20],true);var optTop=Window_GetElement(window,OxO7e45[21],true);var inp_Border=Window_GetElement(window,OxO7e45[22],true);var row_img3=Window_GetElement(window,OxO7e45[23],true);var inp_width=Window_GetElement(window,OxO7e45[24],true);var inp_height=Window_GetElement(window,OxO7e45[25],true);var row_img4=Window_GetElement(window,OxO7e45[26],true);var inp_HSpace=Window_GetElement(window,OxO7e45[27],true);var inp_VSpace=Window_GetElement(window,OxO7e45[28],true);var row_img5=Window_GetElement(window,OxO7e45[29],true);var AlternateText=Window_GetElement(window,OxO7e45[30],true);var inp_id=Window_GetElement(window,OxO7e45[31],true);var row_txt3=Window_GetElement(window,OxO7e45[32],true);var inp_access=Window_GetElement(window,OxO7e45[33],true);var row_txt4=Window_GetElement(window,OxO7e45[34],true);var inp_index=Window_GetElement(window,OxO7e45[35],true);var row_chk=Window_GetElement(window,OxO7e45[36],true);var inp_checked=Window_GetElement(window,OxO7e45[37],true);var row_txt5=Window_GetElement(window,OxO7e45[38],true);var inp_Disabled=Window_GetElement(window,OxO7e45[39],true);var row_txt6=Window_GetElement(window,OxO7e45[40],true);var inp_Readonly=Window_GetElement(window,OxO7e45[41],true);btnbrowse[OxO7e45[42]]=function btnbrowse_onclick(){function Ox35d(Ox13e){if(Ox13e){inp_src[OxO7e45[43]]=Ox13e;FireUIChanged();SyncTo(element);} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox35d,inp_src.value,inp_src);} else {editor.ShowSelectImageDialog(Ox35d,inp_src.value);} ;} ;UpdateState=function UpdateState_Input(){} ;SyncToView=function SyncToView_Input(){if(element[OxO7e45[44]]){inp_name[OxO7e45[43]]=element[OxO7e45[44]];} ;if(element[OxO7e45[45]]){inp_name[OxO7e45[43]]=element[OxO7e45[45]];} ;inp_id[OxO7e45[43]]=element[OxO7e45[46]];inp_value[OxO7e45[43]]=(element[OxO7e45[43]]).trim();inp_src[OxO7e45[43]]=element[OxO7e45[47]];inp_type[OxO7e45[43]]=element[OxO7e45[48]];inp_checked[OxO7e45[49]]=element[OxO7e45[49]];inp_Disabled[OxO7e45[49]]=element[OxO7e45[50]];inp_Readonly[OxO7e45[49]]=element[OxO7e45[51]];if(element[OxO7e45[52]]==0){inp_index[OxO7e45[43]]=OxO7e45[53];} else {inp_index[OxO7e45[43]]=element[OxO7e45[52]];} ;if(element[OxO7e45[54]]){inp_access[OxO7e45[43]]=element[OxO7e45[54]];} ;if(element[OxO7e45[55]]){if(element[OxO7e45[55]]==20){inp_Size[OxO7e45[43]]=OxO7e45[53];} else {inp_Size[OxO7e45[43]]=element[OxO7e45[55]];} ;} ;if(element[OxO7e45[56]]){if(element[OxO7e45[56]]==2147483647||element[OxO7e45[56]]<=0){inp_MaxLength[OxO7e45[43]]=OxO7e45[53];} else {inp_MaxLength[OxO7e45[43]]=element[OxO7e45[56]];} ;} ;if(element[OxO7e45[57]]){inp_width[OxO7e45[43]]=element[OxO7e45[57]];} ;if(element[OxO7e45[58]]){inp_height[OxO7e45[43]]=element[OxO7e45[58]];} ;if(element[OxO7e45[59]]){inp_HSpace[OxO7e45[43]]=element[OxO7e45[59]];} ;if(element[OxO7e45[60]]){inp_VSpace[OxO7e45[43]]=element[OxO7e45[60]];} ;if(element[OxO7e45[61]]){inp_Border[OxO7e45[43]]=element[OxO7e45[61]];} ;if(element[OxO7e45[62]]){sel_Align[OxO7e45[43]]=element[OxO7e45[62]];} ;if(element[OxO7e45[63]]){alt[OxO7e45[43]]=element[OxO7e45[63]];} ;switch((element[OxO7e45[48]]).toLowerCase()){case OxO7e45[64]:;case OxO7e45[68]:row_img[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img2[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img3[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img4[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img5[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_chk[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];break ;;case OxO7e45[69]:row_img[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img2[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img3[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img4[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img5[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_chk[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt1[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt2[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt3[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt4[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt5[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt6[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];break ;;case OxO7e45[70]:;case OxO7e45[71]:row_img[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img2[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img3[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img4[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img5[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt1[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt2[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt6[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];break ;;case OxO7e45[72]:;case OxO7e45[73]:;case OxO7e45[74]:row_chk[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img2[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img3[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img4[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_img5[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt1[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt2[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt6[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];break ;;case OxO7e45[75]:row_chk[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt1[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt2[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];row_txt6[OxO7e45[66]][OxO7e45[65]]=OxO7e45[67];break ;;} ;} ;SyncTo=function SyncTo_Input(element){element[OxO7e45[45]]=inp_name[OxO7e45[43]];if(element[OxO7e45[44]]){element[OxO7e45[44]]=inp_name[OxO7e45[43]];} else {if(element[OxO7e45[45]]){element.removeAttribute(OxO7e45[45],0);element[OxO7e45[44]]=inp_name[OxO7e45[43]];} else {element[OxO7e45[44]]=inp_name[OxO7e45[43]];} ;} ;element[OxO7e45[46]]=inp_id[OxO7e45[43]];if(inp_src[OxO7e45[43]]){element[OxO7e45[47]]=inp_src[OxO7e45[43]];} ;element[OxO7e45[49]]=inp_checked[OxO7e45[49]];element[OxO7e45[43]]=inp_value[OxO7e45[43]];element.setAttribute(OxO7e45[43],inp_value.value);element[OxO7e45[50]]=inp_Disabled[OxO7e45[49]];element[OxO7e45[51]]=inp_Readonly[OxO7e45[49]];element[OxO7e45[54]]=inp_access[OxO7e45[43]];element[OxO7e45[52]]=inp_index[OxO7e45[43]];element[OxO7e45[56]]=inp_MaxLength[OxO7e45[43]];element[OxO7e45[57]]=inp_width[OxO7e45[43]];element[OxO7e45[58]]=inp_height[OxO7e45[43]];element[OxO7e45[59]]=inp_HSpace[OxO7e45[43]];element[OxO7e45[60]]=inp_VSpace[OxO7e45[43]];element[OxO7e45[61]]=inp_Border[OxO7e45[43]];element[OxO7e45[62]]=sel_Align[OxO7e45[43]];element[OxO7e45[63]]=AlternateText[OxO7e45[43]];try{element[OxO7e45[55]]=inp_Size[OxO7e45[43]];} catch(e){element[OxO7e45[55]]=20;} ;if(element[OxO7e45[52]]==OxO7e45[53]){element.removeAttribute(OxO7e45[52]);} ;if(element[OxO7e45[54]]==OxO7e45[53]){element.removeAttribute(OxO7e45[54]);} ;if(element[OxO7e45[56]]==OxO7e45[53]){element.removeAttribute(OxO7e45[56]);} ;if(element[OxO7e45[55]]==0){element.removeAttribute(OxO7e45[55]);} ;if(element[OxO7e45[57]]==0){element.removeAttribute(OxO7e45[57]);} ;if(element[OxO7e45[58]]==0){element.removeAttribute(OxO7e45[58]);} ;if(element[OxO7e45[60]]==OxO7e45[53]){element.removeAttribute(OxO7e45[60]);} ;if(element[OxO7e45[59]]==OxO7e45[53]){element.removeAttribute(OxO7e45[59]);} ;if(element[OxO7e45[46]]==OxO7e45[53]){element.removeAttribute(OxO7e45[46]);} ;if(element[OxO7e45[44]]==OxO7e45[53]){element.removeAttribute(OxO7e45[44]);} ;if(element[OxO7e45[63]]==OxO7e45[53]){element.removeAttribute(OxO7e45[63]);} ;if(element[OxO7e45[62]]==OxO7e45[53]){element.removeAttribute(OxO7e45[62]);} ;if(element[OxO7e45[76]]==OxO7e45[53]){element.removeAttribute(OxO7e45[77]);} ;if(element[OxO7e45[76]]==OxO7e45[53]){element.removeAttribute(OxO7e45[76]);} ;switch((element[OxO7e45[48]]).toLowerCase()){case OxO7e45[64]:;case OxO7e45[68]:;case OxO7e45[69]:;case OxO7e45[70]:;case OxO7e45[71]:;case OxO7e45[72]:;case OxO7e45[73]:;case OxO7e45[74]:element.removeAttribute(OxO7e45[58]);element.removeAttribute(OxO7e45[61]);element.removeAttribute(OxO7e45[47]);break ;;case OxO7e45[75]:break ;;} ;} ;