import { NgModule } from '@angular/core';
import { DropdowndirectiveDirective } from './dropdowndirective.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DropdowndirectiveDirective
    ],
    exports: [
        CommonModule,
        DropdowndirectiveDirective
    ]
})
export class SharedModule {}
