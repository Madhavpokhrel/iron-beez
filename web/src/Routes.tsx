// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import EquipmentsLayout from 'src/layouts/EquipmentsLayout'
import IronBeezLayout from 'src/layouts/IronBeezLayout'
const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />

      <Route path="/signup" page={SignupPage} name="signup" />

      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />

      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Set wrap={EquipmentsLayout}>
        <Route path="/equipments/new" page={EquipmentNewEquipmentPage} name="newEquipment" />
        <Route path="/equipments/{id:Int}/edit" page={EquipmentEditEquipmentPage} name="editEquipment" />
        <Route path="/equipments/{id:Int}" page={EquipmentEquipmentPage} name="equipment" />
        <Route path="/equipments" page={EquipmentEquipmentsPage} name="equipments" />
      </Set>
      <Set wrap={IronBeezLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
