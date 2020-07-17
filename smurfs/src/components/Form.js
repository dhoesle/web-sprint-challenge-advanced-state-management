import React from 'react'

const Form = props => {
    const { values, onSubmit, onInputChange } = props

    return (
        <form
            onSubmit={onSubmit}
        >
            <div>
                <label>Name
                    <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        text='text'
                    />                    
                </label>
                <label>Age
                    <input
                        value={values.age}
                        onChange={onInputChange}
                        name='age'
                        text='text'
                    />                    
                </label>
                <label>Height
                    <input
                        value={values.height}
                        onChange={onInputChange}
                        name='height'
                        text='text'
                    />                    
                </label>
                <button>add smurf</button>

            </div>
        </form>
    )
}

export default Form;