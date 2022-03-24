import React, {useState, useEffect} from "react";

function NewPoemForm({addPoem}) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleAuthor = (e)=> {
    setAuthor(e.target.value)
  }

  const handleContent = (e)=> {
    setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData ={
      title,
      author,
      content
    }
    fetch("http://localhost:8004/poems", {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)

    })
    .then(resp=>resp.json())
    .then(newPoem => {
      addPoem(newPoem)
    })
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={handleTitle} />
      <input placeholder="Author" value={author} onChange={handleAuthor} />
      <textarea placeholder="Write your masterpiece here..." rows={10} value={content} onChange={handleContent}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
