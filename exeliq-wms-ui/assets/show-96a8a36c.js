import{_ as r,s as g,j as e,aw as p,v as y,f as u,w as n,x as b}from"./index-7ade8dfe.js";import{C as a}from"./collapsable_card-d6ec21fd.js";const{Paragraph:l}=b,f=()=>{const i=r(),{queryResult:d}=g(),{data:t,isLoading:o}=d,s=t==null?void 0:t.data,m=[{key:"1",label:i("customers.fields.id"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.id)??""})},{key:"2",label:i("customers.fields.name"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.name)??""})},{key:"3",label:i("customers.fields.code"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.code)??""})},{key:"4",label:i("customers.fields.contact_person"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.contact_person)??""})},{key:"5",label:i("customers.fields.status"),children:e.jsx(p,{status:(s==null?void 0:s.status)==="ACTIVE"?"success":"error",text:s==null?void 0:s.status})}],c=[{key:"1",label:i("customers.fields.billing_address_1"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.billing_address_1)??""})},{key:"2",label:i("customers.fields.billing_address_2"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.billing_address_2)??""})},{key:"3",label:i("customers.fields.billing_state"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.billing_state)??""})},{key:"4",label:i("customers.fields.billing_country"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.billing_country)??""})},{key:"5",label:i("customers.fields.billing_pincode"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.billing_pincode)??""})}],h=[{key:"1",label:i("customers.fields.shipping_address_1"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.shipping_address_1)??""})},{key:"2",label:i("customers.fields.shipping_address_2"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.shipping_address_2)??""})},{key:"3",label:i("customers.fields.shipping_state"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.shipping_state)??""})},{key:"4",label:i("customers.fields.shipping_country"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.shipping_country)??""})},{key:"5",label:i("customers.fields.shipping_pincode"),children:e.jsx(l,{style:{marginBottom:0},children:(s==null?void 0:s.shipping_pincode)??""})}];return e.jsx(y,{isLoading:o,children:e.jsxs(u,{direction:"vertical",style:{width:"100%"},children:[e.jsx(n,{column:2,bordered:!0,items:m}),e.jsx(a,{title:i("customers.fields.billing_address"),bodyStyle:{padding:0},children:e.jsx(n,{column:2,bordered:!0,items:c})}),e.jsx(a,{title:i("customers.fields.shipping_address"),bodyStyle:{padding:0},children:e.jsx(n,{column:2,bordered:!0,items:h})})]})})};export{f as CustomerShow,f as default};
