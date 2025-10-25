// Using base64 strings for images makes the app self-contained and avoids external network requests.
// In a real-world scenario, you would optimize these images and possibly use a build tool to manage them.
// Use external placeholder image URLs for medicines and about images so the site shows images immediately.
// You can replace these with real product/image URLs (or local files under /public/images) later.
export const images = {
    // Hero image - prefer the user's provided JPG. If it's not present the img onError
    // will fall back to the included SVG at /images/hero.svg.
    heroImage: '/images/heroImage.jpg',

    // About Us images
    aboutImage1: '/images/aboutImage1.png',
    aboutImage2: '/images/aboutImage2.png', 

    // Medicine Images - use your provided images in /public/images.
    // Expected filenames (place these in public/images/):
    // - tabletwebp
    // - syrup1.webp
    // - syrup2.png
    // The entries below cycle through those three files so the medicine cards show them alternately.
    paracetamol: '/images/tablet.webp',
    amoxicillin: '/images/syrup1.webp',
    coughSyrup: '/images/syrup2.png',
    vitaminC: '/images/tablet.webp',
    antacid: '/images/syrup1.webp',
    painReliefSpray: '/images/syrup2.png',
    multivitamin: '/images/tablet.webp',
    glucose: '/images/syrup1.webp',
};
