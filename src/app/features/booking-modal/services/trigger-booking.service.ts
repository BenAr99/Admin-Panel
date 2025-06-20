import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TriggerBookingService {
  private trigger: Subject<void> = new Subject<void>();
  triggerObservable = this.trigger.asObservable();

  triggerChange() {
    this.trigger.next();
  }
}
