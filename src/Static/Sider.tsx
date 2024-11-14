import { FaBookOpen } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Sider = () => {
  const nav = [
    {
      id: 1,
      title: "Home",
      path: "/",
      icon: <FaBookOpen />,
    },
    {
      id: 2,
      title: "Create",
      path: "/create",
      icon: <FaBookOpen />,
    },
    {
      id: 3,
      title: "View",
      path: "/view",
      icon: <FaBookOpen />,
    },
  ];

  return (
    <div className="mt-20 ">
      {nav?.map((el) => (
        <div key={el.id}>
          <NavLink
            to={`${el.path}`}
            className={({ isActive }) =>
              isActive
                ? "flex gap-2 bg-black px-4 mx-1 py-2 my-2 rounded-md text-white transition-all duration-300 items-center"
                : "flex gap-2 bg-slate-100 hover:bg-slate-100 px-4 mx-1 py-2 my-2 rounded-md text-black transition-all duration-300 items-center"
            }
          >
            <div>{el.icon}</div>
            <div>{el.title}</div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Sider;
