import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
// all our "elements" in React Native need to come from 'react-native' or a third part library for react native.
import { View, Button, FlatList, Linking } from 'react-native';
import styles from './_app.style.js';
import * as Contacts from 'expo-contacts'; // there is no default export from expo-contacts

// let read the contacts from our phone and make phone calls.
export default function App() {

  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    // define an async function and call it immediatly
    const getContacts = async () => {
      // ask for permission
      let { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        let contactList = await Contacts.getContactsAsync();
        setContacts(contactList.data);
      }
    };

    getContacts();

  }, []);

  const call = (contact) => {
    const phoneNumber = contact.phoneNumbers[0].number; // extract number from a contact
    const link = `tel:${phoneNumber}`; // create our Linking URL
    Linking.canOpenURL(link) // ask phone if we can use this linking feature
      .then(() => Linking.openURL(link)) // if so open the url
      .catch(console.error); // or log an error
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={contact => contact.id}
        renderItem={({ item }) => {
          return <Button title={item.name} onPress={() => call(item)} />;
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

