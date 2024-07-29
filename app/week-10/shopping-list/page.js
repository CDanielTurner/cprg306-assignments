"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <main>
      <header>
        <h1>My Shopping List App</h1>
      </header>
      <section>
        {user ? (
          <div>
            <p>Signed in as {user.email}</p>
            <Link
              href="./week-10/shopping-list/"
             
            >
              Continue to your Shopping List
            </Link>
            <br></br>
            <button
              onClick={handleSignOut}
            
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handleSignIn}
             
            >
              Github Sign In
            </button>
          </div>
        )}
      </section>
    </main>
  );
}