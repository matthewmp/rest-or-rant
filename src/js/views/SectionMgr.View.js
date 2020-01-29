export default class SectionManagerView {
    constructor(){
        this.app = document.getElementById('root');
        this.submitAddSectionForm = null;
        this.addSectionForm = null;

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
        console.log(this.submitAddSectionForm, this.addSectionForm)
    }

    grabElements(){
        this.addSectionForm = document.querySelector('#form-add-section');
        this.submitAddSectionForm = this.addSectionForm.querySelector('.btn-add-section-form');
    }

    bindAddSectionFormSubmit(handler) {
        this.submitAddSectionForm.addEventListener('click', event => {
            handler();
        })
    }

    submitAddSectionForm(e) {
        e.preventDefault();
    }
}