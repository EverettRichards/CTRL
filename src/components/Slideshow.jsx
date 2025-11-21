import { useState, useEffect, useCallback, useRef } from 'react';

// Transition duration in milliseconds - must match CSS transition duration
const TRANSITION_DURATION = 500;

/**
 * Slideshow Component - A highly optimized, modular slideshow component
 * 
 * Features:
 * - Auto-play with configurable interval
 * - Manual navigation (prev/next buttons)
 * - Dot indicators
 * - Touch/swipe support for mobile
 * - Keyboard navigation
 * - Smooth GPU-accelerated transitions
 * - Lazy loading for performance
 * - Pause on hover
 * - Responsive design
 * 
 * @param {Array} slides - Array of slide objects with { image, title, description }
 * @param {number} autoPlayInterval - Auto-play interval in ms (default: 5000)
 * @param {boolean} showControls - Show navigation controls (default: true)
 * @param {boolean} showIndicators - Show dot indicators (default: true)
 * @param {string} className - Additional CSS classes
 */
const Slideshow = ({
  slides = [],
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  className = '',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const slideContainerRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

  // Navigate to specific slide
  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  }, [currentSlide, isTransitioning]);

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }, [currentSlide, slides.length, goToSlide]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
  }, [currentSlide, slides.length, goToSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [slides.length, isPaused, autoPlayInterval, nextSlide]);

  // Keyboard navigation - only when slideshow container is focused or hovered
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle keyboard if the slideshow or its children have focus
      if (!slideContainerRef.current?.contains(document.activeElement) && 
          !slideContainerRef.current?.matches(':hover')) {
        return;
      }
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch handlers for swipe support
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Preload adjacent images for better performance
  useEffect(() => {
    if (slides.length === 0) return;

    const preloadedImages = [];
    
    const preloadImage = (src) => {
      if (!src) return;
      
      const img = new Image();
      img.onload = () => {
        // Image loaded successfully
      };
      img.onerror = () => {
        // Silently handle image load errors
        console.warn(`Failed to preload image: ${src}`);
      };
      img.src = src;
      preloadedImages.push(img);
    };

    // Preload next and previous images
    const nextIndex = (currentSlide + 1) % slides.length;
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;

    if (slides[nextIndex]?.image) preloadImage(slides[nextIndex].image);
    if (slides[prevIndex]?.image) preloadImage(slides[prevIndex].image);
    
    // Cleanup: Clear references when effect re-runs
    return () => {
      preloadedImages.length = 0;
    };
  }, [currentSlide, slides]);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div
      className={`slideshow-container relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      ref={slideContainerRef}
      role="region"
      aria-label="Image slideshow"
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0 z-10'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full z-0'
                : 'opacity-0 translate-x-full z-0'
            }`}
            style={{ transitionDuration: `${TRANSITION_DURATION}ms` }}
            aria-hidden={index !== currentSlide}
          >
            {/* Image */}
            <div className="relative w-full h-full bg-tech-dark">
              <img
                src={slide.image}
                alt={slide.title || `Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {/* Overlay gradient for better text visibility */}
              {(slide.title || slide.description) && (
                <div className="absolute inset-0 bg-gradient-to-t from-tech-darker/90 via-tech-darker/50 to-transparent" />
              )}
            </div>

            {/* Content overlay */}
            {(slide.title || slide.description) && (
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
                {slide.title && (
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
                    {slide.title}
                  </h3>
                )}
                {slide.description && (
                  <p className="text-base md:text-lg text-gray-300 max-w-2xl">
                    {slide.description}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Previous/Next Controls */}
      {showControls && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-tech-dark/80 hover:bg-tech-blue/80 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-tech-blue/30 hover:border-tech-blue"
            aria-label="Previous slide"
            disabled={isTransitioning}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-tech-dark/80 hover:bg-tech-blue/80 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-tech-blue/30 hover:border-tech-blue"
            aria-label="Next slide"
            disabled={isTransitioning}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-tech-blue w-6 md:w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
