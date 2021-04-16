import React, { useEffect, useRef, useState } from 'react';
import { io } from "socket.io-client";
import moment from 'moment';
import { ReactMic } from 'react-mic';
import classNames from 'classnames';
import { styles } from './styles';

import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

function ToolbarButton({ classes, name, icon, handleOnClick }) {
  return (
    <i onClick={() => handleOnClick(name)} className={classNames(classes.toolbarButton, icon)} />
  );
}

function Toolbar({ classes, user, rightItems }) {
  return (
    <div className={classes.toolbar}>
      <Avatar className={classes.avatar} alt={user.name} src={user.photo}>T</Avatar>
      <h1 className={classes.toolbarTitle}>{user?.name || 'User'}</h1>
      <div className={classes.rightItems}>{rightItems}</div>
    </div>
  );
}

function Message({ classes, data, isMine, startsSequence, endsSequence, showTimestamp }) {

  const friendlyTimestamp = moment(data.timestamp).format('LLLL');
  const withClassName = classNames(
    classes.message,
    {
      mine: isMine,
      start: startsSequence,
      end: endsSequence
    }
  );

  return (
    <div
      className={withClassName}>
      {
        showTimestamp &&
        <div className={classes.timestamp}>
          {friendlyTimestamp}
        </div>
      }

      <div className='bubbleContainer'>
        <div className='bubble' title={friendlyTimestamp}>
          {data.message}
        </div>
      </div>
    </div>
  );
}

function Compose({ classes, rightItems, record, onData, onStop, timeRecord, handleSubmit }) {
  const refInput = useRef();

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSubmit(refInput.current.value);
      refInput.current.value = '';
    }
  }

  const formatTime = (count) => {
    let minutes = 0, seconds = 0;
    seconds = count % 60;
    minutes = count >= 60 ? (count - seconds) / 60 : 0;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
  }

  return (
    <div className={classes.compose}>
      <div className={classes.composeInput}>
        <ReactMic
          record={record}
          className={classNames(classes.soundWave, record && classes.showMic)}
          onStop={onStop}
          onData={onData}
          strokeColor="#20f"
          backgroundColor="#f0f0f0" />
        {!record && <input
          ref={refInput}
          type="text"
          className={classes.styleInput}
          placeholder="Type a message"
          onKeyPress={onKeyPress}
        />}
        {!record
          ? <ToolbarButton classes={classes} key="emoji" icon="ion-ios-happy" />
          : <span className={classes.timeRecord}>{formatTime(timeRecord)}</span>
        }
      </div>
      <div className={classes.toolbarCompose}>{rightItems}</div>
    </div>
  );
}

const ENDPOINT = 'http://localhost:5000';

let timer;
let socket;
let genId = 10;

function BoxChat({ user, handleOnCloseBoxChat }) {
  const classes = useStyles();

  const refMessageList = useRef();
  const [timeRecord, setTimeRecord] = useState(0);
  const [record, setRecord] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('join', { name: 'admin', room: '123' }, (error) => {
      if (error) {
        console.log(error);
      }
    });

    socket.on('message', ({ text }) => {
      if (!text.id) return;
      setMessages(messages => [...messages, text]);
    });

    socket.on("roomData", ({ users }) => {
    });
  }, []);

  useEffect(() => {
    if (!record) return;
    timer = setInterval(() => {
      setTimeRecord(timeRecord + 1);
    }, 1000);
    return () => timer && clearInterval(timer);
  }, [record, timeRecord]);

  useEffect(() => {
    if (!refMessageList || !messages.length) return;
    refMessageList.current.scrollTop = refMessageList.current.scrollHeight;
  }, [messages]);

  const setRecording = () => {
    setRecord(!record);
  }

  const onData = (recordedBlob) => {
  }

  const onStop = (recordedBlob) => {
    setTimeRecord(0);
  }

  useEffect(() => {
    getMessages();
  }, [])


  const getMessages = () => {
    var tempMessages = [
      {
        id: 1,
        is_user: true,
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 2,
        is_user: false,
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
      {
        id: 3,
        is_user: false,
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 4,
        is_user: true,
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
      {
        id: 5,
        is_user: true,
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 6,
        is_user: true,
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
      {
        id: 7,
        is_user: false,
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 8,
        is_user: false,
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
      {
        id: 9,
        is_user: true,
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      },
      {
        id: 10,
        is_user: false,
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },
    ]
    setMessages([...messages, ...tempMessages])
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.is_user;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.is_user === isMine;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.is_user === isMine;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          data={current}
          isMine={isMine}
          classes={classes}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          startsSequence={startsSequence}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  }

  const handleOnClick = (key) => {
    switch (key) {
      case 'close':
        handleOnCloseBoxChat(user);
        break;
      case 'audio':
        setRecording();
        break;
      default: break;
    }
  }

  const handleSubmit = (value) => {
    const message = {
      id: genId++,
      is_user: true,
      message: value,
      timestamp: new Date().getTime()
    }
    socket.emit('sendMessage', message, () => { });
    // setMessages([...messages, mes]);
  }

  return (
    <div className={classes.messageWrapper}>
      <Toolbar
        classes={classes}
        user={user}
        rightItems={[
          <ToolbarButton classes={classes} key="close" name="close" icon="ion-md-close" handleOnClick={handleOnClick} />,
          <ToolbarButton classes={classes} key="video" name="video" icon="ion-ios-videocam" handleOnClick={handleOnClick} />,
          <ToolbarButton classes={classes} key="phone" name="phone" icon="ion-ios-call" handleOnClick={handleOnClick} />
        ]}
      />

      <div ref={refMessageList} className={classes.messageListContainer}>{renderMessages()}</div>

      <Compose
        classes={classes}
        record={record}
        onData={onData}
        onStop={onStop}
        timeRecord={timeRecord}
        handleSubmit={handleSubmit}
        rightItems={[
          <ToolbarButton classes={classes} key="image" name="image" icon="ion-ios-image" handleOnClick={handleOnClick} />,
          <ToolbarButton classes={classes} key="document" name="document" icon="ion-ios-document" handleOnClick={handleOnClick} />,
          <ToolbarButton classes={classes} key="audio" name="audio" icon="ion-ios-mic" handleOnClick={handleOnClick} />,
        ]} />
    </div>
  );
}

export default BoxChat;