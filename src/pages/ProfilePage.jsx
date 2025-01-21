import Layout from "@/layout/Layout.jsx";
import UserInfo from "@/Component/users/UserInfo.jsx";
import postStore from "@/store/postStore.js";
import {useEffect} from "react";
import PostCard from "@/Component/post/PostCard.jsx";
import authorStore from "@/store/authorStore.js";
import {useParams} from "react-router-dom";
import uiManage from "@/store/uiManage.js";
import FollowersListComponent from "@/Component/users/FollowersListComponent.jsx";
import FollowingListComponent from "@/Component/users/FollowingListComponent.jsx";


const ProfilePage = () => {
    const {user} = useParams();
    const {myPostReq} = postStore()
    const {readProfileReq ,  myProfileData,followersReq ,followingListReq}= authorStore()
    const {profile_tab} = uiManage()


    useEffect(() => {
        (
            async ()=>{
                await readProfileReq(user)
                if(user === "me"){
                    await myPostReq(myProfileData.username);
                    await followersReq(myProfileData.username);
                    await followingListReq(myProfileData.username);

                }
                else {
                    await myPostReq(user);
                    await followersReq(user);
                    await followingListReq(user);
                }
            }
        )()
    }, [user]);

    return (
        <Layout>
            <UserInfo />

            {
                profile_tab === "my-post" && <PostCard/>
            }
            {
                profile_tab === "followers" && <FollowersListComponent />
            }
            {
                profile_tab === "following" && <FollowingListComponent />
            }

        </Layout>
    );
};

export default ProfilePage;