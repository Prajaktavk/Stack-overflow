import React from 'react'
import { useParams,Link,useNavigate, useLocation } from 'react-router-dom'
import upvote from '../../assets/sort-up.svg'
import { useSelector, useDispatch} from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import downvote from '../../assets/sort-down.svg'
import Avatar from '../../components/Avatar/Avatar'
import './QuestionsDetails.css'
import DisplayAnswer from './DisplayAnswer'
import { useState } from 'react'
import { postAnswer , deleteQuestion,voteQuestion } from '../../actions/question'

const QuestionsDetails = () => {

    const{id} = useParams()
    const questionsList = useSelector(state=>state.questionsReducer)

    // var questionsList=[{
    //     _id: '1',
    //     upVotes:3,
    //     downVotes: 2,
    //     noOfAnswers: 2,
    //     questionTitle: "What is a function? ",
    //     questionBody:"It meant to be",
    //     questionTags:["java","node js","react js", "mongodb"],
    //     userPosted: "mano",
    //     userId:1,
    //     askedOn: "jan 1",
    //     answer:[{
    //       answerBody:"Answer",
    //       userAnswered:'Kumar',
    //       answeredOn: "jan 2",
    //       userId:2,
    
    //     }]
    //   },{
    //     _id: '2',
    //     upVotes:3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function? ",
    //     questionBody:"It meant to be",
    //     questionTags:["javascript","R","python"],
    //     userPosted: "mano",
    //     userId:1,
    //     askedOn: "jan 1",
    //     answer:[{
    //       answerBody:"Answer",
    //       userAnswered:'Kumar',
    //       answeredOn: "jan 2",
    //       userId:2,
    
    //     }]
    
    //   },{
    //     _id: '3',
    //     upVotes:3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function? ",
    //     questionBody:"It meant to be",
    //     questionTags:["javascript","R","python"],
    //     userPosted: "mano",
    //     userId:1,
    //     askedOn: "jan 1",
    //     answer:[{
    //       answerBody:"Answer",
    //       userAnswered:'Kumar',
    //       answeredOn: "jan 2",
    //       userId:2,
    
    //     }]
    // }]
   
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const [Answer,setAnswer] =useState('')

    const url = 'http://localhost:3000'

    const location= useLocation()
    console.log(location)
    
    
  
  const handlePostAns = (e, answerLength) =>{
      e.preventDefault()
      if(User === null){
          alert('Login or Signup to answer a question')
          Navigate('/Auth')
      }else{
          if(Answer === ''){
              alert('Enter an answer before submitting')
          } else{
              dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name,userId:User.result._id }))
          }
      }
  }

  const handleDelete = () => {
      
    dispatch(deleteQuestion(id, Navigate))
  }

  const handleShare = () => {
    copy(url+location.pathname)
    alert('Copied url : '+url+location.pathname)
}
const handleUpVote=()=>{
  dispatch(voteQuestion(id,'upVote',User.result._Id))

}
  
const handleDownVote=()=>{
  dispatch(voteQuestion(id,'downVote',User.result._Id))
  
}
  
    return (
        <div className='question-details-page'>
          
           {
            questionsList.data===null? 
            <h1>Loading...</h1>:
            <> 
                {
                  questionsList.data.filter(question => question._id === id).map(question=>(
                  // map will return the entire elements in array
                  // but filter return the entire elements in array with few specific values 
                  <div key = {question._id}>
                    {/*  */}
                      <section className='question-details-container'>
                          <h1>{question.questionTitle}</h1>
                        <div className='question-details-container-2'>
                             <div className="question-votes">
                                     <img src={upvote} alt='' width='18' onClick={handleUpVote}/>
                                     <p>{question.upVote.length - question.downVote.length}</p>
                                    <img src={downvote} alt='' width='18' onClick={handleDownVote}/>
                        </div>
                        <div style={{width:"100%"}}>
                            
                                <p className='question-body'>{question.questionBody}</p>
                                <div className='question-details-tags'>
                                  {
                                     
                                       question.questionTags.map((tag) => (
                                          <p key={tag}>{tag}</p>
                                      ))
                                    
                                  }
                                </div>
                                  <div className="question-actions-user">
                                    <div>
                                    <button type='button' onClick={handleShare}>Share</button>
                                    {
                                      User?.result?._id === question?.userId && (
                                      <button type='button' onClick={handleDelete}>Delete</button>
                                      )
                                    }


                                    
                                    </div>
                                    <div>
                                    <p>asked {moment(question.askedOn).fromNow()}</p>
                                        {/* moment is used to calculate the time */}
                                        <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                           <Avatar backgroundColor="orange" px='8px' py='5px'>
                                                {/* userPosted is the variable whose value's first character is made to upper case  */}
                                                {question.userPosted.charAt(0).toUpperCase()}
                                            </Avatar>
                                             <div>
                                                 {question.userPosted}
                                              </div>
                                        </Link>
                                    </div>
                                  

                                </div>
                          

                          </div>
                        </div>

                      </section>
                    {
                      question.noOfAnswers!==0 &&(
                        <section>
                          <h3>{question.noOfAnswers} Answers</h3>
                          <DisplayAnswer key={question._id} question={question}handleShare={handleShare}/>
                        </section>
                      )

                    }
                    <section className='post-ans-container'>
                    <h3>Your Answer</h3>
                    <form onSubmit={ (e) => { handlePostAns (e, question.answer.length) }}>
                    <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea><br />
                      <input type="submit" className='post-ans-btn' value='Post Your Answer'/>
                    </form>
                    <p>
                      Browse other Question tagged 
                      {
                        question.questionTags.map((tag)=>(
                          <Link to="/Tags" key={tag} className='ans-tags'>{tag}</Link>
                        ))
                      } or {
                        <Link to='/AskQuestion' style={{textDecoration:"none",color:"#009dff"}}>ask your own question</Link>

                      }
                    </p>

                    </section>
                  </div>

                  ))

                }

            </>


           }
        </div>
    )
}

export default QuestionsDetails
