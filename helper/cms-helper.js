import {server} from "../config";

const qs = require('qs');

export async function fetchIndexPageProjects(){
    return new Promise(async (resolve, reject) => {
        const response = await fetch(`${server}/api/projects?filter=featured`);
        const data = await response.json();
        resolve(data);
    });
}

export async function fetchAllProjects(){
    return new Promise(async (resolve, reject) => {
        const response = await fetch(`${server}/api/projects`);
        const data = await response.json();
        resolve(data);
    });
}

// export async function fetchAllProcedureSections(){
//     return new Promise((resolve, reject) => {
//         // console.log(`${process.env.CMS_URL}projects?${query}`);
//         fetch(`${process.env.CMS_URL}/api/procedure-sections?populate=*`)
//             .then(response => response.json())
//             .then(data => {
//                 // console.log(data);
//                 resolve(data.data);
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// }

export async function fetchProjectWithSlug(slug){
    return new Promise(async (resolve, reject) => {
        const response = await fetch(`${server}/api/project/${slug}`);
        const data = await response.json();
        resolve(data);
    });
}

export async function fetchEmployees(){
    return new Promise(async (resolve, reject) => {
        const response = await fetch(`${server}/api/employees`);
        const data = await response.json();
        resolve(data);
    });
}

// export async function fetchHeroContent()
// {
//     return new Promise((resolve, reject) => {
//         fetch(`${process.env.CMS_URL}/api/hero-content`)
//             .then(response => response.json())
//             .then(data => {
//                 // console.log(data);
//                 resolve(data.data);
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// }