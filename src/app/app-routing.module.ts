import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { TestingComponent } from './components/testing/testing.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { IndividualDepartmentComponent } from './components/individual-department/individual-department.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { CategoryComponent } from './components/category/category.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { CartToCheckoutComponent } from './components/modals/cart-to-checkout/cart-to-checkout.component';
import { ForgotPasswordComponent } from './components/modals/forgot-password/forgot-password.component';
import { LoginComponent } from './components/modals/login/login.component';
import { OnWebsiteEnterComponent } from './components/modals/on-website-enter/on-website-enter.component';
import { ProductDetailComponent } from './components/modals/product-detail/product-detail.component';
import { SignUpComponent } from './components/modals/sign-up/sign-up.component';
import { UpdatePaymentMethodComponent } from './components/modals/update-payment-method/update-payment-method.component';
import { UpdateShippingAddressComponent } from './components/modals/update-shipping-address/update-shipping-address.component';
import { UserTypeComponent } from './components/modals/user-type/user-type.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'second-footer', component: FooterComponent },
  { path: 'individual-department', component: IndividualDepartmentComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
  { path: 'payment-methods', component: PaymentMethodsComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'cart-to-checkout', component: CartToCheckoutComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'on-website-enter', component: OnWebsiteEnterComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'update-payment-method', component: UpdatePaymentMethodComponent },
  { path: 'update-shipping-address', component: UpdateShippingAddressComponent },
  { path: 'user-type', component: UserTypeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
