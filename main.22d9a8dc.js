parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){return a(n)||o(n)||e(n)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(n,t){if(n){if("string"==typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(n,t):void 0}}function o(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function a(n){if(Array.isArray(n))return c(n)}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}var r=n($("tbody > tr")),i=[{phone:"0987658923",date:"15.06.2018",age:18,status:"не замужем",job:"Сильпо, менеджер",edu:"Высшее КНЛУ менеджмент организаций"},{phone:"0506123123",date:"21.05.2018",age:23,status:"холост",job:"Фора, кассир",edu:"Высшее НТУУ КПИ. Финансы и кредит."},{phone:"0966671290",date:"22.04.2018",age:36,status:"замужем",job:"Фора, супервайзер",edu:"Высшее НТУУ КПИ. Финансы и кредит."}];function s(t){n($(".SectionTable__person")).forEach(function(n){return n.classList.remove("SectionTable__chosen")}),t.currentTarget.classList.add("SectionTable__chosen");var e=t.currentTarget.children[0].innerHTML,o=i.find(function(n){return e.includes(n.phone)});$(".RightBox__when").html("Добавлен: ".concat(o.date)),$(".RightBox__age").html("Возраст: ".concat(o.age)),$(".RightBox__status").html("Семейное положение: ".concat(o.status)),$(".RightBox__job").html("Работает: ".concat(o.job)),$(".RightBox__edu").html("Образование: ".concat(o.edu))}function d(){$(".SectionTable__mainRow").remove(),$("thead").css("display","table-header-group"),$("tbody >").css("display","table-row")}$("tbody > tr").click(function(t){$("thead").css("display","none"),$("tbody >").css("display","none");var e=t.currentTarget.children[1].innerHTML,o=i.find(function(n){return n.phone===e}),a=i.indexOf(o);$("tbody").append('<tr class="SectionTable__mainRow">\n      <td class="SectionTable__left"></td>\n    </tr>'),r.map(function(t,e){var o=n(t.children).filter(function(n,t){return t<=2});e===a?$(".SectionTable__left").append('<div class="SectionTable__person SectionTable__chosen" >\n          <div>\n            '.concat(o[0].innerHTML,"\n            <div>\n              <span>").concat(o[2].innerHTML,"</span>").concat(o[1].innerHTML,"\n            </div>\n          </div>\n        </div>")):$(".SectionTable__left").append('<div class="SectionTable__person">\n          <div>\n            '.concat(o[0].innerHTML,"\n            <div>\n              <span>").concat(o[2].innerHTML,"</span>").concat(o[1].innerHTML,"\n            </div>\n          </div>\n        </div>"))}),$(".SectionTable__person").click(function(n){return s(n)}),$(".SectionTable__mainRow").append('<td class="SectionTable__right">\n      <div class="RightBox">\n        <p class="RightBox__when">Добавлен: '.concat(o.date,'</p>\n        <button>X</button>\n      </div>\n      <p class="RightBox__age">Возраст: ').concat(o.age,'</p>\n      <p class="RightBox__status">Семейное положение: ').concat(o.status,'</p>\n      <p class="RightBox__job">Работает: ').concat(o.job,'</p>\n      <p class="RightBox__edu">Образование: ').concat(o.edu,"</p>\n    </td>")),$(".RightBox button").click(function(){return d()})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.22d9a8dc.js.map