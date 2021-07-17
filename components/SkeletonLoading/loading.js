
const Loading = () => {
  return (
    <div class="border shadow rounded-md w-32 px-2 mx-auto">
      <div class="animate-pulse flex flex-col space-x-1 space-y-2">
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-gray-300 rounded"></div>
        </div>
        <div class="rounded-full bg-gray-300 h-10 w-10 "></div>
        <div class="flex-1 space-y-5 py-1">
          <div class="h-4 bg-gray-300 rounded"></div>
          <div class="h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>

  )
}

export default Loading