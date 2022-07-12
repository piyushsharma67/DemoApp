import { createAsyncThunk, createSlice ,PayloadAction} from '@reduxjs/toolkit';
import signupUser from './fakeAuthApi';


interface Auth {
  verified: boolean;
  token: string;
  fetching: boolean;
  email:string,
  name:''
}
const initialState = {
  verified: false,
  token: '',
  fetching: false,
  email:'',
  name:''
} as Auth;


export const getAuthDetails = createAsyncThunk(
  'fetchAuth/getAuthDetails',
  async () => {
    console.log("i was called")
    return signupUser()
      .then((res: any) => {
        console.log("res",res)
        return res})
      .catch(err=>{

      })
  },
);

const AuthReducer = createSlice({
  name: 'fetchAuth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAuthDetails.pending,state=>{
        state.fetching=true
    }),
    builder.addCase(getAuthDetails.fulfilled,(state,action:PayloadAction<any>)=>{
        state.fetching=false
        if(action.payload.status===200){
            state.verified=true,
            state.token=action.payload.body.token,
            state.email=action.payload.body.email,
            state.name=action.payload.body.name
        }
    }),
  builder.addCase(getAuthDetails.rejected,state=>{
    state.fetching=false
  })
  },
})

export const { } = AuthReducer.actions;
export default AuthReducer.reducer;