// Auto-generated backend type declarations
// This file is intentionally minimal — no backend is used in this project.

import { HttpAgent, type ActorConfig } from "@icp-sdk/core/agent";

export type backendInterface = Record<string, never>;

export declare class ExternalBlob {
  onProgress?: (progress: number) => void;
  constructor(bytes: Uint8Array);
  getBytes(): Promise<Uint8Array>;
  static fromURL(url: string): ExternalBlob;
}

export interface CreateActorOptions {
  agentOptions?: Partial<ConstructorParameters<typeof HttpAgent>[0]>;
  actorOptions?: Partial<ActorConfig>;
}

export declare function createActor(
  canisterId: string,
  uploadFile: (file: ExternalBlob) => Promise<Uint8Array>,
  downloadFile: (bytes: Uint8Array) => Promise<ExternalBlob>,
  options?: CreateActorOptions,
): Promise<backendInterface>;

export declare const idlFactory: Record<string, unknown>;
