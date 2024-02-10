let noteForm = document.getElementById('note-form');
let noteInput = document.getElementById('note-input');

let notesContainer = document.getElementById('notes-container');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Load notes from local storage
function loadNotes() {
    notes.forEach(noteText => {
        addNoteToList(noteText);
    });
}
loadNotes();

noteForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let noteText = noteInput.value.trim();
    if (noteText !== '') {
        notes.push(noteText);
        localStorage.setItem('notes', JSON.stringify(notes));
        addNoteToList(noteText);
        noteInput.value = '';
    }
});

function addNoteToList(noteText) {
    let noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.textContent = noteText;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('btn');
    deleteBtn.addEventListener('click', function() {
        let index = notes.indexOf(noteText);
        if (index > -1) {
            notes.splice(index, 1);
            localStorage.setItem('notes', JSON.stringify(notes));
        }
        notesContainer.removeChild(noteDiv);
    });

    noteDiv.appendChild(deleteBtn);
    notesContainer.appendChild(noteDiv);
}