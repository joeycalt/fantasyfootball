import React from 'react'

const New = () => {
  return (
    <div>
      <h1>Add new FFFFOTW
    </h1>
        <div>
        <form action="/ffffotw" method="POST">
        <div>
            <label for="name"><h4>Week:</h4></label>
            <textarea class="week-box" name="name" ></textarea>
        </div>
        <div>
                <label for="desc"></label>
                <textarea class="text-box" name="desc" ></textarea>
            </div>
            <button class="add-btn">
                Submit
            </button>
        </form>
        </div>
    </div>
  )
}

export default New