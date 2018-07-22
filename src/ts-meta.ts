export const updateMetadata = ({title, description, url, image}) => {
    if (title) {
      document.title = title;
      _setMeta('property', 'og:title', document.title);
      _setMeta('property', 'twitter:title', document.title);
    }
  
    if (description) {
      _setMeta('property', 'og:description', description);
      _setMeta('property', 'twitter:description', description);
    }
  
    if (image) {
      _setMeta('property', 'og:image', image);
      _setMeta('property', 'twitter:image:src', image);
    }
  
    url = url || document.location.href;
    _setMeta('property', 'og:url', url);
    _setMeta('property', 'twitter:url', url);
  }
  
  function _setMeta(attrName, attrValue, content) {
    let element = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content || '');
  }