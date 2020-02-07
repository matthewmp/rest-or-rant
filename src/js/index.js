import Section from './components/Section/Section.Model';
import sectionManager from './components/Section_Manager/SectionMgr.Model';
import Table from './components/Table/Table';

import SectionMgrController from './components/Section_Manager/SectionManagerCtrlr';
import SectionMgrView from './components/Section_Manager/SectionMgr.View';

import AddSectionView from './components/Section_Manager/Add_Section_Form/AddSectionForm.View';
import '../css/main.css';

const smController = new SectionMgrController(sectionManager, new SectionMgrView());
// const addSectionView = new AddSectionView();
// addSectionView.init();
