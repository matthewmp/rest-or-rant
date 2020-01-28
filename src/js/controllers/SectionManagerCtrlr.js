import sectionManager from '../models/sections/SectionMgr.Model';

let model = sectionManager;

export default class SectionManagerController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    addSection(section) {
        this.model.addNewSection(section);
    }

    clearAllSections() {
        this.model.clearAllSections();
    }
}