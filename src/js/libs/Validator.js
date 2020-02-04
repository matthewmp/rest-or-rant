export const isSectionNameValid = (sectionName) => {
    if(typeof sectionName !== 'string') return false;

    const parsedSectionName = sectionName.trim();
    if(parsedSectionName.length < 1){
        return false;
    }

    return true;
}