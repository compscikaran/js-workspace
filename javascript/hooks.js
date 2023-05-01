const add = (function getAdd() {
    let foo = 1;
    return function() {
        foo = foo + 1;
        return foo;
    }
})();

console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())


const React = (function() {
    let hooks = [];
    let idx = 0;

    function useState(initVal) {
        const state = hooks[idx] || initVal;
        const _idx = idx;
        const setState = (newVal) => {
            hooks[_idx] = newVal;
        }
        idx++;
        return [state, setState];
    }

    function render(Component) {
        idx = 0;
        const c = Component();
        c.render();
        return c;
    }

    function useEffect(cb, depArray) {
        const oldDeps = hooks[idx];
        let hasChanged = true;
        if(oldDeps) {
            hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
        }
        if(hasChanged) cb();
        hooks[idx] = depArray;
        idx++;
    }

    return {useState, render, useEffect}
})();

function Component() {
    const [count, setCount] = React.useState(0);
    const [text, setText] = React.useState('apple');
    React.useEffect(() => {
        console.log('Hello there...')
    }, [text])

    return {
        render: () => console.log({count, text}),
        click: () => setCount(count + 1),
        type: (word) => setText(word)
    }
}

var c = React.render(Component);
c.click();
var c = React.render(Component);
c.type('pear')
var c = React.render(Component);
