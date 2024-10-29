
import { toast } from 'react-toastify'
import { usePersonStore } from '../store'
import { Person } from '../types'
import{ PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/solid'

type PersonDetailsProps = {
    persons: Person
}



export default function PersonDetails({ persons }: PersonDetailsProps) {
    
    const{deletePersonById, getPersonaById} = usePersonStore();
    
    const handleDeletePerson = () =>{
        deletePersonById(persons.id)
        toast.error('La Persona Ha sido Eliminada Correctamente',{ theme:'dark'});
    }
    return (
        <div className='items-center p-5 my-5 rounded-md shadow-md md:flex md:justify-between'>
            <div className='mx-5 mt-3'>
                <p className='font-bold'><span className='text-sm font-bold uppercase text-lime-500'>ID:</span> {persons.id}</p>
                <p className='font-bold'><span className='text-sm font-bold uppercase text-lime-500'>Nombre:</span> {persons.name}</p>
                <p className='font-bold'><span className='text-sm font-bold uppercase text-lime-500'>Apellido:</span> {persons.last_name}</p>
                <p className='font-bold'><span className='text-sm font-bold uppercase text-lime-500'>Año:</span> {persons.year}</p>
                <p className='font-bold'><span className='text-sm font-bold uppercase text-lime-500'>Ocupación:</span> {persons.ocupation}</p>
            </div>
            <div className='mx-5 mt-3 md:flex md:gap-2'>
                <button onClick={()=> handleDeletePerson()}>
                    <XCircleIcon className='w-8 h-8 font-bold text-red-600'/>
                </button>
                <button onClick={()=> getPersonaById(persons.id)}>
                    <PencilSquareIcon className='w-8 h-8 font-bold'/>
                </button>
            </div>
        </div>
    )
}
