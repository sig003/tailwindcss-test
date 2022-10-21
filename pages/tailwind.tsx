export default function Tailwind() {
  const contentsBorder = 'w-[300px] h-[192px] border-[1px] rounded border-[#eaeaea] p-6 m-4';
  const message = 'w-[250px] h-[90px] text-xl my-4';
  const code = 'bg-gray-100 rounded-[5px] px-3 text-[1.1rem] w-[188px] h-[45px]';
  return (
    <>
      <div class="h-screen flex flex-col justify-center items-center sm:h-fit mt-12">
        <div class="h-[6rem] flex items-center">
          <h1 class="text-[4rem]">Welcome to <span class="text-blue-500">Next.js!</span></h1>
        </div>
        <div class="h-[36px] text-2xl my-16">Get started by editing <code class={code}>pages/index.tsx</code></div>
        <div class="flex flex-row sm:flex-col">
          <div>
            <div class={contentsBorder}>
              <span class="text-2xl">Documentation →</span>
              <p class={message}>Find in-depth information about Next.js features and API.</p>
            </div>
            <div class={contentsBorder}>
              <span class="text-2xl">Learn →</span>
              <p class={message}>Learn about Next.js in an interactive course with quizzes!</p>
            </div>
          </div>
          <div>
            <div class={contentsBorder}>
              <span class="text-2xl">Examples →</span>
              <p class={message}>Discover and deploy boilerplate example Next.js projects.</p>
            </div>
            <div class={contentsBorder}>
              <span class="text-2xl">Deploy →</span>
              <p class={message}>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </div>
          </div>
        </div>
        <div class="w-[95%] border-solid border-t-2 border-gray-100">aa</div>
      </div>
      
    </>
  );
}