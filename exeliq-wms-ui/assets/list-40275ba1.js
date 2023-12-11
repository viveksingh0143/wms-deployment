import{_ as O,a as F,b as k,c as N,P as R,d as l,j as e,e as z,G as A,f as v,D as B,w as P,H as G,h as H,Y as K,r as C,$ as M,i as w,F as i,I as q,B as I,k as E,l as L,m as V,n as j,o as Y,S as $,C as U,p as W}from"./index-7ade8dfe.js";import{c as J,g as Q,C as X}from"./converters-a3674b07.js";const{RangePicker:Z}=W,ne=()=>{const r=O(),{tableProps:s,searchFormProps:o}=F({syncWithLocation:!0,filters:{permanent:[{field:"product_types",operator:"in",value:["FINISHED GOODS","SEMI FINISHED GOODS"]}]},onSearch:t=>{const a=[],{q:_,product_type:x,name:g,slug:T,code:D,cms_code:te,category_id:b,status:se,createdAt:y}=t;return a.push({field:"query",operator:"eq",value:_},{field:"product_type",operator:"eq",value:x},{field:"name",operator:"eq",value:g},{field:"slug",operator:"eq",value:T},{field:"code",operator:"eq",value:D},{field:"category_id",operator:"contains",value:b},{field:"category_id",operator:"eq",value:b},{field:"createdAt",operator:"gte",value:y?y[0].toISOString():void 0},{field:"createdAt",operator:"lte",value:y?y[1].toISOString():void 0}),a}}),{triggerExport:h,isLoading:c}=k({mapData:t=>{var a;return{id:t.id,product_type:t.product_type,name:t.name,slug:t.slug,code:t.code,cms_code:t.cms_code,description:t.description,unit_type:t.unit_type,unit_weight:t.unit_weight,unit_weight_type:t.unit_weight_type,status:t.status,category:((a=t==null?void 0:t.category)==null?void 0:a.name)||""}}}),[u,d]=N.useState([]),{mutate:f,isLoading:S}=R(),m=()=>{f({resource:"products",ids:u.map(String)},{onSuccess:()=>{d([])}})},p={selectedRowKeys:u,onChange:t=>{d(t)},selections:[l.SELECTION_ALL,l.SELECTION_INVERT,l.SELECTION_NONE]};return e.jsxs(z,{headerButtons:({defaultButtons:t})=>e.jsxs(e.Fragment,{children:[t,e.jsx(A,{onClick:h,loading:c})]}),headerProps:{subTitle:e.jsx(v,{children:e.jsx(B,{selectedKeys:u,isLoading:S,onDelete:m})})},children:[e.jsx(ee,{formProps:o}),e.jsxs(l,{...s,rowSelection:p,rowKey:"id",pagination:{...s.pagination,showSizeChanger:!0},expandable:{expandedRowRender:t=>{const a=[{key:"3",label:r("products.fields.unit_type"),children:t.unit_type},{key:"4",label:r("products.fields.unit_weight"),children:t.unit_weight+t.unit_weight_type},{key:"5",label:r("products.fields.description"),children:t.description,span:2}];return e.jsx(P,{bordered:!0,items:a})}},children:[e.jsx(l.Column,{title:r("table.s_no"),render:(t,a,_)=>{let x=1,g=10;return typeof s.pagination=="object"&&(x=s.pagination.current??1,g=s.pagination.pageSize??10),(x-1)*g+_+1}},"index"),e.jsx(l.Column,{dataIndex:"product_type",title:r("products.fields.product_type"),sorter:!0}),e.jsx(l.Column,{dataIndex:"name",title:r("products.fields.name"),sorter:!0}),e.jsx(l.Column,{dataIndex:"code",title:r("products.fields.code"),sorter:!0}),e.jsx(l.Column,{dataIndex:["category","name"],title:r("products.fields.category"),sorter:!0}),e.jsx(l.Column,{title:r("table.actions"),dataIndex:"actions",render:(t,a)=>e.jsxs(v,{children:[e.jsx(G,{hideText:!0,size:"small",recordItemId:a.id}),e.jsx(H,{hideText:!0,size:"small",recordItemId:a.id}),e.jsx(K,{hideText:!0,size:"small",recordItemId:a.id})]})})]})]})},ee=({formProps:r})=>{const s=O(),[o,h]=C.useState(!0),[c,u]=C.useState([]),{data:d,isLoading:f}=M({resource:"categories",filters:[{field:"query",operator:"eq",value:"/products/"}],queryOptions:{enabled:c.length<=0}});C.useEffect(()=>{var n;if(c.length<=0){let p=J((d==null?void 0:d.data)||[],null,null);p.length>0&&p[0].children&&((n=p[0].children)==null?void 0:n.length)>0?u(p[0].children):u([])}},[d,f]);const S=()=>e.jsx(w,{title:e.jsx(i,{layout:"inline",...r,onFinish:r==null?void 0:r.onFinish,children:e.jsx(i.Item,{name:"q",style:{width:"100%"},children:e.jsx(q.Search,{placeholder:s("filter.placeholders.query"),enterButton:s("filter.buttons.search")})})}),extra:e.jsx(I,{type:"text",onClick:()=>h(!o),children:o?e.jsx(E,{}):e.jsx(L,{})}),bodyStyle:{padding:"0px"}}),m=()=>e.jsx(w,{title:s("filter.title"),extra:e.jsx(I,{onClick:()=>h(!o),type:"text",children:o?e.jsx(E,{}):e.jsx(L,{})}),children:e.jsxs(i,{layout:"vertical",...r,children:[e.jsxs(V,{gutter:24,children:[e.jsx(j,{span:6,children:e.jsx(i.Item,{label:s("filter.fields.query"),name:"q",children:e.jsx(q,{placeholder:s("filter.placeholders.query"),prefix:e.jsx(Y,{})})})}),e.jsx(j,{span:6,children:e.jsx(i.Item,{label:s("products.fields.status"),name:"status",children:e.jsx($,{allowClear:!0,options:U,placeholder:s("products.placeholders.status")})})}),e.jsx(j,{span:6,children:e.jsx(i.Item,{label:s("products.fields.category"),name:"category_id",getValueProps:n=>n?{value:Q(n,c)}:{value:null},getValueFromEvent:n=>n?n[n.length-1]:null,children:e.jsx(X,{options:c,fieldNames:{label:"name",value:"id",children:"children"},expandTrigger:"hover",changeOnSelect:!0,allowClear:!0})})}),e.jsx(j,{span:6,children:e.jsx(i.Item,{label:s("filter.fields.created_at"),name:"createdAt",children:e.jsx(Z,{})})})]}),e.jsx(i.Item,{children:e.jsx(I,{htmlType:"submit",type:"primary",children:s("filter.buttons.search")})})]})});return o?S():m()};export{ne as ProductList,ne as default};