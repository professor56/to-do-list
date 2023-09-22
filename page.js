"use client"
import React,{useState} from 'react'

const Main = () => {
  const sum=(data)=>{

    data.preventDefault()
    setmaintask([...maintask,{name,task}])
    console.log(maintask)
    setname('')
    settask('')
  }
  const [name, setname] = useState("")
  const [task, settask] = useState("")
  const [maintask, setmaintask] = useState([])
  let rend=<h2 className='text-white '>no task available</h2>
const dl=(i)=>{
  let copy=[...maintask]
  copy.splice(i,1)
  setmaintask(copy)
}
  rend=maintask.map((tt,i)=>{
    return( 
      <li key={i}>
        <div className='flex justify-between'>
      <ul>{tt.name}

      </ul>
      <ul>
        {tt.task}
      </ul>
      <button className='bg-red-400 w-2/2 p-5 mb-4'
      
      onClick={()=>{
        dl(i)
      }}>Delete</button>
    </div>
      </li>
    )
  })
  return (
    
    
    <>
      <header>
        <div className="h-20 bg-blue-400 ">
          <h1 className='text-3xl p-6 text-center text-white font-extrabold'>Todolist </h1>
        </div>
      </header>
      <main>
      <div>
      <div  className="h-60 bg-orange-500 my-2 mx-2 p-9 flex justify-center">
          <form onSubmit={sum}>
            <input type="text" name="" id="" 
            className='border-4 border-red-500  m-8 placeholder:text-blue-500 text-3xl'
            placeholder='Enter the tasks name '       value={name} onChange={(n)=>{
              setname(n.target.value)
            }}/>
            <input type="text" name="" id="" 
            className='border-4 border-red-500  m-8 placeholder:text-blue-500 text-3xl'
            placeholder='Enter the tasks ' value={task} onChange={(t)=>{
              settask(t.target.value)}}/>
            <button className='bg-blue-500 text-white
            p-5 rounded'>Add task </button>
          </form>
        </div>
      </div>
        <div className='p-9 m-8 bg-gray-700  text-white' height={9}>

          <ul className='text-white text-3xl'>
              {rend}
          </ul>
        </div>
      </main>
             </>
  )
}

export default Main