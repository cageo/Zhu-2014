
//������ֱ�̵߳ı���
var altitudeBar;
var altitudeBar_bg;
var semialtibg;

//������Ʊ仯��ƽ��仯�������Ⱥ���ֱ������
var rangeMaxV= 1000;
var rangeMaxH_WE = 1000;
var rangeMaxH_SN = 1000;

function getNewRangeMaxV()
{
	
	rangeMaxV = parseFloat($('range').value);
//	alert(rangeMaxV);
//	alert(rangeMaxH);
}

function WEMaxChange()
{
	rangeMaxH_WE = parseFloat( $('WEMax').value);
//	alert(rangeMaxH_WE);
//	alert(rangeMaxV);
}


function SNMaxChange()
{
//	alert('3');
	rangeMaxH_SN = parseFloat($('SNMax').value)
//	alert(rangeMaxH_SN);
}

//Ϊ��������ı���������¼�
function setV()
{
//������ʽ���ж�����������ֵΪ����ֵ��
//	var regexp = 
//	alert("ok");
	getNewRangeMaxV();
	
}

function setH_WE()
{
	//�������������ʽ
//	alert("ok");
	WEMaxChange();
}

function setH_SN()
{
	//�������������ʽ
//	alert("ok");
	SNMaxChange();
}


//������Կ�����ֱ�̵߳���Ļ���Ӳ�
function addAltitudeControl()
{
	var add_tip;
	var minus_tip;
	/*����ӿؼ�����  ԭ��ֱ����slider
         altitudeBar_bg=addScreenOverlay('http://202.127.1.14/movekml/images/altitude_bg_1.png',700,120,0,0,0.5,0.5,0,58,163);
	//������൱��С�������Ļ���Ӳ�
        altitudeBar = addScreenOverlay('http://202.127.1.14/movekml/images/sldr5v_sl.png',719,197,0,0,0.5,0.5,0,17,9);
    */
	/*var v_tip;
	v_tip = addScreenOverlay('http://202.127.1.14/movekml/images/v_tip.png',665,140,0,0,0.5,0.5,0,30,150);
	ge.getFeatures().appendChild(v_tip);*/

    //������ֱ����slider
	altitudeBar_bg = addScreenOverlay('http://202.127.1.14/movekml/images/altitude_bg_1.png', 84, 470, 0, 0, 0.5, 0.5, 0, 58, 163);
	//������൱��С�������Ļ���Ӳ�
	altitudeBar = addScreenOverlay('http://202.127.1.14/movekml/images/sldr5v_sl.png', 103, 393, 0, 0, 0.5, 0.5, 0, 17, 9);

	
	ge.getFeatures().appendChild(altitudeBar_bg);
	ge.getFeatures().appendChild(altitudeBar);
/*��ȡ����͸��ͼƬ
    //��Ӱ�͸����ֱ����slider
	semialtibg = addScreenOverlay('http://www.chuantu.biz/t/12/1397718782x-1376440227.png', 84, 170, 0, 0, 0.5, 0.5, 0, 58, 163);
	ge.getFeatures().appendChild(semialtibg);
	semialtibg.setVisibility(true);
*/
}

var tipfor01;
var tipfor02;
var bgCtrl01;
var bgSl01;
var bgCtrl02;
var bgSl02;
var semibg01;
var semibg02;


