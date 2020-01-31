import SectionView from '../views/SectionMgr.View';

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
        console.log(root)
        expect(smContainer.children.length).toBe(2);
        expect(smContainer.children[0].className).toEqual('section-manager-title');
        expect(smContainer.children[1].className).toEqual('add-section-container');
        expect(smContainer.getElementsByTagName('h3')[0].className).toEqual('section-manager-title');
        expect(smContainer.getElementsByTagName('h3')[0].textContent).toEqual('Restaurant Layout');
        expect(smContainer.getElementsByTagName('span')[0].textContent.trim()).toEqual('Add Section');
        
        expect(smContainer.getElementsByTagName('button')[2].id).toEqual('btn-add-section');
        expect(smContainer.getElementsByTagName('button')[2].textContent).toEqual('+');
    })

    test('should render & toggle .form-add-section', () => {
        const smContainer = root.querySelector('.section-manager-container');
        const form = smContainer.querySelector('#form-add-section');
        form.style.visibility = 'hidden'; // Needed since CSS can't be initialized for test
        
        expect(window.getComputedStyle(form).visibility).toEqual('hidden');
        view.showAddSectionForm();
        expect(window.getComputedStyle(form).visibility).toEqual('visible');
        view.hideAddSectionForm();
        expect(window.getComputedStyle(form).visibility).toEqual('hidden');
    })

    // Close form
})

