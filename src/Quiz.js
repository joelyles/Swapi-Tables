import React from 'react'
import { useState, useEffect } from 'react'

const Quiz = () => {
  return (
    <>
    <form>
      <input type="text" name="quiz form" id="answer" placeholder='enter answer' />
      <button className='submit'>submit</button>
    </form>
    
    </>
  )
}

export default Quiz
