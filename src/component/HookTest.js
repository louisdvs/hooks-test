import React, { useState } from 'react'

export default function HookTest(){
  const [name, setName] = useState('louis')
  return(
    <div>
    <p>{name}</p>
    <form action="/action_page.php">
      <input type="text" name="fname" onInput={(e)=>setName(e.target.value)} />
    </ form>
    </div>
  )
}