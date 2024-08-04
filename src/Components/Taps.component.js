import React, {useState} from 'react';

function TapsComponent(props) {
    const [isFirstTap, setisFirstTap] = useState(true)
    const [isSecondTap, setIsSecondTap] = useState(false)
    const [isThirdTap, setIsThirdTap] = useState(false)
    const [isFourthTap, setIsFourthTap] = useState(false)
    const [isFifthTap, setIsFifthTap] = useState(false)

    const handelTapsMovs = (e) => {
        switch (e.target.id) {
            case "first-tap":
                setisFirstTap(true)
                setIsSecondTap(false)
                setIsThirdTap(false)
                setIsFourthTap(false)
                setIsFifthTap(false)
                break
            case "second-tap":
                setisFirstTap(false)
                setIsSecondTap(true)
                setIsThirdTap(false)
                setIsFourthTap(false)
                setIsFifthTap(false)
                break
            case "third-tap":
                setisFirstTap(false)
                setIsSecondTap(false)
                setIsThirdTap(true)
                setIsFourthTap(false)
                setIsFifthTap(false)
                break
            case "fourth-tap":
                setisFirstTap(false)
                setIsSecondTap(false)
                setIsThirdTap(false)
                setIsFourthTap(true)
                setIsFifthTap(false)
                break
            case "fifth-tap":
                setisFirstTap(false)
                setIsSecondTap(false)
                setIsThirdTap(false)
                setIsFourthTap(false)
                setIsFifthTap(true)
                break
            default:
                setisFirstTap(true)
                setIsSecondTap(false)
                setIsThirdTap(false)
                setIsFourthTap(false)
                setIsFifthTap(false)
                break
        }
    }

    const handelDisplayTaps = () => {
        if (isFirstTap) {
            return props.firstTapComponent
        } else if (isSecondTap) {
            return props.SecondTapComponent
        } else if (isThirdTap) {
            return props.ThirdTapComponent
        } else if (isFourthTap) {
            return props.FourthTapComponent
        } else if (isFifthTap) {
            return props.FifthTapComponent
        }
    }
    return (
        <div className={"w-10/12 mx-auto"}>
            <div className={"flex-none taps flex justify-start px-10"}>
                <ul className={"list-taps flex w-full border-b-2 border-gray-300 flex-row gap-6"}>
                    <li id={"first-tap"} onClick={(e) => handelTapsMovs(e)}
                        className={`item-tap ${isFirstTap ? ' active-tap ' : null}`}>{props.firstTapTitle}</li>
                    <li id={"second-tap"} className={`item-tap ${isSecondTap ? ' active-tap ' : null}`}
                        onClick={(e) => handelTapsMovs(e)}>{props.secondTapTitle}</li>
                    <li id={"third-tap"} className={`item-tap ${isThirdTap ? ' active-tap ' : null}`}
                        onClick={(e) => handelTapsMovs(e)}>{props.thirdTapTitle}</li>
                    <li id={"fourth-tap"} className={`item-tap ${isFourthTap ? ' active-tap ' : null}`}
                        onClick={(e) => handelTapsMovs(e)}>{props.FourthTapTitle}</li>
                    <li id={"fifth-tap"} className={`item-tap ${isFifthTap ? ' active-tap ' : null}`}
                        onClick={(e) => handelTapsMovs(e)}>{props.FifthTapTitle}</li>
                </ul>
            </div>
            <div className={"tapsArea w-full max-h-[calc(100vh-12.62rem)] overflow-y-auto"}>
                {handelDisplayTaps()}
            </div>
        </div>
    );
}

export default TapsComponent;