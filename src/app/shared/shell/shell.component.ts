import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  // Observable listening to different breakpoints and react depending on the viewport size
  isHandset$:Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])  // Found handset display
    .pipe(  // rxJS syntax
      map(result => result.matches),  // Grab only the matches to the breakpoint (there's more in result)
      shareReplay()                   // Subscribe to this observable multiple times
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
