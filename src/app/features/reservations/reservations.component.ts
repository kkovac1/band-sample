import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '@shared/footer/footer.component';
import { NavComponent } from '@shared/nav/nav.component';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, NavComponent, FooterComponent],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationsComponent {}
