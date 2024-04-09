import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationItem } from './models/NavigationItem';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  navItems: NavigationItem[] = [
    { title: 'Home', link: '/', icon: 'home' },
    { title: 'About', link: '/about', icon: 'info' },
    { title: 'Reservations', link: '/reservations', icon: 'reservation' },
    { title: 'Contact', link: '/contact', icon: 'mail' },
  ];
}
