import _, { get } from 'lodash';
import createMenu from './menu.js';
import createAbout from './about.js';
import './style.css';
import Hero from './hero.png';


function component() {

    document.addEventListener('DOMContentLoaded', function () {
        const tabs = document.getElementsByClassName('tab');
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', tabSwitch, false);
        }

        function tabSwitch() {
            document.getElementsByClassName('is-active')[0].classList.remove('is-active');
            this.classList.add('is-active');

            document.getElementsByClassName('is-show')[0].classList.remove('is-show');
            const arrayTabs = Array.prototype.slice.call(tabs);
            const index = arrayTabs.indexOf(this);
            document.getElementsByClassName('panel')[index].classList.add('is-show');

            if (this.classList.contains('tab-B')) {
                console.log('heres menu')
                createMenu();
            }
            else if (this.classList.contains('tab-C')) {
                console.log('heres about');
                createAbout();
            }
        };
    }, false);


    const content = document.getElementById('content');


    function createImage() {
        const hero = new Image();
        hero.src = Hero;
        content.appendChild(hero);
        return hero;
    }

    function createCopy() {
        const copy = document.createElement('div');
        copy.classList.add("hero-content");

        let header = document.createElement("H1");
        content.appendChild(header);
        header.innerHTML = "Introducing Flavors Unveiled: Where Every Bite Tells a Story";

        let text = [
            "Step into a world where every ingredient is a protagonist, every dish a captivating chapter, and every meal an unforgettable journey. Welcome to Flavors Unveiled, where culinary excellence meets storytelling magic.",
            "Embark on a gastronomic adventure unlike any other, where each plate is meticulously crafted to take your taste buds on a voyage of discovery. Our chefs are not mere cooks; they are artists, weaving tales with spices, textures, and flavors.",
            "At Flavors Unveiled, we don't just serve food; we serve experiences. From the sizzle of our signature dishes to the aroma that fills the air, every moment is crafted to tantalize your senses and leave you craving more.",
            "Join us and uncover the stories behind each dish, as our knowledgeable staff guide you through a menu that celebrates the richness of culinary heritage from around the world. Whether you're a connoisseur seeking bold new flavors or an adventurous eater ready to explore, there's a story waiting for you at Flavors Unveiled."
        ];

        text.forEach(paragraphText => {
            const paragraph = document.createElement('p');
            paragraph.classList.add("copy-content");
            paragraph.textContent = paragraphText;
            content.appendChild(paragraph);
        });

        function onButtonClick() {
            alert('Button clicked!');
        }

        let contactButton = document.createElement('button');
        contactButton.textContent = 'Contact Us';
        content.appendChild(contactButton);
        contactButton.addEventListener('click', onButtonClick);


        return copy;
    }


    createImage();
    createCopy();
}


document.body.appendChild(component());




