import _ from 'lodash' ;
export function paginate(items,pageNumber,pageSize){
    console.log(`items:${items} pagenumber:${pageNumber} pagesize:${pageSize}`);
    const startIndex = (pageNumber - 1) * pageSize;

    console.log( _(items).slice(startIndex).take(pageSize).value());
     return   _(items).slice(startIndex).take(pageSize).value();
    
    // _.slice(items,startIndex);
    // _.take()
    
    
}