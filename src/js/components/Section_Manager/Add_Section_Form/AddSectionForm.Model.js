export default class AddSectionFormModel{
    constructor(){
        this.sectionNameValue = null;
        this.serverNameValue = null;
    }

    setSectionNameValue(strName){
        if(typeof strName === 'string'){
            this.sectionNameValue = strName;
        }
        else {
            throw new Error('Section Name must be a string of characters')
        }
    }
}