import React from 'react';

function Skills({skill}) {
  return (
    <div>
      <p className='bg-warning p-3 rounded-2 fw-bold'>
        {skill}
      </p>
    </div>
  )
}

export default Skills;