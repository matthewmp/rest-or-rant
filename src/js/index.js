import Section from './models/sections/Section.Model';
import sectionManager from './models/sections/SectionMgr.Model';
import Table from './models/table/Table';

let sectionA = new Section('A');
sectionA.setServerName('Matt');

let sectionB = new Section('B');

let table = new Table(1, 4);
console.log(sectionA, sectionB);
console.log(sectionManager)
console.log(table);