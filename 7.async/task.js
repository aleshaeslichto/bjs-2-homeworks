class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error("Отсутствуют обязательные аргументы");
        }

        if (this.alarmCollection.find((el) => el.time === time)) {
            console.warn("Уже присутствует звонок на это же время");
        }

        const alarm = {
            callback,
            time,
            canCall: true,
        };

        this.alarmCollection.push(alarm);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(
            (el) => el.time !== time
        );
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        if (this.intervalId) {
            return;
        }

        const callAlarm = function (el) {
            if (el.time === this.getCurrentFormattedTime() && el.canCall) {
                el.canCall = false;
                el.callback();
            }
        };

        const startAlarms = function () {
            this.alarmCollection.forEach(callAlarm.bind(this));
        };

        this.intervalId = setInterval(startAlarms.bind(this), 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((el) => (el.canCall = true));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
