(this.webpackJsonpshopcart=this.webpackJsonpshopcart||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(10),o=n.n(s),i=(n(9),n(7)),u=n(6),l=n(2),h=n(3),j=n(5),d=n(4),b=function(e){var t=e.totalItems;return Object(r.jsxs)("h1",{className:"navbar",children:["Navbar-",Object(r.jsx)("span",{className:"heading heading-info",children:t})]})},f=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.counter,n=e.onIncrement,c=e.onDecrement,s=e.onReset,o=e.onDelete;return Object(r.jsxs)(a.a.Fragment,{children:[this.props.children,Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:this.classAdd(),children:this.formatCount()}),Object(r.jsx)("button",{className:"btn ",onClick:function(){return n(t)},children:"+"}),Object(r.jsx)("button",{className:"btn ",onClick:function(){return c(t)},children:"-"}),Object(r.jsx)("button",{className:"btn ",onClick:function(){return s(t)},children:"R"}),Object(r.jsx)("button",{className:"btn ",onClick:function(){return o(t.id)},children:"X"})]})]})}},{key:"classAdd",value:function(){var e="heading heading-";return e+=0===this.props.counter.value?"warning":"info"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return e<1?"Zero":e}}]),n}(c.Component),m=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onResetAll,n=e.counters,c=e.onDelete,s=e.onReset,o=e.onIncrement,i=e.onDecrement;return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)("button",{className:"btn",onClick:function(){return t()},children:"ResetAll"}),n.map((function(e){return Object(r.jsx)(f,{counter:e,onDelete:c,onReset:s,onIncrement:o,onDecrement:i,children:Object(r.jsxs)("h1",{children:["Category-",e.itemCategory]})},e.id)})),";"]})}}]),n}(c.Component),O=function(){return Object(r.jsx)("footer",{className:"footer",children:" \xa9 Copyright . All Rights Reserved"})},v=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e.handleReset=function(t){var n=Object(u.a)(e.state.counters),r=n.indexOf(t);n[r]=Object(i.a)({},t),n[r].value=0,e.setState({counters:n})},e.handleIncrement=function(t){var n=Object(u.a)(e.state.counters),r=n.indexOf(t);n[r]=Object(i.a)({},t),n[r].value++,e.setState({counters:n})},e.handleDecrement=function(t){var n=Object(u.a)(e.state.counters),r=n.indexOf(t);n[r]=Object(i.a)({},t),n[r].value--,e.setState({counters:n})},e.handleResetAll=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e.state={counters:[{id:1,value:1,itemCategory:"Grocery"},{id:2,value:0,itemCategory:"Clothes"},{id:3,value:0,itemCategory:"Electronics"},{id:4,value:0,itemCategory:"Shoes"}]},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(b,{totalItems:this.state.counters.reduce((function(e,t){return e+t.value}),0)}),Object(r.jsx)(m,{counters:this.state.counters,onDelete:this.handleDelete,onReset:this.handleReset,onResetAll:this.handleResetAll,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement}),Object(r.jsx)(O,{})]})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};o.a.render(Object(r.jsx)(v,{}),document.getElementById("root")),p()},9:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.e996c4dc.chunk.js.map