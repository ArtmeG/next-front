import { makeObservable, observable } from "mobx";

// 1
// interface IShoppingCartMap extends Record<string, IShoppingCartMapItem> {}
// 2
type ShoppingCartMapType = Record<string, IShoppingCartMapItem>;

interface IShoppingCartMapItem {
    id: string;
    count: number;
}

class SessionStore {
    // @observable private _shoppingCardMap: ShoppingCartMapType = {};

    constructor() {
        makeObservable(this);
    }

    // todo (додати, видалити, і отримати ітем)
}

export default SessionStore;
