import{f,i as b}from"./vendor-77e16229.js";{let l=function(e,t=!1){const n=new Date(e),a=new Date;if(n>=a){u=n,o.disabled=!1,h.set("minDate","today");return}if(n<a){o.disabled=!0,t&&b.error({message:"Please choose a date in the future!",position:"topRight",timeout:2e3});return}},y=function(e){d.disabled=!0,o.disabled=!0;let t=setInterval(function(){const n=new Date,a=e.getTime()-n.getTime(),i=v(a);if(D(i),Object.values(i).every(c=>c===0)){clearInterval(t),d.value="";return}},1e3)},r=function(e){let t=2;return e>100&&(t=3),String(e).padStart(t,"0")},D=function(e){document.querySelector(".value[data-days]").innerHTML=r(e.days),document.querySelector(".value[data-hours]").innerHTML=r(e.hours),document.querySelector(".value[data-minutes]").innerHTML=r(e.minutes),document.querySelector(".value[data-seconds]").innerHTML=r(e.seconds)},v=function(e){const m=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),S=Math.floor(e%864e5%36e5/6e4),T=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:c,minutes:S,seconds:T}},u=new Date,d=document.getElementById("datetime-picker"),o=document.getElementById("btn-start");o.addEventListener("click",function(){y(u)});const s={enableTime:!0,enableSeconds:!0,dateFormat:"Y-m-d H:i:S",onChange:function(e,t,n){l(t)},onClose:function(e,t,n){l(t,!0)}};let h=f("#datetime-picker",s);setInterval(function(){s.defaultDate=new Date,f("#datetime-text",s)},1e3)}
//# sourceMappingURL=1-timer-ddd17378.js.map
