(function() {
  'use strict';
  var polyfillsLoaded = !1,
    whenLoadedFns = [],
    allowUpgrades = !1,
    flushFn;
  function fireEvent() {
    window.WebComponents.ready = !0;
    document.dispatchEvent(new CustomEvent('WebComponentsReady', { bubbles: !0 }));
  }
  function batchCustomElements() {
    if (window.customElements && customElements.polyfillWrapFlushCallback) {
      customElements.polyfillWrapFlushCallback(function(flushCallback) {
        flushFn = flushCallback;
        if (allowUpgrades) {
          flushFn();
        }
      });
    }
  }
  function asyncReady() {
    batchCustomElements();
    ready();
  }
  function ready() {
    if (window.HTMLTemplateElement && HTMLTemplateElement.bootstrap) {
      HTMLTemplateElement.bootstrap(window.document);
    }
    polyfillsLoaded = !0;
    runWhenLoadedFns().then(fireEvent);
  }
  function runWhenLoadedFns() {
    allowUpgrades = !1;
    var fnsMap = whenLoadedFns.map(function(fn) {
      return fn instanceof Function ? fn() : fn;
    });
    whenLoadedFns = [];
    return Promise.all(fnsMap)
      .then(function() {
        allowUpgrades = !0;
        flushFn && flushFn();
      })
      .catch(function(err) {
        console.error(err);
      });
  }
  window.WebComponents = window.WebComponents || {};
  window.WebComponents.ready = window.WebComponents.ready || !1;
  window.WebComponents.waitFor =
    window.WebComponents.waitFor ||
    function(waitFn) {
      if (!waitFn) {
        return;
      }
      whenLoadedFns.push(waitFn);
      if (polyfillsLoaded) {
        runWhenLoadedFns();
      }
    };
  window.WebComponents._batchCustomElements = batchCustomElements;
  var name = 'webcomponents-loader.js',
    polyfills = [];
  if (
    !('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype) ||
    (window.ShadyDOM && window.ShadyDOM.force)
  ) {
    polyfills.push('sd');
  }
  if (!window.customElements || window.customElements.forcePolyfill) {
    polyfills.push('ce');
  }
  var needsTemplate = (function() {
    var t = document.createElement('template');
    if (!('content' in t)) {
      return !0;
    }
    if (!(t.content.cloneNode() instanceof DocumentFragment)) {
      return !0;
    }
    var t2 = document.createElement('template');
    t2.content.appendChild(document.createElement('div'));
    t.content.appendChild(t2);
    var clone = t.cloneNode(!0);
    return (
      0 === clone.content.childNodes.length ||
      0 === clone.content.firstChild.content.childNodes.length
    );
  })();
  if (!window.Promise || !Array.from || !window.URL || !window.Symbol || needsTemplate) {
    polyfills = ['sd-ce-pf'];
  }
  if (polyfills.length) {
    var url,
      polyfillFile = 'bundles/webcomponents-' + polyfills.join('-') + '.js';
    if (window.WebComponents.root) {
      url = window.WebComponents.root + polyfillFile;
    } else {
      var script = document.querySelector('script[src*="' + name + '"]');
      url = script.src.replace(name, polyfillFile);
    }
    var newScript = document.createElement('script');
    newScript.src = url;
    if ('loading' === document.readyState) {
      newScript.setAttribute('onload', 'window.WebComponents._batchCustomElements()');
      document.write(newScript.outerHTML);
      document.addEventListener('DOMContentLoaded', ready);
    } else {
      newScript.addEventListener('load', function() {
        asyncReady();
      });
      newScript.addEventListener('error', function() {
        throw new Error('Could not load polyfill bundle' + url);
      });
      document.head.appendChild(newScript);
    }
  } else {
    if ('complete' === document.readyState) {
      polyfillsLoaded = !0;
      fireEvent();
    } else {
      window.addEventListener('load', ready);
      window.addEventListener('DOMContentLoaded', function() {
        window.removeEventListener('load', ready);
        ready();
      });
    }
  }
})();
