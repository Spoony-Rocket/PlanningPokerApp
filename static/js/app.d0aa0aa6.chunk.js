(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{245:function(e,t,r){"use strict";var n=r(38),a=r.n(n),o=r(247),i=r(472),c=r(0),l=r.n(c),s=r(65),u=r(102),f=r(24),d=r(246),m=r(13),g=r(9),p=r(220),h=r(10),b=r.n(h),y=r(122),v=r(61),O=function(){var e=Object(c.useState)("dark"===u.Appearance.getColorScheme()),t=a()(e,2),r=t[0],n=t[1];return Object(c.useEffect)((function(){var e=u.Appearance.addChangeListener((function(e){var t=e.colorScheme;n("dark"===t)}));return function(){return e.remove()}}),[]),r},k=function(e){var t=Object(f.useTheme)(),r=Object(c.useState)(e(t)),n=a()(r,2),o=n[0],i=n[1];return Object(c.useEffect)((function(){i(e(t))}),[e,t]),o},E=m.a.create({body1:{fontFamily:"Poppins",fontSize:16,fontWeight:"400",letterSpacing:.5},body2:{fontFamily:"Poppins",fontSize:14,fontWeight:"400",letterSpacing:.25},button:{fontFamily:"Poppins",fontSize:14,fontWeight:"500",letterSpacing:1.25},caption:{fontFamily:"Poppins",fontSize:12,fontWeight:"400",letterSpacing:.4},headline1:{fontFamily:"Poppins",fontSize:96,fontWeight:"300",letterSpacing:-1.5},headline2:{fontFamily:"Poppins",fontSize:60,fontWeight:"300",letterSpacing:-.5},headline3:{fontFamily:"Poppins",fontSize:48,fontWeight:"400",letterSpacing:0},headline4:{fontFamily:"Poppins",fontSize:34,fontWeight:"400",letterSpacing:.25},headline5:{fontFamily:"Poppins",fontSize:24,fontWeight:"400",letterSpacing:0},headline6:{fontFamily:"Poppins",fontSize:20,fontWeight:"500",letterSpacing:.15},overline:{fontFamily:"Poppins",fontSize:10,fontWeight:"400",letterSpacing:1.5},subtitle1:{fontFamily:"Poppins",fontSize:16,fontWeight:"400",letterSpacing:.15},subtitle2:{fontFamily:"Poppins",fontSize:14,fontWeight:"500",letterSpacing:.1}});function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e){var t=e.value,r=e.onChangeText,n=k(C),o=Object(c.useState)(!1),i=a()(o,2),s=i[0],u=i[1],d=Object(c.useRef)(null),m=Object(c.useCallback)((function(){0===(null==t?void 0:t.length)&&r("Guest"),u((function(e){return!e}))}),[r,t]);return Object(c.useEffect)((function(){var e;s&&(null==(e=d.current)||e.focus())}),[s]),s?l.a.createElement(g.a,{style:n.updatableUserNameContainer},l.a.createElement(g.a,{style:{flex:1}},l.a.createElement(y.a,{ref:d,style:{paddingHorizontal:4},value:t,onChangeText:r,onSubmitEditing:m})),l.a.createElement(v.a,{onPress:m,style:n.button},l.a.createElement(f.Text,{style:[E.overline,n.buttonText]},"OK"))):l.a.createElement(v.a,{onPress:m},l.a.createElement(D,{userName:t}))},D=function(e){var t=e.userName,r=k(C);return l.a.createElement(g.a,{style:r.userCardSubtitleContainer},l.a.createElement(f.Text,{style:r.subtitle,numberOfLines:1},t))},C=function(e){return m.a.create({button:{backgroundColor:e.colors.surface,borderRadius:e.roundness,marginLeft:8,paddingHorizontal:8,paddingVertical:4},buttonText:{color:e.dark?e.colors.accent:e.colors.primary,fontWeight:"900"},subtitle:S(S({},E.body1),{},{color:e.dark?"black":"white"}),updatableUserNameContainer:{alignItems:"center",backgroundColor:e.dark?e.colors.accent:e.colors.primary,flexDirection:"row",padding:4},userCardSubtitleContainer:{alignItems:"center",backgroundColor:e.dark?e.colors.accent:e.colors.primary,flexShrink:1,minHeight:32,paddingHorizontal:4,paddingVertical:8},userCardTitleContainer:{alignItems:"center",flex:1,justifyContent:"center"}})};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T,L=function(){var e=k(V);return l.a.createElement(g.a,{style:e.avatarWatermark},l.a.createElement(f.Text,{style:E.body2},"\ud83d\udc64"))},F=function(e){var t=e.onUserNameChange,r=e.resultValue,n=e.showAvatar,a=e.username,o=e.isExtreme,i=k(V),c=r&&"hidden"!==r?r:"?";return l.a.createElement(f.Surface,{style:[n&&i.avatarDecoration,i.resultCard,o&&i.isExtreme]},n&&l.a.createElement(L,null),l.a.createElement(g.a,{style:i.resultCardTitleContainer},l.a.createElement(f.Text,{style:E.headline3},c)),n?l.a.createElement(j,{value:a,onChangeText:t}):l.a.createElement(D,{userName:a}))},V=function(e){return m.a.create({avatarDecoration:{borderWidth:2,borderColor:e.dark?e.colors.accent:e.colors.primary},avatarWatermark:{position:"absolute",top:4,right:4},isExtreme:{borderColor:"red"},resultCard:{borderRadius:2*e.roundness,elevation:8,height:150,margin:8,overflow:"hidden",width:100},resultCardTitleContainer:{alignItems:"center",flex:1,justifyContent:"center"},subtitle:x(x({},E.body1),{},{color:e.dark?"black":"white"})})},R=function(e){var t=e.children,r=e.mode;return l.a.createElement(g.a,{style:[W.flexWrapRow,{justifyContent:r}]},t)},W=m.a.create({flexWrapRow:{alignItems:"center",alignSelf:"stretch",flexDirection:"row",flexWrap:"wrap",marginVertical:16}}),I=function(e){var t=e.users,r=e.userId,n=e.onUserNameChange,a=t.sort((function(e,t){return N(e.voteValue)-N(t.voteValue)})),o=a.length?a[0].voteValue:0,i=a.length?a[a.length-1].voteValue:0;return l.a.createElement(R,{mode:"center"},a.map((function(e){var t=e.id===r,a=void 0!==e.voteValue&&"hidden"!==e.voteValue&&o!==i&&(e.voteValue===o||e.voteValue===i);return l.a.createElement(F,{key:e.id,resultValue:e.voteValue,showAvatar:t,username:e.userName,isExtreme:a,onUserNameChange:n})})))},N=function(e){switch(typeof e){case"number":return e;default:return Number.MAX_SAFE_INTEGER}},z=r(165),A=r.n(z),U=r(27);!function(e){e.JoinRequest="JoinRequest",e.JoinResponse="JoinResponse",e.LeaveRequest="LeaveRequest",e.Reset="Reset",e.RoomUpdate="RoomUpdate",e.SetName="SetName",e.SetVoteValue="SetVoteValue"}(T||(T={}));var J,H=function(e,t){e.send(JSON.stringify(t))},B=function(e){0},q=function(){var e=function(e){var t=window.location.search;return new URLSearchParams(t).get(e)||void 0}("roomId"),t=function(){if(e)return e;var t=new A.a(4).toString();return"web"===U.a.OS&&(window.location.search="roomId="+t),t}(),r=Object(c.useState)("Guest"),n=a()(r,2),o=n[0],i=n[1],l=Object(c.useState)(),s=a()(l,2),u=s[0],f=s[1],d=Object(c.useState)(),m=a()(d,2),g=m[0],p=m[1],h=function(e,t,r){var n=Object(c.useMemo)((function(){var n=new WebSocket("wss://planningpokerserver.herokuapp.com/");return n.onopen=e,n.onmessage=t,n.onerror=r,n}),[]);return Object(c.useEffect)((function(){n.onmessage=t}),[t,n]),Object(c.useEffect)((function(){n.onerror=r}),[r,n]),n}(Object(c.useCallback)((function(){var e={type:T.JoinRequest,roomId:t,payload:{name:"Guest"}};H(h,e)}),[]),Object(c.useCallback)((function(e){if("Heartbeat"!==e.data)try{var t=JSON.parse(e.data);switch(t.type){case T.JoinResponse:p(t.payload.userId);break;case T.RoomUpdate:0,O(t.payload.room),g&&"hidden"!==t.payload.room.users[g].voteValue&&f(t.payload.room.users[g].voteValue)}}catch(r){console.error("Error while parsing JSON",e.data)}else console.log("Received heartbeat from server")}),[g]),B),b=Object(c.useState)({id:t||new A.a(4).toString(),name:"",users:{},admin:void 0}),y=a()(b,2),v=y[0],O=y[1],k=Object(c.useCallback)((function(e){console.log("Setting new username: ",e),i(e);var t={type:T.SetName,roomId:v.id,payload:{name:e}};H(h,t)}),[v.id,h]),E=Object(c.useCallback)((function(e){f(e);var t={type:T.SetVoteValue,roomId:v.id,payload:{voteValue:e}};H(h,t)}),[v.id,h]);return{name:o,reset:Object(c.useCallback)((function(){f(void 0);var e={type:T.Reset,roomId:v.id};H(h,e)}),[v.id,h]),room:v,setName:k,userId:g,vote:E,voteValue:u}};!function(e){e.DarkZero="#97b498",e.DarkOne="#94cc7d",e.DarkTwo="#69cb30",e.DarkThree="#c8cc00",e.DarkFive="#b27500",e.DarkEight="#a10000",e.DarkThirteen="#a252b7",e.DarkTwentyOne="#8a8a8a",e.DarkUnknown="#000000",e.DarkDisabled="#333",e.LightZero="#c8e6c9",e.LightOne="#C6FFAD",e.LightTwo="#9EFF64",e.LightThree="#FFFF3C",e.LightFive="#E9A426",e.LightEight="#DB0000",e.LightThirteen="#D581EA",e.LightTwentyOne="#BABABA",e.LightUnknown="#FFFFFF",e.LightDisabled="#ccc"}(J||(J={}));var G=[0,1,2,3,5,8,13,21,"\ud83e\udd14"],M=function(e){var t=e.value,r=e.onPress,n=e.isDark,a=e.greyedOut,o=k(K),i=Object(c.useCallback)((function(){return r(t)}),[r,t]);return l.a.createElement(f.Card,{style:[o.valueContainer,{backgroundColor:Z(a?-1:t,n)}],onPress:i},l.a.createElement(g.a,{style:o.valueCard},l.a.createElement(f.Text,{style:[E.subtitle1,{fontWeight:"900"}]},t)))},Z=function(e,t){switch(e){case-1:return t?J.DarkDisabled:J.LightDisabled;case 0:return t?J.DarkZero:J.LightZero;case 1:return t?J.DarkOne:J.LightOne;case 2:return t?J.DarkTwo:J.LightTwo;case 3:return t?J.DarkThree:J.LightThree;case 5:return t?J.DarkFive:J.LightFive;case 8:return t?J.DarkEight:J.LightEight;case 13:return t?J.DarkThirteen:J.LightThirteen;case 21:return t?J.DarkTwentyOne:J.LightTwentyOne;default:return t?J.DarkUnknown:J.LightUnknown}},_=function(e){var t=e.onValuePress,r=e.selectedValue,n=e.isDark;return l.a.createElement(R,{mode:"center"},G.map((function(e){return l.a.createElement(M,{key:e,value:e,onPress:t,isDark:n,greyedOut:void 0!==r&&r!==e})})))},K=function(e){return m.a.create({container:{flexDirection:"row",justifyContent:"center"},valueCard:{alignItems:"center",borderRadius:8,height:50,justifyContent:"center",width:50},valueContainer:{marginHorizontal:8,elevation:4,marginVertical:4}})},X=function(e){var t=e.onPress;return l.a.createElement(f.Button,{icon:"replay",mode:"contained",onPress:t},"Reset")},Q={small:4,standard:8,medium:16,large:32,extraLarge:64},Y=m.a.create({spacingSmall:{width:Q.small,height:Q.small},spacingStandard:{width:Q.standard,height:Q.standard},spacingMedium:{width:Q.medium,height:Q.medium},spacingLarge:{width:Q.large,height:Q.large},spacingExtraLarge:{width:Q.extraLarge,height:Q.extraLarge}}),$=function(e){var t=e.small,r=e.medium,n=e.large,a=e.extraLarge,o=Y.spacingStandard;return t?o=Y.spacingSmall:r?o=Y.spacingMedium:n?o=Y.spacingLarge:a&&(o=Y.spacingExtraLarge),l.a.createElement(g.a,{style:o})},ee=function(e){var t=e.roomId,r=k(te);return l.a.createElement(f.Card,{elevation:0,style:r.clipTextOverflow},l.a.createElement(g.a,{style:[r.container,r.clipTextOverflow]},l.a.createElement($,{medium:!0}),l.a.createElement(f.Text,{style:E.headline5},"Room"),l.a.createElement(f.Text,{style:E.subtitle2,numberOfLines:2},"ID: "+t),l.a.createElement($,{medium:!0})))},te=function(e){return m.a.create({container:{paddingHorizontal:8,backgroundColor:e.colors.background,borderRadius:e.roundness},clipTextOverflow:{flexShrink:1}})},re=function(e){var t=e.isDark,r=e.toggleTheme,n=k(ne),a=q(),o=a.name,i=a.setName,u=a.voteValue,m=a.vote,p=a.room,h=a.userId,b=a.reset,y=Object(c.useCallback)((function(e){i(e),s.a.setItem("username",e)}),[i]);return Object(c.useEffect)((function(){s.a.getItem("username").then((function(e){e&&y(e)}))}),[y]),l.a.createElement(f.Surface,{style:n.page},l.a.createElement(f.Surface,{style:n.canvas},l.a.createElement(g.a,{style:n.head},l.a.createElement(f.Text,{style:E.headline3},"Planning Poker \ud83c\udfb2"),l.a.createElement(g.a,{style:n.switchWrapper},l.a.createElement(d.a,{value:t,onChange:r}))),l.a.createElement(g.a,{style:n.divider}),l.a.createElement(R,{mode:"space-evenly"},l.a.createElement(g.a,{style:n.flexRow},l.a.createElement(ee,{roomId:p.id+o}))),l.a.createElement(X,{onPress:b}),l.a.createElement(g.a,null,l.a.createElement($,null),l.a.createElement(_,{onValuePress:m,isDark:t,selectedValue:u}),l.a.createElement($,null)),l.a.createElement(I,{users:Object.values(p.users),userId:h,userName:o,onUserNameChange:y})))},ne=function(e){return m.a.create({canvas:{alignItems:"center",height:"100%",paddingHorizontal:16,paddingVertical:16,width:Object(p.a)("90%")},divider:{alignSelf:"stretch",borderBottomColor:e.dark?e.colors.accent:e.colors.primary,borderBottomWidth:2},fillWidth:{alignSelf:"stretch"},flexRow:{flex:1,height:"100%"},head:{flexDirection:"row",justifyContent:"space-between",width:"100%"},page:{alignItems:"center",backgroundColor:e.colors.primary,flex:1,paddingBottom:32},switchWrapper:{flexDirection:"column",justifyContent:"center",marginHorizontal:16}})};function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ie={light:oe(oe({},f.DefaultTheme),{},{colors:oe(oe({},f.DefaultTheme.colors),{},{primary:"#00838f",accent:"#FfCDD2"})}),dark:oe(oe({},f.DarkTheme),{},{colors:oe(oe({},f.DarkTheme.colors),{},{primary:"#005662",accent:"#cb9ca1"})})};t.a=function(){var e=O(),t=Object(c.useState)(e),n=a()(t,2),d=n[0],m=n[1],g=Object(o.a)({Poppins:r(459)}),p=a()(g,1)[0],h=Object(c.useCallback)((function(){m(!d),s.a.setItem("isDark",JSON.stringify(!d))}),[d,m]);return Object(c.useEffect)((function(){s.a.getItem("isDark").then((function(e){e&&m(JSON.parse(e))}))}),[]),p?l.a.createElement(u.AppearanceProvider,null,l.a.createElement(f.Provider,{theme:d?ie.dark:ie.light},l.a.createElement(re,{isDark:d,toggleTheme:h}))):l.a.createElement(i.a,null)}},254:function(e,t,r){r(255),e.exports=r(461)},255:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/PlanningPokerApp/expo-service-worker.js",{scope:"/PlanningPokerApp/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},459:function(e,t,r){e.exports=r.p+"./fonts/Poppins-Regular.ttf"}},[[254,1,2]]]);
//# sourceMappingURL=app.d0aa0aa6.chunk.js.map