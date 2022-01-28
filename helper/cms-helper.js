const qs = require('qs');

export async function fetchIndexPageProjects(){
    const query = qs.stringify({
        filters: {
            featured: true
        }
    })

    return new Promise((resolve, reject) => {
        // console.log(`${process.env.CMS_URL}projects?${query}`);
        fetch(`${process.env.CMS_URL}/api/projects?${query}&populate=*`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                resolve(data.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export async function fetchAllProjects(){
    const query = qs.stringify({
        filters: {

        }
    })

    return new Promise((resolve, reject) => {
        // console.log(`${process.env.CMS_URL}projects?${query}`);
        fetch(`${process.env.CMS_URL}/api/projects?${query}&populate=*`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                resolve(data.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export async function fetchAllProcedureSections(){
    return new Promise((resolve, reject) => {
        // console.log(`${process.env.CMS_URL}projects?${query}`);
        fetch(`${process.env.CMS_URL}/api/procedure-sections?populate=*`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                resolve(data.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export async function fetchProjectWithId(id){
    const query = qs.stringify({
        filters: {

        }
    })

    return new Promise((resolve, reject) => {
        // console.log(`${process.env.CMS_URL}projects?${query}`);
        fetch(`${process.env.CMS_URL}/api/projects/${id}?populate=*`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                resolve(data.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export async function fetchEmployees(){
    return new Promise((resolve, reject) => {
        fetch(`${process.env.CMS_URL}/api/employees?populate=*`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                resolve(data.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export async function fetchHeroContent()
{
    return new Promise((resolve, reject) => {
        fetch(`${process.env.CMS_URL}/api/hero-content`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                resolve(data.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}