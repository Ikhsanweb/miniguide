import char from "../../char";
import weapon from "../../weapon";
import artifact from "../../artifact";
import * as image from "../../image";

const genshin = {
  id: 1,
  name: 'Genshin Impact',
  logo: image.genshinImpactLogoImg,
  sign: 'GI',
  line: 'genshin',
  constantItem: [
    char,
    weapon,
    artifact,
  ]
}

export default genshin; 