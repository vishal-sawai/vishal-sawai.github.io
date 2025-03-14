import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface ImageSliderProps {
  className?: string;
  images?: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  className,
  images = [],
  autoPlay = false,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullView, setIsFullView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Use provided images or fall back to defaults
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sliderImages = images.length > 0 ? images : [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  ];

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  }, [sliderImages.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  }, [sliderImages.length]);

  // Auto play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoPlay && !isFullView) {
      interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, autoPlayInterval, currentIndex, isFullView, nextSlide]);

  // Preload images for smoother transitions
  useEffect(() => {
    const preloadImages = () => {
      setIsLoading(true);
      const img = new Image();
      img.src = sliderImages[currentIndex];
      img.onload = () => setIsLoading(false);
    };

    preloadImages();
  }, [currentIndex, sliderImages]);

  // Keyboard navigation in fullscreen mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullView) return;

      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'Escape') {
        setIsFullView(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullView, prevSlide, nextSlide]);

  const toggleFullView = () => {
    setIsFullView(!isFullView);
  };

  // Handle navigation buttons interaction
  const NavButton = ({ direction, onClick }: { direction: 'left' | 'right', onClick: () => void }) => (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "absolute top-1/2 -translate-y-1/2",
        direction === 'left' ? "left-2 sm:left-4" : "right-2 sm:right-4",
        "rounded-full p-2 bg-black/30 backdrop-blur-sm border-white/20 text-white",
        "hover:bg-black/50 hover:scale-110 transition-all duration-200",
        "focus:ring-2 focus:ring-white focus:ring-offset-0",
        isFullView ? "opacity-70 hover:opacity-100" : "opacity-0 group-hover:opacity-70 hover:opacity-100"
      )}
      onClick={onClick}
      aria-label={direction === 'left' ? 'Previous image' : 'Next image'}
    >
      {direction === 'left' ? (
        <ChevronLeft className="h-5 w-5" />
      ) : (
        <ChevronRight className="h-5 w-5" />
      )}
    </Button>
  );

  if (isFullView) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center p-4 sm:p-8 transition-all duration-300 ease-in-out">
        <div className="bg-white/10 rounded-lg w-full max-w-5xl relative overflow-hidden shadow-2xl border-white/20">
          <div className="absolute top-2 right-8 flex space-x-2 z-20">
            <Button
              variant="outline"
              size="icon"
              className="text-white border-white/20 bg-black/10 hover:bg-white/20 hover:scale-110 transition-all duration-200"
              onClick={toggleFullView}
              aria-label="Close fullscreen view"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="p-4 sm:p-8 relative w-full h-full flex items-center justify-center">
            <div className={cn("transition-opacity duration-300", isLoading ? "opacity-50" : "opacity-100")}>
              <img
                src={sliderImages[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="max-w-full max-h-[70vh] object-contain rounded-md shadow-lg"
              />
            </div>

            <NavButton direction="left" onClick={prevSlide} />
            <NavButton direction="right" onClick={nextSlide} />
          </div>

          <div className="bg-black/70 backdrop-blur-sm py-4 px-6 flex justify-between items-center">
            <div className="text-white text-sm font-medium">
              Image {currentIndex + 1} of {sliderImages.length}
            </div>
            <div className="flex space-x-2">
              {sliderImages.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  onClick={() => setCurrentIndex(slideIndex)}
                  className={cn(
                    "transition-all duration-200 focus:outline-none",
                    "w-8 h-1 rounded-sm focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-black",
                    currentIndex === slideIndex
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/70"
                  )}
                  aria-label={`Go to image ${slideIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative w-full h-full group overflow-hidden", className)}>
      {/* Fullscreen button */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center z-20",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-200 "
        )}
      >
        <Button
          variant="outline"
          size="icon"
          className="bg-white/20 backdrop-blur-sm h-full w-full border-white/20 text-black hover:bg-whit transition-all duration-200"
          onClick={toggleFullView}
          aria-label="Open fullscreen view"
          id="fullscreen-button"
        >
          <div className='bg-white p-3 rounded-md'>
            <Maximize className="h-8 w-8" />
          </div>
        </Button>
      </div>

      {/* Image container */}
      <div className="w-full h-full relative z-0">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-500",
              currentIndex === index ? "opacity-100 z-20" : "opacity-0 z-10"
            )}
            onClick={() => {
              document.getElementById('fullscreen-button')?.focus();
              toggleFullView();
            }}
          >
            <img
              src={image}
              alt={`Project image ${index + 1}`}
              className="w-full h-full object-cover brightness-75"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;