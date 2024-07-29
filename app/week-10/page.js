"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
    }
  }


  return (
    <main>
      <header>
        <h1>Shopping List App</h1>
      </header>
      <section>
        {user ? (
          <div>
            <p>Signed in as {user.email}</p>
            <Link
              href="./week-10/shopping-list/"
            
            >
              Your Shopping List
            </Link>
            <br></br>
            <button
              onClick={handleSignOut}
            
            >
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handleSignIn}
              className="text-lg m-2 hover:underline"
            >
              Sign In with GitHub
            </button>
          </div>
        )}
      </section>
    </main>
  );
}