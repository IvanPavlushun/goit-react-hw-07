import React, { useEffect } from 'react'
import s from "./App.module.css"
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import { useDispatch } from 'react-redux'
import { fetchContactsThunk } from './redux/contactsOps'
  
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={s.box}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList/>
    </div>
  );
}

export default App;
