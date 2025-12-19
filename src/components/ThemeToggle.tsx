'use client'
import {  useEffect, useState } from "react"

export function ThemeToggle(){
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    // initalze on mount
    useEffect(()=>{
        setMounted(true);
        const saved = localStorage.getItem('theme') === 'dark'
        setIsDark(saved);

        if (saved){
            document.documentElement.classList.add('dark');
        }

    }, []);

    // Toggle theme 
    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }
    // Prevent hydration mismatch
    if(!mounted) return null;

    return(
        <button onClick={toggleTheme}
        className="transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-accent-foreground rounded-2xl h-9 px-4 py-2 ">{isDark? '🌞':'🌙'}</button>
    )
}