import {fakeAsync, tick} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should support fakeAsync', fakeAsync(() => {
    let timeoutWorks = false;
    setTimeout(() => timeoutWorks = true);
    tick();
    expect(timeoutWorks).toBeTruthy();
  }));
});
