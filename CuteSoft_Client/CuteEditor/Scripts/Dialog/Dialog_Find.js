var OxOf438=["stringSearch","stringReplace","MatchWholeWord","MatchCase","document","checked","length","value","Nothing to search.","selection","body","type","Control","rangeCount","userAgent","innerText","text","Finished Searching the document. Would you like to start again from the top?","","textedit","[[WordNotFound]]","[[WordReplaced]] : ","Please use replace funtion."];var editwin=Window_GetDialogArguments(window);var stringSearch=Window_GetElement(window,OxOf438[0],true);var stringReplace=Window_GetElement(window,OxOf438[1],true);var MatchWholeWord=Window_GetElement(window,OxOf438[2],true);var MatchCase=Window_GetElement(window,OxOf438[3],true);var editdoc=editwin[OxOf438[4]];function get_ie_matchtype(){var Ox311=0;var Ox312=0;var Ox313=0;if(MatchCase[OxOf438[5]]){Ox312=4;} ;if(MatchWholeWord[OxOf438[5]]){Ox313=2;} ;Ox311=Ox312+Ox313;return (Ox311);} ;function checkInputString(){if(stringSearch[OxOf438[7]][OxOf438[6]]<1){alert(OxOf438[8]);return false;} else {return true;} ;} ;function IsMatchSearchValue(Ox24){if(!Ox24){return false;} ;if(stringSearch[OxOf438[7]]==Ox24){return true;} ;if(MatchCase[OxOf438[5]]){return false;} ;return stringSearch[OxOf438[7]].toLowerCase()==Ox24.toLowerCase();} ;var _ie_range=null;function IE_Restore(){editwin.focus();if(_ie_range!=null){_ie_range.select();} ;} ;function IE_Save(){editwin.focus();_ie_range=editdoc[OxOf438[9]].createRange();} ;function MoveToBodyStart(){if(Browser_UseIESelection()){range=document[OxOf438[10]].createTextRange();range.collapse(true);range.select();IE_Save();} else {editwin.getSelection().collapse(editdoc.body,0);} ;} ;function DoFind(){if(Browser_UseIESelection()){IE_Restore();var Ox136=editdoc[OxOf438[9]];if(Ox136[OxOf438[11]]==OxOf438[12]){MoveToBodyStart();} ;var Ox228=Ox136.createRange();Ox228.collapse(false);if(Ox228.findText(stringSearch.value,1000000000,get_ie_matchtype())){Ox228.select();IE_Save();return true;} ;} else {var Ox228;var Ox136=editwin.getSelection();if(Ox136[OxOf438[13]]>0){Ox228=editwin.getSelection().getRangeAt(0);} ;var Ox22a=!!navigator[OxOf438[14]].match(/Trident\/7\./);if(Ox22a){editdoc[OxOf438[10]][OxOf438[15]].indexOf(stringSearch.value)>-1;} else {if(editwin.find(stringSearch.value,MatchCase.checked,false,false,MatchWholeWord.checked,false,false)){return true;} ;} ;} ;} ;function DoReplace(){if(Browser_UseIESelection()){IE_Restore();var Ox136=editdoc[OxOf438[9]];if(Ox136[OxOf438[11]]!=OxOf438[12]){var Ox228=Ox136.createRange();if(IsMatchSearchValue(Ox228.text)){Ox228[OxOf438[16]]=stringReplace[OxOf438[7]];Ox228.collapse(false);IE_Save();return true;} ;} ;} else {var Ox136=editwin.getSelection();if(IsMatchSearchValue(Ox136.toString())){Ox136.deleteFromDocument();Ox136.getRangeAt(0).insertNode(editdoc.createTextNode(stringReplace.value));Ox136.getRangeAt(0).collapse(false);return true;} ;} ;return false;} ;function FindTxt(){if(!checkInputString()){return false;} ;while(true){if(DoFind()){return ;} ;if(!confirm(OxOf438[17])){return ;} ;MoveToBodyStart();} ;} ;function ReplaceTxt(){if(!checkInputString()){return ;} ;DoReplace();FindTxt();} ;function ReplaceAllTxt(){if(!checkInputString()){return ;} ;var Ox31f=0;var msg=OxOf438[18];MoveToBodyStart();if(Browser_UseIESelection()){var Ox136=editdoc[OxOf438[9]];if(Ox136[OxOf438[11]]==OxOf438[12]){MoveToBodyStart();} ;var Ox320=Ox136.createRange();var Ox31f=0;var msg=OxOf438[18];Ox320.expand(OxOf438[19]);Ox320.collapse();Ox320.select();while(Ox320.findText(stringSearch.value,1000000000,get_ie_matchtype())){Ox320.select();Ox320[OxOf438[16]]=stringReplace[OxOf438[7]];Ox31f++;} ;if(Ox31f==0){msg=OxOf438[20];} else {msg=OxOf438[21]+Ox31f;} ;alert(msg);} else {if((stringReplace[OxOf438[7]]).indexOf(stringSearch.value)==-1){DoFind();while(DoReplace()){Ox31f++;DoFind();FindTxt();} ;if(Ox31f==0){msg=OxOf438[20];} else {msg=OxOf438[21]+Ox31f;} ;alert(msg);} else {FindTxt();alert(OxOf438[22]);} ;} ;} ;