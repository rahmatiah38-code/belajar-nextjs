"use client";
import {useState} from "react"
import {useEffect} from "react"

export default function Counter(){
    const [count, setCount] = useState(10)
    return(
    <main>
        <h1>Jumlah ::: {count}</h1>
        <div className="flex gap-4">
            <button onClick={() => setCount(count - 1)}>[Kurang]</button>
            <button onClick={() => setCount(count + 1)}>[Tambah]</button>
            <button onClick={() => setCount(0)}>[RESET]</button>
        </div>
        
    </main>
    )
    
    
}