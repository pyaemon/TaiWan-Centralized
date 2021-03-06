import React, { useContext } from 'react'
import Font from '../../Config/Font';
import { LanguageContext } from '../../Languages/Context/LanguageContext';
import { StatusListLanguage } from '../../Languages/Util/statusListLanguage';


const StatusList = () => {
    const { languageId } = useContext(LanguageContext)
    return (
        <div className="w-100 ">
            <ul className="list-group shadow bg-white p-2">
                <div className="p-4 font-weight-bold" style={{ fontSize: Font.heading3 }}>{StatusListLanguage[languageId].Title}</div>
                <div className="mb-5 p-2 mx-2 shadow-sm ">
                    <input type="text" placeholder={StatusListLanguage[languageId].Dropdown} style={{ border: 'none' }} />
                </div>
                <div className="mx-4 mb-4 d-flex flex-row justify-content-between align-items-center text-muted" style={{fontSize: Font.small, /* whiteSpace:'nowrap' */}}>
                    <div className="col-lg-3" >{StatusListLanguage[languageId].Title1}</div>
                    <div className="col-lg-4" >{StatusListLanguage[languageId].Title2}</div>
                    <div className="col-lg-4" >{StatusListLanguage[languageId].Title3}</div>
                    <div className="col-lg-1" >{StatusListLanguage[languageId].Title4}</div>
                </div>
                {list.map((v, k) =>
                    <li className="list-group-item mx-1 d-flex flex-row justify-content-between align-items-center font-weight-bold" style={{ fontSize: Font.small, borderTop: 'none', borderLeft: 'none', borderRight: 'none' }} key={k}>
                        <div className="col-lg-3">{v.name}</div>
                        <div className="col-lg-4">{v.n1}</div>
                        <div className="col-lg-4">{v.n2}</div>
                        <div className="col-lg-1"
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
    { name: "S01A01-B101", n1: '20', n2: '23', switch: 'OFF' },
    { name: "S01A01-B101", n1: '20', n2: '23', switch: 'OFF' },
    { name: "S01A01-B101", n1: '20', n2: '23', switch: 'OFF' },
]