import React from 'react'
import Font from '../../Config/Font';


const StatusList = (props) => {
    return (
        <div className="py-5 container float-left" style={{ width: '400px' }}>
           
            <ul className="list-group shadow bg-white">
                <div className="p-4 font-weight-bold" style={{fontSize: Font.heading3}}>Status list</div>
                <div className="mb-5 p-2 mx-2 shadow-sm">
                    <input type="text" placeholder="Search" style={{border: 'none'}} />
                </div>
            
                {list.map((v, k) =>
                    <li className="list-group-item mx-1 d-flex flex-row justify-content-between align-items-center font-weight-bold" style={{ fontSize: Font.small, borderTop: 'none', borderLeft: 'none', borderRight: 'none'}} key={k}>
                        <div className="col-lg-4">{v.name}</div>
                        <div className="col-lg-4">{v.n1}</div>
                        <div className="col-lg-2">{v.n2}</div>
                        <div className="col-lg-2"
                            style={{ color: `${v.switch}` === 'ON' ? 'green' : 'grey' }} >{v.switch}</div>
                    </li>
                )}

            </ul>
        </div>
    )
}

export default StatusList;
const list = [
    { name: "S01A01-B101", n1: '20', n2: '23', switch: 'ON' },
    { name: "S01A01-B101", n1: '20', n2: '23', switch: 'ON' },
    { name: "S01A01-B101", n1: '20', n2: '23', switch: 'ON' },
    { name: "S01A01-B101", n1: '20', n2: '23', switch: 'ON' },
    { name: "S01A01-B101", n1: '20', n2: '23', switch: 'ON' },
    { name: "S01A01-B101", n1: '20', n2: '23', switch: 'ON' },
    { name: "S01A01-B101", n1: '20', n2: '23', switch: 'ON' },
    { name: "S01A01-B101", n1: '20', n2: '23', switch: 'ON' },
    { name: "S01A01-B101", n1: '20', n2: '23', switch: 'ON' },
    { name: "S01A01-B101", n1: '20', n2: '23', switch: 'OFF' },
]


