let date1 = '2022-10-16 10:25:46'
let date2 = '2022-10-16 10:27:03'

const setTimer = (dateString1, dateString2) => {
    let d1 = new Date(dateString1).getTime()
    let d2 = new Date(dateString2).getTime()
    let time = d2 - d1
    console.log(new Date(time).getMinutes())

    const interval = setInterval(() => {
        time = time - 1000
        const f = Math.floor
        console.log(f((time / 1000 /60) % 60) + 'm : '+ ((time/1000) % 60) + 's')
    }, 1000)

    setTimeout(()=> {
        clearInterval(interval)
    }, d2 - d1)
}

Timer(date1, date2)