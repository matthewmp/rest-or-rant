import View from '../../../components/Section_Manager/Add_Section_Form/AddSectionForm.View'
import { addSectionFormTemplate } from '../../../components/Section_Manager/Add_Section_Form/AddSectinoForm.Template';

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
    expect(view.template).toEqual(addSectionFormTemplate());
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

test('should render & toggle .form-add-section', () => {
    view.init();
    let el = document.querySelector('#addSectionFormContainer');
    let close = document.querySelector('.btn-close-add-section-form');

    expect(el.firstElementChild.id).toEqual('form-add-section');

    close.click();
    
    let element = document.querySelector('#addSectionFormContainer');
    expect(element).toBe(null);
    
})

describe('should get/reset input values without failing', () => {
    beforeEach(() => {
        view.init();
    })

    test('should get section name input value',() => {
        const testName = 'Section A';
        view.inpSectionName.value = testName;
        
        expect(view.getSectionName()).toEqual(testName);
    })

    test('should get server name input value',() => {
        const testName = 'Test Name 1';
        view.inpServerName.value = testName;
        
        expect(view.getServerName()).toEqual(testName);
    })

    test('should reset form inputs', () => {
        // Set input values
        const serverName = 'Test Name 1';
        const sectionName = 'Section A';
        view.inpSectionName.value = sectionName;
        view.inpServerName.value = serverName;

        view.resetFormInputs();

        expect(view.inpSectionName.value).toBeFalsy();
        expect(view.inpSectionName.value).toBe(undefined);

        expect(view.inpServerName.value).toBeFalsy();
        expect(view.inpServerName.value).toBe(undefined);
    })
})

describe('should handle click/submit events correctly when buttons clicked', () => {
    beforeEach(() => {
        view.init();
        view.form.style.visibility = 'visible'; // Needed since CSS can't be initialized for test
    })

    test('should invoke callback function when form submited with propper arguments', () => {
        const controllerCallBack = jest.fn();

        view.inpSectionName.value = 'Section A';
        view.inpServerName.value = 'Server 1';
        
        view.bindSubmitFormButton(controllerCallBack)
        view.btnSubmitForm.click();
        expect(controllerCallBack).toHaveBeenCalledTimes(1);
        expect(controllerCallBack).toBeCalledWith({"sectionName": "Section A", "serverName": "Server 1"});
    })
})