(function(e){function t(t){for(var s,n,o=t[0],l=t[1],c=t[2],d=0,u=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);p&&p(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},i=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"00e9":function(e,t,a){"use strict";a("27d3")},"034f":function(e,t,a){"use strict";a("85ec")},"27d3":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("4de4"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=(a("a0a0"),a("975c"),a("2f88"),a("a45e")),i=a.n(r),n=a("ecee"),o=a("b702"),l=a("f2d1"),c=a("ad3d"),p=a("1321"),d=a.n(p),u=a("5a0c"),h=a.n(u),m=a("a3b8"),f=a.n(m),v=a("cee5"),g=a.n(v),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loaded?e._e():a("loader"),a("ul",{staticClass:"topnav",attrs:{id:"menu"}},[a("li",{staticClass:"active",attrs:{"data-menuanchor":"intro"},on:{click:e.switchMode}},[a("a",{attrs:{href:"#intro"}},[e._v("Intro")])]),a("li",{attrs:{"data-menuanchor":"quality"},on:{click:e.switchMode}},[a("a",{attrs:{href:"#quality"}},[e._v("Overview")])]),a("li",{attrs:{"data-menuanchor":"copypaste"},on:{click:e.switchMode}},[a("a",{attrs:{href:"#copypaste"}},[e._v("Copy/Paste")])]),a("li",{attrs:{"data-menuanchor":"dependencies"},on:{click:e.switchMode}},[a("a",{attrs:{href:"#dependencies"}},[e._v("Dependencies")])]),a("li",{attrs:{"data-menuanchor":"performance"},on:{click:e.switchMode}},[a("a",{attrs:{href:"#performance"}},[e._v("Performance")])]),a("li",{attrs:{"data-menuanchor":"security"},on:{click:e.switchMode}},[a("a",{attrs:{href:"#security"}},[e._v("Security")])]),a("li",{attrs:{"data-menuanchor":"consumption"},on:{click:e.switchMode}},[a("a",{attrs:{href:"#consumption"}},[e._v("Consumption")])]),a("li",{attrs:{"data-menuanchor":"npms"},on:{click:e.switchMode}},[a("a",{attrs:{href:"#npms"}},[e._v("npms.io")])]),a("li",{attrs:{"data-menuanchor":"contributing"},on:{click:e.switchMode}},[a("a",{attrs:{href:"#contributing"}},[e._v("Contributing")])]),a("li",{staticClass:"icon",on:{click:e.switchMode}},[a("a",{attrs:{href:"javascript:void(0);"}},[e._v("☰")])])]),e.loaded?a("full-page",{attrs:{options:e.options,id:"fullpage"}},[a("Intro",{attrs:{date:e.date,duration:e.duration,details:e.details}}),e.qualscanData?a("Qualscan",{attrs:{report:e.qualscanData}}):e._e(),e.cdData?a("CodeDuplication",{attrs:{report:e.cdData}}):e._e(),e.dep?a("Dependencies",{attrs:{report:e.dep}}):e._e(),e.perf?a("Performance",{attrs:{report:e.perf}}):e._e(),e.security?a("Security",{attrs:{report:e.security}}):e._e(),e.consumption?a("Consumption",{attrs:{report:e.consumption}}):e._e(),e.npms?a("NPMS",{attrs:{report:e.npms}}):e._e(),a("Contact")],1):e._e()],1)},_=[],C=(a("b64b"),a("96cf"),a("1da1")),w=a("d4ec"),y=a("bee2"),x=a("bc3a"),M=function(){function e(){Object(w["a"])(this,e)}return Object(y["a"])(e,null,[{key:"fetch",value:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.get("".concat("","data.json"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"loader-wrapper"}},[a("div",{attrs:{id:"loader"}}),a("div",{staticClass:"loader-section section-left"}),a("div",{staticClass:"loader-section section-right"})]),a("div",{attrs:{id:"loader-overlay"}})])}],z={name:"loader",methods:{addLoader:function(e){e.classList.add("pending");var t=document.querySelector("#loader-wrapper"),a=document.querySelector("#loader-overlay"),s=e.getBoundingClientRect(),r=s.width,i=s.height,n=s.top,o=s.left,l=Math.min(i,r)/3,c=document.getElementById("loader");c.style.width=l+"px",c.style.height=l+"px",c.style.marginTop=(i-l)/2+"px",c.style.marginLeft=(r-l)/2+"px",t.style.width=r+"px",t.style.height=i+"px",t.style.top=n+"px",t.style.left=o+"px",a.style.width=r+"px",a.style.height=i+"px",a.style.top=n+"px",a.style.left=o+"px"},removeLoader:function(e){var t=document.querySelector("#loader-wrapper"),a=document.querySelector("#loader-overlay");e.classList.remove("pending"),t.parentNode.removeChild(t),a.parentNode.removeChild(a)}},mounted:function(){this.addLoader(document.body)}},D=z,j=(a("00e9"),a("2877")),O=Object(j["a"])(D,k,S,!1,null,"42ccca69",null),q=O.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("h3",[e._v("What is it?")]),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-1 align-self-center alignCenter"},[a("img",{attrs:{src:e.publicPath+"logo.png",width:"200",height:"200",alt:"logo"}})]),e._m(0),a("div",{staticClass:"col-md-7 explanation"},[a("div",{staticClass:"align-middle"},[e._v(" This website is an open-source project which aims to analyze Javascript packages. "),a("br"),a("br"),e._v(" All the charts are based on a report automatically generated after the analysis of the top 1000 "),a("a",{attrs:{href:"https://www.npmjs.com/browse/depended",target:"_blank",rel:"noopener noreferrer"}},[e._v("most depended packages "),a("font-awesome-icon",{attrs:{icon:["fab","npm"]}})],1),e._v(". "),a("br"),a("br"),a("u",[e._v("Last generated report:")]),e._v(" "),a("b",[e._v(e._s(e._f("formatDate")(e.date))+" in "+e._s(e._f("prettyMS")(e.duration)))]),a("details",[a("summary",[a("div",{staticClass:"button"},[a("font-awesome-icon",{attrs:{icon:["far","question-circle"]}})],1),a("div",{staticClass:"details-modal-overlay"})]),a("div",{staticClass:"details-modal"},[a("div",{staticClass:"details-modal-close"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z",fill:"black"}})])]),e._m(1),a("div",{staticClass:"details-modal-content"},[a("p",[e._v(" Machine details: "),a("table",[a("tbody",[a("tr",[a("td",[e._v("Number of cores")]),a("td",[e._v(e._s(e.details.machine.cpu.number))])]),a("tr",[a("td",[e._v("CPU")]),a("td",[e._v(e._s(e.details.machine.cpu.type.model))])]),a("tr",[a("td",[e._v("Memory")]),a("td",[e._v(e._s(e.details.machine.memory.total))])]),a("tr",[a("td",[e._v("OS")]),a("td",[e._v(" Platform: "+e._s(e.details.machine.os.platform)+" "),a("br"),e._v(" Version: "+e._s(e.details.machine.os.version)+" "),a("br"),e._v(" Release: "+e._s(e.details.machine.os.release)+" ")])])])])]),a("p",[e._v(" Not scanned modules: "),a("ul",e._l(e.details.skippedPackages,(function(t){return a("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)])])])])])])])])},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-4 align-self-center"},[a("h4",[e._v("Quality of JS packages")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"details-modal-title"},[a("h1",[e._v("Report details")])])}],E=(a("a9e3"),{name:"intro",props:{date:Date,duration:Number,details:Object},data:function(){return{publicPath:""}}}),L=E,N=(a("6e49"),Object(j["a"])(L,T,P,!1,null,"f097e552",null)),F=N.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("h3",[e._v("Contributing")]),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-1"}),a("div",{staticClass:"col-md-10 explanation"},[a("div",{staticClass:"align-middle"},[e._v(" If you see any error or if you just want to participate "),a("font-awesome-icon",{attrs:{icon:["far","smile-wink"]}}),e._v(", feel free to check the project's "),a("font-awesome-icon",{attrs:{icon:["fab","github-alt"]}}),e._v(" repositories: ")],1),e._m(0)]),a("div",{staticClass:"col-md-1"})]),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-1"}),a("div",{staticClass:"col-md-10 explanation"},[a("div",{staticClass:"row mt-4"},[e._v(" This project is possible because of them: ")]),a("div",{staticClass:"dependencies row mt-4"},[a("td",{staticClass:"align-self-center col-md-2"},[a("a",{attrs:{href:"https://github.com/kucherenko/jscpd",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:e.publicPath+"logos/jscpd.png",width:"175",height:"175",alt:"jscpd"}}),a("div")])]),a("td",{staticClass:"align-self-center col-md-2"},[a("a",{attrs:{href:"https://github.com/hubblo-org/scaphandre",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:e.publicPath+"logos/scaphandre.svg",width:"100",height:"100",alt:"scaphandre"}}),a("div",[e._v("Scaphandre")])])]),a("td",{staticClass:"align-self-center col-md-2"},[a("a",{attrs:{href:"https://github.com/wallet77/qualscan",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:e.publicPath+"logos/qualscan.png",width:"100",height:"100",alt:"qualscan"}}),a("div",[e._v("Qualscan")])])]),a("td",{staticClass:"align-self-center col-md-2"},[a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{attrs:{icon:["fab","npm"],size:"4x"}})],1)]),a("td",{staticClass:"align-self-center col-md-2"},[a("a",{attrs:{href:"https://npms.io/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:e.publicPath+"logos/npms.png",width:"100",height:"100",alt:"npms"}}),a("div")])]),a("td",{staticClass:"align-self-center col-md-2"},[a("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{attrs:{icon:["fab","github-alt"],size:"4x"}})],1)])])]),a("div",{staticClass:"col-md-1"})])])},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"features-list"},[a("li",[a("a",{attrs:{href:"https://github.com/wallet77/qualityofjspackages-crawler",target:"_blank",rel:"noopener noreferrer"}},[e._v("Packages crawler")])]),a("li",[a("a",{attrs:{href:"https://github.com/wallet77/qualityofjspackages-data-generator",target:"_blank",rel:"noopener noreferrer"}},[e._v("Report generator")])]),a("li",[a("a",{attrs:{href:"https://github.com/wallet77/qualityofjspackages-website",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quality of JS packages website")])])])}],$={name:"contributing",props:{date:Date,duration:Number},data:function(){return{publicPath:""}}},Y=$,R=(a("bbe8"),Object(j["a"])(Y,I,A,!1,null,"0fb021b2",null)),B=R.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("div",{staticClass:"slide"},[a("h3",[e._v("Javascript packages overall quality")]),a("div",{staticClass:"row mt-4"},[a("MainChart",{attrs:{type:"radialBar",options:e.options,series:e.series}}),e._m(0)],1)]),a("div",{staticClass:"slide"},[a("h3",[e._v("JS packages quality percentiles")]),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-1"}),a("MainChart",{attrs:{type:"radialBar",options:e.optionsDetails,series:e.seriesDetails,col:6}}),a("div",{staticClass:"col-md-2 valueImportant info align-self-center"},[a("span",{staticClass:"subTitle text-center"},[e._v("Min")]),a("br"),a("span",{staticClass:"valueCritical"},[e._v("~"+e._s(e.report.qualscan.min)+"%")])]),a("div",{staticClass:"col-md-2 valueImportant info align-self-center"},[a("span",{staticClass:"subTitle text-center"},[e._v("Max")]),a("br"),a("span",{staticClass:"valueSucceed"},[e._v("~"+e._s(e.report.qualscan.max)+"%")])]),a("div",{staticClass:"col-md-1"})],1)]),a("div",{staticClass:"slide"},[a("h3",[e._v("Details per category")]),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-3"}),a("MainChart",{attrs:{type:"bar",options:e.optionsProgress,series:e.seriesProgress,col:6}}),a("div",{staticClass:"col-md-3"})],1)])])},X=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-7 align-self-center explanation"},[a("div",[e._v(" Powered by "),a("a",{attrs:{href:"https://github.com/wallet77/qualscan",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qualscan")])]),a("br"),e._v(" Here is an overview of what is taken into account: "),a("ul",{staticClass:"features-list"},[a("li",[e._v("Project's size")]),a("li",[e._v("Number of dependencies")]),a("li",[e._v("Weight of all dependencies")]),a("li",[e._v("Percentage of code duplication")]),a("li",[e._v("And more ("),a("a",{attrs:{href:"https://www.npmjs.com/package/qualscan#purpose",target:"_blank",rel:"noopener noreferrer"}},[e._v("see the full list")]),e._v(")")])])])}],J=(a("ac1f"),a("1276"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:"col-md-"+e.col},[a("div",{staticClass:"mt-4"},[a("apexchart",{attrs:{width:"100%",type:e.type,options:e.options,series:e.series}})],1)])}),Q=[],H={name:"MainChart",props:{report:Object,type:String,options:Object,series:Array,col:{type:Number,default:function(){return 5}}}},U=H,V=Object(j["a"])(U,J,Q,!1,null,null,null),K=V.exports,Z=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8"],G=function e(t,a){for(var s=0,r=Object.keys(a);s<r.length;s++){var i=r[s];a[i]instanceof Object&&(t[i]||(t[i]={}),Object.assign(a[i],e(t[i],a[i])))}return Object.assign(t||{},a),t},ee=function(e){return JSON.parse(JSON.stringify(e))},te={chart:{foreColor:"#ccc"},plotOptions:{radialBar:{size:void 0,inverseOrder:!0,hollow:{margin:0,size:"48%",background:"transparent"},dataLabels:{name:{show:!1},value:{show:!0,color:"#3599b3",offsetY:20,fontSize:"5em"}},track:{show:!1},startAngle:-180,endAngle:180}},labels:["Third quartile","Median","First quartile","Average"],legend:{show:!0,floating:!0,position:"right",offsetX:0,offsetY:350,fontSize:"20px",formatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex]+"%"}},stroke:{lineCap:"round"},responsive:[{breakpoint:600,options:{legend:{show:!0,floating:!1,position:"bottom",offsetX:0,offsetY:0}}}]},ae={chart:{foreColor:"#ccc",toolbar:{show:!1}},grid:{show:!1},plotOptions:{bar:{horizontal:!0}},xaxis:{categories:["Lines","Tokens"]},yaxis:{labels:{show:!0,style:{colors:[],fontSize:"1.3em",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:400},rotate:45},min:0},dataLabels:{enabled:!0,textAnchor:"start",style:{fontSize:"1.5em",fontWeight:"bold"},formatter:function(e){return"".concat(e,"%")},offsetX:0,dropShadow:{enabled:!0}},legend:{show:!0,floating:!1,position:"right",offsetX:100,offsetY:350,formatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex]+"%"}},tooltip:{theme:"dark"},responsive:[{breakpoint:600,options:{legend:{show:!0,floating:!1,position:"bottom",offsetX:0,offsetY:0}}}]},se=G(ee(ae),{title:{text:!1,align:"center"},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",distributed:!0}},colors:Z,yaxis:{show:!1},labels:["Average","Median","Third quartile","90th"],xaxis:{categories:["Average","Median","Third quartile","90th"],labels:{style:{colors:Z,fontSize:"20px"}}},dataLabels:{offsetX:0,offsetY:0,textAnchor:"middle",style:{fontSize:"15px"},formatter:function(e){return e}},legend:{show:!1},tooltip:{enabled:!1}}),re={name:"qualscan",props:{report:Object},components:{MainChart:K},data:function(){var e=[{name:"info",data:[]},{name:"succeed",data:[]},{name:"warn",data:[]},{name:"fail",data:[]}],t=[];for(var a in this.report.details){var s=this.report.details[a];t.push(a.split(" ")),e[0].data.push(s.info?s.info:0),e[1].data.push(s.succeed?s.succeed:0),e[2].data.push(s.warn?s.warn:0),e[3].data.push(s.fail?s.fail:0)}var r={chart:{height:"100%",stacked:!0,stackType:"100%",foreColor:"#ccc",toolbar:{show:!1}},grid:{show:!1},plotOptions:{bar:{horizontal:!0,colors:{backgroundBarColors:["transparent"]}}},stroke:{width:0},tooltip:{enabled:!1},xaxis:{categories:t,labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{max:100,labels:{style:{fontSize:"15px"}}},fill:{opacity:1},legend:{fontSize:"20px",position:"top",horizontalAlign:"left",offsetX:40}};return{options:{chart:{foreColor:"#ccc"},plotOptions:{radialBar:{size:void 0,inverseOrder:!0,hollow:{margin:5,size:"48%",background:"transparent"},dataLabels:{name:{show:!1},value:{show:!0,color:"#3599b3",offsetY:20,fontSize:"5em"}},track:{show:!0},startAngle:-180,endAngle:180}},labels:["Average quality"],legend:{show:!1},stroke:{lineCap:"round"},responsive:[{breakpoint:600,options:{plotOptions:{radialBar:{dataLabels:{value:{fontSize:"4em"}}}}}}]},series:[Math.round(this.report.qualscan.avg)],optionsDetails:te,seriesDetails:[this.report.qualscan.percentiles["75"],this.report.qualscan.percentiles["50"],this.report.qualscan.percentiles["25"],Math.round(this.report.qualscan.avg)],optionsProgress:r,seriesProgress:e}}},ie=re,ne=Object(j["a"])(ie,W,X,!1,null,null,null),oe=ne.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("div",{staticClass:"slide"},[a("h3",[e._v("npms.io results")]),a("div",{staticClass:"row mt-4"},[a("MainChart",{attrs:{type:"bar",options:e.optionsNpms,series:e.seriesNpms}}),e._m(0)],1)])])},ce=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-7 align-self-center explanation"},[a("div",[e._v(" Powered by "),a("a",{attrs:{href:"https://npms.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Npms.io")]),e._v(". ")]),a("br"),e._v(" Here is an overview of what is taken into account: "),a("ul",{staticClass:"features-list"},[a("li",[e._v("Quality "),a("span",{staticClass:"details"},[e._v("(Has linter?, Has readme?, Has tests? ...)")])]),a("li",[e._v("Maintenance "),a("span",{staticClass:"details"},[e._v("(Commit frequency, Release frequency, ...)")])]),a("li",[e._v("Popularity "),a("span",{staticClass:"details"},[e._v("(Number of downloads, Number of stars, ...)")])])])])}],pe={name:"npms",props:{report:Object},components:{MainChart:K},data:function(){return{optionsNpms:{chart:{foreColor:"#ccc",toolbar:{show:!1}},tooltip:{enabled:!1},grid:{show:!1},colors:Z,plotOptions:{bar:{columnWidth:"45%",distributed:!0}},labels:["Final score","Quality","Maintenance","Popularity"],xaxis:{categories:[["Final","score"],"Quality","Maintenance","Popularity"],labels:{style:{colors:Z,fontSize:"20px"}}},legend:{show:!1}},seriesNpms:[{data:[Math.round(100*this.report.final.avg),Math.round(100*this.report.quality.avg),Math.round(100*this.report.maintenance.avg),Math.round(100*this.report.popularity.avg)]}]}}},de=pe,ue=Object(j["a"])(de,le,ce,!1,null,null,null),he=ue.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("div",{staticClass:"slide"},[a("h3",[e._v("Keep dependencies up to date")]),a("div",{staticClass:"row mt-4"},[a("MainChart",{attrs:{type:"bar",options:e.optionsUpdates,series:e.seriesUpdates}}),a("div",{staticClass:"col-md-7 align-self-center"},[a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-6 valueImportant"},[a("span",{staticClass:"subTitle text-center"},[e._v("Unused dependencies")]),a("br"),a("span",{staticClass:"valueWarn"},[e._v("~"+e._s(e.report.check.dependencies.avg.toFixed(2)))]),a("br"),a("span",{staticClass:"details"},[e._v("max: ")]),a("span",{staticClass:"details"},[e._v(e._s(e.report.check.dependencies.max.toFixed(0)))]),a("br"),a("span",{staticClass:"details"},[e._v("min: ")]),a("span",{staticClass:"details"},[e._v(e._s(e.report.check.dependencies.min.toFixed(0)))])]),a("div",{staticClass:"col-md-6 valueImportant"},[a("span",{staticClass:"subTitle"},[e._v("Number of range version")]),a("br"),a("span",{staticClass:"valueCritical"},[e._v("~"+e._s(e.report.exactVersions.dependencies.avg.toFixed(2)))]),a("br"),a("span",{staticClass:"details"},[e._v("max: ")]),a("span",{staticClass:"details"},[e._v(e._s(e.report.exactVersions.dependencies.max.toFixed(0)))]),a("br"),a("span",{staticClass:"details"},[e._v("min: ")]),a("span",{staticClass:"details"},[e._v(e._s(e.report.exactVersions.dependencies.min.toFixed(0)))])])])])],1)])])},fe=[],ve=(a("b680"),{name:"dependencies",props:{report:Object},components:{MainChart:K},data:function(){return{optionsUpdates:{title:{text:"Average number of updates",align:"center"},chart:{foreColor:"#ccc",toolbar:{show:!1}},tooltip:{enabled:!1},grid:{show:!1},colors:Z,plotOptions:{bar:{columnWidth:"45%",distributed:!0}},labels:["Major","Minor","Patch"],xaxis:{categories:["Major","Minor","Patch"],labels:{style:{colors:Z,fontSize:"20px"}}},legend:{show:!1}},seriesUpdates:[{data:[this.report.updates.major.avg.toFixed(2),this.report.updates.minor.avg.toFixed(2),this.report.updates.patch.avg.toFixed(2)]}]}}}),ge=ve,be=Object(j["a"])(ge,me,fe,!1,null,null,null),_e=be.exports,Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("div",{staticClass:"slide"},[a("h3",[e._v("Dependencies tree's size & weight")]),a("div",{staticClass:"row mt-4"},[a("MainChart",{attrs:{type:"bar",options:e.optionsDep,series:e.seriesDep,col:6}}),a("MainChart",{attrs:{type:"bar",options:e.optionsDepSize,series:e.seriesDepSize,col:6}})],1)]),a("div",{staticClass:"slide"},[a("h3",[e._v("Project's size & weight")]),a("div",{staticClass:"row mt-4"},[a("MainChart",{attrs:{type:"bar",options:e.optionsEntrycount,series:e.seriesEntrycount,col:6}}),a("MainChart",{attrs:{type:"bar",options:e.optionsSize,series:e.seriesSize,col:6}})],1)]),a("div",{staticClass:"slide"},[a("h3",[e._v("Require time")]),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-3"}),a("MainChart",{attrs:{type:"bar",options:e.optionsRequireTime,series:e.seriesRequireTime,col:6}}),a("div",{staticClass:"col-md-3"})],1)])])},we=[],ye=G(ee(ae),{title:{text:"Number of dependencies",align:"center"},xaxis:{categories:["Direct dependencies","Sub dependencies"]},dataLabels:{style:{fontSize:"15px"},formatter:function(e){return"".concat(e)}},legend:{show:!0,floating:!1,position:"right",offsetX:200,offsetY:100,formatter:function(e){return e}},responsive:[{breakpoint:600,options:{legend:{show:!0,floating:!1,position:"bottom",offsetX:0,offsetY:0},plotOptions:{bar:{horizontal:!1}},yaxis:{show:!1}}}]}),xe=G(ee(se),{title:{text:"Average weight of dependencies",align:"center"},dataLabels:{formatter:function(e){return g()(e,{base:10})}}}),Me=G(ee(ye),{title:{text:"Project's size",align:"center"},xaxis:{categories:["Size","Unpacked size"]},dataLabels:{offsetX:0,offsetY:0,textAnchor:"middle",style:{fontSize:"15px"},formatter:function(e){return g()(e,{base:10})}}}),ke=G(ee(xe),{title:{text:"Number of files",align:"center"},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",distributed:!0}},dataLabels:{formatter:function(e){return Math.round(e)}}}),Se=G(ee(xe),{title:{text:"Time to load module",align:"center"},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",distributed:!0}},dataLabels:{formatter:function(e){return f()(e/1e6)}}}),ze={name:"dependencies",props:{report:Object},components:{MainChart:K},data:function(){return{optionsDep:ye,seriesDep:[{name:"Average",data:[this.report.depSize.directDependencies.avg.toFixed(2),this.report.depSize.dependencies.avg.toFixed(2)]},{name:"Median",data:[Math.round(this.report.depSize.directDependencies.percentiles["50"]),Math.round(this.report.depSize.dependencies.percentiles["50"])]},{name:"Third quartile",data:[Math.round(this.report.depSize.directDependencies.percentiles["75"]),Math.round(this.report.depSize.dependencies.percentiles["75"])]},{name:"90th percentile",data:[Math.round(this.report.depSize.directDependencies.percentiles["90"]),Math.round(this.report.depSize.dependencies.percentiles["90"])]}],optionsDepSize:xe,seriesDepSize:[{data:[this.report.depSize.weight.avg,this.report.depSize.weight.percentiles["50"],this.report.depSize.weight.percentiles["75"],this.report.depSize.weight.percentiles["90"]]}],optionsSize:Me,seriesSize:[{name:"Average",data:[this.report.packageSize.size.avg.toFixed(2),this.report.packageSize.unpackedSize.avg.toFixed(2)]},{name:"Median",data:[Math.round(this.report.packageSize.size.percentiles["50"]),Math.round(this.report.packageSize.unpackedSize.percentiles["50"])]},{name:"Third quartile",data:[Math.round(this.report.packageSize.size.percentiles["75"]),Math.round(this.report.packageSize.unpackedSize.percentiles["75"])]},{name:"90th percentile",data:[Math.round(this.report.packageSize.size.percentiles["90"]),Math.round(this.report.packageSize.unpackedSize.percentiles["90"])]}],optionsEntrycount:ke,seriesEntrycount:[{data:[this.report.packageSize.entryCount.avg,this.report.packageSize.entryCount.percentiles["50"],this.report.packageSize.entryCount.percentiles["75"],this.report.packageSize.entryCount.percentiles["90"]]}],optionsRequireTime:Se,seriesRequireTime:[{data:[this.report.requireTime.entrypointTime.avg,this.report.requireTime.entrypointTime.percentiles["50"],this.report.requireTime.entrypointTime.percentiles["75"],this.report.requireTime.entrypointTime.percentiles["90"]]}]}}},De=ze,je=Object(j["a"])(De,Ce,we,!1,null,null,null),Oe=je.exports,qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("div",{staticClass:"slide"},[a("h3",[e._v("JS modules security vulnerabilities")]),a("div",{staticClass:"row mt-4"},[a("MainChart",{attrs:{type:"bar",options:e.options,series:e.series}}),a("div",{staticClass:"col-md-7 align-self-center explanation"},[e._m(0),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-3 valueImportant"},[a("span",{staticClass:"subTitle"},[e._v("Max Critical")]),a("br"),a("span",{staticClass:"valueCritical"},[e._v(e._s(e.report.critical.max))])]),a("div",{staticClass:"col-md-3 valueImportant"},[a("span",{staticClass:"subTitle"},[e._v("Max High")]),a("br"),a("span",{staticClass:"valueWarn"},[e._v(e._s(e.report.high.max))])]),a("div",{staticClass:"col-md-3 valueImportant"},[a("span",{staticClass:"subTitle"},[e._v("Max Moderate")]),a("br"),a("span",{staticClass:"valueWarn"},[e._v(e._s(e.report.moderate.max))])]),a("div",{staticClass:"col-md-3 valueImportant"},[a("span",{staticClass:"subTitle"},[e._v("Max Low")]),a("br"),a("span",{staticClass:"valueInfo"},[e._v(e._s(e.report.low.max))])])])])],1)])])},Te=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" Powered by "),a("a",{attrs:{href:"https://docs.npmjs.com/cli/v6/commands/npm-audit",target:"_blank",rel:"noopener noreferrer"}},[e._v("NPM audit")]),e._v(". ")])}],Pe=[Z[3],Z[2],Z[6],Z[0]],Ee={name:"security",props:{report:Object},components:{MainChart:K},data:function(){var e=[],t=[];for(var a in this.report)e.push(this.report[a].avg.toFixed(2)),t.push(a);return{options:{chart:{foreColor:"#ccc",toolbar:{show:!1}},tooltip:{enabled:!1},grid:{show:!1},colors:Pe,plotOptions:{bar:{columnWidth:"45%",distributed:!0}},xaxis:{categories:t,labels:{style:{colors:Pe,fontSize:"20px"}}},legend:{show:!1}},series:[{data:e}]}}},Le=Ee,Ne=Object(j["a"])(Le,qe,Te,!1,null,null,null),Fe=Ne.exports,Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("div",{staticClass:"slide"},[a("h3",[e._v("Code duplication decreases your code quality")]),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-2"}),a("MainChart",{attrs:{type:"bar",options:e.optionsCD,series:e.seriesCD}}),e._m(0),a("div",{staticClass:"col-md-2"})],1)]),a("div",{staticClass:"slide"},[a("h3",[e._v("Code duplication percentiles")]),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"mt-4"},[a("apexchart",{attrs:{width:"100%",type:"bar",options:e.optionsCDDetails,series:e.seriesCDDetails,col:7}})],1)]),a("div",{staticClass:"col-md-5 align-self-center"},[a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-4 valueImportant info align-self-center"},[e._v(" Lines ")]),a("div",{staticClass:"col-md-4 valueImportant info align-self-center"},[a("span",{staticClass:"subTitle text-center"},[e._v("Min")]),a("br"),a("span",{staticClass:"valueSucceed"},[e._v("~"+e._s(Math.round(e.report.percentage.min))+"%")])]),a("div",{staticClass:"col-md-4 valueImportant info align-self-center"},[a("span",{staticClass:"subTitle text-center"},[e._v("Max")]),a("br"),a("span",{staticClass:"valueCritical"},[e._v("~"+e._s(Math.round(e.report.percentage.max))+"%")])])]),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-4 valueImportant info align-self-center"},[e._v(" Tokens ")]),a("div",{staticClass:"col-md-4 valueImportant info align-self-center"},[a("span",{staticClass:"subTitle text-center"},[e._v("Min")]),a("br"),a("span",{staticClass:"valueSucceed"},[e._v("~"+e._s(Math.round(e.report.percentageTokens.min))+"%")])]),a("div",{staticClass:"col-md-4 valueImportant info align-self-center"},[a("span",{staticClass:"subTitle text-center"},[e._v("Max")]),a("br"),a("span",{staticClass:"valueCritical"},[e._v("~"+e._s(Math.round(e.report.percentageTokens.max))+"%")])])])])])])])},Ae=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-3 align-self-center explanation"},[e._v(" Possible impact: "),a("ul",{staticClass:"features-list"},[a("li",[e._v("Decrease maintainability")]),a("li",[e._v("Decrease code readability")]),a("li",[e._v("Increase security risks")]),a("li",[e._v("Increase code base size")])])])}],$e=G(ae,{dataLabels:{style:{fontSize:"1em"}},legend:{offsetX:0,offsetY:0}}),Ye={name:"CodeDuplication",props:{report:Object},components:{MainChart:K},data:function(){return{optionsCD:ae,seriesCD:[{name:"Average",data:[Math.round(this.report["percentage"].avg),Math.round(this.report["percentageTokens"].avg)]}],optionsCDDetails:$e,seriesCDDetails:[{name:"Average",data:[Math.round(this.report["percentage"].avg),Math.round(this.report["percentageTokens"].avg)]},{name:"First quartile",data:[Math.round(this.report["percentage"].percentiles["25"]),Math.round(this.report["percentageTokens"].percentiles["25"])]},{name:"Median",data:[Math.round(this.report["percentage"].percentiles["50"]),Math.round(this.report["percentageTokens"].percentiles["50"])]},{name:"Third quartile",data:[Math.round(this.report["percentage"].percentiles["75"]),Math.round(this.report["percentageTokens"].percentiles["75"])]}]}}},Re=Ye,Be=Object(j["a"])(Re,Ie,Ae,!1,null,null,null),We=Be.exports,Xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("div",{staticClass:"slide"},[a("h3",[e._v("Electrical consumption of npm install")]),a("div",{staticClass:"row mt-4"},[a("MainChart",{attrs:{type:"bar",options:e.options,series:e.series}}),e._m(0),a("MainChart",{attrs:{type:"radialBar",options:e.optionsDetails,series:e.seriesDetails,col:4}})],1)])])},Je=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-3 align-self-center explanation"},[a("div",[e._v(" Powered by "),a("a",{attrs:{href:"https://github.com/hubblo-org/scaphandre",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scaphandre")])])])}],Qe=(a("99af"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"W",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=a,i=["p","n","u","m","","k","M","G","T","P","E","Z","Y"];do{e/=1e3,r++}while(e>1e3);return"".concat(Math.max(e,.1).toFixed(s)," ").concat(i[r]).concat(t)}),He=G(ee(se),{title:{text:"Consumption during dep. installation",align:"center"},dataLabels:{formatter:function(e){return Qe(e)}}}),Ue={name:"consumption",props:{report:Object},components:{MainChart:K},data:function(){return{options:He,series:[{data:[this.report.npm.avg,this.report.npm.percentiles["50"],this.report.npm.percentiles["75"],this.report.npm.percentiles["90"]]}],optionsDetails:G(ee(te),{title:{text:"% elec. consumption on the host",align:"center"}}),seriesDetails:[Math.round(100*this.report.npm.percentiles["75"]/this.report.host.percentiles["75"]),Math.round(100*this.report.npm.percentiles["50"]/this.report.host.percentiles["50"]),Math.round(100*this.report.npm.percentiles["25"]/this.report.host.percentiles["25"]),Math.round(100*this.report.npm.avg/this.report.host.avg)]}}},Ve=Ue,Ke=Object(j["a"])(Ve,Xe,Je,!1,null,null,null),Ze=Ke.exports,Ge={name:"app",components:{Intro:F,Contact:B,Qualscan:oe,NPMS:he,Security:Fe,CodeDuplication:We,Dependencies:_e,Performance:Oe,Loader:q,Consumption:Ze},data:function(){return{loaded:!1,options:{licenseKey:"YOUR_KEY_HERE",scrollOverflow:!0,scrollBar:!1,autoScrolling:!0,menu:"#menu",navigation:window.matchMedia("(min-width: 640px)").matches,navigationTooltips:["Intro","Overal quality","Copy/paste","Dependencies","Performance","Security","Consumption","NPMS","Contributing"],anchors:["intro","quality","copypaste","dependencies","performance","security","consumption","npms","contributing"],sectionsColor:["#0b3c1b","#343E59","#213b4a","#232131","#381535","#34354e","#1c401d","#4e3434","#000000"]},qualscanData:null}},methods:{switchMode:function(){var e=document.getElementById("menu");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}},created:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M.fetch();case 2:a=t.sent,e.qualscanData={qualscan:a.metrics.general.qualscan,details:a.metrics.qualscanMetrics},e.cdData=a.metrics["Code duplication"],e.security=a.metrics["Security audit"],e.npms={final:a.metrics.general.npmsFinal,quality:a.metrics.general.npmsQuality,maintenance:a.metrics.general.npmsMaintenance,popularity:a.metrics.general.npmsPopularity},e.dep={updates:a.metrics["Dependencies updates"],check:a.metrics["Dependencies check"],exactVersions:a.metrics["Exact version of dependencies"]},e.perf={depSize:a.metrics["Dependencies size"],packageSize:a.metrics["Project's size"],requireTime:a.metrics["Require time"]},e.consumption=a.metrics.consumption,e.date=new Date(a.time),e.duration=a.duration/1e6,e.loaded=!0,e.details={skippedPackages:Object.keys(a.skippedPackages),machine:a.machine};case 14:case"end":return t.stop()}}),t)})))()}},et=Ge,tt=(a("034f"),Object(j["a"])(et,b,_,!1,null,null,null)),at=tt.exports;n["c"].add(o["b"]),n["c"].add(l["a"]),n["c"].add(l["b"]),n["c"].add(o["a"]),s["a"].component("font-awesome-icon",c["a"]),s["a"].use(d.a),s["a"].component("apexchart",d.a),s["a"].filter("formatDate",(function(e){if(e)return h()(e).format("DD/MM/YYYY hh:mm")})),s["a"].filter("prettyMS",(function(e){if(e)return f()(e)})),s["a"].filter("filesize",(function(e){if(e)return g()(e,{base:10})})),s["a"].config.productionTip=!1,s["a"].use(i.a),new s["a"]({render:function(e){return e(at)}}).$mount("#app")},"6e49":function(e,t,a){"use strict";a("9930")},"85ec":function(e,t,a){},9533:function(e,t,a){},9930:function(e,t,a){},bbe8:function(e,t,a){"use strict";a("9533")}});
//# sourceMappingURL=app.2b2f3764.js.map