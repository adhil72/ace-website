import { kv } from "@vercel/kv";
import { TypeExecom, TypeGallary, TypeEvent, TypePlacements, TypeSemResult, TypeFaculty, TypeGateHolder } from "./type";
import { randomUUID } from "crypto";

// Fetch gallery items and optionally search by title
export const fetchGalleryItems = async ({ search }: { search?: string }) => {
    let data = await kv.get('gallery') as TypeGallary[] || [];
    if (search) data = data.filter((i) => i.title.includes(search));
    return data;
}

// Add a gallery item by appending to the existing array
export const addGalleryItem = async (item: TypeGallary) => {
    item.id = randomUUID();
    const currentData = await kv.get('gallery') as TypeGallary[] || [];
    currentData.push(item);
    return kv.set('gallery', currentData);
}

// Fetch execom members and optionally search by name
export const fetchExecomMembers = async ({ search }: { search?: string }) => {
    let data = await kv.get('execom') as TypeExecom[] || [];
    if (search) data = data.filter((i) => i.name.includes(search));
    return data;
}

// Add an execom member by appending to the existing array
export const addExecomMember = async (item: TypeExecom) => {
    item.id = randomUUID();
    const currentData = await kv.get('execom') as TypeExecom[] || [];
    currentData.push(item);
    return kv.set('execom', currentData);
}

//delete an execom member
export const deleteExecomMember = async (id: string) => {
    const currentData = await kv.get('execom') as TypeExecom[] || [];
    const newData = currentData.filter((i) => i.id !== id);
    return kv.set('execom', newData);
}

// Fetch placements and optionally search by name
export const fetchPlacements = async ({ search }: { search?: string }) => {
    let data = await kv.get('placements') as TypePlacements[] || [];
    if (search) data = data.filter((i) => i.name.includes(search));
    return data;
}

// Add a placement by appending to the existing array
export const addPlacement = async (item: TypePlacements) => {
    item.id = randomUUID();
    const currentData = await kv.get('placements') as TypePlacements[] || [];
    currentData.push(item);
    return kv.set('placements', currentData);
}

// Fetch semester results and optionally search by name
export const fetchSemResults = async ({ search }: { search?: string }) => {
    let data = await kv.get('semresults') as TypeSemResult[] || [];
    if (search) data = data.filter((i) => i.name.includes(search));
    return data;
}

// Add semester result by appending to the existing array
export const addSemResult = async (item: TypeSemResult) => {
    item.id = randomUUID();
    const currentData = await kv.get('semresults') as TypeSemResult[] || [];
    currentData.push(item);
    return kv.set('semresults', currentData);
}

// Fetch events and optionally search by title
export const fetchEvents = async ({ search }: { search?: string }) => {
    let data = await kv.get('events') as TypeEvent[] || [];
    if (search) data = data.filter((i) => i.title.includes(search));
    return data;
}

// Add event by appending to the existing array
export const addEvent = async (item: TypeEvent) => {
    item.id = randomUUID();
    const currentData = await kv.get('events') as TypeEvent[] || [];
    currentData.push(item);
    return kv.set('events', currentData);
}

// Fetch faculty and optionally search by name
export const fetchFaculty = async ({ search }: { search?: string }) => {
    let data = await kv.get('faculty') as TypeFaculty[] || [];
    if (search) data = data.filter((i) => i.name.includes(search));
    return data;
}

// Add faculty by appending to the existing array
export const addFaculty = async (item: TypeFaculty) => {
    item.id = randomUUID();
    const currentData = await kv.get('faculty') as TypeFaculty[] || [];
    currentData.push(item);
    return kv.set('faculty', currentData);
}

// Fetch gate holders and optionally search by name
export const fetchGateHolders = async ({ search }: { search?: string }) => {
    let data = await kv.get('gateholders') as TypeGateHolder[] || [];
    if (search) data = data.filter((i) => i.name.includes(search));
    return data;
}

// Add gate holder by appending to the existing array
export const addGateHolder = async (item: TypeGateHolder) => {
    item.id = randomUUID();
    const currentData = await kv.get('gateholders') as TypeGateHolder[] || [];
    currentData.push(item);
    return kv.set('gateholders', currentData);
}


//delete a gate holder
export const deleteGateHolder = async (id: string) => {
    const currentData = await kv.get('gateholders') as TypeGateHolder[] || [];
    const newData = currentData.filter((i) => i.id !== id);
    return kv.set('gateholders', newData);
}

//delete a faculty member
export const deleteFacultyMember = async (id: string) => {
    const currentData = await kv.get('faculty') as TypeFaculty[] || [];
    const newData = currentData.filter((i) => i.id !== id);
    return kv.set('faculty', newData);
}

//delete a semester result
export const deleteSemResult = async (id: string) => {
    const currentData = await kv.get('semresults') as TypeSemResult[] || [];
    const newData = currentData.filter((i) => i.id !== id);
    return kv.set('semresults', newData);
}

//delete an event
export const deleteEvent = async (id: string) => {
    const currentData = await kv.get('events') as TypeEvent[] || [];
    const newData = currentData.filter((i) => i.id !== id);
    return kv.set('events', newData);
}

//delete a placement
export const deletePlacement = async (id: string) => {
    const currentData = await kv.get('placements') as TypePlacements[] || [];
    const newData = currentData.filter((i) => i.id !== id);
    return kv.set('placements', newData);
}

//delete a gallery item
export const deleteGalleryItem = async (id: string) => {
    const currentData = await kv.get('gallery') as TypeGallary[] || [];
    const newData = currentData.filter((i) => i.id !== id);
    return kv.set('gallery', newData);
}
