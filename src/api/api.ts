import { initializeApp } from "firebase/app";
import { getDocs, collection, getFirestore, addDoc } from "firebase/firestore";
import { SetNewManagerClientValueType } from "../redux/reducers/customerReducer";

const firebaseConfig = {
  apiKey: "AIzaSyAkclfHKCVGB2fEJgV4Pgu8DHA9k3bnbHI",
  authDomain: "shopastos.firebaseapp.com",
  projectId: "shopastos",
  storageBucket: "shopastos.appspot.com",
  messagingSenderId: "870188164621",
  appId: "1:870188164621:web:46373c18f49076fb8e5744"
};

const app = initializeApp(firebaseConfig);
const fs = getFirestore(app);

export const itemsAPI = {
  getItems: async (itemsName: string) => {
    const itemsSnapshot = await getDocs(collection(fs, itemsName));
    return itemsSnapshot.docs.map(d => d.data());
  }
};

export const customerAPI = {
  setNewManagerClient: async (data: SetNewManagerClientValueType) => {
    const type = data.hasOwnProperty('basketItems') ? 'orderItems' : data.hasOwnProperty('email') ? 'customeMerch' : 'helpWithQuestion';

    let currentTime = new Date().toLocaleString();
    addDoc(collection(fs, 'managerClients'), {...data, sentAt: currentTime, type});
  }
};