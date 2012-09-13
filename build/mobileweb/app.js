// this sets the background color of the master UIView (when there are no windows/tab groups on it)

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Ti.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Ti.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Ti.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'TOP',
    window:win1
});

var b1 = Ti.UI.createButton({
	title:'entry.jsに遷移する',
	width:200,
	
});

// クリック時の動作設定
b1.addEventListener('click', function()
{
var win = Ti.UI.createWindow({
    url   : "entry.js"
});

win.open();
});

win1.add(b1);

//
// create controls tab and root window
//
var win2 = Ti.UI.createWindow({  
    title:'確認',
    backgroundColor:'#fff'
});
var tab2 = Ti.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'',
    bottom:0,
    window:win2
});

var label2 = Ti.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);


//
// create controls tab and root window
//
var win3 = Ti.UI.createWindow({  
    title:'Tab 3',
    backgroundColor:'#fff'
});
var tab3 = Ti.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 3',
    bottom:0,
    window:win3
});

var label3 = Ti.UI.createLabel({
	color:'#999',
	text:'I am Window 3',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win3.add(label3);


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  

// open tab group
tabGroup.open();

;