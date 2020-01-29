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
    document.body.innerHTML =
    '<div>' +
    '  <div id="root"></div>' +
    '</div>';

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

describe('should render all elements correctly', () => {
    let root;
    beforeEach(() => {
        root = document.querySelector('#root');
    })

    test('should render root', ()=> {
        expect(root.id).toEqual('root');
    })

    test('should render section-manager-container element', () => {
        const smContainer = root.querySelector('.section-manager-container');
        
        expect(smContainer.children.length).toBe(2);
        expect(smContainer.children[0].className).toEqual('section-manager-title');
        expect(smContainer.children[1].className).toEqual('add-section-container');
        expect(smContainer.getElementsByTagName('h3')[0].className).toEqual('section-manager-title');
        expect(smContainer.getElementsByTagName('h3')[0].textContent).toEqual('Restaurant Layout');
        expect(smContainer.getElementsByTagName('span')[0].textContent.trim()).toEqual('Add Section');
        
        expect(smContainer.getElementsByTagName('button')[0].id).toEqual('btn-add-section')
        expect(smContainer.getElementsByTagName('button')[0].textContent).toEqual('+')
    })


})

