import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import ReactLink from './ReactLink'
import ReadSpecificProduct from './Product/ReadSpecificProduct'
import ReadAllProduct from './Product/ReadAllProduct'
import CreateProduct from './Product/CreateProduct'
import UpdateProduct from './Product/UpdateProduct'
import CreateStudent from './Student/CreateStudent'
import ReadAllStudent from './Student/ReadAllStudent'
import ReadSpecificStudent from './Student/ReadSpecificStudent'
import UpdateStudent from './Student/UpdateStudent'
import Register from './Webusers/Register'
import AdminLogin from './Webusers/AdminLogin'
import UpdatePassword from './Webusers/UpdatePassword'
import MyProfile from './Webusers/MyProfile'
import AdminLogout from './Webusers/AdminLogout'
import ReadAllUsers from './Webusers/ReadAllUsers'
import ForgotPassword from './Webusers/ForgotPassword'

const ReactRouter = () => {

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <ReactLink></ReactLink>
              <Outlet></Outlet>
              <div>This is footer</div>
            </div>
          }>
          <Route index element={<div>Homepage</div>}></Route>
          <Route
            path='products'
            element=
            {
              <Outlet></Outlet>
            }
          >

            <Route index element={<ReadAllProduct />}></Route>
            <Route path=':id' element={<ReadSpecificProduct />}></Route>
            <Route path='create' element={<CreateProduct />}></Route>
            <Route path='update' element={<Outlet></Outlet>}>
              <Route path=":id" element={<UpdateProduct></UpdateProduct>}></Route>
            </Route>
          </Route>

          <Route
            path='students'
            element=
            {
              <Outlet></Outlet>
            }
          >
            <Route index element={<ReadAllStudent />}></Route>
            <Route path=':id' element={<ReadSpecificStudent />}></Route>
            <Route path='create' element={<CreateStudent />}></Route>
            <Route path='update' element={<Outlet />}>
              <Route path=":id" element={<UpdateStudent />}></Route>
            </Route>
          </Route>
          <Route
            path='webuser'
            element=
            {
              <Outlet></Outlet>
            }
          >
            <Route path='admin'
              element={<div>
                <Outlet></Outlet>
              </div>}>

              <Route index element={<div>This is admin dashboard</div>}></Route>
              <Route path='register' element={<div>
                <Register></Register>
              </div>}></Route>
              <Route path='login' element={<div>
                <AdminLogin></AdminLogin>
              </div>}>
              </Route>
              <Route path='logout' element={<div>
                <AdminLogout></AdminLogout>
              </div>}>
              </Route>
              <Route path='my-profile' element={<div>
                <MyProfile></MyProfile>
              </div>}>
              </Route>
              <Route path='update-password' element={<div>
                <UpdatePassword></UpdatePassword>
              </div>}>
              </Route>
              <Route path='forgot-password' element={<div>
                <ForgotPassword></ForgotPassword>
              </div>}>
              </Route>
              <Route path='read-all-users' element={<div>
                <ReadAllUsers></ReadAllUsers>
              </div>}>
              </Route>
            </Route>
          </Route>

        </Route>

      </Routes>
    </div >
  )
}

export default ReactRouter

