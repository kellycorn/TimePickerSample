//
// create root window
//
var win1 = Titanium.UI.createWindow({
    backgroundColor:'#fff',
    layout: 'vertical'
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Set the time below',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top: '40'
});

var picker1 = Titanium.UI.createPicker({
	type: Ti.UI.PICKER_TYPE_TIME,
	top: '20'
});

picker1.addEventListener('change', function(e) {
	label1.text = picker1.value;
	Ti.API.error(picker1.value);
});

win1.add(label1);
win1.add(picker1);

win1.open();
