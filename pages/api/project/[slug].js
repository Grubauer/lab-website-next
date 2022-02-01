import {projects} from "../projects";

export default function handler(req, res) {
    const {
        query: { slug },
        method,
    } = req
    console.log(`${method} request for ${slug}`, projects.find(project => project.attributes.slug === slug));

    res.status(200).json(projects.find(project => project.attributes.slug === slug));
}