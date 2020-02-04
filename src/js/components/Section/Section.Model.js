import sectionManager from '../Section_Manager/SectionMgr.Model';

export default class Section {
    constructor(sectionName){
        this.sectionName = null;
        this.serverName = null;
        this.tables = [];

        // Check for name availability
        const name = sectionName.trim();

        if(sectionManager.isSectionNameAvailable(name)){        
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