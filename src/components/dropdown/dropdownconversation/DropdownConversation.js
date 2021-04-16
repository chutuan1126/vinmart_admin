import React, { useState } from 'react';
import { styles } from './styles';
import useClickOutside from 'hooks/useClickOutside';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ChatIcons from '@material-ui/icons/Chat';

import { Portal } from 'components/portal';
import { ConversationList, BoxChat } from './components';

const useStyles = makeStyles(styles);

function DropdownConversation() {
  const classes = useStyles();

  const [ref, isOpen, setisOpen] = useClickOutside(false);
  const [boxChats, setBoxChat] = useState([]);

  const handleOnClick = (value) => {
    setisOpen(false);
    const newBoxChat = boxChats
      .filter(i => i.uuid !== value.uuid)
      .filter((i, index) => index < 2);
    setBoxChat([value, ...newBoxChat]);
  }

  const handleOnCloseBoxChat = (value) => {
    const newBoxChat = boxChats.filter(i => i.uuid !== value.uuid);
    setBoxChat(newBoxChat);
  }

  const renderBoxChats = () => {
    if (!boxChats.length) return null;
    return (
      <Portal id='box-chat'>
        {boxChats.map((box, index) => (
          <BoxChat key={box?.id || index.toString()} user={box} handleOnCloseBoxChat={handleOnCloseBoxChat} />
        ))}
      </Portal>
    )
  }

  return (
    <div ref={ref} className={classes.root}>
      <IconButton color="inherit" onClick={() => setisOpen(!isOpen)} className={classes.conversationIcons}>
        <Badge badgeContent={4} classes={{ badge: classes.conversationBadge }}>
          <ChatIcons />
        </Badge>
      </IconButton>
      <ConversationList open={isOpen} handleOnClick={handleOnClick} />
      {renderBoxChats()}
    </div>
  )
};

export default DropdownConversation;
