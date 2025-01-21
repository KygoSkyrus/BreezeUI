"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("styled-components");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e),a=t(r);function l(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)r.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;const d=a.default.button`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${e=>"small"===e.size?"7px 25px 8px":"medium"===e.size?"9px 30px 11px":"14px 30px 16px"};
  color: ${e=>e.primary?"#1b116e":"#ffffff"};
  background-color: ${e=>e.primary?"#6bedb5":"#1b116e"};
  opacity: ${e=>e.disabled?.5:1};
  &:hover {
    background-color: ${e=>e.primary?"#55bd90":"#6bedb5"};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${e=>"small"===e.size?"5px 23px 6px":"medium"===e.size?"7px 28px 9px":"12px 28px 14px"};
  }
`,i=a.default.input`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":e.success?"#067d68":"#353637"};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`,p=a.default.div`
  font-size: 14px;
  color: ${e=>e.disabled?"#e4e3ea":"#080808"};
  padding-bottom: 6px;
`,n=a.default.div`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`,s=a.default.p`
  margin: 0px;
  color: ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":"#080808"};
`;exports.Button=e=>{var{text:r,primary:t,disabled:a,size:i,onClick:p}=e,n=l(e,["text","primary","disabled","size","onClick"]);return o.default.createElement(d,Object.assign({type:"button",onClick:p,primary:t,disabled:a,size:i},n),r)},exports.Input=e=>{var{id:r,label:t,error:a,message:d,success:c,disabled:u,placeholder:b,onChange:f}=e,x=l(e,["id","label","error","message","success","disabled","placeholder","onChange"]);return o.default.createElement(o.default.Fragment,null,o.default.createElement(p,null,o.default.createElement(s,{disabled:u,error:a},t)),o.default.createElement(i,Object.assign({id:r,type:"text",onChange:f,disabled:u,error:a,success:c,placeholder:b},x)),o.default.createElement(n,null,o.default.createElement(s,{error:a},d)))};
//# sourceMappingURL=index.js.map
