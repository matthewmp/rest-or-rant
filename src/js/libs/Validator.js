export const isSectionNameValid = (sectionName) => {
    if(typeof sectionName !== 'string') return false;

    const parsedSectionName = sectionName.trim();
    if(sectionName.length < 1){
        return false;
    }
}