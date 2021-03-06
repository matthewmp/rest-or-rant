import { sectionMgrTemplate } from './Templates';
import * as Styler from '../../libs/Styler';
import { bind } from '../../libs/EventBinder';

export default class SectionManagerView {
    constructor(){
        this.app = document.getElementById('root');
        this.conatainer = null;
        // this.addSectionContainer = null;
        this.btnSubmitAddSectionForm = null;
        this.addSectionForm = null;
        this.btnAddSection = null;

        this.template = sectionMgrTemplate();
        
        // Bind methods
        this.render = this.render.bind(this);
    }

    init() {
        this.render()
        this.grabElements();
    }

    render(){
        this.app.innerHTML = this.template;
        // this.grabElements();
    }

    grabElements(){
        // Set contructor property values to HTML elements once rendered in browser
        this.container = this.app.querySelector('.section-manager-container');
        this.addSectionForm = this.app.querySelector('#form-add-section');
        this.btnAddSection = this.container.querySelector('#btn-add-section');
    }

    bindAddSectionFormSubmit(handler) {
        // console.log('form: ', this.addSectionForm)
        bind('click', this.btnSubmitAddSectionForm, handler);
    }

    bindBtnAddSection(handler) {
        // console.log('Binding Add Section Form Button')
        bind('click', this.btnAddSection, handler);
    }

    handleSubmitAddSectionForm(e) {
 
    }
}