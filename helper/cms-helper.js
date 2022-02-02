import {server} from "../config";
import {projects} from "../pages/api/projects";
import {employees} from "../pages/api/employees";

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

export function getAllProjects()
{
    return projects;
}

export function getIndexPageProjects()
{
    return projects.filter(project => project.attributes.featured || project.attributes.hero);
}

export function getProjectWithSlug(slug)
{
    return projects.find(project => project.attributes.slug === slug);
}

export function getEmployees()
{
    return employees;
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