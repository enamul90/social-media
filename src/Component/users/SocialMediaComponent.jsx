import { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMediaComponent = () => {
  const [links, setLinks] = useState({
    facebook: "https://facebook.com/Enough2005",
    linkedin: "",
    fiver: "",
    github: "https://github.com/sajib-bd",
  });

  const [editing, setEditing] = useState(null);

  const handleInputChange = (platform, value) => {
    setLinks((prev) => ({
      ...prev,
      [platform]: value,
    }));
  };

  const toggleEdit = (platform) => {
    setEditing((prev) => (prev === platform ? null : platform));
  };

  const platforms = [
    { name: "facebook", icon: <FaFacebook className="text-blue-600" /> },
    { name: "linkedin", icon: <FaLinkedin className="text-blue-500" /> },
    { name: "fiver", icon: <span className="text-green-500 font-semibold">F</span> },
    { name: "github", icon: <FaGithub className="text-black" /> },
  ];

  return (
      <div className="px-8">
        <h2 className="text-xl mt-8 font-semibold mb-4 text-center">Manage Social Media Links</h2>
        <div className="space-y-4 pt-2 ">
          {platforms.map(({ name, icon }) => (
              <div
                  key={name}
                  className="flex items-center gap-4 bg-gray-50 p-4 rounded-md shadow-sm border border-gray-300"
              >
                <div className="text-2xl">{icon}</div>

                {editing === name ? (
                    <input
                        type="text"
                        value={links[name]}
                        onChange={(e) => handleInputChange(name, e.target.value)}
                        placeholder={`Add your ${name} link`}
                        className="flex-grow bg-transparent outline-none text-sm placeholder-gray-400 border-b-2 border-gray-300 focus:border-blue-500"
                    />
                ) : (
                    <span className="flex-grow text-sm text-gray-700">
                {links[name] || `No link added for ${name}`}
              </span>
                )}

                {editing === name ? (
                    <button
                        onClick={() => toggleEdit(null)}
                        className="px-3 py-1 text-sm rounded-md bg-green-500 text-white hover:bg-green-600"
                    >
                      Save
                    </button>
                ) : (
                    <>
                      <a
                          href={links[name] || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-3 py-1 text-sm rounded-md ${
                              links[name]
                                  ? "bg-blue-500 text-white hover:bg-blue-600"
                                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                      >
                        Visit
                      </a>
                      <button
                          onClick={() => toggleEdit(name)}
                          className="px-3 py-1 text-sm rounded-md bg-yellow-500 text-white hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                    </>
                )}
              </div>
          ))}
        </div>
      </div>
  );
};

export default SocialMediaComponent;
