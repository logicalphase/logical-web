/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/dist/chunk-143ef9ef.js","3e1b2946b1e72487dd23cc36da24d0e0"],["/dist/chunk-18db5e69.js","c1082ebc923a0c84401bece86e64bbbc"],["/dist/chunk-2aa109eb.js","aedce713fd240228e7d19d2b708941fd"],["/dist/chunk-3883a88c.js","3898644cf9cbe325d2b86f435f2b48d4"],["/dist/chunk-4b660f7b.js","a5dd71e3417b90755c32ccf28ddba55b"],["/dist/chunk-583e40a0.js","0acfdd722bcd98302a62b2dbc0d0b3d3"],["/dist/chunk-611c0cbc.js","ad44236b670aea994c429a5aa52652b5"],["/dist/chunk-6789b21b.js","7dfe0f71410d76d7b0edb891bb970a41"],["/dist/chunk-740b0c2a.js","ab31f5f1da016daa31678f0c1788cdaa"],["/dist/chunk-789adeaf.js","0d5933bbb4e0bb32ef96591eaaaa75c0"],["/dist/chunk-7f75990a.js","d5f4bc9a975a975f122414740dfcd886"],["/dist/chunk-868a09a6.js","a87208171f9e2042a8c51ee466959a1c"],["/dist/chunk-acefd4c8.js","cdaf33d19b709067e1300bdc3788cac9"],["/dist/chunk-ae39fd2b.js","e32f8cd8784f1a20235af07aeee383bf"],["/dist/chunk-b3dd0b97.js","1ec415bd1780022fc5bbe66b30acff80"],["/dist/chunk-cee9842f.js","75450e8e35fa3c9e0d5d7a03ebc00634"],["/dist/chunk-d7eca4db.js","6f15d989bf1c9d373d7aa6e1e5ff2163"],["/dist/chunk-db82edfb.js","116fcec7327aa2ab39f7e094e68ebbed"],["/dist/chunk-ee48f10b.js","943e064c87302d8ec852ac44877c4b1d"],["/dist/ts-app.js","465c444e3f94b1a80006d24b2da4011d"],["/dist_nomodule/chunk-09e78811.js","a39a4452d07cc7f39c1494b391bd219b"],["/dist_nomodule/chunk-1798c4f7.js","2b01f000bcb7eb3e0fca5ab0e07ad819"],["/dist_nomodule/chunk-1861d1e9.js","629caed848f6952c4e55a95ba24fb265"],["/dist_nomodule/chunk-2768f615.js","b5fc99a3e8f000f64b332744f42430d2"],["/dist_nomodule/chunk-32727ce8.js","1fabc287cd7a2f05693468a0be62127d"],["/dist_nomodule/chunk-3b109c3f.js","00de651b4429337169a6a5019ff6f6f6"],["/dist_nomodule/chunk-41b85a06.js","79c2d50c29ba06d2a501fd382b72420c"],["/dist_nomodule/chunk-4f6bb222.js","c2bccf27c827372868d5f91665b18a91"],["/dist_nomodule/chunk-5131a6e2.js","db834385fb5af0e69b0857f795460563"],["/dist_nomodule/chunk-66e9ab7b.js","8a27dcf5f2db286f6be087f2e10fca9d"],["/dist_nomodule/chunk-84d12337.js","e273abb287f737df2e795a60ecef290b"],["/dist_nomodule/chunk-98d637f1.js","a2320bada9f53644ba6fe1e1da0ee9b4"],["/dist_nomodule/chunk-aeba81bf.js","c1ce8a54ea45a7f9cbc16c9d8f8fd2c0"],["/dist_nomodule/chunk-b3f9c5ee.js","9c1eea259aea2cdb7b294ad153c66428"],["/dist_nomodule/chunk-b4367bd1.js","a564997045169487ad79677b2e59dd1b"],["/dist_nomodule/chunk-d7b481a5.js","e2e9ae6e159671b7ddc7df1e2e4943c0"],["/dist_nomodule/chunk-d81eb9fd.js","c1c73a64603300af258ea077b1008c01"],["/dist_nomodule/chunk-e62fb508.js","5c5a1fc740d4513a5b36823868246bc2"],["/dist_nomodule/chunk-ec626471.js","22a27eeb8af050cf99d2398d715c3aee"],["/dist_nomodule/ts-app.js","3f73197e3b889f9e8d25777fe12b3d2b"],["/images/content/gdg-logo.png","f4868a0b33af36688b077ffb87bed478"],["/images/content/lighthouse-icon-128.png","04c44b9d142eac6d29347fa3bb7442d2"],["/images/content/main-ts-bot-110x240.png","10890da3873bf3d4002b0fa6e8f8f9ee"],["/images/favicon.png","3a7a208bb8f9b793d4851c1798e8e1da"],["/images/hyperpress-logo-254x46.png","85f6dacdfb313aa62abbd0fa17c1c5c5"],["/images/manifest/icon-144x144.png","cd931f96a5ef824bf0bcf578537717b0"],["/images/manifest/icon-192x192.png","d45da5ec6f0fffb4545e1009ef4e8000"],["/images/manifest/icon-48x48.png","c5c1dedf8e119cfa63c0f7ae2437a450"],["/images/manifest/icon-512x512.png","c2ccea77ea937b92cfe14d44b8418346"],["/images/manifest/icon-72x72.png","0ef149bd8ad5db85d668a8a1538f35ea"],["/images/manifest/icon-96x96.png","c6defaf2d15ac9f8ce1ee71c21888a69"],["/index.html","8a8a1d96735e8ff4198c7d6a79863a2f"],["/node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-ce.js","16a6e231db0f767f82644d8cfa072ba0"],["/node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce-pf.js","fd3b6605f07e1064b91fe11db4b62cc3"],["/node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js","4a6d6a659c67d2ec5eeff15cf12566d6"],["/node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd.js","47d6162abb84f5f98b5913a78a6d40b4"],["/node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js","ab073ba059d1e990f93247eacbc4fba4"],["/node_modules/@webcomponents/webcomponentsjs/entrypoints/custom-elements-es5-adapter-index.js","5652c8f83533d62943792a7fe7a2e581"],["/node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-bundle-index.js","8dd62a28e52d133ef1ecf044bc51f109"],["/node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-ce-index.js","0867f0cb4caf5081f1e85da13c24528a"],["/node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-sd-ce-index.js","5d9cd4fb5d341a0e2890edaa2cc8e226"],["/node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-sd-ce-pf-index.js","905226b876defd9d0c1444d353a4c4c5"],["/node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-sd-index.js","d4e3a4413d567733a71057462763e36f"],["/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js","e4803801395c2d2dce6462bf75808b3a"],["/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js","e044a63e034bf10304dad73138b8c74b"],["/node_modules/regenerator-runtime/runtime.js","49e32bd1acc04abda5dadef037ee16f4"],["/node_modules/systemjs/dist/s.min.js","9103f6c98fd026757963fd60ae2c81d6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