//�������Ļ�Ͽ���GE������ƶ�
function addNewScreenContrl()
{
	var w_tip;
	var e_tip;
	var n_tip;
	var s_tip;

	

    //�����ϱ����������򻬶��� ����
	bgCtrl01 = addScreenOverlay('http://202.127.1.14/movekml/images/south2north_1.png', 30, 600, 0, 0, 0.5, 0.5, 0, 163, 43);
	bgSl01 = addScreenOverlay('http://202.127.1.14/movekml/images/sldr5h_sl.png', 107, 590, 0, 0, 0.5, 0.5, 0, 9, 17);


	//tipfor02 = addScreenOverlay('http://202.127.1.14/PublicStu/Zhangb/files/choiceCtrl/WE_tip.png',5,145,0,0,0.5,0.5,0,150,30);
	bgCtrl02 = addScreenOverlay('http://202.127.1.14/movekml/images/west2east_1.png',30,540,0,0,0.5,0.5,0,163,43);
	bgSl02 = addScreenOverlay('http://202.127.1.14/movekml/images/sldr5h_sl.png',107,530,0,0,0.5,0.5,0,9,17);

	//ge.getFeatures().appendChild(tipfor01);
	//ge.getFeatures().appendChild(tipfor02);
	ge.getFeatures().appendChild(bgCtrl01);
	ge.getFeatures().appendChild(bgCtrl02);
	ge.getFeatures().appendChild(bgSl01);
	ge.getFeatures().appendChild(bgSl02);
/*	//ge.getFeatures().appendChild(semibg01);
	//ge.getFeatures().appendChild(semibg02);
	bgCtrl01.setVisibility(false);
	bgCtrl02.setVisibility(false);
	bgSl01.setVisibility(false);
	bgSl02.setVisibility(false);
	semibg01.setVisibility(true);
	semibg02.setVisibility(true);
*/
}
// mousemove ���� ��ʾ��Ļ���Ӳ�
function focusedscreenctrl() {
    var mousemoveEvent = function (event) {
        if (event.getClientX() > 20 && event.getClientX() < 200 && event.getClientY() > 295 && event.getClientY() < 610) {
            
            /*semialtibg.setVisibility(false);
            bgCtrl01.setVisibility(true);
            bgCtrl02.setVisibility(true);
            bgSl01.setVisibility(true);
            bgSl02.setVisibility(true);
            semibg01.setVisibility(false);
            semibg02.setVisibility(false);
            */
            altitudeBar_bg.setOpacity(1);
            altitudeBar.setOpacity(1);
            bgCtrl01.setOpacity(1);
            bgCtrl02.setOpacity(1);
            bgSl01.setOpacity(1);
            bgSl02.setOpacity(1);
            semibg01.setOpacity(1);
            semibg02.setOpacity(1);
        }
        else {
            /*altitudeBar_bg.setVisibility(false);
            //altitudeBar.setVisibility(false);
            semialtibg.setVisibility(true);
            bgCtrl01.setVisibility(false);
            bgCtrl02.setVisibility(false);
            bgSl01.setVisibility(false);
            bgSl02.setVisibility(false);
            semibg01.setVisibility(true);
            semibg02.setVisibility(true);
            */
            altitudeBar_bg.setOpacity(0.5);
            altitudeBar.setOpacity(0.5);
            bgCtrl01.setOpacity(0.5);
            bgCtrl02.setOpacity(0.5);
            bgSl01.setOpacity(0.5);
            bgSl02.setOpacity(0.5);
            semibg01.setOpacity(0.5);
            semibg02.setOpacity(0.5);
        }
    };
    google.earth.addEventListener(ge.getWindow(), 'mousemove', mousemoveEvent);
}

//�����Ļ���Ӳ�,����ΪͼƬ����ͼ�ϵ�λ����Ϣ������
function addScreenOverlay(href,overlayXY_x,overlayXY_y,screenXY_x,screenXY_y,rotationXY_x,rotationXY_y,rotation,size_x,size_y)
{
	var screenOverlay = ge.createScreenOverlay('');
	var icon = ge.createIcon('');
	icon.setHref(href);
	screenOverlay.setIcon(icon);
	
	screenOverlay.getScreenXY().setXUnits(ge.UNITS_PIXELS);
	screenOverlay.getScreenXY().setYUnits(ge.UNITS_PIXELS);
	screenOverlay.getScreenXY().setX(screenXY_x);
	screenOverlay.getScreenXY().setY(screenXY_y);
	
	screenOverlay.getOverlayXY().setXUnits(ge.UNITS_PIXELS);
	screenOverlay.getOverlayXY().setYUnits(ge.UNITS_INSET_PIXELS);
	screenOverlay.getOverlayXY().setX(overlayXY_x);
	screenOverlay.getOverlayXY().setY(overlayXY_y);
	
	screenOverlay.getRotationXY().setXUnits(ge.UNITS_FRACTION);
	screenOverlay.getRotationXY().setYUnits(ge.UNITS_FRACTION);
	screenOverlay.getRotationXY().setX(rotationXY_x);
	screenOverlay.getRotationXY().setY(rotationXY_y);
	
	screenOverlay.getSize().setXUnits(ge.UNITS_PIXELS);
	screenOverlay.getSize().setYUnits(ge.UNITS_PIXELS);
	screenOverlay.getSize().setX(size_x);
	screenOverlay.getSize().setY(size_y);
	
	screenOverlay.setRotation(rotation);
	
	return screenOverlay;
}