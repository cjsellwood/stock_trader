(this.webpackJsonpstock_trader=this.webpackJsonpstock_trader||[]).push([[0],{44:function(t,e,n){},45:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(22),o=n.n(a),r=(n(44),n(45),n(5)),i=n(6),u=n(17),l=n(2),b=n(14),j=n(4),d="AUTHORIZE",h="DEAUTHORIZE",O="LOADING_FINISH",y="LOAD_STOCKS",f="UPDATE_QUANTITY",x="LOAD_TRANSACTIONS",m="NEW_TRANSACTION",p="SET_CASH",g="SET_ERROR_MESSAGE",k="ADD_STOCK",v="ADD_NEW_ID",S=n(13),Q=n.n(S),w=function(){return{type:d}},A=function(t){return{type:p,cash:t}},C=function(t){return{type:g,message:t}},E=function(){return function(t){var e=localStorage.getItem("jwtToken");Q.a.get("http://localhost:3000/stocks",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var n;t((n=e.data.stocks,{type:y,stocks:n}))})).catch((function(e){t(C(e.response.data.message))}))}},q=function(t,e,n,c){return{type:f,symbol:t,value:e,sell:n,max:c}},I=function(t,e,n){return function(n){var c=localStorage.getItem("jwtToken");Q.a.post("http://localhost:3000/stocks/buy",{stock:t,quantity:e},{headers:{Authorization:"Bearer ".concat(c)}}).then((function(t){var e,c;n((e=t.data.newId,{type:v,_id:e})),n(A(t.data.cash)),localStorage.setItem("cash",t.data.cash),n((c=t.data.transaction,{type:m,transaction:c}))})).catch((function(t){n(C(t.response.data.message))}))}},U=function(){return function(t){var e=localStorage.getItem("jwtToken");Q.a.get("http://localhost:3000/stocks/transactions",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var n;t((n=e.data.transactions,{type:x,transactions:n}))})).catch((function(e){t(C(e.response.data.message))}))}},T=n(0),F=Object(j.b)(null,(function(t){return{onPostRegister:function(e,n){t(function(t,e){return function(n){Q.a.post("http://localhost:3000/register",Object(l.a)({},t)).then((function(t){console.dir(t),localStorage.setItem("jwtToken",t.data.token);var c=Date.now()+Number(t.data.expiresIn);localStorage.setItem("jwtExpires",c),e.push("/"),n(w()),localStorage.setItem("cash",t.data.cash),n(A(t.data.cash))})).catch((function(t){console.log("ERROR",t.response.data.message),n(C(t.response.data.message))}))}}(e,n))},onSetErrorMessage:function(e){t(C(e))}}}))((function(t){var e=Object(c.useState)({username:"",password:"",confirmPassword:""}),n=Object(b.a)(e,2),s=n[0],a=n[1],o=Object(r.g)(),i=function(e){var n=Object(l.a)(Object(l.a)({},s),{},Object(u.a)({},e.target.name,e.target.value));a(n),t.onSetErrorMessage("")};return Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Register"}),Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onPostRegister(s,o)},children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"username",children:"Username"}),Object(T.jsx)("input",{type:"text",id:"username",name:"username",value:s.username,onChange:i,required:!0})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"password",children:"Password"}),Object(T.jsx)("input",{type:"password",id:"password",name:"password",value:s.password,onChange:i,required:!0,minLength:"8"})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(T.jsx)("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:s.confirmPassword,onChange:i,required:!0,minLength:"8"})]}),Object(T.jsx)("button",{type:"submit","aria-label":"submit",children:"Submit"})]})]})})),L=Object(j.b)(null,(function(t){return{onPostLogin:function(e,n){t(function(t,e){return function(n){Q.a.post("http://localhost:3000/login",Object(l.a)({},t)).then((function(t){console.dir(t),localStorage.setItem("jwtToken",t.data.token);var c=Date.now()+Number(t.data.expiresIn);localStorage.setItem("jwtExpires",c),e.push("/"),n(w()),localStorage.setItem("cash",t.data.cash),n(A(t.data.cash))})).catch((function(t){console.log("ERROR",t.response.data.message),n(C(t.response.data.message))}))}}(e,n))},onSetErrorMessage:function(e){t(C(e))}}}))((function(t){var e=Object(c.useState)({username:"",password:""}),n=Object(b.a)(e,2),s=n[0],a=n[1],o=function(e){var n=Object(l.a)(Object(l.a)({},s),{},Object(u.a)({},e.target.name,e.target.value));a(n),t.onSetErrorMessage("")},i=Object(r.g)();return Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Login"}),Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onPostLogin(s,i)},children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"username",children:"Username"}),Object(T.jsx)("input",{type:"text",id:"username",name:"username",value:s.username,onChange:o,required:!0})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"password",children:"Password"}),Object(T.jsx)("input",{type:"password",id:"password",name:"password",value:s.password,onChange:o,required:!0,minLength:"8"})]}),Object(T.jsx)("button",{type:"submit","aria-label":"submit",children:"Submit"})]})]})})),D=Object(j.b)((function(t){return{isAuth:t.auth.isAuth,isLoading:t.auth.isLoading}}))((function(t){return console.log("authredirect"),t.isAuth?Object(T.jsx)(s.a.Fragment,{children:t.children}):t.isLoading?Object(T.jsx)("h1",{children:"Loading..."}):Object(T.jsx)(r.a,{to:"/login"})})),N=Object(j.b)((function(t){return{isAuth:t.auth.isAuth}}))((function(t){return t.isAuth?Object(T.jsx)(s.a.Fragment,{children:t.children}):null})),_=Object(j.b)((function(t){return{isAuth:t.auth.isAuth}}))((function(t){return t.isAuth?null:Object(T.jsx)(s.a.Fragment,{children:t.children})})),B=function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Home"}),Object(T.jsx)("p",{children:"A site to practice trading stocks"}),Object(T.jsx)("p",{children:"Uses real data which is updated daily"}),Object(T.jsx)("p",{children:"With risk free simulated trades and portfolios"})]})},M=n(9),P=Object(j.b)((function(t){return{stocks:t.stocks.stocks,cash:t.auth.cash}}),(function(t){return{onFetchStocks:function(){t(E())},onUpdateQuantity:function(e,n){t(q(e,n))},onBuyStock:function(e,n,c){t(I(e,n))},onAddStock:function(e){t(function(t){return{type:k,stock:t}}(e))},onSetErrorMessage:function(e){t(C(e))}}}))((function(t){Object(c.useEffect)((function(){if(t.stocks.length){var e,n=Object(M.a)(t.stocks);try{for(n.s();!(e=n.n()).done;){var c=e.value;t.onUpdateQuantity(c.symbol,0)}}catch(s){n.e(s)}finally{n.f()}}else t.onFetchStocks()}),[]);var e,n=Object(c.useState)(""),s=Object(b.a)(n,2),a=s[0],o=s[1],r=Object(c.useState)(-1),i=Object(b.a)(r,2),u=i[0],l=i[1];return-1!==u&&(e=[Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:t.stocks[u].symbol}),Object(T.jsxs)("p",{children:["Company: ",t.stocks[u].companyName]}),Object(T.jsx)("p",{children:"Price history"}),t.stocks[u].prices.map((function(t,e){return Object(T.jsxs)("span",{children:[t,", "]},e)})),Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.getAttribute("data-symbol"),c=t.stocks.findIndex((function(t){return t.symbol===n})),s=t.stocks[c].prices[t.stocks[c].prices.length-1],a=t.stocks[c].buyQuantity,o=s*a;0!==o&&o<t.cash?t.onBuyStock(t.stocks[c],a,c):(0===a&&t.onSetErrorMessage("Quantity cannot be 0"),o<t.cash&&t.onSetErrorMessage("Cannot afford"))},"data-symbol":t.stocks[u].symbol,children:[Object(T.jsx)("button",{type:"button","aria-label":"subtract 1",onClick:function(){return t.onUpdateQuantity(t.stocks[u].symbol,t.stocks[u].buyQuantity-1)},children:"-"}),Object(T.jsx)("input",{type:"number",id:"quantity",name:"quantity","aria-label":"quantity",value:t.stocks[u].buyQuantity,min:"0",onChange:function(e){return t.onUpdateQuantity(t.stocks[u].symbol,e.target.value)}}),Object(T.jsx)("button",{type:"button","aria-label":"add 1",onClick:function(){return t.onUpdateQuantity(t.stocks[u].symbol,t.stocks[u].buyQuantity+1)},children:"+"}),Object(T.jsx)("button",{type:"submit",children:"Buy"})]})]},t.stocks[u].symbol)]),Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Search by Symbol"}),Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(a);var n=t.stocks.findIndex((function(t){return t.symbol===a.toUpperCase()}));if(-1!==n)t.onSetErrorMessage(""),l(n);else{var c=localStorage.getItem("jwtToken");Q.a.post("http://localhost:3000/search",{symbol:a},{headers:{Authorization:"Bearer ".concat(c)}}).then((function(e){var n=e.data;t.onAddStock({symbol:n.symbol,companyName:n.companyName,prices:n.prices,buyQuantity:0}),l(t.stocks.length)})).catch((function(e){l(-1),t.onSetErrorMessage(e.response.data.message)}))}},children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"search",children:"Symbol"}),Object(T.jsx)("input",{type:"text",id:"search",name:"search",value:a,onChange:function(e){o(e.target.value),t.onSetErrorMessage("")},required:!0,maxLength:"6"})]}),Object(T.jsx)("button",{type:"submit",children:"Search"})]}),e]})})),R=Object(j.b)((function(t){return{stocks:t.stocks.stocks,cash:t.auth.cash}}),(function(t){return{onFetchStocks:function(){t(E())},onUpdateQuantity:function(e,n){t(q(e,n))},onBuyStock:function(e,n,c){t(I(e,n))}}}))((function(t){Object(c.useEffect)((function(){if(t.stocks.length){var e,n=Object(M.a)(t.stocks);try{for(n.s();!(e=n.n()).done;){var c=e.value;t.onUpdateQuantity(c.symbol,0)}}catch(s){n.e(s)}finally{n.f()}}else t.onFetchStocks()}),[]);var e=function(e){e.preventDefault();var n=e.target.getAttribute("data-symbol"),c=t.stocks.findIndex((function(t){return t.symbol===n})),s=t.stocks[c].prices[t.stocks[c].prices.length-1],a=t.stocks[c].buyQuantity,o=s*a;console.log(o),0!==o&&o<t.cash?(t.onBuyStock(t.stocks[c],a,c),t.onUpdateQuantity(n,0)):console.log("Can't Afford or quantity 0")},n=t.stocks.map((function(n){var c=(n.prices[n.prices.length-1]-n.prices[n.prices.length-2])/n.prices[n.prices.length-2]*100;return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:Object(T.jsx)(i.b,{to:"/stocks/".concat(n.symbol),children:n.symbol})}),Object(T.jsx)("td",{children:n.companyName}),Object(T.jsx)("td",{children:n.prices.length>1?c.toFixed(2)+"%":"-"}),Object(T.jsx)("td",{children:n.prices[n.prices.length-1].toFixed(2)}),Object(T.jsx)("td",{children:Object(T.jsxs)("form",{onSubmit:e,"data-symbol":n.symbol,children:[Object(T.jsx)("button",{type:"button","aria-label":"subtract 1",onClick:function(){return t.onUpdateQuantity(n.symbol,n.buyQuantity-1)},children:"-"}),Object(T.jsx)("input",{type:"number",id:"quantity",name:"quantity","aria-label":"quantity",value:n.buyQuantity,min:"0",onChange:function(e){return t.onUpdateQuantity(n.symbol,e.target.value)}}),Object(T.jsx)("button",{type:"button","aria-label":"add 1",onClick:function(){return t.onUpdateQuantity(n.symbol,n.buyQuantity+1)},children:"+"}),Object(T.jsx)("button",{type:"submit",children:"Buy"})]})})]},n.symbol)}));return Object(T.jsx)("div",{children:Object(T.jsxs)("table",{children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"Symbol"}),Object(T.jsx)("th",{children:"Company"}),Object(T.jsx)("th",{children:"Change"}),Object(T.jsx)("th",{children:"Price"}),Object(T.jsx)("th",{children:"Buy"})]})}),Object(T.jsx)("tbody",{children:n})]})})})),z=Object(j.b)((function(t){return{stocks:t.stocks.stocks}}),(function(t){return{onFetchStocks:function(){t(E())},onUpdateQuantity:function(e,n){t(q(e,n))},onBuyStock:function(e,n,c){t(I(e,n))}}}))((function(t){Object(c.useEffect)((function(){if(t.stocks.length){var e,n=Object(M.a)(t.stocks);try{for(n.s();!(e=n.n()).done;){var c=e.value;t.onUpdateQuantity(c.symbol,0)}}catch(s){n.e(s)}finally{n.f()}}else t.onFetchStocks()}),[]);var e=function(e){e.preventDefault();var n=e.target.getAttribute("data-symbol"),c=t.stocks.findIndex((function(t){return t.symbol===n})),s=t.stocks[c].prices[t.stocks[c].prices.length-1],a=t.stocks[c].buyQuantity,o=s*a;console.log(o),0!==o&&o<t.cash?(t.onBuyStock(t.stocks[c],a,c),t.onUpdateQuantity(n,0)):console.log("Can't Afford or quantity 0")},n=Object(r.h)().symbol,s=t.stocks.filter((function(t){return t.symbol===n.toUpperCase()})),a=[];return s.length&&(a=s.map((function(n){return Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:n.symbol}),Object(T.jsx)("p",{children:n.companyName}),Object(T.jsx)("p",{children:"Price history"}),n.prices.map((function(t,e){return Object(T.jsxs)("span",{children:[t,", "]},e)})),Object(T.jsxs)("form",{onSubmit:e,"data-symbol":n.symbol,children:[Object(T.jsx)("button",{type:"button","aria-label":"subtract 1",onClick:function(){return t.onUpdateQuantity(n.symbol,n.buyQuantity-1)},children:"-"}),Object(T.jsx)("input",{type:"number",id:"quantity",name:"quantity","aria-label":"quantity",value:n.buyQuantity,min:"0",onChange:function(e){return t.onUpdateQuantity(n.symbol,e.target.value)}}),Object(T.jsx)("button",{type:"button","aria-label":"add 1",onClick:function(){return t.onUpdateQuantity(n.symbol,n.buyQuantity+1)},children:"+"}),Object(T.jsx)("button",{type:"submit",children:"Buy"})]})]},n.symbol)}))),Object(T.jsx)("div",{children:a})})),H=Object(j.b)((function(t){return{stocks:t.stocks.stocks,transactions:t.stocks.transactions,isTransactionsLoaded:t.stocks.isTransactionsLoaded}}),(function(t){return{onFetchStocks:function(){t(E())},onFetchTransactions:function(){t(U())}}}))((function(t){Object(c.useEffect)((function(){t.stocks.length||t.onFetchStocks(),t.isTransactionsLoaded||t.onFetchTransactions()}));var e=t.transactions.map((function(e){var n=t.stocks.filter((function(t){return e.stock===t._id}))[0];return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:Object(T.jsx)(i.b,{to:"/stocks/".concat(n.symbol),children:n.symbol})}),Object(T.jsx)("td",{children:n.companyName}),Object(T.jsx)("td",{children:new Date(e.date).toLocaleDateString()}),Object(T.jsx)("td",{children:e.quantity}),Object(T.jsx)("td",{children:e.price.toFixed(2)})]},e._id)}));return Object(T.jsx)("div",{children:Object(T.jsxs)("table",{children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"Symbol"}),Object(T.jsx)("th",{children:"Company"}),Object(T.jsx)("th",{children:"Date"}),Object(T.jsx)("th",{children:"Quantity"}),Object(T.jsx)("th",{children:"Price"})]})}),Object(T.jsx)("tbody",{children:e.reverse()})]})})})),W=Object(j.b)((function(t){return{stocks:t.stocks.stocks,owned:t.stocks.owned,isTransactionsLoaded:t.stocks.isTransactionsLoaded,cash:t.auth.cash}}),(function(t){return{onFetchStocks:function(){t(E())},onFetchTransactions:function(){t(U())},onUpdateQuantity:function(e,n,c,s){t(q(e,n,c,s))},onBuyStock:function(e,n,c){t(I(e,n))}}}))((function(t){Object(c.useEffect)((function(){if(t.stocks.length){var e,n=Object(M.a)(t.stocks);try{for(n.s();!(e=n.n()).done;){var c=e.value;t.onUpdateQuantity(c.symbol,0)}}catch(s){n.e(s)}finally{n.f()}}else t.onFetchStocks();t.isTransactionsLoaded||t.onFetchTransactions()}),[]);var e=function(e){e.preventDefault();var n=e.target.getAttribute("data-symbol"),c=t.stocks.findIndex((function(t){return t.symbol===n})),s=t.stocks[c].prices[t.stocks[c].prices.length-1],a=t.stocks[c].buyQuantity,o=s*a;console.log(o),0!==a&&o<t.cash?(t.onBuyStock(t.stocks[c],a,c),t.onUpdateQuantity(n,0)):console.log("Can't Afford or quantity 0")},n=function(e){e.preventDefault();var n=e.target.getAttribute("data-symbol"),c=t.stocks.findIndex((function(t){return t.symbol===n})),s=t.owned[n].quantity,a=t.stocks[c].sellQuantity;0!==a&&a<=s&&(t.onBuyStock(t.stocks[c],-a,c),t.onUpdateQuantity(n,0,"sell"))},s=0,a=[],o=function(c){var o=t.stocks.filter((function(t){return c===t.symbol}))[0],r=(o.prices[o.prices.length-1]-o.prices[o.prices.length-2])/o.prices[o.prices.length-2]*100;a.push(Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:Object(T.jsx)(i.b,{to:"/stocks/".concat(c),children:c})}),Object(T.jsx)("td",{children:o.companyName}),Object(T.jsx)("td",{children:o.prices.length>1?r.toFixed(2)+"%":"-"}),Object(T.jsx)("td",{children:t.owned[c].quantity}),Object(T.jsx)("td",{children:o.prices[o.prices.length-1].toFixed(2)}),Object(T.jsx)("td",{children:(o.prices[o.prices.length-1]*t.owned[c].quantity).toFixed(2)}),Object(T.jsx)("td",{children:Object(T.jsxs)("form",{onSubmit:e,"data-symbol":o.symbol,children:[Object(T.jsx)("button",{type:"button","aria-label":"subtract 1",onClick:function(){return t.onUpdateQuantity(o.symbol,o.buyQuantity-1)},children:"-"}),Object(T.jsx)("input",{type:"number",id:"quantity",name:"quantity","aria-label":"quantity",value:o.buyQuantity,min:"0",onChange:function(e){return t.onUpdateQuantity(o.symbol,e.target.value)}}),Object(T.jsx)("button",{type:"button","aria-label":"add 1",onClick:function(){return t.onUpdateQuantity(o.symbol,o.buyQuantity+1)},children:"+"}),Object(T.jsx)("button",{type:"submit",children:"Buy"})]})}),Object(T.jsx)("td",{children:Object(T.jsxs)("form",{onSubmit:n,"data-symbol":o.symbol,children:[Object(T.jsx)("button",{type:"button","aria-label":"subtract 1",onClick:function(){return t.onUpdateQuantity(o.symbol,o.sellQuantity-1,"sell",t.owned[c].quantity)},children:"-"}),Object(T.jsx)("input",{type:"number",id:"quantity",name:"quantity","aria-label":"quantity",value:o.sellQuantity,min:"0",onChange:function(e){return t.onUpdateQuantity(o.symbol,e.target.value,"sell")},max:t.owned[c].quantity}),Object(T.jsx)("button",{type:"button","aria-label":"add 1",onClick:function(){return t.onUpdateQuantity(o.symbol,o.sellQuantity+1,"sell",t.owned[c].quantity)},children:"+"}),Object(T.jsx)("button",{type:"submit",children:"Sell"})]})})]},c)),s+=o.prices[o.prices.length-1]*t.owned[c].quantity};for(var r in t.owned)o(r);return Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Owned"}),Object(T.jsx)("div",{children:Object(T.jsxs)("table",{children:[Object(T.jsxs)("thead",{children:[Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"Symbol"}),Object(T.jsx)("th",{children:"Company"}),Object(T.jsx)("th",{children:"Change"}),Object(T.jsx)("th",{children:"Quantity"}),Object(T.jsx)("th",{children:"Price"}),Object(T.jsx)("th",{children:"Value"}),Object(T.jsx)("th",{children:"Buy"}),Object(T.jsx)("th",{children:"Sell"})]}),Object(T.jsx)("tr",{})]}),Object(T.jsx)("tbody",{children:a}),Object(T.jsxs)("tfoot",{children:[Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{}),Object(T.jsx)("td",{}),Object(T.jsx)("td",{}),Object(T.jsx)("td",{}),Object(T.jsx)("td",{children:"Cash: "}),Object(T.jsx)("td",{children:t.cash.toFixed(2)})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{}),Object(T.jsx)("td",{}),Object(T.jsx)("td",{}),Object(T.jsx)("td",{}),Object(T.jsx)("td",{children:"Total: "}),Object(T.jsx)("td",{children:(s+t.cash).toFixed(2)})]})]})]})})]})})),X=Object(j.b)((function(t){return{isAuth:t.auth.isAuth,cash:t.auth.cash,errorMessage:t.auth.errorMessage}}),(function(t){return{onAuthorize:function(){t(w())},onDeauthorize:function(){t({type:h})},onLoadingFinish:function(){t({type:O})},onSetCash:function(e){t(A(e))},onSetErrorMessage:function(e){t(C(e))}}}))((function(t){var e=Object(r.g)();e.listen((function(e){t.onSetErrorMessage("")}));Object(c.useEffect)((function(){(function(){var t=localStorage.getItem("jwtExpires");return t&&Number(t)>Date.now()})()&&(t.onAuthorize(),t.onSetCash(localStorage.getItem("cash"))),t.onLoadingFinish()}),[]);return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)("nav",{children:Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/",children:"Home"})}),Object(T.jsx)(_,{children:Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/register",children:"Register"})})}),Object(T.jsx)(_,{children:Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/login",children:"Login"})})}),Object(T.jsx)(N,{children:Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/transactions",children:"Transactions"})})}),Object(T.jsx)(N,{children:Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/stocks",children:"Stocks"})})}),Object(T.jsx)(N,{children:Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/owned",children:"Owned"})})}),Object(T.jsx)(N,{children:Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/search",children:"Search"})})}),Object(T.jsx)(N,{children:Object(T.jsx)("li",{children:Object(T.jsx)("button",{onClick:function(){localStorage.removeItem("jwtToken"),localStorage.removeItem("jwtExpires"),localStorage.removeItem("cash"),e.push("/"),t.onDeauthorize()},children:"Log out"})})}),Object(T.jsx)(N,{children:Object(T.jsxs)("li",{children:["Cash: $",t.cash]})}),Object(T.jsx)("h2",{children:t.errorMessage})]})}),Object(T.jsx)("main",{children:Object(T.jsxs)(r.d,{children:[Object(T.jsx)(r.b,{path:"/",exact:!0,children:Object(T.jsx)(B,{})}),Object(T.jsx)(r.b,{path:"/register",children:Object(T.jsx)(F,{})}),Object(T.jsx)(r.b,{path:"/login",children:Object(T.jsx)(L,{})}),Object(T.jsx)(r.b,{path:"/search",children:Object(T.jsx)(D,{children:Object(T.jsx)(P,{})})}),Object(T.jsx)(r.b,{path:"/transactions",children:Object(T.jsx)(D,{children:Object(T.jsx)(H,{})})}),Object(T.jsx)(r.b,{path:"/stocks/:symbol",children:Object(T.jsx)(D,{children:Object(T.jsx)(z,{})})}),Object(T.jsx)(r.b,{path:"/owned",children:Object(T.jsx)(D,{children:Object(T.jsx)(W,{})})}),Object(T.jsx)(r.b,{path:"/stocks",children:Object(T.jsx)(D,{children:Object(T.jsx)(R,{})})})]})}),Object(T.jsx)("footer",{children:Object(T.jsx)("a",{href:"https://iexcloud.io",children:"Data provided by IEX Cloud"})})]})})),G=n(15),J={isAuth:!1,isLoading:!0,errorMessage:""},K=function(t,e){return Object(l.a)(Object(l.a)({},t),{},{isAuth:!0})},V=function(t,e){return Object(l.a)(Object(l.a)({},t),{},{isAuth:!1})},Z=function(t,e){return Object(l.a)(Object(l.a)({},t),{},{isLoading:!1})},Y=function(t,e){return Object(l.a)(Object(l.a)({},t),{},{cash:Number(e.cash)})},$=function(t,e){return Object(l.a)(Object(l.a)({},t),{},{errorMessage:e.message})},tt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return K(t);case h:return V(t);case O:return Z(t);case p:return Y(t,e);case g:return $(t,e);default:return t}},et=n(21),nt={stocks:[],transactions:[],isTransactionsLoaded:!1,owned:{}},ct=function(t,e){var n,c=e.stocks,s=Object(M.a)(c);try{for(s.s();!(n=s.n()).done;){var a=n.value;a.buyQuantity=0,a.sellQuantity=0}}catch(o){s.e(o)}finally{s.f()}return Object(l.a)(Object(l.a)({},t),{},{stocks:c})},st=function(t,e){var n,c=[],s=Object(M.a)(t.stocks);try{for(s.s();!(n=s.n()).done;){var a=n.value;c.push(Object(l.a)(Object(l.a)({},a),{},{prices:Object(et.a)(a.prices)}))}}catch(r){s.e(r)}finally{s.f()}var o=c.findIndex((function(t){return t.symbol===e.symbol}));return"sell"===e.sell?(c[o].sellQuantity=Number(e.value),c[o].sellQuantity<0&&(c[o].sellQuantity=0),c[o].sellQuantity>e.max&&(c[o].sellQuantity=t.stocks[o].sellQuantity)):(c[o].buyQuantity=Number(e.value),c[o].buyQuantity<0&&(c[o].buyQuantity=0),c[o].sellQuantity>e.max&&(c[o].sellQuantity=t.stocks[o].sellQuantity)),Object(l.a)(Object(l.a)({},t),{},{stocks:c})},at=function(t,e){var n,c={},s=Object(M.a)(e);try{var a=function(){var e=n.value,s=t.stocks.filter((function(t){return e.stock===t._id}))[0];c[s.symbol]||(c[s.symbol]={},c[s.symbol].companyName=s.companyName,c[s.symbol].prices=s.prices),c[s.symbol].quantity||(c[s.symbol].quantity=0),c[s.symbol].quantity=c[s.symbol].quantity+e.quantity};for(s.s();!(n=s.n()).done;)a()}catch(r){s.e(r)}finally{s.f()}for(var o in c)0===c[o].quantity&&delete c[o];return c},ot=function(t,e){var n=e.transactions,c=at(t,n);return Object(l.a)(Object(l.a)({},t),{},{isTransactionsLoaded:!0,transactions:n,owned:c})},rt=function(t,e){var n=[].concat(Object(et.a)(t.transactions),[e.transaction]),c=at(t,n);return Object(l.a)(Object(l.a)({},t),{},{transactions:n,owned:c})},it=function(t,e){return Object(l.a)(Object(l.a)({},t),{},{stocks:[].concat(Object(et.a)(t.stocks),[e.stock])})},ut=function(t,e){var n,c=[],s=Object(M.a)(t.stocks);try{for(s.s();!(n=s.n()).done;){var a=n.value;c.push(Object(l.a)(Object(l.a)({},a),{},{prices:Object(et.a)(a.prices)}))}}catch(o){s.e(o)}finally{s.f()}return c[c.length-1]._id||(c[c.length-1]._id=e._id),Object(l.a)(Object(l.a)({},t),{},{stocks:c})},lt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return ct(t,e);case f:return st(t,e);case x:return ot(t,e);case m:return rt(t,e);case k:return it(t,e);case v:return ut(t,e);default:return t}},bt=n(39),jt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,dt=Object(G.c)({auth:tt,stocks:lt}),ht=Object(G.e)(dt,jt(Object(G.a)(bt.a)));o.a.render(Object(T.jsx)(s.a.StrictMode,{children:Object(T.jsx)(j.a,{store:ht,children:Object(T.jsx)(i.a,{children:Object(T.jsx)(X,{})})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.bce48a9e.chunk.js.map