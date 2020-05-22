;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="585d8bca48c7b332f9c1b687ac70bdd0";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["co85vT4yphaJ"]={appId:"0VJ1mCYqPTh4",scope:{}};;CloudflareApps.installs["co85vT4yphaJ"].options={"color":{"custom":"#666666","strategy":"automatic"},"position":{"value":"bottom-right"},"shape":{"icon":"fancy","radius":0.16,"showBackground":true}};;CloudflareApps.installs["woOr04b3umxi"]={appId:"VKFmubmShtXS",scope:{}};;CloudflareApps.installs["woOr04b3umxi"].options={"account":{"accountId":"DQMBqjRcvGDf","service":"shareaholic","userId":5220610},"siteId":"59d70834fbc0c82c12b9f87a1c42caba"};;CloudflareApps.installs["xWnP4t5Rnjkd"]={appId:"MVNZ0q2GLRR4",scope:{}};;CloudflareApps.installs["xWnP4t5Rnjkd"].options={"account":{"accountId":"tkzjGLrZwdSH","service":"agile-seo2","userId":2124},"apiTokens":["IKAoPXpjdxkBuhU"],"hash":"585d8bca48c7b332f9c1b687ac70bdd0","settings":[{"encoding":null,"id":1914,"url_exclusion_path":"","url_path":"https://learnthings.online/*"}],"subdomain_toggle":false};;CloudflareApps.installs["ySJUNbMapCwQ"]={appId:"5WU-5JC_CQYe",scope:{}};;CloudflareApps.installs["ySJUNbMapCwQ"].options={"cloudname":"learnthings"};;CloudflareApps.installs["ySJUNbMapCwQ"].product={"id":"image4io"};;if(CloudflareApps.matchPage(CloudflareApps.installs['ySJUNbMapCwQ'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['ySJUNbMapCwQ'].options;var initialized=false;function mainFetchUrl(){var origin=new URL(window.location.origin);var protocol='';if(origin.protocol!='https:'){protocol='http://';}
else{protocol='https://';}
var fetch=new URL(protocol+'cdn.image4.io/'+options.cloudname+'/fetch/f_auto/');return fetch;}
function imageUrl(src){var absoluteRegex=new RegExp('^(?:[a-z]+:)?\/\/.*\.(jpg|png|jpeg|webp)$','i');var relativeRegex=new RegExp('^(?:[\.]{0,2})?\/{0,2}.*\.(jpg|png|jpeg|webp)$','i');if(absoluteRegex.test(src)){return new URL(src);}
else if(relativeRegex.test(src)){var url=new URL(src,new URL(window.location.origin));return url;}}
function updateElements(){if(options&&options.cloudname){var imgs=document.getElementsByTagName("img");var fetch=mainFetchUrl();for(var i=0;i<imgs.length;i++){if(imgs[i].dataset.src){var url=imageUrl(imgs[i].dataset.src);imgs[i].src=fetch.href+url.href;}}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){if(initialized==false){initialized=true;updateElements();}})}else{updateElements()}
window.CloudflareApps.installs['ySJUNbMapCwQ'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['woOr04b3umxi'].URLPatterns)){(function(){var options=CloudflareApps.installs['woOr04b3umxi'].options;var isPreview="woOr04b3umxi"=="preview";if(isPreview){if(!options.siteId){options.siteId='d66d1e26c0f1f07ba8e3709578a8e11a';}}
if(!options.siteId){return;}
var setOptions=function(opts){options=opts;};var shr=document.createElement('script');shr.setAttribute('data-cfasync','false');shr.src='https://apps.shareaholic.com/assets/pub/shareaholic.js';shr.type='text/javascript';shr.async='true';shr.onload=shr.onreadystatechange=function(){var rs=this.readyState;if(rs&&rs!='complete'&&rs!='loaded')return;try{Shareaholic.init(options.siteId);}catch(e){}};var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(shr,s);CloudflareApps.installs['woOr04b3umxi'].scope={setOptions:setOptions};})();}(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/FeWf41H4miD0XWa1X88Z-qOuwN8.js';document.head.appendChild(script);})();