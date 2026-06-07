export type ResourceType = 'official' | 'extension' | 'nonprofit' | 'local';

export interface Resource {
  title: string;
  url: string;
  description: string;
  category: string;
  bestFor: string;
  type: ResourceType;
}
