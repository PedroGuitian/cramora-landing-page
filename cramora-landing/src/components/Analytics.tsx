'use client';
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Analytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "true") setHasConsent(true);
  }, []);

  return (
    <>
      {/* Load GA and Consent Mode immediately */}
      <Script
        id="google-consent-mode"
        strategy="afterInteractive"
      >
        {`
          // Initialize default (no consent) state
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'granted'
          });

          // Initialize GA4
          gtag('js', new Date());
          gtag('config', 'G-44MH7FHFWE', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-44MH7FHFWE"
        strategy="afterInteractive"
      />

      {/* When consent is accepted, update GA settings */}
      {hasConsent && (
        <Script id="google-consent-update" strategy="afterInteractive">
          {`
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'ad_user_data': 'granted',
              'ad_personalization': 'granted',
              'analytics_storage': 'granted'
            });
          `}
        </Script>
      )}
    </>
  );
}
