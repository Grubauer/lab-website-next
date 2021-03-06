import {server} from "../config";
import {employees} from "../pages/api/employees";
import path from "path";
import fs from "fs";

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

export function getAllProjectSlugs(){
    return projects.map(project => project.attributes.slug);
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


function getAnimationSrcsForProject(slug) {
    const animationSrcs = [];
    const dir = path.resolve(`./public`, `assets/animationFrames/projects/${slug}`);
    const animationFiles = fs.readdirSync(dir);
    animationFiles.forEach(file => {
        if(file.startsWith('.')) return;
        animationSrcs.push(`/assets/animationFrames/projects/${slug}/${file}`);
    });
    return animationSrcs;
}

const projectTypes = {
    WEBAPP: 'Webapp',
    APP: 'App',
    WEBSITE: 'Website',
    OTHER: 'Other'
}

const projects = [
    {
        id: 1,
        attributes:{
            title: 'Smartsced',
            slug: 'smartsced',
            description: 'Mit SmartSced, einem Projekt wo wir mitarbeiteten, erstellen Sie den optimalen Dienstplan f??r Ihre Firma oder Abteilung unter Ber??cksichtigung aller W??nsche Ihrer MitarbeiterInnen mit einem Knopfdruck. Vorgegebene Regeln wie Arbeitszeitgesetz, Ruhezeiten, ??berstunden oder ??hnliches werden automatisiert ber??cksichtigt.',
            type: projectTypes.WEBAPP,
            animation: getAnimationSrcsForProject('smartsced'),
            hero: false,
            featured: true
        }
    },

    {
        id: 3,
        attributes:{
            title: 'Juksel',
            slug: 'juksel',
            description: 'Mit Juksel entscheidest du zusammen mit deinen G??sten welche Musik l??uft, so kommt nie wieder Langeweile auf und du bringst Schwung in deine Bar.',
            type: projectTypes.APP,
            animation: getAnimationSrcsForProject('juksel'),
            hero: true,
            featured: false
        }
    },
    {
        id: 4,
        attributes:{
            title: 'Partytime',
            slug: 'partytime',
            description: 'Mit PartyTime geh??ren hunderte WhatsApp-Chats der Vergangenheit an. Plane ganz einfach deine Party ??ber PartyTime und lade deine Freunde ein. Die App verf??gt bereits ??ber mehr als 2000 Nutzer und wurde bereits 2018 ver??ffentlicht.',
            type: projectTypes.APP,
            animation: getAnimationSrcsForProject('partytime'),
            hero: false,
            featured: true
        }
    },
    // {
    //     id: 5,
    //     attributes:{
    //         title: 'Tischlerei Beyer',
    //         slug: 'beyer',
    //         description: 'Die Tischlerei Beyer wollte einen neuen modernen Webauftritt, wobei der Fokus auf die handgefertigten K??chen der Tischlerei fallen soll. Wir entschieden uns f??r ein zeitloses Design mit hohem Wiedererkennungswert.',
    //         type: projectTypes.WEBSITE,
    //         animation: getAnimationSrcsForProject('beyer'),
    //         hero: false,
    //         featured: false
    //     }
    // },
    // {
    //     id: 6,
    //     attributes:{
    //         title: 'Sqooter',
    //         slug: 'sqooter',
    //         description: 'Die App Sqooter, welche wir gemeinsam mit einem Partner entwickelten, ',
    //         type: projectTypes.APP,
    //         animation: [getAnimationSrcsForProject('sqooter')],
    //         hero: false,
    //         featured: true
    //     }
    // },
    {
        id: 7,
        attributes:{
            title: 'Surface Wizard',
            slug: 'surface',
            description: 'Der Surface Wizard, welcher von uns mitentwickelt wird, bietet eine Oberfl??che zur Anfrageerstellung f??r Kunden von Lohnbeschichtern.',
            type: projectTypes.WEBAPP,
            animation: getAnimationSrcsForProject('surface'),
            hero: false,
            featured: true
        }
    },
    {
        id: 8,
        attributes:{
            title: 'System',
            slug: 'system',
            description: 'Um unser Projekt-Management zu verbessern, haben wir ein eigenes Tool entwickelt: System73. Dieses dient nicht nur als unser CRM, sondern ??bernimmt auch die Rechnungserstellung und Zeitaufzeichnung.',
            type: projectTypes.WEBAPP,
            animation: getAnimationSrcsForProject('system'),
            hero: false,
            featured: false
        }
    },
    {
        id: 9,
        attributes:{
            title: 'INA',
            slug: 'ina',
            description: 'Eine revolutionierende App f??r Feuerwehren, mit deren Hilfe Alarmierungen empfangen werden k??nnen, und zus??tzlich schon genaue Infos zum Einsatz mitgeteilt werden. Zeitgleich mit der Alarmierung wird im Feuerwehrhaus ein Drucker gestartet, welcher eine A4 Seite mit Landkarte und Einsatzinformationen druckt. Des Weiteren k??nnen ??bungen und Co. ??ber die App geplant werden.',
            type: projectTypes.APP,
            animation: getAnimationSrcsForProject('ina'),
            hero: false,
            featured: false
        }
    },


]
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