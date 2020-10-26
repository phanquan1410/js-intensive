const view = {}
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case 'welcomeScreen':
      document.getElementById('app').innerHTML = components.welcomPage
      break
    case 'registerPage':
      document.getElementById('app').innerHTML = components.registerPage
      document.getElementById('redirect-login')
        .addEventListener('click', () => {
          view.setActiveScreen('loginPage')
        })
      const registerForm = document.getElementById('register-form')
      registerForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const dataRegister = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        }
        controller.register(dataRegister)
      })
      break
    case 'loginPage':
      document.getElementById('app').innerHTML = components.loginPage
      document.getElementById('redirect-register')
        .addEventListener('click', () => {
          view.setActiveScreen('registerPage')
        })
      const loginForm = document.getElementById('login-form')
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const dataToLogin = {
          email: loginForm.email.value,
          password: loginForm.password.value
        }
        controller.login(dataToLogin)
      })
      break
    case 'chatPage':
      document.getElementById('app').innerHTML = components.chatPage
      const sendMessageForm = document.getElementById('send-message-form')
      sendMessageForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const message = sendMessageForm.message.value
        const messageSend = {
          owner: model.currentUser.email,
          content: message,
          createdAt: new Date().toISOString()
        }
        //add sent message to firestore
        if (message.trim() !== '') {
          model.addMessage(messageSend)
          sendMessageForm.message.value = ''
        }
      })
      // lay cac cuoc hoi thoai ve
      model.getConversations()
      // lang nghe thay doi cua cac cuoc hoi thoai
      model.listenConversationChange()    
      // action to create new conversation page
      let toCreateConversation = document.getElementById("createConversation");
      toCreateConversation.addEventListener("click", () => {
        view.setActiveScreen("newConversationPage");
      });
      break;
      //thêm cuộc trò chuyện

    case 'newConversationPage':
      document.getElementById('app').innerHTML = components.newConversationPage;
      let cancelCreation = document.getElementById("cancelCreation");
      cancelCreation.addEventListener("click", () => {
        view.setActiveScreen("chatPage");
      });
      const createConversationForm = document.getElementById("new-conversation-form");
      createConversationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let dataNewConversation = {
          title: createConversationForm.newConversationTitle.value.trim(),
          receiver: createConversationForm.toEmail.value.trim()
        };

        console.log(dataNewConversation);
        controller.createConversation(dataNewConversation);

        // reset input field on site
        createConversationForm.newConversationTitle.value = '';
        createConversationForm.toEmail.value = '';
      });
      break;
  }
}
view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message
}
view.addMessage = (message) => {
  const messageWrapper = document.createElement('div')
  messageWrapper.classList.add('message')
  if (model.currentUser.email === message.owner) {
    messageWrapper.classList.add('message-mine')
    messageWrapper.innerHTML = `
    <div class="message-content">${message.content}</div>
    `
  } else {
    messageWrapper.classList.add('message-other')
    messageWrapper.innerHTML = `
    <div class="owner">${message.owner}</div>
    <div class="message-content">${message.content}</div>
    `
  }
  document.querySelector('.list-messages').appendChild(messageWrapper)
}
// <div class="message message-mine "> 
//    <div class="message-content">ahihi</div>
// </div>

view.showCurrentConversation = () => {
  document.querySelector('.list-messages').innerHTML = ''
  document.querySelector('.conversation-title').innerHTML = model.currentConversation.title
  for (const oneMessage of model.currentConversation.messages) {
    view.addMessage(oneMessage)
  }
  view.scrollToEndElm()
}

view.showListConversation = () => {
  console.log(model.conversations)
  for (const conversation of model.conversations) {
    view.addConversation(conversation)
  }
}

view.addConversation = (conversation) => {
  //them the div
  const conversationWrapper = document.createElement('div')
  //theem class
  conversationWrapper.classList.add('conversation')
  if (conversation.id === model.currentConversation.id) {
    conversationWrapper.classList.add('current')
  }
  //sua innerHtml
  conversationWrapper.innerHTML =
    `
  <div class="left-conversation-title" >${conversation.title}</div>
  <div class="num-of-user">${conversation.users.length} users</div>
  `
  //them lentren giao dien
  document.querySelector('.list-conversations')
    .appendChild(conversationWrapper)
  // console.log(conversationWrapper);
  conversationWrapper.addEventListener('click', () => {
    //xoa current class cu
    const current = document.querySelector('.current')
    current.classList.remove('current')
    //them current vao vi tri duoc click
    conversationWrapper.classList.add('current')
    //show conversation duoc click len man hinh
    console.log(conversation.id);
    for (const elm of model.conversations) {
      if (elm.id === conversation.id) {
        model.currentConversation = elm
        view.showCurrentConversation()
      }
    }
  })
}
//cuộn xuống dưới cùng của list message
view.scrollToEndElm = () => {
  const elm = document.querySelector('.list-messages')
  elm.scrollTop = elm.scrollHeight
}