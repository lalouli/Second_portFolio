import Image from 'next/image'
import Logo from '../../public/logo.svg'
import Profile from '@/components/profile'
import Projects from '@/components/projects'
import Skils from '@/components/Skils'

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col gap-8">
      <div className="flex flex-row  w-full h-[200px] lg:h-[300px] ">
        <div className='flex justify-center items-center h-[80%] ml-2 w-[20%] xl:w-[10%]'>
          <Image src={Logo} width={100} height={100}  alt="logo"/>
        </div>
      </div>
      <Profile/>
      <Projects/>
      <Skils/>
    </main>
  )
}
