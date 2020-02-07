import View from '../../../components/Section_Manager/Add_Section_Form/AddSectionForm.View'

let view;

beforeEach(() => {
    document.body.innerHTML =
    '<div>' +
    '  <div class="section-manager-container"></div>' +
    '</div>';

    view = new View();
})

describe('all initial elements should be null', () => {
    test('this.form should be null', () => {
        expect(view.form).toEqual(null);
    })

    test('section name input should be null', () => {
        expect(view.inpSectionName).toEqual(null);
    })

    test('section name input should be null', () => {
        expect(view.inpServerName).toEqual(null);
    })

    test('submit button for form should be null', () => {
        expect(view.btnSubmitForm).toEqual(null);
    })

    test('close button for form should be null', () => {
        expect(view.btnCloseForm).toEqual(null);
    })
})

test('parent node should be .section-manager-container', () => {
    expect(view.parentNode.className).toEqual('section-manager-container');
})

test('should render template without failing', () => {
    expect(view.template).toEqual(
        `
        <form id="form-add-section">
            <input class="inp-add-section-name" placeholder="Enter Section Name" required="">
            <input class="inp-add-section-server-name" placeholder="Enter Server Name">
            <button class="btn-submit-section-form" type="button">Submit</button>
            <button class="btn-close-add-section-form" type="button">X</button>
        </form>
        `);
})


let smContainer;
describe('should have all elements in constructor after render', () => {
    beforeEach(() => {
        view.init();
        smContainer = document.querySelector('.section-manager-container');
    })

    test('should have form element in constructor', () => {
        expect(view.form.id).toEqual('form-add-section');
    })

    test('should have inp-add-section-name in contructor inpSectionName', () => {
        expect(view.inpSectionName.className).toEqual('inp-add-section-name');
    })

    test('should have inp-add-server-name in contructor inpSectionName', () => {
        expect(view.inpServerName.className).toEqual('inp-add-section-server-name');
    })

    test('should have btn-submit-section-form in contructor btnSubmitForm', () => {
        expect(view.btnSubmitForm.className).toEqual('btn-submit-section-form');
    })

    test('should have btn-close-add-section-form in contructor btnSubmitForm', () => {
        expect(view.btnCloseForm.className).toEqual('btn-close-add-section-form');
    })
});

// test('should render & toggle .form-add-section', () => {
    //     const smContainer = root.querySelector('.section-manager-container');
    //     const form = smContainer.querySelector('#form-add-section');
    //     form.style.visibility = 'hidden'; // Needed since CSS can't be initialized for test
        
    //     expect(window.getComputedStyle(form).visibility).toEqual('hidden');
    //     view.showAddSectionForm();
    //     expect(window.getComputedStyle(form).visibility).toEqual('visible');
    //     view.hideAddSectionForm();
    //     expect(window.getComputedStyle(form).visibility).toEqual('hidden');
    // })


// Close form
// test('Add section form should close when x is clicked', () => {
//     const closeButton = document.querySelector('.btn-close-add-section-form');

//     // open form
//     view.showAddSectionForm();

//     // PENDING CHANGES TO MODEL
//     // closeButton.click();
//     // expect(view.handleSubmitAddSectionForm).toHaveBeenCalled();
// })