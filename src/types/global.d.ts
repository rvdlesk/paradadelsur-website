// global.d.ts
export {};

declare global {
  interface Window {
    onCaptchaVerified: () => void;
  }
}
