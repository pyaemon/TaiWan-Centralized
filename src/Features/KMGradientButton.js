import React from 'react'
import '../App.css';

const KMGradientButton = props => {
    const { text, onClick, type, round, style, small,  onSubmit } = props
    const defaultStyle = { outline: 'none', boxShadow: 'none', color: '#ffffff', border: 'none', borderRadius: round === undefined ? 5 : 16, minWidth: 160 }
    const userStyle = style === undefined ? {} : style
    return (
        <button
            onClick={onClick}
            // onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            type={type === undefined ? "button" : type}
            //className={`btn btn-block ${selectTheme === undefined ? `submit-btn-${theme}` : `submit-btn-${selectTheme}`}  ${small === undefined ? "p-3" : "px-2"}`}
            className={`btn btn-block btn-info `}
            >
            {text}

        </button>
    );
}

export default (KMGradientButton);