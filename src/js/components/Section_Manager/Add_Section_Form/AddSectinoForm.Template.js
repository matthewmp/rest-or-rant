export const addSectionFormTemplate = () => {
    return `
        <form id="form-add-section">
            <input class="inp-add-section-name" placeholder="Enter Section Name" required="">
            <input class="inp-add-section-server-name" placeholder="Enter Server Name">
            <button class="btn-submit-section-form" type="submit">Submit</button>
            <button class="btn-close-add-section-form" type="button">X</button>
        </form>
        `
}