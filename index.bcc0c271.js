function e(e,t){let o=e.offsetLeft;e.offsetLeft>=0?e.style.left=-(e.childElementCount-1)*t.offsetWidth+"px":(o%t.offsetWidth==0&&(o+=t.offsetWidth,e.style.left=o+"px"),position=Math.abs(o)/t.offsetWidth)}function t(e,t){let o=e.offsetLeft;e.offsetLeft<=-(e.childElementCount-1)*t.offsetWidth?e.style.left="0px":o%t.offsetWidth==0&&(o-=t.offsetWidth,e.style.left=o+"px")}function o(e,t,o){const n=Math.abs(t.offsetLeft)/o,i=document.getElementById(`${e[n]?.dataset.atribute}`);i&&(i.style.display="block",setTimeout((()=>i.classList.add("is_open")),100),window.addEventListener("keydown",s))}function s(e){const t=document.querySelector(".backdrop.is_open");t&&"Escape"===e.key&&t.classList.remove("is_open"),window.removeEventListener("keydown",s)}const[n,i,r,c,d,a]=['[data-atribute="prev"]','[data-atribute="next"]',".box_technique",".about_technique",".details_product","body"].map((e=>document.querySelector(e))),l=r.children,u=c.offsetWidth;n.addEventListener("click",(()=>e(r,c))),i.addEventListener("click",(()=>t(r,c))),d.addEventListener("click",(()=>o(l,r,u))),a.addEventListener("click",(function(e){if("backdrop"===e.target.classList[0]||"close"===e.target.dataset.atribute){const e=document.querySelector(".backdrop.is_open");e&&(e.classList.remove("is_open"),setTimeout((()=>e.style.display="none"),500))}}));let f={root:null,rootMargin:"200px",threshold:1},b=new IntersectionObserver((function(e,t){e.forEach((e=>{if(e.isIntersecting){const e=document.querySelector(".bread_with_egg "),o=document.querySelector(".bread_with_cheese");e.classList.add("is_loading"),o.classList.add("is_loading"),t.unobserve(y)}}))}),f),y=document.querySelector(".adress_img"),m=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(document.querySelector(".wood ").classList.add("is_loading"),t.unobserve(_))}))}),f),_=document.querySelector(".box_our_benefits"),g=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(document.querySelector(".food_product").classList.add("is_loading"),document.querySelector(".book_product").classList.add("is_loading"),t.unobserve(h))}))}),f),h=document.querySelector("#observer_product"),p=new IntersectionObserver((function(e,t){e.forEach((e=>{if(e.isIntersecting){const e=document.querySelector(".man_greeting"),o=document.querySelector(".girl_greeting");e.classList.add("is_loading"),o.classList.add("is_loading"),t.unobserve(v)}}))}),f),v=document.querySelector('[data-atrebute="myRootGreeting"]');b.observe(y),m.observe(_),g.observe(h),p.observe(v);
//# sourceMappingURL=index.bcc0c271.js.map
