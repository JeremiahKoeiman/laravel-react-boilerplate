import ReactDOM from "react-dom";
import h from "react-hyperscript";
import Example from "./components/Example";

require('./bootstrap');

const components = {
    Example
}

// get all html elements containing 'data-component' attribute
for (const element of document.querySelectorAll('[data-component]')) {

    const properties = {}
    /*const properties = Object.fromEntries(Object.entries(element.dataset).filter(([key]) => {
        return key.substring(0, 4) === 'prop'
    }))*/

    // Get props from selected html element
    for (const [key, value] of Object.entries(element.dataset)) {
        if (key.substring(0, 4) === 'prop') {
            const property = key.substring(4).toLowerCase()
            properties[property] = value
        }
    }

    // Get data-component from html element
    const dataComponent = element.dataset.component

    // Get component from components object
    const component = components[dataComponent];

    if (component == null)
        console.log(`${dataComponent} component not found`)
    else
        ReactDOM.render(h(component, properties), element);
}
