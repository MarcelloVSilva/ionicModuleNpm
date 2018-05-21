import { NgModule, ModuleWithProviders } from '@angular/core';
import { UserProvider } from './providers/user';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [],
    exports: []
})
export class UserModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UserModule,
            providers: [UserProvider]
        };
    }
}
