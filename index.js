



function clock()
{
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var am=document.getElementById("am");

    var time = new Date();
    var a=time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    var am_pm = time.getHours() >= 12 ? "PM" : "AM";
        a = a < 10 ? "0" + a : a;
    var b=time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    var c=time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
    am.innerHTML=am_pm;


    
}
setInterval(clock,1000);
// </script>

function Makediv(){
    var container=document.createElement('div');
    container.id="dynamic-block";
    container.className="grid-item";
    document.getElementById('grid-container1').appendChild(container);
    var invalue=document.getElementById("WakeUpTime");
    var value=invalue.options[invalue.selectedIndex].text;
    if(invalue==value){
        document.getElementById("dynamic-block").innerHTML="GOOD MORNING &nbsp" + value;
        }
        else{
            document.getElementById("dynamic-block").innerHTML="GOOD MORNING &nbsp" + value;
        }
    var invalue1=document.getElementById("lunchTime");
    var value1=invalue1.options[invalue1.selectedIndex].text;
    if(invalue1==value1){
        document.getElementById("dynamic-block").innerHTML="GOOD AFTERNOON &nbsp" + value1;
    }
    else {
        document.getElementById("dynamic-block").innerHTML="GOOD AFTERNOON &nbsp" + value1;
    }
    var invalue2=document.getElementById("napTime");
    var value2=invalue2.options[invalue2.selectedIndex].text;
    if(invalue2==value2){
        document.getElementById("dynamic-block").innerHTML="GOOD NIGHT &nbsp" + value2;
    }
    else {
        document.getElementById("dynamic-block").innerHTML="GOOD NIGHT &nbsp" + value2;
    }
    
        
    
    
}
// function Makediv1(){
//     var container1=document.createElement('div1');
//     container.id="dynamic-block1";
//     container.className="grid-item";
//     document.getElementById('grid-container1').appendChild(container1);
//     var invalue1=document.getElementById("lunchTime");
//     var value1=invalue1.options[invalue1.selectedIndex].text;
//     document.getElementById("dynamic-block1").innerHTML="GOOD AFTERNOON &nbsp" + value1;
// }
function timeSet()
{
    var i = document.getElementById("WakeUpTime").value;
    var hourr = new Date().getHours();

    if(i==hourr)
    {
        document.getElementById("img-container").style.backgroundImage="url(wakeup_image.png)";
        document.getElementById("text-container").innerHTML="WAKE UP !!";
    }

    var j = document.getElementById("lunchTime").value;
    var hourr = new Date().getHours();

    if(j==hourr)
    {
        document.getElementById("img-container").style.backgroundImage="url(lunch_image.png)";
        document.getElementById("text-container").innerHTML="LET'S HAVE SOME LUNCH !!";
    }

    var k = document.getElementById("napTime").value;
    var hourr = new Date().getHours();

    if(k==hourr)
    {
        document.getElementById("img-container").style.backgroundImage="url(goodnight_image.png)";
        document.getElementById("text-container").innerHTML="GOOD NIGHT !!";
    }

    Makediv();
    Makediv1();
}

