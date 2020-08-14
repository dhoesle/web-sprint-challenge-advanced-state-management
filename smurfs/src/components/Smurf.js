import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions'
import { useParams } from 'react-router-dom'

const Smurf = props => {
    const [smurf, setSmurf] = useState(null)
    const params = useParams()
    const fetchSmurf = (id) => {
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res => {
                console.log(res.data[id])
                setSmurf(res.data[id])
            })
            .catch((err) => console.log(err.response))
    }

    useEffect(() => {
        fetchSmurf(params.id);
    }, [params.id]);

    if (!smurf) {
        return <div>Loading smurf information...</div>
    }

    return (
        <>
            <h1>Smurf Profile:</h1>
            <h2>Name: {smurf.name}</h2>
            <h3>Age: {smurf.age}</h3>
            <h3>Height: {smurf.height}</h3>
        </>
    )
 
}
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}
const mapDispatchToProps = { fetchSmurf };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Smurf)