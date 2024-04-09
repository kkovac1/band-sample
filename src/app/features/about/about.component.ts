import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '@shared/footer/footer.component';
import { NavComponent } from '@shared/nav/nav.component';
import { Member } from './models/member';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NavComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  memberList: Member[] = [
    {
      name: 'Ivana',
      role: 'Vokal',
      image: 'assets/images/singer.jpg',
      description: 'Opis Ivana',
    },
    {
      name: 'Marko',
      role: 'Gitarist',
      image: 'assets/images/guitarist.jpg',
      description: 'Opis Marko',
    },
    {
      name: 'Ivan',
      role: 'Harmonikaš',
      image: 'assets/images/accordionist.jpg',
      description: 'Opis Ivan',
    },
  ];
}
