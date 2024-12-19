export interface User {
  id: string;
  username: string;
  password: string;
  is_online: boolean;
}

export interface Channel {
  id: string;
  name: string;
  messages: Message[];
}

export interface Message {
  id: string;
  from_user: string;
  channel_id: string;
  content: string;
}

export interface UserChannel {
  user_id: string;
  channel_id: string;
}

export interface LoginData {
  username: string;
  password: string;
}
