(this.webpackJsonpstock_trader=this.webpackJsonpstock_trader||[]).push([[0],{44:function(t,e,n){},45:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),o=n(22),r=n.n(o),a=(n(44),n(45),n(5)),i=n(6),u=n(17),l=n(2),b=n(14),j=n(4),d="AUTHORIZE",h="DEAUTHORIZE",O="LOADING_FINISH",y="LOAD_STOCKS",f="UPDATE_QUANTITY",x="LOAD_TRANSACTIONS",m="NEW_TRANSACTION",p="SET_CASH",g="SET_ERROR_MESSAGE",k="ADD_STOCK",v="ADD_NEW_ID",S=n(13),w=n.n(S),Q=function(){return{type:d}},A=function(t){return{type:p,cash:t}},C=function(t){return{type:g,message:t}},E=function(){return function(t){var e=localStorage.getItem("jwtToken");w.a.get("http://localhost:3000/stocks",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var n;t((n=e.data.stocks,{type:y,stocks:n}))})).catch((function(e){e.response?t(C(e.response.data.message)):t(C("Something went wrong"))}))}},q=function(t,e,n,c){return{type:f,symbol:t,value:e,sell:n,max:c}},I=function(t,e,n){return function(n){var c=localStorage.getItem("jwtToken");w.a.post("http://localhost:3000/stocks/buy",{stock:t,quantity:e},{headers:{Authorization:"Bearer ".concat(c)}}).then((function(t){var e,c;n((e=t.data.newId,{type:v,_id:e})),n(A(t.data.cash)),localStorage.setItem("cash",t.data.cash),n((c=t.data.transaction,{type:m,transaction:c}))})).catch((function(t){t.response?n(C(t.response.data.message)):n(C("Something went wrong"))}))}},U=function(){return function(t){var e=localStorage.getItem("jwtToken");w.a.get("http://localhost:3000/stocks/transactions",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var n;t((n=e.data.transactions,{type:x,transactions:n}))})).catch((function(e){e.response?t(C(e.response.data.message)):t(C("Something went wrong"))}))}},T=n(0),F=Object(j.b)(null,(function(t){return{onPostRegister:function(e,n){t(function(t,e){return function(n){w.a.post("http://localhost:3000/register",Object(l.a)({},t)).then((function(t){console.dir(t),localStorage.setItem("jwtToken",t.data.token);var c=Date.now()+Number(t.data.expiresIn);localStorage.setItem("jwtExpires",c),e.push("/"),n(Q()),localStorage.setItem("cash",t.data.cash),n(A(t.data.cash))})).catch((function(t){t.response?n(C(t.response.data.message)):n(C("Something went wrong"))}))}}(e,n))},onSetErrorMessage:function(e){t(C(e))}}}))((function(t){var e=Object(c.useState)({username:"",password:"",confirmPassword:""}),n=Object(b.a)(e,2),s=n[0],o=n[1],r=Object(a.g)(),i=function(e){var n=Object(l.a)(Object(l.a)({},s),{},Object(u.a)({},e.target.name,e.target.value));o(n),t.onSetErrorMessage("")};return Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Register"}),Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onPostRegister(s,r)},children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"username",children:"Username"}),Object(T.jsx)("input",{type:"text",id:"username",name:"username",value:s.username,onChange:i,required:!0})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"password",children:"Password"}),Object(T.jsx)("input",{type:"password",id:"password",name:"password",value:s.password,onChange:i,required:!0,minLength:"8"})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(T.jsx)("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:s.confirmPassword,onChange:i,required:!0,minLength:"8"})]}),Object(T.jsx)("button",{type:"submit","aria-label":"submit",children:"Submit"})]})]})})),L=Object(j.b)(null,(function(t){return{onPostLogin:function(e,n){t(function(t,e){return function(n){w.a.post("http://localhost:3000/login",Object(l.a)({},t)).then((function(t){console.dir(t),localStorage.setItem("jwtToken",t.data.token);var c=Date.now()+Number(t.data.expiresIn);localStorage.setItem("jwtExpires",c),e.push("/"),n(Q()),localStorage.setItem("cash",t.data.cash),n(A(t.data.cash))})).catch((function(t){t.response?n(C(t.response.data.message)):n(C("Something went wrong"))}))}}(e,n))},onSetErrorMessage:function(e){t(C(e))}}}))((function(t){var e=Object(c.useState)({username:"",password:""}),n=Object(b.a)(e,2),s=n[0],o=n[1],r=function(e){var n=Object(l.a)(Object(l.a)({},s),{},Object(u.a)({},e.target.name,e.target.value));o(n),t.onSetErrorMessage("")},i=Object(a.g)();return Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Login"}),Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onPostLogin(s,i)},children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"username",children:"Username"}),Object(T.jsx)("input",{type:"text",id:"username",name:"username",value:s.username,onChange:r,required:!0})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"password",children:"Password"}),Object(T.jsx)("input",{type:"password",id:"password",name:"password",value:s.password,onChange:r,required:!0,minLength:"8"})]}),Object(T.jsx)("button",{type:"submit","aria-label":"submit",children:"Submit"})]})]})})),D=Object(j.b)((function(t){return{isAuth:t.auth.isAuth,isLoading:t.auth.isLoading}}))((function(t){return console.log("authredirect"),t.isAuth?Object(T.jsx)(s.a.Fragment,{children:t.children}):t.isLoading?Object(T.jsx)("h1",{children:"Loading..."}):Object(T.jsx)(a.a,{to:"/login"})})),N=Object(j.b)((function(t){return{isAuth:t.auth.isAuth}}))((function(t){return t.isAuth?Object(T.jsx)(s.a.Fragment,{children:t.children}):null})),_=Object(j.b)((function(t){return{isAuth:t.auth.isAuth}}))((function(t){return t.isAuth?null:Object(T.jsx)(s.a.Fragment,{children:t.children})})),M=function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Home"}),Object(T.jsx)("p",{children:"A site to practice trading stocks"}),Object(T.jsx)("p",{children:"Uses real data which is updated daily"}),Object(T.jsx)("p",{children:"With risk free simulated trades and portfolios"})]})},B=n(9),P=Object(j.b)((function(t){return{stocks:t.stocks.stocks,cash:t.auth.cash}}),(function(t){return{onFetchStocks:function(){t(E())},onUpdateQuantity:function(e,n){t(q(e,n))},onBuyStock:function(e,n,c){t(I(e,n))},onAddStock:function(e){t(function(t){return{type:k,stock:t}}(e))},onSetErrorMessage:function(e){t(C(e))}}}))((function(t){Object(c.useEffect)((function(){if(t.stocks.length){var e,n=Object(B.a)(t.stocks);try{for(n.s();!(e=n.n()).done;){var c=e.value;t.onUpdateQuantity(c.symbol,0)}}catch(s){n.e(s)}finally{n.f()}}else t.onFetchStocks()}),[]);var e,n=Object(c.useState)(""),s=Object(b.a)(n,2),o=s[0],r=s[1],a=Object(c.useState)(-1),i=Object(b.a)(a,2),u=i[0],l=i[1];return-1!==u&&(e=[Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:t.stocks[u].symbol}),Object(T.jsxs)("p",{children:["Company: ",t.stocks[u].companyName]}),Object(T.jsx)("p",{children:"Price history"}),t.stocks[u].prices.map((function(t,e){return Object(T.jsxs)("span",{children:[t,", "]},e)})),Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.getAttribute("data-symbol"),c=t.stocks.findIndex((function(t){return t.symbol===n})),s=t.stocks[c].prices[t.stocks[c].prices.length-1],o=t.stocks[c].buyQuantity,r=s*o;0!==r&&r<t.cash?t.onBuyStock(t.stocks[c],o,c):(0===o&&t.onSetErrorMessage("Quantity cannot be 0"),r<t.cash&&t.onSetErrorMessage("Cannot afford"))},"data-symbol":t.stocks[u].symbol,children:[Object(T.jsx)("button",{type:"button","aria-label":"subtract 1",onClick:function(){return t.onUpdateQuantity(t.stocks[u].symbol,t.stocks[u].buyQuantity-1)},children:"-"}),Object(T.jsx)("input",{type:"number",id:"quantity",name:"quantity","aria-label":"quantity",value:t.stocks[u].buyQuantity,min:"0",onChange:function(e){return t.onUpdateQuantity(t.stocks[u].symbol,e.target.value)}}),Object(T.jsx)("button",{type:"button","aria-label":"add 1",onClick:function(){return t.onUpdateQuantity(t.stocks[u].symbol,t.stocks[u].buyQuantity+1)},children:"+"}),Object(T.jsx)("button",{type:"submit",children:"Buy"})]})]},t.stocks[u].symbol)]),Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Search by Symbol"}),Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(o);var n=t.stocks.findIndex((function(t){return t.symbol===o.toUpperCase()}));if(-1!==n)t.onSetErrorMessage(""),l(n);else{var c=localStorage.getItem("jwtToken");w.a.post("http://localhost:3000/search",{symbol:o},{headers:{Authorization:"Bearer ".concat(c)}}).then((function(e){var n=e.data;t.onAddStock({symbol:n.symbol,companyName:n.companyName,prices:n.prices,buyQuantity:0}),l(t.stocks.length)})).catch((function(e){l(-1),e.response?t.onSetErrorMessage(e.response.data.message):t.onSetErrorMessage("Something went wrong")}))}},children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"search",children:"Symbol"}),Object(T.jsx)("input",{type:"text",id:"search",name:"search",value:o,onChange:function(e){r(e.target.value),t.onSetErrorMessage("")},required:!0,maxLength:"6"})]}),Object(T.jsx)("button",{type:"submit",children:"Search"})]}),e]})})),R=Object(j.b)((function(t){return{stocks:t.stocks.stocks,cash:t.auth.cash}}),(function(t){return{onFetchStocks:function(){t(E())},onUpdateQuantity:function(e,n){t(q(e,n))},onBuyStock:function(e,n,c){t(I(e,n))}}}))((function(t){Object(c.useEffect)((function(){if(t.stocks.length){var e,n=Object(B.a)(t.stocks);try{for(n.s();!(e=n.n()).done;){var c=e.value;t.onUpdateQuantity(c.symbol,0)}}catch(s){n.e(s)}finally{n.f()}}else t.onFetchStocks()}),[]);var e=function(e){e.preventDefault();var n=e.target.getAttribute("data-symbol"),c=t.stocks.findIndex((function(t){return t.symbol===n})),s=t.stocks[c].prices[t.stocks[c].prices.length-1],o=t.stocks[c].buyQuantity,r=s*o;console.log(r),0!==r&&r<t.cash?(t.onBuyStock(t.stocks[c],o,c),t.onUpdateQuantity(n,0)):console.log("Can't Afford or quantity 0")},n=t.stocks.map((function(n){var c=(n.prices[n.prices.length-1]-n.prices[n.prices.length-2])/n.prices[n.prices.length-2]*100;return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:Object(T.jsx)(i.b,{to:"/stocks/".concat(n.symbol),children:n.symbol})}),Object(T.jsx)("td",{children:n.companyName}),Object(T.jsx)("td",{children:n.prices.length>1?c.toFixed(2)+"%":"-"}),Object(T.jsx)("td",{children:n.prices[n.prices.length-1].toFixed(2)}),Object(T.jsx)("td",{children:Object(T.jsxs)("form",{onSubmit:e,"data-symbol":n.symbol,children:[Object(T.jsx)("button",{type:"button","aria-label":"subtract 1",onClick:function(){return t.onUpdateQuantity(n.symbol,n.buyQuantity-1)},children:"-"}),Object(T.jsx)("input",{type:"number",id:"quantity",name:"quantity","aria-label":"quantity",value:n.buyQuantity,min:"0",onChange:function(e){return t.onUpdateQuantity(n.symbol,e.target.value)}}),Object(T.jsx)("button",{type:"button","aria-label":"add 1",onClick:function(){return t.onUpdateQuantity(n.symbol,n.buyQuantity+1)},children:"+"}),Object(T.jsx)("button",{type:"submit",children:"Buy"})]})})]},n.symbol)}));return Object(T.jsx)("div",{children:Object(T.jsxs)("table",{children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"Symbol"}),Object(T.jsx)("th",{children:"Company"}),Object(T.jsx)("th",{children:"Change"}),Object(T.jsx)("th",{children:"Price"}),Object(T.jsx)("th",{children:"Buy"})]})}),Object(T.jsx)("tbody",{children:n})]})})})),z=Object(j.b)((function(t){return{stocks:t.stocks.stocks}}),(function(t){return{onFetchStocks:function(){t(E())},onUpdateQuantity:function(e,n){t(q(e,n))},onBuyStock:function(e,n,c){t(I(e,n))}}}))((function(t){Object(c.useEffect)((function(){if(t.stocks.length){var e,n=Object(B.a)(t.stocks);try{for(n.s();!(e=n.n()).done;){var c=e.value;t.onUpdateQuantity(c.symbol,0)}}catch(s){n.e(s)}finally{n.f()}}else t.onFetchStocks()}),[]);var e=function(e){e.preventDefault();var n=e.target.getAttribute("data-symbol"),c=t.stocks.findIndex((function(t){return t.symbol===n})),s=t.stocks[c].prices[t.stocks[c].prices.length-1],o=t.stocks[c].buyQuantity,r=s*o;console.log(r),0!==r&&r<t.cash?(t.onBuyStock(t.stocks[c],o,c),t.onUpdateQuantity(n,0)):console.log("Can't Afford or quantity 0")},n=Object(a.h)().symbol,s=t.stocks.filter((function(t){return t.symbol===n.toUpperCase()})),o=[];return s.length&&(o=s.map((function(n){return Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:n.symbol}),Object(T.jsx)("p",{children:n.companyName}),Object(T.jsx)("p",{children:"Price history"}),n.prices.map((function(t,e){return Object(T.jsxs)("span",{children:[t,", "]},e)})),Object(T.jsxs)("form",{onSubmit:e,"data-symbol":n.symbol,children:[Object(T.jsx)("button",{type:"button","aria-label":"subtract 1",onClick:function(){return t.onUpdateQuantity(n.symbol,n.buyQuantity-1)},children:"-"}),Object(T.jsx)("input",{type:"number",id:"quantity",name:"quantity","aria-label":"quantity",value:n.buyQuantity,min:"0",onChange:function(e){return t.onUpdateQuantity(n.symbol,e.target.value)}}),Object(T.jsx)("button",{type:"button","aria-label":"add 1",onClick:function(){return t.onUpdateQuantity(n.symbol,n.buyQuantity+1)},children:"+"}),Object(T.jsx)("button",{type:"submit",children:"Buy"})]})]},n.symbol)}))),Object(T.jsx)("div",{children:o})})),H=Object(j.b)((function(t){return{stocks:t.stocks.stocks,transactions:t.stocks.transactions,isTransactionsLoaded:t.stocks.isTransactionsLoaded}}),(function(t){return{onFetchStocks:function(){t(E())},onFetchTransactions:function(){t(U())}}}))((function(t){Object(c.useEffect)((function(){t.stocks.length||t.onFetchStocks(),t.isTransactionsLoaded||t.onFetchTransactions()}));var e=t.transactions.map((function(e){var n=t.stocks.filter((function(t){return e.stock===t._id}))[0];return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:Object(T.jsx)(i.b,{to:"/stocks/".concat(n.symbol),children:n.symbol})}),Object(T.jsx)("td",{children:n.companyName}),Object(T.jsx)("td",{children:new Date(e.date).toLocaleDateString()}),Object(T.jsx)("td",{children:e.quantity}),Object(T.jsx)("td",{children:e.price.toFixed(2)})]},e._id)}));return Object(T.jsx)("div",{children:Object(T.jsxs)("table",{children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"Symbol"}),Object(T.jsx)("th",{children:"Company"}),Object(T.jsx)("th",{children:"Date"}),Object(T.jsx)("th",{children:"Quantity"}),Object(T.jsx)("th",{children:"Price"})]})}),Object(T.jsx)("tbody",{children:e.reverse()})]})})})),W=Object(j.b)((function(t){return{stocks:t.stocks.stocks,owned:t.stocks.owned,isTransactionsLoaded:t.stocks.isTransactionsLoaded,cash:t.auth.cash}}),(function(t){return{onFetchStocks:function(){t(E())},onFetchTransactions:function(){t(U())},onUpdateQuantity:function(e,n,c,s){t(q(e,n,c,s))},onBuyStock:function(e,n,c){t(I(e,n))}}}))((function(t){Object(c.useEffect)((function(){if(t.stocks.length){var e,n=Object(B.a)(t.stocks);try{for(n.s();!(e=n.n()).done;){var c=e.value;t.onUpdateQuantity(c.symbol,0)}}catch(s){n.e(s)}finally{n.f()}}else t.onFetchStocks();t.isTransactionsLoaded||t.onFetchTransactions()}),[]);var e=function(e){e.preventDefault();var n=e.target.getAttribute("data-symbol"),c=t.stocks.findIndex((function(t){return t.symbol===n})),s=t.stocks[c].prices[t.stocks[c].prices.length-1],o=t.stocks[c].buyQuantity,r=s*o;console.log(r),0!==o&&r<t.cash?(t.onBuyStock(t.stocks[c],o,c),t.onUpdateQuantity(n,0)):console.log("Can't Afford or quantity 0")},n=function(e){e.preventDefault();var n=e.target.getAttribute("data-symbol"),c=t.stocks.findIndex((function(t){return t.symbol===n})),s=t.owned[n].quantity,o=t.stocks[c].sellQuantity;0!==o&&o<=s&&(t.onBuyStock(t.stocks[c],-o,c),t.onUpdateQuantity(n,0,"sell"))},s=0,o=[],r=function(c){var r=t.stocks.filter((function(t){return c===t.symbol}))[0],a=(r.prices[r.prices.length-1]-r.prices[r.prices.length-2])/r.prices[r.prices.length-2]*100;o.push(Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:Object(T.jsx)(i.b,{to:"/stocks/".concat(c),children:c})}),Object(T.jsx)("td",{children:r.companyName}),Object(T.jsx)("td",{children:r.prices.length>1?a.toFixed(2)+"%":"-"}),Object(T.jsx)("td",{children:t.owned[c].quantity}),Object(T.jsx)("td",{children:r.prices[r.prices.length-1].toFixed(2)}),Object(T.jsx)("td",{children:(r.prices[r.prices.length-1]*t.owned[c].quantity).toFixed(2)}),Object(T.jsx)("td",{children:Object(T.jsxs)("form",{onSubmit:e,"data-symbol":r.symbol,children:[Object(T.jsx)("button",{type:"button","aria-label":"subtract 1",onClick:function(){return t.onUpdateQuantity(r.symbol,r.buyQuantity-1)},children:"-"}),Object(T.jsx)("input",{type:"number",id:"quantity",name:"quantity","aria-label":"quantity",value:r.buyQuantity,min:"0",onChange:function(e){return t.onUpdateQuantity(r.symbol,e.target.value)}}),Object(T.jsx)("button",{type:"button","aria-label":"add 1",onClick:function(){return t.onUpdateQuantity(r.symbol,r.buyQuantity+1)},children:"+"}),Object(T.jsx)("button",{type:"submit",children:"Buy"})]})}),Object(T.jsx)("td",{children:Object(T.jsxs)("form",{onSubmit:n,"data-symbol":r.symbol,children:[Object(T.jsx)("button",{type:"button","aria-label":"subtract 1",onClick:function(){return t.onUpdateQuantity(r.symbol,r.sellQuantity-1,"sell",t.owned[c].quantity)},children:"-"}),Object(T.jsx)("input",{type:"number",id:"quantity",name:"quantity","aria-label":"quantity",value:r.sellQuantity,min:"0",onChange:function(e){return t.onUpdateQuantity(r.symbol,e.target.value,"sell")},max:t.owned[c].quantity}),Object(T.jsx)("button",{type:"button","aria-label":"add 1",onClick:function(){return t.onUpdateQuantity(r.symbol,r.sellQuantity+1,"sell",t.owned[c].quantity)},children:"+"}),Object(T.jsx)("button",{type:"submit",children:"Sell"})]})})]},c)),s+=r.prices[r.prices.length-1]*t.owned[c].quantity};for(var a in t.owned)r(a);return Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Owned"}),Object(T.jsx)("div",{children:Object(T.jsxs)("table",{children:[Object(T.jsxs)("thead",{children:[Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"Symbol"}),Object(T.jsx)("th",{children:"Company"}),Object(T.jsx)("th",{children:"Change"}),Object(T.jsx)("th",{children:"Quantity"}),Object(T.jsx)("th",{children:"Price"}),Object(T.jsx)("th",{children:"Value"}),Object(T.jsx)("th",{children:"Buy"}),Object(T.jsx)("th",{children:"Sell"})]}),Object(T.jsx)("tr",{})]}),Object(T.jsx)("tbody",{children:o}),Object(T.jsxs)("tfoot",{children:[Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{}),Object(T.jsx)("td",{}),Object(T.jsx)("td",{}),Object(T.jsx)("td",{}),Object(T.jsx)("td",{children:"Cash: "}),Object(T.jsx)("td",{children:t.cash.toFixed(2)})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{}),Object(T.jsx)("td",{}),Object(T.jsx)("td",{}),Object(T.jsx)("td",{}),Object(T.jsx)("td",{children:"Total: "}),Object(T.jsx)("td",{children:(s+t.cash).toFixed(2)})]})]})]})})]})})),X=Object(j.b)((function(t){return{isAuth:t.auth.isAuth,cash:t.auth.cash,errorMessage:t.auth.errorMessage}}),(function(t){return{onAuthorize:function(){t(Q())},onDeauthorize:function(){t({type:h})},onLoadingFinish:function(){t({type:O})},onSetCash:function(e){t(A(e))},onSetErrorMessage:function(e){t(C(e))}}}))((function(t){var e=Object(a.g)();e.listen((function(e){t.onSetErrorMessage("")}));Object(c.useEffect)((function(){(function(){var t=localStorage.getItem("jwtExpires");return t&&Number(t)>Date.now()})()&&(t.onAuthorize(),t.onSetCash(localStorage.getItem("cash"))),t.onLoadingFinish()}),[]);return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)("nav",{children:Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/",children:"Home"})}),Object(T.jsx)(_,{children:Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/register",children:"Register"})})}),Object(T.jsx)(_,{children:Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/login",children:"Login"})})}),Object(T.jsx)(N,{children:Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/transactions",children:"Transactions"})})}),Object(T.jsx)(N,{children:Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/stocks",children:"Stocks"})})}),Object(T.jsx)(N,{children:Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/owned",children:"Owned"})})}),Object(T.jsx)(N,{children:Object(T.jsx)("li",{children:Object(T.jsx)(i.b,{to:"/search",children:"Search"})})}),Object(T.jsx)(N,{children:Object(T.jsx)("li",{children:Object(T.jsx)("button",{onClick:function(){localStorage.removeItem("jwtToken"),localStorage.removeItem("jwtExpires"),localStorage.removeItem("cash"),e.push("/"),t.onDeauthorize()},children:"Log out"})})}),Object(T.jsx)(N,{children:Object(T.jsxs)("li",{children:["Cash: $",t.cash]})}),Object(T.jsx)("h2",{children:t.errorMessage})]})}),Object(T.jsx)("main",{children:Object(T.jsxs)(a.d,{children:[Object(T.jsx)(a.b,{path:"/",exact:!0,children:Object(T.jsx)(M,{})}),Object(T.jsx)(a.b,{path:"/register",children:Object(T.jsx)(F,{})}),Object(T.jsx)(a.b,{path:"/login",children:Object(T.jsx)(L,{})}),Object(T.jsx)(a.b,{path:"/search",children:Object(T.jsx)(D,{children:Object(T.jsx)(P,{})})}),Object(T.jsx)(a.b,{path:"/transactions",children:Object(T.jsx)(D,{children:Object(T.jsx)(H,{})})}),Object(T.jsx)(a.b,{path:"/stocks/:symbol",children:Object(T.jsx)(D,{children:Object(T.jsx)(z,{})})}),Object(T.jsx)(a.b,{path:"/owned",children:Object(T.jsx)(D,{children:Object(T.jsx)(W,{})})}),Object(T.jsx)(a.b,{path:"/stocks",children:Object(T.jsx)(D,{children:Object(T.jsx)(R,{})})})]})}),Object(T.jsx)("footer",{children:Object(T.jsx)("a",{href:"https://iexcloud.io",children:"Data provided by IEX Cloud"})})]})})),G=n(15),J={isAuth:!1,isLoading:!0,errorMessage:""},K=function(t,e){return Object(l.a)(Object(l.a)({},t),{},{isAuth:!0})},V=function(t,e){return Object(l.a)(Object(l.a)({},t),{},{isAuth:!1})},Z=function(t,e){return Object(l.a)(Object(l.a)({},t),{},{isLoading:!1})},Y=function(t,e){return Object(l.a)(Object(l.a)({},t),{},{cash:Number(e.cash)})},$=function(t,e){return Object(l.a)(Object(l.a)({},t),{},{errorMessage:e.message})},tt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return K(t);case h:return V(t);case O:return Z(t);case p:return Y(t,e);case g:return $(t,e);default:return t}},et=n(21),nt={stocks:[],transactions:[],isTransactionsLoaded:!1,owned:{}},ct=function(t,e){var n,c=e.stocks,s=Object(B.a)(c);try{for(s.s();!(n=s.n()).done;){var o=n.value;o.buyQuantity=0,o.sellQuantity=0}}catch(r){s.e(r)}finally{s.f()}return Object(l.a)(Object(l.a)({},t),{},{stocks:c})},st=function(t,e){var n,c=[],s=Object(B.a)(t.stocks);try{for(s.s();!(n=s.n()).done;){var o=n.value;c.push(Object(l.a)(Object(l.a)({},o),{},{prices:Object(et.a)(o.prices)}))}}catch(a){s.e(a)}finally{s.f()}var r=c.findIndex((function(t){return t.symbol===e.symbol}));return"sell"===e.sell?(c[r].sellQuantity=Number(e.value),c[r].sellQuantity<0&&(c[r].sellQuantity=0),c[r].sellQuantity>e.max&&(c[r].sellQuantity=t.stocks[r].sellQuantity)):(c[r].buyQuantity=Number(e.value),c[r].buyQuantity<0&&(c[r].buyQuantity=0),c[r].sellQuantity>e.max&&(c[r].sellQuantity=t.stocks[r].sellQuantity)),Object(l.a)(Object(l.a)({},t),{},{stocks:c})},ot=function(t,e){var n,c={},s=Object(B.a)(e);try{var o=function(){var e=n.value,s=t.stocks.filter((function(t){return e.stock===t._id}))[0];c[s.symbol]||(c[s.symbol]={},c[s.symbol].companyName=s.companyName,c[s.symbol].prices=s.prices),c[s.symbol].quantity||(c[s.symbol].quantity=0),c[s.symbol].quantity=c[s.symbol].quantity+e.quantity};for(s.s();!(n=s.n()).done;)o()}catch(a){s.e(a)}finally{s.f()}for(var r in c)0===c[r].quantity&&delete c[r];return c},rt=function(t,e){var n=e.transactions,c=ot(t,n);return Object(l.a)(Object(l.a)({},t),{},{isTransactionsLoaded:!0,transactions:n,owned:c})},at=function(t,e){var n=[].concat(Object(et.a)(t.transactions),[e.transaction]),c=ot(t,n);return Object(l.a)(Object(l.a)({},t),{},{transactions:n,owned:c})},it=function(t,e){return Object(l.a)(Object(l.a)({},t),{},{stocks:[].concat(Object(et.a)(t.stocks),[e.stock])})},ut=function(t,e){var n,c=[],s=Object(B.a)(t.stocks);try{for(s.s();!(n=s.n()).done;){var o=n.value;c.push(Object(l.a)(Object(l.a)({},o),{},{prices:Object(et.a)(o.prices)}))}}catch(r){s.e(r)}finally{s.f()}return c[c.length-1]._id||(c[c.length-1]._id=e._id),Object(l.a)(Object(l.a)({},t),{},{stocks:c})},lt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return ct(t,e);case f:return st(t,e);case x:return rt(t,e);case m:return at(t,e);case k:return it(t,e);case v:return ut(t,e);default:return t}},bt=n(39),jt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,dt=Object(G.c)({auth:tt,stocks:lt}),ht=Object(G.e)(dt,jt(Object(G.a)(bt.a)));r.a.render(Object(T.jsx)(s.a.StrictMode,{children:Object(T.jsx)(j.a,{store:ht,children:Object(T.jsx)(i.a,{children:Object(T.jsx)(X,{})})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.4e79a638.chunk.js.map