import React, { useEffect, useState } from 'react'

const Counter = ({Count, SubstractCounter, AddToCounter}) => {

  return <article className='counter'>
    <button onClick={SubstractCounter}>
        -
    </button>
    {Count}
    <button onClick={AddToCounter}>
        +
    </button>
  </article>
}

export default Counter