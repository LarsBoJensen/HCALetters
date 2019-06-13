(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){e.exports=a(261)},123:function(e,t,a){},126:function(e,t,a){},260:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),s=(a(123),a(262)),c=a(263),i=a(3),h=a(4),u=a(6),d=a(5),p=a(2),m=a(7),f=a(264),b=a(15),v=(a(126),a(17)),y=(a(27),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handlePersonChange=function(e){a.setState({selectedOption:e}),a.props.onPersonChange(e)},a.handleOnlineStatusChange=function(e){a.props.onOnlineStatusChange(e)},a.state={selectedOption:"",people:{},placeholder:"Loading persons..."},a.handlePersonChange=a.handlePersonChange.bind(Object(p.a)(a)),a.handleOnlineStatusChange=a.handleOnlineStatusChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://nameless-tor-69195.herokuapp.com/http://andersen.sdu.dk/service/people").then(function(t){if(200===t.status)return t.json().then(function(t){e.setState({people:t,placeholder:"Please select a person..."})}).catch(function(e){console.error("An error occurred",e)});throw new Error("Something went wrong on the API server")}).catch(function(t){console.error(t),e.handleOnlineStatusChange("offline")})}},{key:"render",value:function(){for(var e=[],t=this.state.selectedOption,a=t&&t.value,n=this.state.people,l=Object.entries(n).sort(function(e,t){var a=e[1].Name.toLowerCase(),n=t[1].Name.toLowerCase();return a<n?-1:a>n?1:0}),o=0;o<l.length;o++){var s=l[o][0],c=l[o][1].Name.replace(/,/,"");e.push({value:s,label:c})}return r.a.createElement("div",{className:"person-selection label-input"},r.a.createElement("label",{htmlFor:"select-person"},"Sender / receiver"),r.a.createElement(v.a,{name:"select-person",id:"select-person",placeholder:this.state.placeholder,value:a,onChange:this.handlePersonChange,options:e}))}}]),t}(r.a.Component)),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleYearChange=function(e){a.setState({selectedOption:e}),a.props.onYearChange(e)},a.state={selectedOption:""},a.handleYearChange=a.handleYearChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){for(var e=this.state.selectedOption,t=e&&e.value,a=[{value:"0000",label:"n/a"}],n=1805;n<=2e3;n++)a.push({value:"".concat(n),label:"".concat(n)});return r.a.createElement("div",{className:"date-input label-input year-input"},r.a.createElement("label",{htmlFor:"year-input"},"Year")," ",r.a.createElement(v.a,{name:"select-year",id:"select-year",placeholder:"...",value:t,onChange:this.handleYearChange,options:a}))}}]),t}(r.a.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleMonthChange=function(e){a.setState({selectedOption:e}),a.props.onMonthChange(e)},a.state={selectedOption:""},a.handleMonthChange=a.handleMonthChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){for(var e=this.state.selectedOption,t=e&&e.value,a=[{value:"00",label:"n/a"}],n=1;n<=12;n++)a.push({value:"".concat(n),label:"".concat(n)});return r.a.createElement("div",{className:"date-input label-input"},r.a.createElement("label",{htmlFor:"month-input"},"Month")," ",r.a.createElement(v.a,{name:"select-month",id:"select-month",placeholder:"...",value:t,onChange:this.handleMonthChange,options:a}))}}]),t}(r.a.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleDayChange=function(e){a.setState({selectedOption:e}),a.props.onDayChange(e)},a.state={selectedOption:""},a.handleDayChange=a.handleDayChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){for(var e=this.state.selectedOption,t=e&&e.value,a=[{value:"00",label:"n/a"}],n=1;n<=31;n++)a.push({value:"".concat(n),label:"".concat(n)});return r.a.createElement("div",{className:"date-input label-input"},r.a.createElement("label",{htmlFor:"day-input"},"Day")," ",r.a.createElement(v.a,{name:"select-day",id:"select-day",placeholder:"...",value:t,onChange:this.handleDayChange,options:a}))}}]),t}(r.a.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={isActive:!1},a.handleLetterIDChange=a.handleLetterIDChange.bind(Object(p.a)(a)),a.handleKeyboardEvent=a.handleKeyboardEvent.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"handleLetterIDChange",value:function(e){this.props.onLetterIDChange(e.target.value,!1)}},{key:"handleKeyboardEvent",value:function(e){this.props.onKeyboardEvent(e.key)}},{key:"render",value:function(){return r.a.createElement("div",{className:"id-input label-input"},r.a.createElement("label",{htmlFor:"id-input"},"Letter ID")," ",r.a.createElement("input",{type:"number",id:"id-input",placeholder:this.props.letterID,min:"1",max:"99999",maxLength:"5",onChange:this.handleLetterIDChange,onKeyDown:this.handleKeyboardEvent}))}}]),t}(r.a.Component),j=function(e){var t=e.year,a=e.month,n=e.day;return a&&!t||t&&!a||n&&(!t||!a)?r.a.createElement("p",{className:"validation-instructions"},"Please select at least a month and a year."):""},D=a(38),I=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.date,t=this.props.format,a="Invalid date",n=e.split("-"),l=[!0,!0,!0],o={},s="compact"===t?{year:"numeric",month:"numeric",day:"numeric"}:{weekday:"long",year:"numeric",month:"long",day:"numeric"},c="",i=!1;switch(n.forEach(function(e,t){/^0+$/.test(e)&&((n=n.slice(0))[t]=e.replace(/0/,"1"),l[t]=!1)}),l=l.toString()){case"true,true,true":o=s;break;case"true,true,false":o={year:"numeric",month:"long"},c="unknown day";break;case"true,false,true":o={year:"numeric",day:"numeric"},c="unknown month";break;case"true,false,false":o={year:"numeric"},c="month and day are unknown";break;case"false,true,true":o={month:"long",day:"numeric"},c="unknown year";break;case"false,false,true":o={day:"numeric"},c="year and month are unknown";break;case"false,true,false":o={month:"long"},c="year and day are unknown";break;case"false,false,false":i=!0;break;default:o={weekday:"long",year:"numeric",month:"long",day:"numeric"}}var h=new Intl.DateTimeFormat("en-EN",o);return i?a="(unknown date)":(Date.parse(n.join("-"))?a=h.format(new Date(n.join("-"))):(a=e,c="Invalid date in the data source"),"compact"!==t&&(a+=c?" ("+c+")":"")),r.a.createElement("time",{dateTime:e},a)}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleLetterIDChange=a.handleLetterIDChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"handleLetterIDChange",value:function(e){this.props.onLetterIDChange(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.letterRow,n=t.selected;return r.a.createElement("tr",{className:n?"letterlist-row selected":"letterlist-row",onClick:function(){e.handleLetterIDChange(a.ID)}},r.a.createElement("td",{className:"sender"},a["Sender name"]),r.a.createElement("td",{className:"receiver"},a["Receiver name"]),r.a.createElement("td",{className:"date"},r.a.createElement(I,{date:a.Date})))}}]),t}(r.a.Component),w=a(23),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={letterID:""},a.handleLetterIDChange=a.handleLetterIDChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"handleLetterIDChange",value:function(e){this.setState({letterID:e}),this.props.onLetterIDChange(e),/\/letter\/([0-9]+)/.test(this.props.history.location.pathname)?this.props.history.push(this.props.history.location.pathname.replace(/\/letter\/[0-9]+.*/,"/letter/".concat(e))):this.props.history.push("".concat(this.props.history.location.pathname,"/letter/").concat(e))}},{key:"render",value:function(){for(var e=[],t=0,a=Object.entries(this.props.list);t<a.length;t++){var n=a[t],l=Object(D.a)(n,2),o=l[0],s=l[1];Number.isInteger(parseInt(o,10))&&e.push(r.a.createElement(k,{key:s.ID,letterRow:s,onLetterIDChange:this.handleLetterIDChange,selected:s.ID===this.state.letterID}))}var c=e.length;return r.a.createElement("table",{className:["letterlist"].join(" ")},r.a.createElement("caption",{id:"letterlist"},c," ",c>1?"letters":"letter"," found:"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"From"),r.a.createElement("th",null,"To"),r.a.createElement("th",null,"On"))),r.a.createElement("tbody",{tabIndex:"0",role:"list","aria-labelledby":"letterlist"},e))}}]),t}(r.a.Component),N=Object(w.connect)(function(e){return{onLetterIDChange:e.onLetterIDChange,letterListFetch:{url:"".concat(e.url),headers:{"Content-Type":""}}}})(function(e){var t=e.letterListFetch;return t.pending?r.a.createElement("p",{className:"fetch-message"},"Fetching a list of letters. Please wait..."):t.rejected||t.fulfilled&&null===t.value?r.a.createElement("p",{className:"fetch-message"},"No letters found with the given parameters."):t.fulfilled&&null!==t.value?r.a.createElement(L,{list:t.value,history:e.history,letterID:e.letterID,onLetterIDChange:e.onLetterIDChange}):void 0}),S=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).handleLetterIDChange=e.handleLetterIDChange.bind(Object(p.a)(e)),e}return Object(m.a)(t,e),Object(h.a)(t,[{key:"handleLetterIDChange",value:function(e){this.props.onLetterIDChange(e)}},{key:"render",value:function(){var e=this.props,t=e.history,a=e.match.params,n=a.person,l=a.year,o=a.month,s=a.day,c="https://nameless-tor-69195.herokuapp.com/http://andersen.sdu.dk/service/letters/",i="Not enough parameters. Please select at least a year and a month.";return n?"1"!==n?c+="person/".concat(n):(c=null,i="Loading all letters to and from Hans Christian Andersen would mean loading almost all letters in the database. It does not make sense, and it puts a large load on your device. So the app does not do that. Please select someone else."):l&&o?(c+="date/".concat(("0000"+l).slice(-4),"-").concat(("00"+o).slice(-2)),s&&(c+="-".concat(("00"+s).slice(-2)))):c=null,null!==c?r.a.createElement(N,{url:c,history:t,onLetterIDChange:this.handleLetterIDChange}):r.a.createElement("p",{className:"fetch-message"},i)}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handlePersonChange=function(e){a.props.history.push("/person/".concat(e,"/show"))},a.handlePersonChange=a.handlePersonChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.firstName,n=t.lastName,l=t.personID,o=[a,n].join(" ");return r.a.createElement("span",{className:"person",dangerouslySetInnerHTML:{__html:o},onClick:function(){e.handlePersonChange(l)}})}}]),t}(r.a.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.people,a=e.correspondent,n=[],l="sender"===a?"from":"to",o="";if(t){var s=0,i=!0,h=!1,u=void 0;try{for(var d,p=function(){var e=d.value;s++;var t=e.Webpage.match(/[0-9]+$/)[0];"receiver"===a?n.push(r.a.createElement(c.a,{key:s,path:"/",render:function(a){return r.a.createElement(P,Object.assign({},a,{personID:t,firstName:e["First Name"],lastName:e["Last Name"]}))}}),", "):"sender"===a&&n.push(r.a.createElement(c.a,{key:s,path:"/",render:function(a){return r.a.createElement(P,Object.assign({},a,{personID:t,firstName:e["First name"],lastName:e["Last name"]}))}}),", ")},m=t[Symbol.iterator]();!(i=(d=m.next()).done);i=!0)p()}catch(b){h=!0,u=b}finally{try{i||null==m.return||m.return()}finally{if(h)throw u}}}n.pop();var f=n.length>1?"multiple":"single";return n.length>0&&(o=r.a.createElement("span",{className:f},l," ",n)),r.a.createElement("span",{className:a},o," ")}}]),t}(r.a.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.type,t=this.props.version,a=this.props.version["Version last updated"],n=this.props.numberofversions,l=this.props.number;var o="There is registered a version of the letter of the type <em>".concat(this.props.type,"</em>. Unfortunately, it may not be published here due to copyright issues. You may try to contact the owner.");"true"===t.Public&&(o="undefined"!==typeof t.Text&&""!==t.Text?t.Text.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1'>$1</a>").replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim,'$1<a href="http://$2">$2</a>'):"There is no text or description of this version of the letter. However, the information about the source may be useful:");var s=[e];n>1&&"text"===e&&s.push(r.a.createElement("span",{className:"metasuffix",key:l}," (version ",l,")"));var c=[];t["Source name"]&&(c.push(r.a.createElement("p",{key:"1"},"Source/owner: ",t["Source name"])),t["Item number in source"]&&c.push(r.a.createElement("p",{key:"2"},"Item number in source: ",t["Item number in source"]))),c.push(r.a.createElement("p",{key:"3"},"Last updated on ",r.a.createElement(I,{date:a,format:"compact"})));var i=this.props.version.Languages[0],h={eng:"en",dut:"nl",fre:"fr",spa:"es",ger:"de",ita:"it",swe:"sv",dan:"da",hca:"da"},u=new RegExp(Object.keys(h).join("|"),"gi"),d=i.replace(u,function(e){return h[e]}),p="letter-version ".concat(this.props.type);return r.a.createElement("div",{className:p},r.a.createElement("h3",{className:"version-header"},s),r.a.createElement("div",{className:"letter-text",lang:d,dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("div",{className:"letter-meta"},c))}}]),t}(r.a.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=[],t=0,a=!0,n=!1,l=void 0;try{for(var o,s=this.props.references[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var c=o.value,i=c["Item title"],h=c.Webpage,u="";c["Comment on reference"]&&(u=r.a.createElement("span",{className:"reference-comment"},c["Comment on reference"])),t++,e.push(r.a.createElement("li",{className:"literature",key:t},r.a.createElement("a",{className:"literature-title",href:h},i),u))}}catch(d){n=!0,l=d}finally{try{a||null==s.return||s.return()}finally{if(n)throw l}}return r.a.createElement("ul",null,e)}}]),t}(r.a.Component),F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleLetterIDChange=a.handleLetterIDChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"handleLetterIDChange",value:function(e,t){this.props.onLetterIDChange(e,t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.letter,n=t.open,l=a["Letter ID"],o=a.Senders,s=a.Receivers,c=a["Letter date"],i=a.Versions,h=i.length,u=a["Bibliography references"],d=[],p=[],m={text:[],original:[],image:[],other:[]};o.length>0&&d.push(r.a.createElement(x,{key:"group1",correspondent:"sender",people:o})),s.length>0&&d.push(r.a.createElement(x,{key:"group2",correspondent:"receiver",people:s})),c&&d.push(r.a.createElement(I,{key:"3",date:c}));var f=!0,b=!1,v=void 0;try{for(var y,g=i[Symbol.iterator]();!(f=(y=g.next()).done);f=!0){var E=y.value;switch(E.Type){case"tekst":m.text.push(E);break;case"original":m.original.push(E);break;case"grafisk":m.image.push(E);break;default:m.other.push(E)}}}catch(w){b=!0,v=w}finally{try{f||null==g.return||g.return()}finally{if(b)throw v}}for(var C=function(){var e=j[O],t=(k=Object(D.a)(e,2))[0],a=k[1];if(a.length>0){var n=1;a.forEach(function(e){p.push(r.a.createElement(T,{type:t,version:e,numberofversions:h,number:n,key:t+n})),n++})}},O=0,j=Object.entries(m);O<j.length;O++){var k;C()}return r.a.createElement("section",{className:"letter drawer ".concat(n)},r.a.createElement("div",{className:"drawer-inner"},r.a.createElement("h2",{className:"letter-header"},r.a.createElement("i",{className:"icon close-left",onClickCapture:function(){e.handleLetterIDChange(l,!1)}}),r.a.createElement("span",null,"Letter")," ",d),p,r.a.createElement("div",{className:"letter-references"},r.a.createElement("h3",null,"Letter ID for reference: ",l),u.length>0&&r.a.createElement("div",null,r.a.createElement("h3",null,"References to sources and secondary literature for this letter"),r.a.createElement(A,{references:u})))))}}]),t}(n.Component),Y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.fetch,a=e.open,n=e.onLetterIDChange;return t.pending?r.a.createElement("p",{className:"fetch-message"},"Fetching a letter with the selected ID. Please wait..."):t.rejected||t.fulfilled&&null===t.value?r.a.createElement("p",{className:"fetch-message"},"An error occurred. Or, more likely, there is no letter with the ID ",this.props.url.match.params.letterID,"."):t.fulfilled&&null!==t.value?r.a.createElement(c.a,{render:function(e){return r.a.createElement(F,{history:e.history,letter:t.value,open:a,onLetterIDChange:n})}}):void 0}}]),t}(n.Component),B=Object(w.connect)(function(e){return{onLetterIDChange:e.onLetterIDChange,open:e.open,fetch:{url:"".concat("https://nameless-tor-69195.herokuapp.com/http://andersen.sdu.dk/service/letters/").concat(e.url.match.params.letterID,"?htmlencode=false"),headers:{"Content-Type":""}}}})(Y),M=(a(260),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleClickSubmit=a.handleClickSubmit.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"handleClickSubmit",value:function(e,t){this.props.history.push("/letter/".concat(e)),this.props.onLetterIDChange(e,t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.isActive,n=t.letter;return r.a.createElement("button",{type:"button",onClick:function(){return e.handleClickSubmit(n,!0)},disabled:a?"":"disabled"},"Show me")}}]),t}(n.Component)),H=function(e){var t=e.info,a=[];null!==t["First name"]&&""!==t["First name"]&&a.push(t["First name"]),null!==t["Last name"]&&""!==t["Last name"]&&a.push(t["Last name"]);for(var n=[],l=0,o=["Title","Biographical description","Family relations"];l<o.length;l++){var s=o[l];null!==t[s]&&""!==t[s]&&n.push(r.a.createElement("span",{key:s,dangerouslySetInnerHTML:{__html:t[s]}}),", ")}n.pop();var c=[];return null!==t.Born&&c.push("* ",r.a.createElement(I,{key:"Born",date:t.Born,format:"compact"})),null!==t.Born&&null!==t.Died&&c.push(", "),null!==t.Died&&c.push("\u2020 ",r.a.createElement(I,{key:"Died",date:t.Died,format:"compact"})),null!==t["Home country"]&&""!==t["Home country"]&&(c.length>0&&c.push(", "),c.push(t["Home country"],".")),r.a.createElement("section",{className:"person-card",lang:"da"},r.a.createElement("h2",{className:"name"},a.join(" ")),r.a.createElement("p",{className:"time-and-nationality"},c.length>0?c:""),r.a.createElement("p",{className:"curriculum"},n),r.a.createElement("span",{className:"note"},"These data are only available in Danish"))},K=Object(w.connect)(function(e){return{fetch:{url:"".concat("https://nameless-tor-69195.herokuapp.com/http://andersen.sdu.dk/service/people/").concat(e.match.params.personID,"?htmlencode=false"),headers:{"Content-Type":""}}}})(function(e){var t=e.fetch;return t.pending?r.a.createElement("p",{className:"fetch-message"},"Fetching information about the selected person. Please wait..."):t.rejected||t.fulfilled&&null===t.value?r.a.createElement("p",{className:"fetch-message"},"An error occurred. Or, more likely, there is no person in the database with the ID ",e.match.params.personID,"."):t.fulfilled&&null!==t.value?r.a.createElement(H,{info:t.value}):void 0}),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleYearChange=function(e){a.setState({year:e}),a.handleDateChange("year",e)},a.state={person:null,year:null,month:null,day:null,letterID:"",letterIDButtonIsActive:!1,letterDrawerIsOpen:!0,onlineStatus:"online"},a.handlePersonChange=a.handlePersonChange.bind(Object(p.a)(a)),a.handleYearChange=a.handleYearChange.bind(Object(p.a)(a)),a.handleMonthChange=a.handleMonthChange.bind(Object(p.a)(a)),a.handleDayChange=a.handleDayChange.bind(Object(p.a)(a)),a.handleLetterIDChange=a.handleLetterIDChange.bind(Object(p.a)(a)),a.handleKeyboardEvent=a.handleKeyboardEvent.bind(Object(p.a)(a)),a.handleOnlineStatusChange=a.handleOnlineStatusChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"handlePersonChange",value:function(e){this.setState({person:e});var t=this.props.history.location.pathname.match(/letter\/[0-9]+/),a=[];e&&""!==e.value?(a.push("person/".concat(e.value)),null!==t&&a.push("".concat(t))):null!==t&&a.push("".concat(t)),this.props.history.push("/".concat(a.join("/")))}},{key:"handleDateChange",value:function(e,t){this.setState({person:null});var a={year:{value:this.state.year,pathPart:"year"},month:{value:this.state.month,pathPart:"month"},day:{value:this.state.day,pathPart:"day"}};a[e].value=t;for(var n=[],r=0,l=Object.values(a);r<l.length;r++){var o=l[r];o.value&&o.value.value&&n.push("/".concat(o.pathPart,"/").concat(o.value.value))}var s=this.props.history.location.pathname.match(/\/letter\/[0-9]+/);n.push(s);var c="/date".concat(n.join(""));this.props.history.push(c)}},{key:"handleMonthChange",value:function(e){this.setState({month:e}),this.handleDateChange("month",e)}},{key:"handleDayChange",value:function(e){this.setState({day:e}),this.handleDateChange("day",e)}},{key:"handleLetterIDChange",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.setState({letterID:e,letterDrawerIsOpen:t}),this.setState({letterIDButtonIsActive:""!==e})}},{key:"handleKeyboardEvent",value:function(e){"Enter"===e&&""!==this.state.letterID&&(this.setState({letterDrawerIsOpen:!0}),this.props.history.push("/letter/".concat(this.state.letterID)))}},{key:"handleOnlineStatusChange",value:function(e){this.setState({onlineStatus:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.person,n=t.year,l=t.month,o=t.day,s=a&&a.value,i=n&&n.value,h=l&&l.value,u=o&&o.value;return r.a.createElement("section",{className:"App"},r.a.createElement("header",{className:"/"===this.props.location.pathname?"front":"not-front"},r.a.createElement("h1",{onClick:function(){return e.props.history.push("/")}},"The Hans Christian Andersen Letters"),"offline"===this.state.onlineStatus?r.a.createElement("p",{className:"error"},"You seem to be offline."):"",r.a.createElement(b.d,{defaultFocus:!1,defaultIndex:0},r.a.createElement(b.b,null,r.a.createElement(b.a,null,r.a.createElement("i",{className:"tab-icon",id:"icon-person"}),r.a.createElement("span",{className:"tab-text"},"Person")),r.a.createElement(b.a,null,r.a.createElement("i",{className:"tab-icon",id:"icon-calendar"}),r.a.createElement("span",{className:"tab-text"},"Date")),r.a.createElement(b.a,null,r.a.createElement("i",{className:"tab-icon",id:"icon-id"}),r.a.createElement("span",{className:"tab-text"},"ID"))),r.a.createElement(b.c,null,r.a.createElement("div",{className:"selector"},r.a.createElement(y,{person:a,personValue:s,onPersonChange:this.handlePersonChange,onOnlineStatusChange:this.handleOnlineStatusChange})),r.a.createElement(c.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",{className:"help"},r.a.createElement("h2",null,"What This App Lets You Do"),r.a.createElement("p",null,"This app lets you browse more than 10,000 letters to, from, and about ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Hans_Christian_Andersen"},"Hans Christian Andersen"),"."),r.a.createElement("p",null,"You can select a person or a date (range) or enter an ID of a letter, if you should know one."),r.a.createElement("p",null,"You can filter the lists (person, day, month, and year) by entering text/numbers into the fields."),r.a.createElement("p",null,"The content comes from ",r.a.createElement("a",{href:"http://andersen.sdu.dk/brevbase/",hrefLang:"da"},"the HCA research centre at the SDU")," and is fetched via ",r.a.createElement("a",{href:"http://andersen.sdu.dk/service/index_e.html"},"their web services"),"."),r.a.createElement("p",null,"You can return to this page and have the help texts displayed by clicking the header."),r.a.createElement("p",null,"The app is created by ",r.a.createElement("a",{href:"https://larsbojensen.eu"},"Lars Bo Jensen"),". It is based on ",r.a.createElement("a",{href:"https://reactjs.org/"},"React")," and Facebook's ",r.a.createElement("a",{href:"https://github.com/facebook/create-react-app"},"create-react-app"),". And sweat."),r.a.createElement("p",null,"Get the code at ",r.a.createElement("a",{href:"https://github.com/LarsBoJensen/hca-letters"},"https://github.com/LarsBoJensen/hca-letters"),"."))}})),r.a.createElement(b.c,null,r.a.createElement("div",{className:"date-selection selector"},r.a.createElement(C,{day:o,dayValue:u,onDayChange:this.handleDayChange}),r.a.createElement(E,{month:l,monthValue:h,onMonthChange:this.handleMonthChange}),r.a.createElement(g,{year:n,yearValue:i,onYearChange:this.handleYearChange})),r.a.createElement(c.a,{path:"/date",render:function(){return r.a.createElement(j,{year:e.state.year,month:e.state.month,day:e.state.day})}}),r.a.createElement(c.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",{className:"help"},r.a.createElement("h2",null,"Finding letters via date"),r.a.createElement("h3",null,"The n/a option"),r.a.createElement("p",null,"Some letters have no date or no complete date. That's what the 'n/a' options are for. If you select 'n/a' in all three input fields, you will get a list of all letters that have not been dated at all. If you enter a year and a month and a 'n/a' day, you will get all letters from that month in that year that have no day in the date (if there are any)."),r.a.createElement("h3",null,"Wildcards"),r.a.createElement("p",null,"'N/a' is not the same as using wildcards, which is also an option, at least for the day input. Not entering a value or clearing it by clicking the little cross in the field makes for a wildcard. That makes it possible to fetch a list of all letters from a certain month in a certain year."))}})),r.a.createElement(b.c,null,r.a.createElement(c.a,{path:"/",children:function(t){var a=t.history;return r.a.createElement("div",{className:"id-input-wrapper selector".concat(e.state.letterIDButtonIsActive?" is-active":"")},r.a.createElement(O,{letterID:e.state.letterID,onLetterIDChange:e.handleLetterIDChange,onKeyboardEvent:e.handleKeyboardEvent,history:a}),r.a.createElement(M,{isActive:e.state.letterIDButtonIsActive,letter:e.state.letterID,history:a,onLetterIDChange:e.handleLetterIDChange}))}}),r.a.createElement(c.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",{className:"help"},r.a.createElement("h2",null,"Getting a letter by ID"),r.a.createElement("p",null,"The letter ID's have found their way into printed literature, so it is not entirely unthinkable that you might know one. Enter it here and get the letter."),r.a.createElement("p",null,"Please notice that the ID's are not an unbroken sequence of numbers. The ID's do not start at 1, and there are many 'empty slots'."))}})))),r.a.createElement(c.a,{path:"*/letter/:letterID",render:function(t){return r.a.createElement(B,{url:t,open:e.state.letterDrawerIsOpen?"open":"closed",onLetterIDChange:e.handleLetterIDChange})}}),r.a.createElement(c.a,{path:"/person/:personID/show",component:K}),r.a.createElement(f.a,null,r.a.createElement(c.a,{path:"/person/:person",render:function(t){return r.a.createElement(S,Object.assign({},t,{onLetterIDChange:e.handleLetterIDChange}))}}),r.a.createElement(c.a,{path:"/date/year/:year/month/:month/day/:day",render:function(t){return r.a.createElement(S,Object.assign({},t,{onLetterIDChange:e.handleLetterIDChange}))}}),r.a.createElement(c.a,{path:"/date/year/:year/month/:month",render:function(t){return r.a.createElement(S,Object.assign({},t,{onLetterIDChange:e.handleLetterIDChange}))}})))}}]),t}(n.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var W="pushState"in window.history;o.a.render(r.a.createElement(s.a,{basename:"/hca-letters",forceRefresh:!W},r.a.createElement(c.a,{path:"/",component:_})),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/hca-letters",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/hca-letters","/service-worker.js");R?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):$(e)})}}()}},[[118,1,2]]]);
//# sourceMappingURL=main.bf340220.chunk.js.map