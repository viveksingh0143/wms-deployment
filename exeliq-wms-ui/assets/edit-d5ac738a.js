import{_ as R,T as V,R as f,j as e,q as v,F as r,J as j,m as w,n as c,t as y,p as E,S as h,I as q,C as S,d as p,B as T}from"./index-7ade8dfe.js";import{M as k}from"./MinusCircleOutlined-f6a845b7.js";const P=()=>{const t=R(),{formProps:s,saveButtonProps:_}=V(),{selectProps:g}=f({resource:"stores",optionLabel:"name",optionValue:"id"}),{selectProps:C,queryResult:x}=f({resource:"products",optionLabel:"name",optionValue:"id"}),I=(i,m)=>{var o,n,l,a;const{items:d}=(o=s==null?void 0:s.form)==null?void 0:o.getFieldsValue(["items"]);d[m].product_id=i,d[m].product=(l=(n=x==null?void 0:x.data)==null?void 0:n.data)==null?void 0:l.find(u=>u.id===i),(a=s==null?void 0:s.form)==null||a.setFieldsValue({items:d})};return e.jsx(v,{saveButtonProps:_,children:e.jsx(r,{...s,layout:"vertical",children:e.jsxs(j,{defaultActiveKey:"1",children:[e.jsx(j.TabPane,{tab:t("requisitions.tabs.basic"),forceRender:!0,children:e.jsxs(w,{gutter:24,children:[e.jsx(c,{span:12,children:e.jsx(r.Item,{label:t("requisitions.fields.issued_date"),name:["issued_date"],rules:[{required:!0}],getValueProps:i=>({value:i?y(i):null}),getValueFromEvent:i=>i?y(i):null,children:e.jsx(E,{format:"YYYY-MM-DD",style:{width:"100%"}})})}),e.jsx(c,{span:12,children:e.jsx(r.Item,{label:t("requisitions.fields.store"),name:["store","id"],rules:[{required:!0,message:t("rules.requiredOption")}],children:e.jsx(h,{placeholder:t("requisitions.fields.store"),...g})})}),e.jsx(c,{span:12,children:e.jsx(r.Item,{label:t("requisitions.fields.order_no"),name:["order_no"],rules:[{required:!0}],children:e.jsx(q,{})})}),e.jsx(c,{span:12,children:e.jsx(r.Item,{label:t("requisitions.fields.department"),name:["department"],rules:[{required:!0}],children:e.jsx(q,{})})}),e.jsx(c,{span:12,children:e.jsx(r.Item,{label:t("requisitions.fields.status"),name:["status"],rules:[{required:!0}],children:e.jsx(h,{allowClear:!0,options:S,placeholder:t("requisitions.fields.status")})})})]})},"1"),e.jsx(j.TabPane,{tab:t("requisitions.tabs.items"),forceRender:!0,children:e.jsx(r.List,{name:["items"],children:(i,{add:m,remove:d})=>e.jsxs(e.Fragment,{children:[e.jsxs(p,{dataSource:i,pagination:!1,rowKey:"key",children:[e.jsx(p.Column,{title:t("requisitions.items.fields.product"),dataIndex:"product_id",render:(o,n,l)=>e.jsx(r.Item,{name:[n.name,"product_id"],rules:[{required:!0,message:t("rules.requiredOption")}],children:e.jsx(h,{placeholder:t("requisitions.items.placeholders.product"),...C,onChange:a=>I(a,n.name)})})},"product_id"),e.jsx(p.Column,{title:t("requisitions.items.fields.quantity"),dataIndex:"quantity",render:(o,n,l)=>{var b;const a=(b=s==null?void 0:s.form)==null?void 0:b.getFieldValue(["items",n.name,"product"]);let u=a==null?void 0:a.unit_type;return u&&u!=="PIECE"&&(u=a.unit_weight_type),e.jsx(r.Item,{name:[n.name,"quantity"],rules:[{required:!0}],getValueFromEvent:F=>Number(F.target.value),children:e.jsx(q,{type:"number",placeholder:t("requisitions.items.placeholders.quantity"),addonAfter:u})})}},"quantity"),e.jsx(p.Column,{title:t("table.actions"),dataIndex:"action",render:(o,n,l)=>e.jsx(r.Item,{children:e.jsx(k,{onClick:()=>d(l)})})})]}),e.jsx(T,{type:"dashed",onClick:()=>m(),style:{width:"100%"},children:t("requisitions.items.buttons.add")})]})})},"2")]})})})};export{P as RequisitionEdit,P as default};