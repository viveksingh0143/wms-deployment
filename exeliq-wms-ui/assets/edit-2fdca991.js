import{_ as j,b8 as f,r as _,T as v,j as e,q as C,F as a,m as I,n as u,I as r,i as S,b9 as c}from"./index-7ade8dfe.js";import{Q as g}from"./index-0a8895bc.js";import{S as z}from"./index-ef404e1a.js";const F=()=>{const s=j(),{storeId:t}=f(),[d,i]=_.useState(),{formProps:l,saveButtonProps:b}=v({meta:{parentResources:[{name:"stores",value:t}]},queryOptions:{onSuccess:m=>{i(m.data.code)}}}),x=(m,o)=>{var h;const n=[];if(o.zone_name&&n.push(c(o.zone_name)),o.aisle_number&&n.push(c(o.aisle_number)),o.rack_number&&n.push(c(o.rack_number)),o.shelf_number&&n.push(c(o.shelf_number)),n.length>0){const p=n.join("/").toUpperCase();(h=l==null?void 0:l.form)==null||h.setFieldValue(["code"],`S${t}/${p}`),i(p)}else i(void 0)};return e.jsx(C,{saveButtonProps:b,children:e.jsx(a,{...l,onValuesChange:x,layout:"vertical",children:e.jsxs(I,{gutter:24,children:[e.jsxs(u,{span:12,children:[e.jsx(a.Item,{label:s("locations.fields.code"),name:["code"],rules:[{required:!0,max:50}],children:e.jsx(r,{disabled:!0,placeholder:s("locations.placeholders.code")})}),e.jsx(a.Item,{label:s("locations.fields.zone_name"),name:["zone_name"],children:e.jsx(r,{placeholder:s("locations.placeholders.zone_name")})}),e.jsx(a.Item,{label:s("locations.fields.aisle_number"),name:["aisle_number"],children:e.jsx(r,{placeholder:s("locations.placeholders.aisle_number")})}),e.jsx(a.Item,{label:s("locations.fields.rack_number"),name:["rack_number"],children:e.jsx(r,{placeholder:s("locations.placeholders.rack_number")})}),e.jsx(a.Item,{label:s("locations.fields.shelf_number"),name:["shelf_number"],children:e.jsx(r,{placeholder:s("locations.placeholders.shelf_number")})}),e.jsx(a.Item,{label:s("locations.fields.description"),name:["description"],children:e.jsx(r,{placeholder:s("locations.placeholders.description")})})]}),e.jsx(u,{span:12,children:d?e.jsx(g,{errorLevel:"H",size:300,iconSize:300/4,value:d,icon:"/images/berry-global.png"}):e.jsx(S,{bordered:!1,children:e.jsx(z,{title:s("common.qrcode"),value:s("common.not_available"),precision:2,valueStyle:{color:"#3f8600"}})})})]})})})};export{F as LocationEdit,F as default};
