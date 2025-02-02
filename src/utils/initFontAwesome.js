// @ts-ignore
import { library } from "@fortawesome/fontawesome-svg-core";
// @ts-ignore
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
    library.add(fas, fab);
}
export default initFontAwesome;
