import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnWebsiteEnterComponent } from './components/modals/on-website-enter/on-website-enter.component';
import { SignUpComponent } from './components/modals/sign-up/sign-up.component';
import { LoginComponent } from './components/modals/login/login.component';
import { ForgotPasswordComponent } from './components/modals/forgot-password/forgot-password.component';
import { ProductDetailComponent } from './components/modals/product-detail/product-detail.component';
import { UserTypeComponent } from './components/modals/user-type/user-type.component';
import { UpdateShippingAddressComponent } from './components/modals/update-shipping-address/update-shipping-address.component';
import { UpdatePaymentMethodComponent } from './components/modals/update-payment-method/update-payment-method.component';
import { CartToCheckoutComponent } from './components/modals/cart-to-checkout/cart-to-checkout.component';
import { HomeComponent } from './components/home/home.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { IndividualDepartmentComponent } from './components/individual-department/individual-department.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';

@NgModule({
  declarations: [
    AppComponent,
    OnWebsiteEnterComponent,
    SignUpComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ProductDetailComponent,
    UserTypeComponent,
    UpdateShippingAddressComponent,
    UpdatePaymentMethodComponent,
    CartToCheckoutComponent,
    HomeComponent,
    DepartmentsComponent,
    IndividualDepartmentComponent,
    CategoryComponent,
    CheckOutComponent,
    OrderConfirmationComponent,
    AccountSettingsComponent,
    PaymentMethodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
