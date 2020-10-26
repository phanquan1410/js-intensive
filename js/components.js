const components = {}
components.welcomPage = `
<h3>Hello world</h3>
`
components.registerPage = `
<div class="register-container">
<div class="background-img"></div>
<div class="form-wrapper">
  <div class="register-header">MindX Chat</div>
  <form id="register-form">
    <div class="name-wrapper">
      <div class="input-wrapper">
        <input type="text" placeholder="First name" name="firstName">
        <div id="first-name-error" class="err"></div>
      </div>
      <div class="input-wrapper">
        <input type="text" placeholder="Last name" name="lastName">
        <div id="last-name-error" class="err"></div>
      </div>
    </div>
    <div class="input-wrapper">
      <input type="email" placeholder="Email" name="email">
      <div id="email-error" class="err"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" placeholder="Password" name="password">
      <div id="password-error" class="err"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" placeholder="Confirm password" name="confirmPassword">
      <div id="confirm-password-error" class="err"></div>
    </div>
    <div class="register-form-action">
      <div>
        Already have an account?<span class="cursor-pointer" id="redirect-login">Login</span>
      </div>
      <button class="btn" type="submit">Register</button>
    </div>
  </form>
</div>
</div>
`
components.loginPage = `
<div class="login-container">
<div class="background-img"></div>
<div class="form-wrapper">
  <div class="login-header">MindX Chat</div>
  <form id="login-form">
    <div class="input-wrapper">
      <input type="email" placeholder="Email" name="email">
      <div id="email-error" class="err"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" placeholder="Password" name="password">
      <div id="password-error" class="err"></div>
    </div>
    <div class="login-form-action">
      <div>
        Don't have account?<span id="redirect-register" class="cursor-pointer">Register</span>
      </div>
      <button class="btn" type="submit">Login</button>
    </div>
  </form>
</div>
</div>
`
components.chatPage =
`<div class="chat-container">
<div class="header">MindX chat</div>
<div class="main">
  <div class="aside-left">
    <div class="create-conversation">
      <button class="btn add-conversation pointer" id="createConversation">+ New conversation</button>
    </div>
    <div class="list-conversations">
    </div>
  </div>
  <div class="conversation-detail">
    <div class="conversation-title" id="conversation-title">First conversation</div>
    <div class="list-messages">
      <div class="message message-mine"></div>
      <div class="message message-other"></div>
    </div>
    <form id="send-message-form">
      <input type="text" placeholder="Type a message" name="message">
      <button class="btn">Send</button>
    </form>
  </div>
</div>
</div>`


components.newConversationPage = `
<div class="chat-container">
    <div class="header">MindX chat</div>
    <div class="main">
      <div class="new-conversation">
        <h4 class="new-conversation-title">Create a new conversation</h4>
        <form id="new-conversation-form">
          <div class="new-infor">
            <div class="input-wrapper">
              <input type="text" name="newConversationTitle" id="newConversationTitle"
                placeholder="Conversation name" />
              <span id="newTitle-error" class="error" style="display: block;"></span>
            </div>
            <div class="input-wrapper">
              <input type="email" name="toEmail" id="toEmail" placeholder="To Friend Email" />
              <span id="toEmail-error" class="error" style="display: block;"></span>
            </div>
          </div>
          <div class="form-action-btn">
            <button type="submit" class="btn">Save</button>
            <button class="btn btn-cancel" id="cancelCreation">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>`