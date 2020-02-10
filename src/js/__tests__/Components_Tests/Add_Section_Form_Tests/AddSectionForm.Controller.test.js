import Controller from '../../../components/Section_Manager/Add_Section_Form/AddSectionForm.Controller';
import View from '../../../components/Section_Manager/Add_Section_Form/AddSectionForm.View';
import Model from '../../../components/Section_Manager/Add_Section_Form/AddSectionForm.Model';

let controller;
let view;
let model;

let parentNode;

describe('should instantiate from AddSectionForm without failing', () => {
    beforeEach(() => {
        document.body.innerHTML =
        '<div>' +
        '  <div class="section-manager-container"></div>' +
        '</div>';
        view = new View();
        model = new Model();
        
        controller = new Controller(model, view);
        parentNode = document.querySelector('.section-manager-container');
        
    })

    test('should instantiate as a child of AddSectionForm Controller', () => {
        expect(controller instanceof Controller).toBe(true);
    })

    test('should have model/view as values in constructor', () => {
        expect(controller.view).toEqual(view);
        expect(controller.model).toEqual(model);
    })
});

describe('should update model state with correct data', () => {
    beforeEach(() => {
        document.body.innerHTML =
        '<div>' +
        '  <div class="section-manager-container"></div>' +
        '</div>';
        view = new View();
        model = new Model();
        
        controller = new Controller(model, view);
        parentNode = document.querySelector('.section-manager-container');
        
    })

    test('should update section name successfully', () => {
        controller.setSectionName('Section A')
        expect(controller.model.sectionNameValue).toEqual('Section A');
    })

    test('should update server name successfully', () => {
        controller.setServerName('Tom Hanks');
        expect(controller.model.serverNameValue).toEqual('Tom Hanks');
    })
})

describe('should bind update section/server name updates to form submit', () => {
    beforeEach(() => {
        document.body.innerHTML =
        '<div>' +
        '  <div class="section-manager-container"></div>' +
        '</div>';
        view = new View();
        model = new Model();
        
        controller = new Controller(model, view);
        parentNode = document.querySelector('.section-manager-container');
    })
    
    test('model should update section/server name when button clicked', () => {
        let btnSubmit = parentNode.querySelector('.btn-submit-section-form');
        controller.view.inpSectionName.value = '    Section A   ';
        controller.view.inpServerName.value = '   TOM CRUIZ   ';
        
        btnSubmit.click();

        expect(controller.model.sectionNameValue).toEqual('Section A');
        expect(controller.model.serverNameValue).toEqual('TOM CRUIZ');
    })

    test('both values should be null if sectionName is not entered', () => {
        let btnSubmit = parentNode.querySelector('.btn-submit-section-form');
        controller.view.inpServerName.value = '   TOM CRUIZ   ';
        
        btnSubmit.click();

        expect(controller.model.sectionNameValue).toBeNull();
        expect(controller.model.serverNameValue).toBeNull();
    })
})

