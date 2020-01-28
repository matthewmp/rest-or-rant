// Singleton pattern to manage all created sections

class SectionManager {
    constructor(){
        if(SectionManager.sections == null) {
            this.sections = [];
            SectionManager.sections = this;
        }
        return SectionManager.sections;
    }

    addNewSection(section) {
        if(this.isSectionNameValid(section.sectionName)){
            this.sections.push(section);
        } else {
            throw new Error('Duplicate Section Name', this.sections);
        }
        // this.onSectoinManagerChange(this.sections);
    }

    isSectionNameValid(sectionName) {
        const newSectionName = sectionName.trim();
        if(this.sections.length === 0){            
            return true;
        }
        for(let i = 0; i < this.sections.length; i++){
            if(this.sections[i].sectionName == newSectionName){
                return false;
            }
        }
        return true;
    }

    clearAllSections(){
        this.sections.length = 0;
        // this.onSectoinManagerChange(this.sections);
    }
}

const sectionManager = new SectionManager();
Object.freeze(sectionManager);
export default sectionManager;