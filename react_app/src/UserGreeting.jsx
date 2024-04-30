import PropTypes from 'prop-types';
function UserGreeting(props) {


    // if (props.isLoggedIn) {
    //     return (<>
    //         <h1>Welcome {props.username}</h1>
    //     </>)
    // }
    // return (<>
    //     <h1>Welcome Guest</h1>
    // </>)
    const successMsg = <h1 className="success">Welcome {props.username}</h1> 
    const failureMsg = <h1 className="failure">Please log in continue, Guest</h1>

    return ((props.isLoggedIn) ? successMsg : failureMsg)
                               
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest',
}

export default UserGreeting