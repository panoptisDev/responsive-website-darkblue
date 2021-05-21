import React,{Component} from 'react'

class Form  extends Component {
      constructor(props) {
          super(props);
          this.state = {
              name: '' ,
              email: '' ,
              subject: '' ,
              textarea: '' 
          }
      }
      handlerName = event => {
          this.setState({
              name:event.target.value
          })
      }
      handlerEmail = event => {
        this.setState({
            email:event.target.value
        })
      }
      handlerProject = event => {
          this.setState({
              subject:event.target.value
          })
      }
      handlerText = event =>{
          this.setState({
              textarea:event.target.value
          })
      }
      handlerSubmit = event => {
          alert(`${this.state.name} ${this.state.email} ${this.state.subject} ${this.state.textarea}`)
      }
    
      
      render() {
        return (
            <div className='form'>
                <div className='container'>
                    <div className='form-sub clearfix'>
                            <form id='urform' onSubmit={this.handlerSubmit}>
                                <input type='text' placeholder='Enter your name' className='name'
                                    value={this.state.name} onChange={this.handlerName} />
                                <input type='email' placeholder='Enter your Email'  className='email'
                                    value={this.state.email} onChange={this.handlerEmail} />
                                <input type='text' placeholder='Subject' value={this.state.subject} className='subject'
                                    onChange={this.handlerProject} />
                                <textarea value={this.state.textarea} row='4'  id='urform' className='message-form'
                                    onChange={this.handlerText} >Enter your message</textarea>
                                <button type='submit' className='submit' >button</button>
                            </form>
                    </div>
                </div>
                
            </div>
        )
     }
}

export default Form
