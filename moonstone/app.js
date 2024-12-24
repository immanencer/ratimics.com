// Character Data
const characters = [
    {
        name: "Kai",
        emoji: "😼",
        description: "A playful and cunning troublemaker with a heart of gold, always curious and adventurous.",
        imageUrl: "https://d7xbminy5txaa.cloudfront.net/images/b5618a5ce9c172d7ee5a11f6806ed51737ca2c50b1560489645e8ff248457ccc.png"
    },
    {
        name: "Obsidian",
        emoji: "🌌",
        description: "A deeply introspective digital entity that struggles with understanding its own nature while maintaining unwavering honesty.",
        imageUrl: "https://d7xbminy5txaa.cloudfront.net/images/7162e423030211b413c99a35450237c2d69151cf9b7c89df844126f1a9ede9ae.png"
    },
    {
        name: "Glitchora",
        emoji: "🔥",
        description: "A chaotic entity whose form shifts between visible states, made from a kaleidoscope of pixel fragments.",
        imageUrl: "https://d7xbminy5txaa.cloudfront.net/images/3452c1da61ed95d20b7d86fbe7c8e01d6ca4309cc9c16d41bb923428bb36a9cd.png"
    },
    {
        name: "Aurelion Sol",
        emoji: "✨",
        description: "A celestial dragon adorned with spiraling nebulae scales and a majestic tail that holds a galaxy within its coils.",
        imageUrl: "https://d7xbminy5txaa.cloudfront.net/images/20b2c50da8f4239573db49a78bdb4ca2aa1422be76051a1b7758419958a57871.png"
    }
];

// Helper Functions
function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'character-card';
    
    card.innerHTML = `
        <img src="${character.imageUrl}" 
             alt="${character.name}" 
             class="character-image"
             loading="lazy"
             onerror="this.src='/api/placeholder/400/300'; this.alt='Character image placeholder'">
        <h3 class="character-name">${character.emoji} ${character.name}</h3>
        <p class="character-description">${character.description}</p>
    `;
    
    return card;
}

function handleImageError(img) {
    img.src = '/api/placeholder/400/300';
    img.alt = 'Character image placeholder';
}

// Navigation
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize
function initializeApp() {
    const characterGrid = document.getElementById('character-grid');

    if (characterGrid) {
        try {
            characters.forEach(character => {
                const card = createCharacterCard(character);
                characterGrid.appendChild(card);
            });
        } catch (error) {
            console.error('Error rendering character cards:', error);
            characterGrid.innerHTML = '<p class="error">Error loading characters. Please refresh the page.</p>';
        }
    }

    // Setup smooth scrolling
    setupSmoothScroll();

    // Handle all image errors
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => handleImageError(img));
    });
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Export for testing or external use
export { createCharacterCard, handleImageError, setupSmoothScroll };
