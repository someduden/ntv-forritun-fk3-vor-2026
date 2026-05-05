import { useAuth } from '@/auth/useAuth';
import type { FormEvent } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  let navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login();
    navigate('/secret');
  }

  if (isAuthenticated) {
    return <Navigate to="/secret" replace />;
  }

  return (
    <div className="mx-auto max-w-md space-y-6 text-left">
      <header>
        <h1>Innskráning</h1>
      </header>
      <form
        onSubmit={handleSubmit}
        className="bg-card text-card-foreground space-y-4 rounded-xl border p-6 shadow-sm"
      >
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            placeholder="Enter your email..."
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="">Password</label>
          <input
            id="password"
            name="pass"
            type="password"
            autoComplete="password"
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            placeholder="Enter your password..."
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 w-full items-center justify-center rounded-md px-4 text-sm font-medium"
        >
          Sign in
        </button>
      </form>
      <p className="text-sm">
        <Link to="/" className="underline-offset-4 hover:underline">
          Back to homepage
        </Link>
      </p>
    </div>
  );
}
