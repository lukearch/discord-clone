import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';

import { Message } from '../../types/message';
import { Profile } from '../../types/profile';
import MessageText from '../Message';
import * as S from './styles';

type Props = {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
};

const Chat = ({ messages, setMessages }: Props) => {
  const router = useRouter();
  const { channel } = router.query;

  const profile: Profile = {
    id: '0309',
    name: 'lukearch',
    avatar: '/assets/images/me.png',
    bio: 'I am a software developer',
    email: 'lukearch.sh@gmail.com',
    phone: '+5511998888888',
    roles: [
      {
        name: 'developer',
        color: useTheme().colors.pallete.azoxo,
      },
    ],
  };

  const scrollToBottom = () => {
    const chat = document.getElementById('chat');
    if (chat) chat.scrollTop = chat.scrollHeight;
  };

  const sendMessage = (text: string) => {
    const message = {
      id: Math.round(Math.random() * 1000).toString(),
      createdAt: new Date(),
      text,
      user: profile,
      channel: channel,
    };

    setMessages([...messages, message]);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value !== '') sendMessage(e.currentTarget.value);
      e.currentTarget.value = '';
    }
  };

  // uma função que retorna um array de mensagens que são do canal atual
  const getMessages = () => {
    return messages.filter(message => message.channel === channel);
  };

  return (
    <S.Chat>
      <S.Messages>
        <S.MessagesContent id="chat">
          <S.InitialContent>
            <S.ContentIcon>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <S.StrokedPath
                  d="M4.02167 16L4.77817 12.25M4.77817 12.25L6.29117 4.75M4.77817 12.25H1.5M4.77817 12.25H12.2404M6.29117 4.75L7.04767 1M6.29117 4.75H3.013M6.29117 4.75H16.63M12.2404 12.25H15.117M12.2404 12.25L11.5867 16M12.2404 12.25L14.6127 1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </S.ContentIcon>
            <S.Title>
              Bem-vindo{'(a)'} a #{channel}!
            </S.Title>
            <S.Subtitle>
              Este é o começo do canal <em>particular</em> #{channel}.
            </S.Subtitle>
          </S.InitialContent>
          {getMessages().map(message => {
            return (
              <MessageText
                key={message.id}
                profile={profile}
                message={message}
                onLoad={scrollToBottom}
              />
            );
          })}
        </S.MessagesContent>
      </S.Messages>
      <S.MessageInput>
        <S.AddIconField>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <S.Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.9184 8C12.9184 7.44772 12.4707 7 11.9184 7C11.3661 7 10.9184 7.44772 10.9184 8V11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H10.9184V16C10.9184 16.5523 11.3661 17 11.9184 17C12.4707 17 12.9184 16.5523 12.9184 16V13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H12.9184V8Z"
              fill="#A5A6A9"
            />
          </svg>
        </S.AddIconField>
        <S.MessageInputField
          autoFocus={true}
          placeholder={`Conversar em #${channel}`}
          onKeyDown={handleEnter}
        />
      </S.MessageInput>
    </S.Chat>
  );
};

export default Chat;
