import React from 'react'
import"./form.css";
export const Form2 = () => {
  return (
    <div className='form2'>
         <form onSubmit={" "}>
          <h1>form2</h1>

          <input type="text" class="input" name="name" id="name" placeholder="Name" />
          <br />
          <input type="email" class="input" name="email" id="email" placeholder="Email Address" />
          <br />
          <input type="text" class="input" name="country" id="country" placeholder="Country" />
          <br />
          <input type="tel" class="input" name="phone" id="phone" placeholder="123-456-789" />
          <br />
          <div class="row">
            <input type="password" class="input" name="password" id="password" placeholder="Password" />
            <i class="fa-regular fa-eye-slash"></i>
          </div>
          <label for="checkbox">
            <input type="checkbox" id="checkbox" /> I accept terms and conditions.
          </label>
          <button type="submit">Create Account</button>
          <p>Already have an account? <a id="sign-in-link" href="#">Sign in</a></p>
          <div id="error-message" class="error-message"></div>
        </form>
    </div>
  )
}
