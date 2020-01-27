import sectionManager from '../models/sections/SectionMgr.Model';

let model = sectionManager;

export default class SectionManagerController {
    constructor(model, view) {
        this.model = model;
    }
}