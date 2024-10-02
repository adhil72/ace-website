export interface TypeGallary {
    id:string;
    title: string;
    url: string;
}

export interface TypeExecom {
    id:string;
    name: string;
    role: string;
    title: string;
    imageUrl: string;
}

export interface TypePlacements {
    id:string;
    name: string;
    company: string;
    package: string;
    year: string;
}

export interface TypeSemResult {
    id:string;
    name: string;
    sgpa: string;
    imageUrl: string;
    batch: string
}

export interface TypeEvent {
    id:string;
    title: string;
    desc: string;
    date: string;
    time: string;
    venue: string;
    imageUrl: string;
}

export interface TypeFaculty {
    id:string;
    name: string;
    role: string;
    imageUrl: string;
}

export interface TypeGateHolder {
    id:string;
    name: string;
    rank: string;
    imageUrl: string;
}