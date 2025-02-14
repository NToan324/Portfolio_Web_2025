interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="bg-[#130a26] w-full min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
