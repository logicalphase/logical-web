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

var precacheConfig = [["/dist/chunk-007220a4.js","0a4daaeb58d572c32f7b3021b355bf7a"],["/dist/chunk-0bbe6f22.js","c381f0dae8b9c3a66d974c0633ccddeb"],["/dist/chunk-18111541.js","ee7022282861cd02f9d4c85d8e912692"],["/dist/chunk-33bd46eb.js","031b89de124ae00b019a6437c5f31f22"],["/dist/chunk-3a2a2656.js","ec5cad4c5698b15fb2324ca14e2708c1"],["/dist/chunk-3f849c92.js","eef142c2fdb114a4b2c3aca22ef0dd23"],["/dist/chunk-476db248.js","d1bbc260fa2a72aaa1938a159d72cf7b"],["/dist/chunk-4f5ab6bc.js","7cbfbfbb932caed4657611d7884da175"],["/dist/chunk-5658eb72.js","5ea586395924efbe216ea5ca3d8890e0"],["/dist/chunk-643581ae.js","5e8904d43d59af4851422b7bc870084e"],["/dist/chunk-6a0cf1e4.js","9fafb919a1143eb5a4b7535aa24c2cd5"],["/dist/chunk-95978a6d.js","2986df7c41e6372fd0d6bb6c0ae37be5"],["/dist/chunk-97aa072c.js","0e779f7e4206bb14e4353587d0e3fefa"],["/dist/chunk-b2b5b2c1.js","bc83c4bf282a0a3093e857d71ac9686d"],["/dist/chunk-bb05b55f.js","fd1ae8d28c8765a912fbb143051d31cd"],["/dist/chunk-c1e138d8.js","b55ae6c85d384944d63ab66bb5a637a7"],["/dist/chunk-c612737b.js","712c5ca3e5aa7fbfff706a0b3ccc5ab7"],["/dist/chunk-c9982ad5.js","bbae58b023342e066e9a9f9074528e22"],["/dist/chunk-cbb439af.js","15ed26d491aee9f6034db6765c8f2dd0"],["/dist/chunk-dd32a5b3.js","85737f2db94acc90ef0857f37c202e75"],["/dist/chunk-fc240190.js","33f20e7da2e3e17ba7881d2857a995e8"],["/dist/ts-app.js","b0b65b7a8c33b0996df4f20fafd4225b"],["/dist_nomodule/chunk-08e25362.js","2e36d9b06a88a2ec49c25fb9c3e5e6d8"],["/dist_nomodule/chunk-0fdeaf2b.js","cc7707953951a45faa9b41667fe72a27"],["/dist_nomodule/chunk-11b8fce7.js","5e9d47475fedac20d964f1f077ef3f7b"],["/dist_nomodule/chunk-23940dc4.js","9094ba75fc4171682213290c8aa8a36a"],["/dist_nomodule/chunk-2956f1de.js","61939bee766c707ebbfdfccdd36c4406"],["/dist_nomodule/chunk-306d8e5a.js","f99d59f2192a34f4833d2f7cbde62795"],["/dist_nomodule/chunk-42c75aaf.js","da32ef2e53bac19914cb05cf461726c5"],["/dist_nomodule/chunk-4831414a.js","bd8437547e061b1ed3b43eb477d188ff"],["/dist_nomodule/chunk-4e4489d7.js","4659ba90cccc82498ad781e95014ef18"],["/dist_nomodule/chunk-85f122d2.js","a1fa197d8586601697ab5d8ecb4e995e"],["/dist_nomodule/chunk-8798df27.js","16768308d9de2f7ac32e687c27f1804c"],["/dist_nomodule/chunk-90118a54.js","3cd014d3a19637cdc1a7c770368b6260"],["/dist_nomodule/chunk-ad6dfd6e.js","711f7c561cba642bf7082f9fbda9f1ec"],["/dist_nomodule/chunk-b4dec4e6.js","7fc60ffd109a0a694b901b9ed3a27d20"],["/dist_nomodule/chunk-bc17b81e.js","bec7283712e1e08c5a434f6e90838012"],["/dist_nomodule/chunk-c77c38fe.js","e1d7dbc9366c299023d005db059b34a0"],["/dist_nomodule/chunk-ca3769ba.js","ab57b8c8b770f703721d24dfbcb62d74"],["/dist_nomodule/chunk-cb81843c.js","1b41543c0f488e31596cfbb7ea53f644"],["/dist_nomodule/chunk-cd2831fd.js","04798887b16e9130916413593265088e"],["/dist_nomodule/chunk-d3adb5f9.js","fe57b8d94d85013afcb3c8253d082f85"],["/dist_nomodule/chunk-d7d7f969.js","cbf201dc1d482f4416c313066033c523"],["/dist_nomodule/ts-app.js","ba9fb2092472a1da05fb01f5e4e13bb4"],["/images/content/gdg-logo.png","f4868a0b33af36688b077ffb87bed478"],["/images/content/lighthouse-icon-128.png","04c44b9d142eac6d29347fa3bb7442d2"],["/images/content/main-ts-bot-110x240.png","10890da3873bf3d4002b0fa6e8f8f9ee"],["/images/favicon.png","3a7a208bb8f9b793d4851c1798e8e1da"],["/images/hyperpress-logo-254x46.png","85f6dacdfb313aa62abbd0fa17c1c5c5"],["/images/manifest/icon-144x144.png","cd931f96a5ef824bf0bcf578537717b0"],["/images/manifest/icon-192x192.png","d45da5ec6f0fffb4545e1009ef4e8000"],["/images/manifest/icon-48x48.png","c5c1dedf8e119cfa63c0f7ae2437a450"],["/images/manifest/icon-512x512.png","c2ccea77ea937b92cfe14d44b8418346"],["/images/manifest/icon-72x72.png","0ef149bd8ad5db85d668a8a1538f35ea"],["/images/manifest/icon-96x96.png","c6defaf2d15ac9f8ce1ee71c21888a69"],["/index.html","68c4175649c51e9d0f200ca99c0871ab"],["/node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-ce.js","16a6e231db0f767f82644d8cfa072ba0"],["/node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce-pf.js","fd3b6605f07e1064b91fe11db4b62cc3"],["/node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js","4a6d6a659c67d2ec5eeff15cf12566d6"],["/node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd.js","47d6162abb84f5f98b5913a78a6d40b4"],["/node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js","ab073ba059d1e990f93247eacbc4fba4"],["/node_modules/@webcomponents/webcomponentsjs/entrypoints/custom-elements-es5-adapter-index.js","5652c8f83533d62943792a7fe7a2e581"],["/node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-bundle-index.js","8dd62a28e52d133ef1ecf044bc51f109"],["/node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-ce-index.js","0867f0cb4caf5081f1e85da13c24528a"],["/node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-sd-ce-index.js","5d9cd4fb5d341a0e2890edaa2cc8e226"],["/node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-sd-ce-pf-index.js","905226b876defd9d0c1444d353a4c4c5"],["/node_modules/@webcomponents/webcomponentsjs/entrypoints/webcomponents-sd-index.js","d4e3a4413d567733a71057462763e36f"],["/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js","e4803801395c2d2dce6462bf75808b3a"],["/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js","e044a63e034bf10304dad73138b8c74b"],["/node_modules/regenerator-runtime/runtime.js","49e32bd1acc04abda5dadef037ee16f4"],["/node_modules/systemjs/dist/s.min.js","9103f6c98fd026757963fd60ae2c81d6"]];
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







