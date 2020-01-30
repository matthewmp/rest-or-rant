import sectionManagerCtrlr from '../controllers/SectionManagerCtrlr';
import sectionManagerModel from '../models/sections/SectionMgr.Model';
import sectionManagerView from '../views/SectionMgr.View';
import Section from '../models/sections/Section.Model';

const model = sectionManagerModel;

let view;
let smCtrlr;

beforeEach(() => {
    document.body.innerHTML =
    '<div>' +
    '  <div id="root"></div>' +
    '</div>';

    sectionManagerModel.clearAllSections();
    view = new sectionManagerView();
    smCtrlr = new sectionManagerCtrlr(model, view);
})

test('creates a new controller instance', () => {
    expect(smCtrlr.model).toEqual(model);
    expect(smCtrlr.view).toEqual(view);
})

test('sectionManager add function can be called from controller', () => {
    const section = {sectionName: 'A', serverName: 'Van Halen'};
    smCtrlr.addSection(section);
    expect(smCtrlr.model.sections.length).toBe(1);
    expect(smCtrlr.model.sections[0].sectionName).toBe('A');
    expect(smCtrlr.model.sections[0].serverName).toBe('Van Halen');
})

test('sectionManager clearAllSections can be called from controller', () => {
    const section1 = {sectionName: 'A', serverName: 'Van Halen'};
    smCtrlr.addSection(section1);
    const section2 = {sectionName: 'B', serverName: 'Van Hagar'};
    smCtrlr.addSection(section2);

    expect(smCtrlr.model.sections.length).toBe(2);

    smCtrlr.clearAllSections();
    expect(smCtrlr.model.sections.length).toBe(0);
})