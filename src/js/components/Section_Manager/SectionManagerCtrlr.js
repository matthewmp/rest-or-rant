import sectionManager from '../Section_Manager/SectionMgr.Model';
import AddSectionFormModel from './Add_Section_Form/AddSectionForm.Model';
import AddSectionFormView from './Add_Section_Form/AddSectionForm.View';
import AddSectionFormController from './Add_Section_Form/AddSectionForm.Controller';


let model = sectionManager;

export default class SectionManagerController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.childAddSectionForm = null;

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
        this.childAddSectionForm = new AddSectionFormController(new AddSectionFormModel(), new AddSectionFormView())
    }
}