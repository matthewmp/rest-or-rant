import View from '../../../components/Section_Manager/Add_Section_Form/AddSectionForm.View'

let view;

beforeEach(() => {
    view = new View();
})

describe('all initial elements should be null', () => {
    test('this.form should be null', () => {
        expect(view.form).toEqual(null);
    })

    test('section name input should be null', () => {
        expect(view.inpSectionName).toEqual(null);
    })

    test('section name input should be null', () => {
        expect(view.inpServerName).toEqual(null);
    })

    test('submit button for form should be null', () => {
        expect(view.btnSubmitForm).toEqual(null);
    })

    test('close button for form should be null', () => {
        expect(view.btnCloseForm).toEqual(null);
    })
});
