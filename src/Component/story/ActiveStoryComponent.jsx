import {useNavigate} from "react-router-dom";
import {IoMdClose} from "react-icons/io";

const ActiveStoryComponent = () => {
    const navigate = useNavigate();
    const data =[
        {
            "id": 1,
            "name": "John Doe",
            "profileImage": "https://res.cloudinary.com/dwcilnanz/image/upload/v1733841751/cld-sample.jpg",
            "backgroundImage": "https://res.cloudinary.com/dwcilnanz/image/upload/v1733841750/samples/man-on-a-street.jpg"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "profileImage": "https://res.cloudinary.com/dwcilnanz/image/upload/v1733841751/samples/woman-on-a-football-field.jpg",
            "backgroundImage": "https://res.cloudinary.com/dwcilnanz/image/upload/v1733841750/samples/man-on-a-street.jpg"
        },
        {
            "id": 3,
            "name": "Alex Johnson",
            "profileImage": "https://res.cloudinary.com/dwcilnanz/image/upload/v1733841751/cld-sample.jpg",
            "backgroundImage": "https://res.cloudinary.com/dwcilnanz/image/upload/v1733841751/samples/cup-on-a-table.jpg"
        },
        {
            "id": 4,
            "name": "Emily Davis",
            "profileImage": "https://res.cloudinary.com/dwcilnanz/image/upload/v1733841751/cld-sample.jpg",
            "backgroundImage": "https://res.cloudinary.com/dwcilnanz/image/upload/v1733841752/cld-sample-2.jpg"
        },
        {
            "id": 5,
            "name": "Michael Brown",
            "profileImage": "https://res.cloudinary.com/dwcilnanz/image/upload/v1733841751/cld-sample.jpg",
            "backgroundImage": "https://res.cloudinary.com/dwcilnanz/image/upload/v1733841750/samples/man-portrait.jpg"
        }
    ]

    const Header = ()=>{
        return (
            <div className="flex items-center justify-between absolute top-0 w-full ">
                <img
                    src="/image/logo.png"
                    alt="logo"
                    className="h-14 w-auto  cursor-pointer"
                    onClick={() => navigate("/")}
                />

                <IoMdClose
                    className="text-3xl text-gray-600 cursor-pointer"
                />
            </div>
        )
    }

    const StoryActiveCard = ({ story, id }) => {
        return (
            <>
                {
                    story.map((story, index) => {
                        return (
                            <>
                                {
                                    story.id === id && (
                                        <div
                                            key={index}
                                            className="relative  rounded-lg overflow-hidden cursor-pointer
                                                  h-full"
                                        >
                                            {/* Background Image */}
                                            <img
                                                src={story.backgroundImage}
                                                alt="Story"
                                                className="w-full h-full object-cover"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                                            {/* Profile Picture */}
                                            <div
                                                className="absolute top-2 left-2 w-10 h-10 border-2 border-blue-500 rounded-full overflow-hidden">
                                                <img
                                                    src={story.profileImage}
                                                    alt="Profile"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* User Name */}
                                            <p className="absolute bottom-2 left-0 w-full text-center text-white text-base font-medium">
                                                {story.name}
                                            </p>
                                        </div>

                                    )
                                }
                            </>
                        )
                    })
                }
            </>
        );
    };

    const StoryCard = ({ story, id }) => {
        console.log( story.id);
        return (
            <>
                {
                    story.map((story, index) => {
                        return (
                            <>
                                {
                                    story.id === id && (
                                        <div
                                            key={index}
                                            className="relative  rounded-lg overflow-hidden cursor-pointer
                                        h-full"
                                        >
                                            {/* Background Image */}
                                            <img
                                                src={story.backgroundImage}
                                                alt="Story"
                                                className="w-full h-full object-cover"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                                            {/* Profile Picture */}

                                            <div className="align-center
                                            flex flex-col items-center justify-end"
                                            >
                                                <div
                                                    className=" w-16 h-16 border-2 border-blue-500 rounded-full overflow-hidden">
                                                    <img
                                                        src={story.profileImage}
                                                        alt="Profile"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                {/* User Name */}
                                                <p className="mt-2 text-white text-lg font-medium">
                                                    {story.name}
                                                </p>
                                            </div>
                                        </div>

                                    )
                                }
                            </>
                        )
                    })
                }
            </>
        );
    };


    return (
        <div className="container h-screen mx-auto bg-gray-100 ">
            <Header/>
            <div className="grid grid-cols-6 mx-auto h-full gap-4 py-6  max-w-[1200px]">
                <div className="col-span-1 py-36 opacity-25">
                    <StoryCard
                        story={data}
                        id={1}
                    />
                </div>
                <div className="col-span-1 py-36 opacity-65">
                    <StoryCard
                        story={data}
                        id={1}
                    />
                </div>
                <div className="col-span-2">
                    <StoryActiveCard
                        story={data}
                        id={4}
                    />
                </div>
                <div className="col-span-1 py-36 opacity-65">
                    <StoryCard
                        story={data}
                        id={2}
                    />
                </div>
                <div className="col-span-1 py-36 opacity-25">
                    <StoryCard
                        story={data}
                        id={1}
                    />
                </div>

            </div>

        </div>
    );
};

export default ActiveStoryComponent;

