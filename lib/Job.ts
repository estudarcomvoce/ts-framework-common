import BaseServer from './BaseServer';
import { Component, ComponentOptions, ComponentType } from './component/Component';
import { Logger } from './logger';
import { ComponentDescription } from './component';

export interface JobOptions extends ComponentOptions {
  name?: string;
}

export interface JobDescription extends ComponentDescription {
  name?: string;
}

export default abstract class Job implements Component {
  logger: Logger;
  type: ComponentType.JOB;

  constructor(public options: JobOptions) {
    this.options.name = options.name || this.constructor.name;
    this.logger = options.logger || Logger.getInstance();
  }

  public async onInit(server: BaseServer) {
    return this.run(server);
  }

  public describe(): JobDescription {
    return { name: this.options.name };
  }

  public onMount(server: BaseServer) {
    // Do nothing, is a startup only job.
  }

  public onUnmount(server: BaseServer) {
    // Do nothing, is a startup only job.
  }

  /**
   * Starts the job routines.
   * 
   * @param server The server instance
   */
  public abstract async run(server: BaseServer): Promise<void>;
}
