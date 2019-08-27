import Handlebars from 'handlebars';

// templates
import navbarTpl from './templates/navbar.hbs';
import featuredBookTpl from './templates/featuredBook.hbs';
import footerTpl from './templates/footer.hbs';
import topVotedTpl from './templates/top-voted.hbs';

// content data
import {
    navbar,
    featuredBook,
    topvoted,
    footer
} from './data.json';

// css
import './sass/main.scss';

// import all images
const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);

// navbar template html
const navtext = navbarTpl(navbar);
document.getElementsByClassName('top-actions')[0].innerHTML = new Handlebars.SafeString(navtext);

// featured book template html
const featuredBookTxt = featuredBookTpl(featuredBook);
document.getElementsByClassName('featured-book')[0].innerHTML = new Handlebars.SafeString(featuredBookTxt);

// top voted template html
const topVotedTxt = topVotedTpl(topvoted);
document.getElementsByClassName('top-voted')[0].innerHTML = new Handlebars.SafeString(topVotedTxt);

// footer template html
const footerTxt = footerTpl({ footer });
document.getElementsByTagName('footer')[0].innerHTML = new Handlebars.SafeString(footerTxt);
