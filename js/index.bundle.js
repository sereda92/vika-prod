!function(){"use strict";const e=document.querySelector(".main__line_item"),t=document.querySelector(".marquee");e.addEventListener("mouseover",(()=>{t.forEach((e=>{e.style.animationPlayState="paused"}))})),e.addEventListener("mouseout",(()=>{t.style.animationPlayState="running"}));const s=document.querySelector(".burger__btn"),i=document.querySelector(".burger"),n=document.querySelector("body"),o=document.querySelector(".header");function c(e){e.preventDefault(),i.classList.toggle("burger_active"),i.classList.contains("burger_active")?(n.classList.add("body_non_scroll"),s.classList.add("burger__btn_active"),o.classList.add("header_burger_active"),console.log("yes")):(n.classList.remove("body_non_scroll"),s.classList.remove("burger__btn_active"),o.classList.remove("header_burger_active"),console.log("no"))}s.addEventListener("click",c),s.addEventListener("touchstart",c),document.addEventListener("DOMContentLoaded",(function(){function e(e){document.querySelectorAll(".filter_block").forEach((e=>{const t=e.querySelector(".slider");t&&$(t).hasClass("slick-initialized")&&$(t).slick("unslick"),e.classList.remove("__active"),e.style.display="none"}));const t=document.getElementById(e);t&&(t.classList.add("__active"),t.style.display="block",setTimeout((()=>{var e;e=t.querySelector(".slider"),$(e).slick({dots:!0,infinite:!1,slidesToShow:1,slidesToScroll:1,arrows:!1})}),0))}document.querySelectorAll(".filter-btn").forEach((t=>{t.addEventListener("click",(function(){e(this.getAttribute("data-target"))}))})),e("block_5"),window.addEventListener("resize",(function(){const t=document.querySelector(".filter_block.__active");t&&e(t.id)}))}));const r=document.querySelector(".whats-inside_body"),l=document.querySelector(".inside_arrow_2");l.addEventListener("click",(()=>{r.classList.contains("inside_visible")?(r.style.height=`${r.scrollHeight}px`,setTimeout((()=>{r.style.height="0px",r.classList.remove("inside_visible"),l.classList.remove("inside_arrow_2_active")}),0)):(r.style.height=`${r.scrollHeight}px`,r.classList.add("inside_visible"),l.classList.add("inside_arrow_2_active"),r.addEventListener("transitionend",(()=>{r.classList.contains("inside_visible")&&(r.style.height="auto")}),{once:!0}))})),r.style.transition="height 0.3s ease-in-out, opacity 0.4s ease-in-out"}();