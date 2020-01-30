import sectionManager from '../models/sections/SectionMgr.Model';
import Section from '../models/sections/Section.Model';


beforeEach(() => {
    sectionManager.clearAllSections();
})

test('should throw error for trying to instantiate', () => {
    expect(() => {
        const sectionManager2 = new sectionManager()
    }).toThrow();
})

test('should add new section', () => {
    const section1 = new Section('A');

    expect(sectionManager.sections.length).toBe(1);
    expect(sectionManager.sections[0].sectionName).toEqual('A');

    const section2 = new Section('B');

    expect(sectionManager.sections.length).toBe(2);
    expect(sectionManager.sections[1].sectionName).toEqual('B');
})

test('should throw error when creating section with duplicate name', () => {
    const section1 = new Section('A');
    
    expect(() => {
        const section2 = new Section('A');
    }).toThrow();
})

describe('should validate / reject section names', () => {
    test('should validate name to true', () => {
        expect(sectionManager.isSectionNameValid('Test 1')).toBe(true);
    })

    test('should return false for duplicate name', () => {
        const section1 = new Section('Test 1');
        expect(sectionManager.isSectionNameValid('Test 1')).toBe(false);
    })
})

test('should clear all sections from array', () => {
    const section1 = new Section('Test 1');
    const section2 = new Section('Test 2');

    expect(sectionManager.sections.length).toBe(2);

    sectionManager.clearAllSections();

    expect(sectionManager.sections.length).toBe(0);
})

describe('should not allow duplicate names with differently parsed strings', () => {
    const section1 = new Section('   A   ');

    expect(() => {
        const section2 = new Section('A');
    }).toThrow();

    expect(() => {
        const section2 = new Section('A             ');
    }).toThrow();

    expect(sectionManager.sections.length).toBe(1);
})