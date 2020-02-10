import { isSectionNameValid } from '../../../libs/Validator';

export default class AddSectionFormModel{
    constructor(){
        this.sectionNameValue = null;
        this.serverNameValue = null;
    }

    setSectionNameValue(strName){
        const parsedStrName = strName.trim();
        if(isSectionNameValid(parsedStrName)){
            this.sectionNameValue = parsedStrName;
        }
        else {
            throw new Error('Section Name must be a string of characters')
        }
        
    }

    setServerNameValue(strServerName){
        const parsedStrName = strServerName.trim();
        if(isSectionNameValid(parsedStrName)){
            this.serverNameValue = parsedStrName;
        }
        else {
            throw new Error('Server Name must be a string of characters')
        }
    }
}