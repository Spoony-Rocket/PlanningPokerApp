(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{241:function(e,t,r){"use strict";var a=r(39),n=r.n(a),i=r(1),o=r.n(i),c=r(64),l=r(105),s=r(23),u=r(242),m=r(13),d=r(9),f=r(214),g=r(10),h=r.n(g),p=function(e){var t=e.children,r=e.mode;return o.a.createElement(d.a,{style:[b.flexWrapRow,{justifyContent:r}]},t)},b=m.a.create({flexWrapRow:{alignItems:"center",alignSelf:"stretch",flex:1,flexDirection:"row",flexWrap:"wrap"}}),v=function(){var e=Object(i.useState)("dark"===l.Appearance.getColorScheme()),t=n()(e,2),r=t[0],a=t[1];return Object(i.useEffect)((function(){var e=l.Appearance.addChangeListener((function(e){var t=e.colorScheme;a("dark"===t)}));return function(){return e.remove()}}),[]),r},y=function(e){var t=Object(s.useTheme)(),r=Object(i.useState)(e(t)),a=n()(r,2),o=a[0],c=a[1];return Object(i.useEffect)((function(){c(e(t))}),[e,t]),o},O=m.a.create({body1:{fontSize:16,fontWeight:"400",letterSpacing:.5},body2:{fontSize:14,fontWeight:"400",letterSpacing:.25},button:{fontSize:14,fontWeight:"500",letterSpacing:1.25},caption:{fontSize:12,fontWeight:"400",letterSpacing:.4},headline1:{fontSize:96,fontWeight:"300",letterSpacing:-1.5},headline2:{fontSize:60,fontWeight:"300",letterSpacing:-.5},headline3:{fontSize:48,fontWeight:"400",letterSpacing:0},headline4:{fontSize:34,fontWeight:"400",letterSpacing:.25},headline5:{fontSize:24,fontWeight:"400",letterSpacing:0},headline6:{fontSize:20,fontWeight:"500",letterSpacing:.15},overline:{fontSize:10,fontWeight:"400",letterSpacing:1.5},subtitle1:{fontSize:16,fontWeight:"400",letterSpacing:.15},subtitle2:{fontSize:14,fontWeight:"500",letterSpacing:.1}});function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){h()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k,w=function(e){var t=e.users,r=y(D),a=Object(i.useCallback)((function(e){var t=e.voteValue&&"hidden"!==e.voteValue?e.voteValue:"?";return o.a.createElement(s.Surface,{key:""+e.id,style:r.userCard},o.a.createElement(d.a,{style:r.userCardTitleContainer},o.a.createElement(s.Text,{style:O.headline3},t)),o.a.createElement(d.a,{style:r.userCardSubtitleContainer},o.a.createElement(s.Text,{style:r.subtitle,numberOfLines:1},e.userName)))}),[r.subtitle,r.userCard,r.userCardSubtitleContainer,r.userCardTitleContainer]);return o.a.createElement(p,{mode:"center"},t.map(a))},D=function(e){return m.a.create({subtitle:S(S({},O.body1),{},{color:e.dark?"black":"white"}),userCard:{borderRadius:2*e.roundness,elevation:8,height:150,margin:8,overflow:"hidden",width:100},userCardTitleContainer:{alignItems:"center",flex:1,justifyContent:"center"},userCardSubtitleContainer:{alignItems:"center",backgroundColor:e.dark?e.colors.accent:e.colors.primary,flexShrink:1,paddingHorizontal:4}})},j=r(161),C=r.n(j),T=r(26);!function(e){e[e.JoinRequest=0]="JoinRequest",e[e.JoinResponse=1]="JoinResponse",e[e.LeaveRequest=2]="LeaveRequest",e[e.SetVoteValue=3]="SetVoteValue",e[e.SetName=4]="SetName",e[e.RoomUpdate=5]="RoomUpdate"}(k||(k={}));var x,L=function(e){var t=Object(i.useRef)(new WebSocket("wss://planningpokerserver.herokuapp.com/")).current,r=function(e){var t=window.location.search;return new URLSearchParams(t).get(e)||void 0}("roomId"),a=Object(i.useState)(),o=n()(a,2),c=o[0],l=o[1];"web"!==T.a.OS||r||(window.location.search="roomId="+new C.a(4).toString());var s=Object(i.useState)({id:r||new C.a(4).toString(),name:"",users:{},admin:void 0}),u=n()(s,2),m=u[0],d=u[1];e=e||"Guest";var f=Object(i.useCallback)((function(e){return t.send(JSON.stringify(e))}),[t]);Object(i.useEffect)((function(){t.onopen=function(){var t={type:k.JoinRequest,roomId:m.id,payload:{name:e}};f(t)},t.onmessage=function(e){if("Heartbeat"!==e.data){var t=JSON.parse(e.data);switch(t.type){case k.RoomUpdate:0,d(t.payload.room)}}else console.log("Received heartbeat from server")},t.onerror=function(e){0}}),[m.id,f,e,t]),Object(i.useEffect)((function(){if(t.readyState===WebSocket.OPEN){var r={type:k.SetName,roomId:m.id,payload:{name:e}};f(r)}}),[m.id,f,e,t.readyState]);return{voteValue:c,vote:function(e){l(e);var t={type:k.SetVoteValue,roomId:m.id,payload:{voteValue:e}};f(t)},room:m}};!function(e){e.DarkZero="#97b498",e.DarkOne="#94cc7d",e.DarkTwo="#69cb30",e.DarkThree="#c8cc00",e.DarkFive="#b27500",e.DarkEight="#a10000",e.DarkThirteen="#a252b7",e.DarkTwentyOne="#8a8a8a",e.DarkUnknown="#000000",e.DarkDisabled="#333",e.LightZero="#c8e6c9",e.LightOne="#C6FFAD",e.LightTwo="#9EFF64",e.LightThree="#FFFF3C",e.LightFive="#E9A426",e.LightEight="#DB0000",e.LightThirteen="#D581EA",e.LightTwentyOne="#BABABA",e.LightUnknown="#FFFFFF",e.LightDisabled="#ccc"}(x||(x={}));var P=[0,1,2,3,5,8,13,21,"\ud83e\udd14"],W=function(e){var t=e.value,r=e.onPress,a=e.isDark,n=e.greyedOut,c=y(I),l=Object(i.useCallback)((function(){return r(t)}),[r,t]);return o.a.createElement(s.Card,{style:[c.valueContainer,{backgroundColor:R(n?-1:t,a)}],onPress:l},o.a.createElement(d.a,{style:c.valueCard},o.a.createElement(s.Text,null,t)))},R=function(e,t){switch(e){case-1:return t?x.DarkDisabled:x.LightDisabled;case 0:return t?x.DarkZero:x.LightZero;case 1:return t?x.DarkOne:x.LightOne;case 2:return t?x.DarkTwo:x.LightTwo;case 3:return t?x.DarkThree:x.LightThree;case 5:return t?x.DarkFive:x.LightFive;case 8:return t?x.DarkEight:x.LightEight;case 13:return t?x.DarkThirteen:x.LightThirteen;case 21:return t?x.DarkTwentyOne:x.LightTwentyOne;default:return t?x.DarkUnknown:x.LightUnknown}},F=function(e){var t=e.onValuePress,r=e.selectedValue,a=e.isDark;return o.a.createElement(p,{mode:"center"},P.map((function(e){return o.a.createElement(W,{key:e,value:e,onPress:t,isDark:a,greyedOut:void 0!==r&&r!==e})})))},I=function(e){return m.a.create({container:{flexDirection:"row",justifyContent:"center"},valueCard:{alignItems:"center",borderRadius:8,height:50,justifyContent:"center",width:50},valueContainer:{marginHorizontal:8,elevation:4,marginVertical:4}})},z={small:4,standard:8,medium:16,large:32,extraLarge:64},V=m.a.create({spacingSmall:{width:z.small,height:z.small},spacingStandard:{width:z.standard,height:z.standard},spacingMedium:{width:z.medium,height:z.medium},spacingLarge:{width:z.large,height:z.large},spacingExtraLarge:{width:z.extraLarge,height:z.extraLarge}}),A=function(e){var t=e.small,r=e.medium,a=e.large,n=e.extraLarge,i=V.spacingStandard;return t?i=V.spacingSmall:r?i=V.spacingMedium:a?i=V.spacingLarge:n&&(i=V.spacingExtraLarge),o.a.createElement(d.a,{style:i})},J=function(e){var t=e.roomId;return o.a.createElement(s.Card,{elevation:0,style:U.clipTextOverflow},o.a.createElement(d.a,{style:[{marginHorizontal:8},U.clipTextOverflow]},o.a.createElement(A,{medium:!0}),o.a.createElement(s.Text,{style:O.headline5},"Room"),o.a.createElement(s.Text,{style:O.subtitle2,numberOfLines:2},"ID: "+t),o.a.createElement(A,{medium:!0})))},U=m.a.create({clipTextOverflow:{flexShrink:1}}),N=function(e){var t=e.username;return o.a.createElement(s.Card,{elevation:0},o.a.createElement(d.a,{style:[{marginHorizontal:8}]},o.a.createElement(A,{medium:!0}),o.a.createElement(s.Text,{style:O.headline5},"User"),o.a.createElement(s.Text,{style:O.subtitle2},"username: "+t),o.a.createElement(A,{medium:!0})))},B=function(e){var t=e.isDark,r=e.toggleTheme,a=Object(i.useState)(""),l=n()(a,2),m=l[0],f=l[1],g=y(H),h=L(m),b=h.voteValue,v=h.vote,E=h.room,S=Object(i.useCallback)((function(e){f(e),c.a.setItem("username",e)}),[f]);return Object(i.useEffect)((function(){c.a.getItem("username").then((function(e){e&&f(e)}))}),[]),o.a.createElement(s.Surface,{style:g.page},o.a.createElement(s.Surface,{style:g.canvas},o.a.createElement(p,{mode:"space-between"},o.a.createElement(s.Text,{style:O.headline3},"Planning Poker \ud83c\udfb2"),o.a.createElement(u.a,{value:t,onChange:r})),o.a.createElement(d.a,{style:g.divider}),o.a.createElement(p,{mode:"space-evenly"},o.a.createElement(d.a,{style:g.flexRow},o.a.createElement(J,{roomId:E.id}),o.a.createElement(A,null)),o.a.createElement(d.a,{style:g.flexRow},o.a.createElement(A,null),o.a.createElement(N,{username:m}))),o.a.createElement(d.a,{style:g.fillWidth},o.a.createElement(A,null),o.a.createElement(s.TextInput,{value:m,label:"Username",onChangeText:S}),o.a.createElement(A,null)),o.a.createElement(d.a,null,o.a.createElement(A,null),o.a.createElement(F,{onValuePress:v,isDark:t,selectedValue:b}),o.a.createElement(A,null)),o.a.createElement(w,{users:Object.values(E.users)})))},H=function(e){return m.a.create({canvas:{alignItems:"center",height:"100%",paddingHorizontal:16,paddingVertical:16,width:Object(f.a)("80%")},divider:{alignSelf:"stretch",borderBottomColor:e.dark?e.colors.accent:e.colors.primary,borderBottomWidth:2},fillWidth:{alignSelf:"stretch"},flexRow:{flex:1,flexDirection:"row"},page:{alignItems:"center",backgroundColor:e.colors.primary,flex:1,paddingBottom:32}})};function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){h()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M={light:Z(Z({},s.DefaultTheme),{},{colors:Z(Z({},s.DefaultTheme.colors),{},{primary:"#00838f",accent:"#FfCDD2"})}),dark:Z(Z({},s.DarkTheme),{},{colors:Z(Z({},s.DarkTheme.colors),{},{primary:"#005662",accent:"#cb9ca1"})})};t.a=function(){var e=v(),t=Object(i.useState)(e),r=n()(t,2),a=r[0],u=r[1],m=Object(i.useCallback)((function(){u(!a),c.a.setItem("isDark",JSON.stringify(!a))}),[a,u]);return Object(i.useEffect)((function(){c.a.getItem("isDark").then((function(e){e&&u(JSON.parse(e))}))}),[]),o.a.createElement(l.AppearanceProvider,null,o.a.createElement(s.Provider,{theme:a?M.dark:M.light},o.a.createElement(B,{isDark:a,toggleTheme:m})))}},249:function(e,t,r){r(250),e.exports=r(455)},250:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/PlanningPokerApp/expo-service-worker.js",{scope:"/PlanningPokerApp/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[249,1,2]]]);
//# sourceMappingURL=app.93797755.chunk.js.map