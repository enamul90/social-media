import {AiFillDelete, AiFillLike} from "react-icons/ai";
import {FaCommentDots, FaImages, FaShare} from "react-icons/fa";
import {IoBookmark, IoClose} from "react-icons/io5";
import {MdEmojiEmotions} from "react-icons/md";
import {RiEdit2Fill} from "react-icons/ri";

import profilePhoto from "/public/image/profile.jpg"

const SinglePostPreview = () => {


    return (

        <>
            <div className="w-full border-b-2 sticky top-0 bg-blur bg-white bg-opacity-20 z-[999999]">
                <h1 className=" text-center text-xl font-medium text-neutral-700 py-3">Preview Post </h1>
            </div>

            <div

                className=" pt-3 m-2 mb-1 rounded shadow-lg  cursor-pointer border"
            >
                <div className="flex flex-row ms-3 me-5 gap-3 justify-start items-center">
                    <div
                        className="flex-shrink-0 h-[40px] w-[40px] rounded-full overflow-hidden flex flex-row justify-center items-center shadow"
                    >
                        <img
                            src={profilePhoto}
                            alt="profile image"
                            className="min-w-full min-h-full"
                        />
                    </div>
                    <div className="mb-2 flex-grow">
                        <h2 className="text-base font-medium text-neutral-800">
                            John Doe
                            <span className="text-sm font-normal ms-2 text-sky-500">2h ago</span>
                        </h2>
                        <p className="text-base text-neutral-600">@johndoe</p>
                    </div>
                </div>
                <h4 className="px-3 mb-2 text-base font-medium text-neutral-700">
                    Sample caption for this post.
                </h4>
                <div
                    className="px-3 overflow-hidden w-full h-[320px] flex flex-row justify-center items-center">
                    <img
                        src={profilePhoto}
                        alt="post photo"
                        className="min-w-full min-h-full"
                    />
                </div>
                <div className="px-4 py-5 flex flex-row justify-s items-center gap-5">
                    <div className="flex flex-row gap-2 justify-start items-center">
                        <AiFillLike className="text-neutral-800 text-lg"/>
                        <h1 className="text-base font-medium text-neutral-800">10 Likes</h1>
                    </div>
                    <div className="flex flex-row gap-2 justify-start items-center">
                        <FaCommentDots className="text-neutral-900 text-lg"/>
                        <h1 className="text-base font-medium text-neutral-900">5 Comments</h1>
                    </div>
                    <div className="flex flex-row gap-2 justify-start items-center">
                        <FaShare className="text-neutral-900 text-lg"/>
                        <h1 className="text-base font-medium text-neutral-900">3 Shares</h1>
                    </div>
                    <div className="flex flex-row flex-grow gap-2 justify-end items-center">
                        <IoBookmark className="text-neutral-800 text-lg"/>
                        <h1 className="text-base font-medium text-neutral-800">Save</h1>
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
                    {[1, 2, 3, 4].map((_, index) => (<div
                        key={index}
                        className="pt-3 pb-1 ps-2 pe-1 border-b mx-4"
                    >
                        <div className="flex flex-row gap-3 justify-start items-start">
                            <div
                                className="flex-shrink-0 h-[35px] w-[35px] rounded-full overflow-hidden flex justify-center items-center"
                            >
                                <img
                                    src={profilePhoto}
                                    alt="profile image"
                                    className="min-w-full min-h-full"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-base font-semibold text-neutral-800">
                                    John Doe
                                </h2>
                                <h2 className="text-base font-normal text-neutral-700">
                                    @johndoe
                                </h2>
                            </div>
                        </div>

                        <div className="mt-2 flex flex-wrap items-end">
                            <p className="text-sm text-neutral-600 flex-grow">
                                This is a demo comment.
                            </p>

                            <div className="flex justify-end items-center gap-3 my-1">
                                <RiEdit2Fill className="text-lg font-semibold"/>
                                <AiFillDelete className="text-lg font-semibold"/>
                            </div>
                        </div>
                    </div>))}
                </div>

                <div
                    className="px-5 py-3
                 bg-white bg-opacity-80 bg-blur w-full
                 "
                >
                    <div className="flex flex-row gap-3 justify-center items-start pb-2 border-b-2 border-gray-100">
                        <div
                            className="
                          flex-shrink-0 h-[35px] w-[35px] rounded-full overflow-hidden
                         flex flex-row justify-center items-center"
                        >
                            <img
                                src={profilePhoto}
                                alt="profile image"
                                className="min-w-full min-h-full"
                            />
                        </div>

                        <textarea
                            rows={2}
                            className="text-base text-neutral-800 flex-grow bg-transparent w-full"
                            placeholder="Type Comment"
                        />
                    </div>


                    {/*<div className="w-full  flex justify-center items-center overflow-hidden relative">*/}
                    {/*    <button*/}
                    {/*        className="*/}
                    {/*          h-[35px] w-[35px] bg-white rounded-full cursor-pointer absolute top-3 right-3*/}
                    {/*         justify-center items-center hover:shadow*/}
                    {/*    "*/}
                    {/*    >*/}
                    {/*        <IoClose*/}
                    {/*            className="mx-auto text-2xl font-semibold text-neutral-800"*/}
                    {/*        />*/}
                    {/*    </button>*/}
                    {/*    <img*/}
                    {/*        src="https://via.placeholder.com/250"*/}
                    {/*        alt="Uploaded Device"*/}
                    {/*        className="min-w-full min-h-full"*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <div className="flex flex-row justify-between gap-3 items-center pt-3">
                        <div className="flex flex-row justify-start gap-3 items-center">
                            <div className="flex flex-row items-center overflow-hidden w-fit">
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{
                                        position: "absolute",
                                        width: "20px",
                                        height: "100%",
                                        opacity: 0,
                                        cursor: "pointer",
                                    }}
                                />
                                <FaImages className="text-xl text-neutral-700 cursor-pointer"/>
                            </div>
                            <MdEmojiEmotions className="text-xl text-neutral-700 cursor-pointer"/>
                        </div>

                        <button
                            className="
                                px-3 py-1 rounded-full border border-sky-500 text-sky-500
                                hover:bg-sky-500 hover:text-sky-50
                            "
                        >
                            Comment
                        </button>
                    </div>
                </div>
            </div>


        </>

    )


};

export default SinglePostPreview;


