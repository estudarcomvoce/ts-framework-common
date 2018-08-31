import * as winston from 'winston';
import * as Raven from 'raven';
import * as elasticsearch from 'elasticsearch';
export interface SentryTransportOptions extends Raven.ConstructorOptions {
    dsn: string;
    level?: string;
    levelsMap?: any;
    install?: boolean;
    raven?: Raven.Client;
}
export interface SimpleLoggerOptions extends winston.LoggerOptions {
    sentry?: SentryTransportOptions;
    elasticsearch?: {
        level?: string;
        index?: string;
        indexPrefix?: string;
        transformer?: (data: any) => any;
        client?: elasticsearch.Client;
        clientOpts?: elasticsearch.ConfigOptions;
        [key: string]: any;
    };
    transports?: winston.TransportInstance[];
}
export default class SimpleLogger extends winston.Logger {
    protected static instance: SimpleLogger;
    static DEFAULT_TRANSPORTS: winston.TransportInstance[];
    constructor(options?: SimpleLoggerOptions);
    static getInstance(options?: SimpleLoggerOptions): winston.LoggerInstance;
}
