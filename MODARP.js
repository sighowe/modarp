var quill = new Quill('#notepad', {
  modules: {
    toolbar: [
      ['bold', 'italic'],
      ['link', 'blockquote', 'code-block', 'image'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]
  },
  placeholder: 'WELCOME TO YOUR NOTEBOOK, WRITE SOMETHING HERE!',
  theme: 'snow'
});
