const Sidebar = ({ isOpen, toggleSidebar, sidebarRef }: any) => {
    return (
      <div
        ref={sidebarRef}
        className={`fixed left-0 top-0 h-full w-[250px] transform bg-gray-800 p-6 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-[20]`} // Higher z-index for the sidebar
      >
        <button className="mb-4 text-xl text-white" onClick={toggleSidebar}>
          Close X
        </button>
        <ul className="space-y-4 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    );
};

export default Sidebar;