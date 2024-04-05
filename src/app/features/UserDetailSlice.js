import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

//create action
export const createUser = createAsyncThunk("createUser", async (data,{rejectWithValue})=>{
const response = await fetch ("https://660efba6356b87a55c509dd7.mockapi.io/CRUD",{
    method: "POST",
    headers:{
        "Content-Type": "application/json",
    },
    body:JSON.stringify(data)
});
try {
    const result = await response.json();
    return result;
    
} catch (error) {
    return rejectWithValue(error);
}

}
)

export const userDetail = createSlice({
    name: "userDetail",
    initialState:{
        users: [],
        loading: false,
        error:null,
    },
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending,(state)=>{
            state.loading = true;
        }),
       builder.addCase(createUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.users.push(action.payload);
        }),
        builder.addCase(createUser.rejected,(state,action)=>{
            state.loading = false;
            state.users = action.payload;
        });
    }
   
});

export default userDetail.reducer;