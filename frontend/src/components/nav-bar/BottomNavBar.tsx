const BottomNavBar = () => {
  return (
    <>
      {/* for small screens */}
      <nav className="border-tertiary z-10 flex h-9 shrink-0 justify-around border border-t border-dashed border-red-400 bg-red-500 lg:hidden">
        {/* Navigation items go here */}
      </nav>
    </>
  );
};
export default BottomNavBar;