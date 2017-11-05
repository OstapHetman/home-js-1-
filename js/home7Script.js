let osName = "Unknown",
    browserName = "Unknown",
    browserVersion = "Unknown",
    windowWidth = window.innerWidth,
    windowHeight = window.innerHeight,
    outputOs = document.getElementById("os"),
    outputBrowser = document.getElementById("browser"),
    outputVersion = document.getElementById("browserVersion"),
    outputWidth = document.getElementById("windowWidth"),
    outputHeight = document.getElementById("windowHeight"),
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

// Check Information About Browser Model and Browser Version
let checkBrowser = (function() {

    isIE = false || !!document.documentMode;
    isEdge = !isIE && !!window.StyleMedia;

    (userAgent.match(/Opera|OPR\//)) ? (browserName = 'Opera', match = window.navigator.userAgent.match(/(?:OPR|Opera)\/([0-9]+)\./),
        version = match ? parseInt(match[1]) : "I dont'know") :

    (userAgent.indexOf("Chrome") != -1 && !isEdge) ? (browserName = 'Chrome', match = window.navigator.userAgent.match(/(?:Chrom(?:e|ium))\/([0-9]+)\./),
        version = match ? parseInt(match[1]) : "I dont'know") :

    (userAgent.indexOf("Safari") != -1 && !isEdge) ? (browserName = 'Safari') :

    (userAgent.indexOf("Firefox") != -1) ? (browserName = 'Firefox', match = window.navigator.userAgent.match(/(?:Firefox)\/([0-9]+)\./),
        version = match ? parseInt(match[1]) : "I dont'know") :

    ((userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) ? (browserName = 'IE', match = window.navigator.userAgent.match(/(?:rv)\:([0-9]+)\./),
        version = match ? parseInt(match[1]) : "I dont'know") :

    (isEdge) ? (browserName = 'Edge') : (browserName = 'Other-browser')

    outputBrowser.innerHTML = "<b>Your Browser is: </b>" + browserName;
    outputVersion.innerHTML = "<b>Your Browser Version is: </b>" + version;
})();

// Check window Width and Height
let checkWindow = (function() {
    outputWidth.innerHTML = "<b>Your Window Width is: </b>" + windowWidth + "px";
    outputHeight.innerHTML = "<b>Your Window Height is: </b>" + windowHeight + "px";
})();