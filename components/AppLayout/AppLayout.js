export const AppLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div className="flex flex-col text-white overflow-hidden">
        <div className="bg-indigo-500">
          <div>Logo</div>
          <div>cta button</div>
          <div>tokens</div>
        </div>
        <div className=" flex-1 overflow-auto bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
          list of posts
        </div>
        <div className="bg-emerald-500">user info - logout</div>
      </div>
      <div className="bg-green-200">{children}</div>
    </div>
  );
};
