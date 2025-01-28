import {create} from "zustand";
import axios from "axios";

const Base_url = "https://matrix-media.up.railway.app/api/v1/"
const Story_Api= Base_url + "user/story/read";

const StoryStore  = create((set) => ({

    StoryData : null,
    StoryReq: async ()=>{
        try{
            const res = await axios.get( Story_Api, {withCredentials:true} );
            set({StoryData :res.data.stories})
            return true
        }
        catch {
            return false;
        }
    }


}))

export default StoryStore;