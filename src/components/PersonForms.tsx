import { useForm, SubmitHandler } from "react-hook-form"
import { Person } from "../types";
import { usePersonStore } from "../store";
import ErrorForms from "./ErrorForms";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function PersonForms() {
    const { register, setValue, reset ,formState: { errors }, handleSubmit } = useForm<Person>();
    const { addPerson, activeId, person, updatedPerson } = usePersonStore();

    useEffect(() =>{
        if(activeId){
            const selectId = person.filter(person => person.id === activeId)[0]
            setValue('name',selectId.name)
            setValue('last_name',selectId.last_name)
            setValue('year',selectId.year)
            setValue('ocupation',selectId.ocupation)
        }
    },[activeId])

    const OnSubmit: SubmitHandler<Person> = (data) => {
        if(activeId){
            updatedPerson(data);
            toast.success('La Persona Fue Actualizada Correctamente',{theme:'dark'})
        }else{
            addPerson(data);
            toast.success('La Persona Fue Agregada Correctamente',{theme:'dark'});
        }
        reset()
    }

    return (
        <>
            <h2 className="text-3xl font-bold text-center"> Seguimiento de persona</h2>
            <p className="mt-5 mb-10 text-lg text-center">Registro de persona y {''}
                <span className="font-bold text-lime-600">Seguimiento</span>
            </p>
            <form
                className="px-5 py-5 rounded-md shadow-md"
                onSubmit={handleSubmit(OnSubmit)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm font-bold uppercase">Nombre</label>
                    <input type="text"
                        id="name"
                        {...register('name', { required: 'El nombre es requerido' })}
                        className="w-full p-2 border border-gray-400 rounded-md" />
                    {
                        errors.name && (
                            <ErrorForms>
                                {errors.name.message}
                            </ErrorForms>
                        )
                    }
                </div>

                <div className="mb-5">
                    <label htmlFor="last_name" className="text-sm font-bold uppercase">Apellido</label>
                    <input type="text"
                        {...register('last_name', {
                            required: 'El apellido es requerido'
                        })}
                        id="last_name" className="w-full p-2 border border-gray-400 rounded-md" />
                    {
                        errors.last_name && (
                            <ErrorForms>
                                {errors.last_name.message}
                            </ErrorForms>
                        )
                    }
                </div>

                <div className="mb-5">
                    <label htmlFor="year" className="text-sm font-bold uppercase">Edad</label>
                    <input type="number"
                        {...register('year', {
                            required: 'La edad es requerida'
                        })}
                        id="year" className="w-full p-2 border border-gray-400 rounded-md" />

                    {
                        errors.year && (
                            <ErrorForms>
                                {errors.year.message}
                            </ErrorForms>
                        )
                    }
                </div>
                <div className="mb-5">
                    <label htmlFor="ocupation" className="text-sm font-bold uppercase">Ocupacion</label>
                    <textarea {...register('ocupation', {
                        required: 'La ocupacion es requerida'
                    })}
                        id="ocupation"
                        className="w-full h-20 p-2 border border-gray-400 rounded-md"></textarea>

                    {
                        errors.ocupation && (
                            <ErrorForms>
                                {errors.ocupation.message}
                            </ErrorForms>
                        )
                    }

                </div>
                <button className="w-full p-2 font-bold text-center text-white uppercase rounded-md bg-lime-600">
                    Guardar
                </button>
            </form>
        </>
    )
}
