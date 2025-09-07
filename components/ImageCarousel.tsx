import React, { useState } from 'react';
import pic1 from '@/assets/pic1.png';
import pic2 from '@/assets/pic2.jpeg';
import pic3 from '@/assets/pic3.png';
import pic4 from '@/assets/pic4.png';
import pic5 from '@/assets/pic5.png';
import pic6 from '@/assets/pic6.jpg';
import pic7 from '@/assets/pic7.jpg';
import pic8 from '@/assets/pic8.png';

const ImageCarousel = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate images for infinite loop effect
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div 
      className="relative w-screen"
      style={{
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        margin: 0,
        padding: 0
      }}
    >
      {/* Marquee container - true full screen width */}
      <div 
        className="relative h-80 overflow-hidden mb-32"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ margin: 0, padding: 0 }}
      >
        <div 
          className={`flex gap-6 h-full ${
            isPaused ? 'pause-animation' : 'animate-marquee'
          }`}
          style={{
            width: 'fit-content',
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 relative"
              style={{
                width: '300px',
                height: '320px'
              }}
            >
              <img
                src={image}
                alt={`Mold detection sample ${(index % images.length) + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-lg"></div>
            </div>
          ))}
        </div>
        
        {/* Large bottom fade for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10"></div>
        
        {/* Pause indicator */}
        {isPaused && (
          <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full z-20">
            <span className="text-xs text-foreground">Paused</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;