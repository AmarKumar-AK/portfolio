// Shadow effects for section titles

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the shadow effect for section titles
    initSectionTitleShadows();
});

/**
 * Adds data-text attributes to all section titles for the shadow effect
 * This allows the CSS to create a shadow with the same text using pseudo-elements
 */
function initSectionTitleShadows() {
    // Get all section titles
    const sectionTitles = document.querySelectorAll('.section-title h2');
    
    // For each title, add a data-text attribute with the title text
    sectionTitles.forEach(title => {
        const titleText = title.textContent;
        title.setAttribute('data-text', titleText);
        
        // Add a class for animation purposes
        title.classList.add('shadow-effect');
    });

    // Add color variables for shadow effect
    addRGBVariables();
}

/**
 * Adds RGB variables from the CSS color variables
 * This allows us to use rgba() with the primary color for transparency
 */
function addRGBVariables() {
    // Function to convert hex to RGB
    const hexToRGB = (hex) => {
        // Remove # if present
        hex = hex.replace('#', '');
        
        // Parse hex values
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        
        return `${r}, ${g}, ${b}`;
    };

    // Get the computed primary color
    const computedStyle = getComputedStyle(document.documentElement);
    const primaryColor = computedStyle.getPropertyValue('--primary-color').trim();
    
    // Convert to RGB and set as CSS variable
    if (primaryColor && primaryColor.startsWith('#')) {
        const rgbValue = hexToRGB(primaryColor);
        document.documentElement.style.setProperty('--primary-rgb', rgbValue);
    } else {
        // Fallback if color is not in hex format
        document.documentElement.style.setProperty('--primary-rgb', '5, 99, 187'); // Default blue
    }
}

// Export functions
window.initSectionTitleShadows = initSectionTitleShadows;
