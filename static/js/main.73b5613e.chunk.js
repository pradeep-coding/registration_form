(this["webpackJsonpregistration-form"]=this["webpackJsonpregistration-form"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(3),i=a.n(r),c=a(4),u=a(5),m=a(7),l=a(6),o=(a(12),a(0)),b=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={firstName:"",lastName:"",firstNameRequired:!1,lastNameRequired:!1,successfulSubmit:!1},e.validateFirstName=function(){return""!==e.state.firstName},e.validateLastName=function(){return""!==e.state.lastName},e.onBlurFirstName=function(){var t=e.validateFirstName();e.setState({firstNameRequired:!t})},e.onBlurLastName=function(){var t=e.validateLastName();e.setState({lastNameRequired:!t})},e.onChangeFirstName=function(t){e.setState({firstName:t.target.value})},e.onChangeLastName=function(t){e.setState({lastName:t.target.value})},e.onSubmitForm=function(t){t.preventDefault();var a=e.validateFirstName(),s=e.validateLastName();a&&s?e.setState({successfulSubmit:!0}):e.setState({firstNameRequired:!a,lastNameRequired:!s,successfulSubmit:!1})},e.anotherSubmit=function(){e.setState({successfulSubmit:!1,firstName:"",lastName:""})},e.renderForm=function(){var t=e.state,a=t.firstName,s=t.lastName,n=t.firstNameRequired,r=t.lastNameRequired;return Object(o.jsxs)("form",{className:"form",onSubmit:e.onSubmitForm,children:[Object(o.jsx)("label",{htmlFor:"first-name",className:"text-label",children:"FIRST NAME"}),Object(o.jsx)("input",{type:"text",id:"first-name",value:a,placeholder:"First name",onChange:e.onChangeFirstName,onBlur:e.onBlurFirstName}),n?Object(o.jsx)("p",{className:"error-message",children:"Required"}):Object(o.jsx)("p",{children:" "}),Object(o.jsx)("label",{htmlFor:"last-name",className:"text-label",children:"LAST NAME"}),Object(o.jsx)("input",{type:"text",id:"last-name",value:s,placeholder:"Last name",onChange:e.onChangeLastName,onBlur:e.onBlurLastName}),r?Object(o.jsx)("p",{className:"error-message",children:"Required"}):Object(o.jsx)("p",{children:" "}),Object(o.jsx)("button",{type:"submit",className:"submit-button",children:"Submit"})]})},e.renderOnSuccess=function(){return Object(o.jsxs)("div",{className:"success-container",children:[Object(o.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/success-icon-img.png",alt:"success"}),Object(o.jsx)("p",{children:"Submitted Successfully"}),Object(o.jsx)("button",{type:"button",onClick:e.anotherSubmit,className:"submit-another-button",children:"Submit Another Response"})]})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.successfulSubmit;return Object(o.jsxs)("div",{className:"form-bg-container",children:[Object(o.jsx)("h1",{className:"main-heading",children:"Registration"}),Object(o.jsx)("div",{className:"form-container",children:e?this.renderOnSuccess():this.renderForm()})]})}}]),a}(s.Component),d=(a(14),function(){return Object(o.jsx)(b,{})});i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.73b5613e.chunk.js.map