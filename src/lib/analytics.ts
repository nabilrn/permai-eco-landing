const readEnvString = (key: string): string => {
  const value = (import.meta.env as Record<string, unknown>)[key];
  return typeof value === "string" ? value.trim() : "";
};

// Google Analytics 4 Configuration
export const GA_TRACKING_ID = readEnvString("VITE_GA_TRACKING_ID");

// Google Tag Manager Configuration
export const GTM_ID = readEnvString("VITE_GTM_ID");

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Custom events for Bank Sampah
export const trackButtonClick = (buttonName: string) => {
  event({
    action: "click",
    category: "Button",
    label: buttonName,
  });
};

export const trackPageView = (pageName: string) => {
  event({
    action: "page_view",
    category: "Page",
    label: pageName,
  });
};

export const trackContactForm = (formType: string) => {
  event({
    action: "form_submit",
    category: "Contact",
    label: formType,
  });
};

export const trackServiceClick = (serviceName: string) => {
  event({
    action: "service_click",
    category: "Service",
    label: serviceName,
  });
};

export const trackSocialMediaClick = (platform: string) => {
  event({
    action: "social_click",
    category: "Social Media",
    label: platform,
  });
};

// Facebook Pixel tracking
export const FB_PIXEL_ID = readEnvString("VITE_FB_PIXEL_ID");

export const fbPixel = {
  pageView: () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  },
  track: (event: string, options?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", event, options);
    }
  },
};

// Hotjar tracking
export const HOTJAR_ID = readEnvString("VITE_HOTJAR_ID");
export const HOTJAR_VERSION = 6;

// Microsoft Clarity tracking
export const CLARITY_ID = readEnvString("VITE_CLARITY_ID");

// Declare global types for tracking scripts
type AnalyticsFunction = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: AnalyticsFunction;
    fbq?: AnalyticsFunction;
    hj?: AnalyticsFunction;
    clarity?: AnalyticsFunction;
  }
}
