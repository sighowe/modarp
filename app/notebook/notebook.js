document.addEventListener('DOMContentLoaded', function() {

	
	//Create the editor window on the notebook div
	var toolbarOptions = [
	  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
	  ['blockquote', 'code-block'],
	
	  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
	  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
	  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
	  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
	  [{ 'direction': 'rtl' }],                         // text direction
	
	  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
	  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
	
	  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
	  [{ 'font': [] }],
	  [{ 'align': [] }],
	
	  ['clean']                                         // remove formatting button
	];
	
	var toolbar = document.getElementById('toolbar');
	var options = {
	  modules: {
	  	toolbar: toolbarOptions
	  },
	  placeholder: 'Write here please...',
	  theme: "snow"
	};
	var container = document.getElementById('notebook');
	var editor = new Quill(container, options);


	//Check for any changes to the text in the editor
	quill.on('text-change', function(delta, oldDelta, source) {
		//Check for text 

		
	});








		
}, false);
