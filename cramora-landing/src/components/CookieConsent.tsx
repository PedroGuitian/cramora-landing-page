'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setAccepted(false);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#191545] text-white rounded-2xl shadow-lg px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 max-w-3xl w-[90%] z-50">
      <p className="text-sm text-gray-100 text-center md:text-left">
        We use cookies to improve your experience and analyze website traffic. 
        By clicking “Accept,” you agree to our{' '}
        <a href="/privacy" className="underline text-[#493DC6] hover:text-[#6658f0]">
          Privacy Policy
        </a>.
      </p>
      <Button
        onClick={handleAccept}
        className="bg-[#493DC6] hover:bg-[#3b34a0] text-white text-sm rounded-full px-5 py-2 font-medium"
      >
        Accept
      </Button>
    </div>
  );
}
