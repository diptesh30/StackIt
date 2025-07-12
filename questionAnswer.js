document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = true; // Simulate login status
  const votedAnswers = new Set(); // Track voted answers

  // Initialize Quill editor
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
  

  // Handle upvotes
  document.querySelectorAll('.answer').forEach(answer => {
    const voteBtn = answer.querySelector('.vote-btn');
    const voteCount = answer.querySelector('.vote-count');
    const answerId = answer.getAttribute('data-answer-id');

    voteBtn.addEventListener('click', () => {
      if (!isLoggedIn) {
        alert("Please log in to vote.");
        return;
      }

      if (votedAnswers.has(answerId)) {
        alert("You have already voted.");
        return;
      }

      // Increment vote
      voteCount.textContent = parseInt(voteCount.textContent) + 1;
      votedAnswers.add(answerId);
    });
  });

  // Handle answer submit
  document.querySelector("#submit-answer-btn").addEventListener("click", () => {
    const content = quill.root.innerHTML.trim();

    if (!content || content === '<p><br></p>') {
      alert("Answer cannot be empty.");
      return;
    }

    alert("Answer submitted!");
    quill.setText('');
  });
});
