import { Router } from 'express'
import { Student } from '../models/student'
import jwt from 'jsonwebtoken'

export const studentController = Router()

studentController.post('/login', async(req, res) => {
    const {email, password} = req.body

    if(email === 'mcarbajal@sciodev.com' && password === 'A11111'){
        jwt.sign( {email} , 'super-key-super-secret' , (err, token) => {
            res.status(200).json({token})
        } )
    }else{
        res.status(404).json({message: 'NOT FOUNd'})
    }

})


const checkToken = (req, res, next) => {
    const token = req.headers['authorization']

    jwt.verify(token, 'super-key-super-secret', (err, data)=> {
        if(err){
            res.status(400).json({err})
        }else{
            next()
        }
    })

}

studentController.get('/:id', checkToken,  async (req, res) => {
    const id = req.params.id

    if(id == '1001'){
        let student : Student = {
            age: 23,
            firstName: 'mario',
            lastName: 'carbajal',
            email: 'mcarbajal@sciodev.com',
            id: '1001',
            password: 'A11111'
        }

        res.status(200).json(student)

    }else{
        res.status(404).json({ message: 'Studen NOT FOUND' })
    }
})


