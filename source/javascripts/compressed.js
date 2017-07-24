jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-.5*(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*(((f*=1.525)+1)*b-f))+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),!function(a){a.introLoader=function(b,c){var d={animation:{name:"simpleLoader",options:{exitFx:"fadeOut",ease:"linear",style:"light",delayBefore:500,delayAfter:0,exitTime:300,animationTime:300,customGif:!1,customGifBgColor:!1,progbarTime:300,progbarDelayAfter:300,loaderText:"Website is Ready!",lettersDelayTime:1,preventScroll:!1,fixed:!0,stop:!0,onAfter:function(){},onBefore:function(){}}},spinJs:{}},e=this;e.settings={};var b=(a(b),b);e.init=function(){e.settings=a.extend(!0,d,c);var g={lines:this.settings.spinJs.lines,length:this.settings.spinJs.length,width:this.settings.spinJs.width,radius:this.settings.spinJs.radius,corners:this.settings.spinJs.corners,rotate:this.settings.spinJs.rotate,direction:this.settings.spinJs.direction,color:this.settings.spinJs.color,speed:this.settings.spinJs.speed,trail:this.settings.spinJs.trail,shadow:this.settings.spinJs.shadow,hwaccel:this.settings.spinJs.hwaccel,className:this.settings.spinJs.className,zIndex:this.settings.spinJs.zIndex,top:this.settings.spinJs.top,left:this.settings.spinJs.left},i=e.settings.animation.name,k=e.settings.animation.options,g=e.settings.spinJs;switch(i){case"simpleLoader":e.spinner=new Spinner(g).spin(),j(b,k,g);break;case"doubleLoader":l(b,k);break;case"lettersLoader":e.spinner=new Spinner(g).spin(),n(b,k,g);break;case"counterLoader":e.spinner=new Spinner(g).spin(),p(b,k,g);break;case"gifLoader":h(b,k);break;case"cssLoader":f(b,k);break;default:e.spinner=new Spinner(g).spin(),j(b,k,g)}},e.stop=function(){switch(e.settings.animation.name){case"simpleLoader":k();break;case"doubleLoader":m();break;case"lettersLoader":o();break;case"counterLoader":q();break;case"gifLoader":i();break;case"cssLoader":g()}},e.destroy=function(){a(b).removeData()};var f=function(b,c){c.onBefore(),r(b,c,"cssLoader");var d="";d+='<div class="cssLoaderSpinner">',d+='   <div class="cssLoaderSpinner-inner"></div>',d+="</div>",a(b).html(d),a(b).show(),c.stop===!0&&a(window).on("load",function(){g()})},g=function(){var a=e.settings.animation.options;s(a,!1)},h=function(b,c){c.onBefore(),r(b,c,"gifLoader");var d="";0!=c.customGif&&""!=c.customGif&&(d="background-image: url("+c.customGif+");"),d+=0!=c.customGif&&""!=c.customGif&&0!=c.customGifBgColor&&""!=c.customGifBgColor?"background-color:"+c.customGifBgColor+";":"";var e="";e+='<div id="introLoaderSpinner" class="gifLoaderInner" style="'+d+'">',e+="</div>",a(b).html(e),a(b).show(),c.stop===!0&&a(window).on("load",function(){i()})},i=function(){var a=e.settings.animation.options;s(a,!1)},j=function(b,c,d){c.onBefore(),r(b,c,"simpleLoader");var f="";f+='<div id="introLoaderSpinner" class="introLoaderInner">',f+="</div>",a(b).html(f),a(b).show();var g=document.getElementById("introLoaderSpinner");e.spinner.spin(g),c.stop===!0&&a(window).on("load",function(){k()})},k=function(){var a=e.settings.animation.options;s(a,!0)},l=function(b,c){c.onBefore(),r(b,c,"doubleLoader");var d="";d+='<div class="doubleLoaderTop"></div>',d+='<div class="doubleLoaderBottom"></div>',d+='<div class="doubleLoaderProgBar"><span></span></div>',a(b).html(d),a(b).show(),c.stop===!0&&a(window).on("load",function(){m()})},m=function(){function c(){setTimeout(function(){a(b).find(".doubleLoaderProgBar").hide(),a(b).find(".doubleLoaderTop, .doubleLoaderBottom").animate({height:0},d.exitTime,d.ease,function(){a(b).hide(),d.preventScroll===!0&&a("body").removeClass("introLoader_preventScroll")}),a(".doubleLoaderBottom").promise().done(function(){d.onAfter()})},d.progbarTime+d.progbarDelayAfter)}var d=e.settings.animation.options;setTimeout(function(){a(b).find(".doubleLoaderProgBar").find("span").animate({width:"100%"},d.progbarTime,d.ease,c())},d.delayBefore)},n=function(b,c,d){c.onBefore(),r(b,c,"lettersLoader");var f=t(c.loaderText,"lettersLoaderItem"),g="";g+='<div id="introLoaderSpinner" class="introLoaderInner"></div>',g+='<div id="lettersLoaderAnimation" class="lettersLoaderRow">',g+=f,g+="</div>",a(b).html(g),a(b).show();var h=document.getElementById("introLoaderSpinner");e.spinner.spin(h),c.stop===!0&&a(window).on("load",function(){o()})},o=function(){var c=e.settings.animation.options;setTimeout(function(){e.spinner.stop(),a(b).find(".lettersLoaderRow").show();var d=a(b).find(".lettersLoaderItem");d.each(function(b){var d=this;a(d).animate({opacity:1},c.animationTime*(b+c.lettersDelayTime),c.ease)}),d.promise().done(function(){c.delayBefore=c.delayAfter,s(c,!1)})},c.delayBefore)},p=function(b,c){c.onBefore(),r(b,c,"counterLoader");var d="";d+='<div class="counterLoaderBox">',d+='   <span id="counterLoader" class="counterLoader number">0</span><span class="counterLoader percent">%</span>',d+="</div>",a(b).html(d),a(b).show(),c.stop===!0&&a(window).on("load",function(){q()})},q=function(){var c=e.settings.animation.options;setTimeout(function(){a(b).find(".counterLoaderBox").fadeIn(),a(b).find(".counterLoaderBox").promise().done(function(){jQuery({Counter:0}).animate({Counter:100},{duration:c.animationTime,easing:"swing",step:function(){a("#counterLoader").text(Math.ceil(this.Counter))},done:function(){c.delayBefore=c.delayAfter,s(c,!1)}})})},c.delayBefore)},r=function(b,c,d){c.preventScroll===!0&&a("body").addClass("introLoader_preventScroll");var e="theme-"+c.style;c.fixed===!1&&(a(b).addClass("absolute"),a(b).parent().css({position:"relative",overflow:"hidden"})),a(b).addClass("introLoader "+d+" "+e)},s=function(c,d){setTimeout(function(){switch(c.exitFx){case"fadeOut":a(b).fadeOut(c.exitTime,c.ease,function(){d===!0&&a("#introLoaderSpinner").remove(),c.preventScroll===!0&&a("body").removeClass("introLoader_preventScroll"),c.onAfter()});break;case"slideUp":d===!0&&e.spinner.stop(),a(b).animate({bottom:a(window).height()},c.exitTime,c.ease,function(){a(b).hide(),a("#introLoaderSpinner").remove(),c.preventScroll===!0&&a("body").removeClass("introLoader_preventScroll"),c.onAfter()});break;case"slideDown":d===!0&&e.spinner.stop(),a(b).animate({top:a(window).height()},c.exitTime,c.ease,function(){a(b).hide(),a("#introLoaderSpinner").remove(),c.preventScroll===!0&&a("body").removeClass("introLoader_preventScroll"),c.onAfter()});break;case"slideLeft":d===!0&&e.spinner.stop(),a(b).animate({right:a(window).width(),left:"-100%"},c.exitTime,c.ease,function(){a(b).hide(),a("#introLoaderSpinner").remove(),c.preventScroll===!0&&a("body").removeClass("introLoader_preventScroll"),c.onAfter()});break;case"slideRight":d===!0&&e.spinner.stop(),a(b).animate({left:a(window).width(),right:"-100%"},c.exitTime,c.ease,function(){a(b).hide(),a("#introLoaderSpinner").remove(),c.preventScroll===!0&&a("body").removeClass("introLoader_preventScroll"),c.onAfter()});break;default:a(b).fadeOut(c.exitTime,c.ease,function(){d===!0&&a("#introLoaderSpinner").remove(),c.preventScroll===!0&&a("body").removeClass("introLoader_preventScroll"),c.onAfter()})}},c.delayBefore)},t=function(a,b){for(var c=a.split(""),d="",e=0;e<c.length;e++){var f=b;" "==c[e]&&(f=b+"-space",c[e]=" "),d+='<span class="'+f+'">'+c[e]+"</span>"}return d};e.init()},a.fn.introLoader=function(b){return this.each(function(){if(void 0==a(this).data("introLoader")){var c=new a.introLoader(this,b);a(this).data("introLoader",c)}else{a(this).removeData("introLoader");var c=new a.introLoader(this,b);a(this).data("introLoader",c)}})}}(jQuery),!function(a,b,c){function d(b,c){this.element=b,this.settings=a.extend({},e,c),this._defaults=e,this._name=f,this.init()}var e={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!1,removeClasses:!1,removeStyles:!1,brand:"",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},f="slicknav",g="slicknav";d.prototype.init=function(){var c,d,e=this,f=a(this.element),h=this.settings;if(h.duplicate?(e.mobileNav=f.clone(),e.mobileNav.removeAttr("id"),e.mobileNav.find("*").each(function(b,c){a(c).removeAttr("id")})):(e.mobileNav=f,e.mobileNav.removeAttr("id"),e.mobileNav.find("*").each(function(b,c){a(c).removeAttr("id")})),h.removeClasses&&(e.mobileNav.removeAttr("class"),e.mobileNav.find("*").each(function(b,c){a(c).removeAttr("class")})),h.removeStyles&&(e.mobileNav.removeAttr("style"),e.mobileNav.find("*").each(function(b,c){a(c).removeAttr("style")})),c=g+"_icon",""===h.label&&(c+=" "+g+"_no-text"),"a"==h.parentTag&&(h.parentTag='a href="#"'),e.mobileNav.attr("class",g+"_nav"),d=a('<div class="'+g+'_menu"></div>'),""!==h.brand){var i=a('<div class="'+g+'_brand">'+h.brand+"</div>");a(d).append(i)}e.btn=a(["<"+h.parentTag+' aria-haspopup="true" tabindex="0" class="'+g+"_btn "+g+'_collapsed">','<span class="'+g+'_menutxt">'+h.label+"</span>",'<span class="'+c+'">','<span class="'+g+'_icon-bar"></span>','<span class="'+g+'_icon-bar"></span>','<span class="'+g+'_icon-bar"></span>',"</span>","</"+h.parentTag+">"].join("")),a(d).append(e.btn),""!==h.appendTo?a(h.appendTo).append(d):a(h.prependTo).prepend(d),d.append(e.mobileNav);var j=e.mobileNav.find("li");a(j).each(function(){var b=a(this),c={};if(c.children=b.children("ul").attr("role","menu"),b.data("menu",c),c.children.length>0){var d=b.contents(),f=!1,i=[];a(d).each(function(){return!a(this).is("ul")&&(i.push(this),void(a(this).is("a")&&(f=!0)))});var j=a("<"+h.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+g+'_item"/>');if(h.allowParentLinks&&!h.nestedParentLinks&&f)a(i).wrapAll('<span class="'+g+"_parent-link "+g+'_row"/>').parent();else{var k=a(i).wrapAll(j).parent();k.addClass(g+"_row")}h.showChildren?b.addClass(g+"_open"):b.addClass(g+"_collapsed"),b.addClass(g+"_parent");var l=a('<span class="'+g+'_arrow">'+(h.showChildren?h.openedSymbol:h.closedSymbol)+"</span>");h.allowParentLinks&&!h.nestedParentLinks&&f&&(l=l.wrap(j).parent()),a(i).last().after(l)}else 0===b.children().length&&b.addClass(g+"_txtnode");b.children("a").attr("role","menuitem").click(function(b){h.closeOnClick&&!a(b.target).parent().closest("li").hasClass(g+"_parent")&&a(e.btn).click()}),h.closeOnClick&&h.allowParentLinks&&(b.children("a").children("a").click(function(b){a(e.btn).click()}),b.find("."+g+"_parent-link a:not(."+g+"_item)").click(function(b){a(e.btn).click()}))}),a(j).each(function(){var b=a(this).data("menu");h.showChildren||e._visibilityToggle(b.children,null,!1,null,!0)}),e._visibilityToggle(e.mobileNav,null,!1,"init",!0),e.mobileNav.attr("role","menu"),a(b).mousedown(function(){e._outlines(!1)}),a(b).keyup(function(){e._outlines(!0)}),a(e.btn).click(function(a){a.preventDefault(),e._menuToggle()}),e.mobileNav.on("click","."+g+"_item",function(b){b.preventDefault(),e._itemClick(a(this))}),a(e.btn).keydown(function(a){var b=a||event;13==b.keyCode&&(a.preventDefault(),e._menuToggle())}),e.mobileNav.on("keydown","."+g+"_item",function(b){var c=b||event;13==c.keyCode&&(b.preventDefault(),e._itemClick(a(b.target)))}),h.allowParentLinks&&h.nestedParentLinks&&a("."+g+"_item a").click(function(a){a.stopImmediatePropagation()})},d.prototype._menuToggle=function(a){var b=this,c=b.btn,d=b.mobileNav;c.hasClass(g+"_collapsed")?(c.removeClass(g+"_collapsed"),c.addClass(g+"_open")):(c.removeClass(g+"_open"),c.addClass(g+"_collapsed")),c.addClass(g+"_animating"),b._visibilityToggle(d,c.parent(),!0,c)},d.prototype._itemClick=function(a){var b=this,c=b.settings,d=a.data("menu");d||(d={},d.arrow=a.children("."+g+"_arrow"),d.ul=a.next("ul"),d.parent=a.parent(),d.parent.hasClass(g+"_parent-link")&&(d.parent=a.parent().parent(),d.ul=a.parent().next("ul")),a.data("menu",d)),d.parent.hasClass(g+"_collapsed")?(d.arrow.html(c.openedSymbol),d.parent.removeClass(g+"_collapsed"),d.parent.addClass(g+"_open"),d.parent.addClass(g+"_animating"),b._visibilityToggle(d.ul,d.parent,!0,a)):(d.arrow.html(c.closedSymbol),d.parent.addClass(g+"_collapsed"),d.parent.removeClass(g+"_open"),d.parent.addClass(g+"_animating"),b._visibilityToggle(d.ul,d.parent,!0,a))},d.prototype._visibilityToggle=function(b,c,d,e,f){var h=this,i=h.settings,j=h._getActionItems(b),k=0;d&&(k=i.duration),b.hasClass(g+"_hidden")?(b.removeClass(g+"_hidden"),f||i.beforeOpen(e),b.slideDown(k,i.easingOpen,function(){a(e).removeClass(g+"_animating"),a(c).removeClass(g+"_animating"),f||i.afterOpen(e)}),b.attr("aria-hidden","false"),j.attr("tabindex","0"),h._setVisAttr(b,!1)):(b.addClass(g+"_hidden"),f||i.beforeClose(e),b.slideUp(k,this.settings.easingClose,function(){b.attr("aria-hidden","true"),j.attr("tabindex","-1"),h._setVisAttr(b,!0),b.hide(),a(e).removeClass(g+"_animating"),a(c).removeClass(g+"_animating"),f?"init"==e&&i.init():i.afterClose(e)}))},d.prototype._setVisAttr=function(b,c){var d=this,e=b.children("li").children("ul").not("."+g+"_hidden");c?e.each(function(){var b=a(this);b.attr("aria-hidden","true");var e=d._getActionItems(b);e.attr("tabindex","-1"),d._setVisAttr(b,c)}):e.each(function(){var b=a(this);b.attr("aria-hidden","false");var e=d._getActionItems(b);e.attr("tabindex","0"),d._setVisAttr(b,c)})},d.prototype._getActionItems=function(a){var b=a.data("menu");if(!b){b={};var c=a.children("li"),d=c.find("a");b.links=d.add(c.find("."+g+"_item")),a.data("menu",b)}return b.links},d.prototype._outlines=function(b){b?a("."+g+"_item, ."+g+"_btn").css("outline",""):a("."+g+"_item, ."+g+"_btn").css("outline","none")},d.prototype.toggle=function(){var a=this;a._menuToggle()},d.prototype.open=function(){var a=this;a.btn.hasClass(g+"_collapsed")&&a._menuToggle()},d.prototype.close=function(){var a=this;a.btn.hasClass(g+"_open")&&a._menuToggle()},a.fn[f]=function(b){var c=arguments;if(void 0===b||"object"==typeof b)return this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new d(this,b))});if("string"==typeof b&&"_"!==b[0]&&"init"!==b){var e;return this.each(function(){var g=a.data(this,"plugin_"+f);g instanceof d&&"function"==typeof g[b]&&(e=g[b].apply(g,Array.prototype.slice.call(c,1)))}),void 0!==e?e:this}}}(jQuery,document,window),!function(){"use strict";function a(d){if(!d)throw new Error("No options passed to Waypoint constructor");if(!d.element)throw new Error("No element option passed to Waypoint constructor");if(!d.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+b,this.options=a.Adapter.extend({},a.defaults,d),this.element=this.options.element,this.adapter=new a.Adapter(this.element),this.callback=d.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=a.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=a.Context.findOrCreateByElement(this.options.context),a.offsetAliases[this.options.offset]&&(this.options.offset=a.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),c[this.key]=this,b+=1}var b=0,c={};a.prototype.queueTrigger=function(a){this.group.queueTrigger(this,a)},a.prototype.trigger=function(a){this.enabled&&this.callback&&this.callback.apply(this,a)},a.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete c[this.key]},a.prototype.disable=function(){return this.enabled=!1,this},a.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},a.prototype.next=function(){return this.group.next(this)},a.prototype.previous=function(){return this.group.previous(this)},a.invokeAll=function(a){var b=[];for(var d in c)b.push(c[d]);for(var e=0,f=b.length;f>e;e++)b[e][a]()},a.destroyAll=function(){a.invokeAll("destroy")},a.disableAll=function(){a.invokeAll("disable")},a.enableAll=function(){a.invokeAll("enable")},a.refreshAll=function(){a.Context.refreshAll()},a.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},a.viewportWidth=function(){return document.documentElement.clientWidth},a.adapters=[],a.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},a.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=a}(),function(){"use strict";function a(a){window.setTimeout(a,1e3/60)}function b(a){this.element=a,this.Adapter=e.Adapter,this.adapter=new this.Adapter(a),this.key="waypoint-context-"+c,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},a.waypointContextKey=this.key,d[a.waypointContextKey]=this,c+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var c=0,d={},e=window.Waypoint,f=window.onload;b.prototype.add=function(a){var b=a.options.horizontal?"horizontal":"vertical";this.waypoints[b][a.key]=a,this.refresh()},b.prototype.checkEmpty=function(){var a=this.Adapter.isEmptyObject(this.waypoints.horizontal),b=this.Adapter.isEmptyObject(this.waypoints.vertical);a&&b&&(this.adapter.off(".waypoints"),delete d[this.key])},b.prototype.createThrottledResizeHandler=function(){function a(){b.handleResize(),b.didResize=!1}var b=this;this.adapter.on("resize.waypoints",function(){b.didResize||(b.didResize=!0,e.requestAnimationFrame(a))})},b.prototype.createThrottledScrollHandler=function(){function a(){b.handleScroll(),b.didScroll=!1}var b=this;this.adapter.on("scroll.waypoints",function(){(!b.didScroll||e.isTouch)&&(b.didScroll=!0,e.requestAnimationFrame(a))})},b.prototype.handleResize=function(){e.Context.refreshAll()},b.prototype.handleScroll=function(){var a={},b={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var c in b){var d=b[c],e=d.newScroll>d.oldScroll,f=e?d.forward:d.backward;for(var g in this.waypoints[c]){var h=this.waypoints[c][g],i=d.oldScroll<h.triggerPoint,j=d.newScroll>=h.triggerPoint,k=i&&j,l=!i&&!j;(k||l)&&(h.queueTrigger(f),a[h.group.id]=h.group)}}for(var m in a)a[m].flushTriggers();this.oldScroll={x:b.horizontal.newScroll,y:b.vertical.newScroll}},b.prototype.innerHeight=function(){return this.element==this.element.window?e.viewportHeight():this.adapter.innerHeight()},b.prototype.remove=function(a){delete this.waypoints[a.axis][a.key],this.checkEmpty()},b.prototype.innerWidth=function(){return this.element==this.element.window?e.viewportWidth():this.adapter.innerWidth()},b.prototype.destroy=function(){var a=[];for(var b in this.waypoints)for(var c in this.waypoints[b])a.push(this.waypoints[b][c]);for(var d=0,e=a.length;e>d;d++)a[d].destroy()},b.prototype.refresh=function(){var a,b=this.element==this.element.window,c=this.adapter.offset(),d={};this.handleScroll(),a={horizontal:{contextOffset:b?0:c.left,contextScroll:b?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:b?0:c.top,contextScroll:b?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var e in a){var f=a[e];for(var g in this.waypoints[e]){var h,i,j,k,l,m=this.waypoints[e][g],n=m.options.offset,o=m.triggerPoint,p=0,q=null==o;m.element!==m.element.window&&(p=m.adapter.offset()[f.offsetProp]),"function"==typeof n?n=n.apply(m):"string"==typeof n&&(n=parseFloat(n),m.options.offset.indexOf("%")>-1&&(n=Math.ceil(f.contextDimension*n/100))),h=f.contextScroll-f.contextOffset,m.triggerPoint=p+h-n,i=o<f.oldScroll,j=m.triggerPoint>=f.oldScroll,k=i&&j,l=!i&&!j,!q&&k?(m.queueTrigger(f.backward),d[m.group.id]=m.group):!q&&l?(m.queueTrigger(f.forward),d[m.group.id]=m.group):q&&f.oldScroll>=m.triggerPoint&&(m.queueTrigger(f.forward),d[m.group.id]=m.group)}}for(var r in d)d[r].flushTriggers();return this},b.findOrCreateByElement=function(a){return b.findByElement(a)||new b(a)},b.refreshAll=function(){for(var a in d)d[a].refresh()},b.findByElement=function(a){return d[a.waypointContextKey]},window.onload=function(){f&&f(),b.refreshAll()},e.requestAnimationFrame=function(b){var c=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||a;c.call(window,b)},e.Context=b}(),function(){"use strict";function a(a,b){return a.triggerPoint-b.triggerPoint}function b(a,b){return b.triggerPoint-a.triggerPoint}function c(a){this.name=a.name,this.axis=a.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),d[this.axis][this.name]=this}var d={vertical:{},horizontal:{}},e=window.Waypoint;c.prototype.add=function(a){this.waypoints.push(a)},c.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},c.prototype.flushTriggers=function(){for(var c in this.triggerQueues){var d=this.triggerQueues[c],e="up"===c||"left"===c;d.sort(e?b:a);for(var f=0,g=d.length;g>f;f+=1){var h=d[f];(h.options.continuous||f===d.length-1)&&h.trigger([c])}}this.clearTriggerQueues()},c.prototype.next=function(b){this.waypoints.sort(a);var c=e.Adapter.inArray(b,this.waypoints),d=c===this.waypoints.length-1;return d?null:this.waypoints[c+1]},c.prototype.previous=function(b){this.waypoints.sort(a);var c=e.Adapter.inArray(b,this.waypoints);return c?this.waypoints[c-1]:null},c.prototype.queueTrigger=function(a,b){this.triggerQueues[b].push(a)},c.prototype.remove=function(a){var b=e.Adapter.inArray(a,this.waypoints);b>-1&&this.waypoints.splice(b,1)},c.prototype.first=function(){return this.waypoints[0]},c.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},c.findOrCreate=function(a){return d[a.axis][a.name]||new c(a)},e.Group=c}(),function(){"use strict";function a(a){this.$element=b(a)}var b=window.jQuery,c=window.Waypoint;b.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(b,c){a.prototype[c]=function(){var a=Array.prototype.slice.call(arguments);return this.$element[c].apply(this.$element,a)}}),b.each(["extend","inArray","isEmptyObject"],function(c,d){a[d]=b[d]}),c.adapters.push({name:"jquery",Adapter:a}),c.Adapter=a}(),function(){"use strict";function a(a){return function(){var c=[],d=arguments[0];return a.isFunction(arguments[0])&&(d=a.extend({},arguments[1]),d.handler=arguments[0]),this.each(function(){var e=a.extend({},d,{element:this});"string"==typeof e.context&&(e.context=a(this).closest(e.context)[0]),c.push(new b(e))}),c}}var b=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=a(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=a(window.Zepto))}();