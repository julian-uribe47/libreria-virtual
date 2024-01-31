import '../components/styles.css'
import { XCircleIcon } from '@heroicons/react/24/outline'

export const BookAside = () => {
  return (
    <aside className="book-aside flex flex-col top-20 fixed right-0 border border-black rounded-lg bg-white">
      <div className=' flex justify-between items-center p-2 bg-white'>
        <h2 className=' font-semibold text-xl bg-white'>Lista de lectura: 0</h2>
        <XCircleIcon  className="h-6 w-6 text-black-500 bg-white"/>
        

      </div>

    </aside>
  )
}
