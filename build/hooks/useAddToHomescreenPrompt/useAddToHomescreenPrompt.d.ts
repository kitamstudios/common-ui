export interface IBeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed';
        platform: string;
    }>;
    prompt(): Promise<void>;
}
export declare function useAddToHomescreenPrompt(): [IBeforeInstallPromptEvent | null, () => void];
