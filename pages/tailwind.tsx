export default function Tailwind() {

  const contentsBorder = 'w-[300px] h-[192px] border-[1px] rounded border-[#eaeaea] p-6';
  return (
      <>
        <div class="h-screen flex flex-col justify-center items-center">
          <div class="h-[15rem] flex items-center">
            <h1 class="text-[4rem]">Welcome to <span class="text-blue-500">Next.js!</span></h1>
          </div>
          <div class="h-[15rem] text-2xl">Get started by editing <code class="bg-gray-100 rounded-[5px] px-3 text-[1.1rem] w-[188px] h-[45px]">pages/index.tsx</code></div>
          <div class="flex flex-row">
            <div>
              <div class={contentsBorder}>
                <span class="text-2xl">Documentation →</span>
              </div>
              <div class={contentsBorder}>Learn →</div>
            </div>
            <div>
              <div class={contentsBorder}>Examples →</div>
              <div class={contentsBorder}>Deploy →</div>
            </div>
          </div>
        </div>
      </>
  )
}