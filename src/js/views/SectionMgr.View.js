import { SectionMgrTemplate } from './Templates';

export default class SectionManagerView {
    constructor(){
        this.app = document.getElementById('root');
        this.conatainer = null;
        this.addSectionContainer = null;
        this.btnSubmitAddSectionForm = null;
        this.addSectionForm = null;
        this.btnAddSection = null;

        this.template = SectionMgrTemplate();
        
        // Bind methods
        this.render = this.render.bind(this);
        
    }

    render(){
        this.app.innerHTML = this.template;
        document.querySelector('#form-add-section').style.visibility = 'hidden';
        this.grabElements();
    }

    grabElements(){
        this.addSectionForm = this.app.querySelector('#form-add-section');
        this.btnSubmitAddSectionForm = this.addSectionForm.querySelector('.btn-add-section-form');
        this.container = this.app.querySelector('.section-manager-container');
        this.btnAddSection = this.container.querySelector('#btn-add-section');
    }

    showAddSectionForm() {
        this.addSectionForm.style.visibility = 'visible';
    }

    hideAddSectionForm() {
        this.addSectionForm.style.visibility = 'hidden';
    }

    bindAddSectionFormSubmit(handler) {
        this.btnSubmitAddSectionForm.addEventListener('click', event => {
            handler();
        })
    }

    bindBtnAddSection(handler) {
        this.btnAddSection.addEventListener('click', (e) => {
            e.preventDefault();
            handler();
        })
    }

    handleSubmitAddSectionForm(e) {
        // e.preventDefault();
    }
}