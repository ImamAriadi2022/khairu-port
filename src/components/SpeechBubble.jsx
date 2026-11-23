import React from 'react';

export default function SpeechBubble({
  children,
  tail = 'bottom-left', // 'bottom-left', 'bottom-right', 'left', 'right', 'none'
  variant = 'normal', // 'normal', 'shout', 'whisper', 'yellow'
  className = '',
}) {
  const getTailClasses = () => {
    switch (tail) {
      case 'bottom-left':
        return 'speech-bubble-bottom';
      case 'left':
        return 'speech-bubble-left';
      case 'none':
      default:
        return '';
    }
  };

  const variantBg = {
    normal: 'bg-white text-black',
    shout: 'bg-manga-yellow text-black font-bold',
    whisper: 'bg-gray-100 text-gray-800 border-dashed',
    yellow: 'bg-manga-yellow text-black',
  }[variant] || 'bg-white text-black';

  return (
    <div
      className={`relative inline-block border-3 border-black p-4 rounded-xl shadow-[4px_4px_0px_#0A0A0A] ${variantBg} ${getTailClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
