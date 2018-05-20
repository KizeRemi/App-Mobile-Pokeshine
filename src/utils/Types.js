import NormalIcon from '../images/normal-icon.png';
import PsychicIcon from '../images/psychic-icon.png';
import IceIcon from '../images/ice-icon.png';
import WaterIcon from '../images/water-icon.png';
import FairyIcon from '../images/fairy-icon.png';
import DragonIcon from '../images/dragon-icon.png';
import GhostIcon from '../images/ghost-icon.png';
import FlyingIcon from '../images/flying-icon.png';
import FireIcon from '../images/fire-icon.png';
import GrassIcon from '../images/grass-icon.png';
import DarkIcon from '../images/dark-icon.png';
import BugIcon from '../images/bug-icon.png';
import ElectricIcon from '../images/electric-icon.png';
import FightIcon from '../images/fight-icon.png';
import PoisonIcon from '../images/poison-icon.png';
import RockIcon from '../images/rock-icon.png';
import GroundIcon from '../images/ground-icon.png';
import SteelIcon from '../images/steel-icon.png';

export function getTypeIcon(type) {
  switch (type) {
    case 'Plante':
      return { icon: GrassIcon, colors: ['#26d7bd', '#52e0cb', '#7de8d8']};
    case 'Feu':
      return { icon: FireIcon, colors: ['#ff706e', '#ff8280', '#ff9b99']};
    case 'Eau':
      return { icon: WaterIcon, colors: ['#26c1fb', '#2ec4fe', '#82daf2']};
    case 'Insecte':
      return { icon: BugIcon, colors: ['#347f45', '#43a359', '#5cbc73']};
    case 'Dragon':
      return { icon: DragonIcon, colors: ['#725ddc', '#806ddf', '#9282e3']};
    case 'Glace':
      return { icon: IceIcon, colors: ['#6dd3f5', '#70d4f5', '#a0e2f8']};
    case 'Poison':
      return { icon: PoisonIcon, colors: ['#9e46a0', '#b85fb9', '#c783c9']};
    case 'Electrik':
      return { icon: ElectricIcon, colors: ['#feb21b', '#febb34', '#fed480']};
    case 'Fée':
      return { icon: FairyIcon, colors: ['#ed92ed', '#f0a8f0', '#f4bef4']};
    case 'Acier':
      return { icon: SteelIcon, colors: ['#b1b1c3', '#b7b7c8', '#c5c5d3']};
    case 'Ténèbres':
      return { icon: DarkIcon, colors: ['#4d392c', '#614838', '#82604a']};
    default:
      return { icon: NormalIcon, colors: ['#c7c1b9', '#d2cdc6', '#ddd9d5']};
  }
}