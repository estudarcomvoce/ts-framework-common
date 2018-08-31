import * as winston from 'winston';
import * as Raven from 'raven';
import * as elasticsearch from 'elasticsearch';
import * as SentryTransport from 'winston-raven-sentry';
import * as ElasticsearchTransport from 'winston-elasticsearch';

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
    // Accept other opts
    [key: string]: any;
  },
  transports?: winston.TransportInstance[];
}

export default class SimpleLogger extends winston.Logger {
  protected static instance: SimpleLogger;

  static DEFAULT_TRANSPORTS: winston.TransportInstance[] = [
    new (winston.transports.Console)({
      // TODO: Get from default configuration layer
      level: process.env.LOG_LEVEL || 'silly',
      colorize: true,
    }),
  ];

  public constructor(options: SimpleLoggerOptions = {}) {
    // Prepare default console transport
    const opt = {
      transports: options.transports || SimpleLogger.DEFAULT_TRANSPORTS,
    };

    // Add sentry if available
    if (options.sentry) {
      opt.transports.push(new SentryTransport(options.sentry));
    }

    if (options.elasticsearch) {
      opt.transports.push(new ElasticsearchTransport({ ...options.elasticsearch }));
    }

    super(opt);
  }

  public static getInstance(options?: SimpleLoggerOptions): winston.LoggerInstance {
    if (!this.instance || options !== undefined) {
      const logger = new SimpleLogger(options);

      if (!this.instance) {
        this.instance = logger;
      }
      return logger;
    }
    return this.instance;
  }
}
