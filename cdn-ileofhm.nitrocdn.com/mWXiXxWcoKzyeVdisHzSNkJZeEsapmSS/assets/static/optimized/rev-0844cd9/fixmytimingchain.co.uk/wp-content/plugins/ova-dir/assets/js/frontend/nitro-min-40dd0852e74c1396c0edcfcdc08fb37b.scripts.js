(function(t){"use strict";async function e(){const t=document.getElementById("ova_dir_single_google_map");if(!t){return}const e=JSON.parse(t.getAttribute("data-map"));const a=parseFloat(e.latitude);const n=parseFloat(e.longitude);const l=parseInt(e.zoom);const o=new google.maps.Map(document.getElementById("ova_dir_single_google_map"),{center:{lat:a,lng:n},zoom:l,mapTypeControl:false});if(a&&n){const t=new google.maps.Marker({map:o,anchorPoint:new google.maps.Point(0,-29),position:{lat:a,lng:n}})}}async function a(){const t=document.getElementById("ova_dir_archive_google_map");if(!t){return}const{AdvancedMarkerElement:e}=await google.maps.importLibrary("marker");const a=JSON.parse(t.getAttribute("data-map"));const n=parseFloat(a.latitude);const l=parseFloat(a.longitude);const o=parseInt(a.zoom);const i=JSON.parse(t.getAttribute("data-properties"));var s=[];var r=[];var c=[];if(i.length){for(const t of i){if(t.position.lat!=""&&t.position.lng!=""){let e=parseFloat(t.position.lat);let a=parseFloat(t.position.lng);const n=new google.maps.marker.AdvancedMarkerElement({content:u(t),position:{lat:e,lng:a},title:t.title});n.addListener("click",()=>{p(n,t)});s.push(n);r.push(e);c.push(a)}}}else{const t=new google.maps.marker.AdvancedMarkerElement({position:{lat:n,lng:l}});s.push(t)}var g={};if(r.length>0&&c.length>0){g={lat:m(r),lng:m(c)}}else{g={lat:n,lng:l}}const d=new google.maps.Map(document.getElementById("ova_dir_archive_google_map"),{zoom:o,center:g,mapId:"ova_dir_archive_google_map"});new markerClusterer.MarkerClusterer({markers:s,map:d});function m(t){const e=t.reduce((t,e)=>t+e,0);const a=e/t.length||0;return a}function p(t,e){if(t.content.classList.contains("highlight")){t.content.classList.remove("highlight");t.zIndex=null}else{t.content.classList.add("highlight");t.zIndex=1}}function u(t){const e=document.createElement("div");e.classList.add("property");var a="";if(t.terms){const e=t.terms;for(let t=0;t<e.length;t++){let n=t+1<e.length?", ":"";a+=`<a href="${e[t].url}" title="${e[t].name}">${e[t].name}</a>${n}`}}e.innerHTML=`
                <div class="avatar">
                    <img src="${t.thumbnail}" alt="${t.image_alt}" />
                </div>
                <div class="card">
                    <a href="${t.url}" class="thumbnail" title="${t.title}">
                        <img src="${t.thumbnail}" alt="${t.image_alt}" />
                    </a>
                    <div class="content">
                        <h2 class="title">
                            <a href="${t.url}" title="${t.title}">${t.title}</a>
                        </h2>
                        <ul class="info">
                            <li>
                                <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                                <div class="text">${t.address}</div class="text">
                            </li>
                            <li>
                                <i class="far fa-folder" aria-hidden="true"></i><div class="text">${a}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                `;return e}}e();a();if(t('[data-fancybox="gallery"]').length){Fancybox.bind('[data-fancybox="gallery"]',{})}})(jQuery);