import{_ as w,b8 as H,bd as K,r as V,s as N,T as O,j as e,V as W,F as r,f as B,m as L,n as b,I as l,S as P,bf as q,d as m}from"./index-7ade8dfe.js";import{g as z}from"./shift-67a7114a.js";const G=()=>{var f,g,_;const t=w(),{batchlabelId:x}=H(),{data:h}=K(),[E,j]=V.useState(!1),{queryResult:a}=N({resource:"batchlabels",id:x}),{formProps:c,saveButtonProps:y}=O({meta:{parentResources:[{name:"batchlabels",value:x}]}});return V.useEffect(()=>{var n,p,u,i,s,d,o,I,v,k,S,F;if((u=(p=(n=a==null?void 0:a.data)==null?void 0:n.data)==null?void 0:p.product)!=null&&u.ingredients&&((o=(d=(s=(i=a==null?void 0:a.data)==null?void 0:i.data)==null?void 0:s.product)==null?void 0:d.ingredients)==null?void 0:o.length)>0){j(!0);const T=(S=(k=(v=(I=a==null?void 0:a.data)==null?void 0:I.data)==null?void 0:v.product)==null?void 0:k.ingredients)==null?void 0:S.map(C=>({product:C.ingredient,quantity:C.quantity*a.data.data.package_quantity,batch_no:""}));(F=c==null?void 0:c.form)==null||F.setFieldsValue({items:T})}else j(!1)},[a]),e.jsx(W,{saveButtonProps:y,children:e.jsx(r,{...c,layout:"vertical",initialValues:{supervisor:h==null?void 0:h.name,shift:z()},children:e.jsxs(B,{direction:"vertical",style:{width:"100%"},children:[e.jsxs(L,{gutter:24,children:[e.jsx(b,{span:8,children:e.jsx(r.Item,{label:t("stickers.fields.stickers_to_generate"),name:["stickers_to_generate"],rules:[{type:"number",required:!0,min:1,max:(f=a==null?void 0:a.data)!=null&&f.data?((g=a==null?void 0:a.data)==null?void 0:g.data.labels_to_print)-((_=a==null?void 0:a.data)==null?void 0:_.data.total_printed):0}],getValueFromEvent:n=>Number(n.target.value),children:e.jsx(l,{type:"number",placeholder:t("stickers.placeholders.stickers_to_generate")})})}),e.jsx(b,{span:8,children:e.jsx(r.Item,{label:t("stickers.fields.shift"),name:["shift"],children:e.jsx(P,{options:q,placeholder:t("stickers.placeholders.shift")})})}),e.jsx(b,{span:8,children:e.jsx(r.Item,{label:t("stickers.fields.supervisor"),name:["supervisor"],children:e.jsx(l,{disabled:!0,placeholder:t("stickers.placeholders.supervisor")})})})]}),E&&e.jsx(r.List,{name:["items"],children:(n,{add:p,remove:u})=>e.jsx(e.Fragment,{children:e.jsxs(m,{dataSource:n,pagination:!1,rowKey:"key",children:[e.jsx(m.Column,{title:t("batchlabels.items.fields.product"),dataIndex:["product"],render:(i,s,d)=>e.jsx(r.Item,{name:[s.name,"product","name"],children:e.jsx(l,{disabled:!0,placeholder:t("products.fields.name")})})},"product.id"),e.jsx(m.Column,{title:t("batchlabels.items.fields.quantity"),dataIndex:"quantity",render:(i,s,d)=>e.jsx(r.Item,{name:[s.name,"quantity"],getValueFromEvent:o=>Number(o.target.value),children:e.jsx(l,{disabled:!0,type:"number",placeholder:t("batchlabels.items.placeholders.quantity")})})},"quantity"),e.jsx(m.Column,{title:t("batchlabels.items.fields.batch_no"),dataIndex:"batch_no",render:(i,s,d)=>e.jsx(r.Item,{name:[s.name,"batch_no"],rules:[{required:!0,message:t("rules.required")}],children:e.jsx(l,{placeholder:t("batchlabels.items.placeholders.batch_no")})})},"batch_no")]})})})]})})})};export{G as StickerCreate,G as default};
