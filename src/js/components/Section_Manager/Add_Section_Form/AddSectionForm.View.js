import { addSectionFormTemplate } from '../Add_Section_Form/AddSectinoForm.Template';

export default class AddSectionForm {
    constructor(){
        this.parentNode = document.getElementsByClassName('section-manager-container')[0];
        this.form = null;
        this.inpSectionName = null;
        this.inpServerName = null;
        this.btnSubmitForm = null;
        this.btnCloseForm = null;
        this.template = addSectionFormTemplate();

        this.render = this.render.bind(this);
    }

    init(){
        this.render();
        this.grabElements();
    }

    render(){
        this.parentNode.innerHTML += this.template;
    }

    grabElements(){
        this.form = this.parentNode.querySelector('#form-add-section');
        this.inpSectionName = this.parentNode.querySelector('.inp-add-section-name');
        this.inpServerName = this.parentNode.querySelector('.inp-add-section-server-name');
        this.btnSubmitForm = this.parentNode.querySelector('.btn-submit-section-form');
        this.btnCloseForm = this.parentNode.querySelector('.btn-close-add-section-form');
    }
}