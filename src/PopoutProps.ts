import { WindowFeaturesOptions } from "./WindowFeaturesOptions";

export interface PopoutProps {
    hidden?: boolean;
    name?: string;
    onClose?: () => void;
    onBeforeUnload?: (evt: BeforeUnloadEvent) => string | null | undefined;
    children?: any;
    options?: Partial<WindowFeaturesOptions>;
    html?: string;
    url?: string;
}
