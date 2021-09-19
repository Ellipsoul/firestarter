import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Custom shared components
import { ShellComponent } from './shell/shell.component';

// Custom components used by the shared module can go here
const components:any[] = [ShellComponent];

// Any component that imports this shared module will have access to these
const modules:any[] = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  RouterModule
];

@NgModule({
  declarations: [...components],  // Declare any components to be used in this module
  imports: [...modules],          // Grab all the modules (so that they can be used here)
  // Let all the modules used here be usable in all other places that import it
  exports: [
    ...modules,
    ...components,
  ]
})

export class SharedModule { }
