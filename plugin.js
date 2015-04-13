{
    "moduleId" : "wazemap/waze",
    "title" : "waze",
    "subtitle" : "www.waze.com",
    
    "backButton" : true,
    "enableGPS" : true,
    "zoomControl" : false,
    "screenLockRot" : false,
    "reload" : true,
    
    "shouldOverrideUrlLoading1" : "http://www.waze.com",
    "shouldOverrideUrlLoading2" : "https://www.waze.com",

    "loadDataWithBaseUrl1" : "https://www.waze.com",

    "loadDataWithBaseUrl3" : "text/html",
    "loadDataWithBaseUrl4" : "utf-8",
    "loadDataWithBaseUrl5" : null,
					    			
    "browserLaunchLink" : "http://www.waze.com/livemap",
    
        "loadDataWithBaseUrl2" : "
<script>
   var center = { lat:0.0, lon:0.0, zoom:0 };
   center['lat'] = '#lat#';
   center['lon'] = '#lng#';
   center['zoom'] = '#zoom#';
   localStorage.setItem('livemap_user_state',JSON.stringify(center));
   
   window.location.href = 'https://www.waze.com/livemap';
   
</script>
        "
}
