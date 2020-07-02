import React from 'react'
import '../App.css'
const InputBox = (props) => {
    const {  onChange, type, value, placeholder, required, pattern,id } = props

    return (
        <input
            id ={id}
            onChange={onChange}
            type={type}
            value={value}
            className={`form-control px-3`}
            placeholder={placeholder}
            required={required}
            pattern={pattern}
            style={{
                //fontSize: fonts.labels,
                backgroundColor: '#FeFfFf',
                borderRadius:0,
                paddingTop: "25px",
                paddingBottom: "25px",
                marginLeft: 0,
                //color: color[theme].bodyText,
                boxShadow: 'none',
                borderTopStyle:'hidden',
                borderLeftStyle:'hidden',
                borderRightStyle:'hidden',
            }}
        />
    )
}
export default (InputBox);