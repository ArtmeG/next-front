import { ISessionApi } from "@/app/src/modules/session/types/sessionApi";
import SessionStore from "@/app/src/modules/session/store/SessionStore";

class SessionViewModel implements ISessionApi {
    private readonly _sessionStore: SessionStore;

    constructor() {
        this._sessionStore = new SessionStore();
    }

    get sessionStore(): SessionStore {
        return this._sessionStore;
    }
}

export default SessionViewModel;
