// Simple script to create icon files using Node.js and canvas
// Run with: node create-icons.js
// Requires: npm install canvas

const fs = require('fs');
const { createCanvas } = require('canvas');

function createIcon(size, filename) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#1e40af');
    gradient.addColorStop(1, '#3b82f6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    
    // Text
    ctx.fillStyle = 'white';
    ctx.font = `bold ${size * 0.3}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('UK', size / 2, size / 2);
    
    // Save
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(filename, buffer);
    console.log(`Created ${filename}`);
}

try {
    createIcon(192, 'icon-192.png');
    createIcon(512, 'icon-512.png');
    console.log('Icons created successfully!');
} catch (error) {
    console.error('Error creating icons. Make sure you have canvas installed: npm install canvas');
    console.error('Alternatively, open generate-icons.html in a browser to generate icons.');
}

