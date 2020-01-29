import Section from './models/sections/Section.Model';
import sectionManager from './models/sections/SectionMgr.Model';
import Table from './models/table/Table';

import SectionMgrController from './controllers/SectionManagerCtrlr';
import SectionMgrView from './views/SectionMgr.View';

import '../css/main.css';

const smController = new SectionMgrController(sectionManager, new SectionMgrView());
console.log(sectionManager);