import Section from '../components/sections/Section';


test('Should create new instance of section with correct name and formatting', () => {
    const section1 = new Section('   Section 1   ');

    expect(typeof section1).toBe('object');
    expect(typeof section1.name).toBe('string');
    expect(section1.name).toBe('Section 1');
});


