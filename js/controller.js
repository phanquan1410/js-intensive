const controller = {}
controller.register = (
  {
    firstName, 
    lastName, 
    email, 
    password, 
    confirmPassword
  }) => {
  if(firstName === '') {
    view.setErrorMessage('first-name-error','Please input first name')
  } else {
    view.setErrorMessage('first-name-error','')
  }
  if(lastName === '') {
    view.setErrorMessage('last-name-error','Please input last name')
  } else {
    view.setErrorMessage('last-name-error','')
  }
  if(email === '') {
    view.setErrorMessage('email-error','Please input email')
  } else {
    view.setErrorMessage('email-error','')
  }
  if(password === '') {
    view.setErrorMessage('password-error','Please input password')
  } else {
    view.setErrorMessage('password-error','')
  }
  if(confirmPassword === '') {
    view.setErrorMessage('confirm-password-error','Please input confirm password')
  } else if(password !== confirmPassword) {
    view.setErrorMessage('confirm-password-error',"Password didn't match")
  } else {
    view.setErrorMessage('confirm-password-error','')
  }
  if(firstName !== '' 
  && lastName !== '' 
  && email !== ''
  && password !==''
  && confirmPassword !== ''
  && password === confirmPassword
  ) {
    const dataRegister = {
      firstName,
      lastName,
      email,
      password
    }
    model.register(dataRegister)
  }
}

//phần login
controller.login = ({email, password}) => {
  if(email === '') {
    view.setErrorMessage('email-error', 'Please input email')
  } else {
    view.setErrorMessage('email-error', '')
  }
  if(password === '') {
    view.setErrorMessage('password-error', 'Please input password')
  } else {
    view.setErrorMessage('password-error', '')
  }
  if(email !== '' && password !== '') {
    model.login({email, password})
  }
}


//thêm cuộc nói chuyện với tên là email người nhận
controller.createConversation = ({ title, receiver }) => {
  if (title === '')
     view.setErrorMessage('newTitle-error', 'Please fill in this field.');
  else
     view.setErrorMessage('newTitle-error', '');

  if (receiver === '')
     view.setErrorMessage('toEmail-error', 'Please fill in email receiver.');
  else
     view.setErrorMessage('toEmail-error', '');

  if (title !== '' && receiver !== '') {
     // create a new document on firebase ~~ a conversation
     model.createNewConversation({ title, receiver });
  }
}



