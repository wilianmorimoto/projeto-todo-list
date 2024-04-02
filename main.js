const html = document.querySelector('html')

const darkLightMode = document.querySelector('.icon-theme')

const txtNewTodo = document.querySelector('#new-todo')

const ul = document.querySelector('.list ul')

const txtItemsLeft = document.querySelector('#items-left')

const btnAll = document.querySelector('#all-btn')
const btnActive = document.querySelector('#active-btn')
const btnCompleted = document.querySelector('#completed-btn')

darkLightMode.addEventListener('click', () => {
    html.classList.toggle('dark')
})

txtItemsLeft.innerHTML = document.querySelectorAll('li').length

document.addEventListener('click', (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest('li')

    if (targetEl.value === 'Add') {
        const item = document.createElement('li')
        item.innerHTML = `<div class="circle"></div>
            <p class="paragraph">${txtNewTodo.value}</p>
            <img src="images/icon-cross.svg" alt="Close icon">`
        ul.appendChild(item)

        txtNewTodo.value = ''
        txtNewTodo.focus()
    }

    if (parentEl && targetEl.tagName === 'LI' || targetEl.classList.value === 'circle' || targetEl.classList.value === 'paragraph') {
        parentEl.classList.toggle('selected')

        txtItemsLeft.innerHTML = document.querySelectorAll('li').length
    }

    if (targetEl.alt === 'Close icon') {
        parentEl.remove()
    }

    if (targetEl.id === 'clear-completed') {
        document.querySelectorAll('li').forEach(li => {
            if (li.classList.contains('selected')) {
                li.remove()
            }
        })
    }

    if (targetEl.id === 'all-btn') {
        btnActive.classList.remove('btn-selected')
        btnCompleted.classList.remove('btn-selected')

        targetEl.classList.add('btn-selected')
        document.querySelectorAll('li').forEach(li => {
            li.style.display = 'flex'
        })
    }

    if (targetEl.id === 'active-btn') {
        btnAll.classList.remove('btn-selected')
        btnCompleted.classList.remove('btn-selected')

        targetEl.classList.add('btn-selected')
        document.querySelectorAll('li').forEach(li => {
            if (!li.classList.contains('selected')) {
                li.style.display = 'flex'
            } else {
                li.style.display = 'none'
            }
        })
    }

    if (targetEl.id === 'completed-btn') {
        btnAll.classList.remove('btn-selected')
        btnActive.classList.remove('btn-selected')

        targetEl.classList.add('btn-selected')
        document.querySelectorAll('li').forEach(li => {
            if (li.classList.contains('selected')) {
                li.style.display = 'flex'
            } else {
                li.style.display = 'none'
            }
        })
    }

    const liSelected = document.getElementsByClassName('selected').length
    const liAll = document.querySelectorAll('li').length
    
    txtItemsLeft.innerHTML = liAll - liSelected
})