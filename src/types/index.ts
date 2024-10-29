
export type Person = {
    id:string,
    name:string,
    last_name:string,
    year:number,
    ocupation:string
}

export type DraftPersona = Omit<Person, 'id'>

