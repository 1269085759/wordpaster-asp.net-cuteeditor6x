var OxOc14a=["inp_src","box1","box2","box3","box4","box5","box6","box7","box8","box9","inp_start","CustomBullet","nodeName","LI","parentNode","none","decimal","upper-roman","upper-alpha","lower-alpha","lower-roman","disc","circle","square","listStyleType","style","border","solid 2px #708090","listStyleImage","","value","visibility","hidden","length","start","url(\x27","\x27)","visible","UL","OL","document","firstChild","element","solid 2px #ffffff","solid 2px #ECECF6","onclick"];var inp_src=Window_GetElement(window,OxOc14a[0],true);var box1=Window_GetElement(window,OxOc14a[1],true);var box2=Window_GetElement(window,OxOc14a[2],true);var box3=Window_GetElement(window,OxOc14a[3],true);var box4=Window_GetElement(window,OxOc14a[4],true);var box5=Window_GetElement(window,OxOc14a[5],true);var box6=Window_GetElement(window,OxOc14a[6],true);var box7=Window_GetElement(window,OxOc14a[7],true);var box8=Window_GetElement(window,OxOc14a[8],true);var box9=Window_GetElement(window,OxOc14a[9],true);var inp_start=Window_GetElement(window,OxOc14a[10],true);var CustomBullet=Window_GetElement(window,OxOc14a[11],true);OriginalnodeName=element[OxOc14a[12]];if(element[OxOc14a[12]]&&element[OxOc14a[12]]==OxOc14a[13]){OriginalnodeName=(element[OxOc14a[14]])[OxOc14a[12]];} ;var OriginalnodeName,CurrentnodeName,selectedObject;SyncToView=function SyncToView_LI(){if(element[OxOc14a[12]]==OxOc14a[13]){element=element[OxOc14a[14]];} ;switch((element[OxOc14a[25]][OxOc14a[24]]).toLowerCase()){case OxOc14a[15]:selectedObject=box1;break ;;case OxOc14a[16]:selectedObject=box2;break ;;case OxOc14a[17]:selectedObject=box3;break ;;case OxOc14a[18]:selectedObject=box4;break ;;case OxOc14a[19]:selectedObject=box5;break ;;case OxOc14a[20]:selectedObject=box6;break ;;case OxOc14a[21]:selectedObject=box7;break ;;case OxOc14a[22]:selectedObject=box8;break ;;case OxOc14a[23]:selectedObject=box9;break ;;default:selectedObject=box1;break ;;} ;selectedObject[OxOc14a[25]][OxOc14a[26]]=OxOc14a[27];if(element[OxOc14a[25]][OxOc14a[28]]==OxOc14a[29]){inp_src[OxOc14a[30]]=OxOc14a[29];CustomBullet[OxOc14a[25]][OxOc14a[31]]=OxOc14a[32];} else {var Ox120;Ox120=element[OxOc14a[25]][OxOc14a[28]];Ox120=Ox120.substring(4,Ox120[OxOc14a[33]]-1);inp_src[OxOc14a[30]]=Ox120;} ;} ;SyncTo=function SyncTo_LI(element){switch(selectedObject){case box1:;case box2:;case box3:;case box4:;case box5:;case box6:try{element.setAttribute(OxOc14a[34],inp_start.value);} catch(er){} ;break ;;case box7:;case box8:;case box9:break ;;} ;if(inp_src[OxOc14a[30]]){element[OxOc14a[25]][OxOc14a[28]]=OxOc14a[35]+inp_src[OxOc14a[30]]+OxOc14a[36];} ;} ;function ToggleCustomBullet(){if(CustomBullet[OxOc14a[25]][OxOc14a[31]]==OxOc14a[32]){CustomBullet[OxOc14a[25]][OxOc14a[31]]=OxOc14a[37];} else {CustomBullet[OxOc14a[25]][OxOc14a[31]]=OxOc14a[32];} ;} ;function doClick1(Ox36f){if(element[OxOc14a[12]]==OxOc14a[13]){element=element[OxOc14a[14]];} ;selectedObject=Ox36f;switch(selectedObject){case box1:element[OxOc14a[25]][OxOc14a[24]]=OxOc14a[15];break ;;case box2:element[OxOc14a[25]][OxOc14a[24]]=OxOc14a[16];break ;;case box3:element[OxOc14a[25]][OxOc14a[24]]=OxOc14a[17];break ;;case box4:element[OxOc14a[25]][OxOc14a[24]]=OxOc14a[18];break ;;case box5:element[OxOc14a[25]][OxOc14a[24]]=OxOc14a[19];break ;;case box6:element[OxOc14a[25]][OxOc14a[24]]=OxOc14a[20];break ;;case box7:element[OxOc14a[25]][OxOc14a[24]]=OxOc14a[21];break ;;case box8:element[OxOc14a[25]][OxOc14a[24]]=OxOc14a[22];break ;;case box9:element[OxOc14a[25]][OxOc14a[24]]=OxOc14a[23];break ;;} ;var Ox7a=false;switch(selectedObject){case box1:;case box2:;case box3:;case box4:;case box5:;case box6:if(OriginalnodeName==OxOc14a[38]){OriginalnodeName=OxOc14a[39];Ox7a=true;} ;break ;;case box7:;case box8:;case box9:if(OriginalnodeName==OxOc14a[39]){OriginalnodeName=OxOc14a[38];Ox7a=true;} ;break ;;} ;if(Ox7a){var Ox587=editwin[OxOc14a[40]].createElement(OriginalnodeName);while(element[OxOc14a[41]]){Ox587.appendChild(element.firstChild);} ;element[OxOc14a[14]].insertBefore(Ox587,element);element[OxOc14a[14]].removeChild(element);var arg=Window_FindDialogArguments(window);arg[OxOc14a[42]]=element=Ox587;} ;box1[OxOc14a[25]][OxOc14a[26]]=OxOc14a[43];box2[OxOc14a[25]][OxOc14a[26]]=OxOc14a[43];box3[OxOc14a[25]][OxOc14a[26]]=OxOc14a[43];box4[OxOc14a[25]][OxOc14a[26]]=OxOc14a[43];box5[OxOc14a[25]][OxOc14a[26]]=OxOc14a[43];box6[OxOc14a[25]][OxOc14a[26]]=OxOc14a[43];box7[OxOc14a[25]][OxOc14a[26]]=OxOc14a[43];box8[OxOc14a[25]][OxOc14a[26]]=OxOc14a[43];box9[OxOc14a[25]][OxOc14a[26]]=OxOc14a[43];selectedObject[OxOc14a[25]][OxOc14a[26]]=OxOc14a[27];inp_src[OxOc14a[30]]=OxOc14a[29];SyncTo();} ;function doMouseOut(Ox36f){if(Ox36f==selectedObject){Ox36f[OxOc14a[25]][OxOc14a[26]]=OxOc14a[27];} else {Ox36f[OxOc14a[25]][OxOc14a[26]]=OxOc14a[43];} ;} ;function doMouseOver(Ox36f){Ox36f[OxOc14a[25]][OxOc14a[26]]=OxOc14a[44];} ;btnbrowse[OxOc14a[45]]=function btnbrowse_onclick(){function Ox35d(Ox13e){if(Ox13e){inp_src[OxOc14a[30]]=Ox13e;FireUIChanged();SyncTo(element);} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox35d,inp_src.value,inp_src);} else {editor.ShowSelectImageDialog(Ox35d,inp_src.value);} ;} ;