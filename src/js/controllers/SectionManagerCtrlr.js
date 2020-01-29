import sectionManager from '../models/sections/SectionMgr.Model';

let model = sectionManager;

export default class SectionManagerController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.render();

        // Bind events
        this.view.bindAddSectionFormSubmit(this.handleAddSectionFormSubmit);
    }

    addSection(section) {
        this.model.addNewSection(section);
    }

    clearAllSections() {
        this.model.clearAllSections();
    }

    handleAddSectionFormSubmit() {
        console.log('Handled from Ctrlr');
    }
}