import { NgModule, ModuleWithProviders } from '@angular/core';
import { OlaComponent } from './components/ola_component';
import { OlaProvider } from './providers/ola_provider';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        OlaComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        OlaComponent
    ]
})
export class IonicOlaModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicOlaModule,
            providers: [OlaProvider]
        };
    }
}
