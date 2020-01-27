import Section from './models/sections/Section';
import sectionManager from './models/sections/SectionMgr';
import Table from './models/table/Table';

let sectionA = new Section('A');
sectionA.setServerName('Matt');

let sectionB = new Section('B');

let table = new Table();
console.log(sectionA, sectionB);
console.log(sectionManager)
console.log(table);