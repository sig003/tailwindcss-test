export default function Tailwind() {
  const contentsBorder = 'w-[300px] h-[192px] border-[1px] rounded border-[#eaeaea] p-6 m-4';
  const message = 'w-[250px] h-[90px] text-xl my-4';
  const code = 'bg-gray-100 rounded-[5px] px-3 text-[1.1rem] w-[188px] h-[45px]';
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center sm:h-fit mt-12">
        <div className="h-[7rem] flex items-center">
          <h1 className="text-[4rem] mt-[5rem]">Welcome to <span className="text-blue-500">Next.js!</span></h1>
        </div>
        <div className="h-[40px] text-2xl my-16">Get started by editing <code className={code}>pages/index.tsx</code></div>
        <div className="flex flex-row sm:flex-col">
          <div>
            <div className={contentsBorder}>
              <span className="text-2xl">Documentation →</span>
              <p className={message}>Find in-depth information about Next.js features and API.</p>
            </div>
            <div className={contentsBorder}>
              <span className="text-2xl">Learn →</span>
              <p className={message}>Learn about Next.js in an interactive course with quizzes!</p>
            </div>
          </div>
          <div>
            <div className={contentsBorder}>
              <span className="text-2xl">Examples →</span>
              <p className={message}>Discover and deploy boilerplate example Next.js projects.</p>
            </div>
            <div className={contentsBorder}>
              <span className="text-2xl">Deploy →</span>
              <p className={message}>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </div>
          </div>
        </div>
        <div className="w-[95%] border-solid border-t-2 border-gray-100 mt-28">
          Powered by
          <img src="/vercel.svg" width="72px" height="16px" />
        </div>
      </div>
      
    </>
  );
}