// this sets the background color of the master UIView (when there are no windows/tab groups on it)

//
// create base UI tab and root window

var win3 = Titanium.UI.createWindow({  
    title:'entry',
    backgroundColor:'#000'
});

var minDate = new Date();
minDate.setFullYear(2012);
minDate.setMonth(0);
minDate.setDate(1);

var maxDate = new Date();
maxDate.setFullYear(2099);
maxDate.setMonth(11);
maxDate.setDate(31);

var value = new Date();
value.setFullYear(2012);
value.setMonth(9);
value.setDate(13);

var picker = Ti.UI.createPicker({
	type:Ti.UI.PICKER_TYPE_DATE,
	top:30,
	minDate:minDate,
	maxDate:maxDate,
	value:value
});

win3.add(picker);

//会議室ラベル
var kaigiLabel = Titanium.UI.createLabel({
	color:'#fff',
	text:'会議室',
	font:{fontSize:25,fontFamily:'Helvetica Neue'},
	top:250,
	left:30,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
});
win3.add(kaigiLabel);

//会議室選択
var kaigiPicker = Ti.UI.createPicker({
	top:250
});

var data = [];
data[0]=Ti.UI.createPickerRow({title:'LAND',custom_item:'l'});
data[1]=Ti.UI.createPickerRow({title:'RIVER',custom_item:'r'});

// turn on the selection indicator (off by default)
kaigiPicker.selectionIndicator = true;
kaigiPicker.add(data);
win3.add(kaigiPicker);

//開始時間ラベル
var kaishiLabel = Titanium.UI.createLabel({
	color:'#fff',
	text:'開始時間',
	font:{fontSize:25,fontFamily:'Helvetica Neue'},
	top:320,
	left:30,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
});
win3.add(kaishiLabel);

//開始時間選択
var kaishiTime = new Date();
var kaishiPicker = Ti.UI.createPicker({
	useSpinner:true,
	type:Ti.UI.PICKER_TYPE_TIME,
	value:kaishiTime,
	minuteInterval: 15,
	top:370,
	left:30
});
win3.add(kaishiPicker);

//終了時間ラベル
var shuryoLabel = Titanium.UI.createLabel({
	color:'#fff',
	text:'終了時間',
	font:{fontSize:25,fontFamily:'Helvetica Neue'},
	top:320,
	right:30,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
});
win3.add(shuryoLabel);

//終了時間選択
var shuryoTime = new Date();
var shuryoPicker = Ti.UI.createPicker({
	useSpinner:true,
	type:Ti.UI.PICKER_TYPE_TIME,
	value:shuryoTime,
	top:370,
	right:30,
	minuteInterval:15
});
win3.add(shuryoPicker);

//登録ボタン
var b1 = Titanium.UI.createButton({
	title:'登録',
	url:'app.js',
	textAlign:'center',
	width:350,
	top:580
});

// 登録ボタン押下時の動作設定
b1.addEventListener('click', function()
{
var move = Ti.UI.createWindow({
	//TODO 遷移先を設定する。
    url   : "app.js"
});

move.open();
});

win3.add(b1);

win3.open();
