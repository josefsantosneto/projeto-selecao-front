import './form-input.styles.scss';

const CompleteInput = ({label, ...otherProps})=> {
    return(
        <div className='form-input'>
            <label className='label'>{label}</label>
            <input {...otherProps}/>
        </div>
    );
}


export default CompleteInput;