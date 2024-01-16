import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import CreateProduct from './Product/CreateProduct'
import ReadAllProduct from './Product/ReadSpecificProduct'
import ReadSpecificProduct from './Product/ReadSpecificProduct'
import ReadAllStudent from './Student/ReadAllStudent'
import CreateStudent from './Student/CreateStudent'

const MyRoutes = () => {
    return (
        <div><Routes>
            <Route path='/' element={<div>This is Homepage</div>}>
            </Route>
            <Route path='/products/create' element={<CreateProduct />}>
            </Route>
            <Route path='/products' element={<ReadAllProduct />}>
            </Route>
            <Route path='/products/:id' element={<ReadSpecificProduct />}>
            </Route>
            <Route path='/students/create' element={<CreateStudent />}>
            </Route>
            <Route path='/students' element={<ReadAllStudent />}>
            </Route>
            <Route path='/*' element={<div>404 error</div>}>
            </Route>
            
           
        </Routes></div>
    )
}

export default MyRoutes