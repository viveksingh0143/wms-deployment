import{_ as x,T as j,R as f,j as e,q as p,F as t,I as i,S as C,C as b,g as I}from"./index-7ade8dfe.js";import{c as v,g as S,C as q}from"./converters-a3674b07.js";const F=()=>{var d,o,c;const r=x(),{formProps:s,saveButtonProps:m,queryResult:l}=j(),{queryResult:n}=f({resource:"categories"}),u=v(((d=n==null?void 0:n.data)==null?void 0:d.data)||[],null,(c=(o=l==null?void 0:l.data)==null?void 0:o.data)==null?void 0:c.id),h=a=>{var g;"name"in a&&((g=s==null?void 0:s.form)==null||g.setFieldsValue({slug:I(a.name)}))};return e.jsx(p,{saveButtonProps:m,children:e.jsxs(t,{...s,onValuesChange:h,layout:"vertical",children:[e.jsx(t.Item,{hidden:!0,label:r("categories.fields.id"),name:["id"],rules:[{required:!0}],children:e.jsx(i,{readOnly:!0,disabled:!0})}),e.jsx(t.Item,{label:r("categories.fields.name"),name:["name"],rules:[{required:!0}],children:e.jsx(i,{})}),e.jsx(t.Item,{hidden:!0,label:r("categories.fields.slug"),name:["slug"],children:e.jsx(i,{disabled:!0})}),e.jsx(t.Item,{hidden:!0,label:r("categories.fields.status"),name:["status"],rules:[{required:!0}],children:e.jsx(C,{allowClear:!0,options:b,placeholder:r("categories.fields.status")})}),e.jsx(t.Item,{label:r("categories.fields.parent"),name:["parent","id"],getValueProps:a=>a?{value:S(a,u)}:{value:null},getValueFromEvent:a=>a?a[a.length-1]:null,children:e.jsx(q,{options:u,fieldNames:{label:"name",value:"id",children:"children"},expandTrigger:"hover",changeOnSelect:!0,allowClear:!0})})]})})};export{F as CategoryEdit,F as default};
