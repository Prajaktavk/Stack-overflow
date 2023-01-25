import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UsersProfile.css'

const UserProfile = () => {

    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    //we can get the specific id on the profile after clicking on the profile of the user
    const currentProfile = users.filter((user) => user._id === id)[0]
    


    //currentuser this is used to identify the current user which we logined in with and the we are clicking 
    const currentUser = useSelector((state) => state.currentUserReducer)
    const [Switch, setSwitch] = useState(false)
    //

    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className="home-container-1">
                <section>
                    <div className="user-details-container">
                        <div className='user-details'>
                            <Avatar backgroundColor="purple" color='white' fontSize='50px' px='40px' py='30px'>
                                {currentProfile?.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className="user-name">
                                <h1>{currentProfile?.name}</h1>
                                <p><FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                            </div>
                        </div>
                        { 
                        // if the currentuser id matches the id present in the database then only the user can be able to the edit profile button  
                            currentUser?.result._id === id && (
                                //this will be set to true if the button is displayed then clicking on the button we can edit the profile
                                <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                                    <FontAwesomeIcon icon={faPen} /> Edit Profile
                                </button>
                            ) 
                        }
                    </div>
                    <>
                        { 
                            Switch ? (
                                /* the setswitch will is passed if user does cancel then the setswitch is set to false */
                                <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                            ) : (
                                <ProfileBio currentProfile={currentProfile}/>
                            )
                        }
                    </>
                </section>
            </div>
        </div>
    )
}

export default UserProfile