import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (u) => {
            setUser(u);
            setLoading(false);
        })
        return () => unsubscriber();
    }, []);

    return { user, loading };
}