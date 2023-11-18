import { Loader } from '@mantine/core';
const Loading = () => {
  return (
    <>
    <div className=' h-screen flex justify-center items-center'>
    <Loader color="gray" size="xl" type="dots" />
    </div>
    </>
  )
}

export default Loading