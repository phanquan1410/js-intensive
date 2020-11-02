const controller = {}
controller.register = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword
}) => {
  if (firstName === '') {
    view.setErrorMessage('first-name-error', 'Please input first name')
  } else {
    view.setErrorMessage('first-name-error', '')
  }
  if (lastName === '') {
    view.setErrorMessage('last-name-error', 'Please input last name')
  } else {
    view.setErrorMessage('last-name-error', '')
  }
  if (email === '') {
    view.setErrorMessage('email-error', 'Please input email')
  } else if (!validateEmail(email)) {
    view.setErrorMessage('email-error', 'Invalid email.');
  } else {
    view.setErrorMessage('email-error', '')
  }
  if (password === '') {
    view.setErrorMessage('password-error', 'Please input password')
  } else {
    view.setErrorMessage('password-error', '')
  }
  if (confirmPassword === '') {
    view.setErrorMessage('confirm-password-error', 'Please input confirm password')
  } else if (password !== confirmPassword) {
    view.setErrorMessage('confirm-password-error', "Password didn't match")
  } else {
    view.setErrorMessage('confirm-password-error', '')
  }
  if (firstName !== '' &&
    lastName !== '' &&
    email !== '' &&
    password !== '' &&
    confirmPassword !== '' &&
    password === confirmPassword
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
controller.login = ({
  email,
  password
}) => {
  if (email === '') {
    view.setErrorMessage('email-error', 'Please input email')
  } else if (!validateEmail(email)) {
    view.setErrorMessage('email-error', 'Invalid email.');
  } else {
    view.setErrorMessage('email-error', '')
  }
  if (password === '') {
    view.setErrorMessage('password-error', 'Please input password')
  } else {
    view.setErrorMessage('password-error', '')
  }
  if (email !== '' && password !== '') {
    model.login({
      email,
      password
    })
  }
}


//thêm cuộc nói chuyện với tên là email người nhận
controller.createConversation = ({
  title,
  receiver
}) => {
  if (title === '') {
    view.setErrorMessage('newTitle-error', 'Please fill in this field.');
  }else {
    view.setErrorMessage('newTitle-error', '');
  }
  if (receiver === ''){
    view.setErrorMessage('toEmail-error', 'Please fill in email receiver.');
  }else if (!validateEmail(receiver)) {
    view.setErrorMessage('toEmail-error', 'Invalid email.')
  }else {
    view.setErrorMessage('toEmail-error', '');
   }
  if (title !== '' && receiver !== '' && validateEmail(receiver)) {
    // create a new document on firebase ~~ a conversation
    model.createNewConversation({
      title,
      receiver
    });
  }
}

//thêm  người chat
controller.addUserToConversation = (mail) => {
  if (mail === '')
     view.setErrorMessage('friendEmail-error', 'Please fill in field.');
  else if (!validateEmail(mail))
     view.setErrorMessage('friendEmail-error', 'Invalid email.');
  else
     view.setErrorMessage('toEmail-error', '');

  if (mail !== '') {
     model.addNewUserToConversation(mail);
  }
} 

//check xem nó có chuẩn là email
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}