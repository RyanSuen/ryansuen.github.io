(function(e){if(typeof e.monitor!="undefined")return;var t="V1.3.0(2014.05.06)",n="360.cn",r=document,i=navigator,s=e.screen,o=document.domain.toLowerCase(),u=i.userAgent.toLowerCase(),a={isObject:function(e){return e!==null&&typeof e=="object"},mix:function(e,t,n){for(var r in t)if(n||!(e[r]||r in e))e[r]=t[r];return e},encodeURIJson:function(e){var t=[];for(var n in e){if(e[n]==null)continue;t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]))}return t.join("&")}},f={get:function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=r.cookie.match(n))?unescape(t[2]):""},set:function(e,t,n){n=n||{};var i=n.expires;typeof i=="number"&&(i=new Date,i.setTime(i.getTime()+n.expires)),r.cookie=e+"="+escape(t)+(i?";expires="+i.toGMTString():"")+(n.path?";path="+n.path:"")+(n.domain?"; domain="+n.domain:"")}},l={getReferrer:function(){return r.referrer},getBrowser:function(){var t={"360SE":"360se","360EE":"360ee",TT:"tencenttraveler",Maxthon:"maxthon",GreenBrowser:"greenbrowser",Sogou:"se 2.x",TheWorld:"theworld"};for(var n in t)if(u.indexOf(t[n])>-1)return n;var r=!1;try{+external.twGetVersion(external.twGetSecurityID(e)).replace(/\./g,"")>1013&&(r=!0)}catch(i){}if(r)return"360SE-noua";if(u.indexOf("trident")>-1&&/trident\/[0-9].*rv[ :]([0-9.]+)/.test(u))return"msie-"+RegExp.$1;var s=["chrome","safari","firefox","opera"];for(var n=0;n<4;n++)if(u.indexOf(s[n])>-1)return s[n];return/(msie[^;]+)/.test(u)?RegExp.$1.replace(/ /g,"-"):"unkown"},getLocation:function(){var t="";return function(){if(t)return t;if(e.monitorConfig&&monitorConfig.pageUrl)t=monitorConfig.pageUrl;else{try{t=location.href}catch(n){t=r.createElement("a"),t.href="",t=t.href}t=t.replace(/[?#].*$/,"").replace(/http:\/\/(\w|\.)*?([a-z]+)\d*\.yunpan/i,"http://$2.yunpan")}return t}}(),getGuid:function(){function t(e){var t=0,n=0,r=e.length-1;for(r;r>=0;r--){var i=parseInt(e.charCodeAt(r),10);t=(t<<6&268435455)+i+(i<<14),(n=t&266338304)!=0&&(t^=n>>21)}return t}function u(){var n=[i.appName,i.version,i.language||i.browserLanguage,i.platform,i.userAgent,s.width,"x",s.height,s.colorDepth,r.referrer].join(""),o=n.length,u=e.history.length;while(u)n+=u--^o++;return(Math.round(Math.random()*2147483647)^t(n))*2147483647}var a="__guid",l=f.get(a);if(!l){l=[t(r.domain),u(),+(new Date)+Math.random()+Math.random()].join(".");var c={expires:2592e7,path:"/"};if(n){var h="."+n;if(o.indexOf(h)>0&&o.lastIndexOf(h)==o.length-h.length||o==h)c.domain=h}f.set(a,l,c)}return function(){return l}}(),getCount:function(){var e="count",t=f.get(e);return t=(parseInt(t)||0)+1,f.set(e,t,{expires:864e5,path:"/"}),function(){return t}}()},c={trackUrl:"http://s.360.cn/yunpan/puv.htm",clickUrl:"http://s.360.cn/yunpan/click.htm",wpoUrl:"http://s.360.cn/fe/p.htm",btnUrl:"http://s.360.cn/yunpan/webclick.html"},h={sendLog:function(){return e.__monitor_imgs={},function(t){var n="log_"+ +(new Date),r=e.__monitor_imgs[n]=new Image;r.onload=r.onerror=function(){e.__monitor_imgs[n]=null,delete e.__monitor_imgs[n]},r.src=t}}(),buildLog:function(){var e="";return function(t,n){if(t===!1)return;t=t||{};var r={u:l.getLocation(),id:l.getGuid()};t=a.mix(r,t,!0);var i=n+a.encodeURIJson(t);if(i==e)return;e=i,setTimeout(function(){e=""},500);var s=a.encodeURIJson(t);s+="&t="+ +(new Date),n+="?"+s,this.sendLog(n)}}(),log:function(e,t){t=t||"click";var n=c[t+"Url"];if(!n)return;this.buildLog(e,n)},getTrack:function(){var e={b:l.getBrowser(),c:l.getCount(),r:l.getReferrer()};return this.log(e,"track"),this}},p={version:t,log:function(e,t){h.log(e,t)},clickLog:function(e,t){h.log({c:e,cId:t||"normal"},"click")},tlog:function(e){e=a.mix({m:"all",a:"log"},e,!0),h.log(e,"click")},btnLog:function(e){h.log({buttonid:e},"btn")},yplog:function(){}};e.monitor=p,h.getTrack()})(window);