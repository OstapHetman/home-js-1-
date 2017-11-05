let osName = "Unknown",
    outputOs = document.getElementById("userAgent"),
    userAgent = window.navigator.userAgent;

// Check Information About OS
let checkOs = (function() {
    if (userAgent.indexOf("Windows NT 10.0") != -1) osName = "Windows 10";
    if (userAgent.indexOf("Windows NT 6.2") != -1) osName = "Windows 8";
    if (userAgent.indexOf("Windows NT 6.1") != -1) osName = "Windows 7";
    if (userAgent.indexOf("Windows NT 6.0") != -1) osName = "Windows Vista";
    if (userAgent.indexOf("Windows NT 5.1") != -1) osName = "Windows XP";
    if (userAgent.indexOf("Mac") != -1) osName = "Mac/iOS";
    if (userAgent.indexOf("X11") != -1) osName = "UNIX";
    if (userAgent.indexOf("Linux") != -1) osName = "Linux";
    outputOs.innerHTML = "<b>Your Operating system is: </b>" + osName;
})();