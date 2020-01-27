import sectionManager from '../models/sections/SectionMgr.Model';

test('should throw error for trying to instantiate', () => {
    expect(() => {
        const sectionManager2 = new sectionManager()
    }).toThrow();
})