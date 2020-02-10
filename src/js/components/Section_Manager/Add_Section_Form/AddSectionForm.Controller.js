export default class AddSectionFormController{
    constructor(model, view){
        this.view = view;
        this.model = model;

        // Bind this to methods
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        // Initialize and render view
        this.view.init();

        // Bind method to view event listener
        this.view.bindSubmitFormButton(this.handleFormSubmit)
    }

    setSectionName(sectionName){
        this.model.setSectionNameValue(sectionName);
    }

    setServerName(serverName){
        this.model.setServerNameValue(serverName);
    }

    handleFormSubmit(addSectionFormDataObj){
         if(addSectionFormDataObj.sectionName){
             this.setSectionName(addSectionFormDataObj.sectionName.trim());
             if(addSectionFormDataObj.serverName){
                this.setServerName(addSectionFormDataObj.serverName.trim());
            }
         }
         else if(!addSectionFormDataObj.sectionName){
             return;
         }
         
    }
}