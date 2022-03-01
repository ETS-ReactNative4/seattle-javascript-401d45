import { useState } from 'react';
import { connect } from 'react-redux';
import { addChannel } from '../../store/channels.store.js';

function ChannelList({channels, addChannel}) {

  const [channelName, setChannelName] = useState('');
  const [channelDescription, setChannelDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addChannel({name: channelName, description: channelDescription});
  }

  function handleChange(e) {
    let {name, value} = e.target;
    if (name === 'name') setChannelName(value);
    if (name === 'description') setChannelDescription(value);
  }

  return (
    <>
     {channels.map(channel => {
       return (
         <div>
          <p>{channel.name}</p>
          <p>{channel.description}</p>
        </div>
       )
     })}
     <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="name" />
        <input name="description" onChange={handleChange} placeholder="description" />
        <button type="submit">Submit</button>
     </form>
    </>
  )
}

// mapping properties from Global Redux state to component Props
const mapStateToProps = (state) => {
  return {
    channels: state.channels,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addChannel: () => dispatch(addChannel),
//   }
// }

const mapDispatchToProps = {
  addChannel,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
