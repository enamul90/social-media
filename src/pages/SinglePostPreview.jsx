import {AiFillDelete, AiFillLike} from "react-icons/ai";
import {FaCommentDots,  FaShare} from "react-icons/fa";
import {IoBookmark, } from "react-icons/io5";
import {MdEmojiEmotions, MdMoreVert} from "react-icons/md";
import {RiEdit2Fill} from "react-icons/ri";


import {useEffect, useState} from "react";
import postStore from "@/store/postStore.js";
import {useParams} from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import toast from "react-hot-toast";


const SinglePostPreview = () => {
    const postId = useParams();


    const {likePostReq, update_Single_Post_data} =postStore()
    const {Single_Post_Req , Single_Post_Data ,  commentListReq, commentList, savePostReq , commentPostReq} = postStore()


    const [hovered, setHovered] = useState(
        {
            id: "",
            status: false,
        }
    );


    const [loader, setLoader] = useState({
        status : false,
        id: null
    });
    const [savePostLoader, setSavePostLoader] = useState({
        status : false,
        id: null
    });

    const [commentListLoader, setCommentListLoader] = useState(false)

    const [commentData, setCommentData] = useState("");
    const [commentId, setCommentId] = useState("");
    const [showPicker, setShowPicker] = useState(false);

    const handleEmojiClick = (emojiData) => {
        let newText = commentData + emojiData.emoji;
        setCommentData(newText);
        setShowPicker(false);
    };

    useEffect(() => {
        (
           async ()=>{
               await Single_Post_Req(postId.postId)
               await  commentListReq(postId.postId)

            }
        )()
    }, [])


    const likePostHandler = async (id,isLike ,Like ) => {
        setLoader({
            status: true,
            id: id
        })
        const res =  await likePostReq(id);


        setLoader({
            status: false,
            id: null
        })

        let like = Like-1
        let add = Like + 1

        if (res && (isLike === true)) {
            update_Single_Post_data(id, { isLike: false, like:like})

        }
        if (res && (isLike ===false)) {
            update_Single_Post_data(id, { isLike: true, like:add})

        }
    }

    const postSaveHandler = async (id , isSave , save)=>{
        setSavePostLoader(
            {
                status: true,
                id:id
            }
        )

        const res =  await savePostReq(id)
        if(res){
            let remove =  save-1
            let add =  save + 1

            if (isSave === true) {
                update_Single_Post_data(id, { isSave: false, postSave:remove})

            }
            if (isSave ===false) {
                update_Single_Post_data(id, { isSave: true, postSave:add})

            }
        }

        setSavePostLoader(
            {
                status: false,
                id:null
            }
        )
    }


    const commentHandler = async (e) => {
        e.preventDefault();

        const data = {
            id : Single_Post_Data[0]._id,
            comment : commentData
        }
        setCommentListLoader(true)
        const res =  await commentPostReq(data)
        if(res){
            setCommentData(" ")
            setCommentListLoader(false)
            await  commentListReq(postId.postId)
        }
        else {
            toast.error("something went wrong")
        }
    }

    const commentEdit = (id, text)=>{
        alert(`${id} ${text}`);
        setCommentData(text)
        setCommentId(id)

    }






    if(Single_Post_Data === null){
        return (
            <>
                <div className="w-full border-b-2 sticky top-0 bg-blur bg-white bg-opacity-20 z-[999999]">
                    <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto my-4 animate-pulse"></div>
                </div>

                {/* Post Skeleton */}
                <div className="pt-3 px-4 m-2 mb-1 rounded shadow-lg border animate-pulse">
                    <div className="flex flex-row ms-3 me-5 gap-3 justify-start items-center">
                        <div className="flex-shrink-0 h-[40px] w-[40px] rounded-full bg-gray-200"></div>
                        <div className="flex-grow space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                        </div>
                    </div>
                    <div className="px-3 mt-2 mb-2 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-[320px] bg-gray-200 rounded"></div>
                    </div>
                    <div className="px-4 py-5 flex flex-row justify-between items-center gap-5">
                        <div className="flex flex-row gap-2 items-center">
                            <div className="h-5 w-5 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-16"></div>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <div className="h-5 w-5 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-16"></div>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <div className="h-5 w-5 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-16"></div>
                        </div>
                        <div className="flex flex-row gap-2 justify-end items-center">
                            <div className="h-5 w-5 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-16"></div>
                        </div>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="bg-white shadow-lg border rounded mx-2 p-3">
                    <div className="overflow-y-auto h-full pb-4 space-y-4">
                        {[1, 2, 3].map((_, idx) => (
                            <div key={idx} className="pt-3 pb-1 px-2 border-b mx-4 space-y-2">
                                <div className="flex flex-row gap-3 items-center">
                                    <div className="h-[35px] w-[35px] rounded-full bg-gray-200"></div>
                                    <div className="flex-grow space-y-1">
                                        <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                    </div>
                                </div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                            </div>
                        ))}
                    </div>

                    {/* Add Comment Section */}
                    <div className="px-5 py-3 bg-white bg-opacity-80">
                        <div className="flex flex-row gap-3 items-center pb-2 border-b-2 border-gray-100">
                            <div className="h-[35px] w-[35px] rounded-full bg-gray-200"></div>
                            <div className="flex-grow h-8 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex flex-row justify-between gap-3 items-center pt-3">
                            <div className="flex flex-row justify-start gap-3 items-center">
                                <div className="h-6 w-6 bg-gray-200 rounded"></div>
                                <div className="h-6 w-6 bg-gray-200 rounded"></div>
                            </div>
                            <div className="h-8 px-3 bg-gray-200 rounded-full w-24"></div>
                        </div>
                    </div>
                </div>
            </>

        )
    }

    else {
        return (
            <>
                <div className="w-full border-b-2 sticky top-0 bg-blur bg-white bg-opacity-20 z-[999999]">
                    <h1 className=" text-center text-xl font-medium text-neutral-700 py-4">Preview Post </h1>
                </div>

                <div

                    className=" pt-3 px-4 m-2 mb-1 rounded shadow-lg  cursor-pointer border relative"
                >
                    {showPicker && (
                        <div className=" absolute top-0 right-0 z-30"
                             onMouseLeave={() => setShowPicker(!showPicker)}
                        >
                            <EmojiPicker className="ms-auto" onEmojiClick={handleEmojiClick}/>
                        </div>
                    )}

                    <div className="flex flex-row ms-3 me-5 gap-3 justify-start items-center">
                        <div
                            className="flex-shrink-0 h-[40px] w-[40px] rounded-full overflow-hidden flex flex-row justify-center items-center shadow"
                        >
                            <img
                                src={Single_Post_Data[0].user.profile}
                                alt="profile image"
                                className="min-w-full min-h-full"
                            />
                        </div>
                        <div className="mb-2 flex-grow">
                            <h2 className="text-base font-medium text-neutral-800">
                                {Single_Post_Data[0].user.fullName}
                                <span className="text-sm font-normal ms-2 text-sky-500">2h ago</span>
                            </h2>
                            <p className="text-base text-neutral-600">{Single_Post_Data[0].user.username}</p>
                        </div>
                    </div>
                    {
                        Single_Post_Data[0].images !== null  && (
                            <h4 className="px-3 mb-2 text-base font-medium text-neutral-700">
                                {Single_Post_Data[0].caption}
                            </h4>
                        )
                    }

                    <div
                        className="px-3 overflow-hidden w-full h-[320px] flex flex-row justify-center items-center bg-gray-50"
                    >
                        {
                            Single_Post_Data[0].images ===null ? (
                                <h4 className="px-3 mb-2 text-base font-medium text-neutral-700">
                                    {Single_Post_Data[0].caption}
                                </h4>
                            ): (
                                <img
                                    src={Single_Post_Data[0].images}
                                    alt="post photo"
                                    className="min-w-full min-h-full"
                                />
                            )
                        }

                    </div>
                    <div className="px-4 py-5 flex flex-row justify-s items-center gap-5 ">
                        <div
                            onClick={
                                () => likePostHandler(Single_Post_Data[0]._id, Single_Post_Data[0].isLike, Single_Post_Data[0].like)
                            }

                            className="flex flex-row gap-2 justify-start items-center"
                        >
                            {
                                loader.status && loader.id === Single_Post_Data[0]._id && (
                                    <div className="loader-dark "></div>
                                )
                            }

                            {
                                loader.id !== Single_Post_Data[0]._id && (

                                    <AiFillLike
                                        className={`${
                                            Single_Post_Data[0].isLike ? "text-sky-600" : "text-neutral-800"
                                        } text-lg`}
                                    />
                                )
                            }

                            <h1
                                className={`text-base font-medium hidden md:block ${
                                    Single_Post_Data[0].isLike ? "text-sky-600" : "text-neutral-800"
                                } `}
                            >
                                {Single_Post_Data[0].like} Like
                            </h1>
                        </div>
                        <div className="flex flex-row gap-2 justify-start items-center">
                            <FaCommentDots className="text-neutral-900 text-lg"/>
                            <h1 className="text-base font-medium text-neutral-900">
                                {Single_Post_Data[0].comment} Comments
                            </h1>
                        </div>
                        <div className="flex flex-row gap-2 justify-start items-center">
                            <FaShare className="text-neutral-900 text-lg"/>
                            <h1 className="text-base font-medium text-neutral-900">
                                Shares
                            </h1>
                        </div>
                        <div
                            onClick={
                                () => postSaveHandler(Single_Post_Data[0]._id,Single_Post_Data[0].isSave ,Single_Post_Data[0].postSave  )
                            }
                            className="flex flex-row flex-grow gap-2 justify-end items-center"
                        >
                            {
                                savePostLoader.status ? <div className="loader-dark"></div> :  <IoBookmark className="text-neutral-900 text-lg"/>
                            }

                            <h1 className="text-base font-medium text-neutral-900">
                                {Single_Post_Data[0].postSave} Save
                            </h1>
                        </div>
                    </div>
                </div>

                <div
                    className="
                      bg-white shadow-lg
                         border rounded  mx-2 p-3
                "
                >

                    <div className="scroll-bar-hidden overflow-y-auto h-full pb-[30px]">
                        {commentList?.map((items, index) => (<div
                            key={index}
                            className="pt-3 pb-1 ps-2 pe-1 border-b mx-4"
                        >
                            <div className="flex flex-row gap-3 justify-start items-start">
                                <div
                                    className="flex-shrink-0 h-[35px] w-[35px] rounded-full overflow-hidden flex justify-center items-center"
                                >
                                    <img
                                        src={items.user.profile}
                                        alt="profile image"
                                        className="min-w-full min-h-full"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-base font-semibold text-neutral-800">
                                        {items.user.fullName}
                                    </h2>
                                    <h2 className="text-base font-normal text-neutral-700">
                                        {items.user.username}
                                    </h2>
                                </div>


                                {/* Edit Comment And Delete Comment*/}

                                {
                                    items.isComment && (
                                        <div
                                            className="cursor-pointer h-[40px] w-[40px] flex flex-col rounded-full
                                                hover:bg-sky-50 items-center justify-center relative
                                                  "
                                        >
                                            <MdMoreVert
                                                onClick={
                                                    () => setHovered({
                                                        id: index,
                                                        status: true,
                                                    })
                                                }
                                                className="text-2xl text-neutral-600 hover:text-neutral-800 font-semibold "
                                            />

                                            {
                                                hovered.id === index && hovered.status === true && (
                                                    <div
                                                        onMouseLeave={
                                                            () => setHovered({
                                                                id: " ",
                                                                status: false,
                                                            })
                                                        }
                                                        className=" py-2  bg-white absolute top-0 right-0 shadow-md border rounded "
                                                    >
                                                        <div
                                                            onClick={
                                                                ()=> commentEdit(items._id, items.comment)

                                                            }
                                                            className="flex items-center gap-3 py-2 px-4 hover:bg-sky-100"
                                                        >
                                                            <RiEdit2Fill
                                                                className="text-lg font-semibold text-neutral-700 hover:text-neutral-800"/>
                                                            <h1 className="text-base font-medium text-neutral-700 hover:text-neutral-800">Edit </h1>
                                                        </div>
                                                        <div className="flex items-center gap-3 py-2 px-4 hover:bg-sky-100">
                                                            <AiFillDelete
                                                                className="text-lg font-semibold text-neutral-700 hover:text-neutral-800"/>
                                                            <h1 className="text-base font-medium text-neutral-700 hover:text-neutral-800">Delete </h1>
                                                        </div>
                                                    </div>
                                                )
                                            }

                                        </div>
                                    )

                                }

                            </div>


                            <p className="text-lg py-2 text-neutral-600 flex-grow">
                                {items.comment}
                            </p>

                        </div>))}
                    </div>

                    <form
                        className="px-5 py-3
                    bg-white bg-opacity-80 bg-blur w-full
                    "
                        onSubmit={commentHandler}
                    >
                        <input
                            value={commentData}
                            onChange={(e) =>setCommentData(e.target.value)}

                            className="text-base text-neutral-800 flex-grow bg-transparent w-full"
                            placeholder="Type Comment"
                        />

                        <div className="flex flex-row justify-between gap-3 items-center border-t mt-3 pt-3">
                            <div
                                onClick={() => setShowPicker((prev) => !prev)}
                            >

                                <MdEmojiEmotions className="text-xl text-neutral-700 cursor-pointer"/>
                            </div>

                            <button
                                type={"submit"}
                                className="
                                px-3 py-1 rounded-full border border-sky-500 text-sky-500
                                hover:bg-sky-500 hover:text-sky-50
                            "
                            >
                                {
                                    commentListLoader ? <div className="loader-dark my-1"></div> : "Comment"
                                }

                            </button>
                        </div>
                    </form>
                </div>


            </>

        )

    }


};

export default SinglePostPreview;


