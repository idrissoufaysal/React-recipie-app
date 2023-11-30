import React from 'react'

function SerchText({
  value,
  isLoading,
  handleSubmit,
  onChange,
}:{value:string,
  isLoading:boolean,
  handleSubmit:undefined,
  onChange:React.ChangeEventHandler<HTMLInputElement> | undefined
  }) {
  return (
    <form onSubmit={handleSubmit} className='form-control'>
      <input 
      value={value}
      disabled={isLoading}
      placeholder='Rechercher une recette'
      
      onChange={onChange}

      />

      <input type="submit" 
      className='btn'
      disabled={isLoading}
      value='Rechercher'
      />
    </form>
  )
}

export default SerchText