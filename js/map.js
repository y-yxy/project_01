
    let getInfo = document.getElementById("getInfo")
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(myGPSFun)
    }
    else alert("您的浏览器不支持地理定位")
    function myGPSFun(e){
        let jd = e.coords.longitude //经度
        let wd = e.coords.latiude   //纬度

        map = new BMap.Map("geoInfo")   //创建地图实例

        let point = new BMap.Point(106.247271,29.997059)   //存储经度和纬度

        let convertor = new BMap.Convertor()    //坐标转换对象
        let pointArr = []
        pointArr.push(point)
        convertor.translate(pointArr,1,5,translateCalback)
    }
    function translateCalback(e){
        if(e.status == 0){
            let marker = new BMap.Marker(e.points[0])
            map.centerAndZoom(e.points[0],15)   //初始化地图，设置中心坐标和地图级别
            map.addOverlay(marker)
            map.enablesScrollWheelZoom(true)    //开启鼠标滑轮缩放功能
        }
    }