import Section from './components/Section/Section.Model';
import sectionManager from './components/Section_Manager/SectionMgr.Model';
import Table from './components/Table/Table';

import SectionMgrController from './components/Section_Manager/SectionManagerCtrlr';
import SectionMgrView from './components/Section_Manager/SectionMgr.View';

import '../css/main.css';

const smController = new SectionMgrController(sectionManager, new SectionMgrView());
console.log(sectionManager);