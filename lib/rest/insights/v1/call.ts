/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { AnnotationListInstance } from "./call/annotation";
import { CallSummaryListInstance } from "./call/callSummary";
import { EventListInstance } from "./call/event";
import { MetricListInstance } from "./call/metric";




export interface CallContext {

  annotation: AnnotationListInstance;
  summary: CallSummaryListInstance;
  events: EventListInstance;
  metrics: MetricListInstance;

  /**
   * Fetch a CallInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CallInstance
   */
  fetch(callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CallContextSolution {
  sid?: string;
}

export class CallContextImpl implements CallContext {
  protected _solution: CallContextSolution;
  protected _uri: string;

  protected _annotation?: AnnotationListInstance;
  protected _summary?: CallSummaryListInstance;
  protected _events?: EventListInstance;
  protected _metrics?: MetricListInstance;

  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/Voice/${sid}`;
  }

  get annotation(): AnnotationListInstance {
    this._annotation = this._annotation || AnnotationListInstance(this._version, this._solution.sid);
    return this._annotation;
  }

  get summary(): CallSummaryListInstance {
    this._summary = this._summary || CallSummaryListInstance(this._version, this._solution.sid);
    return this._summary;
  }

  get events(): EventListInstance {
    this._events = this._events || EventListInstance(this._version, this._solution.sid);
    return this._events;
  }

  get metrics(): MetricListInstance {
    this._metrics = this._metrics || MetricListInstance(this._version, this._solution.sid);
    return this._metrics;
  }

  fetch(callback?: any): Promise<CallInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new CallInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface CallPayload extends CallResource{
}

interface CallResource {
  sid?: string | null;
  url?: string | null;
  links?: object | null;
}

export class CallInstance {
  protected _solution: CallContextSolution;
  protected _context?: CallContext;

  constructor(protected _version: V1, payload: CallPayload, sid?: string) {
    this.sid = payload.sid;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  sid?: string | null;
  url?: string | null;
  links?: object | null;

  private get _proxy(): CallContext {
    this._context = this._context || new CallContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a CallInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CallInstance
   */
  fetch(callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the annotation.
   */
  annotation(): AnnotationListInstance {
    return this._proxy.annotation;
  }

  /**
   * Access the summary.
   */
  summary(): CallSummaryListInstance {
    return this._proxy.summary;
  }

  /**
   * Access the events.
   */
  events(): EventListInstance {
    return this._proxy.events;
  }

  /**
   * Access the metrics.
   */
  metrics(): MetricListInstance {
    return this._proxy.metrics;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface CallListInstance {
  (sid: string): CallContext;
  get(sid: string): CallContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CallSolution {
}

interface CallListInstanceImpl extends CallListInstance {}
class CallListInstanceImpl implements CallListInstance {
  _version?: V1;
  _solution?: CallSolution;
  _uri?: string;

}

export function CallListInstance(version: V1): CallListInstance {
  const instance = ((sid) => instance.get(sid)) as CallListInstanceImpl;

  instance.get = function get(sid): CallContext {
    return new CallContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Voice`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}



