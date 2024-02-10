let noteForm = document.getElementById('note-form');
let noteInput = document.getElementById('note-input');
let notesContainer = document.getElementById('notes-container');

noteForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let noteText = noteInput.value.trim();
    if (noteText !== '') {
        addNoteToList(noteText);
        noteInput.value = '';
    }
});

function addNoteToList(noteText) {
    let noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.textContent = noteText;

    let delete_Btn = document.createElement('button');
    delete_Btn.textContent = 'Delete';
    delete_Btn.classList.add('btn');
    delete_Btn.addEventListener('click', function() {
        notesContainer.removeChild(noteDiv);
    });

    noteDiv.appendChild(delete_Btn);
    notesContainer.appendChild(noteDiv);
}

