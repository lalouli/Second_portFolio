import Image from 'next/image'
import Logo from '../../public/logo.svg'
import Profile from '@/components/profile'

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col gap-4">
      <div className="flex flex-row  w-full h-[300px] ">
        <div className='flex justify-center items-center h-[80%] w-[10%]'>
          <Image src={Logo} width={100} height={100}  alt="logo"/>
        </div>
      </div>
      <Profile/>
    </main>
  )
}
