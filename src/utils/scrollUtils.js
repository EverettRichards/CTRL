// Constants for header heights
export const MAIN_HEADER_HEIGHT = 73;
export const SECONDARY_HEADER_HEIGHT = 77;
export const SCROLL_OFFSET = MAIN_HEADER_HEIGHT + SECONDARY_HEADER_HEIGHT;

/**
 * Smoothly scroll to a section by ID
 * @param {string} sectionId - The ID of the section element to scroll to
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = -(MAIN_HEADER_HEIGHT + SECONDARY_HEADER_HEIGHT + 10);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
