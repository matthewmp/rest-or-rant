import Section from './components/sections/Section';
import sectionManager from './components/sections/SectionMgr';

let sectionA = new Section('A');
sectionA.setServerName('Matt');

let sectionB = new Section('B');
console.log(sectionA, sectionB);
console.log(sectionManager)