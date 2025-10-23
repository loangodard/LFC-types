export interface Business {
    id: number;
    name: string;
    email: string;

    lfcKey: string;
    whiteLabel: boolean;
    testMode: boolean;

    businessEndpointUrl?: string;

    sendNotificationsToBusiness: boolean;
    sendNotificationsToRecipients: boolean;
}