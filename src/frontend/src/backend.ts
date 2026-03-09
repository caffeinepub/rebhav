// Auto-generated backend stub
// This file is intentionally minimal — no backend is used in this project.

import { HttpAgent, Actor, type ActorConfig } from "@icp-sdk/core/agent";

export type backendInterface = Record<string, never>;

export interface ExternalBlob {
  getBytes(): Promise<Uint8Array>;
  onProgress?: (progress: number) => void;
}

export class ExternalBlob {
  private _bytes: Uint8Array;
  onProgress?: (progress: number) => void;

  constructor(bytes: Uint8Array) {
    this._bytes = bytes;
  }

  async getBytes(): Promise<Uint8Array> {
    return this._bytes;
  }

  static fromURL(_url: string): ExternalBlob {
    return new ExternalBlob(new Uint8Array());
  }
}

export interface CreateActorOptions {
  agentOptions?: Partial<ConstructorParameters<typeof HttpAgent>[0]>;
  actorOptions?: Partial<ActorConfig>;
}

export async function createActor(
  _canisterId: string,
  _uploadFile: (file: ExternalBlob) => Promise<Uint8Array>,
  _downloadFile: (bytes: Uint8Array) => Promise<ExternalBlob>,
  _options?: CreateActorOptions,
): Promise<backendInterface> {
  return {} as backendInterface;
}

export const idlFactory = {};
