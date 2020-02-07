import sectionManager from '../Section_Manager/SectionMgr.Model';

let model = sectionManager;

export default class SectionManagerController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.handleAddSection = this.handleAddSection.bind(this);

        this.view.init();
        
        // Bind events
        this.view.bindBtnAddSection(this.handleAddSection);
    }

    addSection(section) {
        this.model.addNewSection(section);
    }

    clearAllSections() {
        this.model.clearAllSections();
    }

    handleAddSection (){
        console.log('Adding Section');
    }
}