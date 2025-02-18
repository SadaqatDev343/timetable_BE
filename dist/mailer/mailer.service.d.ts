export declare class MailerService {
    private transporter;
    constructor();
    sendMail(to: string, subject: string, text: string, html?: string): Promise<void>;
}
