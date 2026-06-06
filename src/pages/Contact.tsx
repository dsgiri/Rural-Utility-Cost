import React, { useEffect, useRef } from 'react';
import { SEO } from '../components/SEO';
import { Mail } from 'lucide-react';

export default function Contact() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Obfuscate in source code to prevent static scraping
    const u = 'remindtag';
    const d = 'gmail.com';
    const em = `${u}@${d}`;

    const draw = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const isHighContrast = document.documentElement.classList.contains('high-contrast');
      
      let textColor = isDark ? '#6ee7b7' : '#1a5f3f';
      if (isHighContrast) {
        textColor = isDark ? '#ffffff' : '#000000';
      }

      // Safe fallback system fonts
      const fontSize = 24; 
      ctx.font = `bold ${fontSize}px system-ui, -apple-system, sans-serif`;
      
      const metrics = ctx.measureText(em);
      canvas.width = metrics.width + 4;
      canvas.height = fontSize + 10;
      
      // Re-set font and color after canvas resize
      ctx.font = `bold ${fontSize}px system-ui, -apple-system, sans-serif`;
      ctx.fillStyle = textColor;
      ctx.textBaseline = 'top';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillText(em, 2, 4);
    };

    draw();
    
    // Listen for theme / contrast changes to update the canvas text color
    const observer = new MutationObserver(() => draw());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const handleEmailClick = () => {
    const u = 'remindtag';
    const d = 'gmail.com';
    window.location.href = `mailto:${u}@${d}`;
  };

  return (
    <div className="p-4 sm:p-8 w-full max-w-4xl mx-auto flex-grow flex flex-col mt-4 mb-16">
      <SEO 
        title="Contact Us | Rural Utility Cost" 
        description="Contact the team at Rural Utility Cost with questions, feedback, or legal inquiries." 
      />
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 sm:p-12 text-center max-w-2xl mx-auto">
        <div className="bg-[#1a5f3f]/10 dark:bg-[#1a5f3f] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-[#1a5f3f] dark:text-[#6ee7b7]" />
        </div>
        
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          Have a question about our calculators, want to report an issue, or need clarification on our privacy policy? Reach out directly.
        </p>
        
        <div 
          className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-xl inline-block max-w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5f3f]" 
          onClick={handleEmailClick} 
          title="Click to email"
          tabIndex={0}
          onKeyDown={(e) => { if(e.key === 'Enter') handleEmailClick(); }}
        >
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">General Inquiries & Legal</p>
          <div className="flex justify-center items-center opacity-90 group-hover:opacity-100 transition-opacity">
            <canvas ref={canvasRef} className="max-w-full" style={{ height: '34px' }} aria-label="Email address image" />
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>Please note: We cannot provide specific cost estimates or engineering advice for your property over email. All calculations should be verified with local professionals.</p>
        </div>
      </div>
    </div>
  );
}
