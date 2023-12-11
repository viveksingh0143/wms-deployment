import{b8 as P,_ as I,r as m,a as B,b as k,c as w,d as i,j as e,e as U,G,h as A,f,B as _,w as p,aw as L,i as C,F as c,I as F,k as T,l as D,m as v,n as b,o as N,p as H}from"./index-7ade8dfe.js";import{r as Q,s as X,m as q}from"./printerfn-12fd91a5.js";const W=`^XA
^SZ2^JMA
^MCY^PMN
^PW580
~JSN
^JZY
^LH0,0^LRN
^XZ
~DGR:SSGFX000.GRF,588,12,:Z64:eJxtkTFOxDAQRb9xSFJY3ogCGcnAInGA0BnBFjRcg0hcwHRLF2lRyuUGnCElZUQKN0hcgCIoB8gBaBizm6yLnep5PPMy8QBj8HRCHAQchrrYnw+jFYFHzG53J2m6LaXF2fPImOesnmosU+M8yGGmfEanMVIUQX4+sa9vRg8Uc+LJ6SJBznP+Ff2+vncJzhedPFx9n/40kZ9Hon9Rd2UKmkezvlSM+NrVhlV01ySwrbYrQRLvgbbtZSNBngzZw6IvNSOPAF+bba9GfKweN2wgLWK6bja9EEXsPUfQOXwbeWbIFHip0QhUWSHR+l6FeNnJE2JoAzvUfKio/maAdaD/Is+Vg02Aj//Pu+D9o3BfAYcrlQHfB/wZ8HIitt7tAW97S/zj4w/OEUf8:8BA6
^XA
^FT32,110
^CI0
^A0N,17,23^FB450,2^FDProd: {{PRODUCT_NAME}}^FS
^FT31,169
^A0N,17,23^FDBatch No.   :^FS
^FT164,169
^A0N,17,23^FD{{BATCH_NO}}^FS
^FT32,201
^A0N,17,23^FDUnit Weight:^FS
^FT164,201
^A0N,17,23^FD{{UNIT_WEIGHT}}^FS
^FT32,233
^A0N,17,23^FDQuantity     :^FS
^FT164,233
^A0N,17,23^FD{{QUANTITY}}^FS
^FT281,167
^A0N,17,23^FDPacket No.    :^FS
^FT429,167
^A0N,17,23^FD{{PACKET_NO}}^FS
^FT282,199
^A0N,17,23^FDInward Date  :^FS
^FT429,199
^A0N,17,23^FD{{INWARD_DATE}}^FS
^FT284,231
^A0N,17,23^FDProduct Code:^FS
^FT429,231
^A0N,17,23^FD{{PRODUCT_CODE}}^FS
^FO460,24
^BY2^BXN,2,200,44,44,5,_^FH^FDProd: {{PRODUCT_NAME}}\0DDate: {{INWARD_DATE}}\0DBatch: {{BATCH_NO}}\0DPacket No.: {{PACKET_NO}}\0DUnit Weight: {{UNIT_WEIGHT}}\0DQuantity: {{QUANTITY}}\0DProduct Code: {{PRODUCT_CODE}}\0DPalette: {{CONTAINER_CODE}}^FS
^FO72,304
^BY1,3.0^B3N,N,56,N,N^FD{{BARCODE}}^FS
^FT129,381
^A0N,20,27^FD{{BARCODE}}^FS
^FT30,263
^A0N,17,23^FDPalette       :^FS
^FT164,263
^A0N,17,23^FDRMP00001^FS
^FO27,22
^XGR:SSGFX000.GRF,1,1^FS
^PQ1,0,1,Y
^XZ
^XA
^IDR:SSGFX000.GRF^XZ
`,{RangePicker:M}=H,Z=()=>{const{batchlabelId:o}=P(),n=I(),[d,x]=m.useState(!1),{tableProps:l,searchFormProps:S}=B({meta:{parentResources:[{name:"batchlabels",value:o}]},syncWithLocation:!0,onSearch:t=>{const r=[],{q:a,barcode:s,batch_no:u,createdAt:h}=t;return r.push({field:"query",operator:"eq",value:a},{field:"barcode",operator:"contains",value:s},{field:"batch_no",operator:"contains",value:u},{field:"createdAt",operator:"gte",value:h?h[0].toISOString():void 0},{field:"createdAt",operator:"lte",value:h?h[1].toISOString():void 0}),r}}),{triggerExport:g,isLoading:R}=k({meta:{parentResources:[{name:"batchlabels",value:o}]},mapData:t=>{var r,a;return{id:t.id,barcode:t.barcode,packet_no:t.packet_no,shift:t.shift,product_line:t.product_line,batch_no:t.batch_no,machine_no:t.machine_no,is_used:t.is_used,quantity:t.quantity,unit_weight:t.unit_weight,print_count:t.print_count,product_code:(r=t.product)==null?void 0:r.code,product_name:(a=t.product)==null?void 0:a.name}}}),[j,E]=w.useState([]),O={selectedRowKeys:j,onChange:t=>{E(t)},selections:[i.SELECTION_ALL,i.SELECTION_INVERT,i.SELECTION_NONE]},y=async()=>{if(!(l!=null&&l.dataSource))return;x(!0);let t=0,r=0;const a=l.dataSource.filter(s=>j.includes(s==null?void 0:s.id)).map(s=>Q(W,{PRODUCT_NAME:s==null?void 0:s.product_line,BATCH_NO:s==null?void 0:s.batch_no,UNIT_WEIGHT:s==null?void 0:s.unit_weight,QUANTITY:s==null?void 0:s.quantity,PACKET_NO:s==null?void 0:s.packet_no,INWARD_DATE:"",PRODUCT_CODE:s.product.code,CONTAINER_CODE:"",BARCODE:s==null?void 0:s.barcode}))||[];for(let s of a){const u=new Blob([s],{type:"text/plain"});try{await X(u),t++}catch(h){console.error("Error sending print job:",h),r++}}x(!1),q.info(`Printing completed. Success: ${t}, Failed: ${r}`)};return e.jsxs(U,{headerButtons:({defaultButtons:t})=>e.jsxs(e.Fragment,{children:[t,e.jsx(G,{onClick:g,loading:R}),e.jsx(A,{resource:"batchlabels",recordItemId:o,children:n("batchlabels.batchlabels")})]}),headerProps:{subTitle:e.jsx(f,{children:e.jsx(_,{disabled:j.length<1,type:"primary",onClick:y,children:n("buttons.print-barcode")})})},children:[e.jsx(Y,{formProps:S}),e.jsxs(i,{...l,rowSelection:O,rowKey:"id",pagination:{...l.pagination,showSizeChanger:!0},expandable:{expandedRowRender:t=>e.jsxs(p,{bordered:!0,children:[e.jsx(p.Item,{label:n("stickers.fields.packet_no"),children:t.packet_no}),e.jsx(p.Item,{label:n("stickers.fields.machine_no"),children:t.machine_no}),e.jsx(p.Item,{label:n("stickers.fields.unit_weight"),children:Number(t.unit_weight)}),e.jsx(p.Item,{label:n("stickers.fields.print_count"),children:t.print_count})]})},children:[e.jsx(i.Column,{title:n("table.s_no"),render:(t,r,a)=>{let s=1,u=10;return typeof l.pagination=="object"&&(s=l.pagination.current??1,u=l.pagination.pageSize??10),(s-1)*u+a+1}},"index"),e.jsx(i.Column,{dataIndex:"barcode",title:n("stickers.fields.barcode"),sorter:!0}),e.jsx(i.Column,{dataIndex:"product_line",title:n("stickers.fields.product_line"),sorter:!0}),e.jsx(i.Column,{dataIndex:"batch_no",title:n("stickers.fields.batch_no"),sorter:!0}),e.jsx(i.Column,{dataIndex:"quantity",title:n("stickers.fields.quantity"),sorter:!0,render:(t,r,a)=>Number(t)}),e.jsx(i.Column,{dataIndex:"shift",title:n("stickers.fields.shift"),sorter:!0}),e.jsx(i.Column,{dataIndex:"is_used",title:n("stickers.fields.is_used"),sorter:!0,render:(t,r,a)=>e.jsx(L,{status:r!=null&&r.is_used?"processing":"success",text:r!=null&&r.is_used?n("common.fields.yes"):n("common.fields.no")})}),e.jsx(i.Column,{title:n("table.actions"),dataIndex:"actions",render:(t,r)=>e.jsx(f,{children:e.jsx(A,{hideText:!0,size:"small",recordItemId:r.id})})})]})]})},Y=({formProps:o})=>{const n=I(),[d,x]=m.useState(!0),l=()=>e.jsx(C,{title:e.jsx(c,{layout:"inline",...o,onFinish:o==null?void 0:o.onFinish,children:e.jsx(c.Item,{name:"q",style:{width:"100%"},children:e.jsx(F.Search,{placeholder:n("filter.placeholders.query"),enterButton:n("filter.buttons.search")})})}),extra:e.jsx(_,{type:"text",onClick:()=>x(!d),children:d?e.jsx(T,{}):e.jsx(D,{})}),bodyStyle:{padding:"0px"}}),S=()=>e.jsx(C,{title:n("filter.title"),extra:e.jsx(_,{onClick:()=>x(!d),type:"text",children:d?e.jsx(T,{}):e.jsx(D,{})}),children:e.jsxs(c,{layout:"vertical",...o,children:[e.jsxs(v,{gutter:24,children:[e.jsx(b,{span:6,children:e.jsx(c.Item,{label:n("filter.fields.query"),name:"q",children:e.jsx(F,{placeholder:n("filter.placeholders.query"),prefix:e.jsx(N,{})})})}),e.jsx(b,{span:6,children:e.jsx(c.Item,{label:n("filter.fields.barcode"),name:"barcode",children:e.jsx(F,{placeholder:n("filter.placeholders.barcode"),prefix:e.jsx(N,{})})})}),e.jsx(b,{span:6,children:e.jsx(c.Item,{label:n("filter.fields.batch_no"),name:"batch_no",children:e.jsx(F,{placeholder:n("filter.placeholders.batch_no"),prefix:e.jsx(N,{})})})}),e.jsx(b,{span:6,children:e.jsx(c.Item,{label:n("filter.fields.created_at"),name:"createdAt",children:e.jsx(M,{})})})]}),e.jsx(c.Item,{children:e.jsx(_,{htmlType:"submit",type:"primary",children:n("filter.buttons.search")})})]})});return d?l():S()};export{Z as StickerList,Z as default};
