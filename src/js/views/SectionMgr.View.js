export default class SectionManagerView {
    constructor(){
        this.app = document.getElementById('root');
        this.template = `
        <section class="section-manager-container">
            <h3 class="section-manager-title">Restaurant Layout</h3>
            <div class="add-section-container">
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
    }
}