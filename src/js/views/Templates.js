export const SectionMgrTemplate = () => {
    return    `
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