import React from 'react';
import Icon1 from '../../../Config/Images/chiller plant ui_icon.png'
import Icon2 from '../../../Config/Images/environmental monitor ui_icon.png'
import Icon3 from '../../../Config/Images/street light ui_icon.png'
import Icon4 from '../../../Config/Images/solar power ui_icon.png'
import Icon5 from '../../../Config/Images/new iotcomui ui_icon.png'
import MainMenuCard from '../component/main'

const MainMenuContainer = (props) => {
    const _handleIcon = e => {
        props.history.push("/chillerRoom")
    }
    return (
        <div className="py-5 container-fluid">
            <div className="d-flex flex-row flex-wrap justify-content-center">
                <MainMenuCard title={"Acbel chiller plant UI"}
                    icon={Icon1} loading={"Loading%"} Consumption={"Consumption"} Error={"Error"}
                    loadingValue={"50%"} ConsumptionValue={"150.3Kw"} ErrorValue={"7"} click={_handleIcon} />

                <MainMenuCard title={"Acbel environmental monitor UI"}
                    icon={Icon2} loading={"Loading%"} Consumption={"Consumption"} Error={"Error"}
                    loadingValue={"50%"} ConsumptionValue={"150.3Kw"} ErrorValue={"7"}
                />
                <MainMenuCard title={"Ndhu street light UI"}
                    icon={Icon3} loading={"Streetlight"} Consumption={"On"} Error={"Error"}
                    loadingValue={"1024"} ConsumptionValue={"90"} ErrorValue={"5"}
                />
                <MainMenuCard title={"Acbel solar power UI"}
                    icon={Icon4} loading={"Monitored sites"} Consumption={"Power generation"} Error={"Dev off"}
                    loadingValue={"9"} ConsumptionValue={"6651.65MWH"} ErrorValue={"24"}
                />
                <MainMenuCard title={"New iotcomui UI"}
                    icon={Icon5} loading={"Loading %"} Consumption={"Consumption"} Error={"Error"}
                    loadingValue={"50%"} ConsumptionValue={"150.3Kw"} ErrorValue={"7"}
                />
            </div>
        </div>

    )
}
export default MainMenuContainer;