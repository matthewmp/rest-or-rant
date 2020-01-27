import sectionManager from './SectionMgr';

export default class Section {
    constructor(sectionName){
        this.sectionName = null;
        this.serverName = null;

        // Check for name availability
        const name = sectionName.trim();

        if(sectionManager.isSectionNameValid(name)){        
            this.sectionName = name;
            sectionManager.addNewSection(this);
        }
        else {
            throw new Error(`Section Name: ${name} already in use`);
        }
    }

    setServerName(name) {
        const newServerName = name.trim();
        if(newServerName){
            this.serverName = newServerName;
        }
        else {
            throw new Error('Please enter a valid name.');
        }
    }
}