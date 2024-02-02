
import '../components/styles.css'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { virtualLibraryContext } from '../context'


export const BookAside = () => {
  const context = useContext(virtualLibraryContext)
  
  
  
  return (
    <aside 
    className={`${context.isBookAsideOpen ? 'flex' : 'hidden'} book-aside flex-col top-20 fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className=' flex justify-between items-center p-2 bg-white'>
        <h2 className=' font-semibold text-xl bg-white'>Lista de lectura: {context.count}</h2>
        <div>
        <XCircleIcon  
        onClick={() => context.closeBookAside()}
        className="h-8 w-8 text-black-500 bg-white"/>
        </div>

      </div>

    </aside>
  )
}
