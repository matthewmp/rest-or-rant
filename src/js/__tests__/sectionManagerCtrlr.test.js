import sectionManagerCtrlr from '../controllers/SectionManagerCtrlr';
import sectionManagerModel from '../models/sections/SectionMgr.Model';
import sectionManagerView from '../views/SectionMgr.View';

const model = sectionManagerModel;
const view = new sectionManagerView();

test('creates a new controller instance', () => {
    const smCtrlr = new sectionManagerCtrlr(model, view);

    expect(smCtrlr.model).toEqual(model);
})