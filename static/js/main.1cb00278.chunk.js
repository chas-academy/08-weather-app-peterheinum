(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){e.exports=a.p+"static/media/cloudyday.3237f7da.svg"},130:function(e,t,a){e.exports=a.p+"static/media/cloudynight.7c36f2b5.svg"},131:function(e,t,a){e.exports=a.p+"static/media/fog.c356784f.svg"},132:function(e,t,a){e.exports=a.p+"static/media/rain.e13be320.svg"},133:function(e,t,a){e.exports=a.p+"static/media/snow.1a2bbf7d.svg"},134:function(e,t,a){e.exports=a.p+"static/media/sunrise.c02360f8.svg"},135:function(e,t,a){e.exports=a.p+"static/media/sunset.7da71f4c.svg"},136:function(e,t,a){e.exports=a.p+"static/media/clearday.4b9869a6.svg"},137:function(e,t,a){e.exports=a.p+"static/media/clearnight.f86c33c4.svg"},138:function(e,t,a){e.exports=a.p+"static/media/wind.8f977e0c.svg"},139:function(e,t,a){e.exports=a.p+"static/media/sleet.f45eece5.svg"},140:function(e,t,a){e.exports=a.p+"static/media/cloudy.82408b66.svg"},176:function(e,t,a){e.exports=a(367)},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},366:function(e,t,a){},367:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(50),l=a.n(c),s=(a(181),a(17)),o=a(18),i=a(20),u=a(19),m=a(21),h=(a(182),a(55),a(129)),p=a.n(h),d=a(130),f=a.n(d),v=a(131),E=a.n(v),g=a(132),b=a.n(g),y=a(133),w=a.n(y),N=a(134),k=a.n(N),C=a(135),x=a.n(C),O=a(136),S=a.n(O),I=a(137),j=a.n(I),M=a(138),F=a.n(M),P=a(139),T=a.n(P),B=a(140),D=a.n(B),W=function(e){var t=null;switch(e.icon){case"clear-day":t=S.a;break;case"clear-night":t=j.a;break;case"partly-cloudy-day":t=p.a;break;case"partly-cloudy-night":t=f.a;break;case"cloudy":t=D.a;break;case"rain":t=b.a;break;case"sleet":t=T.a;break;case"snow":t=w.a;break;case"wind":t=F.a;break;case"fog":t=E.a;break;case"sunrise":t=k.a;break;case"sunset":t=x.a;break;default:return null}return r.a.createElement("img",{alt:"weathericon",src:t,height:"50vh",width:"50vw"})},V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotomain=function(){(0,a.props.goback)()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.weatherInfo;return console.log(e),void 0!=e[0]?r.a.createElement("div",{className:"WholeBody"},r.a.createElement("div",{className:"topnav"}," ",r.a.createElement("button",{className:"backButton",onClick:this.gotomain},"Back")),r.a.createElement("div",{className:"FlexMiddle"},r.a.createElement("div",{className:"weatherCardBorder"},r.a.createElement("div",{className:"weatherInfoP alignCenter headerOfCard"},"Weather in  ",r.a.createElement("b",{className:"flexRight alignCenter pl-1"},e[6],r.a.createElement("div",{className:"iconContainer"},r.a.createElement(W,{icon:e[7].toString()})))),r.a.createElement("div",{className:"weatherInfoP"},"Summary:  ",r.a.createElement("b",{className:"pl-1"},e[2])),r.a.createElement("br",null),r.a.createElement("div",{className:"weatherInfoP"},"Temperature:  ",r.a.createElement("b",{className:"pl-1"}," ",e[1],"\xb0 ",e[8])),r.a.createElement("br",null),r.a.createElement("div",{className:"weatherInfoP"},"Windspeed:  ",r.a.createElement("b",{className:"pl-1"}," ",e[5]))," ",r.a.createElement("br",null),r.a.createElement("div",{className:"weatherInfoP"},"Humidity:   ",r.a.createElement("b",{className:"pl-1"}," ",e[0])),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"weatherInfoP alignCenter"},"Sunrise: ",r.a.createElement("b",{className:"flexRight alignCenter pl-1"}," ",e[3],r.a.createElement("div",{className:"iconContainer"},r.a.createElement(W,{icon:"sunrise"})))),r.a.createElement("div",{className:"weatherInfoP alignCenter"},"Sunset: ",r.a.createElement("b",{className:"flexRight alignCenter pl-1"}," ",e[4]," ",r.a.createElement(W,{icon:"sunset"})))))):null}}]),t}(n.Component),R=(a(183),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotomain=function(){(0,a.props.goback)()},a.uppercaseFirst=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.forecast,t=this.props.unit,a=this.props.location;return void 0!==a.split(",")[1]&&(a="your location"),r.a.createElement("div",{className:"forecastContainer"},r.a.createElement("div",{className:"topnav"}," ",r.a.createElement("button",{className:"backButton",onClick:this.gotomain},"Back")),r.a.createElement("div",{className:"midflex alignCenter"},r.a.createElement("h3",null,"Forecast of weather in ",r.a.createElement("b",null,this.uppercaseFirst(a)))),r.a.createElement("div",{className:"midflex"},e.map(function(e){return r.a.createElement("div",{className:"weatherCard"},r.a.createElement("div",{className:"weatherInfoP alignCenter headerOfCard"},e.weather.day," ",r.a.createElement("b",{className:"flexRight alignCenter pl-1"},r.a.createElement("div",{className:"iconContainer"},r.a.createElement(W,{icon:e.weather.icon})))),r.a.createElement("div",{className:"weatherInfoP"},"Summary:  ",r.a.createElement("b",{className:"pl-1 overauto"},e.weather.summary)),r.a.createElement("br",null),r.a.createElement("div",{className:"weatherInfoP"},"Max:  ",r.a.createElement("b",{className:"pl-1"}," ",e.weather.temperatureMax,"\xb0 ",t)),r.a.createElement("br",null),r.a.createElement("div",{className:"weatherInfoP"},"Min:  ",r.a.createElement("b",{className:"pl-1"}," ",e.weather.temperatureMin,"\xb0 ",t)),r.a.createElement("br",null),r.a.createElement("div",{className:"weatherInfoP"},"Windspeed:  ",r.a.createElement("b",{className:"pl-1"}," ",e.weather.windSpeed))," ",r.a.createElement("br",null),r.a.createElement("div",{className:"weatherInfoP"},"Humidity:   ",r.a.createElement("b",{className:"pl-1"}," ",e.weather.humidity)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"weatherInfoP alignCenter"},"Sunrise: ",r.a.createElement("b",{className:"flexRight alignCenter pl-1"}," ",e.weather.sunrise,r.a.createElement("div",{className:"iconContainer"},r.a.createElement(W,{icon:"sunrise"})))),r.a.createElement("div",{className:"weatherInfoP alignCenter"},"Sunset: ",r.a.createElement("b",{className:"flexRight alignCenter pl-1"}," ",e.weather.sunset," ",r.a.createElement(W,{icon:"sunset"}))))})))}}]),t}(n.Component)),A=a(23),K=(a(366),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.gotomain=function(){(0,a.props.goback)()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=[],t=this.props.hourlyDetails,a=this.props.unit;t.forEach(function(t){e.push({name:t.time,uv:t.temperature,pv:t.apparentTemperature,amt:2400})});var n=r.a.createElement(A.d,null,r.a.createElement(A.c,{width:500,height:250,data:e,margin:{top:5,right:20,bottom:5,left:0}},r.a.createElement(A.b,{type:"monotone",dataKey:"uv",stroke:"darkslateblue"}),r.a.createElement(A.b,{type:"monotone",dataKey:"pv",stroke:"#8884d8"}),r.a.createElement(A.a,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(A.e,{dataKey:"name"}),r.a.createElement(A.f,null)));return r.a.createElement("div",null,r.a.createElement("div",{className:"topnav"}," ",r.a.createElement("button",{className:"backButton",onClick:this.gotomain},"Back")),r.a.createElement("div",{className:"flexbox"},r.a.createElement("div",{className:"flexColumn"},r.a.createElement("p",{className:"temperature"},"Temperature \xb0",a),r.a.createElement("p",{className:"apparentTemperature"},"Apparent Temperature \xb0",a)),r.a.createElement("div",{className:"boxForChart"},n)))}}]),t}(n.Component)),H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={icon:"cloud",searchValue:"",weatherInfo:[],loading:!1,unit:"C",location:null,typeOFContent:"start",forecast:[],hourlyDetails:[]},a.handleSearchQuery=function(e){a.setState({searchValue:e.target.value})},a.handleKeyPress=function(e){"Enter"===e.key&&a.fetchCity()},a.switchUnit=function(e){"C"===a.state.unit?a.setState({unit:"F"}):a.setState({unit:"C"}),console.log(a.state.unit)},a.checkGeolocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(a.displayLocationInfo):console.log("no")},a.displayLocationInfo=function(e){var t=e.coords.longitude,n=e.coords.latitude;a.setState({location:"".concat(n,",").concat(t),searchValue:"".concat(n,",").concat(t)})},a.fetchCity=function(){a.setState({loading:!1});var e=null,t="your location";null!=a.state.searchValue?(e=a.state.searchValue,t=e):null!=a.state.location&&(e=a.state.location),e.length>1&&(a.setState({loading:!0}),fetch("https://weatherbackend.herokuapp.com/api/currently/".concat(e,"/").concat(a.state.unit),{headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){void 0!==t.split(",")[1]&&(t="your location"),a.setState({weatherInfo:[e.Humidity,e.Temperature,e.summary,e.sunrise,e.sunset,e.windSpeed,t,e.icon,a.state.unit]}),a.setState({loading:!1,typeOFContent:"currentweather"})}))},a.fetchForecast=function(){var e=null;null!=a.state.searchValue?e=a.state.searchValue:null!=a.state.location&&(e=a.state.location),e.length>1&&(a.setState({loading:!0}),fetch("https://weatherbackend.herokuapp.com/api/forecast/".concat(e,"/").concat(a.state.unit),{headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){var t=[],n=a.getWeekFromNow();e.forEach(function(e){var a={day:n[e.dayNr],windSpeed:e.windSpeed,summary:e.summary,temperatureMin:e.temperatureMin,temperatureMax:e.temperatureMax,humidity:e.humidity,sunrise:e.sunrise,sunset:e.sunset,icon:e.icon,apparentTemperatureMin:e.apparentTemperatureMin,apparentTemperatureMax:e.apparentTemperatureMax};t.push({weather:a})}),a.setState({forecast:t,loading:!1,typeOFContent:"forecast"})}))},a.fetchOneDetailedDay=function(){a.setState({loading:!1});var e=null,t="your location";null!=a.state.searchValue?(e=a.state.searchValue,t=e):null!=a.state.location&&(e=a.state.location),e.length>1&&(a.setState({loading:!0}),fetch("https://weatherbackend.herokuapp.com/api/24h/".concat(e,"/").concat(a.state.unit),{headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){void 0!==t.split(",")[1]&&(t="your location"),a.setState({hourlyDetails:e,loading:!1,typeOFContent:"detail"})}))},a.getWeekFromNow=function(){for(var e=new Date,t=e.getDay(),a=(e.getDay(),[]),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=0;r<6;r++)if(a.push(n[t]),6==++t)for(var c=0;c<6;c++)a.push(n[c]);return console.log(a),a},a.getRandomIcon=function(){var e=["rainy","cloud"];a.setState({icon:e[Math.floor(Math.random()*e.length)]})},a.gobackToMainMenu=function(){a.setState({typeOFContent:"start",unit:"C",searchValue:"",weatherInfo:[],forecast:[]})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=r.a.createRef();console.log(e),this.checkGeolocation(),this.getRandomIcon()}},{key:"render",value:function(){var e=null;return this.state.loading&&(e="lds-facebook"),this.state.loading||(e=""),"start"===this.state.typeOFContent?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:this.state.icon}),r.a.createElement("div",{className:"BigContainer"},r.a.createElement("div",{className:"Container"},r.a.createElement("input",{className:"searchCityInput",value:this.state.searchValue,onChange:this.handleSearchQuery,onKeyPress:this.handleKeyPress,placeholder:"Weather, where?"}),r.a.createElement("button",{className:"searchWeatherButton",onClick:this.fetchCity},"now"),r.a.createElement("button",{className:"searchWeatherButton",onClick:this.fetchForecast},"forecast"),r.a.createElement("button",{className:"searchWeatherButton",onClick:this.fetchOneDetailedDay},"24h details"),r.a.createElement("div",{className:"ml-1"},r.a.createElement("p",null,r.a.createElement("b",null,"C/F")),r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",onChange:this.switchUnit}),r.a.createElement("span",{className:"slider round"}))),r.a.createElement("div",null,r.a.createElement("div",{className:e},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))))):"currentweather"===this.state.typeOFContent?r.a.createElement(V,{weatherInfo:this.state.weatherInfo,goback:this.gobackToMainMenu}):"forecast"===this.state.typeOFContent?r.a.createElement(R,{forecast:this.state.forecast,goback:this.gobackToMainMenu,location:this.state.searchValue,unit:this.state.unit}):"detail"===this.state.typeOFContent?r.a.createElement(K,{hourlyDetails:this.state.hourlyDetails,goback:this.gobackToMainMenu,location:this.state.searchValue,unit:this.state.unit}):void 0}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,t,a){}},[[176,1,2]]]);
//# sourceMappingURL=main.1cb00278.chunk.js.map