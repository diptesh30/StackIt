document.addEventListener("DOMContentLoaded", () => {
  // Initialize Quill.js rich text editor
  const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'code-block'],
        [{ align: [] }],
        ['clean']
      ]
    }
  });

  // Handle form submission
  document.querySelector(".ask-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const tags = document.querySelector("#tags").value.trim();
    const descriptionHTML = quill.root.innerHTML;

    console.log("Question Submitted:");
    console.log("Title:", title);
    console.log("Tags:", tags);
    console.log("Description:", descriptionHTML);

    alert("Question submitted successfully!");
  });
});
