import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getSmurfs } from '../actions'
import { Link } from 'react-router-dom'


const  SmurfList = (props) => {
    
    useEffect(() => {
        props.getSmurfs();
    }, []);


        
    return (
        <div>
            {props.smurfs.map((smurf) => (

                <ul>
                    <Link to={`/smurfs/${smurf.id}`}>
                        <h2 key={smurf.id} >{smurf.name}</h2>
                    </Link>
                </ul>
            ))}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}
const mapDispatchToProps = { getSmurfs };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SmurfList);