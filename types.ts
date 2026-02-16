
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Country {
  name: string;
  code: string;
  description: string;
  image: string;
  popularFor: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum ApplicationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
