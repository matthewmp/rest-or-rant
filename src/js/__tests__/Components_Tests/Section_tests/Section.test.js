import sectionManager from '../../../components/Section_Manager/SectionMgr.Model';
import Section from '../../../components/Section/Section.Model';

beforeEach(() => {
    sectionManager.clearAllSections();
})

describe('should create new section with correct formatting and without duplicate names', () => {
    test('Should create new instance of section with correct name and formatting', () => {
        const section1 = new Section('   Section 1   ');
        
        expect(typeof section1).toBe('object');
        expect(typeof section1.sectionName).toBe('string');
        expect(section1.sectionName).toBe('Section 1');
        expect(sectionManager.sections.length).toBe(1);
    });
    
    test('Should create only 1 instance when duplicate names are added', () => {
        const section1 = new Section('Section 1');
        
        expect(() => {
            const section1Duplicate = new Section('  Section 1  ');
        }).toThrow();

        expect(Array.isArray(sectionManager.sections)).toBe(true);
        expect(sectionManager.sections.length).toBe(1);
    });
    
})

describe('should set server name for section without errors', () => {
    let section1 = null;
    beforeEach(() => {
        section1 = new Section('A');
    })
    
    test('should set server name for section', () => {
        section1.setServerName('Tom Hanks');
        
        expect(section1.serverName).toBe('Tom Hanks');
    })

    test('should parse string', () => {
        section1.setServerName('   Tom Hanks   ');
        expect(section1.serverName).toBe('Tom Hanks');
    })

    test('should not accept empty string', () => {
        expect(() => {
            section1.setServerName('');
        }).toThrow();
    })
})
