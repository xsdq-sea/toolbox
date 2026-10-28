import{_ as l}from"./DDOLKK-F.js";import{p as m,c as d,u as c,b as y}from"#entry";import"./CpTnsik7.js";import"./Bzo4VKO_.js";import"./CWX0IZvl.js";import"./D1Q0mhJZ.js";import"./_NDP371j.js";/* empty css        */function b(t,i){t.pages.jwt=()=>t.define([t.area("input","JWT 令牌","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZW1vIiwibmFtZSI6IlRvb2xib3gifQ.demo"),t.note("仅解析 Header 和 Payload，不校验签名，也不验证令牌可信性。请勿把解析结果作为登录或授权依据。")],()=>{const r=t.v("input").trim().split(".");if(r.length!==3||!r[0]||!r[1])throw Error("请输入三段式 JWT（Header.Payload.Signature）。");const p=o=>{if(!/^[A-Za-z0-9_-]+$/.test(o))throw Error("JWT 中有无效的 Base64URL 字符。");try{return JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(Uint8Array.from(atob(o.replace(/-/g,"+").replace(/_/g,"/")),s=>s.charCodeAt(0))))}catch{throw Error("JWT 内容不是有效的 UTF-8 JSON。")}},n=p(r[0]),e=p(r[1]);if(!n||typeof n!="object"||Array.isArray(n)||!e||typeof e!="object"||Array.isArray(e))throw Error("Header 和 Payload 应为 JSON 对象。");const f=Date.now()/1e3,a=[];for(const[o,s]of[["iat","签发时间"],["nbf","生效时间"],["exp","过期时间"]])if(Object.hasOwn(e,o)){const u=new Date(e[o]*1e3);a.push(`${s}：${typeof e[o]=="number"&&Number.isFinite(+u)?u.toISOString():"字段格式无效"}`)}return typeof e.exp=="number"&&a.push(e.exp<=f?"时间状态：已过期":"时间状态：尚未过期（未验证签名）"),typeof e.nbf=="number"&&e.nbf>f&&a.push("时间状态：尚未生效"),`Header
${JSON.stringify(n,null,2)}

Payload
${JSON.stringify(e,null,2)}

${a.join(`
`)}

签名未验证。`},{auto:!0,live:!0,button:"解析 JWT"})}const j={__name:"jwt",setup(t){const i=m["jwt.html"],r=i.operations;return(p,n)=>(y(),d(l,{page:c(i),operations:c(r),register:c(b)},null,8,["page","operations","register"]))}};export{j as default};
