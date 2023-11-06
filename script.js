const portfolioLink = document.querySelector('a[href="#portfolio"]');
const contactLink = document.querySelector('a[href="#contact"]');

portfolioLink.addEventListener('click', scrollToPortfolio);
contactLink.addEventListener('click', scrollToContact);

function scrollToPortfolio(event) {
    event.preventDefault();
    const portfolioSection = document.querySelector('#portfolio');
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact(event) {
    event.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}
