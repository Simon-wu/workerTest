javascript: (function () { var script = document.createElement('script'); script.src = "//cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = function () { eruda.init() } })();


if (window.Worker) {

    var myWorker = new Worker("/js/work.js");

    myWorker.onmessage = function (oEvent) {
      console.log("Worker said : " + oEvent.data);
      document.write("Worker said : " + oEvent.data);
    };
    
    myWorker.postMessage(2000000000);
    // myWorker.postMessage(100);
  }


