import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgStyle } from '@angular/common';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { GetApiComponent } from './components/API/get-api/get-api.component';
import { PostApiComponent } from './components/API/post-api/post-api.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';
import { CustomerComponent } from './components/API/customer/customer.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './guard/auth.guard';
import { NgTempNgContainerComponent } from './components/ng-temp-ng-container/ng-temp-ng-container.component';
import { CrudLocalStorageComponent } from './components/crud-local-storage/crud-local-storage.component';
import { ShowLessMoreComponent } from './reusable/show-less-more/show-less-more.component';
import { MyTableComponent } from './reusable/my-table/my-table.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'admin',
                component: AdminComponent
            },
            {
                path: 'dataBinding',
                component: DataBindingComponent
            },
            // Directive
            {
                path: 'ng-class',
                component: NgClassComponent
            },
                {
                path: 'ng-for',
                component: NgForComponent
            },
            {
                path: 'ng-if',
                component: NgIfComponent
            },
            {
                path: 'ng-style',
                component: NgStyleComponent
            },
            {
                path: 'control-flow',
                component: ControlStatementComponent
            },
            // Signal
            {
                path: 'signal',
                component: SignalComponent
            },
            {
                path: 'Linked-signal',
                component: LinkedSignalComponent
            },
            // Form
            {
                path: 'template-form',
                component: TemplateFormComponent
            },
            {
                path: 'reactive-form',
                component: ReactiveFormComponent
            },
            {
                path: 'get-api',
                component: GetApiComponent
            },
            {
                path: 'post-api',
                component: PostApiComponent
            },
            {
                path: 'resource-api',
                component: ResourceApiComponent
            },
            {
                path: 'customer',
                component: CustomerComponent
            },
            {
                path: 'life-cycle',
                component: LifeCycleComponent
            },
            {
                path: 'ng-container',
                component: NgTempNgContainerComponent
            },
            {
                path: 'crud-localstorage',
                component: CrudLocalStorageComponent
            },
            {
                path: 'show-less-more',
                component: ShowLessMoreComponent
            },
                        {
                path: 'my-table',
                component: MyTableComponent
            },
        ]

    },


    
];
