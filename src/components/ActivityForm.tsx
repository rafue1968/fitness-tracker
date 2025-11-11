"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";


export default function ActivityForm({userId}: {userId: string}){
    const [activity, setActivity] = useState("");
    const [duration, setDuration] = useState("");
    const [notes, setNotes] = useState("");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!activity) return;
        await addDoc(collection(db, "activities"), {
            userId,
            activity,
            duration: duration || null,
            notes: notes || null,
            createdAt: serverTimestamp(),
        });
        setActivity(""); setDuration(""); setNotes("");
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" />
        </form>
    )
}