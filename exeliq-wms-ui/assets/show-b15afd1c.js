import{_ as m,s as y,j as e,t as x,aw as o,v as h,f,w as j,d as q,x as b}from"./index-7ade8dfe.js";import{C as k}from"./collapsable_card-d6ec21fd.js";const{Paragraph:a}=b,I=()=>{var n,l,d;const s=m(),{queryResult:r}=y(),{data:i,isLoading:u}=r,t=i==null?void 0:i.data,p=[{key:"1",label:s("requisitions.fields.id"),children:e.jsx(a,{style:{marginBottom:0},children:(t==null?void 0:t.id)??""})},{key:"2",label:s("requisitions.fields.issued_date"),children:e.jsx(a,{style:{marginBottom:0},children:x(t==null?void 0:t.issued_date).format("YYYY-MM-DD")??""})},{key:"3",label:s("requisitions.fields.department"),children:e.jsx(a,{style:{marginBottom:0},children:(t==null?void 0:t.department)??""})},{key:"4",label:s("requisitions.fields.order_no"),children:e.jsx(a,{style:{marginBottom:0},children:(t==null?void 0:t.order_no)??""})},{key:"5",label:s("requisitions.fields.status"),children:e.jsx(o,{status:(t==null?void 0:t.status)==="ACTIVE"?"success":"error",text:t==null?void 0:t.status})},{key:"6",label:s("requisitions.fields.approved"),children:e.jsx(o,{status:(t==null?void 0:t.approved)==="YES"?"success":"error",text:t==null?void 0:t.approved})}],c=[{title:s("products.fields.product_type"),dataIndex:["product","product_type"],key:"product_type"},{title:s("products.fields.name"),dataIndex:["product","name"],key:"name"},{title:s("products.fields.code"),dataIndex:["product","code"],key:"code"},{title:s("requisitions.items.fields.quantity"),dataIndex:"quantity",key:"quantity"}];return e.jsx(h,{isLoading:u,children:e.jsxs(f,{direction:"vertical",style:{width:"100%"},children:[e.jsx(j,{column:2,bordered:!0,items:p}),((l=(n=i==null?void 0:i.data)==null?void 0:n.items)==null?void 0:l.length)>0?e.jsx(k,{title:s("requisitions.tabs.items"),children:e.jsx(q,{dataSource:(d=i==null?void 0:i.data)==null?void 0:d.items,columns:c})}):null]})})};export{I as RequisitionShow,I as default};