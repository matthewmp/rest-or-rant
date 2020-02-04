import { sectionMgrTemplate } from './Templates';
// import * as Styler from '../../libs/Styler';
import { bind } from '../../libs/EventBinder';

export default class SectionManagerView {
    constructor(){
        this.app = document.getElementById('root');
        this.conatainer = null;
        this.addSectionContainer = null;
        this.btnSubmitAddSectionForm = null;
        this.addSectionForm = null;
        this.btnAddSection = null;
        this.btnCloseAddSectionForm = null;

        this.template = sectionMgrTemplate();
        
        // Bind methods
        this.render = this.render.bind(this);
    }

    render(){
        this.app.innerHTML = this.template;
        this.grabElements();
    }

    grabElements(){
        // Set contructor property values to HTML elements once rendered in browser
        this.container = this.app.querySelector('.section-manager-container');
        this.addSectionForm = this.app.querySelector('#form-add-section');
        this.btnSubmitAddSectionForm = this.addSectionForm.querySelector('.btn-add-section-form');
        this.btnAddSection = this.container.querySelector('#btn-add-section');
        this.btnCloseAddSectionForm = this.app.querySelector('.btn-close-add-section-form');
    }

    // showAddSectionForm() {
    //     Styler.visible(this.addSectionForm);
    // }

    // hideAddSectionForm() {
    //     Styler.invisible(this.addSectionForm);
    // }

    bindAddSectionFormSubmit(handler) {
        bind('click', this.btnSubmitAddSectionForm, handler);
    }

    bindBtnAddSection(handler) {
        bind('click', this.btnAddSection, handler);
    }

    handleSubmitAddSectionForm(e) {
 
    }
}