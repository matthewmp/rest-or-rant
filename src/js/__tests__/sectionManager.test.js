import sectionManager from '../components/sections/SectionMgr';

test('should throw error for trying to instantiate', () => {
    expect(() => {
        const sectionManager2 = new sectionManager()
    }).toThrow();
})