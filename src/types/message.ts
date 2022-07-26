import { Profile } from './profile';

export interface Message {
  id: string;
  text: string;
  createdAt: Date;
  user: Profile;
  channel: string | string[] | undefined;
}
