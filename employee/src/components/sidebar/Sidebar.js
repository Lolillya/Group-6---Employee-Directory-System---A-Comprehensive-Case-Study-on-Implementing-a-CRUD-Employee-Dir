import React from "react";

const Sidebar = () => {
  return (
    <>
      <section className="flex flex-col fixed max-h-full h-full justify-between border-l-lime-50 border w-64 bg-slate-200">
        <div className="flex flex-col">
          <div className="flex items-center p-4">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 me-3"
              alt="FlowBite Logo"
            />
            <span className=" font-bold text-lg">Sevida .Co</span>
          </div>
          <span className="p-4 cursor-pointer hover:bg-slate-400">
            Dashboard
          </span>
          <span className="p-4 cursor-pointer bg-slate-400">Employees</span>
          <span className="p-4 cursor-pointer hover:bg-slate-400">Reports</span>
          <span className="p-4 cursor-pointer hover:bg-slate-400">Inbox</span>
        </div>
        <div className="flex flex-col">
          <span className="p-4 cursor-pointer hover:bg-slate-400">Logout</span>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
