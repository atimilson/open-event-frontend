(function(e,r){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?r(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],r):r(e.moment)})(this,function(e){"use strict"
function r(e){return e%100==11||e%10!=1}function n(e,n,u,a){var t=e+" "
switch(u){case"s":return n||a?"nokkrar sekúndur":"nokkrum sekúndum"
case"ss":return r(e)?t+(n||a?"sekúndur":"sekúndum"):t+"sekúnda"
case"m":return n?"mínúta":"mínútu"
case"mm":return r(e)?t+(n||a?"mínútur":"mínútum"):n?t+"mínúta":t+"mínútu"
case"hh":return r(e)?t+(n||a?"klukkustundir":"klukkustundum"):t+"klukkustund"
case"d":return n?"dagur":a?"dag":"degi"
case"dd":return r(e)?n?t+"dagar":t+(a?"daga":"dögum"):n?t+"dagur":t+(a?"dag":"degi")
case"M":return n?"mánuður":a?"mánuð":"mánuði"
case"MM":return r(e)?n?t+"mánuðir":t+(a?"mánuði":"mánuðum"):n?t+"mánuður":t+(a?"mánuð":"mánuði")
case"y":return n||a?"ár":"ári"
case"yy":return r(e)?t+(n||a?"ár":"árum"):t+(n||a?"ár":"ári")}}return e.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:n,ss:n,m:n,mm:n,h:"klukkustund",hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})

//# sourceMappingURL=is.map