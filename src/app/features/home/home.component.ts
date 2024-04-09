import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '@shared/footer/footer.component';
import { NavComponent } from '@shared/nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
