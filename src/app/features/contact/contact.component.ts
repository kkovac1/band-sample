import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '@shared/footer/footer.component';
import { NavComponent } from '@shared/nav/nav.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NavComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: [''],
  });

  sendEmail() {
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      console.log('Sending email...');
    }
  }
}
