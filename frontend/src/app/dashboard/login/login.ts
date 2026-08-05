import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  showPassword = false;
  isLoading = false;
  returnUrl = '/admin/home';

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin/home']);
    }
    const queryReturn = this.route.snapshot.queryParams['returnUrl'];
    if (queryReturn) {
      this.returnUrl = queryReturn;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.credentials.email || !this.credentials.password) {
      this.toastService.warning('Please enter your email and password.');
      return;
    }

    this.isLoading = true;
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.toastService.success('Welcome back, Ibrahim! Login successful.');
        this.router.navigateByUrl(this.returnUrl);
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Login failed', err);
        const errorMsg = err.error?.error || 'Invalid credentials. Access denied.';
        this.toastService.danger(errorMsg);
      }
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
