class Store {

    constructor(dispatcher) {
        this._listeners = [];
        this._state = this.getInitialState();
        dispatcher.register(this._onDispatch)
    }

    _onDispatch(action) {
        throw new Error("Not Overriden");
    }

    getInitialState() {
        throw new Error("Not Overriden");
    }

    addListener(listener) {
        this._listeners.push(listener);
    }

    _emitChange() {
        this._listeners.forEach(listener => listener(this._state));
    }

}

export default Store;