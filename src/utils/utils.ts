export const formatTwoDigit = (n: number) => {
    return `0${n}`.slice(-2);
}

export const formatTimer = (time: number) => {
    let minutes = 0;
    let seconds = 0;

    if (time < 0) {
        time = 0;
    }

    if (time < 100) {
        return `00:00:${formatTwoDigit(time)}`;
    }

    let remainTime = time % 100;
    seconds = (time - remainTime) / 100;
    if (seconds < 60) {
        return `00:${formatTwoDigit(seconds)}:${formatTwoDigit(remainTime)}`;
    }

    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;
    return `${formatTwoDigit(minutes)}:${formatTwoDigit(remainSeconds)}:${formatTwoDigit(remainTime)}`;
}