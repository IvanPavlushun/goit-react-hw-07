import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6818888b5a4b07b9d1cf937d.mockapi.io';

export const fetchContactsThunk = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const addContactThunk = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", contact);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContactThunk = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
      try {
        await axios.delete(`/contacts/${id}`);
        return id;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  