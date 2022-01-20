//fetching screens and buttons using DOM
var screens=document.getElementsByTagName('p');
var buttons=document.getElementsByClassName('btn');

//adding click events to different buttons
buttons[0].addEventListener('click',resume);
buttons[1].addEventListener('click',pause);
buttons[2].addEventListener('click',reset);


var count1=0;   //for milliseconds
var count2=0;   //for seconds
var count3=0;   //for minutes
var count4=0;   //for hours


var id;// declaring id of setInterval function
var flag=1;//this variable is used to avoid simultaneous clicks 

/* screens[0]=hours-counter , screens[1]=minutes-counter, screens[2]=seconds-counter, screens[3]=milliseconds-counter */


function resume()
{
    if(flag==1)//condition to keep a check on simultaneous clicks on resume button
    {
     flag=0;//resetting the flag to 0 to disable event handling  for resume button
     id=setInterval(function()
     {
        if(count1==100)//for milliseconds counter if count exceeds "99"
        {
            count1=0;
            count2++;
            screens[3].innerHTML=count1.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});//resetting the milliseconds screen to 00
            screens[2].innerHTML=count2.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});//starting the seconds counter
            if(count2==60)//for seconds counter
            {
                count1=0;
                screens[3].innerHTML=count1.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});//resetting the milliseconds screen to 00
                count2=0;
                screens[2].innerHTML=count2.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});//resetting the seconds screen to 00
                count2++;
                count3++;
                screens[1].innerHTML=count3.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});//starting the minutes counter
                if(count3==60)//for minutes counter
                {
                    count1=0;
                    screens[3].innerHTML=count1.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});//resetting the milliseconds screen to 00
                    count2=0;
                    screens[2].innerHTML=count2.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});//resetting the seconds screen to 00
                    count3=0;
                    screens[1].innerHTML=count3.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});//resetting the minutes screen to 00
                    count2++;
                    count3++;
                    count4++;
                    screens[0].innerHTML=count4.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});//starting the hours counter
                }
            }
        }
        count1++;
        screens[3].innerHTML=count1.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});//starting the milliseconds counter
        return;
    },10);
  }
}



//pause the counter to the current state
function pause()
{
         clearInterval(id);
         screens[0].innerHTML=count4.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});
         screens[1].innerHTML=count3.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});
         screens[2].innerHTML=count2.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});
         screens[3].innerHTML=count1.toLocaleString('en-IN',{minimumIntegerDigits:2,useGrouping:false});
         flag=1;//resetting the flag to 1 to enable event hadndling for resume button
}


//clear all the screens
function reset()
{
   clearInterval(id);
   screens[0].innerHTML="00";
   screens[1].innerHTML="00";
   screens[2].innerHTML="00";
   screens[3].innerHTML="00";
   count1=0;
   count2=0;
   count3=0;
   count4=0;
   flag=1;//resetting the flag to 1 to enable event handling for resume button
   return;
}