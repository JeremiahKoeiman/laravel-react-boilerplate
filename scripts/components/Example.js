import React from 'react';
import h from "react-hyperscript"

export default Example;

/**
 * Object -> react.Component
 * @param properties
 * @return react.Component
 */
function Example(properties) {

    const { test } = properties

    console.log(test)
    return h('div', {className: 'container'}, [
        h('div', {className: 'row justify-content-center'}, [
            h('div', {className: 'col-md-8'}, [
                h('div', {className: 'card'}, [
                    h('div', {className: 'card-header'}, [`Example Component ${test}`]),
                    h('div', {className: 'card-body'}, ['I\'m an example component!!'])
                ])
            ])
        ])
    ])

}


