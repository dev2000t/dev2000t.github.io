function vibrate(val){
    if("vibrate" in navigator)  return navigator.vibrate(val);
    if("oVibrate" in navigator)  return navigator.oVibrate(val);
    if("mozVibrate" in navigator)  return navigator.mozVibrate(val);
    if("webkitVibrate" in navigator)  return navigator.webkitVibrate(val);
}

function delay_v() {
    stopVibrate();
    vInterval = setInterval(function() {
        vibrate(200);
    }, 100);
}

function infiniteVibrate(val, interval) {
    stopVibrate();
    vInterval = setInterval(function() {
        vibrate(val);
    }, interval);
}

function stopVibrate() {
    if(typeof(vInterval)!=="undefined") clearInterval(vInterval);
    vibrate(0);
}