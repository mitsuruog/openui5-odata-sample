/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/Object','./Locale','sap/ui/thirdparty/URI'],function(q,B,L,U){"use strict";var C=B.extend("sap.ui.core.Configuration",{constructor:function(o){this._oCore=o;function f(){var e;if(!!sap.ui.Device.os.android){e=navigator.userAgent.match(/\s([a-z]{2}-[a-z]{2})[;)]/i);if(e){return e[1]}}return navigator.language||navigator.userLanguage||navigator.browserLanguage}var g={"theme":{type:"string",defaultValue:"base"},"language":{type:"string",defaultValue:f()},"formatLocale":{type:"string",defaultValue:null},"accessibility":{type:"boolean",defaultValue:true},"animation":{type:"boolean",defaultValue:true},"rtl":{type:"boolean",defaultValue:null},"debug":{type:"boolean",defaultValue:false},"inspect":{type:"boolean",defaultValue:false},"originInfo":{type:"boolean",defaultValue:false},"noConflict":{type:"boolean",defaultValue:false,noUrl:true},"noDuplicateIds":{type:"boolean",defaultValue:true},"trace":{type:"boolean",defaultValue:false,noUrl:true},"modules":{type:"string[]",defaultValue:[],noUrl:true},"areas":{type:"string[]",defaultValue:null,noUrl:true},"onInit":{type:"code",defaultValue:undefined,noUrl:true},"uidPrefix":{type:"string",defaultValue:"__",noUrl:true},"ignoreUrlParams":{type:"boolean",defaultValue:false,noUrl:true},"weinreServer":{type:"string",defaultValue:"",noUrl:true},"weinreId":{type:"string",defaultValue:""},"preload":{type:"string",defaultValue:"auto"},"rootComponent":{type:"string",defaultValue:"",noUrl:true},"xx-rootComponentNode":{type:"string",defaultValue:"",noUrl:true},"application":{type:"string",defaultValue:""},"appCacheBuster":{type:"string[]",defaultValue:[]},"xx-appCacheBusterMode":{type:"string",defaultValue:"sync"},"xx-disableCustomizing":{type:"boolean",defaultValue:false,noUrl:true},"xx-loadAllMode":{type:"boolean",defaultValue:false,noUrl:true},"xx-test-mobile":{type:"boolean",defaultValue:false},"xx-preloadLibCss":{type:"string[]",defaultValue:[]},"xx-componentPreload":{type:"string",defaultValue:""},"xx-bindingSyntax":{type:"string",defaultValue:"simple",noUrl:true},"xx-designMode":{type:"boolean",defaultValue:false},"xx-accessibilityMode":{type:"boolean",defaultValue:false},"xx-supportedLanguages":{type:"string[]",defaultValue:[]},"xx-bootTask":{type:"function",defaultValue:undefined,noUrl:true},"xx-suppressDeactivationOfControllerCode":{type:"boolean",defaultValue:false},"xx-noNativeScroll":{type:"boolean",defaultValue:false},"statistics":{type:"boolean",defaultValue:false}};var h={"xx-test":"1.15","flexBoxPolyfill":"1.14","sapMeTabContainer":"1.14","sapMeProgessIndicator":"1.14","sapMGrowingList":"1.14","sapMListAsTable":"1.14","sapMDialogWithPadding":"1.14"};this.oFormatSettings=new C.FormatSettings(this);var i=this;function s(N,V){if(typeof V==="undefined"||V===null){return}switch(g[N].type){case"boolean":if(typeof V==="string"){if(g[N].defaultValue){i[N]=V.toLowerCase()!="false"}else{i[N]=V.toLowerCase()==="true"||V.toLowerCase()==="x"}}else{i[N]=!!V}break;case"string":i[N]=""+V;break;case"code":i[N]=typeof V==="function"?V:String(V);break;case"function":if(typeof V!=="function"){throw new Error("unsupported value")}i[N]=V;break;case"string[]":if(q.isArray(V)){i[N]=V}else if(typeof V==="string"){i[N]=q.map(V.split(/[ ,;]/),function($){return q.trim($)})}else{throw new Error("unsupported value")}break;default:throw new Error("illegal state")}}function j(T){var v,w;try{v=new URI(T,window.location.href).normalize();w=v.path();return w+(w.slice(-1)==='/'?'':'/')+"UI5/"}catch(e){}}for(var n in g){i[n]=g[n].defaultValue}var k=window["sap-ui-config"]||{};k.oninit=k.oninit||k["evt-oninit"];for(var n in g){s(n,k[n.toLowerCase()])}if(k.libs){i.modules=q.map(k.libs.split(","),function($){return q.trim($)+".library"}).concat(i.modules)}var P="compatversion";var D=k[P];var l=q.sap.Version("1.14");this._compatversion={};function _(e){var v=!e?D||l.toString():k[P+"-"+e.toLowerCase()]||D||h[e]||l.toString();v=q.sap.Version(v.toLowerCase()==="edge"?sap.ui.version:v);return q.sap.Version(v.getMajor(),v.getMinor())}this._compatversion._default=_();for(var n in h){this._compatversion[n]=_(n)}if(!i.ignoreUrlParams){var u="sap-ui-";var m=q.sap.getUriParameters();if(m.mParams['sap-locale']||m.mParams['sap-language']){var V=m.get('sap-locale')||M[m.get('sap-language').toUpperCase()]||m.get('sap-language');if(V===""){i['language']=g['language'].defaultValue}else{s('language',V)}}if(m.mParams['sap-accessibility']){var V=m.get('sap-accessibility');if(V==="X"||V==="x"){s('xx-accessibilityMode',true)}else{s('xx-accessibilityMode',false)}}if(m.mParams['sap-rtl']){var V=m.get('sap-rtl');if(V==="X"||V==="x"){s('rtl',true)}else{s('rtl',false)}}if(m.mParams['sap-theme']){var V=m.get('sap-theme');if(V===""){i['theme']=g['theme'].defaultValue}else{s('theme',V)}}if(m.mParams['sap-statistics']){var V=m.get('sap-statistics');s('statistics',V)}for(var n in g){if(g[n].noUrl){continue}var V=m.get(u+n);if(V===""){i[n]=g[n].defaultValue}else{s(n,V)}}}this.derivedRTL=L._impliesRTL(i.language);var t=i.theme;var T;var I=t.indexOf("@");if(I>=0){T=j(t.slice(I+1));if(T){i.theme=t.slice(0,I);i.themeRoot=T}else{i.theme=(k.theme&&k.theme!==t)?k.theme:"base";I=-1}}i.theme=this._normalizeTheme(i.theme,T);var p=",ar,bg,ca,cs,da,de,el,en,es,et,fi,fr,hi,hr,hu,it,iw,ja,ko,lt,lv,nl,no,pl,pt,ro,ru,sh,sk,sl,sv,th,tr,uk,vi,zh_CN,zh_TW".split(/,/);if(p.length===1&&p[0].slice(0,1)==='@'){p=undefined}i['languagesDeliveredWithCore']=p;var r=i['xx-supportedLanguages'];if(r.length===0||(r.length===1&&r[0]==='*')){r=[]}else if(r.length===1&&r[0]==='default'){r=p||[]}i['xx-supportedLanguages']=r;for(var n in g){if(i[n]!==g[n].defaultValue){q.sap.log.info("  "+n+" = "+i[n])}}},getVersion:function(){if(this._version){return this._version}this._version=new q.sap.Version(sap.ui.version);return this._version},getCompatibilityVersion:function(f){if(typeof(f)==="string"&&this._compatversion[f]){return this._compatversion[f]}return this._compatversion._default},getTheme:function(){return this.theme},_setTheme:function(t){this.theme=t;return this},_normalizeTheme:function(t,T){if(t&&T==null&&t.match(/^sap_corbu$/i))return"sap_goldreflection";return t},getLanguage:function(){return this.language},setLanguage:function(l){d(typeof l==="string"&&l,"sLanguage must be a BCP47 language tag or Java Locale id or null");var o=this.getRTL(),m;if(l!=this.language){m=this._collect();this.language=m.language=l;this.derivedRTL=L._impliesRTL(l);if(o!=this.getRTL()){m.rtl=this.getRTL()}this._endCollect()}return this},getLocale:function(){return new L(this.language)},getFormatLocale:function(){return this.formatLocale||this.language},setFormatLocale:function(f){d(f===null||typeof f==="string"&&f,"sFormatLocale must be a BCP47 language tag or Java Locale id or null");var m;if(f!=this.formatLocale){m=this._collect();this.formatLocale=m.formatLocale=f;this._endCollect()}return this},getLanguagesDeliveredWithCore:function(){return this["languagesDeliveredWithCore"]},getSupportedLanguages:function(){return this["xx-supportedLanguages"]},getAccessibility:function(){return this.accessibility},getAnimation:function(){return this.animation},getRTL:function(){return this.rtl===null?this.derivedRTL:this.rtl},setRTL:function(r){d(r===null||typeof r==="boolean","bRTL must be null or a boolean");var m;if(r!=this.rtl){m=this._collect();this.rtl=m.rtl=this.getRTL();this._endCollect()}return this},getDebug:function(){return this.debug},getInspect:function(){return this.inspect},getOriginInfo:function(){return this.originInfo},getNoDuplicateIds:function(){return this.noDuplicateIds},getTrace:function(){return this.trace},getUIDPrefix:function(){return this.uidPrefix},getDesignMode:function(){return this["xx-designMode"]},getSuppressDeactivationOfControllerCode:function(){return this["xx-suppressDeactivationOfControllerCode"]},getWeinreServer:function(){var w=this.weinreServer;if(!w){w=window.location.protocol+"//"+window.location.hostname+":";w+=(parseInt(window.location.port,10)||8080)+1}return w},getWeinreId:function(){return this.weinreId},getApplication:function(){return this.application},getRootComponent:function(){return this.rootComponent},getAppCacheBuster:function(){return this.appCacheBuster},getAppCacheBusterMode:function(){return this["xx-appCacheBusterMode"]},getDisableCustomizing:function(){return this["xx-disableCustomizing"]},getPreload:function(){return this.preload},getComponentPreload:function(){return this['xx-componentPreload']||this.preload},getFormatSettings:function(){return this.oFormatSettings},_collect:function(){var m=this.mChanges||(this.mChanges={__count:0});m.__count++;return m},_endCollect:function(){var m=this.mChanges;if(m&&(--m.__count)===0){delete m.__count;this._oCore&&this._oCore.fireLocalizationChanged(m);delete this.mChanges}},getStatistics:function(){return this.statistics||window.localStorage.getItem("sap-ui-statistics")=="X"},getNoNativeScroll:function(){return this["xx-noNativeScroll"]}});var M={"ZH":"zh-Hans","ZF":"zh-Hant","1Q":"en-US-x-saptrc","2Q":"en-US-x-sappsd"};var a={"":{pattern:null},"1":{pattern:"dd.MM.yyyy"},"2":{pattern:"MM/dd/yyyy"},"3":{pattern:"MM-dd-yyyy"},"4":{pattern:"yyyy.MM.dd"},"5":{pattern:"yyyy/MM/dd"},"6":{pattern:"yyyy-MM-dd"},"7":{pattern:"Gyy.MM.dd",ignore:true},"8":{pattern:"Gyy/MM/dd",ignore:true},"9":{pattern:"Gyy-MM-dd",ignore:true},"A":{pattern:"yyyy/MM/dd",ignore:true},"B":{pattern:"yyyy/MM/dd",ignore:true},"C":{pattern:"yyyy/MM/dd",ignore:true}};var b={"":{"short":null,medium:null,dayPeriods:null},"0":{"short":"HH:mm",medium:"HH:mm:ss",dayPeriods:null},"1":{"short":"hh:mm a",medium:"hh:mm:ss a",dayPeriods:["AM","PM"]},"2":{"short":"hh:mm a",medium:"hh:mm:ss a",dayPeriods:["am","pm"]},"3":{"short":"KK:mm a",medium:"KK:mm:ss a",dayPeriods:["AM","PM"]},"4":{"short":"KK:mm a",medium:"KK:mm:ss a",dayPeriods:["am","pm"]}};var c={"":{groupingSeparator:null,decimalSeparator:null}," ":{groupingSeparator:".",decimalSeparator:","},"X":{groupingSeparator:",",decimalSeparator:"."},"Y":{groupingSeparator:" ",decimalSeparator:","}};function d(e,m){if(!e){throw new Error(m)}}B.extend("sap.ui.core.Configuration.FormatSettings",{constructor:function(o){this.oConfiguration=o;this.mSettings={};this.sLegacyDateFormat=undefined;this.sLegacyTimeFormat=undefined;this.sLegacyNumberFormatSymbolSet=undefined},getFormatLocale:function(){function f(t){var l=t.oConfiguration.language;if(!q.isEmptyObject(t.mSettings)){if(l.indexOf("-x-")<0){l=l+"-x-sapufmt"}else if(l.indexOf("-sapufmt")<=l.indexOf("-x-")){l=l+"-sapufmt"}}return l}return new L(this.oConfiguration.formatLocale||f(this))},_set:function(k,v){var o=this.mSettings[k];if(v!=null){this.mSettings[k]=v}else{delete this.mSettings[k]}if((o==null!=v==null)||!q.sap.equal(o,v)){var m=this.oConfiguration._collect();m[k]=v;this.oConfiguration._endCollect()}},getDatePattern:function(s){return this.mSettings["dateFormat-"+s]},setDatePattern:function(s,p){d(s=="short"||s=="medium"||s=="long"||s=="full","sStyle must be short, medium, long or full");this._set("dateFormat-"+s,p);return this},getTimePattern:function(s){return this.mSettings["timeFormat-"+s]},setTimePattern:function(s,p){d(s=="short"||s=="medium"||s=="long"||s=="full","sStyle must be short, medium, long or full");this._set("timeFormat-"+s,p);return this},getNumberSymbol:function(t){return this.mSettings["symbols-latn-"+t]},setNumberSymbol:function(t,s){d(t=="decimal"||t=="group"||t=="plusSign"||t=="minusSign","sType must be decimal, group, plusSign or minusSign");this._set("symbols-latn-"+t,s);return this},_setDayPeriods:function(w,t){this._set("dayPeriods-format-"+w,t);return this},getLegacyDateFormat:function(){return this.sLegacyDateFormat||undefined},setLegacyDateFormat:function(f){f=f?String(f).toUpperCase():"";d(!f||a.hasOwnProperty(f),"sFormatId must be one of ['1','2','3','4','5','6','7','8','9','A','B','C'] or empty");if(a[f].ignore){q.sap.log.warning("The ABAP date format '"+f+"' ("+a[f].pattern+") is not supported yet. Falling back to locale specific date formats.");f=""}var m=this.oConfiguration._collect();this.sLegacyDateFormat=m.legacyDateFormat=f;this.setDatePattern("short",a[f].pattern);this.setDatePattern("medium",a[f].pattern);this.oConfiguration._endCollect();return this},getLegacyTimeFormat:function(){return this.sLegacyTimeFormat||undefined},setLegacyTimeFormat:function(f){d(!f||b.hasOwnProperty(f),"sFormatId must be one of ['0','1','2','3','4'] or empty");var m=this.oConfiguration._collect();this.sLegacyTimeFormat=m.legacyTimeFormat=f=f||"";this.setTimePattern("short",b[f]["short"]);this.setTimePattern("medium",b[f]["medium"]);this._setDayPeriods("abbreviated",b[f].dayPeriods);this.oConfiguration._endCollect();return this},getLegacyNumberFormat:function(){return this.sLegacyNumberFormat||undefined},setLegacyNumberFormat:function(f){f=f?f.toUpperCase():"";d(!f||c.hasOwnProperty(f),"sFormatId must be one of [' ','X','Y'] or empty");var m=this.oConfiguration._collect();this.sLegacyNumberFormat=m.legacyNumberFormat=f;this.setNumberSymbol("group",c[f].groupingSeparator);this.setNumberSymbol("decimal",c[f].decimalSeparator);this.oConfiguration._endCollect()},getCustomLocaleData:function(){return this.mSettings}});return C},true);
