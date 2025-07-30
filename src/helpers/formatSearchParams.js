<<<<<<< HEAD
function getFormatedParams(searchParams) {
     let query = '';
    Object.entries(searchParams).map((params)=>{
        const [key, value] = params;
        if (value) query += `${key}=${value}&`;
    })
    return query;
}

=======
function getFormatedParams(searchParams) {
     let query = '';
    Object.entries(searchParams).map((params)=>{
        const [key, value] = params;
        if (value) query += `${key}=${value}&`;
    })
    return query;
}

>>>>>>> dff7259d9c648c2ed6ef28607dacf6d55f73aca2
export default getFormatedParams;