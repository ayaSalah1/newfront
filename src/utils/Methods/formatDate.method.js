import {differenceInMinutes, format} from 'date-fns';


export const formatDate = (date,formatString="yyyy-MM-dd")=> {
    if(!date) return '';
    return format(new Date(date), formatString)
}

export const formatDateNotification = (date)=> {
    if(!date) return '';


}

export const calculateDelay = (deadline) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);

    const diffInMinutes = differenceInMinutes(now, deadlineDate);
    const diffInHours = Math.floor(diffInMinutes / 60) % 24;
    const diffInDays = Math.floor(diffInMinutes / (60 * 24));
    const remainingMinutes = diffInMinutes % 60;

    return `${diffInDays} d ${diffInHours} h ${remainingMinutes} m`
}

