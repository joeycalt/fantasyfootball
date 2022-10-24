import React from 'react'

const New = () => {
  return (
    <div>
      <h1>Add new FFFFOTW
    </h1>
        <div>
    <form action="/FFFFOTW" method="POST">
        <div>
            <label for="week"><h4>Week:</h4></label>
            <textarea class="week-box" name="week" ></textarea>
        </div>
        <div>
                <label for="content"></label>
                <textarea class="text-box" name="content" ></textarea>
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