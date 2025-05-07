import { createContext, useContext } from "react";
import { ISessionApi } from "@/app/src/modules/session/types/sessionApi";

export const SessionContext = createContext<ISessionApi | null>(null);
export const useSessionContext = (): ISessionApi | null => useContext(SessionContext);
