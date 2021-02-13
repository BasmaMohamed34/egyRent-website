import React from 'react';
import { Chat, Channel, ChannelHeader, Window } from 'stream-chat-react';
import { MessageList, MessageInput, MessageLivestream } from 'stream-chat-react';
import { MessageInputSmall, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibHVja3ktc21va2UtNyIsImV4cCI6MTYxMzE4NTY2MH0.b1aoJ5KYWZ2G1XuwEzEoc3yLSRFKn9LHogIAYCKXAxQ';

chatClient.setUser(
  {
    id: 'lucky-smoke-7',
    name: 'user',
    image: 'https://getstream.io/random_svg/?id=broken-waterfall-5&amp;name=Broken+waterfall',
  },
  userToken,
);

const channel = chatClient.channel('livestream', 'spacex', {
  image: 'https://goo.gl/Zefkbx',
  name: 'SpaceX launch discussion',
});

const Chat = () => (
  <Chat client={chatClient} theme={'messaging light'}>
    <Channel channel={channel} Message={MessageLivestream}>
      <Window hideOnThread>
        <ChannelHeader live />
        <MessageList />
        <MessageInput Input={MessageInputSmall} focus />
      </Window>
      <Thread fullWidth />
    </Channel>
  </Chat>
);

export default Chat;
