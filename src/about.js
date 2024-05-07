import './style.css';
import Shop from './shop.png';

export default function createAbout() {

    let aboutSection = document.getElementById('aboutSection');
    aboutSection.innerHTML = "";

    let aboutHeader = document.createElement("H1");

    aboutHeader.innerHTML = "About Us";

    aboutSection.appendChild(aboutHeader);

    function createShopImage() {
        const shop = new Image();
        shop.src = Shop;
        aboutSection.appendChild(shop);
        return shop;
    }
    createShopImage();

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('container');

    let aboutText = [
        "Step into a world where every ingredient is a protagonist, every dish a captivating chapter, and every meal an unforgettable journey. Welcome to Flavors Unveiled, where culinary excellence meets storytelling magic.",
        "Embark on a gastronomic adventure unlike any other, where each plate is meticulously crafted to take your taste buds on a voyage of discovery. Our chefs are not mere cooks; they are artists, weaving tales with spices, textures, and flavors.",
        "At Flavors Unveiled, we don't just serve food; we serve experiences. From the sizzle of our signature dishes to the aroma that fills the air, every moment is crafted to tantalize your senses and leave you craving more.",
        "Join us and uncover the stories behind each dish, as our knowledgeable staff guide you through a menu that celebrates the richness of culinary heritage from around the world. Whether you're a connoisseur seeking bold new flavors or an adventurous eater ready to explore, there's a story waiting for you at Flavors Unveiled."
    ];

    aboutText.forEach(aboutParagraphText => {
        const aboutParagraph = document.createElement('p');
        aboutParagraph.classList.add("copy-content");
        aboutParagraph.textContent = aboutParagraphText;
        aboutSection.appendChild(aboutParagraph);
    });


    
}

