// ==UserScript==
// @name         Substance Asset Page GLB Auto Select
// @website      https://github.com/cpawliuk/Substance-Asset-Page-GLB-Auto-Select
// @version      2024-07-17
// @description  Simple script to auto select the GLB download option
// @author       Christopher Pawliuk
// @match        *://substance3d.adobe.com/assets/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=adobe.com
// @grant        none
// ==/UserScript==

window.setTimeout = window.setTimeout.bind(window);
window.setInterval = window.setInterval.bind(window);

addEventListener("load", setTimeout(RunScript, 3000)); // Set the timeout higher if needed due to the client side delay in loading the components.

function SelectGLB() {
    document.getElementsByClassName("spectrum-SplitButton-trigger")[0].click();
    document.getElementsByClassName("spectrum-Menu-item")[1].click();

    // Script will continue to call the function every 3000 ms due to React being used for the site.
    setInterval(() => {
        document.getElementsByClassName("spectrum-SplitButton-trigger")[0].click();
        document.getElementsByClassName("spectrum-Menu-item")[1].click();
    }, 3000);
}

function RunScript() {
    SelectGLB();
}