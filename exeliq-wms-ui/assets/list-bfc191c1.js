import{_ as m,a as b,b as f,j as t,e as C,G as g,d as a,f as y,h as I,R as p,F as i,m as S,n as x,S as h,B as _}from"./index-7ade8dfe.js";import{C as P}from"./collapsable_card-d6ec21fd.js";const L=()=>{const s=m(),{tableProps:r,searchFormProps:l}=b({syncWithLocation:!0,onSearch:e=>{const o=[],{product_id:c,store_id:n}=e;return o.push({field:"product_id",operator:"eq",value:c},{field:"store_id",operator:"eq",value:n}),o}}),{triggerExport:d,isLoading:j}=f({mapData:e=>({id:e.id,product:`${e.product.name} (${e.product.code})`,batch_number:e.batch_number,quantity:e.quantity,unit:e.unit,container:e.container.code,store:e.store.name,status:e.status})});return t.jsxs(C,{headerButtons:({defaultButtons:e})=>t.jsxs(t.Fragment,{children:[e,t.jsx(g,{onClick:d,loading:j})]}),children:[t.jsx(q,{formProps:l}),t.jsxs(a,{...r,rowKey:"id",pagination:{...r.pagination,showSizeChanger:!0},children:[t.jsx(a.Column,{title:s("table.s_no"),render:(e,o,c)=>{let n=1,u=10;return typeof r.pagination=="object"&&(n=r.pagination.current??1,u=r.pagination.pageSize??10),(n-1)*u+c+1}},"index"),t.jsx(a.Column,{dataIndex:["store","name"],title:s("rmbatches.fields.store"),sorter:!0}),t.jsx(a.Column,{dataIndex:["product","name"],title:s("rmbatches.fields.product"),sorter:!0}),t.jsx(a.Column,{dataIndex:["container","code"],title:s("rmbatches.fields.product"),sorter:!0}),t.jsx(a.Column,{dataIndex:"quantity",title:s("rmbatches.fields.quantity"),sorter:!0}),t.jsx(a.Column,{dataIndex:"status",title:s("rmbatches.fields.status"),sorter:!0}),t.jsx(a.Column,{title:s("table.actions"),dataIndex:"actions",render:(e,o)=>t.jsx(y,{children:t.jsx(I,{hideText:!0,size:"small",recordItemId:o.id})})})]})]})},q=({formProps:s})=>{const r=m(),{selectProps:l}=p({resource:"stores",optionLabel:"name",optionValue:"id"}),{selectProps:d}=p({resource:"products",optionLabel:"name",optionValue:"id"});return t.jsx(P,{defaultCollapse:!0,title:r("filter.title"),children:t.jsxs(i,{layout:"vertical",...s,children:[t.jsxs(S,{gutter:24,children:[t.jsx(x,{span:6,children:t.jsx(i.Item,{label:r("rmbatches.fields.store"),name:"store_id",children:t.jsx(h,{...l,allowClear:!0,onSearch:void 0,filterOption:!0,optionFilterProp:"label"})})}),t.jsx(x,{span:6,children:t.jsx(i.Item,{label:r("rmbatches.fields.product"),name:"product_id",children:t.jsx(h,{...d,allowClear:!0,onSearch:void 0,filterOption:!0,optionFilterProp:"label"})})})]}),t.jsx(i.Item,{children:t.jsx(_,{htmlType:"submit",type:"primary",children:r("filter.buttons.search")})})]})})};export{L as RMBatchList,L as default};
