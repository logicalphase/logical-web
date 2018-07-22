declare module '*.html' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: string;
  export default content;
}

declare module 'current_user' {
  const content: string;
  export default content;
}

declare module '@polymer/polymer/polymer-element' {
  // noinspection TsLint
  export const PolymerElement: any;
  export const html: any;
  export const utils: any;
}

declare module '@polymer/polymer/lib/utils/settings' {
  export const useShadow: boolean;
  export const useNativeCSSProperties: boolean;
  export const useNativeCustomElements: boolean;
  export const setRootPath: (path: string) => void;
  export const setSanitizeDOMValue: (newSanitizeDOMValue: any) => void;
  export const setPassiveTouchGestures: (usePassive: boolean) => void;
}

declare module WebComponents {
  export const ready: boolean;
  export const waitFor: (callback: () => Promise<any>) => void;
}

declare module '@polymer/polymer/lib/utils/async' {
  export const timeOut: boolean;
}

declare module '@polymer/app-layout/helpers/helpers' {
  export const scroll: any;
}

declare module '@polymer/polymer/lib/utils/render-status' {
  export const afterNextRender: (path: string) => void;
}

declare module '@polymer/polymer/lib/utils/debounce' {
  export const Debouncer: boolean;
}

declare module '@polymer/iron-collapse/iron-collapse' {
  export const toggle: boolean;
  export const show: boolean;
  export const hide: boolean;
}