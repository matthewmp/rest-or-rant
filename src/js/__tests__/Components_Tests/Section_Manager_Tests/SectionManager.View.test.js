import SectionView from '../../../components/Section_Manager/SectionMgr.View';

const view = new SectionView();

beforeEach(() => {
    document.body.innerHTML =
    '<div>' +
    '  <div id="root"></div>' +
    '</div>';

    view.app = document.getElementById('root');
    view.render();
})

describe('should render all elements correctly', () => {
    let root;
    beforeEach(() => {
        root = document.querySelector('#root');
        // smCtrlr = new sectionManagerCtrlr(model, view);
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
        
        expect(smContainer.getElementsByTagName('button')[0].id).toEqual('btn-add-section');
        expect(smContainer.getElementsByTagName('button')[0].textContent).toEqual('+');
    })
})