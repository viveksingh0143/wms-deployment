import{_ as y,b8 as u,s as k,j as s,aw as p,v as b,f,w as x,d as _,x as g}from"./index-7ade8dfe.js";const{Paragraph:l}=g,B=()=>{var n,a,c;const t=y(),{batchlabelId:o}=u(),{queryResult:d}=k({meta:{parentResources:[{name:"batchlabels",value:o}]}}),{data:i,isLoading:m}=d,e=i==null?void 0:i.data,h=[{key:"1",label:t("stickers.fields.id"),children:s.jsx(l,{style:{marginBottom:0},children:(e==null?void 0:e.id)??""})},{key:"2",label:t("stickers.fields.barcode"),children:s.jsx(l,{style:{marginBottom:0},children:(e==null?void 0:e.barcode)??""})},{key:"3",label:t("stickers.fields.packet_no"),children:s.jsx(l,{style:{marginBottom:0},children:(e==null?void 0:e.packet_no)??""})},{key:"4",label:t("stickers.fields.print_count"),children:s.jsx(l,{style:{marginBottom:0},children:(e==null?void 0:e.print_count)??""})},{key:"5",label:t("stickers.fields.shift"),children:s.jsx(l,{style:{marginBottom:0},children:(e==null?void 0:e.shift)??""})},{key:"6",label:t("stickers.fields.product_line"),children:s.jsx(l,{style:{marginBottom:0},children:(e==null?void 0:e.product_line)??""})},{key:"7",label:t("stickers.fields.batch_no"),children:s.jsx(l,{style:{marginBottom:0},children:(e==null?void 0:e.batch_no)??""})},{key:"8",label:t("stickers.fields.machine_no"),children:s.jsx(l,{style:{marginBottom:0},children:(e==null?void 0:e.machine_no)??""})},{key:"9",label:t("stickers.fields.quantity"),children:s.jsx(l,{style:{marginBottom:0},children:(e==null?void 0:e.quantity)??""})},{key:"10",label:t("stickers.fields.unit_weight"),children:s.jsx(l,{style:{marginBottom:0},children:(e==null?void 0:e.unit_weight)??""})},{key:"11",label:t("stickers.fields.supervisor"),children:s.jsx(l,{style:{marginBottom:0},children:(e==null?void 0:e.supervisor)??""})},{key:"13",label:t("stickers.fields.is_used"),children:s.jsx(p,{status:e!=null&&e.is_used?"processing":"success",text:t(e!=null&&e.is_used?"common.fields.yes":"common.fields.no")})}],r=[{title:t("products.fields.product_type"),dataIndex:["product","product_type"],key:"product_type"},{title:t("products.fields.name"),dataIndex:["product","name"],key:"name"},{title:t("products.fields.code"),dataIndex:["product","code"],key:"code"},{title:t("stickers.items.fields.batch_no"),dataIndex:"batch_no",key:"batch_no"},{title:t("stickers.items.fields.quantity"),dataIndex:"quantity",key:"quantity"}];return s.jsx(b,{isLoading:m,children:s.jsxs(f,{direction:"vertical",style:{width:"100%"},children:[s.jsx(x,{column:2,bordered:!0,items:h}),((n=i==null?void 0:i.data)==null?void 0:n.items)&&((a=i==null?void 0:i.data)==null?void 0:a.items.length)>0&&s.jsx(_,{dataSource:(c=i==null?void 0:i.data)==null?void 0:c.items,columns:r,pagination:!1})]})})};export{B as StickerShow,B as default};