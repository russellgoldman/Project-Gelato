"use strict";var precacheConfig=[["/Project-Gelato/index.html","ce4b3294dccd6b4a28498f2df27863eb"],["/Project-Gelato/static/css/main.cb1d7c74.css","b99ba40bc99b726d043d84090481a078"],["/Project-Gelato/static/js/main.42ccbf16.js","3ca54dfafc164569b9258d2a403f0db6"],["/Project-Gelato/static/media/battle-scene.f4fc92c2.png","f4fc92c2461a9f26010c6d733ade1a71"],["/Project-Gelato/static/media/coin.e931c5f6.png","e931c5f632f2108a64a0c4119aa5402b"],["/Project-Gelato/static/media/dragon.41104d03.png","41104d03f7b4272d21b1cdd03c9b1deb"],["/Project-Gelato/static/media/green-monster.abe5f4bc.png","abe5f4bcc6ec9fb72cc68d8e59314d02"],["/Project-Gelato/static/media/greenHillZone.48b3b0b7.jpg","48b3b0b78de0deb781b7583b279b7fea"],["/Project-Gelato/static/media/hyruleCastle.e625d771.png","e625d77140d558d3af0313bc0056091b"],["/Project-Gelato/static/media/luigiMansion.3e3aed5e.jpg","3e3aed5eea416c431e9bf46bea3826d6"],["/Project-Gelato/static/media/mock8crop.25bbc473.png","25bbc473ea5f6d071a4b71aa692c44e2"],["/Project-Gelato/static/media/mushroom.0029f506.png","0029f50670ac58bf3c9a74ff76d90f5f"],["/Project-Gelato/static/media/pokemonLeague.7e9c4ec9.jpg","7e9c4ec9aa7cb6b04e969f380988a2f3"],["/Project-Gelato/static/media/scroll.762757c8.png","762757c8d1fe387471d2bc87e1136a89"],["/Project-Gelato/static/media/student-icon.5629e4af.png","5629e4af4a809ab6098ebcdaa89f80c4"],["/Project-Gelato/static/media/teacher-icon.f871276a.svg","f871276a121f8834b0aab623430165e8"],["/Project-Gelato/static/media/teacher.aa41467c.png","aa41467cd27b89990c51b0faa116e832"],["/Project-Gelato/static/media/user-sprite2.850ce265.svg","850ce265cc5bd59838d40675c2f6ad10"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/Project-Gelato/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});