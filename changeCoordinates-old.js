//����ge�����ж��������
function updateOptions(deltaLat,deltaLng,deltaAlt) 
{
     var time1 = new Date();

 // ��������ƶ�KML����Ҫ�صĹ���... 
  var i=null;

  var deltaLat1=0;
  var deltaLng1=0;
  var deltaAlt1=0;

  var pi_value = Math.PI;   
  var radius_earth= 6371004;

  var elementNum=0;

  statusID=1;
  

  //����PointҪ��
  var points = ge.getElementsByType('KmlPoint');
  processProgress = 0;
  elementNum = points.getLength();
  for ( i = 0; i < points.getLength(); i++) 
  {
     var pointi = points.item(i);

     // alert(pointi.getType());
     
     if (elementNum > 0 )
     {
       processProgress=i*100.0/elementNum;
      }


     //�õ����������
     var lati= pointi.getLatitude();
     var lngi= pointi.getLongitude();
     var alti= pointi.getAltitude();
     

     //�õ�����仯��
     deltaLat1= (deltaLat*180)/(pi_value*(radius_earth + alti) );
     deltaLng1= (deltaLng*180)/(pi_value*(radius_earth + alti)* Math.cos(lati * pi_value/180.0 ));
     deltaAlt1 = deltaAlt;
     var newlati = lati + deltaLat1;
     var newlngi = lngi + deltaLng1;
     
     //�ж��������γ��ֵ
     if (newlati > 90) {
         newlati = 90;
     }
     else if (newlati < -90) {
         newlati = -90;
     }
     //�ж�������ľ���ֵ
     if (newlngi > 180) {
         newlngi = newlngi - 360;
     }
     else if (newlngi < -180) {
     newlngi = newlati + 360;
     }
     //�޸�Ϊ������
   pointi.setLatLngAlt(newlati, newlngi, alti + deltaAlt1); 
  } 

  //����LineStringҪ�غ�LinearRingҪ��
  var linestrings = ge.getElementsByType('KmlLineString');
  processProgress = 0;
  elementNum = linestrings.getLength();

  for ( i = 0; i < linestrings.getLength(); i++) 
  {
     var pointi = null;
     var pointCoordArray=null;

     if (elementNum > 0 )
     {
       processProgress=i*100.0/elementNum;
      }

      pointi= linestrings.item(i);
      // if (i<2){ alert(pointi.getType());}
      // if (i<2){ alert("�߶�");}
      // alert("�߶�");

      pointCoordArray = pointi.getCoordinates ();
      // alert(pointCoordArray.getType());

      for (var j=0;j < pointCoordArray.getLength(); j++)
      {
            var pointCoord = pointCoordArray.get(j );

             //�õ����������
             var lati= pointCoord.getLatitude();
             var lngi= pointCoord.getLongitude();
             var alti= pointCoord.getAltitude();
             
             //�õ�����仯��
             deltaLat1= (deltaLat*180)/(pi_value*(radius_earth + alti) );
             deltaLng1= (deltaLng*180)/(pi_value*(radius_earth + alti)* Math.cos(lati * pi_value/180.0 ));
             deltaAlt1 = deltaAlt;
             var newlati = lati + deltaLat1;
             var newlngi = lngi + deltaLng1;

             //�ж��������γ��ֵ
             if (newlati > 90) {
                 newlati = 90;
             }
             else if (newlati < -90) {
                 newlati = -90;
             }
             //�ж�������ľ���ֵ
             if (newlngi > 180) {
                 newlngi = newlngi - 360;
             }
             else if (newlngi < -180) {
                 newlngi = newlati + 360;
             }

              //�޸�Ϊ������
             pointCoordArray.setLatLngAlt(j, newlati, newlngi, alti + deltaAlt1);
      }

  } 


//���� LinearRing Ҫ��:����KmlLinearRing������LineString��ǰ���Ѿ�������LineString���˴�����Ҫ����KmlLinearRing�ˡ�
//  var linestrings = ge.getElementsByType('KmlLinearRing');
//  for ( i = 0; i < linestrings.getLength(); i++) 
//  {
//      var pointi = null;
//      var pointCoordArray=null;
//
//      pointi= linestrings.item(i);
//      if (i<2){ alert(pointi.getType());}
//
//      pointCoordArray = pointi.getCoordinates ();
//      if (i<2){ alert(pointCoordArray.getType());}
//
//      for (var j=0;j < pointCoordArray.getLength(); j++)
//      {
//          var pointCoord = pointCoordArray.get(j );
//
//            //�õ����������
//           var lati= pointCoord.getLatitude();
//           var lngi= pointCoord.getLongitude();
//           var alti= pointCoord.getAltitude();
//
//           //�޸�Ϊ������
//          pointCoordArray.setLatLngAlt(j, lati+deltaLat, lngi+deltaLng,alti+deltaAlt);
//   }
//
// } 

//���� PolygonҪ�أ������� <LinearRing>������<Polygon>������߽磬ǰ���Ѿ�������KmlLinearRing���˴�����Ҫ����Polygon�ˡ�


//����ModelҪ��
  var points = ge.getElementsByType('KmlModel');
  processProgress = 0;
  elementNum = points.getLength();

  for ( i = 0; i < points.getLength(); i++) 
  {
      var pointi = points.item(i);
      // alert(pointi.getType());

      var pointLoc=null;
      pointLoc = pointi.getLocation();

      if (elementNum > 0 )
     {
       processProgress=i*100.0/elementNum;
      }

      //��ģ�����������
      var lati= pointLoc.getLatitude();
      var lngi= pointLoc.getLongitude();
      var alti= pointLoc.getAltitude();
     
    //��ģ������仯��
      deltaLat1= (deltaLat*180)/(pi_value*(radius_earth + alti) );
      deltaLng1= (deltaLng*180)/(pi_value*(radius_earth + alti)* Math.cos(lati * pi_value/180.0 ));
      deltaAlt1 = deltaAlt;
      var newlati = lati + deltaLat1;
      var newlngi = lngi + deltaLng1;

      //�ж��������γ��ֵ
      if (newlati > 90) {
          newlati = 90;
      }
      else if (newlati < -90) {
          newlati = -90;
      }
      //�ж�������ľ���ֵ
      if (newlngi > 180) {
          newlngi = newlngi - 360;
      }
      else if (newlngi < -180) {
          newlngi = newlati + 360;
      }
      
      //�޸�Ϊ������
      pointLoc.setLatLngAlt(newlati, newlngi,alti+deltaAlt1); 
  } 
  	var time2 = new Date();
//  	alert(time2.getTime() - time1.getTime());
 // alert('finished');
//����MultiGeometryҪ��:MultiGeometry����ͬһKML��ͼ�������0��������������Ҫ�أ�<Point>�� <LineString>�� <LinearString>��<Polygon>��<Model>���ļ���
// ǰ���Ѿ������˻�������Ҫ�أ��˴�����Ҫ����MultiGeometry�ˡ�

  statusID=0;
}


