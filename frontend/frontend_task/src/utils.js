import {toast} from 'react-toastify';

//  toast is objector
export const notify = (message , type)=>{
      toast[type](message);
}
export const API_URL = 'http://localhost:3500/api'