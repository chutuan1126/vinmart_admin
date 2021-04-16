import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import chatActions from 'redux/ChatRedux';

import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import { styles } from './styles';

const useStyles = makeStyles(styles);

const ConversationListItem = ({ classes, data, handleOnClick }) => {
  const { photo, name, text } = data;
  return (
    <div className={classes.conversationItem} onClick={() => handleOnClick(data)}>
      <img className={classes.conversationPhoto} src={photo} alt="conversation" />
      <div className={classes.conversationInfo}>
        <h1 className={classes.conversationTitle}>{name}</h1>
        <p className={classes.conversationSnippet}>{text}</p>
      </div>
    </div>
  );
}

const ConversationList = ({ open, handleOnClick }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { conversations_list } = useSelector(state => state.chat.contents);

  useEffect(() => {
    dispatch(chatActions.getListConversationRequest('conversations_list', { offset: 20 }));
  }, []);

  if (!open) return null;

  return (
    <div className={classes.root}>
      <List disablePadding className={classes.conversationList}>
        {
          conversations_list.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              classes={classes}
              data={conversation}
              handleOnClick={handleOnClick}
            />
          )
        }
      </List>
    </div>
  );
};

export default ConversationList;
