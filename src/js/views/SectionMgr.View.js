export default class SectionManagerView {
    constructor(){
        this.app = document.getElementById('root');
        this.conatainer = null;
        this.addSectionContainer = null;
        this.btnSubmitAddSectionForm = null;
        this.addSectionForm = null;
        this.btnAddSection = null;

        this.template = `
        <section class="section-manager-container">
            <h3 class="section-manager-title">Restaurant Layout</h3>
            <div class="add-section-container">
                <form id="form-add-section">
                    <input class="inp-add-section-name" placeholder="Enter Section Name" required="">
                    <input class="inp-add-section-server-name" placeholder="Enter Server Name">
                    <button class="btn-add-section-form" type="button">Submit</button>
                    <button class="btn-close-add-section-form" type="button">X</button>
                </form>
                <span class="add-section-text">
                    Add Section
                </span>
                <button id="btn-add-section" type="button">+</button>
            </div>
        </section>
        `;
    }

    render(){
        this.app.innerHTML = this.template;
        document.querySelector('#form-add-section').style.visibility = 'hidden';
        this.grabElements();
    }

    grabElements(){
        this.addSectionForm = this.app.querySelector('#form-add-section');
        this.btnSubmitAddSectionForm = this.addSectionForm.querySelector('.btn-add-section-form');
        this.container = this.app.querySelector('.section-manager-container');
        this.btnAddSection = this.container.querySelector('#btn-add-section');
    }

    showAddSectionForm() {
        this.addSectionForm.style.visibility = 'visible';
    }

    hideAddSectionForm() {
        this.addSectionForm.style.visibility = 'hidden';
    }

    bindAddSectionFormSubmit(handler) {
        this.btnSubmitAddSectionForm.addEventListener('click', event => {
            handler();
        })
    }

    bindBtnAddSection(handler) {
        this.btnAddSection.addEventListener('click', (e) => {
            e.preventDefault();
            handler();
        })
    }

    handleSubmitAddSectionForm(e) {
        // e.preventDefault();
    }
}