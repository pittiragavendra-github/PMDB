
export const genres = [
    
    {_id:"5b21ca3eeb7f6bccd471818",name:"Action"},
    {_id:"6b21ca3eeb7f6bccd471813",name:"Comedy"},
    {_id:"7b21ca3eeb7f6bccd471814",name:"Thriller"},
    
];

export function getGenres(){
    return genres.filter(g =>g);
}