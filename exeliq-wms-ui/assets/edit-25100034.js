import{_ as Q,r as p,T as z,$ as J,R as X,y as m,z as L,A as T,j as t,q as Y,F as l,J as E,m as Z,n as x,S as f,L as P,I as _,E as ee,f as te,C as ie,d as C,B as se,g as F}from"./index-7ade8dfe.js";import{c as le,g as ne,C as de}from"./converters-a3674b07.js";import{M as re}from"./MinusCircleOutlined-f6a845b7.js";const oe=()=>{const s=Q(),[j,v]=p.useState([]),[$,O]=p.useState([]),[G,I]=p.useState(!1),[S,g]=p.useState([]),[H,h]=p.useState(!1),[V,M]=p.useState(!0),{formProps:e,formLoading:A,saveButtonProps:U}=z({}),{data:w,isLoading:k}=J({resource:"categories",filters:[{field:"query",operator:"eq",value:"/products/"}],queryOptions:{enabled:j.length<=0}});p.useEffect(()=>{var i;if(j.length<=0){let n=le((w==null?void 0:w.data)||[],null,null);n.length>0&&n[0].children&&((i=n[0].children)==null?void 0:i.length)>0?v(n[0].children):v([])}},[w,k]);const{selectProps:B,queryResult:q}=X({resource:"products",optionLabel:"name",optionValue:"id"}),D=i=>{var n,u,c,d,r,a,o,y,b,R,W,N;"name"in i&&((u=e==null?void 0:e.form)==null||u.setFieldsValue({slug:F(i.name)+"-"+F((n=e==null?void 0:e.form)==null?void 0:n.getFieldValue("code"))})),"code"in i&&((d=e==null?void 0:e.form)==null||d.setFieldsValue({slug:F((c=e==null?void 0:e.form)==null?void 0:c.getFieldValue("name"))+"-"+F(i.code)})),"unit_type"in i&&(i.unit_type==="WEIGHT"?(g(m),(r=e==null?void 0:e.form)==null||r.setFieldsValue({unit_weight_type:m[0].value}),h(!1),(a=e==null?void 0:e.form)==null||a.setFieldsValue({unit_weight:0})):i.unit_type==="PIECE"?(g(m),(o=e==null?void 0:e.form)==null||o.setFieldsValue({unit_weight_type:m[0].value}),h(!0),(y=e==null?void 0:e.form)==null||y.setFieldsValue({unit_weight:0})):i.unit_type==="LIQUID"?(g(L),(b=e==null?void 0:e.form)==null||b.setFieldsValue({unit_weight_type:L[0].value}),h(!1),(R=e==null?void 0:e.form)==null||R.setFieldsValue({unit_weight:0})):i.unit_type==="LENGTH"&&(g(T),(W=e==null?void 0:e.form)==null||W.setFieldsValue({unit_weight_type:T[0].value}),h(!1),(N=e==null?void 0:e.form)==null||N.setFieldsValue({unit_weight:0}))),"product_type"in i&&(i.product_type==="RAW MATERIAL"?(O(i.ingredients),i.ingredients=[],I(!1)):(i.ingredients&&i.ingredients.length>0||(i.ingredients=$),I(!0)))};p.useEffect(()=>{var i,n,u,c,d;if(!A&&V){const r=(i=e==null?void 0:e.form)==null?void 0:i.getFieldValue("unit_type");r==="WEIGHT"?(g(m),h(!1)):r==="PIECE"?(g(m),h(!0),(n=e==null?void 0:e.form)==null||n.setFieldsValue({unit_weight:0})):r==="LIQUID"?(g(L),h(!1),(u=e==null?void 0:e.form)==null||u.setFieldsValue({unit_weight:0})):r==="LENGTH"&&(g(T),h(!1),(c=e==null?void 0:e.form)==null||c.setFieldsValue({unit_weight:0}));const a=(d=e==null?void 0:e.form)==null?void 0:d.getFieldValue("product_type");I(a!=="RAW MATERIAL"),M(!1)}},[A,e,V]);const K=(i,n)=>{var c,d,r,a;const{ingredients:u}=(c=e==null?void 0:e.form)==null?void 0:c.getFieldsValue(["ingredients"]);u[n].ingredient_id=i,u[n].ingredient=(r=(d=q==null?void 0:q.data)==null?void 0:d.data)==null?void 0:r.find(o=>o.id===i),(a=e==null?void 0:e.form)==null||a.setFieldsValue({ingredients:u})};return t.jsx(Y,{saveButtonProps:U,children:t.jsx(l,{...e,onValuesChange:D,layout:"vertical",children:t.jsxs(E,{defaultActiveKey:"1",children:[t.jsx(E.TabPane,{tab:s("products.tabs.basic"),forceRender:!0,children:t.jsxs(Z,{gutter:24,children:[t.jsx(x,{span:12,children:t.jsx(l.Item,{label:s("products.fields.product_type"),name:["product_type"],rules:[{required:!0}],children:t.jsx(f,{allowClear:!0,options:P,placeholder:s("products.fields.product_type")})})}),t.jsx(x,{span:12,children:t.jsx(l.Item,{label:s("products.fields.category"),name:["category","id"],rules:[{required:!0}],getValueProps:i=>i?{value:ne(i,j)}:{value:null},getValueFromEvent:i=>i?i[i.length-1]:null,children:t.jsx(de,{options:j,fieldNames:{label:"name",value:"id",children:"children"},expandTrigger:"hover",changeOnSelect:!0,allowClear:!0})})}),t.jsx(x,{span:12,children:t.jsx(l.Item,{label:s("products.fields.name"),name:["name"],rules:[{required:!0}],children:t.jsx(_,{})})}),t.jsx(l.Item,{hidden:!0,label:`${s("products.fields.slug")} (${s("common.fields.auto_fill")})`,name:["slug"],children:t.jsx(_,{placeholder:s("common.placeholders.auto_fill")})}),t.jsx(x,{span:12,children:t.jsx(l.Item,{label:s("products.fields.code"),name:["code"],rules:[{required:!0}],children:t.jsx(_,{})})}),t.jsx(l.Item,{hidden:!0,label:`${s("products.fields.cms_code")} (${s("common.fields.optional")})`,name:["cms_code"],children:t.jsx(_,{placeholder:s("common.placeholders.optional")})}),t.jsx(x,{span:24,children:t.jsx(l.Item,{label:s("products.fields.description"),name:["description"],rules:[{required:!0}],children:t.jsx(_.TextArea,{})})}),t.jsx(x,{span:12,children:t.jsx(l.Item,{label:s("products.fields.unit_type"),name:["unit_type"],rules:[{required:!0}],children:t.jsx(f,{allowClear:!0,options:ee,placeholder:s("products.fields.unit_type")})})}),H?t.jsx(x,{span:12,children:t.jsxs(te,{style:{width:"100%"},children:[t.jsx(l.Item,{label:s("products.fields.unit_weight"),name:["unit_weight"],rules:[{required:!0}],getValueFromEvent:i=>Number(i.target.value),children:t.jsx(_,{type:"number"})}),t.jsx(l.Item,{label:s("products.fields.unit_weight_type"),name:["unit_weight_type"],rules:[{required:!0}],children:t.jsx(f,{allowClear:!0,options:S,placeholder:s("products.fields.unit_weight_type")})})]})}):t.jsx(x,{span:12,children:t.jsx(l.Item,{label:s("products.fields.unit_weight_type"),name:["unit_weight_type"],rules:[{required:!0}],children:t.jsx(f,{allowClear:!0,options:S,placeholder:s("products.fields.unit_weight_type")})})}),t.jsx(l.Item,{hidden:!0,label:s("products.fields.status"),name:["status"],rules:[{required:!0}],children:t.jsx(f,{allowClear:!0,options:ie,placeholder:s("products.fields.status")})})]})},"1"),t.jsx(E.TabPane,{tab:s("products.tabs.ingredients"),disabled:!G,forceRender:!0,children:t.jsx(l.List,{name:["ingredients"],children:(i,{add:n,remove:u})=>t.jsxs(t.Fragment,{children:[t.jsxs(C,{dataSource:i,pagination:!1,rowKey:"key",children:[t.jsx(C.Column,{title:s("products.ingredients.fields.ingredient"),dataIndex:"ingredient_id",render:(c,d,r)=>t.jsx(l.Item,{name:[d.name,"ingredient_id"],rules:[{required:!0,message:s("rules.requiredOption")}],children:t.jsx(f,{placeholder:s("products.ingredients.placeholders.ingredient"),...B,onChange:a=>K(a,d.name)})})},"ingredient_id"),t.jsx(C.Column,{title:s("products.ingredients.fields.quantity"),dataIndex:"quantity",render:(c,d,r)=>{var y;const a=(y=e==null?void 0:e.form)==null?void 0:y.getFieldValue(["ingredients",d.name,"ingredient"]);let o=a==null?void 0:a.unit_type;return o&&o!=="PIECE"&&(o=a.unit_weight_type),t.jsx(l.Item,{name:[d.name,"quantity"],rules:[{required:!0}],getValueFromEvent:b=>Number(b.target.value),children:t.jsx(_,{type:"number",placeholder:s("products.ingredients.placeholders.quantity"),addonAfter:o})})}},"quantity"),t.jsx(C.Column,{title:s("table.actions"),dataIndex:"action",render:(c,d,r)=>t.jsx(l.Item,{children:t.jsx(re,{onClick:()=>u(r)})})})]}),t.jsx(se,{type:"dashed",onClick:()=>n(),style:{width:"100%"},children:s("products.ingredients.buttons.add")})]})})},"2")]})})})};export{oe as ProductEdit,oe as default};