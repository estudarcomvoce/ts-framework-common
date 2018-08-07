import Logger from '../logger';
import BaseServer from '../BaseServer';
import { Component, ComponentType } from './Component';
import { ComponentDescription } from './ComponentDescription';
export interface ComponentGroupOptions {
    name?: string;
    logger?: Logger;
    children?: Component[];
}
export interface ComponentGroupDescription extends ComponentDescription {
    name: string;
    context: {
        [key: string]: Component;
    };
}
/**
 * A higher order component to handle a group of children.
 */
export default abstract class ComponentGroup implements Component {
    options: ComponentGroupOptions;
    logger: Logger;
    children: Component[];
    type: ComponentType.GROUP;
    constructor(options: ComponentGroupOptions);
    /**
     * Describes current component group.
     */
    describe(): ComponentGroupDescription;
    /**
     * Handles post mount routines.
     */
    onMount(server: BaseServer): void;
    /**
     * Handles pre initialization routines.
     */
    onInit(server: BaseServer): Promise<void>;
    /**
     * Handles post initialization routines.
     */
    onReady(server: BaseServer): Promise<void>;
    /**
     * Handles post unmount routines.
     */
    onUnmount(server: BaseServer): void;
    /**
     * Gets currently registered components.
     */
    components(): Component[];
    /**
     * Register a new component.
     */
    component(component: Component): number;
}
