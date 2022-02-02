import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
    res.status(200).json(employees)
}

export const employees = [
    {
        id: 1,
        name: 'David Gangl',
        img: '/assets/employees/Gangl.jpg',
    },
    {
        id: 2,
        name: 'Max Grubauer',
        img: '/assets/employees/Max.jpg',
    },
    {
        id: 3,
        name: 'Paul Krenn',
        img: '/assets/employees/Paul.jpg',
    },
    {
        id: 4,
        name: 'Julian Kronlachner',
        img: '/assets/employees/Kroni.jpg',
    },
    {
        id: 5,
        name: 'Paul Wiesinger',
        img: '/assets/employees/Wieses.jpg',
    },

]