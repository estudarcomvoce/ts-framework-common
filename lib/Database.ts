import Logger from './logger';
import BaseServer from './BaseServer';
import { Component, ComponentOptions, ComponentType } from './component/Component';
import { ComponentDescription } from 'component';

export interface DatabaseOptions extends ComponentOptions {
  name?: string;
}

export interface DatabaseDescription extends ComponentDescription {
  name: string;
  status: 'connected' | 'disconnected';
  context: {
    [name: string]: any;
  }
}

export default abstract class Database implements Component {
  logger: Logger;
  type: ComponentType.DATABASE;

  constructor(public options: DatabaseOptions) {
    this.options.name = options.name || this.constructor.name;
    this.logger = options.logger || Logger.getInstance();
  }

  /**
   * Describes the database instance for the framework.
   */
  public describe() {
    return {
      name: this.options.name,
      status: this.isConnected() ? 'connected' : 'disconnected',
      context: { ...this.entities() }
    };
  }

  /**
   * Handles the database unmounting routines and disconnect.
   */
  public onUnmount() {
    this.disconnect();
  };

  /**
   * Handles the database initialization routine, connecting to remote server.
   */
  public async onInit() {
    await this.connect();
  }

  /**
   * Connects the current database.
   */
  public abstract connect(): Promise<DatabaseOptions>;

  /**
   * Disconnects the current database.
   */
  public abstract disconnect(): Promise<void>;

  /**
   * Checks if is currently connected  to database.
   */
  public abstract isConnected(): boolean;

  /**
   * Gets a map of database entities and its unique names (such as table or collection names).
   */
  public abstract entities(): { [name: string]: any };


  /**
   * Mounts the database, registering the models and query builders.
   * 
   * @param server The base server instance.
   */
  public onMount(server: BaseServer) {
  };

  /**
   * Handles server post-initialization, not so relevant for a Database component that will be already initialized.
   * 
   * @param server The base server instance.
   */
  public async onReady(server: BaseServer) {
  };
}
