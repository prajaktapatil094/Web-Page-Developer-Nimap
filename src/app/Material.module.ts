import { NgModule } from  '@angular/core';

import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
imports: [MyMaterialModule,MatButtonModule,MatToolbarModule],
exports: [MyMaterialModule,MatButtonModule,MatToolbarModule],
 
})
 
export  class  MyMaterialModule { }