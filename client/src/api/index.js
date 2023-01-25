import axios from 'axios'
/*   Axios allows us to communicate with APIs easily in our React apps. 
Though this can also be achieved by other methods like fetch or AJAX, Axios can provide a little more functionality
 that goes a long way with applications that use React. Axios is a promise-based library used with Node.
 */
const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        //the data is present in the body but there is headers in request  we modify to increase the security
        // the token is send to the database to check if the token is valid or not to allow to  execute the action
       // for eg if we want to execute the post question action then the user will send the token if the token is valid 
       // then action will be executed

        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})
export const logIn = (authData) => API.post('/user/login', authData);
//authdata pass to the backend 
//authdata is nothing but the  name, email and password which is send to redux
export const signUp = (authData) => API.post('/user/signup', authData);
export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`) 
export const voteQuestion = (id, value ) => API.patch(`/questions/vote/${id}`, { value })

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered ) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered })
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers})

export const getAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)