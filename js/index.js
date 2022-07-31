import { Router } from './router.js';
import Elements from "./elements.js";

const router = new Router();
const elements = Elements({});

router.add('/', "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

elements.navHome.addEventListener("click", () => {
   removeThemeNav();
   router.alterThemeNav(elements.navHome);
})

elements.navUniverse.addEventListener("click", () => {
   removeThemeNav();
   router.alterThemeNav(elements.navUniverse);
})

elements.navExploration.addEventListener("click", () => {
   removeThemeNav();
   router.alterThemeNav(elements.navExploration);
})

function removeThemeNav () {
   elements.navHome.classList.remove('nav-selected');
   elements.navUniverse.classList.remove('nav-selected');
   elements.navExploration.classList.remove('nav-selected');
}