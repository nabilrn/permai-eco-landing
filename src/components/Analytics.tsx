import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  GA_TRACKING_ID,
  GTM_ID,
  FB_PIXEL_ID,
  HOTJAR_ID,
  HOTJAR_VERSION,
  CLARITY_ID,
  pageview,
  fbPixel,
} from "@/lib/analytics";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 4
    if (GA_TRACKING_ID) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.gtag =
          window.gtag ||
          function () {
            (window.gtag as any).q = (window.gtag as any).q || [];
            (window.gtag as any).q.push(arguments);
          };
        window.gtag("js", new Date());
        window.gtag("config", GA_TRACKING_ID, {
          page_path: window.location.pathname,
          custom_map: { custom_parameter: "bank_sampah" },
        });
      };
    }

    // Google Tag Manager
    if (GTM_ID) {
      const script = document.createElement("script");
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `;
      document.head.appendChild(script);

      // GTM NoScript fallback
      const noscript = document.createElement("noscript");
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.appendChild(noscript);
    }

    // Facebook Pixel
    if (FB_PIXEL_ID) {
      const script = document.createElement("script");
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${FB_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);

      // Facebook Pixel NoScript fallback
      const noscript = document.createElement("noscript");
      noscript.innerHTML = `<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1" />`;
      document.body.appendChild(noscript);
    }

    // Hotjar
    if (HOTJAR_ID) {
      const script = document.createElement("script");
      script.innerHTML = `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${HOTJAR_ID},hjsv:${HOTJAR_VERSION}};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `;
      document.head.appendChild(script);
    }

    // Microsoft Clarity
    if (CLARITY_ID) {
      const script = document.createElement("script");
      script.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `;
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Remove scripts if component unmounts
      const scripts = document.querySelectorAll(
        'script[src*="googletagmanager"], script[src*="fbevents"], script[src*="hotjar"], script[src*="clarity"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  // Track page views on route change
  useEffect(() => {
    pageview(location.pathname);
    fbPixel.pageView();
  }, [location]);

  return null;
};

export default Analytics;
