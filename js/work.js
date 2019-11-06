// postMessage("I\'m working before postMessage(\'ali\').");

console.log('self :', self);

this.onmessage = function (oEvent) {
   var beginTime = +new Date();
   var length = oEvent.data;
   var sum = oEvent.data;
   console.log('length :', length);

   for (let index = 0; index < length; index++) {
        sum += index ;
       
   }
  var endTime = +new Date();
  postMessage("Hi Hi " + oEvent.data+" :"+sum +"-> 渲染用时共计"+(endTime-beginTime)+"ms");

};