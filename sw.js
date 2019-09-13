/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "BLOG-PWA"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "greenkeeper.json",
    "revision": "5c92a8f82dcb8b83dcd6401414dc0ce6"
  },
  {
    "url": "gulpfile.js",
    "revision": "06dbe7a04aee4ea90c7f0e0ce50eb906"
  },
  {
    "url": "index.html",
    "revision": "5a4c656182adabde71e50c9664038bb5"
  },
  {
    "url": "manifest.json",
    "revision": "d233514302c135e235ca79bce8b21eb8"
  },
  {
    "url": "package.json",
    "revision": "7fa4001e6dd05302f62df41770f5b630"
  },
  {
    "url": "page-layout.html",
    "revision": "dbd79981b9089a212c166b1f8ca7c28b"
  },
  {
    "url": "polyfill-dynamicimport.js",
    "revision": "7f3a85e617234fb49c41c09aec121f26"
  },
  {
    "url": "polymer.json",
    "revision": "59f078895fc41c568015bfc9a3b0cdc0"
  },
  {
    "url": "public/dist/app-d735fd76.js",
    "revision": "7f2fe83fb2950328a652db80e5f6e49f"
  },
  {
    "url": "public/dist/articles-0798a5c4.js",
    "revision": "891120015314b4767a8bb302123be0ea"
  },
  {
    "url": "public/dist/page-view-element-62d44e51.js",
    "revision": "dc0b750dbc04744e7bdee058c0d1d538"
  },
  {
    "url": "public/dist/store-af27fd97.js",
    "revision": "c4c4fd961a3e400645b35a21b1ea5a8a"
  },
  {
    "url": "public/dist/ts-app.js",
    "revision": "34c6b6639422fafd41436adafb18ee8b"
  },
  {
    "url": "public/dist/ts-article-03c30c84.js",
    "revision": "2aac3d49bbcd8e3f36e3976e866e6ccf"
  },
  {
    "url": "public/dist/ts-blog-1231ba68.js",
    "revision": "1d9c4295b216903177134d06236b7483"
  },
  {
    "url": "public/dist/ts-care-8c05cfca.js",
    "revision": "ca4d9766846a43b6ad407120c5792266"
  },
  {
    "url": "public/dist/ts-contact-746fd606.js",
    "revision": "0debeb702998e77901c8cc67dffaa5a4"
  },
  {
    "url": "public/dist/ts-design-7ee635db.js",
    "revision": "59f7e091b39b525138f567f045bec9af"
  },
  {
    "url": "public/dist/ts-emergency-43f6f52c.js",
    "revision": "a986961847746221bd4a6f8826a0acdc"
  },
  {
    "url": "public/dist/ts-hosting-eb105141.js",
    "revision": "cd4ccdbb36304a21f9f0a91149787a89"
  },
  {
    "url": "public/dist/ts-icons-8a82b5d3.js",
    "revision": "7524387a402e9d87342717ad237f7c91"
  },
  {
    "url": "public/dist/ts-migrations-3233763b.js",
    "revision": "48d5b435c22e8be880addd0541cefdb9"
  },
  {
    "url": "public/dist/ts-pagespeed-f0690075.js",
    "revision": "81dba1426403c99b19e87a1f5ebf86d0"
  },
  {
    "url": "public/dist/ts-privacy-496483a6.js",
    "revision": "c312a29171236b683a6d2d7dd7711afe"
  },
  {
    "url": "public/dist/ts-security-f2e6e831.js",
    "revision": "0d87516b171fe233e28a332ff73ac8b9"
  },
  {
    "url": "public/dist/ts-sidebar-nav-07761c4e.js",
    "revision": "a48f30df5be7a478a4610f740c3729bb"
  },
  {
    "url": "public/dist/ts-style-button-830cc468.js",
    "revision": "d1c9a0dacddf20d3894a43bccb07cff2"
  },
  {
    "url": "public/dist/ts-style-card-9ce1e7a7.js",
    "revision": "073be5af646f25396ac18cf8e218433f"
  },
  {
    "url": "public/dist/ts-style-grid-4a47703f.js",
    "revision": "d1bd6906720bbba37c42b0e15c94cd23"
  },
  {
    "url": "public/dist/ts-style-shared-dc24ceb5.js",
    "revision": "0791b2843f44092479e7774e00d9b1c1"
  },
  {
    "url": "public/dist/ts-style-table-d505545f.js",
    "revision": "b58b5315001e0b25adec4cabb17ca30f"
  },
  {
    "url": "public/dist/ts-style-theme-2ed2f36f.js",
    "revision": "05ee42a0c64641d4676da8a021767cc0"
  },
  {
    "url": "public/dist/ts-view404-5d13c271.js",
    "revision": "7932cc8fda280cd2ae14a13831b5168d"
  },
  {
    "url": "push-manifest.json",
    "revision": "16e43ac6c49a94a7e92b98c1c88c4689"
  },
  {
    "url": "rollup.config.js",
    "revision": "97dc46c03c61622c5c528e10067314d8"
  },
  {
    "url": "server/build/es6-bundled/index.html",
    "revision": "bfd940ad2699c7910e26c8a4feb8711a"
  },
  {
    "url": "server/build/es6-bundled/manifest.json",
    "revision": "d233514302c135e235ca79bce8b21eb8"
  },
  {
    "url": "server/build/es6-bundled/push-manifest.json",
    "revision": "22e03322fc54078ba730a5e1fffbe101"
  },
  {
    "url": "server/build/es6-bundled/service-worker.js",
    "revision": "5e65d383d60264c8ddcdde498b978ca4"
  },
  {
    "url": "server/build/es6-bundled/src/components/ts-app.js",
    "revision": "4f59a912ab5e980806a5e6c15258f4fc"
  },
  {
    "url": "server/build/es6-bundled/src/components/ts-article.js",
    "revision": "41d1ae3f4577c9fde80761988b8e9629"
  },
  {
    "url": "server/build/es6-bundled/src/components/ts-blog.js",
    "revision": "d6bc39f8169287589a6ce0a5731b8123"
  },
  {
    "url": "server/build/es6-bundled/src/components/ts-care.js",
    "revision": "c2dfa9f020ba0c46fe3e4703cb018585"
  },
  {
    "url": "server/build/es6-bundled/src/components/ts-contact.js",
    "revision": "79f5763ec7aa1534d54fe9976656a74b"
  },
  {
    "url": "server/build/es6-bundled/src/components/ts-design.js",
    "revision": "65b1ac1ac0b775b817078e185f0b06d5"
  },
  {
    "url": "server/build/es6-bundled/src/components/ts-emergency.js",
    "revision": "c6b0fc719c14deaa5920bf8372fc2404"
  },
  {
    "url": "server/build/es6-bundled/src/components/ts-hosting.js",
    "revision": "6ca62ab4329f14031b03d5b1639a5460"
  },
  {
    "url": "server/build/es6-bundled/src/components/ts-migrations.js",
    "revision": "ac9d97a85fce39067fd1ad9f98217a16"
  },
  {
    "url": "server/build/es6-bundled/src/components/ts-pagespeed.js",
    "revision": "efcfd18e47365be48ca0d2929d56d955"
  },
  {
    "url": "server/build/es6-bundled/src/components/ts-privacy.js",
    "revision": "cebe93ea608ce82b8b7ce7b1419670f4"
  },
  {
    "url": "server/build/es6-bundled/src/components/ts-security.js",
    "revision": "c4f83d3ce27d59a62f952e72e016ee57"
  },
  {
    "url": "server/build/es6-bundled/src/components/ts-view404.js",
    "revision": "4565a5ee04d09d5b05f684958b196abe"
  },
  {
    "url": "server/build/es6-bundled/webcomponents-loader.js",
    "revision": "8142f46326d9bc9afb91d194c22d3ff2"
  },
  {
    "url": "server/build/esm-bundled/index.html",
    "revision": "2abe5270aee0a2973a490024c7856301"
  },
  {
    "url": "server/build/esm-bundled/manifest.json",
    "revision": "d233514302c135e235ca79bce8b21eb8"
  },
  {
    "url": "server/build/esm-bundled/push-manifest.json",
    "revision": "22e03322fc54078ba730a5e1fffbe101"
  },
  {
    "url": "server/build/esm-bundled/service-worker.js",
    "revision": "fa57180ab5d30121f58fbb52ffbbcf08"
  },
  {
    "url": "server/build/esm-bundled/src/components/ts-app.js",
    "revision": "84f9c18eef029f9edcd9c0fa623b2e20"
  },
  {
    "url": "server/build/esm-bundled/src/components/ts-article.js",
    "revision": "d3582b6c610fb8d342d25b7fe94787e5"
  },
  {
    "url": "server/build/esm-bundled/src/components/ts-blog.js",
    "revision": "b17c76ca783cc3a3cf8902d79f2bf331"
  },
  {
    "url": "server/build/esm-bundled/src/components/ts-care.js",
    "revision": "6b21111ff5c75868d2647bca174fd16f"
  },
  {
    "url": "server/build/esm-bundled/src/components/ts-contact.js",
    "revision": "b05676e4c92115215d1f034fc67cd9a1"
  },
  {
    "url": "server/build/esm-bundled/src/components/ts-design.js",
    "revision": "45091430d6a35f1839d3a0dc6f512222"
  },
  {
    "url": "server/build/esm-bundled/src/components/ts-emergency.js",
    "revision": "ac47ee41e70de58731bcf0303e02697d"
  },
  {
    "url": "server/build/esm-bundled/src/components/ts-hosting.js",
    "revision": "632678f7168e912b02d702bca560523d"
  },
  {
    "url": "server/build/esm-bundled/src/components/ts-migrations.js",
    "revision": "08fe1a570e1f978adf19355ebaca637c"
  },
  {
    "url": "server/build/esm-bundled/src/components/ts-pagespeed.js",
    "revision": "12c36a174e2b8a2803197e874ccb3c98"
  },
  {
    "url": "server/build/esm-bundled/src/components/ts-privacy.js",
    "revision": "29678c1e1cc25700fbac3a335f2b77dc"
  },
  {
    "url": "server/build/esm-bundled/src/components/ts-security.js",
    "revision": "337d59e80e1d416be4dd31b9fde75030"
  },
  {
    "url": "server/build/esm-bundled/src/components/ts-view404.js",
    "revision": "f42b45a914391af8259a59defe040381"
  },
  {
    "url": "server/build/esm-bundled/webcomponents-loader.js",
    "revision": "8142f46326d9bc9afb91d194c22d3ff2"
  },
  {
    "url": "server/build/polymer.json",
    "revision": "7350c1e7b470cee49f9e87cd5494872e"
  },
  {
    "url": "server/package-lock.json",
    "revision": "801fe5d71cbca8b5e491314073d47ecf"
  },
  {
    "url": "server/package.json",
    "revision": "fc5605f86dea0521f5ee5e4bd70f9f21"
  },
  {
    "url": "service-worker.js",
    "revision": "9f57a87170a2e0ce6de0cc110da9618f"
  },
  {
    "url": "src/actions/app.js",
    "revision": "5951289e833cfec5e192baba21c2a58a"
  },
  {
    "url": "src/actions/article.js",
    "revision": "87b963cf0ead2ed7bf9bc5480e3dec07"
  },
  {
    "url": "src/actions/articles.js",
    "revision": "bd52641348113e301b1f9b33ddb6fe77"
  },
  {
    "url": "src/components/config.js",
    "revision": "c43599846445533331ff45ab9c4cc185"
  },
  {
    "url": "src/components/page-view-element.js",
    "revision": "1f67ceecacef68a489c0721cf39e1c94"
  },
  {
    "url": "src/components/snack-bar.js",
    "revision": "500aebba86f26d400512936837b4138e"
  },
  {
    "url": "src/components/ts-app.js",
    "revision": "fdf7b5e36c4fbe5044f89345dde47713"
  },
  {
    "url": "src/components/ts-article.js",
    "revision": "8348e71c2f98f3d2e4ee9eadead7a6f2"
  },
  {
    "url": "src/components/ts-blog.js",
    "revision": "4182236d38329a9cdf5360be64f6932b"
  },
  {
    "url": "src/components/ts-care.js",
    "revision": "4a98727bb3132f5d231f1feba4e091f4"
  },
  {
    "url": "src/components/ts-contact.js",
    "revision": "8c190d33a8ed7fbedc8d04dcf0b85b5f"
  },
  {
    "url": "src/components/ts-design.js",
    "revision": "686c2d0b42a2e1a42f0eb7ab896b27ec"
  },
  {
    "url": "src/components/ts-emergency.js",
    "revision": "634ebc83e293af9f6e571ea0dea758b6"
  },
  {
    "url": "src/components/ts-home.js",
    "revision": "fec49ad95cab94c71a8a95e927f406b0"
  },
  {
    "url": "src/components/ts-hosting.js",
    "revision": "e2d1439e7ca34c72a9da5e3d6a12834c"
  },
  {
    "url": "src/components/ts-icons.js",
    "revision": "718f2677107ac4d53e320b5c641c3381"
  },
  {
    "url": "src/components/ts-image.js",
    "revision": "8eb47d5c97ef8447798ec9b2024e9c28"
  },
  {
    "url": "src/components/ts-item.js",
    "revision": "7d5a8e9c812ff6ff8f3526bd6dab1561"
  },
  {
    "url": "src/components/ts-migrations.js",
    "revision": "d428e6aa441dfbc4a513a50dda800266"
  },
  {
    "url": "src/components/ts-offline.js",
    "revision": "9a73e81c3c8cec29f2f402db8a36c9e1"
  },
  {
    "url": "src/components/ts-pagespeed.js",
    "revision": "84f3a303ff142effd2d036f118179876"
  },
  {
    "url": "src/components/ts-privacy.js",
    "revision": "e527affe8dd78f8949f0198f03b1f873"
  },
  {
    "url": "src/components/ts-security.js",
    "revision": "05a1d0183059b9e70cff43b7571ca072"
  },
  {
    "url": "src/components/ts-sidebar-nav.js",
    "revision": "1830ffd933af32f0ba0ea580a8a46be5"
  },
  {
    "url": "src/components/ts-social.js",
    "revision": "f6c5dcdc635814d0ed343a345e623fb5"
  },
  {
    "url": "src/components/ts-style-button.js",
    "revision": "e17d8147cebe444cc44f86c41a470eb8"
  },
  {
    "url": "src/components/ts-style-card.js",
    "revision": "1ca269b17de9b3dbf2857abf38c2e7e4"
  },
  {
    "url": "src/components/ts-style-checkbox.js",
    "revision": "5af343b255011cf9ba8d8c27958b19db"
  },
  {
    "url": "src/components/ts-style-elevation.js",
    "revision": "adad8bf219c6acd6c09830416367a5ff"
  },
  {
    "url": "src/components/ts-style-form.js",
    "revision": "bd54f4e53ca4bc224d0ae82063815e81"
  },
  {
    "url": "src/components/ts-style-grid.js",
    "revision": "69cdc2005dbd0343b1bfde923dc89d61"
  },
  {
    "url": "src/components/ts-style-homepage.js",
    "revision": "6ed375a450581d6c3bfc0861990527ec"
  },
  {
    "url": "src/components/ts-style-input.js",
    "revision": "ae535983aac38a83a324facc06627493"
  },
  {
    "url": "src/components/ts-style-layout.js",
    "revision": "744b7f5457901807dd85c9420fb6070b"
  },
  {
    "url": "src/components/ts-style-products.js",
    "revision": "09f2ae17c2173b29e38638e61410084e"
  },
  {
    "url": "src/components/ts-style-select.js",
    "revision": "acb896ebf4bf7d6867b50ef24dfc0148"
  },
  {
    "url": "src/components/ts-style-shared.js",
    "revision": "68b30fc7286b984585729d019bdeb947"
  },
  {
    "url": "src/components/ts-style-table.js",
    "revision": "74a4daf3cc9ca81249aa40e837e1d252"
  },
  {
    "url": "src/components/ts-style-textarea.js",
    "revision": "00418d184d0a3bc9b86c809b7e417e85"
  },
  {
    "url": "src/components/ts-style-theme.js",
    "revision": "4e2ae2aa4f53877082f235aa49561387"
  },
  {
    "url": "src/components/ts-style-typography.js",
    "revision": "5c8f6f6ab76021457a5df3d85393ef4b"
  },
  {
    "url": "src/components/ts-style-wp.js",
    "revision": "c68c7cf20e711f8f7c1b2ac122e7eaf3"
  },
  {
    "url": "src/components/ts-view404.js",
    "revision": "01f1d61c40a47a53a6c1562913f2baf3"
  },
  {
    "url": "src/reducers/app.js",
    "revision": "8092b67d75ba10f2ffdc7f933022fcd9"
  },
  {
    "url": "src/reducers/article.js",
    "revision": "4334c2cfc82f9370a6a787f665ad5951"
  },
  {
    "url": "src/reducers/articles.js",
    "revision": "ee4dc398254e196ee47d40996b319075"
  },
  {
    "url": "src/store.js",
    "revision": "dd97c2ac7611d7d50c4fe48ca7e53d6b"
  },
  {
    "url": "src/templates/contact.html",
    "revision": "4606acd30a65dd803a719da26e1b17bd"
  },
  {
    "url": "test/integration/router.js",
    "revision": "4478dd0c692e4851bc55fe61f6506c30"
  },
  {
    "url": "test/integration/screenshots-baseline/regenerate.js",
    "revision": "54c5830efefa4f9f4ab49b7778d6d060"
  },
  {
    "url": "test/integration/visual.js",
    "revision": "8ac2f6a63b1e4aeb4548fbb12ec1c5a7"
  },
  {
    "url": "test/unit/counter-element.html",
    "revision": "5d0b455a47bdd42d7cab5cc01f55c1c8"
  },
  {
    "url": "test/unit/index.html",
    "revision": "c3c4e7752ad9f58aee0fdb9db37172d7"
  },
  {
    "url": "test/unit/views-a11y.html",
    "revision": "be6288e192db3bc5d12b3e90fa80e424"
  },
  {
    "url": "wct.conf.json",
    "revision": "5f81666ee9eca44dfa82b74330e3ec54"
  },
  {
    "url": "webcomponents-loader.js",
    "revision": "8ea22242dc9d91dffe7ed599fcad063a"
  },
  {
    "url": "workbox.config.js",
    "revision": "c9ad13c3b6d0d7ee682450c32eb243d8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "ignoreURLParametersMatching": [/^utm_/]
});

workbox.precaching.cleanupOutdatedCaches();
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  whitelist: [/^(?!.*\.html).*/],
  blacklist: [/xml/],
});

workbox.routing.registerRoute(/.*\?static\=true/, new workbox.strategies.NetworkOnly(), 'GET');
workbox.routing.registerRoute(/\.(?:js|css)$/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"static-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"img-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:json)$/, new workbox.strategies.NetworkFirst({ "cacheName":"data-cache","networkTimeoutSeconds":3, plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/storage.googleapis\.com/, new workbox.strategies.CacheFirst({ "cacheName":"cdn-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');

workbox.googleAnalytics.initialize({});
