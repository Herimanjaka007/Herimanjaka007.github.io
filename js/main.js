import {onIntersecting } from "./animation.js";

document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver(onIntersecting,{threshold:.1});

    observer.observe(document.querySelector("header"));
    document.querySelectorAll(".add-ons .card").forEach(elt => observer.observe(elt));

})