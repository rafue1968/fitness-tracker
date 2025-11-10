import Link from "next/link";
import useAuth from "../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";


export default function Home() {
  const { user, loading } = useAuth();

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <main className="p=8">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Fitness Tracker</h1>
        <div>
          {user ? (
            <>
            <span className="mr-4">{user.email}</span>
            <button className="btn" onClick={() => signOut(auth)}>Sign out</button>
            </>
          ) : (
            <Link href="/auth/login">Login</Link>
          )}
        </div>
      </header>

      <section>
        <h2 className="text-xl font-medium mb-2">Dashboard</h2>
        <p className="mb-4">Welcome - start logging activities.</p>
        <Link href="/auth/signup">Create account</Link>
      </section>
    </main>    
  );
}
