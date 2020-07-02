import React from 'react';
import Font from '../../../Config/Font';


const MainMenuCard=(props)=>{
    const {title,icon,loading,Consumption,Error,loadingValue,ConsumptionValue,ErrorValue}=props
    return(
            <div className="p-2">
                <div className="card shadow rounded-lg" style={{minWidth: '220px', minHeight: '330px', maxWidth: '300px', maxHeight:'200px',}} >
                    <div className="p-3">
                        <img src={icon} style={{width:'48px', height:'43px'}} alt="icon"/>
                    </div>
                    <div className="card-body">
                        <div className="card-title font-weight-bold" style={{fontSize: Font.heading3}}>{title}</div>
                        <div className="card-subtitle mb-2 text-muted" style={{fontSize: Font.small}}><i className="fa fa-external-link"></i>http://61.65.0.222/acbel</div>
                        <div className="py-2 card-text text-muted" style={{fontSize: Font.small}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincid</div>
                        <div className="py-2 row d-flex flex-nowrap text-center w-100 text-muted" style={{fontSize: Font.small}}>
                            <div className="col-4">
                                <p className="card-text" >{loading}</p><p className="card-text" style={{color: '#12a339'}}>{loadingValue}</p>
                            </div>
                            <div className="col-5">
                                <p className="card-text">{Consumption}</p><p className="card-text" style={{color: '#12a339'}}>{ConsumptionValue}</p>
                            </div>
                            <div className="col-3">
                                <p className="card-text" >{Error}</p><p className="card-text" style={{color: '#a31219'}}>{ErrorValue}</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div> 
    )
}
export default MainMenuCard;