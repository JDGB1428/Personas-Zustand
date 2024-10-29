import{create} from 'zustand'
import { DraftPersona, Person } from './types'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import{v4 as uuidv4} from 'uuid'

type state = {
    person: Person[];
    activeId: Person['id'];
    addPerson: (data:DraftPersona) => void;
    deletePersonById: (id:Person['id']) => void;
    getPersonaById: (id:Person['id']) => void;
    updatedPerson: (data:DraftPersona) => void;
}

const createPerson = (person:DraftPersona) => {
    return { ...person, id: uuidv4()}
}

export const usePersonStore = create<state>()(
    devtools(
        persist((set) => ({
            person:[],
            activeId: '',
            addPerson: (data) =>{
                const newPerson = createPerson(data);
                set((state) => ({
                    person:[...state.person, newPerson]
                }));
            },
            deletePersonById: (id) => {
                set((state) =>({
                    person: state.person.filter(person => person.id !== id)
                }))
            },
            getPersonaById:(id) => {
                set(() => ({
                    activeId:id
                }))
            },
            updatedPerson: (data) => {
                set((state) => ({
                    person: state.person.map(
                        person => person.id === state.activeId ? {id:state.activeId, ...data} : person),
                    activeId: ''
                }))
            },
        }),{
            name:'persona',
            storage: createJSONStorage(() => sessionStorage)
        })
    )
)