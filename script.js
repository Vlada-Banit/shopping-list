const sendInput = document.querySelector('#input');
const listContainer = document.querySelector('.groceries');


sendInput.addEventListener('keydown', function(event) {
    const listText = sendInput.value;
    if (event.key == 'Enter') {

    }

    const listItems = document.querySelectorAll('.items');
    listItems.textContent = listText;
    /* Новые элементы должны добавляться в список по нажатию на Enter */

    if (listText != '')
        listContainer.append(listItems);
    /* Пустые элементы не должны добавляться */

    for (let item of listItems) {
        item.addEventListener('click', function() {
            item.classList.toggle('done');
        })
    }
    /* Если кликнуть на элемент списка, он зачеркивается */

    /* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

    sendInput.value = ''; /* Очищать input после добавления нового элемента в список */
})