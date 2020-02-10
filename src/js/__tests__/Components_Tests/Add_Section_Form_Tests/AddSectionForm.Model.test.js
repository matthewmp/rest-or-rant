import AddSectionFormModel from '../../../components/Section_Manager/Add_Section_Form/AddSectionForm.Model';

const model = new AddSectionFormModel();

describe('should have initial variables as null', () => {
    
    test('.sectionNameValue should be null', () => {
        expect(model.sectionNameValue).toBe(null);
    })
    
    test('.serverNameValue should be null', () => {
        expect(model.serverNameValue).toBe(null);
    })
})

describe('should throw error for invalid section names', () => {
    expect(() => {
        model.setSectionNameValue('')
    }).toThrow()

    expect(() => {
        model.setSectionNameValue(' ')
    }).toThrow()

    expect(() => {
        model.setSectionNameValue('            ')
    }).toThrow()

    expect(() => {
        model.setSectionNameValue(9)
    }).toThrow()

    expect(() => {
        model.setSectionNameValue({})
    }).toThrow()

    expect(() => {
        model.setSectionNameValue([])
    }).toThrow()

    expect(() => {
        model.setSectionNameValue(NaN)
    }).toThrow()

    expect(() => {
        model.setSectionNameValue(null)
    }).toThrow()

    expect(() => {
        model.setSectionNameValue(undefined)
    }).toThrow()
})

describe('should update sectionNameValue with valid input', () => {
    test('should set sectionName to "A"', () => {
        model.setSectionNameValue('A');
        expect(model.sectionNameValue).toBe('A')
    })

    test('should set sectionName to "A"', () => {
        model.setSectionNameValue('A    ');
        expect(model.sectionNameValue).toBe('A')
    })

    test('should set sectionName to "A"', () => {
        model.setSectionNameValue('     A    ');
        expect(model.sectionNameValue).toBe('A')
    })
})

describe('should throw error for invalid server names', () => {
    expect(() => {
        model.setServerNameValue('')
    }).toThrow()

    expect(() => {
        model.setServerNameValue(' ')
    }).toThrow()

    expect(() => {
        model.setServerNameValue('            ')
    }).toThrow()

    expect(() => {
        model.setServerNameValue(9)
    }).toThrow()

    expect(() => {
        model.setServerNameValue({})
    }).toThrow()

    expect(() => {
        model.setServerNameValue([])
    }).toThrow()

    expect(() => {
        model.setServerNameValue(NaN)
    }).toThrow()

    expect(() => {
        model.setServerNameValue(null)
    }).toThrow()

    expect(() => {
        model.setServerNameValue(undefined)
    }).toThrow()
})
  
describe('should update serverNameValue with valid input', () => {
    test('should set sectionName to "A"', () => {
        model.setServerNameValue('A');
        expect(model.serverNameValue).toBe('A')
    })

    test('should set sectionName to "A"', () => {
        model.setServerNameValue('A    ');
        expect(model.serverNameValue).toBe('A')
    })

    test('should set sectionName to "A"', () => {
        model.setServerNameValue('     A    ');
        expect(model.serverNameValue).toBe('A')
    })
})