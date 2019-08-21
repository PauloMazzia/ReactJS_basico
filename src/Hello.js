import React from 'react';

/*
function Hello() {
    return (
        <h2>Teste React</h2>
    );
}

export default Hello;
*/

class Hello {
    render() {
        return (
            <h2>Class React</h2>
        );
    }
}

const hello = new Hello();

export default hello;