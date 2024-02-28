import { HiOutlineX } from "react-icons/hi";

import { useEffect, useState } from "react";
import { AlertNotificationPropsType } from "./type";
import { colorConfig } from "@/misc";

const AlertNotification = ({ message, status, active = false }: AlertNotificationPropsType) => {
    const [show, setShow] = useState<boolean>(active);

    useEffect(() => {
        setShow(active);
    }, [active]);

    return <>
        {show && (
            <span className={`absolute left-4 right-4 bottom-4 p-4 ${colorConfig[status]} text-center rounded-lg`}>
                <span>{message}</span>
                <button type="button" onClick={()=> setShow(false)} className="absolute right-4">
                    <HiOutlineX className="text-2xl" />
                </button>
            </span>
        )}
    </>
}

export default AlertNotification;