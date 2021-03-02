import { navSlide } from './components/Nav.js';
import { navCheck } from './components/Nav.js';


import { renderSocials } from './components/renderSocials.js';
import { socialsData } from './data/socialsData.js'


renderSocials('.socials', socialsData);


navSlide();
navCheck();