import{_ as m,T as h,j as s,V as x,F as l,f as j,m as t,n,I as r,S as u,C as _,B as g}from"./index-7ade8dfe.js";import{C as a}from"./collapsable_card-d6ec21fd.js";import{C as b}from"./CopyFilled-2e0eb72a.js";const y=()=>{const e=m(),{formProps:c,saveButtonProps:o,form:d}=h(),p=()=>{const i=d.getFieldsValue();d.setFieldsValue({shipping_address_1:i==null?void 0:i.billing_address_1,shipping_address_2:i==null?void 0:i.billing_address_2,shipping_state:i==null?void 0:i.billing_state,shipping_country:i==null?void 0:i.billing_country,shipping_pincode:i==null?void 0:i.billing_pincode})};return s.jsx(x,{saveButtonProps:o,children:s.jsx(l,{...c,initialValues:{status:1},layout:"vertical",children:s.jsxs(j,{direction:"vertical",style:{width:"100%"},children:[s.jsxs(t,{gutter:24,children:[s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.name"),name:["name"],rules:[{required:!0}],children:s.jsx(r,{})})}),s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.code"),name:["code"],rules:[{required:!0}],children:s.jsx(r,{})})}),s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.contact_person"),name:["contact_person"],rules:[{required:!0}],children:s.jsx(r,{})})}),s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.status"),name:["status"],rules:[{required:!0}],children:s.jsx(u,{allowClear:!0,options:_,placeholder:e("customers.fields.status")})})})]}),s.jsx(a,{title:e("customers.fields.billing_address"),defaultCollapse:!1,extraButtons:[s.jsx(g,{onClick:p,type:"primary",icon:s.jsx(b,{}),children:e("customers.buttons.copy_to_shipping")})],children:s.jsxs(t,{gutter:24,children:[s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.billing_address_1"),name:["billing_address_1"],children:s.jsx(r,{})})}),s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.billing_address_2"),name:["billing_address_2"],children:s.jsx(r,{})})}),s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.billing_state"),name:["billing_state"],children:s.jsx(r,{})})}),s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.billing_country"),name:["billing_country"],children:s.jsx(r,{})})}),s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.billing_pincode"),name:["billing_pincode"],children:s.jsx(r,{})})})]})}),s.jsx(a,{title:e("customers.fields.shipping_address"),defaultCollapse:!1,children:s.jsxs(t,{gutter:24,children:[s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.shipping_address_1"),name:["shipping_address_1"],children:s.jsx(r,{})})}),s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.shipping_address_2"),name:["shipping_address_2"],children:s.jsx(r,{})})}),s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.shipping_state"),name:["shipping_state"],children:s.jsx(r,{})})}),s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.shipping_country"),name:["shipping_country"],children:s.jsx(r,{})})}),s.jsx(n,{span:12,children:s.jsx(l.Item,{label:e("customers.fields.shipping_pincode"),name:["shipping_pincode"],children:s.jsx(r,{})})})]})})]})})})};export{y as CustomerCreate,y as default};
