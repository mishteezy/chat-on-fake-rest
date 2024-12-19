import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import * as uuid from 'uuid';

import { Channel, LoginData, Message, User } from '../models/chat.model';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private users: User[] = [
    {
      id: 'admin',
      username: 'admin',
      password: 'admin',
      is_online: false,
    },
  ];

  private channels: Channel[] = [];

  getUserList(): Observable<User[]> {
    return of(this.users);
  }

  getChannelList(): Observable<Channel[]> {
    return of(this.channels);
  }

  createUser(data: LoginData): Observable<User> {
    const user = { ...data, id: uuid.v4(), is_online: false };

    this.users.push(user);

    return of(user);
  }

  createChannel(name: string): Observable<Channel[]> {
    const channel = { name: `#${name}`, id: uuid.v4(), messages: [] };

    this.channels.push(channel);

    return this.getChannelList();
  }

  getDialog(id: string): Observable<Channel> {
    return of(this.channels.find((c) => c.id === id)!);
  }

  sendMessage(channel_id: string, from_user: string, content: string) {
    const message: Message = {
      id: uuid.v4(),
      from_user,
      channel_id,
      content,
    };

    this.channels = this.channels.map((ch) => {
      if (ch.id === channel_id)
        return {
          ...ch,
          messages: [...ch.messages, message],
        };
      return ch;
    });

    return of(1);
  }

  login(data: LoginData): Observable<User> {
    const user = this.users.find((u) => {
      const foundUser =
        u.username === data.username && u.password === data.password;

      if (foundUser) u.is_online = true;

      return foundUser;
    });

    return user ? of(user) : throwError('user not found');
  }

  logout(userId: string) {
    const user = this.users.find((user) => user.id === userId);

    if (user) user.is_online = false;

    return of({});
  }
}
