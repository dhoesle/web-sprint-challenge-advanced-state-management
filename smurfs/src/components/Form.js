import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addSmurf } from '../actions'
const initialFormValues = {
    name: '',
    age: '',
    height: '',
    id: Date.now()
  }
const Form = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const onSubmit = evt => {
        evt.preventDefault()
        const newSmurf = {
          name: formValues.name,
          age: parseInt(formValues.age, 10),
          height: formValues.height,
        }
        addSmurf(newSmurf)
        setFormValues(initialFormValues)
        window.location.reload(false);
    }

    const onInputChange = evt => {
        evt.preventDefault()
        const { name, value } = evt.target
    
        setFormValues({
          ...formValues,
          [name]: value
        })
    }

    return (
        <form
            onSubmit={onSubmit}
        >
            <div>
                <label>Name
                    <input
                        value={formValues.name}
                        onChange={onInputChange}
                        name='name'
                        text='text'
                    />                    
                </label>
                <label>Age
                    <input
                        value={formValues.age}
                        onChange={onInputChange}
                        name='age'
                        type='number'
                        pattern='[0-9]*'
                    />                    
                </label>
                <label>Height
                    <input
                        value={formValues.height}
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

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}
const mapDispatchToProps = { addSmurf };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);