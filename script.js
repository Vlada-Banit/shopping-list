const sendInput = document.querySelector('#input');
const listContainer = document.querySelector('#items');


sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const listText = sendInput.value;

        const listItem = document.createElement('div');
        listItem.classList.add('listItems');
        listItem.textContent = listText;

        listItem.addEventListener('click', function() {
            listItem.classList.toggle('done');
        })


        if (listText != '')
            listContainer.append(listItem);

        sendInput.value = '';
    }

})