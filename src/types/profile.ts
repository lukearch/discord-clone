import { Role } from './role';

export interface Profile {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  email: string;
  phone: string;
  roles?: Role[];
}
