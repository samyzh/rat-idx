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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "14522c125758ee090a72caa7d661b9a0"
  },
  {
    "url": "assets/css/0.styles.dedca58d.css",
    "revision": "8c1dd537fe692cd19a1aa366617e45e4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7fca37d7.js",
    "revision": "c6ae4983d4fc933bc584cf785b4e4f22"
  },
  {
    "url": "assets/js/11.e97444b7.js",
    "revision": "eb5dd1fcfd80dd2cec43a7217a2257dc"
  },
  {
    "url": "assets/js/12.3e9afb29.js",
    "revision": "e93fcb26122d12c1c94daa339b37b511"
  },
  {
    "url": "assets/js/2.85f97599.js",
    "revision": "669309e5da67e2df6f13e127b8a830c5"
  },
  {
    "url": "assets/js/3.eb76e149.js",
    "revision": "1ea19f729e0540639a33563369bb4d29"
  },
  {
    "url": "assets/js/4.1f24e00e.js",
    "revision": "1ea4a1b86a4d31bd17cfe40f6c1bde83"
  },
  {
    "url": "assets/js/5.c191f553.js",
    "revision": "d15a219e5f73c03e210bb91b0bbaf416"
  },
  {
    "url": "assets/js/6.4373a844.js",
    "revision": "421ca4533a48c38a5505deb84f3deb69"
  },
  {
    "url": "assets/js/7.2625ac1c.js",
    "revision": "31db865f509dd75917bc4eb1ef345098"
  },
  {
    "url": "assets/js/8.bf0728ba.js",
    "revision": "5872e66916898a1189b0ffa90f7e5f78"
  },
  {
    "url": "assets/js/9.8235998f.js",
    "revision": "f409001f2e641067cdfd14163aa7c7a3"
  },
  {
    "url": "assets/js/app.136cac37.js",
    "revision": "38c9a7931d39bee610b496ae166efa84"
  },
  {
    "url": "icons/128.png",
    "revision": "f19ba5804780ac3664bdd6ce9c50724f"
  },
  {
    "url": "icons/144.png",
    "revision": "583406f92a52b907016ba5e4b715b9b4"
  },
  {
    "url": "icons/192.png",
    "revision": "840c0142f4181b55f5e83a290b7e8f92"
  },
  {
    "url": "icons/256.png",
    "revision": "7e5069117ce620824246c393bdb7b2c3"
  },
  {
    "url": "icons/512.png",
    "revision": "c8dcc00abb209dfef10c0d04b7af53e1"
  },
  {
    "url": "img/bg.jpg",
    "revision": "eeb52a7402b93340c8370fedd1e9e745"
  },
  {
    "url": "img/devops.png",
    "revision": "fe90fdbe27069d08f99b61722748ade5"
  },
  {
    "url": "img/logo.png",
    "revision": "afbe38be16ddbe51c2b78cf42a7c4be3"
  },
  {
    "url": "img/more.png",
    "revision": "20bc993bdaa9538405f85ac5fcefdf1d"
  },
  {
    "url": "img/other.png",
    "revision": "cd4a5ecbd9cc330e7fdcb9bdc3e92796"
  },
  {
    "url": "img/python.png",
    "revision": "fd961de471b586d9049547322f8b1744"
  },
  {
    "url": "img/ui.png",
    "revision": "1c26d51f2ef9a17b8b36f55cb04be642"
  },
  {
    "url": "img/web.png",
    "revision": "c1718a647a4b41978bc8af6b0a3f41da"
  },
  {
    "url": "img/wechat-qr.png",
    "revision": "f13102667ce7ea55904c3035d2ef90de"
  },
  {
    "url": "index.html",
    "revision": "23ba215867c313b3c1ba1cb291b3ee9f"
  },
  {
    "url": "invest/index.html",
    "revision": "3359ccfe66d12dd2fd8adb7bb1bc0151"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "044cbfce5b311dd2f595d20b4a1cfd76"
  },
  {
    "url": "js/readmore.js",
    "revision": "5bdb40d4a540b98857dd7bf6c8d3ca76"
  },
  {
    "url": "skill/index.html",
    "revision": "87c0b453d4e01a08a011481f2e9b8d1b"
  },
  {
    "url": "summ/index.html",
    "revision": "8de38e0dac6be6fa36c226d3ae651be4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
