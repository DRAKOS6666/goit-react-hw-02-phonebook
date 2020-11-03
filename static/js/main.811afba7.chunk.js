(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports=n(25)},19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=n(11),l=n(2),u=n(3),s=n(5),m=n(4),f=n(10),d=(n(19),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleNameChange=function(t){e.setState({name:t.target.value})},e.handleNumberChange=function(t){e.setState({number:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addContact(e.state),e.setState({name:"",number:""}),t.target.reset()},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name:",r.a.createElement("input",{className:"formInput",type:"text",onChange:this.handleNameChange})),r.a.createElement("label",null,"Number:",r.a.createElement("input",{className:"formInput",type:"text",onChange:this.handleNumberChange})),r.a.createElement("input",{className:"submitBtn",type:"submit",value:"Add contact"}))}}]),n}(a.Component));d.defaultProps={name:"",number:""};var h=n(1),b=n.n(h);n(22);function p(e){var t=e.contact,n=e.onClickDelete,a=t.id,c=t.name,o=t.number;return r.a.createElement(r.a.Fragment,null,c,": ",o,r.a.createElement("button",{className:"deleteContactBtn",onClick:function(){return n(a)}},"Delete"))}p.defaultProps={number:""};var v=p;n(23);function C(e){var t=e.list,n=e.filter,a=e.deleteContact;return""===n?E(t,a):function(e,t,n){var a=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return 0===a.length?r.a.createElement("h4",null,"Nothing found"):E(a,n)}(t,n,a)}function E(e,t){return r.a.createElement("ul",{className:"contactList"},e.map((function(e){return r.a.createElement("li",{className:"contactListItem",key:e.id},r.a.createElement(v,{contact:e,onClickDelete:t}))})))}C.propTypes={list:b.a.arrayOf(b.a.shape({id:b.a.string.isRequired,name:b.a.string.isRequired,number:b.a.string})).isRequired,deleteContact:b.a.func.isRequired},C.defaultProps={number:""};var g=C;var y=function(e){var t=e.onFindItem;return r.a.createElement("label",null,"Find contacts by name",r.a.createElement("input",{type:"text",onChange:t}))},N=(n(24),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.findContact=function(t){e.setState({filter:t.target.value})},e.isUnique=function(t){var n=e.state.contacts.find((function(e){return e.name===t}));return void 0===n||t!==n.name},e.addContact=function(t){var n=t.name,a=t.number;if(""!==n&&e.isUnique(n)){var r=e.state.contacts,c=[{name:n,number:a,id:Object(f.v4)()}];e.setState({contacts:[].concat(Object(i.a)(r),c)})}e.isUnique(n)||alert("".concat(n," is already in contact"))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Phonebook"),r.a.createElement(d,{addContact:this.addContact}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(y,{onFindItem:this.findContact}),r.a.createElement(g,{list:this.state.contacts,filter:this.state.filter,deleteContact:this.deleteContact}))}}]),n}(a.Component));N.defaultProps={filter:"",contacts:[]},o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.811afba7.chunk.js.map