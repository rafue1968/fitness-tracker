"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../lib/firebase";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push("/");
        } catch (err: any) {
            setError(err.message);
        }

    }

    return (
        <div className="p-8 max-w-md mx-auto">
            <h1 className="text-2xl mb-4">Sign up</h1>
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="input" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="input" />
                <button className="btn" type="submit">Create Account</button>
            </form>
        </div>
    )
}