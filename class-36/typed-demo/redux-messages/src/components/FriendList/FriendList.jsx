import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { connect } from 'react-redux'; // a function that connects a function to the store.

import { addFriend } from '../../store/messages.store.js';

function FriendList(props) {
  console.log(props.friends);
  console.log(props.myProp);

  const [open, setDrawer] = useState(false);

  function toggleDrawer() {
    setDrawer(!open);
  }

  return (
    <>
      <Button onClick={toggleDrawer}>Toggle Friends</Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          {props.friends.map(friend => (
            <ListItem key={friend.name}>
              <ListItemButton>
                <ListItemText primary={friend.name} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <ListItemButton onClick={() => props.addFriend({ name: 'New Friend' })}>
              <ListItemText primary="Add Friend" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

// function to map store values to component props
const mapStateToProps = (state) => {
  return {
    friends: state.chat.friends,
  }
}

const mapDispatchToProps = {
  addFriend
}

// connect returns a "Higher Order Function / Component" that takes in another component.
export default connect(mapStateToProps, mapDispatchToProps)(FriendList);
