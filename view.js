export default {
    render(templateName, model) {
        templateName = templateName + 'Template';

        const templateElement = document.getElementById(templateName);
        const templateSource = templateElement.innerHTML;
        const renderFn = Handlebars.compile(templateSource);
        console.log('templateName: ', templateName);
        console.log('model: ', model);
        console.log('renderFn: ', renderFn(model.response[0]));
        return renderFn(model.response[0]);
    }
}