import { usePersonStore } from "../store"
import PersonDetails from "./PersonDetails";


export default function PersonList() {
    const person  = usePersonStore(state => state.person);
    return (
        <>
            {
                person.length ? (
                    <>
                        <h2 className="text-3xl font-bold text-center">Listado de persona</h2>
                        <p className="mt-5 mb-10 text-lg text-center">Registro de persona y {''}
                            <span className="font-bold text-lime-600">Monitoreo</span>
                        </p>
                        {
                            person.map(persons => (
                                <PersonDetails persons={persons} key={persons.id} />
                            ))
                            
                        }
                    </>

                ) : (
                    <>
                        <h2 className="text-3xl font-bold text-center">Agrega personas</h2>
                        <p className="mt-5 mb-10 text-lg text-center"> y obten un {''}
                            <span className="font-bold text-lime-600">Seguimiento</span>
                        </p>
                    </>
                )
            }
        </>
    )
}
