import sectionManager from '../Section_Manager/SectionMgr.Model';

let model = sectionManager;

export default class SectionManagerController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.handleAddSection = this.handleAddSection.bind(this);
        // this.handleAddSectionFormSubmit = this.handleAddSectionFormSubmit.bind(this);

        this.view.render();
        // console.log('View: ', this.view, 'Model: ', this.model)
        // Bind events
        // this.view.bindAddSectionFormSubmit(this.handleAddSectionFormSubmit);
        this.view.bindBtnAddSection(this.handleAddSection);
    }

    addSection(section) {
        this.model.addNewSection(section);
    }

    clearAllSections() {
        this.model.clearAllSections();
    }

    handleAddSection (){
        console.log('Adding Section', this);
        // this.view.showAddSectionForm();
    }

    handleAddSectionFormSubmit() {

        // console.log('Handled from Ctrlr', this);
    }
}