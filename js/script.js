let doc = document
let body = doc.querySelector('body')
let wrap = doc.createElement('div')
let form = doc.querySelector('.forma')
let blocks = doc.querySelector('.blocks')
let inp = doc.querySelector('.inp')


//creating



//creating

//time

const date = new Date();
let hour = date.toLocaleTimeString()
console.log(hour);
//time

//classes



//classes

let len = 0
let arr = []
form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (len <= 5) {
        len++
        if (inp.value !== '') {

            const made = doc.createElement('div')
            made.classList.add('wasmade')
            blocks.append(made)

            arr.push(made)
            arr.length
            console.log(arr);

            let first_part = doc.createElement('div')
            first_part.classList.add('first_part')

            made.append(first_part)

            let h2 = doc.createElement('h2')
            h2.classList.add('h21')
            let th2 = doc.createTextNode(`${inp.value}`)

            first_part.append(h2)
            h2.append(th2)

            let del = doc.createElement('div')
            del.classList.add('delete')

            first_part.append(del)

            let line1 = doc.createElement('div')
            let line2 = doc.createElement('div')

            line1.classList.add('line')
            line2.classList.add('line')

            del.append(line1)
            del.append(line2)



            first_part.addEventListener('click', () => {
                first_part.parentElement.remove()
                len = len - 1

            })

            let for_time = doc.createElement('div')
            for_time.classList.add('for_time')

            let time = doc.createElement('p')
            time.classList.add('time')
            made.append(for_time)

            for_time.append(time)
            let times = doc.createTextNode(`${hour}`)
            time.append(times)
            inp.value = ''
        }
        else {
            inp.classList.toggle('r_border')
            inp.placeholder = 'Текст обязателен'
            setTimeout(() => {
                inp.classList.remove('r_border')
                inp.placeholder = 'Введите что нибудь'
            }, 3000);

        }
    }

    else {
        alert("Все не могу больше")
    }


})