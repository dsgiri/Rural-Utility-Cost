import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'granted');
    setShow(false);
    window.dispatchEvent(new Event('cookie_consent_updated'));
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'denied');
    setShow(false);
    window.dispatchEvent(new Event('cookie_consent_updated'));
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden animate-in slide-in-from-bottom-2 md:px-8">
      <div className="text-sm text-gray-700 dark:text-gray-300 max-w-4xl text-center sm:text-left">
        We use cookies to analyze site traffic, personalize content, and serve relevant advertising. 
        By clicking "Accept All", you consent to our use of cookies. 
        Read our <Link to="/cookie-policy" className="text-[#1a5f3f] dark:text-[#6ee7b7] hover:underline font-semibold">Cookie Policy</Link> to learn more.
      </div>
      <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
        <button 
          onClick={handleDecline} 
          className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5f3f]"
        >
          Decline
        </button>
        <button 
          onClick={handleAccept} 
          className="flex-1 sm:flex-none px-6 py-2 text-sm font-medium bg-[#1a5f3f] text-white rounded-lg shadow-sm hover:bg-[#154d32] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1a5f3f]"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
