import PropTypes from 'prop-types';


function Student(props){

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
        </div>
    )

}

//các value của các key phải đúng với kiểu dữ liệu mình định nghĩa như này
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

//nếu như mình không truyền dữ liệu thì mặc định chúng sẽ tự set default value cho các keys

Student.defaultProps = {
    name: 'Guest',
    age: 0,
    isStudent: false
}
export default Student;